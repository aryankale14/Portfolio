---
name: "Aaryan Kale Portfolio"
description: "High-performance AI Engineering showcase with sleek technical aesthetics."
---

<!-- SEED: re-run $impeccable document once there's code to capture the actual tokens and components. -->

# Design System: Aaryan Kale Portfolio

## 1. Overview

**Creative North Star: "The Technical Ledger"**

A high-density, precise design system tailored for showcase-grade AI and software engineering. It prioritizes layout stability, crisp typography hierarchy, and subtle interactive states to project expert capability. Spacing is calculated on a strict 8px grid to ensure visual alignment, while the density of information balances depth with clean negative space. It draws visual inspiration from developer-centric tools like Linear and Vercel.

This system explicitly rejects the generic, saturated "AI template" aesthetic (floating glassmorphism cards, neon purple/blue background glows, or low-contrast body text).

**Key Characteristics:**
- High-density information display without visual clutter.
- Responsive, performance-optimized micro-interactions.
- Strict layout alignment with thin, purposeful dividing lines.

## 2. Colors

A restrained color strategy consisting of deep charcoal and off-white neutrals with a single high-contrast technical accent.

**The Restrained Accent Rule.** The primary accent is used strictly for focus points and interactive cues (e.g. status indicators, active text states) and must make up less than 10% of any given screen. Its rarity drives its communicative power.

### Primary
- **Technical Green/Blue** [to be resolved during implementation]: Used exclusively for active highlights and system pulses.

### Neutral
- **Ink / Slate Dark** [to be resolved during implementation]: Deep background and dominant text colors.
- **Paper / Slate Light** [to be resolved during implementation]: Warm/cool off-whites for high-contrast text and container highlights.

## 3. Typography

**Display Font:** Sans-Serif (e.g., Inter, Outfit, or system default)
**Body Font:** Sans-Serif (e.g., Inter, or system default)
**Label/Mono Font:** Monospace (e.g., Roboto Mono, SF Mono)

**Character:** High-clarity sans-serif pairing with mono elements for data and labels, emphasizing technical rigor and modern interface conventions.

**The Letter-Spacing Floor Rule.** H1–H3 display headings must never have a letter-spacing tighter than `-0.04em`. Tight tracking must look designed and deliberate, never cramped or touching.

### Hierarchy
- **Display** (Bold, clamp, lineHeight: 1.1): [To be resolved during implementation; hero headlines only.]
- **Headline** (Semi-Bold, large, lineHeight: 1.2): [Section headers.]
- **Title** (Medium, medium, lineHeight: 1.3): [Sub-sections and cards.]
- **Body** (Regular, base, lineHeight: 1.5, max line length 65-75ch): [Prose and descriptions.]
- **Label** (Medium, small, letterSpacing: 0.05em, uppercase): [Metadata, tag labels, and numeric values.]

## 4. Elevation

The system is flat-by-default to align with physical console aesthetics. Depth is conveyed through thin, high-contrast borders and structural background color steps rather than diffuse drop shadows.

**The Flat-By-Default Rule.** Surfaces must remain flat at rest. Drop shadows must not be used as static decoration and are permitted only to indicate active elements during hover or keyboard focus states.

## 5. Components

[Components will be auto-extracted and documented here once the codebase is initialized and components are implemented.]

## 6. Do's and Don'ts

### Do:
- **Do** use thin (1px) solid borders to define containers.
- **Do** enforce a strict 65–75 character width limit on all long paragraphs to ensure optimal readability.
- **Do** respect the `@media (prefers-reduced-motion: reduce)` preference on every interactive element.

### Don't:
- **Don't** use overused purple-to-blue background gradients, neon accents, or floating glassmorphic blurs.
- **Don't** use side-stripe borders (e.g., `border-left` greater than 1px as a colored accent on cards or alerts).
- **Don't** use card-inside-card nested layouts.
- **Don't** allow text overflow; clamp display scales dynamically for mobile viewports.
