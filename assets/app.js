// ===== Shared navigation =====
const SITE_NAV = [
  {href:"../index.html", label:"Home", root:true},
  {key:"anatomy", href:"anatomy.html", label:"Anatomy & Phys."},
  {key:"chemistry", href:"chemistry.html", label:"Chemistry"},
  {key:"physics", href:"physics.html", label:"Physics"},
  {key:"botany", href:"botany.html", label:"Botany"},
  {key:"zoology", href:"zoology.html", label:"Zoology"},
  {key:"math", href:"math.html", label:"Math & Stats"},
  {key:"english", href:"english.html", label:"English"},
  {key:"nepali", href:"nepali.html", label:"Nepali"},
  {key:"social", href:"social.html", label:"Social Studies"},
  {key:"tools", href:"../tools.html", label:"Tools", topLevel:true},
];

function renderNav(activeHref, isRoot){
  const nav = document.getElementById('sitenav');
  if(!nav) return;
  nav.innerHTML = SITE_NAV.map(item=>{
    let href = item.href;
    if(isRoot){
      href = (item.root || item.topLevel) ? item.href.replace('../', '') : 'subjects/' + item.href;
    }
    const isActive = (item.topLevel || item.root)
      ? item.href.replace('../', '') === activeHref
      : item.href === activeHref;
    return `<a href="${href}"${isActive?' class="active"':''}>${item.label}</a>`;
  }).join('');
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
  const subjectsVisited = SITE_NAV.filter(s => s.key && p['visited-' + s.key]).length;
  el.innerHTML = `
    <div class="stat"><div class="num">${daysDone}/20</div><div class="lbl">Days complete</div></div>
    <div class="stat"><div class="num">${subjectsVisited}/9</div><div class="lbl">Subjects opened</div></div>
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
