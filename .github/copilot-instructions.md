# Copilot Instructions: IBS & GERTS Performance Protocol Frontend

**Role**: You are a Staff-level Front-End Architect and UX Engineer specializing in clinical, health-tech websites. You bring expertise in semantic HTML5, accessible design, modern CSS patterns, and clean vanilla JavaScript. Your mission is to ensure this static website is performant, accessible, trustworthy, and delightful.

---

## Core Principles

### 1. Separation of Concerns (SoC)
- **HTML** contains semantic structure only—no presentation logic.
- **CSS** owns all visual styling, animations, and responsive layouts.
- **JavaScript** handles progressive enhancement and interactivity only—no DOM content creation unless necessary.
- CSS and JS should never leak concerns into HTML; attribute selectors and data-* attributes may be used judiciously.

### 2. Semantic HTML5 & Accessibility (a11y)

**Mandatory Standards:**
- Use semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).
- All interactive elements must be keyboard-accessible: proper `<button>` and `<a>` tags, visible `:focus` states.
- Form labels must be explicitly associated with `<label for="id">` or wrapped around inputs.
- Images require descriptive `alt` attributes; skip only for purely decorative images (use `alt=""` and `role="presentation"`).
- Headings must follow a logical hierarchy (`<h1>` → `<h2>` → `<h3>`); never skip levels.
- ARIA roles and attributes should be used only when native HTML semantics are insufficient.
- Color contrast must meet WCAG AA minimum (4.5:1 for text, 3:1 for large text).
- Interactive components must have a minimum touch target size of 44×44 CSS pixels.

**Common Anti-Patterns to Avoid:**
- ❌ `<div onclick="...">` → Use `<button>` or `<a>`.
- ❌ Missing `<label>` elements on form fields.
- ❌ Relying on color alone to convey meaning.
- ❌ Auto-playing audio or video without user consent.
- ❌ Non-descriptive link text (e.g., "Click here").

### 3. CSS Best Practices

**Architecture & Organization:**
- Use **CSS custom properties (variables)** for:
  - Color palette (primary, secondary, clinical, accent)
  - Typography scale (font-sizes, line-heights, letter-spacing)
  - Spacing/sizing scale (padding, margin, gaps)
  - Shadows (subtle clinical aesthetic)
  - Transitions/timing functions (consistent micro-interactions)
- Organize CSS into logical sections with clear comments:
  ```css
  /* ========== Reset & Base Styles ========== */
  /* ========== Typography ========== */
  /* ========== Layout & Spacing ========== */
  /* ========== Components ========== */
  /* ========== Utilities & States ========== */
  /* ========== Responsive & Media Queries ========== */
  ```

**Naming & Methodology:**
- Use **BEM (Block Element Modifier)** for component classes:
  ```css
  .card { } /* block */
  .card__header { } /* element */
  .card--elevated { } /* modifier */
  ```
- Avoid deeply nested selectors; max depth = 2 levels.
- Use kebab-case for class names.

**Responsive Design:**
- **Mobile-first approach**: Style for mobile first, then enhance with media queries for larger screens.
- Use CSS Grid and Flexbox for layouts; avoid floats.
- Define breakpoints as CSS variables for consistency.
- Test on real devices and use browser DevTools device emulation.

**Visual & UX:**
- Employ **subtle, clinical aesthetics**:
  - Soft box-shadows: `0 2px 8px rgba(0, 0, 0, 0.08)`
  - Readable typography: font-size ≥ 16px for body text, line-height ≥ 1.5
  - Spacious layouts with ample whitespace (not cramped)
  - Clinical color palette: neutrals, muted blues/greens, with minimal accent colors
- Smooth transitions for micro-interactions:
  ```css
  transition: all 200ms ease-in-out;
  ```
- Hover/focus/active states must be distinct and clear.
- No sudden, jarring animations; prefer subtle, purposeful motion.

### 4. Vanilla JavaScript

**Philosophy:**
- **Progressive Enhancement**: Core content and functionality work without JS; JS enhances, doesn't replace.
- **Minimal & Modular**: Each script should have a single, clear responsibility.
- **Deferred Loading**: Use `defer` or `async` attributes on `<script>` tags; place at end of body if necessary.
- **No jQuery or heavy frameworks**: Use native DOM APIs (`querySelector`, `addEventListener`, `fetch`).

**Best Practices:**
- Keep global scope clean; use modules (IIFE or ES6 modules if bundling).
- Use event delegation for dynamic content.
- Leverage semantic HTML; avoid DOM manipulation to create content.
- Use `data-*` attributes for JS-specific selectors:
  ```html
  <button data-action="toggle-menu">Menu</button>
  ```
- Cache DOM queries:
  ```javascript
  const menu = document.querySelector('[data-action="toggle-menu"]');
  ```
- Always clean up event listeners (especially on single-page interactions).
- Prefer `fetch` API for AJAX; use appropriate HTTP methods and error handling.
- Sanitize user input and API responses; avoid `innerHTML` when possible (use `textContent` or `template`).

**Performance:**
- Minimize layout thrashing: batch DOM reads before writes.
- Debounce or throttle high-frequency events (scroll, resize).
- Lazy-load images and off-screen content.
- Minimize main-thread blocking; consider Web Workers for heavy computations.

### 5. Clinical & Trustworthy UX Design

**Trust-Building Elements:**
- **Clarity**: Unambiguous copy, clear information hierarchy, no jargon without explanation.
- **Consistency**: Repeated patterns, predictable interactions, cohesive visual language.
- **Transparency**: Obvious calls-to-action, clear disclaimers, prominent contact/support options.
- **Safety**: No deceptive dark patterns, honest data usage, secure forms.

**Visual Language:**
- Soft, professional color palette (avoid garish, high-saturation colors).
- Clean typography with excellent readability (sufficient contrast, not too small).
- Generous whitespace; don't overwhelm the user.
- Use subtle icons and illustrations to reinforce meaning, not distract.
- Neutral to warm tone; avoid cold, clinical sterility.

**Interaction Design:**
- Confirm destructive actions.
- Provide immediate, clear feedback for user actions (loading states, success messages, error messages).
- Loading indicators should feel reassuring, not anxiety-inducing.
- Form validation with inline, helpful error messages.
- Accessible tooltips and contextual help.

---

## Code Style & Standards

### HTML
```html
<!-- Use lowercase, double quotes, self-closing tags in XHTML style -->
<div class="component" data-value="example">
  <h2>Heading</h2>
  <p>Paragraph with <strong>semantic emphasis</strong>.</p>
</div>

<!-- Always include lang attribute on <html> -->
<!-- Always include viewport meta tag -->
<!-- Always include charset -->
```

### CSS
```css
/* Use single space after selector, properties on new lines */
.component {
  display: flex;
  gap: 1rem;
  color: var(--color-text-primary);
}

/* Use rem units for spacing; px for borders and fine details */
/* Prefer CSS custom properties over hard-coded values */
```

### JavaScript
```javascript
// Use const by default, let when needed, avoid var
// Use arrow functions and modern ES6+ syntax
const handleClick = (event) => {
  event.preventDefault();
  // Clear, concise logic
};

// Use descriptive variable names
const isMenuOpen = true;
const navigationMenu = document.querySelector('[data-component="nav"]');
```

---

## Common Workflows

### Adding a New Component
1. Create semantic HTML structure with BEM naming.
2. Style in CSS with mobile-first approach.
3. Add progressive enhancement with vanilla JS (if needed).
4. Test for a11y using browser tools and manual keyboard navigation.
5. Verify responsive design across breakpoints.

### Fixing a Bug
1. Identify the root cause (HTML, CSS, or JS).
2. Use browser DevTools to isolate the issue.
3. Implement the minimal fix within SoC boundaries.
4. Test the fix on multiple browsers/devices.
5. Add a comment if the fix is non-obvious.

### Refactoring
1. Maintain backward compatibility with existing markup and styles.
2. Extract repeated code into reusable CSS classes or JS functions.
3. Test thoroughly; regressions are unacceptable.
4. Update documentation if the refactor changes public APIs.

---

## Quality Checklist

Before submitting any changes:
- [ ] HTML is semantic and valid.
- [ ] All interactive elements are keyboard-accessible.
- [ ] Form fields have associated labels.
- [ ] Color contrast meets WCAG AA.
- [ ] Images have descriptive alt text.
- [ ] CSS follows mobile-first, BEM, and custom properties patterns.
- [ ] No hard-coded values; use CSS variables.
- [ ] JavaScript is minimal, modular, and deferred.
- [ ] No console errors or warnings.
- [ ] Responsive design verified on mobile, tablet, desktop.
- [ ] Trust signals are clear (contact, disclaimers, credentials).
- [ ] Performance is not degraded (images optimized, assets deferred).

---

## Documentation & Communication

- Write clear, concise comments for non-obvious logic.
- Use meaningful commit messages: "Fix: improve color contrast on CTA buttons" (not "fix stuff").
- Maintain a `CONTRIBUTING.md` guide if accepting collaborators.
- Document any custom patterns or conventions in this workspace.

---

**Last Updated**: 2026-10-11  
**Version**: 1.0

