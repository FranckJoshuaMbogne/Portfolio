# Franck Joshua Mbogne — Portfolio

Bilingual (English `/` + French `/fr`) portfolio built with React 19, Vite, TypeScript, Tailwind and Framer Motion.
Every page is pre-rendered to static HTML for SEO, and it's hosted on Firebase Hosting.

## 1. Run it on your Mac

```bash
cd ~/franck-portfolio
npm install
npm run dev          # http://localhost:5173
```

## 2. Put it on GitHub (new repo)

1. On github.com → **New repository** → name it `franck-portfolio` → leave it empty → Create.
2. In Terminal:

```bash
cd ~/franck-portfolio
git remote add origin https://github.com/FranckJoshuaMbogne/franck-portfolio.git
git push -u origin main
```

## 3. Create the Firebase project and go live

1. https://console.firebase.google.com → **Add project** → ID `franckjoshua-portfolio`
   (if that ID is taken, use another and put it in `.firebaserc` and `.env`).
2. In the project: **Build → Firestore Database → Create database** (production mode).
3. **Project settings → Your apps → Web (</>)** → register the app → copy the config values.
4. `cp .env.example .env` and paste the values into `.env`.
5. Deploy:

```bash
npm install -g firebase-tools   # once
firebase login                  # once
npm run deploy                  # builds, then deploys hosting + Firestore rules
```

Your site is live at `https://franckjoshua-portfolio.web.app`.
Custom domain later: Firebase console → Hosting → **Add custom domain**, then set `VITE_SITE_URL` in `.env` and redeploy.

**Consultation requests** are saved in Firestore → `consultations` (read them in the console).
Until Firebase is configured, the form opens WhatsApp with the request pre-filled, so no lead is lost.

## 4. Where to change things (VS Code paths)

| What | File |
|---|---|
| Phone, WhatsApp, email, LinkedIn, location | `src/config/site.ts` |
| **Your photo** | put `public/images/franck-portrait.jpg`, then set `media.portrait` in `src/config/site.ts` |
| **Showreel video** (home page) | put `public/videos/showreel.mp4`, then set `media.showreel` in `src/config/site.ts` |
| Hero headline, About story, stats, problems, offers, FAQ | `src/data/profile.ts` |
| Companies, roles, dates, highlights, education, certifications | `src/data/experience.ts` |
| Projects (websites, brands, campaigns) | `src/data/projects.ts` |
| **Project screenshots / videos** | put files in `public/images/work/` or `public/videos/`, then set `image:` / `video:` on the project in `src/data/projects.ts` |
| Services (5 areas) and where you did them | `src/data/services.ts` |
| Buttons, menus, form labels (EN + FR) | `src/i18n/ui.ts` |
| Colours (dark green, forest, ivory-green, gold) | `tailwind.config.ts` → `colors` |
| Fonts (Plus Jakarta Sans + Playfair Display italic) | `tailwind.config.ts` (top) + `src/index.css` (imports) |
| Social share image | `public/og/franck-og.png` (1200×630) |
| Favicon | `public/favicon.svg` |

Every text has an `en` and an `fr` version — edit both.

## Pages

`/` · `/work` · `/work/:project` · `/services` · `/services/:area` · `/experience` · `/about` · `/book` · `/thank-you` — and the same under `/fr/…`.
