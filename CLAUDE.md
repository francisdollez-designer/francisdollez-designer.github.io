# Projet — Francis Dollez · Dark Fantasy Illustrateur

## Stack technique
- HTML / CSS / JavaScript vanilla (pas de framework)
- Fichier unique : `index.html` (HTML + CSS + JS dans un seul fichier)
- Hébergement : GitHub Pages → `francisdollez-designer.github.io`

## Figma
- Fichier principal : https://www.figma.com/design/YlzT9xj9mTF1waayvu5c1b/FD-ILLU-DARK-FANTASY-SITE
- Connexion MCP Figma active dans Claude.ai → fournir le lien du nœud pour l'implémentation

## Design System

### Typographie
| Rôle           | Police                  | Usage                          |
|----------------|-------------------------|-------------------------------|
| Titres H1      | Cinzel Decorative italic bold | Grands titres hero       |
| Titres H2/H3   | Cinzel Decorative bold  | Titres de sections             |
| Labels / Nav   | Cinzel Regular          | Navigation, tags, labels       |
| Corps de texte | EB Garamond             | Paragraphes, descriptions      |
| Note           | Yellow Magician = MAJUSCULES UNIQUEMENT (illisible en minuscules) |

### Palette de couleurs
```css
--gold:        #e9bf4b;   /* Or principal */
--gold-dark:   #7a5e1e;   /* Or sombre / dividers */
--gold-light:  #ffc235;   /* Or clair / tags */
--gold-pale:   #f6e1b6;   /* Or pâle / corps de texte */
--cream:       #fffbf2;   /* Blanc crème / titres */
--sand:        #c8b896;   /* Sable / textes secondaires */
--bg-dark:     #050403;   /* Fond principal */
--bg-mid:      #1f1f1f;   /* Fond sections alternées */
--bg-warm:     #413f39;   /* Fond cards / process */
--bg-nav:      #3d3d3d;   /* Fond nav et footer */
```

### Composants récurrents
- **Séparateur** : ligne + icône ✦ + ligne, couleur `--gold-dark`, entre chaque section
- **Section label** : trait horizontal 40px + texte Cinzel uppercase tracking-[4.8px] couleur `--gold`
- **Bouton primaire** : fond `--gold`, texte `#1c1911`, Cinzel bold uppercase
- **Bouton outline** : border `--gold-dark`, texte `--gold`, Cinzel bold uppercase
- **Tags** : border 1px `--gold-light`, Cinzel 9.6px uppercase, padding 8px 18px
- **Curseur custom** : point doré 12px + anneau 32px, mix-blend-mode difference
- **Reveal scroll** : fade + translateY(30px) au scroll via IntersectionObserver

### Animations
- Entrée hero : fadeUp avec animation-delay échelonnés (0.3s, 0.5s, 0.7s...)
- Scroll reveal : `.reveal` → `.reveal.visible` via IntersectionObserver threshold 0.12
- Hover nav links : underline slide depuis la gauche
- Hover gallery : scale(1.06) sur l'image + apparition overlay + label

## Structure des sections (dans l'ordre)
1. **Nav** — fixe, fond noir/transparent, border-top or, logo + 6 liens
2. **Hero** — 100vh, illustration démon en fond opacity 0.24, ornement SVG, titre + CTA
3. **About** — 2 colonnes, texte gauche + image droite avec cadre or
4. **Gallery** — grille asymétrique 12 colonnes, items avec hover overlay
5. **Shop** — 3 cards produits, image + badge + prix + CTA
6. **Process** — 4 étapes I/II/III/IV, fond `--bg-warm`, border-top or
7. **Blog** — article vedette grand format + 2 articles + 1 article bas
8. **Contact** — formulaire centré, labels flottants, fond transparent
9. **Footer** — 4 colonnes, brand + navigation + boutique + infos légales

## Conventions de code
- CSS variables déclarées dans `:root`
- Classes BEM-like : `.section-name__element--modifier`
- Responsive : breakpoints 1024px et 768px
- Pas de dépendances externes sauf Google Fonts
- JS vanilla : cursor animé, IntersectionObserver reveal, smooth scroll, nav scroll
