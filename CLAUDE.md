@AGENTS.md

<!-- # Portfolio Handoff Guide — Pritom Das

## Current Status
- ✅ GitHub repo: `github.com/pritomdas01/portfolio`
- ✅ Vercel live: `https://portfolio-woad-two-13.vercel.app/`
- ✅ All components created and deployed
- ❌ **Layout broken** — Tailwind v4 class scanning issue

---

## Folder Structure
```
Portfolio/
└── portfolio/          ← git root (cd here for all commands)
    └── app/
        ├── components/
        │   ├── Navbar.tsx
        │   ├── Hero.tsx
        │   ├── About.tsx
        │   ├── Projects.tsx
        │   ├── Collaboration.tsx
        │   ├── Contact.tsx
        │   └── CursorGlow.tsx
        ├── globals.css
        ├── layout.tsx
        └── page.tsx
```

---

## THE FIX NEEDED (Do this first!)

The site layout is broken because Tailwind v4 isn't scanning component files properly.

### Step 1 — Downgrade to Tailwind v3
```powershell
cd C:\Users\Pritom\OneDrive\Desktop\Portfolio\portfolio
npm install tailwindcss@3 autoprefixer
```

### Step 2 — Update `postcss.config.js`
Replace entire content with:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Step 3 — Update `tailwind.config.js`
Replace entire content with:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 4 — Update `globals.css`
Replace entire content with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #050505;
  color: #ffffff;
  font-family: var(--font-geist-sans), sans-serif;
  overflow-x: hidden;
}

::selection {
  background: rgba(139, 92, 246, 0.3);
  color: #fff;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #050505;
}

::-webkit-scrollbar-thumb {
  background: #8b5cf6;
  border-radius: 3px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

.floating { animation: float 4s ease-in-out infinite; }
.glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
```

### Step 5 — Push to GitHub
```powershell
git add .
git commit -m "fix: downgrade to tailwind v3"
git push
```

Vercel auto-deploys — wait 1-2 min then check the site.

---

## Things to Customize Later
- `About.tsx` — Update bio, stats, skills
- `Projects.tsx` — Add real project links, images
- `Collaboration.tsx` — Update social links (LinkedIn, Facebook, Gmail)
- `Contact.tsx` — Update email address (`your@gmail.com` → real email)
- `layout.tsx` — Update metadata title/description

---

## Git Workflow (for future updates)
```powershell
cd C:\Users\Pritom\OneDrive\Desktop\Portfolio\portfolio
git add .
git commit -m "your message here"
git push
```
Vercel auto-deploys on every push to main.

---

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS v3
- Framer Motion
- Vercel (hosting)
- GitHub (source control) -->