# _plugins/word_counter.rb
require 'nokogiri'

module Jekyll
  class WordCountGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Find all struggle pages
      struggle_pages = site.pages.select { |page| page.data['layout'] == 'struggle' }
      
      audit_data = struggle_pages.map do |page|
        # Get the rendered content (after Liquid processing)
        content = page.content
        
        # Parse HTML to extract sections
        doc = Nokogiri::HTML(content)
        
        # Count words in each section
        sections = {
          'what' => count_section_words(doc, '.what-section'),
          'why' => count_section_words(doc, '.why-section'), 
          'nextFive' => count_section_words(doc, '.immediate-help'),
          'longTerm' => count_section_words(doc, '.long-term'),
          'medical' => count_section_words(doc, '.medical-section'),
          'validation' => count_section_words(doc, '.validation-section')
        }
        
        total_words = sections.values.sum
        
        {
          'title' => page.data['title'],
          'slug' => page.data['slug'],
          'condition' => page.data['condition'],
          'status' => page.data['status'] || 'published',
          'url' => page.url,
          'sections' => sections,
          'total_words' => total_words,
          'on_target' => total_words >= 2150 && total_words <= 2550,
          'last_modified' => File.mtime(page.path).to_i
        }
      end
      
      # Sort by total word count (lowest first to highlight issues)
      audit_data.sort_by! { |article| article['total_words'] }
      
      # Save data for use in audit page
      site.data['content_audit'] = audit_data
      
      # Generate summary statistics
      site.data['audit_stats'] = {
        'total_articles' => audit_data.length,
        'average_words' => (audit_data.sum { |a| a['total_words'] } / audit_data.length.to_f).round,
        'on_target_count' => audit_data.count { |a| a['on_target'] },
        'under_target_count' => audit_data.count { |a| a['total_words'] < 2150 },
        'over_target_count' => audit_data.count { |a| a['total_words'] > 2550 },
        'draft_count' => audit_data.count { |a| a['status'] == 'draft' }
      }
    end

    private

    def count_section_words(doc, css_selector)
      section = doc.at_css(css_selector)
      return 0 unless section
      
      # Extract text content, excluding tooltip text and HTML
      text = section.css('.tooltip').remove.end.text
      
      # Clean up whitespace and count words
      text.strip.split(/\s+/).length
    rescue
      0
    end
  end
end
