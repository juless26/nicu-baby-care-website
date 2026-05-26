# NICU Baby Care Design System

## Brand Identity

NICU Baby Care is a nonprofit organization dedicated to launching innovative products that improve care for NICU babies. The design system balances professionalism and trustworthiness with warmth and hope, reflecting both the serious nature of neonatal care and the optimism of innovation.

## Aesthetic Direction

**Swiss modernist with humanist warmth** — Clean, precise layouts with generous breathing room, softened by warm neutrals and carefully chosen serif typography for key moments. Professional enough for healthcare stakeholders, approachable enough for families.

## Color Palette

### Primary Colors
```css
--color-primary-soft-blue: #4A90A4;     /* Calm, trustworthy - primary brand color */
--color-primary-deep-teal: #2C5F6F;     /* Stability, depth - headers and emphasis */
--color-primary-sky: #A8D5E2;           /* Hope, lightness - accents and highlights */
```

### Supporting Colors
```css
--color-warm-peach: #F4C7A2;            /* Warmth, care - highlights and CTAs */
--color-soft-pink: #F4A5B9;             /* Compassion, love - heart icons and accents */
--color-soft-lavender: #E6D5E8;         /* Gentle, supportive - secondary accents */
--color-sage: #B8C5B4;                   /* Growth, renewal - subtle backgrounds */
```

### Neutrals
```css
--color-cream: #FAF7F2;                 /* Canvas background - soft, not harsh white */
--color-warm-gray-50: #F5F3EF;          /* Light surfaces */
--color-warm-gray-100: #E8E5DF;         /* Borders, dividers */
--color-warm-gray-300: #C2BDB4;         /* Subtle text, placeholders */
--color-warm-gray-600: #6B6762;         /* Body text */
--color-warm-gray-900: #2D2A26;         /* Headers, strong emphasis */
```

### Semantic Colors
```css
--color-success: #7BA977;
--color-warning: #E8A956;
--color-error: #D17A6F;
--color-info: #4A90A4;
```

## Typography

### Font Families
```css
--font-display: 'Lora', Georgia, serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
```

### Type Scale
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

## Spacing System

```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

## Layout Principles

### Grid System
- **Max content width**: 1280px
- **Breakpoints**:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- **Columns**: 12-column grid
- **Gutters**: 24px (desktop), 16px (mobile)

### Spacing Guidelines
- Section padding: 80px - 120px (desktop), 48px - 64px (mobile)
- Component spacing: Follow 8px grid (multiples of 8)
- Generous margins between content blocks to create breathing room

### Asymmetric Balance
- Use 60/40 or 2/3 - 1/3 splits for visual interest
- Offset images and text blocks rather than centering everything
- White space is an active design element, not empty space

## Component Patterns

### Buttons

**Primary Button**
- Background: `--color-primary-soft-blue`
- Text: white, `--font-body`, `--font-semibold`
- Padding: 12px 24px
- Border radius: 6px
- Hover: darken by 10%

**Secondary Button**
- Background: transparent
- Border: 2px solid `--color-primary-deep-teal`
- Text: `--color-primary-deep-teal`, `--font-body`, `--font-semibold`
- Padding: 10px 22px
- Border radius: 6px
- Hover: background `--color-warm-gray-50`

**Accent Button**
- Background: `--color-warm-peach`
- Text: `--color-warm-gray-900`, `--font-body`, `--font-semibold`
- Padding: 12px 24px
- Border radius: 6px
- Hover: darken by 10%

### Cards

```
Background: white
Border: 1px solid --color-warm-gray-100
Border radius: 8px
Padding: 32px
Shadow: 0 2px 8px rgba(0,0,0,0.04)
Hover shadow: 0 4px 16px rgba(0,0,0,0.08)
```

### Headers

- H1: `--font-display`, `--text-5xl`, `--font-semibold`, `--color-warm-gray-900`
- H2: `--font-display`, `--text-4xl`, `--font-semibold`, `--color-warm-gray-900`
- H3: `--font-body`, `--text-2xl`, `--font-semibold`, `--color-warm-gray-900`
- H4: `--font-body`, `--text-xl`, `--font-semibold`, `--color-warm-gray-900`

### Body Text

- Default: `--font-body`, `--text-base`, `--font-normal`, `--color-warm-gray-600`
- Large: `--text-lg`, `--leading-relaxed`
- Small: `--text-sm`

## Imagery Guidelines

### Photography Style
- Authentic, documentary-style images
- Warm color grading
- Natural lighting preferred
- Focus on hands, care, connection
- Avoid overly clinical or sterile hospital aesthetics

### Iconography
- Line-based icons with 2px stroke
- Rounded corners (1px radius)
- Monochrome or use primary color palette
- 24px default size

## Motion & Interaction

### Animation Timing
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 350ms;
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);
```

### Hover States
- Subtle elevation changes
- Smooth color transitions
- Scale transforms (1.02 - 1.05) for cards/images

### Focus States
- 2px outline with `--color-primary-soft-blue`
- 2px offset
- Never remove focus indicators

## Accessibility

- **Color contrast**: Minimum 4.5:1 for body text, 3:1 for large text
- **Focus indicators**: Always visible
- **Touch targets**: Minimum 44x44px
- **Motion**: Respect `prefers-reduced-motion`
- **Screen readers**: Semantic HTML, proper ARIA labels

## Brand Voice

- **Compassionate**: Acknowledge the challenges families face
- **Hopeful**: Emphasize innovation and positive outcomes
- **Professional**: Build trust through expertise
- **Clear**: Use plain language, avoid medical jargon when possible
- **Action-oriented**: Guide users toward involvement and support
