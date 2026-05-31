# Panth Patel — Portfolio

A modern, 3D-animated portfolio built with **React + Vite + Tailwind CSS + Three.js**.
It builds into a single `dist/index.html` file, so it's perfect for **free** static hosting.

## ✨ Features
- Interactive 3D animated background (react-three-fiber)
- Live GitHub projects section (auto-fetches all your public repos)
- Smooth scroll, animations (Framer Motion), fully responsive
- Working contact form (free via Formspree) + direct email/phone/LinkedIn links

---

## 🚀 Deploy FREE on GitHub Pages

1. **Create a repo** on GitHub, e.g. `panth19.github.io` (or any name like `portfolio`).
2. Push this project to that repo.
3. Build it locally:
   ```bash
   npm install
   npm run build
   ```
   This creates `dist/index.html` (a single self-contained file).
4. The easiest way — use a GitHub Action (already set up in `.github/workflows/deploy.yml`).
   - Push to the `main` branch.
   - In your repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   - Your site goes live at `https://<username>.github.io/<repo>/` and stays live free, forever.

> Because `vite.config.ts` already uses `viteSingleFile`, the whole site is one HTML file —
> no broken asset paths on GitHub Pages.

---

## 📨 Enable the contact form (free)

The form uses **Formspree** (free tier: 50 submissions/month).

1. Go to https://formspree.io and sign up with email.
2. Create a new form. You'll get a form ID like `xanybkqr`.
3. Open `src/components/Contact.tsx` and replace the `FORMSPREE_ID` value with yours.
4. Rebuild & redeploy. Submissions arrive straight to your email.

If you skip this, the visible contact details (email, phone, LinkedIn) still work.

---

## 🖼️ Your photo
Replace `public/panth.jpg` with your own photo (same filename) to update the hero image.
