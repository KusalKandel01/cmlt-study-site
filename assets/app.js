// ===== Shared navigation (grouped by year, dropdown-based, easy to extend) =====
const SITE_NAV_YEARS = [
  {
    key: "year1", label: "Year 1",
    hub: { href: "../index.html#subjects", label: "Year 1 Overview" },
    subjects: [
      {key:"anatomy", href:"anatomy.html", label:"Anatomy & Phys."},
      {key:"chemistry", href:"chemistry.html", label:"Chemistry"},
      {key:"physics", href:"physics.html", label:"Physics"},
      {key:"botany", href:"botany.html", label:"Botany"},
      {key:"zoology", href:"zoology.html", label:"Zoology"},
      {key:"math", href:"math.html", label:"Math & Stats"},
      {key:"english", href:"english.html", label:"English"},
      {key:"nepali", href:"nepali.html", label:"Nepali"},
      {key:"social", href:"social.html", label:"Social Studies"},
    ]
  },
  {
    key: "year2", label: "Year 2",
    hub: { href: "../year2.html", label: "Year 2 Overview" },
    subjects: [
      {key:"y2-microbiology", href:"y2-microbiology.html", label:"Microbiology & Immunology"},
      {key:"y2-hematology", href:"y2-hematology.html", label:"Hematology & Blood Banking"},
      {key:"y2-biochemistry", href:"y2-biochemistry.html", label:"Clinical Biochemistry"},
      {key:"y2-parasitology", href:"y2-parasitology.html", label:"Medical Parasitology"},
      {key:"y2-pathology", href:"y2-pathology.html", label:"Clinical Pathology"},
      {key:"y2-publichealth", href:"y2-publichealth.html", label:"Public Health & First Aid"},
    ]
  },
  {
    key: "year3", label: "Year 3",
    hub: { href: "../year3.html", label: "Year 3 Overview" },
    subjects: [
      {key:"y3-histopathology", href:"y3-histopathology.html", label:"Histopathology & Cytopathology"},
      {key:"y3-instrumentation", href:"y3-instrumentation.html", label:"Instrumentation & Automation"},
      {key:"y3-labmanagement", href:"y3-labmanagement.html", label:"Clinical Lab Management"},
      {key:"y3-clinical-practicum", href:"y3-clinical-practicum.html", label:"Clinical Practicum I–III"},
    ]
  },
];
const SITE_NAV_TAIL = [
  {key:"tools", href:"../tools.html", label:"Tools"},
  {key:"exam-routine", href:"../exam-routine.html", label:"Exam Routine"},
];

function _resolveNavHref(href, isRoot){
  if(!isRoot) return href;
  return href.startsWith('../') ? href.replace('../', '') : 'subjects/' + href;
}

function renderNav(activeHref, isRoot){
  const nav = document.getElementById('sitenav');
  if(!nav) return;

  const homeHref = _resolveNavHref('../index.html', isRoot);
  const homeActive = activeHref === 'index.html' || activeHref === null;
  let html = `<a href="${homeHref}"${homeActive ? ' class="active"' : ''}>Home</a>`;

  SITE_NAV_YEARS.forEach(year => {
    const subjectMatch = year.subjects.find(s => s.href === activeHref);
    const hubMatch = activeHref === year.hub.href.replace('../','').split('#')[0];
    const yearActive = !!subjectMatch || (hubMatch && !subjectMatch);
    const hubHref = _resolveNavHref(year.hub.href, isRoot);
    const subjectLinks = year.subjects.map(s => {
      const href = _resolveNavHref(s.href, isRoot);
      const isActive = s.href === activeHref;
      return `<a href="${href}"${isActive ? ' class="active"' : ''}>${s.label}</a>`;
    }).join('');
    html += `
      <div class="nav-dropdown${yearActive ? ' active' : ''}">
        <button class="nav-dropdown-toggle" type="button" aria-expanded="false">${year.label} <span class="caret">▾</span></button>
        <div class="nav-dropdown-panel">
          <a href="${hubHref}" class="nav-dropdown-hub">${year.hub.label} →</a>
          ${subjectLinks}
        </div>
      </div>`;
  });

  SITE_NAV_TAIL.forEach(item => {
    const href = _resolveNavHref(item.href, isRoot);
    const isActive = item.href.replace('../','') === activeHref;
    html += `<a href="${href}"${isActive ? ' class="active"' : ''}>${item.label}</a>`;
  });

  nav.innerHTML = `<div class="jump-inner">${html}</div>`;
  _initNavDropdowns(nav);
}

function _initNavDropdowns(nav){
  const dropdowns = nav.querySelectorAll('.nav-dropdown');
  function closeAll(except){
    dropdowns.forEach(d => { if(d !== except) d.classList.remove('open'); });
  }
  function positionPanel(d){
    const toggle = d.querySelector('.nav-dropdown-toggle');
    const panel = d.querySelector('.nav-dropdown-panel');
    const rect = toggle.getBoundingClientRect();
    panel.style.top = rect.bottom + 'px';
    panel.style.left = Math.min(rect.left, window.innerWidth - 240) + 'px';
  }
  dropdowns.forEach(d => {
    const toggle = d.querySelector('.nav-dropdown-toggle');
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = d.classList.contains('open');
      closeAll();
      if(!isOpen){ positionPanel(d); }
      d.classList.toggle('open', !isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });
    d.querySelector('.nav-dropdown-panel').addEventListener('click', e => e.stopPropagation());
  });
  document.addEventListener('click', () => closeAll());
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeAll(); });
  window.addEventListener('resize', () => closeAll());
  window.addEventListener('scroll', () => {
    nav.querySelectorAll('.nav-dropdown.open').forEach(positionPanel);
  }, {passive:true});
}

// ===== Storage helper (localStorage-backed, with safe in-memory fallback) =====
function storageAvailable(){
  try{
    const t = '__test__';
    localStorage.setItem(t,'1');
    localStorage.removeItem(t);
    return true;
  }catch(e){ return false; }
}
const HAS_STORAGE = storageAvailable();
let memoryStore = {};

function loadKey(key){
  if(HAS_STORAGE){
    try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : {}; }
    catch(e){ return {}; }
  }
  return memoryStore[key] || {};
}
function saveKey(key, data){
  if(HAS_STORAGE){
    try{ localStorage.setItem(key, JSON.stringify(data)); }catch(e){ memoryStore[key] = data; }
  } else {
    memoryStore[key] = data;
  }
}

const PROGRESS_KEY = 'cmlt-study-progress-v1';
const PREFS_KEY = 'cmlt-study-prefs-v1';

function loadProgress(){ return loadKey(PROGRESS_KEY); }
function saveProgress(data){ saveKey(PROGRESS_KEY, data); }
function loadPrefs(){ return loadKey(PREFS_KEY); }
function savePrefs(data){ saveKey(PREFS_KEY, data); }

// ===== Theme + font scale (applied immediately by inline head script; this re-applies on nav changes) =====
function applyPrefs(){
  const prefs = loadPrefs();
  if(prefs.theme === 'dark'){
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  document.documentElement.style.setProperty('--font-scale', prefs.fontScale || 1);
}

function toggleTheme(){
  const prefs = loadPrefs();
  prefs.theme = prefs.theme === 'dark' ? 'light' : 'dark';
  savePrefs(prefs);
  applyPrefs();
  updateSettingsBarLabels();
}

function changeFontScale(delta){
  const prefs = loadPrefs();
  let scale = prefs.fontScale || 1;
  scale = Math.min(1.3, Math.max(0.85, +(scale + delta).toFixed(2)));
  prefs.fontScale = scale;
  savePrefs(prefs);
  applyPrefs();
}

function resetFontScale(){
  const prefs = loadPrefs();
  prefs.fontScale = 1;
  savePrefs(prefs);
  applyPrefs();
}

function updateSettingsBarLabels(){
  const btn = document.getElementById('theme-toggle-btn');
  if(btn){
    const prefs = loadPrefs();
    btn.textContent = prefs.theme === 'dark' ? '☀ Light' : '🌙 Dark';
  }
}

function renderSettingsBar(){
  const nav = document.getElementById('sitenav');
  if(!nav) return;
  const bar = document.createElement('div');
  bar.className = 'settings-bar';
  bar.innerHTML = `
    <button id="font-minus-btn" title="Smaller text">A−</button>
    <button id="font-reset-btn" title="Reset text size">A</button>
    <button id="font-plus-btn" title="Larger text">A+</button>
    <span class="divider"></span>
    <button id="theme-toggle-btn">Dark</button>
  `;
  nav.insertAdjacentElement('afterend', bar);
  document.getElementById('font-minus-btn').addEventListener('click', ()=>changeFontScale(-0.05));
  document.getElementById('font-plus-btn').addEventListener('click', ()=>changeFontScale(0.05));
  document.getElementById('font-reset-btn').addEventListener('click', resetFontScale);
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
  updateSettingsBarLabels();
}

// ===== Stamp buttons (day checkboxes) =====
function initStampButtons(){
  const progress = loadProgress();
  document.querySelectorAll('.stamp-btn[data-id]').forEach(btn=>{
    const id = btn.dataset.id;
    if(progress[id]){
      btn.classList.add('done');
      btn.textContent = 'Done';
    }
    btn.addEventListener('click', ()=>{
      const p = loadProgress();
      const nowDone = !p[id];
      p[id] = nowDone;
      saveProgress(p);
      btn.classList.toggle('done', nowDone);
      btn.textContent = nowDone ? 'Done' : 'Mark done';
      renderDashboard(); // update homepage counters live if present
    });
  });
  document.querySelectorAll('.progress-note').forEach(n=>{
    n.textContent = HAS_STORAGE
      ? 'Progress saves automatically in this browser.'
      : 'Note: this browser is blocking local storage (common when opening files directly) — progress will reset on reload. Try hosting the folder or using a different browser if you want it saved.';
  });
}

// ===== Mark a subject page as "visited" =====
function markVisited(subjectKey){
  if(!subjectKey) return;
  const p = loadProgress();
  p['visited-' + subjectKey] = true;
  saveProgress(p);
}

// ===== Homepage progress dashboard =====
function renderDashboard(){
  const el = document.getElementById('dashboard');
  if(!el) return;
  const p = loadProgress();
  const daysDone = Object.keys(p).filter(k => k.startsWith('day') && p[k]).length;
  const year1Subjects = SITE_NAV_YEARS[0].subjects;
  const subjectsVisited = year1Subjects.filter(s => s.key && p['visited-' + s.key]).length;
  el.innerHTML = `
    <div class="stat"><div class="num">${daysDone}/20</div><div class="lbl">Days complete</div></div>
    <div class="stat"><div class="num">${subjectsVisited}/${year1Subjects.length}</div><div class="lbl">Subjects opened</div></div>
    <div class="stat"><button class="reset-link" id="reset-progress-btn">Reset all progress</button></div>
  `;
  const resetBtn = document.getElementById('reset-progress-btn');
  if(resetBtn){
    resetBtn.addEventListener('click', ()=>{
      if(confirm('Reset all day stamps and visited-subject progress? This cannot be undone.')){
        saveProgress({});
        initStampButtons();
        renderDashboard();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function(){
  applyPrefs();
  renderSettingsBar();
  initStampButtons();
  renderDashboard();
});
