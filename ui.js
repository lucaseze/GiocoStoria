// ============================================================
// UI - Rendering e interazioni
// ============================================================

let state = loadState();

function clampAxis(val, range) {
  // converte un valore (-range..+range) in percentuale 0-100
  const pct = ((val + range) / (range * 2)) * 100;
  return Math.max(0, Math.min(100, pct));
}

// ============================================================
// INTRO
// ============================================================
function renderIntro(root) {
  const html = `
    <p class="intro-title">GiocoStoria</p>
    <p class="intro-text">Benvenuto in un percorso narrativo di 30 giorni, fatto di dilemmi e scelte morali. Ogni scelta cambia chi diventi.</p>
    <ul class="intro-list">
      <li>Ogni giorno, leggi una breve situazione e scegli tra due opzioni.</li>
      <li>Le tue scelte costruiscono un profilo su due assi: <strong>Coscienza/Calcolo</strong> e <strong>Egoismo/Altruismo</strong>.</li>
      <li>Dal giorno 11, il percorso si dirama in base a chi sei diventato e a chi ti accompagna.</li>
      <li>Al giorno 30 otterrai uno dei 12 finali possibili, con un "seriale" che riassume il tuo cammino.</li>
      <li>Il progresso è salvato sul tuo dispositivo. Usa il seriale per ripristinarlo o condividerlo.</li>
    </ul>
    <div class="name-input-row">
      <label for="playerNameInput">Come ti chiami (o come si chiama il tuo personaggio)?</label>
      <input type="text" id="playerNameInput" placeholder="Es. Alex" value="${state.playerName || ''}" maxlength="30">
    </div>
    <button class="primary-btn" id="startBtn">Inizia il percorso</button>
  `;
  root.innerHTML = html;

  document.getElementById('startBtn').addEventListener('click', () => {
    const input = document.getElementById('playerNameInput');
    state.playerName = input.value.trim();
    state.introSeen = true;
    saveState(state);
    render();
  });
}

// Badge emoji/testo per compagno + ramo, mostrato dal giorno 11 in poi
function getCompanionBadge(state) {
  if (!state.companion) return '';
  const companionEmoji = state.companion === "lyra" ? "🏹" : "🪓"; // Lyra (ranger) / Borin (nano)
  const companionName = state.companion === "lyra" ? "Lyra" : "Borin";
  const quadrantEmoji = {1:"🛡️", 2:"♟️", 3:"🌑", 4:"💰"};
  const emoji = quadrantEmoji[state.quadrant] || '';
  return `<span class="companion-badge">${companionEmoji} ${companionName} ${emoji}</span>`;
}

function render() {
  const root = document.getElementById('gameCard');
  const topBar = document.getElementById('topBar');

  if (!state.introSeen) {
    topBar.style.display = 'none';
    renderIntro(root);
    return;
  }

  topBar.style.display = 'flex';

  if (state.completed) {
    renderFinal(root);
    return;
  }

  const dilemma = getCurrentDilemma(state);
  if (!dilemma) {
    renderFinal(root);
    return;
  }

  const streak = state.history.length; // semplice: numero di giorni completati
  const lastComment = state.history.length > 0
    ? getDynamicComment(state, state.history[state.history.length - 1].comment)
    : null;

  // calcolo range massimo plausibile per gli assi (per la barra -10..+10)
  const AXIS_RANGE = 10;
  const xVal = Math.max(-AXIS_RANGE, Math.min(AXIS_RANGE, state.cosc - state.calc));
  const yVal = Math.max(-AXIS_RANGE, Math.min(AXIS_RANGE, state.alt - state.ego));

  const archetype = getArchetype(state.cosc, state.calc, state.ego, state.alt);
  const daysToGo = 30 - state.day;

  let html = '';

  const greeting = state.playerName ? `${state.playerName} &middot; ` : '';
  const badge = getCompanionBadge(state);
  html += `<div class="header-row">
    <span>${greeting}GiocoStoria ${badge}</span>
    <span class="streak">giorno ${state.day} / 30</span>
  </div>`;

  if (dilemma.guide) {
    html += `<div class="guide-text">${dilemma.guide}</div>`;
  }

  html += `<p class="dilemma-text">${dilemma.text}</p>`;

  if (lastComment) {
    html += `<div class="comment-box">${lastComment}</div>`;
  }

  html += `<div class="options">`;
  dilemma.options.forEach(opt => {
    html += `<button class="option-btn" data-choice="${opt.id}">${opt.label}</button>`;
  });
  html += `</div>`;

  // Sezione profilo (mostrata solo dopo il primo giorno)
  if (state.history.length > 0) {
    html += `<div class="profile-section">
      <p class="profile-label">Il tuo profilo emergente</p>
      <div class="axis">
        <div class="axis-labels"><span>Coscienza</span><span>${xVal >= 0 ? '+' : ''}${xVal}</span><span>Calcolo</span></div>
        <div class="axis-bar">
          <div class="axis-tick"></div>
          <div class="axis-dot" style="left:${clampAxis(xVal, AXIS_RANGE)}%;"></div>
        </div>
      </div>
      <div class="axis">
        <div class="axis-labels"><span>Egoismo</span><span>${yVal >= 0 ? '+' : ''}${yVal}</span><span>Altruismo</span></div>
        <div class="axis-bar">
          <div class="axis-tick"></div>
          <div class="axis-dot" style="left:${clampAxis(yVal, AXIS_RANGE)}%;"></div>
        </div>
      </div>
      <div class="archetype-box">
        <p class="archetype-title">${getProfileLabel(state)}</p>
        <p class="archetype-sub">${daysToGo > 0 ? daysToGo + ' giorni al diploma' : 'Ultimo giorno!'}</p>
      </div>
    </div>`;
  }

  // footer con seriale
  if (state.history.length > 0) {
    const serial = generateSerial(state);
    html += `<div class="footer-row">
      <div class="serial-code-wrap" id="serialWrap" data-serial="${serial}">
        <p class="serial-label">Il tuo seriale (tocca per copiare)</p>
        <p class="serial-code">${serial}</p>
        <p class="copy-feedback" id="copyFeedback">Copiato!</p>
      </div>
      <button class="small-btn" id="replayBtn">Replay</button>
    </div>`;
  }

  root.innerHTML = html;

  // bind eventi
  root.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state = applyChoice(state, btn.dataset.choice);
      render();
    });
  });

  const replayBtn = document.getElementById('replayBtn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => startReplay(state));
  }

  bindSerialCopy();
}

// Etichetta profilo: nei giorni 1-10 usa l'archetipo Atto1; dopo, mostra companion + ramo
function getProfileLabel(state) {
  if (state.day <= 10 || !state.companion) {
    return "Il tuo archetipo: " + getArchetype(state.cosc, state.calc, state.ego, state.alt);
  }
  const companionName = state.companion === "lyra" ? "Lyra" : "Borin";
  const quadrantNames = {1:"il Custode", 2:"lo Stratega", 3:"il Solitario", 4:"l'Opportunista"};
  if (state.day <= 20) {
    return `Percorso: ${quadrantNames[state.quadrant]} (con ${companionName})`;
  }
  return "Atto finale in corso...";
}

// ============================================================
// FINALE
// ============================================================
function renderFinal(root) {
  const serial = generateSerial(state);
  const title = ENDING_TITLES[state.finalEnding] || "Finale Sconosciuto";

  // recupera il testo del finale dall'ultimo giorno giocato
  const act3 = getAct3Data(state.act2ending);
  const lastDay = act3[act3.length - 1];
  const finalText = lastDay.text.replace(/^FINALE: [^.]+\.\s*/, '');

  const AXIS_RANGE = 10;
  const xVal = Math.max(-AXIS_RANGE, Math.min(AXIS_RANGE, state.cosc - state.calc));
  const yVal = Math.max(-AXIS_RANGE, Math.min(AXIS_RANGE, state.alt - state.ego));

  let html = `<div class="final-card">
    <div class="header-row" style="justify-content:center;">
      <span>GiocoStoria &middot; Diploma ${getCompanionBadge(state)}</span>
    </div>
    <p class="final-title">${title}</p>
    <p class="final-text">${finalText}</p>
  </div>`;

  html += `<div class="profile-section">
    <p class="profile-label" style="text-align:center;">Il tuo profilo finale</p>
    <div class="axis">
      <div class="axis-labels"><span>Coscienza</span><span>${xVal >= 0 ? '+' : ''}${xVal}</span><span>Calcolo</span></div>
      <div class="axis-bar">
        <div class="axis-tick"></div>
        <div class="axis-dot" style="left:${clampAxis(xVal, AXIS_RANGE)}%;"></div>
      </div>
    </div>
    <div class="axis">
      <div class="axis-labels"><span>Egoismo</span><span>${yVal >= 0 ? '+' : ''}${yVal}</span><span>Altruismo</span></div>
      <div class="axis-bar">
        <div class="axis-tick"></div>
        <div class="axis-dot" style="left:${clampAxis(yVal, AXIS_RANGE)}%;"></div>
      </div>
    </div>
  </div>`;

  html += `<div class="footer-row">
    <div class="serial-code-wrap" id="serialWrap" data-serial="${serial}">
      <p class="serial-label">Il tuo seriale completo (tocca per copiare)</p>
      <p class="serial-code">${serial}</p>
      <p class="copy-feedback" id="copyFeedback">Copiato!</p>
    </div>
    <button class="small-btn" id="replayBtn">Replay</button>
  </div>`;

  html += `<div style="text-align:center; margin-top:1rem;">
    <button class="link-btn" id="restartBtn">Inizia un nuovo percorso</button>
  </div>`;

  root.innerHTML = html;

  document.getElementById('replayBtn').addEventListener('click', () => startReplay(state));
  bindSerialCopy();
  document.getElementById('restartBtn').addEventListener('click', confirmRestart);
}

// ============================================================
// COPIA SERIALE
// ============================================================
function bindSerialCopy() {
  const wrap = document.getElementById('serialWrap');
  if (!wrap) return;
  wrap.addEventListener('click', () => {
    const serial = wrap.dataset.serial;
    const doFeedback = () => {
      const fb = document.getElementById('copyFeedback');
      if (fb) {
        fb.classList.add('show');
        setTimeout(() => fb.classList.remove('show'), 1500);
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(serial).then(doFeedback).catch(() => {
        fallbackCopy(serial, doFeedback);
      });
    } else {
      fallbackCopy(serial, doFeedback);
    }
  });
}

function fallbackCopy(text, cb) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); cb(); } catch(e) {}
  document.body.removeChild(ta);
}

// ============================================================
// REPLAY
// ============================================================
function startReplay(currentState) {
  const history = currentState.history;
  if (history.length === 0) return;

  // pre-calcola, per ogni passo, il dilemma e l'opzione scelta (rigiocando dall'inizio)
  const steps = [];
  let replayState = getInitialState();
  for (let i = 0; i < history.length; i++) {
    const dilemma = getCurrentDilemma(replayState);
    const h = history[i];
    const option = dilemma.options.find(o => o.id === h.choiceId);
    steps.push({ dilemma, option });
    replayState = applyChoiceSilent(replayState, h.choiceId);
  }

  const overlay = document.createElement('div');
  overlay.className = 'replay-overlay';
  document.body.appendChild(overlay);

  let i = 0;

  function show() {
    const { dilemma, option } = steps[i];
    const pct = ((i + 1) / steps.length) * 100;

    overlay.innerHTML = `<div class="replay-box">
      <div class="day-num">Giorno ${dilemma.day} di ${steps.length}</div>
      <div class="text">${dilemma.text.substring(0, 160)}${dilemma.text.length > 160 ? '...' : ''}</div>
      <div class="choice">→ ${option.label}</div>
      ${option.comment ? `<div class="text" style="font-size:13px; color:var(--text-secondary);">${option.comment}</div>` : ''}
      <div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="replay-nav">
        <button class="replay-arrow" id="prevStep" ${i===0 ? 'disabled' : ''}>&larr;</button>
        <button class="replay-close" id="closeReplay">Chiudi</button>
        <button class="replay-arrow" id="nextStep" ${i===steps.length-1 ? 'disabled' : ''}>&rarr;</button>
      </div>
    </div>`;

    document.getElementById('closeReplay').addEventListener('click', () => overlay.remove());
    const prevBtn = document.getElementById('prevStep');
    const nextBtn = document.getElementById('nextStep');
    if (prevBtn) prevBtn.addEventListener('click', () => { if (i>0) { i--; show(); } });
    if (nextBtn) nextBtn.addEventListener('click', () => { if (i<steps.length-1) { i++; show(); } });
  }

  show();
}

// ============================================================
// RIPRISTINO DA SERIALE
// ============================================================
document.getElementById('toggleRestore').addEventListener('click', () => {
  const form = document.getElementById('restoreForm');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('restoreBtn').addEventListener('click', () => {
  const input = document.getElementById('serialInput').value;
  const restored = decodeSerial(input);
  if (restored) {
    state = restored;
    render();
    document.getElementById('restoreForm').style.display = 'none';
  } else {
    alert("Seriale non valido. Controlla il formato (es. TS-XXXX-XXXXX) e riprova.");
  }
});

// ============================================================
// RICOMINCIA (con conferma)
// ============================================================
function confirmRestart() {
  const serial = state.history.length > 0 ? generateSerial(state) : null;
  const msg = serial
    ? `Sei sicuro di voler ricominciare da capo? Il percorso attuale andrà perso.\n\nIl tuo seriale attuale è:\n${serial}\n\n(copialo prima, se vuoi poterlo ripristinare in seguito)`
    : "Sei sicuro di voler ricominciare da capo?";
  if (confirm(msg)) {
    state = getInitialState();
    saveState(state);
    render();
  }
}

document.getElementById('restartTopBtn').addEventListener('click', confirmRestart);

// ============================================================
// AVVIO
// ============================================================
render();
