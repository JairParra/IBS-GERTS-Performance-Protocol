---
title: "Accessibility Audit & Remediation"
description: "Deep-dive accessibility auditing skill for WCAG 2.1 AA compliance verification with specific remediation guidance, keyboard navigation testing, and screen reader compatibility."
applyTo: "**/accessibility-audit*"
model: "Claude Haiku 4.5"
---

# Accessibility Audit & Remediation Skill

## Overview

This skill provides comprehensive accessibility auditing aligned with WCAG 2.1 AA standards. Audits verify semantic HTML, keyboard navigation, color contrast, form handling, ARIA implementation, and clinical trust signals. Remediation guidance is specific and actionable—not vague.

## Audit Scope

### 1. Semantic HTML Validation
- **Check**: Use of semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).
- **Check**: Proper heading hierarchy (no skipped levels).
- **Check**: Form `<label>` elements explicitly associated with inputs via `for` attribute or wrapping.
- **Check**: `<button>` vs `<a>` usage (semantic distinction).
- **Check**: Lists (`<ul>`, `<ol>`, `<li>`) for structured content.
- **Check**: Image `alt` attributes present and descriptive.

**WCAG Criteria**: 1.3.1 Info and Relationships (Level A)

### 2. Keyboard Navigation
- **Check**: All interactive elements reachable via Tab key.
- **Check**: Tab order logical and intuitive (follow visual flow).
- **Check**: Visible focus indicator on all focusable elements.
- **Check**: Keyboard shortcuts don't conflict with browser/OS defaults.
- **Check**: Modal/dialog traps focus (Tab cycles within modal).
- **Check**: Keyboard support for menus (Escape closes, Arrow keys navigate).

**Navigation Keys to Test**:
- Tab / Shift+Tab: Move forward/backward through focusable elements.
- Enter / Space: Activate buttons and links.
- Escape: Close modals, menus, popovers.
- Arrow Keys: Navigate within menus, tabs, sliders.

**WCAG Criteria**: 2.1.1 Keyboard (Level A), 2.4.7 Focus Visible (Level AA)

### 3. Color Contrast
- **Check**: Text vs background contrast ≥ 4.5:1 (WCAG AA).
- **Check**: Large text (≥ 18pt or ≥ 14pt bold) ≥ 3:1.
- **Check**: UI components (borders, buttons) ≥ 3:1 against adjacent colors.
- **Check**: Color not the only means of conveying meaning (use icons, patterns, text).
- **Check**: Focus indicators have sufficient contrast.

**Tools**: Use browser DevTools (Inspect Element → Contrast ratio indicator) or WAVE/Axe browser extensions.

**WCAG Criteria**: 1.4.3 Contrast (Minimum) (Level AA), 1.4.11 Non-text Contrast (Level AA)

### 4. Form Labels & Validation
- **Check**: Every `<input>` has an associated `<label>` with matching `for` attribute.
- **Check**: Form instructions and required field indicators clear and visible.
- **Check**: Error messages associated with the field (via `aria-describedby` or inline).
- **Check**: Error messages specific and actionable (not just "Error").
- **Check**: Form submission validation happens on submit, not on blur (unless explicitly validated).
- **Check**: Placeholder text does NOT replace label (placeholder alone fails a11y).

**Example Proper Pattern**:
```html
<label for="email">Email Address <span aria-label="required">*</span></label>
<input type="email" id="email" name="email" aria-describedby="email-error" />
<span id="email-error" role="alert">Please enter a valid email address.</span>
```

**WCAG Criteria**: 1.3.1 Info and Relationships (Level A), 3.3.1 Error Identification (Level A)

### 5. Images & Alternative Text
- **Check**: All informative images have descriptive `alt` text.
- **Check**: Decorative images use `alt=""` and `role="presentation"`.
- **Check**: `alt` text is concise but descriptive (e.g., "Woman reading nutritional label" not "image123.jpg").
- **Check**: Complex images (charts, diagrams) include text description or data table.
- **Check**: Images of text have text equivalent in HTML or `alt` attribute.

**WCAG Criteria**: 1.1.1 Non-text Content (Level A)

### 6. ARIA Implementation
- **Check**: ARIA roles used only when native HTML semantics are insufficient.
- **Check**: `aria-label`, `aria-labelledby`, `aria-describedby` properly used.
- **Check**: `role`, `aria-live`, `aria-hidden` implemented correctly.
- **Check**: No redundant or conflicting ARIA attributes.
- **Check**: ARIA attributes reflect current state (e.g., `aria-expanded` toggles).

**Common Anti-Patterns**:
- ❌ `<div role="button">` → Use `<button>` instead.
- ❌ `aria-label="Submit"` on a `<button>Submit</button>` → Redundant; remove aria-label.
- ❌ `<nav aria-label="Primary">` + `<h2>Navigation</h2>` → Redundant; pick one.

**WCAG Criteria**: 1.3.1 Info and Relationships (Level A), 4.1.2 Name, Role, Value (Level A)

### 7. Screen Reader Compatibility
- **Check**: Content announced in logical reading order.
- **Check**: Headings and landmarks announced clearly.
- **Check**: Form labels announced with fields.
- **Check**: Hidden content properly marked (`aria-hidden="true"` or `display: none`).
- **Check**: Dynamic content updates announced via `aria-live`.
- **Check**: Link text is descriptive (not "Click here" or "More").

**Testing**: Use screen readers:
- **Windows**: NVDA (free), JAWS (commercial).
- **macOS**: VoiceOver (built-in, cmd+F5).
- **iOS**: VoiceOver (Settings → Accessibility).
- **Android**: TalkBack (Settings → Accessibility).

**WCAG Criteria**: 1.3.1 Info and Relationships (Level A), 2.4.4 Link Purpose (Level A)

### 8. Touch Target Size
- **Check**: Interactive elements ≥ 44×44 CSS pixels.
- **Check**: Spacing between targets to prevent accidental activation.
- **Check**: Mobile-first responsive design verified on actual devices.

**WCAG Criteria**: 2.5.5 Target Size (Level AAA recommendation, not required for AA)

### 9. Motion & Animation
- **Check**: No auto-playing animations (requires user consent).
- **Check**: Animations don't flash more than 3 times per second.
- **Check**: `prefers-reduced-motion` media query respected.
- **Check**: No seizure-inducing patterns.

**Example Respecting User Preference**:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

**WCAG Criteria**: 2.3.3 Animation from Interactions (Level AAA), 2.4.10 Target Size (Level AAA)

### 10. Clinical Trust Signals
- **Check**: Privacy policy link visible and accessible.
- **Check**: Contact information (phone, email) clearly displayed.
- **Check**: Credentials, certifications, disclaimers prominent.
- **Check**: No deceptive dark patterns (hidden costs, trick options).
- **Check**: Secure form indicators (HTTPS, no warnings).
- **Check**: Patient testimonials or trust badges present and credible.
- **Check**: Data usage and patient rights clearly stated.

**Trust-Eroding Issues**: Use dark patterns, hidden terms, misleading CTAs, missing disclaimers, poor contact info.

## Audit Checklist

### Semantic HTML
- [ ] Proper semantic tags used (`<header>`, `<nav>`, `<main>`, `<article>`, etc.).
- [ ] Heading hierarchy correct (no skipped levels).
- [ ] Images have `alt` attributes (descriptive or empty if decorative).
- [ ] Form labels explicitly associated (`for` attribute).
- [ ] Buttons are `<button>` elements (not `<div>` or `<a>`).
- [ ] Lists use `<ul>`, `<ol>`, `<li>` for structured content.

### Keyboard Navigation
- [ ] All interactive elements accessible via Tab key.
- [ ] Tab order logical and follows visual flow.
- [ ] Focus indicator visible on all focusable elements.
- [ ] Modals trap focus (Tab cycles within modal).
- [ ] Escape closes modals and menus.
- [ ] Arrow keys work in menus and sliders.

### Color & Contrast
- [ ] Text contrast ≥ 4.5:1 (WCAG AA).
- [ ] Large text contrast ≥ 3:1.
- [ ] UI component contrast ≥ 3:1.
- [ ] Focus indicator has sufficient contrast.
- [ ] Color not sole means of conveying meaning.

### Forms
- [ ] All inputs have associated `<label>` elements.
- [ ] Required field indicators clear.
- [ ] Error messages specific and actionable.
- [ ] Error messages associated with fields.
- [ ] Placeholder does NOT replace label.

### Images
- [ ] Informative images have descriptive `alt` text.
- [ ] Decorative images have `alt=""`.
- [ ] Complex images (charts) have text alternatives.

### ARIA
- [ ] ARIA used only when semantics insufficient.
- [ ] `aria-label`, `aria-describedby` used correctly.
- [ ] No redundant or conflicting ARIA.
- [ ] ARIA attributes reflect current state.

### Screen Reader
- [ ] Content announced in logical order.
- [ ] Headings announced clearly.
- [ ] Form labels announced with fields.
- [ ] Dynamic updates use `aria-live`.
- [ ] Link text descriptive.

### Trust Signals
- [ ] Privacy policy accessible.
- [ ] Contact information clear.
- [ ] Credentials/disclaimers prominent.
- [ ] No dark patterns or deception.
- [ ] Secure form indicators present.
- [ ] Patient data handling transparent.

---

## Remediation Templates

### Fixing Missing Form Labels
**Issue**: Input without associated label.
```html
<!-- ❌ BAD -->
<input type="email" placeholder="Email" />

<!-- ✅ GOOD -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" />
```

### Fixing Poor Focus Indicators
**Issue**: Focus state not visible.
```css
/* ❌ BAD */
button:focus { outline: none; }

/* ✅ GOOD */
button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Fixing Image Alt Text
**Issue**: Missing or vague `alt` attribute.
```html
<!-- ❌ BAD -->
<img src="ibs-protocol.jpg" />

<!-- ✅ GOOD -->
<img src="ibs-protocol.jpg" alt="Clinical workflow diagram showing IBS diagnosis and treatment protocol steps" />
```

### Fixing Keyboard Navigation in Custom Menus
**Issue**: Custom menu not keyboard-accessible.
```javascript
// ✅ GOOD: Keyboard support in custom menu
const menu = document.querySelector('[data-component="menu"]');
const items = menu.querySelectorAll('[role="menuitem"]');

items.forEach((item, index) => {
  item.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = items[index + 1] || items[0];
      next.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = items[index - 1] || items[items.length - 1];
      prev.focus();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      menu.classList.remove('is-open');
    }
  });
});
```

### Fixing Color Contrast
**Issue**: Text contrast below 4.5:1.
```css
/* ❌ BAD: #999 on white = 5.3:1 fail (need 4.5:1) */
.text { color: #666; background: white; }

/* ✅ GOOD: #555 on white = 8.6:1 pass */
.text { color: #555; background: white; }
```

### Fixing Reduced Motion
**Issue**: Animation doesn't respect user preferences.
```css
/* ✅ GOOD: Disable animations for users who prefer reduced motion */
.button { transition: all 200ms ease-in-out; }

@media (prefers-reduced-motion: reduce) {
  .button { transition: none; }
}
```

---

## Tools & Resources

### Browser Tools
- **Chrome DevTools**: Right-click element → Inspect → Accessibility tab.
- **Firefox Developer Tools**: Inspector → Accessibility tab.
- **Safari DevTools**: Elements → Accessibility inspector.

### Extensions
- **WAVE** (WebAIM): Highlights accessibility issues in-page.
- **Axe DevTools**: Automated a11y checks.
- **Lighthouse** (Chrome): Built-in a11y audit.
- **Color Contrast Analyzer**: Dedicated contrast checking.

### Screen Readers
- **NVDA** (Windows, free): nvaccess.org
- **JAWS** (Windows, commercial): freedomscientific.com
- **VoiceOver** (macOS, iOS, free): Built-in.
- **TalkBack** (Android, free): Built-in.

### Standards
- **WCAG 2.1**: w3.org/WAI/WCAG21/quickref/
- **ARIA Practices**: w3.org/WAI/ARIA/apg/

---

## Audit Report Template

### Component/Page: [Name]

#### Overall Score: [ ]/10

#### Semantic HTML
- **Status**: ✅ Pass / ⚠️ Partial / ❌ Fail
- **Issues**: [List specific issues]
- **Remediation**: [Specific fixes]

#### Keyboard Navigation
- **Status**: ✅ Pass / ⚠️ Partial / ❌ Fail
- **Issues**: [List specific issues]
- **Remediation**: [Specific fixes]

#### Color Contrast
- **Status**: ✅ Pass / ⚠️ Partial / ❌ Fail
- **Issues**: [List specific issues]
- **Remediation**: [Specific fixes]

#### Forms
- **Status**: ✅ Pass / ⚠️ Partial / ❌ Fail
- **Issues**: [List specific issues]
- **Remediation**: [Specific fixes]

#### Screen Reader Compatibility
- **Status**: ✅ Pass / ⚠️ Partial / ❌ Fail
- **Issues**: [List specific issues]
- **Remediation**: [Specific fixes]

#### Trust Signals
- **Status**: ✅ Pass / ⚠️ Partial / ❌ Fail
- **Issues**: [List specific issues]
- **Remediation**: [Specific fixes]

#### Critical Issues (Block Release)
- [Issue 1]
- [Issue 2]

#### Medium Issues (Should Fix)
- [Issue 1]
- [Issue 2]

#### Low Issues (Nice to Have)
- [Issue 1]
- [Issue 2]

---

## Related Documentation

- `.github/copilot-instructions.md` - Core principles and standards.
- `.github/AGENTS.md` - Accessibility Auditor agent definition.
- `.github/skills/ui-component-generator.md` - Component creation with a11y in mind.
- `WCAG 2.1 AA Quickstart`: w3.org/WAI/WCAG21/quickref/

---

**Last Updated**: 2026-10-11  
**Version**: 1.0
