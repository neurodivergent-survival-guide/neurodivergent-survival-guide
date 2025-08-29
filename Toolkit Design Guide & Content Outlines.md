# Toolkit Design Guide & Content Outlines

## TOOLKIT DESIGN SPECIFICATIONS (MANDATORY)

### Visual Identity Standards
**Background gradient:** `background: linear-gradient(135deg, #6c7b95 0%, #4a5568 100%);` (cool blue-grey professional palette)
**Target audience tone:** Strategic legal consultation, not emotional support
**Typography:** Professional weight (400 for headers, 500 for body), clean sans-serif stack

### Five-Section Color System (RAINBOW SPECTRUM ORDER)
1. **System Overview - Red** `#e74c3c` (background: `#fef2f2`, heading: `#c0392b`, text: `#7f1d1d`)
2. **Strategic Preparation - Yellow** `#f1c40f` (background: `#fefbea`, heading: `#f39c12`, text: `#8b7355`)  
3. **Implementation Process - Blue** `#3498db` (background: `#ebf3fd`, heading: `#2980b9`, text: `#34495e`)
4. **Common Obstacles - Green** `#27ae60` (background: `#eafaf1`, heading: `#229954`, text: `#2d5016`)
5. **Resources & Templates - Purple** `#9b59b6` (background: `#f4f1ff`, heading: `#8e44ad`, text: `#4a5568`)

### Complementary Accent System (for highlight boxes)
- **Red section** → **Green** accents (`#27ae60`)
- **Yellow section** → **Purple** accents (`#9b59b6`)  
- **Blue section** → **Orange** accents (`#e67e22`)
- **Green section** → **Red** accents (`#e74c3c`)
- **Purple section** → **Yellow** accents (`#f1c40f`)

### Typography Hierarchy
**H1 (Header):** 2.5rem, weight 400, white on gradient background
**H2 (Section headers):** 1.6rem, weight 600, section primary color
**H3 (Subsection headers):** 1.2rem, weight 600, matches section h2 color
**Body text:** 1.05rem, weight 500, subtle shade of section color
**Professional jargon:** `#2c3e50` with blue hover `#3498db`

### Content Structure Framework (MANDATORY ORDER)
**Section 1: System Overview**
- Legal/regulatory framework that governs this domain
- Employee/individual rights and protections  
- System obligations and requirements
- Qualification criteria or eligibility
- Key insight highlight box with complementary accent

**Section 2: Strategic Preparation** 
- Situational assessment and documentation requirements
- Timing and stakeholder considerations
- Research and planning steps
- Cultural/environmental factors to evaluate
- Success factor highlight box

**Section 3: Implementation Process**
- Step-by-step procedural guidance
- Phase-by-phase breakdown with concrete actions
- Communication templates and professional scripts
- Timeline expectations and milestones
- Professional strategy highlight box

**Section 4: Common Obstacles**
- Predictable challenges and institutional resistance
- Response strategies for specific pushback
- Realistic expectations about system limitations
- Documentation and evidence-gathering emphasis
- Critical warning box about protecting yourself

**Section 5: Resources & Templates**
- Documentation checklists (clean checkbox format, no bullets)
- Practical tools and templates
- External support organizations (universal, not location-specific)
- Professional development resources
- Success tracking and measurement guidance

### Special Element Specifications
**Script boxes:** Light blue background `#f0f8ff`, serif font, italic styling for template letters/emails
**Warning boxes:** Light red background `#ffe6e6`, red accent border `#e74c3c`
**Success boxes:** Light green background `#e8f5e8`, green accent border `#27ae60`
**Highlight boxes:** Light yellow background `#fff8dc`, yellow accent border `#f39c12`

### Jargon Implementation (Professional Context)
**Professional jargon styling:** `#2c3e50` with `#3498db` hover, consistent across all sections
**Tooltip positioning:** Same mobile-responsive system as struggle pages
**Target density:** 15+ professional/legal terms per toolkit (CRITICAL - NOT OPTIONAL)
**Tooltip tone:** Formal definitions focused on legal/procedural clarity

### Jargon Consistency Rules (MANDATORY)
**Never double-explain:** Use jargon tooltip OR parenthetical/clause explanation, never both. If you provide a tooltip definition, do not also explain the term in the sentence.
**Consistent application:** Once a term is marked as jargon anywhere in the toolkit, it should be jargon every time it appears. Terms like "functional limitations," "reasonable accommodation," "interactive process" must be consistently marked throughout.
**Professional precision:** Focus on terms with concrete legal, regulatory, or procedural definitions rather than general concepts.

### Jargon Focus for Toolkits (MANDATORY HIGH DENSITY)
**Legal terminology:** Terms with specific legal definitions (reasonable accommodation, undue hardship, interactive process, retaliation, essential functions)
**Regulatory language:** System-specific procedural terms (IEP, 504 plan, FMLA, appeals process, authorization)
**Professional terminology:** Business and institutional language with precise meanings (stakeholder analysis, documentation chain, non-repudiation, compliance requirements)
**Technical procedures:** Step-by-step process terminology (functional capacity evaluation, grievance procedures, administrative review)
**Protective concepts:** Rights and safeguard terminology that people need to understand precisely (confidentiality protections, due process, burden of proof)
**NT CODE-SWITCHING TERMS (CRITICAL):** Neurotypical institutional language that sounds neutral but carries specific implications confusing to ND people. Examples: "performance concerns" (vague criticisms used to justify adverse actions), "culture fit" (subjective rejection often masking bias), "team player" (expectation to suppress individual needs), "flexible mindset" (willingness to accept changing/unclear expectations). These terms bridge communication gaps and decode NT professional language.

**PERFECT JARGON EXAMPLE:** "performance concerns" - This NT corporate term sounds neutral but specifically means "vague criticisms that may be used to justify adverse employment actions." This decodes confusing NT language without patronizing, helping ND people understand the real implications of seemingly innocent professional terminology.

**CRITICAL:** Toolkits must include extensive jargon coverage of technical, legal, and procedural terms, plus NT code-switching language that specifically confounds ND people. Liberal jargon policy for all technical language and institutional NT-speak - when in doubt, add a tooltip for professional terminology or NT communication patterns.

### Jekyll Requirements
```yaml
---
layout: toolkit
title: "[Toolkit Name]"
slug: [URL-friendly-name]
---
```
**File naming:** `/toolkits/[toolkit-name].html`
**Navigation:** Breadcrumb includes Home > Toolkits > [Specific Toolkit]

---

## TOOLKIT CONTENT OUTLINES

### 1. Educational Accommodation Toolkit `/toolkits/educational-accommodations.html`

**System Overview (Red):**
- IDEA, Section 504, and ADA protections in educational settings
- Rights for K-12, higher education, and professional programs
- IEP vs 504 Plan distinctions and eligibility criteria
- Parent rights vs adult student rights

**Strategic Preparation (Yellow):**
- Medical and psychoeducational evaluation documentation
- School assessment of current challenges and needed supports  
- Research effective accommodations for your specific needs
- Understanding school culture and special education capacity

**Implementation Process (Blue):**
- Initial referral and evaluation request procedures
- IEP/504 meeting preparation and participation strategies
- Documentation requirements and timeline expectations
- Appeal and dispute resolution processes

**Common Obstacles (Green):**
- School budget and resource limitations
- Resistance to "expensive" accommodations
- Staff knowledge gaps about disability law
- Inadequate initial accommodation offers
- Parent advocacy vs school system institutional interests

**Resources & Templates (Purple):**
- Request letter templates for evaluations and services
- IEP/504 meeting preparation checklists
- State special education agencies and advocacy organizations
- Legal resources for education disputes

### 2. Healthcare Advocacy Toolkit `/toolkits/healthcare-advocacy.html`

**System Overview (Red):**
- Patient rights in medical settings
- Insurance coverage requirements for neurodevelopmental evaluations
- Provider obligations for reasonable accommodations in healthcare
- Documentation and record access rights

**Strategic Preparation (Yellow):**
- Research providers with neurodivergent experience
- Prepare comprehensive symptom and history documentation
- Insurance authorization and referral navigation
- Cultural competency assessment of potential providers

**Implementation Process (Blue):**
- Initial appointment preparation and advocacy strategies
- Communication techniques for working with resistant providers
- Getting comprehensive evaluations vs limited assessments
- Follow-up care coordination and treatment access

**Common Obstacles (Green):**
- Provider bias and dismissive attitudes toward ADHD/autism
- Insurance coverage denials and limitations  
- Long wait times for specialists
- Inadequate evaluation procedures or missed diagnoses
- Gender, racial, or age-based diagnostic bias

**Resources & Templates (Purple):**
- Provider research and vetting checklists
- Insurance appeal letter templates
- Patient advocacy organizations and support networks
- Medical record organization systems

### 3. ADHD/Autism Evaluation Preparation Toolkit `/toolkits/evaluation-preparation.html`

**System Overview (Red):**
- Types of evaluations: psychological, neuropsychological, psychiatric
- What comprehensive evaluation should include
- Provider qualifications and specialization requirements
- Insurance coverage and self-pay considerations

**Strategic Preparation (Yellow):**
- Comprehensive history documentation and timeline preparation
- Symptom tracking and examples across life domains
- Collateral information gathering from family/partners
- School records and previous evaluation compilation

**Implementation Process (Blue):**
- Pre-evaluation appointment preparation
- During evaluation: maximizing accuracy and comprehensiveness
- Post-evaluation: understanding results and next steps
- Second opinion processes when needed

**Common Obstacles (Green):**
- Masking and compensation during evaluation appointments
- Provider unfamiliarity with adult presentations or female presentations
- Incomplete evaluations that miss co-occurring conditions
- Insurance authorization and coverage battles
- Long waiting lists for qualified specialists

**Resources & Templates (Purple):**
- Comprehensive intake preparation worksheets
- Provider qualification verification checklists
- Insurance authorization navigation guides
- Evaluation result interpretation resources

### 4. Financial Management for Executive Dysfunction Toolkit `/toolkits/financial-management.html`

**System Overview (Red):**
- How executive function differences impact financial management
- Banking and financial service accessibility requirements
- Consumer protections and rights relevant to disability
- Financial planning considerations for neurodivergent people

**Strategic Preparation (Yellow):**
- Financial assessment and goal setting with ADHD/autism considerations
- Bank and service provider selection for neurodivergent needs
- Technology tools and automation strategies
- Support system development for financial accountability

**Implementation Process (Blue):**
- Setting up ADHD-friendly banking and payment systems
- Automation and simplification strategies for routine financial tasks
- Emergency fund and financial safety net development
- Long-term planning adapted for executive function challenges

**Common Obstacles (Green):**
- Impulse spending and emotional financial decisions
- Overwhelm from financial paperwork and planning
- Difficulty maintaining consistent financial habits
- Time blindness impacts on bill paying and deadline management
- Complex financial products that don't work with ADHD brains

**Resources & Templates (Purple):**
- Financial tracking systems designed for executive dysfunction
- Bank account and payment automation setup guides
- Budget templates that work with ADHD variability
- Financial advocacy and consumer protection resources

### 5. Crisis and Recovery Planning Toolkit `/toolkits/crisis-recovery-planning.html`

**System Overview (Red):**
- Understanding neurodivergent burnout vs depression vs temporary overwhelm
- Crisis intervention resources and emergency planning
- Legal protections during mental health crises
- Family Medical Leave Act (FMLA) and disability leave options

**Strategic Preparation (Yellow):**
- Creating personalized crisis recognition and intervention plans
- Building support networks and emergency contact systems
- Documentation for potential workplace or academic leave needs
- Financial and practical preparation for potential function disruption

**Implementation Process (Blue):**
- Early intervention strategies when recognizing crisis development
- Accessing immediate support and professional crisis resources
- Workplace communication about temporary accommodation needs
- Recovery timeline planning and graduated return strategies

**Common Obstacles (Green):**
- Minimizing or missing early warning signs of burnout
- Stigma around taking mental health leave or seeking crisis support
- Inadequate workplace understanding of neurodivergent burnout patterns
- Insurance and provider limitations for intensive support
- Family and social relationship strain during crisis and recovery

**Resources & Templates (Purple):**
- Personal crisis plan templates and emergency contact systems
- Workplace communication scripts for mental health accommodation
- Professional crisis intervention and intensive support resources
- Recovery planning checklists and graduated re-engagement strategies

---

## CONTENT TONE AND VOICE STANDARDS (MANDATORY)

### Professional Strategic Voice
- **NOT:** Emotional validation or therapy-like language
- **YES:** Legal consultation and strategic business guidance
- **Frame as:** System navigation, bureaucratic strategy, professional advocacy

### Evidence and Authority Standards
- Reference specific laws, regulations, and legal protections
- Cite established organizations and official resources
- Avoid therapeutic or self-help language
- Focus on measurable outcomes and business benefits

### Communication Template Standards  
- All email templates use professional business language
- Focus on productivity and business value, not personal needs
- Include specific subject lines and formal structures
- Emphasize collaborative problem-solving approach

### Documentation Emphasis (CRITICAL)
- Every toolkit must stress paper trail creation
- Force important communications through email channels
- Provide follow-up email templates for meeting confirmations
- Explain non-repudiation and legal evidence requirements

### Mobile and Accessibility Requirements
- 44px minimum touch targets for professional environments
- Same responsive tooltip system as struggle pages
- Professional focus states and hover effects
- Clean checklist formatting (checkbox symbols only, no bullets)

This design guide ensures all 5 toolkits maintain consistent professional presentation while covering their distinct system navigation challenges.
