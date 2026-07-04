/**
 * cube.js — Moteur de rendu SVG du cube 3x3 (vue de dessus + bords)
 *
 * Représentation :
 *   top[9]   = face du dessus (vue de face 3x3, indexée ligne par ligne TL→BR)
 *   edges = { top:[3], right:[3], bottom:[3], left:[3] }
 *     chaque bord = [gauche, centre, droite] vu depuis le dessus
 *
 * Couleurs : 'Y'=jaune ref, 'G'=gris neutre
 */

const CUBE_COLORS = {
  Y: () => REF_COLOR,       // couleur de référence (dynamique)
  G: () => '#a2acae',       // gris neutre
  W: () => '#ffffff',
};

let REF_COLOR = '#ffbb27';

function setRefColorGlobal(hex) {
  REF_COLOR = hex;
}

/**
 * Génère un SVG du cube vue de dessus + 4 bords visibles
 * @param {Object} state
 *   state.top    : string[9]  — 'Y' ou 'G', ligne par ligne
 *   state.top3   : string[3]  — bord du haut (N)
 *   state.right3 : string[3]  — bord de droite (E)
 *   state.bot3   : string[3]  — bord du bas (S)
 *   state.left3  : string[3]  — bord de gauche (O)
 * @param {number} size  px totaux du SVG
 */
function renderCubeSVG(state, size = 80) {
  const G = size;
  // Marges pour les bords latéraux
  const M  = G * 0.10;  // largeur des bandes bord
  const gap = G * 0.025;
  const inner = G - M * 2 - gap * 2;
  const cell = (inner - gap * 2) / 3;

  const top    = state.top    || Array(9).fill('G');
  const top3   = state.top3   || ['G','G','G'];
  const right3 = state.right3 || ['G','G','G'];
  const bot3   = state.bot3   || ['G','G','G'];
  const left3  = state.left3  || ['G','G','G'];

  function col(c) {
    return CUBE_COLORS[c] ? CUBE_COLORS[c]() : c;
  }

  // Coordonnées de la grille 3x3 principale
  const x0 = M + gap;
  const y0 = M + gap;

  let rects = '';

  // === Face principale 3x3 (top view)
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const cx = x0 + c * (cell + gap);
      const cy = y0 + r * (cell + gap);
      const color = col(top[r * 3 + c]);
      rects += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${cell.toFixed(1)}" height="${cell.toFixed(1)}" rx="1.5" fill="${color}"/>`;
    }
  }

  // === Bord HAUT (N) — 3 cellules horizontales
  for (let c = 0; c < 3; c++) {
    const cx = x0 + c * (cell + gap);
    const cy = gap;
    const h  = M - gap;
    rects += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${cell.toFixed(1)}" height="${h.toFixed(1)}" rx="1" fill="${col(top3[c])}"/>`;
  }

  // === Bord BAS (S)
  for (let c = 0; c < 3; c++) {
    const cx = x0 + c * (cell + gap);
    const cy = y0 + 3 * cell + 2 * gap + gap;
    const h  = M - gap;
    rects += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${cell.toFixed(1)}" height="${h.toFixed(1)}" rx="1" fill="${col(bot3[c])}"/>`;
  }

  // === Bord GAUCHE (O) — 3 cellules verticales
  for (let r = 0; r < 3; r++) {
    const cx = gap;
    const cy = y0 + r * (cell + gap);
    const w  = M - gap;
    rects += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${w.toFixed(1)}" height="${cell.toFixed(1)}" rx="1" fill="${col(left3[r])}"/>`;
  }

  // === Bord DROIT (E)
  for (let r = 0; r < 3; r++) {
    const cx = x0 + 3 * cell + 2 * gap + gap;
    const cy = y0 + r * (cell + gap);
    const w  = M - gap;
    rects += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${w.toFixed(1)}" height="${cell.toFixed(1)}" rx="1" fill="${col(right3[r])}"/>`;
  }

  return `<svg viewBox="0 0 ${G} ${G}" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`;
}

/**
 * Cube miniature pour la bottom nav (plus simple, carré)
 */
function renderNavCubeSVG(topRow3, leftCenter, rightCenter, bottomCenter, refColor) {
  const save = REF_COLOR;
  if (refColor) REF_COLOR = refColor;
  const svg = renderCubeSVG({
    top: ['Y','G','G','Y','Y','Y','Y','G','G'],
    top3: [topRow3[0], topRow3[1], topRow3[2]],
    right3: ['G', rightCenter, 'G'],
    bot3: ['G', bottomCenter, 'G'],
    left3: ['G', leftCenter, 'G'],
  }, 30);
  REF_COLOR = save;
  return svg;
}

/**
 * Parse une formule "R U R' U'" → tableau de tokens
 */
function parseFormula(str) {
  // Tokenise : chaque lettre optionnellement suivie de ' ou 2 ou w
  const tokens = [];
  const re = /[rludfbxyzRLUDFBxyz][w]?['2]?/g;
  let m;
  while ((m = re.exec(str)) !== null) {
    tokens.push(m[0]);
  }
  return tokens;
}

/**
 * Retourne la couleur de move pour un token
 */
function moveColor(token) {
  const base = token[0].toUpperCase();
  const map = {
    L: 'var(--col-L)',
    R: 'var(--col-R)',
    U: 'var(--col-U)',
    F: 'var(--col-F)',
    B: 'var(--col-B)',
    D: 'var(--col-D)',
  };
  // wide moves
  if (token.toLowerCase().includes('r') || token === 'r' || (token[0] === 'r')) {
    return 'var(--col-r)';
  }
  return map[base] || '#c0c0c0';
}

/**
 * Génère les blocs de mouvements illustrés pour le popup
 * Pour l'instant : badge coloré + mini-cube simplifié indiquant la face
 */
function renderMovesHTML(formula) {
  const tokens = parseFormula(formula);
  return tokens.map(tok => {
    const base = tok[0].toUpperCase();
    const isPrime = tok.includes("'");
    const isDouble = tok.includes("2");
    const isWide = tok.toLowerCase().startsWith('r') || tok.toLowerCase() === 'r';

    // Détermine face colorée pour mini-cube
    const faceColors = getFaceMiniCube(base, isPrime);
    const miniSVG = renderMiniMoveCubeSVG(faceColors, base, isPrime, isDouble);

    const bgColor = getMoveColor(base, tok);

    return `
      <div class="move-block">
        <div class="move-badge" style="background:${bgColor}">${tok}</div>
        <div class="move-mini-cube">${miniSVG}</div>
      </div>`;
  }).join('');
}

function getMoveColor(base, tok) {
  const b = (tok[0] === tok[0].toLowerCase() && tok[0] !== tok[0].toUpperCase()) ? 'r' : base;
  const map = { L:'var(--col-L)', R:'var(--col-R)', U:'var(--col-U)', F:'var(--col-F)', B:'var(--col-B)', D:'var(--col-D)', r:'var(--col-r)' };
  if (/^[rlud]$/.test(tok[0])) return 'var(--col-r)';
  return map[base] || '#c0c0c0';
}

/**
 * Mini cube 3x3 montrant la face active en couleur
 */
function renderMiniMoveCubeSVG(faceConfig, base, isPrime, isDouble) {
  const W = 72; const H = 62;
  // Grille face 3x3 centrée
  const cw = 14; const ch = 14; const cg = 2;
  const gw = 3*cw + 2*cg; const gh = 3*ch + 2*cg;
  const ox = (W - gw) / 2; const oy = (H - gh) / 2;

  let cells = '';
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const x = ox + c*(cw+cg);
      const y = oy + r*(ch+cg);
      const color = faceConfig[r*3+c];
      cells += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cw}" height="${ch}" rx="2" fill="${color}"/>`;
    }
  }

  // Flèche de direction
  const arrowColor = '#444';
  const arrow = isPrime ? renderArrowCCW(W, H, base) : renderArrowCW(W, H, base);

  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${cells}${arrow}</svg>`;
}

function getFaceMiniCube(base, isPrime) {
  const N = '#c6c6c6'; // neutre
  const A = REF_COLOR; // face active = couleur ref simplifiée

  // Affiche quelle colonne/ligne est la face active
  const faces = {
    L: [A,N,N, A,N,N, A,N,N],  // colonne gauche
    R: [N,N,A, N,N,A, N,N,A],  // colonne droite
    U: [A,A,A, N,N,N, N,N,N],  // ligne haute
    D: [N,N,N, N,N,N, A,A,A],  // ligne basse
    F: [N,N,N, N,A,N, N,N,N],  // centre (vue frontale symbolique)
    B: [N,N,N, N,N,N, N,N,N],  // dos, idem
  };
  return faces[base] || Array(9).fill(N);
}

function renderArrowCW(W, H, base) {
  // Petite flèche rotative selon la face
  const positions = {
    U: { x: W/2, y: 6, rotate: 0 },
    D: { x: W/2, y: H-6, rotate: 180 },
    L: { x: 6, y: H/2, rotate: 270 },
    R: { x: W-6, y: H/2, rotate: 90 },
    F: { x: W/2, y: H-8, rotate: 180 },
    B: { x: W/2, y: 8, rotate: 0 },
  };
  const p = positions[base] || { x: W/2, y: H-8, rotate: 0 };
  return `<path d="M-8,0 Q0,-8 8,0" stroke="#444" stroke-width="2" fill="none" marker-end="url(#arr)" transform="translate(${p.x},${p.y}) rotate(${p.rotate})"/>
  <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#444" stroke-width="1.5"/></marker></defs>`;
}

function renderArrowCCW(W, H, base) {
  const positions = {
    U: { x: W/2, y: 6, rotate: 0 },
    D: { x: W/2, y: H-6, rotate: 180 },
    L: { x: 6, y: H/2, rotate: 270 },
    R: { x: W-6, y: H/2, rotate: 90 },
    F: { x: W/2, y: H-8, rotate: 180 },
    B: { x: W/2, y: 8, rotate: 0 },
  };
  const p = positions[base] || { x: W/2, y: H-8, rotate: 0 };
  // Miroir de la flèche pour sens anti-horaire
  return `<path d="M8,0 Q0,-8 -8,0" stroke="#444" stroke-width="2" fill="none" marker-end="url(#arr2)" transform="translate(${p.x},${p.y}) rotate(${p.rotate})"/>
  <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#444" stroke-width="1.5"/></marker></defs>`;
}
