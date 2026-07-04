# Portfolio Francis Dollez

## Structure
```
portfolio/
├── index.html          ← Page principale
├── css/style.css       ← Tout le design system
├── js/main.js          ← Interactions + chargement JSON
├── data/projects.json  ← Tes projets (éditable facilement)
└── assets/img/         ← Tes images
    ├── photo-profil.jpg
    ├── og-cover.jpg
    └── cv-francis-dollez.pdf
```

## Ajouter ta photo
Dans `index.html`, remplace le bloc `hero__photo-placeholder` par :
```html
<img src="assets/img/photo-profil.jpg" alt="Francis Dollez, Lead Product Designer UX/UI">
```

## Ajouter un projet dans le portfolio
Ouvre `data/projects.json` et ajoute un objet dans le tableau `projects` :
```json
{
  "id": "mon-projet",
  "title": "Nom Client",
  "client": "Entreprise · Contexte",
  "period": "2024 — 2025",
  "role": "Lead Product Designer",
  "type": "freelance",
  "headline": "La phrase d'impact principale du projet",
  "metrics": ["Résultat 1", "Résultat 2", "Résultat 3"],
  "tags": [
    {"label": "UX Design", "color": "ux"},
    {"label": "B2B", "color": "dark"}
  ],
  "color": "ux",
  "featured": true
}
```
**Couleurs disponibles pour les tags :** `ux` (violet) · `ui` (rose) · `lead` (vert) · `dark` (noir/jaune) · `red` (rouge)

## Activer le formulaire de contact
Le formulaire est prêt visuellement. Pour qu'il envoie vraiment :

**Option A — Formspree (gratuit, 50 messages/mois)**
1. Crée un compte sur formspree.io
2. Crée un formulaire, récupère l'ID
3. Dans `index.html`, ajoute `action="https://formspree.io/f/TON_ID"` sur la balise `<form>`
4. Dans `main.js`, remplace la simulation par `form.submit()`

**Option B — Netlify Forms (si déployé sur Netlify)**
1. Ajoute `data-netlify="true"` sur la balise `<form>`
2. Netlify détecte automatiquement et gère les soumissions

## Déployer sur GitHub Pages
```bash
# 1. Crée un repo GitHub "portfolio" ou "francisdollez.fr"
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/TON-USERNAME/TON-REPO.git
git push -u origin main

# 2. Dans GitHub → Settings → Pages → Source : branch main, / (root)
# Ton site sera disponible sur : https://TON-USERNAME.github.io/TON-REPO
```

## SEO — Checklist
- [ ] Remplace l'URL `https://francisdollez.fr` dans index.html (balises og: et canonical)
- [ ] Ajoute une image `assets/img/og-cover.jpg` (1200×630px, fond jaune avec nom)
- [ ] Vérifie le titre et la description dans `<head>`
- [ ] Soumets ton sitemap sur Google Search Console après déploiement
