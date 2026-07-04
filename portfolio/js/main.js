/* ============================================
   FRANCIS DOLLEZ — PORTFOLIO · main.js
   ============================================ */

/* ── DARK MODE ── */
const html = document.documentElement;
const toggleBtn = document.getElementById('darkToggle');
const stored = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', stored);
updateToggleIcon(stored);

function updateToggleIcon(theme) {
  if (!toggleBtn) return;
  toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Mode clair' : 'Mode sombre');
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon(next);
  });
}

/* ── MENU HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
  // Fermer au clic lien
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ── SCROLL ANIMATION ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger pour les enfants
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.anim-up').forEach((el, i) => {
  el.dataset.delay = (i % 4) * 80;
  observer.observe(el);
});

/* ── NAV ACTIVE STATE ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.opacity = a.getAttribute('href') === `#${id}` ? '1' : '.7';
        a.style.fontWeight = a.getAttribute('href') === `#${id}` ? '700' : '400';
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => navObserver.observe(s));

/* ── CHARGER LES PROJETS DEPUIS JSON ── */
async function loadProjects() {
  try {
    const res = await fetch('./data/projects.json');
    const data = await res.json();
    renderCards(data.projects);
    renderStats(data.stats);
  } catch (e) {
    console.warn('projects.json non trouvé, affichage statique.');
  }
}

function renderCards(projects) {
  const grid = document.getElementById('xpGrid');
  if (!grid) return;
  grid.innerHTML = projects.map((p, i) => `
    <article class="xp-card anim-up" data-delay="${i * 100}" role="article" aria-label="${p.title}">
      <div class="xp-card__head">
        <span class="xp-card__client">${p.title} · ${p.client}</span>
        <span class="xp-card__period">${p.period} · ${p.type === 'freelance' ? 'Freelance' : 'CDI'}</span>
      </div>
      <div class="xp-card__body">
        <p class="xp-card__headline">${p.headline}</p>
        <ul class="xp-card__metrics" aria-label="Chiffres clés">
          ${p.metrics.map(m => `<li>${m}</li>`).join('')}
        </ul>
        <div class="xp-card__tags" aria-label="Tags">
          ${p.tags.map(t => `<span class="tag tag--${t.color}">${t.label}</span>`).join('')}
        </div>
      </div>
      <div class="xp-card__link" aria-hidden="true">
        Voir le projet <span>→</span>
      </div>
    </article>
  `).join('');

  // Re-observer les nouveaux éléments
  grid.querySelectorAll('.anim-up').forEach(el => observer.observe(el));
}

function renderStats(stats) {
  const band = document.getElementById('statsBand');
  if (!band) return;
  band.innerHTML = stats.map(s => `
    <div class="stat">
      <div class="stat__value">${s.value}</div>
      <div class="stat__label">${s.label}</div>
      <div class="stat__sub">${s.sub}</div>
    </div>
  `).join('');
}

/* ── FORMULAIRE DE CONTACT ── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const original = btn.textContent;

    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;

    // Simulation (à remplacer par Formspree / Netlify Forms)
    await new Promise(r => setTimeout(r, 1000));

    btn.textContent = '✓ Message envoyé !';
    btn.style.background = 'var(--lead)';

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

/* ── INIT ── */
loadProjects();
