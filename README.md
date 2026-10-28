# Adarsh Nair (PHANTOMZORRO) — Personal Portfolio

Single-page developer portfolio designed with a blockchain explorer aesthetic.

Built with vanilla **HTML5**, **CSS3**, and **vanilla JavaScript** (no build step, zero dependencies).

## ⚡ Highlights
- **Blockchain Explorer Chain**: Vertical chain of project blocks linked by pseudo-hash connector lines.
- **Dynamic GitHub Sync**: Syncs public repositories directly via the GitHub API with safe DOM rendering (`textContent`).
- **Owner Tool**: Accessible at `#add-project` to fetch and parse any GitHub README into a structured project block.
- **Design Tokens**: Warm charcoal black background (`#0e0b09`), desk lamp amber glow (`#f5a623`), and status indicators.
- **Interactive Mode Switch**: Toggle between dark and light themes with `localStorage` persistence.
- **Responsive & Accessible**: Clean layouts tested down to 400px viewports with visible focus states and reduced-motion support.

## 🚀 Deployment
Deployable directly on **GitHub Pages** (free hosting at `https://phantomzorro.github.io`) or on **Vercel**:
```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📄 License
MIT © 2026 Adarsh Nair
