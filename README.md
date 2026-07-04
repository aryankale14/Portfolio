# Aaryan Kale // AI & Systems Engineer
> **The Technical Ledger** — A high-density, performance-optimized developer portfolio built with React, Vite, and Vanilla CSS.
>
> 🌐 **Live Demo**: [portfolio-navy-six-aurfrtxam3.vercel.app](https://portfolio-navy-six-aurfrtxam3.vercel.app/)

---

## 🎨 Visual Identity & Aesthetic
Built from scratch using **"The Technical Ledger"** design system guidelines, prioritizing structured information density, precise typography, and interaction-driven micro-animations:
- **Typography**: Complete integration of `Geist` (Sans) and `Geist Mono` families for geometric, monospace text alignment.
- **Color Palette**: Dark mode canvas with a charcoal slate background (`oklch(12% 0.01 220)`) and a technical, low-ratio luminous emerald green accent (`oklch(76% 0.15 152)`).
- **Elevation**: Flat-by-default visual components with thin solid borders (`1px solid var(--border)`).
- **Dot-Grid Canvas**: A custom interactive canvas overlay that tracks mouse movements, dynamically expanding and illuminating background dots within a proximity radius.

---

## 🚀 Key Features

### 1. Interactive Developer Console (Terminal)
An interactive retro CLI console overlay supporting real-time commands:
- `help` — Lists all available commands and operations.
- `about` — Retrieves professional summary, technical orientation, and metrics.
- `skills` — Logs categorizations (AI/ML, Backend, Databases, Tools).
- `experience` — Fetches vertical work timeline (Capgemini GenAI Analyst roles).
- `projects` — Shows a catalog of developed systems.
- `resume` — Triggers client download of the PDF resume.
- `contact` — Logs email, phone, and social coordinates.
- `clear` — Wipes console logs.
- `close` / `exit` — Collapses the terminal overlay.

### 2. Adaptive Mobile UX
Refactored layout boundaries ensuring a completely native touch feel:
- **Terminal modal**: Transitions from a floating dashboard card on desktop to a fullscreen layout overlay on viewports under `768px`.
- **Project spec sheets**: Centers as a standard overlay window on desktop, but slides up as a bottom sheet with top-rounded corners and a visual drag-handle on mobile.
- **Mobile Menu**: Responsive hamburger toggle collapsing navigation into a vertical drawer.
- **Coarse pointer targets**: All button elements and links feature padding scales optimized to exceed the standard `44x44px` interactive touch targets.

---

## 🛠️ Tech Stack & Optimization
- **Core**: React 18, Vite (Fast HMR compile cycles).
- **Styling**: Pure Vanilla CSS custom properties (no heavy runtime utility libraries).
- **Animations**: CSS transitions combined with `requestAnimationFrame` canvas rendering.
- **Performance**: Static arrays extracted outside components to avoid garbage collection pressure; cached DOM layout queries (`getBoundingClientRect`) to prevent reflow bottlenecks.

---

## 📦 Directory Structure
```bash
├── public/
│   ├── favicon.svg             # Page icon
│   └── Aaryan_Kale_Resume.pdf  # Static resume PDF source
├── src/
│   ├── assets/                 # SVGs and visual assets
│   ├── components/
│   │   ├── About.jsx           # Bio and metadata table
│   │   ├── Contact.jsx         # Contact channel CTAs
│   │   ├── Education.jsx       # University & credentials cards
│   │   ├── Experience.jsx      # Work timeline component
│   │   ├── Footer.jsx          # Copyright and system descriptors
│   │   ├── Hero.jsx            # Canvas grid, typing effect & headers
│   │   ├── Navbar.jsx          # Sticky header & mobile drawer
│   │   ├── Projects.jsx        # Project ledger panels
│   │   ├── Skills.jsx          # Technical tag grids
│   │   └── Terminal.jsx        # Interactive CLI window
│   ├── App.jsx                 # App composition and modals state
│   ├── index.css               # Design system rules, variables and layouts
│   └── main.jsx                # Entrypoint
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Server
```bash
npm run dev
```

### 3. Compile Production Bundle
```bash
npm run build
```
