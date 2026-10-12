# `.github` Directory: Agentic Framework for IBS & GERTS Performance Protocol

This directory contains the complete agentic framework for guiding AI agents (GitHub Copilot, local LLMs, or other tools) to act as expert frontend engineers maintaining this static, clinical health-tech website.

## Directory Structure

```
.github/
├── README.md                          # This file
├── copilot-instructions.md            # Core architectural and style principles
├── AGENTS.md                          # Custom agent definitions with specializations
└── skills/
    ├── ui-component-generator.md      # Skill: Rapid component generation
    ├── accessibility-audit.md         # Skill: Deep a11y auditing and remediation
    └── css-architecture.md            # Skill: CSS system design and tokens
```

---

## Quick Start

### 1. **Understand the Core Principles**
Read [copilot-instructions.md](copilot-instructions.md) first. This file establishes:
- Separation of concerns (HTML, CSS, JS)
- Semantic HTML5 and accessibility standards (WCAG AA)
- CSS best practices (custom properties, mobile-first, BEM)
- Vanilla JavaScript philosophy
- Clinical UX/trust-building design

### 2. **Invoke Specialized Agents**
Refer to [AGENTS.md](AGENTS.md) to understand available agents:
- **Frontend Architect**: Strategic guidance on architecture and optimization
- **UI Component Generator**: Rapid production-ready component creation
- **Accessibility Auditor**: Deep a11y compliance verification
- **CSS Architecture Specialist**: CSS system design and tokens

### 3. **Use Skills for Specific Tasks**
The `skills/` folder contains detailed, executable guidance:

#### For Component Creation
See [skills/ui-component-generator.md](skills/ui-component-generator.md):
- Semantic HTML5 structure
- Mobile-first CSS with BEM naming
- Progressive JS enhancement
- Full accessibility compliance
- Clinical color palettes and typography

#### For Accessibility Audits
See [skills/accessibility-audit.md](skills/accessibility-audit.md):
- WCAG 2.1 AA checklist
- Keyboard navigation testing procedures
- Color contrast verification
- Screen reader compatibility testing
- Trust signal validation (clinical-specific)

#### For CSS Architecture
See [skills/css-architecture.md](skills/css-architecture.md):
- Design tokens system (colors, typography, spacing, shadows)
- CSS custom properties patterns
- Mobile-first responsive strategy
- BEM methodology guidelines
- Performance optimization techniques

---

## How to Use This Framework

### Scenario 1: Creating a New Component

```
You: "I need to create a testimonial card component. Use @UI Component Generator"

Agent (UI Component Generator):
1. Reviews [skills/ui-component-generator.md](skills/ui-component-generator.md)
2. Provides semantic HTML5 structure
3. Includes mobile-first CSS with BEM naming
4. Adds minimal vanilla JS for interactivity
5. Ensures WCAG AA a11y compliance
6. Uses clinical color palette
7. Includes usage documentation
```

### Scenario 2: Auditing a Page for Accessibility

```
You: "Audit this page for a11y compliance. Use @Accessibility Auditor"

Agent (Accessibility Auditor):
1. Reviews [skills/accessibility-audit.md](skills/accessibility-audit.md)
2. Tests semantic HTML and heading hierarchy
3. Verifies keyboard navigation (Tab, Arrow keys, Escape)
4. Checks color contrast (WCAG AA: 4.5:1 text, 3:1 large text)
5. Validates form labels and error messages
6. Tests screen reader compatibility
7. Verifies trust signals (privacy, contact, credentials)
8. Provides specific, actionable remediation
```

### Scenario 3: Designing CSS Architecture

```
You: "Design the CSS variable system for the entire site. Use @CSS Architecture Specialist"

Agent (CSS Architecture Specialist):
1. Reviews [skills/css-architecture.md](skills/css-architecture.md)
2. Defines color palette (clinical aesthetics)
3. Creates typography scale (readable, ≥16px body)
4. Establishes spacing scale (consistent rhythm)
5. Designs shadow elevation system (subtle depth)
6. Implements transition/timing values
7. Provides BEM naming conventions
8. Outputs complete root CSS custom properties
```

### Scenario 4: General Frontend Development

```
You: "Build a responsive contact form with proper validation"

Agent (Default Frontend Engineer):
1. Applies all principles from [copilot-instructions.md](copilot-instructions.md)
2. Uses semantic HTML5 (proper `<form>`, `<label>`, `<input>`)
3. Styles with CSS custom properties and BEM
4. Implements vanilla JS for validation
5. Ensures WCAG AA accessibility
6. Tests on mobile, tablet, desktop
7. Follows clinical UX principles
```

---

## Key Principles Enforced

### Separation of Concerns
- **HTML**: Structure only, semantic tags
- **CSS**: All styling, animations, responsive layouts
- **JavaScript**: Progressive enhancement, interactivity only

### Accessibility-First (WCAG AA)
- Semantic HTML5 with proper headings, landmarks
- Keyboard navigation fully supported
- Color contrast ≥ 4.5:1 (text), ≥ 3:1 (large text)
- Touch targets ≥ 44×44 CSS pixels
- Form labels explicitly associated

### Clinical Trustworthiness
- Clear, jargon-free copy
- Consistent visual patterns
- Prominent contact/support options
- No deceptive dark patterns
- Transparent data handling

### Performance & Standards
- CSS custom properties for maintainability
- Mobile-first responsive design
- Vanilla JavaScript (no heavy frameworks)
- Minimal DOM manipulation
- Optimized images and assets

---

## Usage Examples

### Adding a New Button Variant

```
You: "Create a secondary button variant with icon support. Follow UI Component Generator."

Agent Output:
✅ Semantic HTML with <button> and icon <span>
✅ CSS: .button, .button--secondary, .button__icon
✅ Minimal JS for icon loading (if async)
✅ WCAG AA: Keyboard, contrast, focus state
✅ Clinical aesthetic: Soft shadow, smooth transition
```

### Improving Form Accessibility

```
You: "This form has accessibility issues. Run Accessibility Auditor."

Agent Output:
❌ Form fields missing <label> elements → FIX: Add explicit labels
❌ Error messages not associated → FIX: Use aria-describedby
❌ Focus indicator invisible → FIX: Add outline with offset
❌ Contrast 3.2:1 (fail WCAG AA) → FIX: Darken text color
✅ Provides exact HTML/CSS patches
```

### Establishing Design Tokens

```
You: "Set up the complete CSS variable system. Use CSS Architecture Specialist."

Agent Output:
:root {
  --color-primary: #2563eb;
  --color-clinical: #0f766e;
  --font-size-base: 1rem;
  --spacing-md: 1rem;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --transition-normal: all 200ms ease-in-out;
  /* ... complete palette ... */
}
```

---

## Extending This Framework

### Adding a New Skill

1. Create a file in `skills/` with YAML frontmatter:
   ```yaml
   ---
   title: "Skill Name"
   description: "Purpose of this skill"
   applyTo: "**/pattern*"
   model: "Claude Haiku 4.5"
   ---
   ```

2. Provide detailed, actionable guidance (templates, examples, checklists).

3. Reference related documentation and other skills.

4. Update this README with the new skill.

### Adding a New Agent

1. Update [AGENTS.md](AGENTS.md) with:
   - Agent name and purpose
   - Expertise areas
   - Activation phrases
   - Constraints/guidelines
   - Example invocation

2. Reference in skill files if applicable.

---

## Standards & Compliance

### Web Standards
- **HTML**: WHATWG living standard, semantic elements
- **CSS**: CSS 3 with custom properties (IE 11 not supported, by design)
- **JavaScript**: ES6+, modern DOM APIs
- **Accessibility**: WCAG 2.1 Level AA

### Design Standards
- **Clinical Aesthetics**: Soft colors, readable typography, generous whitespace
- **Trust Signals**: Clear contact, transparent data handling, credentials
- **Performance**: Optimized images, deferred JS, efficient CSS

---

## Documentation Cross-Reference

- **Core Instructions**: [copilot-instructions.md](copilot-instructions.md)
- **Agent Definitions**: [AGENTS.md](AGENTS.md)
- **Component Generation**: [skills/ui-component-generator.md](skills/ui-component-generator.md)
- **Accessibility Auditing**: [skills/accessibility-audit.md](skills/accessibility-audit.md)
- **CSS Architecture**: [skills/css-architecture.md](skills/css-architecture.md)
- **Project Root**: See [../README.md](../README.md) for project overview

---

## Support & Updates

- **Last Updated**: 2026-10-11
- **Version**: 1.0
- **Framework Author**: Staff-level Frontend Architect & UX Engineer
- **For Questions**: Refer to referenced documentation or consult the [Frontend Architect](AGENTS.md#agent-frontend-architect) agent.

---

## Quick Reference: When to Use Each Agent

| Task | Agent | Primary Skill |
|------|-------|---------------|
| Build a new component | UI Component Generator | `ui-component-generator.md` |
| Audit a11y compliance | Accessibility Auditor | `accessibility-audit.md` |
| Design CSS system | CSS Architecture Specialist | `css-architecture.md` |
| Strategic guidance | Frontend Architect | `copilot-instructions.md` |
| General frontend work | Default Engineer | `copilot-instructions.md` |

---

**This framework ensures every contributor—human or AI—maintains expert-level frontend quality, accessibility, and clinical trustworthiness.**
