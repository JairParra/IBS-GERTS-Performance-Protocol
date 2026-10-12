---
title: "UI Component Generator"
description: "Specialized skill for rapidly generating production-ready UI components with semantic HTML, CSS, and minimal vanilla JavaScript, tailored to clinical health-tech aesthetics."
applyTo: "**/component-generator*"
model: "Claude Haiku 4.5"
---

# UI Component Generator Skill

## Overview

This skill enables rapid generation of production-ready UI components specifically designed for clinical health-tech websites. Each component includes semantic HTML structure, mobile-first CSS with BEM naming, minimal vanilla JavaScript, and full accessibility compliance.

## Core Responsibilities

1. **Semantic HTML5 Structure**
   - Use proper semantic tags (`<button>`, `<nav>`, `<form>`, `<label>`, etc.)
   - Logical heading hierarchy (`<h1>` → `<h2>` → `<h3>`)
   - Explicit `<label>` associations for all form fields
   - Descriptive `alt` attributes on images

2. **Mobile-First CSS with BEM**
   - Start with mobile styles, enhance with media queries
   - Follow BEM naming: `.component`, `.component__element`, `.component--modifier`
   - Use CSS custom properties for colors, spacing, typography, shadows
   - Maximum nesting depth: 2 levels
   - Soft shadows and subtle micro-interactions

3. **Vanilla JavaScript Enhancement**
   - Progressive enhancement only (functionality works without JS)
   - Use `data-*` attributes for JS hooks
   - Minimal DOM manipulation
   - Cache DOM queries
   - Event delegation for dynamic content
   - Debounce/throttle high-frequency events

4. **Accessibility (WCAG AA)**
   - Keyboard navigation fully supported
   - Color contrast minimum 4.5:1 (text), 3:1 (large text)
   - Focus states clearly visible
   - Touch targets ≥ 44×44 CSS pixels
   - ARIA only when native semantics insufficient

5. **Clinical Aesthetic**
   - Soft, professional color palette
   - Readable typography (≥ 16px body, line-height ≥ 1.5)
   - Generous whitespace and spacious layouts
   - Subtle animations (200ms ease-in-out)
   - Trust-building visual language (clarity, consistency, transparency)

## Input Requirements

When requesting a component, provide:
- **Component Name** (e.g., "Card", "Form Field", "Modal")
- **Purpose** (e.g., "Display testimonials", "Collect user input")
- **State Variations** (e.g., default, hover, active, disabled, error)
- **Accessibility Needs** (e.g., form validation, keyboard navigation)
- **Interaction Level** (e.g., static, interactive with JS, complex state management)

### Example Request
```
Component: Primary Call-to-Action Button
Purpose: Convert users to sign up for the IBS Protocol
States: Default, Hover, Focus, Active, Disabled
Accessibility: Full keyboard support, focus indicator, screen reader label
```

## Output Structure

Each component includes:

### 1. HTML Structure
```html
<div class="component" data-component="name">
  <!-- Semantic structure -->
</div>
```

### 2. CSS Styling
```css
/* Variables and resets */
.component {
  /* Base styles */
}

.component__element {
  /* Element styles */
}

.component--variant {
  /* Variant styles */
}

/* Responsive */
@media (min-width: 768px) {
  /* Tablet+ styles */
}
```

### 3. Vanilla JavaScript (if needed)
```javascript
// Minimal enhancement
const ComponentName = (() => {
  const init = () => {
    // Setup logic
  };
  
  return { init };
})();

// Invoke on DOMContentLoaded
document.addEventListener('DOMContentLoaded', ComponentName.init);
```

### 4. Documentation
- Usage examples
- Accessibility notes
- Customization guide
- Browser compatibility

## Common Components

### 1. Button Component
- States: default, hover, focus, active, disabled
- Variants: primary, secondary, tertiary
- Sizes: small, medium, large
- Icons: optional leading/trailing icons
- Loading state: optional spinner

### 2. Form Field Component
- Input types: text, email, tel, number, textarea
- Label association
- Error states with inline messaging
- Placeholder guidance text
- Required/optional indicators

### 3. Card Component
- Header and footer sections
- Image support with fallback
- Flexible content area
- Hover state (lift shadow)
- Call-to-action integration

### 4. Modal/Dialog Component
- Backdrop with fade-in
- Scrollable content area
- Header with close button
- Footer with action buttons
- Keyboard navigation (Escape to close, Tab trap)
- Backdrop click handling

### 5. Navigation Component
- Responsive mobile menu
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Active state indicator
- Mega-menu support (optional)
- Accessibility landmark (`<nav>`)

### 6. Testimonial Component
- Image + quote layout
- Author name and title
- Star rating (optional)
- Mobile-first responsive design
- Carousel variant (if multiple testimonials)

## CSS Variables Template

Each component should respect the site's CSS variable system:

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-secondary: #10b981;
  --color-clinical: #0f766e;
  --color-accent: #f59e0b;
  --color-text-primary: #1f2937;
  --color-text-secondary: #6b7280;
  --color-background: #ffffff;
  --color-border: #e5e7eb;
  
  /* Typography */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-lg: 1.125rem;
  --line-height-base: 1.5;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-base: all 200ms ease-in-out;
}
```

## Checklist Before Delivery

- [ ] HTML is semantic and valid (no `<div onclick>`).
- [ ] All form fields have associated `<label>` elements.
- [ ] All interactive elements are keyboard-accessible.
- [ ] Focus states are clearly visible (outline or other indicator).
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 large text).
- [ ] Touch targets ≥ 44×44 CSS pixels.
- [ ] Responsive design verified (mobile, tablet, desktop).
- [ ] CSS uses custom properties (no hard-coded values).
- [ ] BEM naming consistent throughout.
- [ ] JavaScript is minimal and uses progressive enhancement.
- [ ] No console errors or warnings.
- [ ] Images have descriptive `alt` text.
- [ ] Animations are smooth and purposeful (no jarring transitions).
- [ ] Component is reusable and well-documented.
- [ ] Clinical aesthetic applied (soft shadows, readable type, whitespace).

## Customization Guide

To adapt components for specific needs:

1. **Color Variants**: Override CSS variables in a modifier class.
   ```css
   .button--secondary {
     --color-primary: var(--color-secondary);
   }
   ```

2. **Size Variants**: Adjust spacing and typography via modifiers.
   ```css
   .button--large {
     --font-size: 1.125rem;
     --padding: 1rem 2rem;
   }
   ```

3. **State Handling**: Use data attributes or classes.
   ```javascript
   element.classList.add('is-active');
   element.dataset.state = 'loading';
   ```

4. **Responsive Variants**: Mobile-first approach with media query enhancements.
   ```css
   .card { /* Mobile-first */ }
   @media (min-width: 768px) { .card { /* Tablet+ */ } }
   ```

## Clinical UX Best Practices

- **Clarity**: Unambiguous labels, clear error messages, obvious CTAs.
- **Consistency**: Repeated patterns, predictable interactions.
- **Transparency**: Honest copy, no dark patterns, clear data usage.
- **Safety**: Confirm destructive actions, inline validation feedback.
- **Accessibility**: Inclusive design benefits everyone; especially critical in healthcare.

## Related Documentation

- `.github/copilot-instructions.md` - Core principles and standards.
- `.github/AGENTS.md` - Agent definitions including UI Component Generator.
- `.github/skills/accessibility-audit.md` - Detailed a11y validation procedures.
- `.github/skills/css-architecture.md` - CSS system design and organization.

---

**Last Updated**: 2026-10-11  
**Version**: 1.0
