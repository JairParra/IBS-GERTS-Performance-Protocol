---
title: "CSS Architecture & Design Tokens"
description: "Expert-level CSS system design including custom properties (variables), mobile-first responsive strategy, BEM methodology, utility patterns, performance optimization, and clinical aesthetic principles."
applyTo: "**/css-architecture*"
model: "Claude Haiku 4.5"
---

# CSS Architecture & Design Tokens Skill

## Overview

This skill guides the design and implementation of scalable, maintainable CSS systems using CSS custom properties (variables), mobile-first responsive design, BEM methodology, and performance best practices. The system ensures consistent visual language, efficient theming, and clinical aesthetic principles across the entire website.

## Core Architecture Principles

### 1. CSS Custom Properties (Design Tokens)

**Philosophy**: Separate design decisions from implementation. All design values (colors, spacing, typography, shadows, transitions) defined as CSS variables at the root level.

**Benefits**:
- Single source of truth for design values.
- Easy theming and customization.
- Efficient runtime changes (no recompilation needed).
- Improved maintainability and consistency.
- Enables light/dark mode or other variants.

**Scope Hierarchy**:
```css
/* Global variables (all components use) */
:root { --color-primary: #2563eb; }

/* Scoped variables (specific component overrides) */
.card { --color-primary: #065f46; } /* Optional override */

/* Local variables (utility only) */
.button { --local-padding: var(--spacing-md); }
```

### 2. Mobile-First Responsive Design

**Philosophy**: Start with styles for mobile (smallest viewport), then enhance with media queries for larger screens.

**Benefits**:
- Simpler base styles (no resets for mobile).
- Better performance on mobile devices (fewer overrides).
- Improved accessibility (simpler layouts work on all devices).
- Progressive enhancement mindset.

**Breakpoint Strategy**:
```css
:root {
  /* Mobile-first; no breakpoint needed */
  /* Tablet breakpoint */
  --breakpoint-tablet: 768px;
  /* Desktop breakpoint */
  --breakpoint-desktop: 1024px;
  /* Large desktop breakpoint */
  --breakpoint-large: 1440px;
}

/* Base mobile styles */
.card { display: block; }

/* Enhance for tablet+ */
@media (min-width: 768px) {
  .card { display: grid; grid-template-columns: 1fr 2fr; }
}

/* Enhance for desktop+ */
@media (min-width: 1024px) {
  .card { grid-template-columns: 1fr 3fr; }
}
```

### 3. BEM Methodology

**Philosophy**: Block-Element-Modifier naming convention ensures clarity, predictability, and prevents naming conflicts.

**Structure**:
- **Block**: Standalone, reusable component (`.card`).
- **Element**: Part of a block, has no standalone meaning (`.card__header`).
- **Modifier**: Variation or state of block/element (`.card--elevated`, `.card__header--large`).

**Benefits**:
- Clear component hierarchy and relationships.
- Easy to find related styles.
- Reduces specificity issues.
- Improves maintainability.

**Examples**:
```css
/* Card Component */
.card { }
.card__header { }
.card__body { }
.card__footer { }
.card--elevated { }
.card--rounded { }

/* Button Component */
.button { }
.button--primary { }
.button--secondary { }
.button--large { }
.button--disabled { }

/* Caution: Avoid deep nesting or double modifiers */
/* ❌ BAD: .card__header--large__title (too nested) */
/* ✅ GOOD: .card__header + .card__header--large (separate modifiers) */
```

### 4. Selector Depth & Specificity

**Rule**: Maximum selector depth = 2 levels. Avoid cascading specificity issues.

**Examples**:
```css
/* ✅ GOOD: Depth 1 */
.card { }

/* ✅ GOOD: Depth 2 */
.card__header { }
.card:hover { }

/* ❌ BAD: Depth 3+ (too specific, hard to override) */
.card .card__header .card__header--large { }
```

## Design Tokens System

### 1. Color Palette

**Clinical Aesthetic**: Soft, professional colors that build trust. Avoid garish or high-saturation hues.

```css
:root {
  /* Primary Brand Colors */
  --color-primary: #2563eb; /* Muted blue */
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1e40af;
  
  /* Secondary Clinical Colors */
  --color-clinical: #0f766e; /* Muted teal */
  --color-clinical-light: #14b8a6;
  --color-clinical-dark: #0d9488;
  
  /* Functional Colors */
  --color-success: #10b981; /* Muted green */
  --color-warning: #f59e0b; /* Muted amber */
  --color-danger: #ef4444; /* Muted red */
  --color-info: #3b82f6; /* Muted blue */
  
  /* Neutral Palette */
  --color-text-primary: #1f2937; /* Dark gray */
  --color-text-secondary: #6b7280; /* Medium gray */
  --color-text-disabled: #9ca3af; /* Light gray */
  --color-background: #ffffff; /* White */
  --color-background-secondary: #f9fafb; /* Off-white */
  --color-border: #e5e7eb; /* Light gray border */
  --color-border-dark: #d1d5db; /* Darker border */
  
  /* Overlay & Backdrop */
  --color-overlay: rgba(0, 0, 0, 0.5);
  --color-backdrop: rgba(0, 0, 0, 0.75);
}

/* Dark Mode Variant (Optional) */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: #f3f4f6;
    --color-text-secondary: #d1d5db;
    --color-background: #111827;
    --color-background-secondary: #1f2937;
    --color-border: #374151;
  }
}
```

### 2. Typography Scale

**Clinical Readable**: Font sizes ≥ 16px for body text, line-height ≥ 1.5, sufficient letter spacing.

```css
:root {
  /* Font Family */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  --font-family-mono: 'Courier New', Courier, monospace;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem; /* 12px */
  --font-size-sm: 0.875rem; /* 14px */
  --font-size-base: 1rem; /* 16px (body) */
  --font-size-lg: 1.125rem; /* 18px */
  --font-size-xl: 1.25rem; /* 20px */
  --font-size-2xl: 1.5rem; /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */
  --font-size-4xl: 2.25rem; /* 36px */
  --font-size-5xl: 3rem; /* 48px */
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-base: 1.5;
  --line-height-relaxed: 1.75;
  --line-height-loose: 2;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;
}

/* Heading Styles */
h1 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}

h2 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

h3 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

p, body {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-text-primary);
}

small, .text-sm {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-base);
}
```

### 3. Spacing Scale

**Consistent Whitespace**: Maintain rhythm and visual hierarchy through proportional spacing.

```css
:root {
  /* Spacing Scale (rem-based, 8px base unit) */
  --spacing-0: 0;
  --spacing-xs: 0.25rem; /* 4px */
  --spacing-sm: 0.5rem; /* 8px */
  --spacing-md: 1rem; /* 16px */
  --spacing-lg: 1.5rem; /* 24px */
  --spacing-xl: 2rem; /* 32px */
  --spacing-2xl: 3rem; /* 48px */
  --spacing-3xl: 4rem; /* 64px */
  --spacing-4xl: 6rem; /* 96px */
  
  /* Gap (for flexbox/grid) */
  --gap-sm: var(--spacing-sm);
  --gap-md: var(--spacing-md);
  --gap-lg: var(--spacing-lg);
}

/* Example: Card Padding */
.card {
  padding: var(--spacing-lg);
}

/* Example: Section Margins */
section {
  margin: var(--spacing-3xl) 0;
}

/* Example: Grid Gap */
.grid {
  display: grid;
  gap: var(--gap-md);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### 4. Shadows

**Clinical Subtlety**: Soft, understated shadows create depth without visual noise.

```css
:root {
  /* Shadow Elevation Scale */
  --shadow-none: none;
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
  
  /* Focus Ring Shadow */
  --shadow-focus: 0 0 0 3px rgba(37, 99, 235, 0.5);
}

/* Example: Card Elevation */
.card {
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transition: box-shadow 200ms ease-in-out;
}

/* Example: Focus Indicator */
button:focus {
  box-shadow: var(--shadow-focus);
}
```

### 5. Transitions & Timing

**Smooth Micro-Interactions**: Consistent, purposeful animations enhance UX without distraction.

```css
:root {
  /* Timing Functions */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Transition Durations */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  
  /* Combined Transition Values */
  --transition-fast: all 100ms var(--ease-in-out);
  --transition-normal: all 200ms var(--ease-in-out);
  --transition-slow: all 300ms var(--ease-in-out);
}

/* Example: Button Hover */
.button {
  transition: var(--transition-normal);
}

.button:hover {
  background-color: var(--color-primary-dark);
  box-shadow: var(--shadow-md);
}

/* Example: Respect User Preference for Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## CSS Architecture File Organization

**Recommended Structure** (single CSS file or multiple imports):

```css
/* ========== 1. Reset & Base Styles ========== */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-family-base); }

/* ========== 2. Design Tokens (CSS Variables) ========== */
:root {
  /* Colors, typography, spacing, shadows, transitions */
}

/* ========== 3. Typography ========== */
h1, h2, h3, h4, h5, h6 { }
p { }
a { }

/* ========== 4. Layout & Spacing ========== */
.container { }
.section { }
.grid { }
.flex { }

/* ========== 5. Components (BEM) ========== */
.button { }
.button--primary { }
.card { }
.card__header { }
/* ... more components ... */

/* ========== 6. Utilities & States ========== */
.hidden { display: none; }
.sr-only { /* screen reader only */ }
.is-active { }
.is-disabled { }

/* ========== 7. Responsive & Media Queries ========== */
@media (min-width: 768px) { /* Tablet+ styles */ }
@media (min-width: 1024px) { /* Desktop+ styles */ }

/* ========== 8. Accessibility & Preferences ========== */
@media (prefers-reduced-motion: reduce) { }
@media (prefers-color-scheme: dark) { }
```

---

## Performance Optimization

### 1. Minimize Repaints & Reflows

**Strategy**: Batch DOM reads and writes; use CSS transforms and opacity instead of layout-changing properties.

```css
/* ❌ BAD: Causes reflow (layout recalc) */
.element:hover {
  width: 200px; /* Reflow */
  height: 200px; /* Reflow */
  left: 10px; /* Reflow */
}

/* ✅ GOOD: Use transforms (no reflow) */
.element:hover {
  transform: translate(10px, 0) scale(1.2);
}
```

### 2. Efficient Selectors

**Strategy**: Avoid overly complex selectors; prefer direct classes.

```css
/* ❌ BAD: Complex descendant selector */
div > section > article > .card:not(.inactive) > .card__body { }

/* ✅ GOOD: Direct class selector */
.card__body { }
```

### 3. Avoid Unnecessary Overrides

**Strategy**: Use specificity carefully; leverage cascading.

```css
/* ❌ BAD: Specificity war */
.card.card--primary.card--large { }

/* ✅ GOOD: Single class + modifiers */
.card--primary { }
.card--large { }
```

### 4. CSS-in-JS Considerations

**For Static Sites**: Avoid CSS-in-JS entirely. Use static CSS files for better caching, faster parsing, and simpler mental model.

---

## Theming & Customization

### Light/Dark Mode

```css
/* Light Mode (Default) */
:root {
  --color-background: #ffffff;
  --color-text-primary: #1f2937;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #111827;
    --color-text-primary: #f3f4f6;
  }
}
```

### Component-Level Overrides

```css
/* Base Card Styles */
.card {
  background: var(--color-background);
  color: var(--color-text-primary);
}

/* Clinical Theme Override */
.theme--clinical .card {
  --color-background: var(--color-clinical-light);
  --color-text-primary: var(--color-clinical-dark);
}
```

---

## Common Patterns

### 1. Button Pattern
```css
.button {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  border: none;
  border-radius: 0.375rem;
  background-color: var(--color-primary);
  color: white;
  cursor: pointer;
  transition: var(--transition-normal);
}

.button:hover { background-color: var(--color-primary-dark); }
.button:focus { box-shadow: var(--shadow-focus); }
.button:active { transform: scale(0.98); }
.button:disabled { opacity: 0.5; cursor: not-allowed; }

.button--secondary { background-color: var(--color-secondary); }
```

### 2. Card Pattern
```css
.card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: var(--transition-normal);
}

.card:hover { box-shadow: var(--shadow-lg); }

.card__header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.card__body { padding: var(--spacing-lg); }
.card__footer { padding: var(--spacing-lg); border-top: 1px solid var(--color-border); }
```

### 3. Responsive Grid Pattern
```css
.grid {
  display: grid;
  gap: var(--gap-lg);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

---

## Related Documentation

- `.github/copilot-instructions.md` - Core principles and standards.
- `.github/AGENTS.md` - CSS Architecture Specialist agent definition.
- `.github/skills/ui-component-generator.md` - Component creation workflow.
- `.github/skills/accessibility-audit.md` - Contrast and visual testing.

---

**Last Updated**: 2026-10-11  
**Version**: 1.0
