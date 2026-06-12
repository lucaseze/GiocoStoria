// ============================================================
// UI - Rendering e interazioni
// ============================================================

let state = loadState();

function clampAxis(val, range) {
  // converte un valore (-range..+range) in percentuale 0-100
  const pct = ((val + range) / (range * 2)) * 100;
  return Math.max(0, Math.min(100, pct));
}

function render() {
  const root = document.getElementById('gameCard');

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

  html += `<div class="header-row">
    <span>Trolley School &middot; giorno ${state.day}</span>
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
      <div>
        <p class="serial-label">Il tuo seriale</p>
        <p class="serial-code">${serial}</p>
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
      <span>Trolley School &middot; Diploma</span>
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
    <div>
      <p class="serial-label">Il tuo seriale completo</p>
      <p class="serial-code">${serial}</p>
    </div>
    <button class="small-btn" id="replayBtn">Replay</button>
  </div>`;

  html += `<div style="text-align:center; margin-top:1rem;">
    <button class="link-btn" id="restartBtn">Inizia un nuovo percorso</button>
  </div>`;

  root.innerHTML = html;

  document.getElementById('replayBtn').addEventListener('click', () => startReplay(state));
  document.getElementById('restartBtn').addEventListener('click', () => {
    if (confirm("Sei sicuro? Il percorso attuale andrà perso (salva il seriale prima, se vuoi tenerlo).")) {
      state = getInitialState();
      saveState(state);
      render();
    }
  });
}

// ============================================================
// REPLAY
// ============================================================
function startReplay(currentState) {
  const history = currentState.history;
  if (history.length === 0) return;

  const overlay = document.createElement('div');
  overlay.className = 'replay-overlay';
  document.body.appendChild(overlay);

  let i = 0;
  let replayState = getInitialState();

  function showStep() {
    if (i >= history.length) {
      overlay.remove();
      return;
    }
    const dilemma = getCurrentDilemma(replayState);
    const h = history[i];
    const option = dilemma.options.find(o => o.id === h.choiceId);

    const pct = ((i + 1) / history.length) * 100;

    overlay.innerHTML = `<div class="replay-box">
      <div class="day-num">Giorno ${dilemma.day}</div>
      <div class="text">${dilemma.text.substring(0, 140)}${dilemma.text.length > 140 ? '...' : ''}</div>
      <div class="choice">→ ${option.label}</div>
      <div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>
      <button class="replay-close" id="closeReplay">Chiudi</button>
    </div>`;

    document.getElementById('closeReplay').addEventListener('click', () => overlay.remove());

    replayState = applyChoiceSilent(replayState, h.choiceId);
    i++;

    setTimeout(showStep, 1400);
  }

  showStep();
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
// AVVIO
// ============================================================
render();
