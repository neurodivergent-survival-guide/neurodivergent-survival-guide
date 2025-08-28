# Neurodivergent Survival Guide

A Jekyll-based resource providing practical, evidence-based support for daily struggles faced by neurodivergent individuals. Built with authentic lived experience and clinical neutrality.

## Project Overview

This site provides detailed guidance for 85+ specific struggles across autism, ADHD, bipolar disorder, borderline personality disorder, and OCD. Each struggle page follows a consistent framework: what it feels like, why it happens, immediate help strategies, long-term solutions, medical intervention guidelines, and validation.

## Key Features

- **Mobile-first responsive design** with touch-friendly navigation
- **Extensive jargon tooltips** (15-20 per page minimum) for accessibility
- **Condition-aware color theming** that adapts to each neurodivergent condition
- **Progressive disclosure** with expandable "Learn More" sections
- **Liberal cross-linking** between related struggles and concepts

## Technical Stack

- **Jekyll** static site generator
- **Liquid templating** for dynamic navigation and color theming
- **Custom CSS** with condition-specific color variables
- **YAML data files** for content organization and navigation

## Content Standards

- **5th grade reading level** while respecting reader intelligence
- **Clinically neutral language** avoiding both pathologizing terms and toxic positivity
- **Conservative intervention advice** with clear professional referral guidance
- **Individual variation acknowledgment** throughout all content

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at the local web address shown in your terminal.

## Project Structure

```
├── _data/
│   ├── struggles.yml      # All struggle pages with metadata
│   ├── conditions.yml     # Condition navigation data  
│   └── condition_colors.yml # Color themes by condition
├── _layouts/
│   ├── default.html
│   ├── struggle.html      # Template for struggle pages
│   └── condition.html     # Template for condition pages
├── conditions/           # 5 condition overview pages
├── struggles/           # 85+ individual struggle pages
└── assets/             # Stylesheets and scripts
```

## Contributing

This resource prioritizes lived neurodivergent experience and clinical accuracy. New content should follow established content standards and technical implementation guidelines.

## Content Framework

Each struggle page includes:
- **What This Feels Like** - Phenomenological description
- **Why This Might Be Happening** - Mechanisms without excessive technical detail
- **What Can Help You Through the Next 5 Minutes** - Immediate interventions
- **What Are Some Healthy Long-Term Solutions** - Sustainable approaches
- **When Should I Consider Medical Intervention** - Clear red flags
- **You're Not Imagining This** - Validation and normalization
- **Related Struggles** - Cross-links to related struggles

## Voice and Tone

- **Authentic but not presumptuous** - Written from lived experience without assuming universal applicability
- **Validating without enabling** - Affirms real struggles while encouraging active coping
- **Accessible without condescension** - Explains jargon while respecting intelligence
- **Hopeful realism** - Acknowledges challenges while emphasizing that strategies can improve quality of life
