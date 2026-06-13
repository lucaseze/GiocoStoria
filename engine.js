// ============================================================
// MOTORE DI GIOCO - Trolley School
// ============================================================

// --- ARCHETIPI per Atto 1 (giorno 1-10), basati su Coscienza/Calcolo, Egoismo/Altruismo ---
function getArchetype(cosc, calc, ego, alt) {
  const ascX = cosc - calc; // >0 = Coscienza, <0 = Calcolo
  const ascY = alt - ego;   // >0 = Altruismo, <0 = Egoismo
  if (ascX >= 0 && ascY >= 0) return "il Custode";
  if (ascX < 0 && ascY >= 0) return "lo Stratega";
  if (ascX >= 0 && ascY < 0) return "il Solitario";
  return "l'Opportunista";
}

// --- Mappa quadrante -> indice (1-4), usato per scegliere il file Atto2 ---
function getQuadrant(cosc, calc, ego, alt) {
  const ascX = cosc - calc;
  const ascY = alt - ego;
  if (ascX >= 0 && ascY >= 0) return 1; // Custode
  if (ascX < 0 && ascY >= 0) return 2;  // Stratega
  if (ascX >= 0 && ascY < 0) return 3;  // Solitario
  return 4;                             // Opportunista
}

// --- Recupera il blocco giorni dell'Atto 2 in base a compagno + quadrante ---
function getAct2Data(companion, quadrant) {
  const key = companion + "_q" + quadrant;
  const map = {
    "lyra_q1": ACT2_LYRA_Q1,
    "lyra_q2": ACT2_LYRA_Q2,
    "lyra_q3": ACT2_LYRA_Q3,
    "lyra_q4": ACT2_LYRA_Q4,
    "borin_q1": ACT2_BORIN_Q1,
    "borin_q2": ACT2_BORIN_Q2,
    "borin_q3": ACT2_BORIN_Q3,
    "borin_q4": ACT2_BORIN_Q4
  };
  return map[key];
}

// --- Recupera il blocco giorni dell'Atto 3 in base all'ending dell'Atto 2 ---
function getAct3Data(ending) {
  const map = {
    "il_pilastro": ACT3_PILASTRO,
    "equilibrio_ritrovato": ACT3_EQUILIBRIO,
    "il_burattinaio_illuminato": ACT3_BURATTINAIO,
    "il_mediatore_stanco": ACT3_MEDIATORE,
    "eremita": ACT3_EREMITA,
    "risveglio": ACT3_RISVEGLIO,
    "il_vincitore_solo": ACT3_VINCITORE,
    "la_seconda_possibilita": ACT3_SECONDA,
    "il_vero_amico": ACT3_VEROAMICO,
    "eroe_per_sbaglio": ACT3_EROEPERSBAGLIO,
    "la_resa_dei_conti": ACT3_RESADEICONTI,
    "il_fuorilegge_gentile": ACT3_FUORILEGGEGENTILE,
    "la_strada_diritta": ACT3_STRADADIRITTA,
    "il_compromesso": ACT3_COMPROMESSO,
    "i_due_lupi": ACT3_DUELUPI,
    "lo_specchio": ACT3_SPECCHIO
  };
  return map[ending];
}

// --- Titoli leggibili dei finali, per la card finale ---
const ENDING_TITLES = {
  "FINAL_pilastro_compiuto": "Il Pilastro Compiuto",
  "FINAL_equilibrio_ritrovato": "L'Equilibrio Ritrovato",
  "FINAL_burattinaio_illuminato": "Il Burattinaio Illuminato",
  "FINAL_mediatore_stanco": "Il Mediatore Stanco (ma Vero)",
  "FINAL_eremita": "L'Eremita",
  "FINAL_risveglio": "Il Risveglio",
  "FINAL_vincitore_solo": "Il Vincitore Solo",
  "FINAL_seconda_possibilita": "La Seconda Possibilità",
  "FINAL_vero_amico": "Il Vero Amico",
  "FINAL_eroe_per_sbaglio": "L'Eroe per Sbaglio",
  "FINAL_resa_dei_conti": "La Resa dei Conti",
  "FINAL_fuorilegge_gentile": "Il Fuorilegge Gentile",
  "FINAL_strada_diritta": "La Strada Diritta, da Solo",
  "FINAL_compromesso": "Il Compromesso",
  "FINAL_due_lupi": "I Due Lupi",
  "FINAL_specchio": "Lo Specchio"
};

// ============================================================
// STATO DI GIOCO
// ============================================================
const STORAGE_KEY = "trolley_school_state_v1";

function getInitialState() {
  return {
    playerName: "",
    introSeen: false,
    day: 1,           // giorno corrente (1-30)
    cosc: 0, calc: 0, ego: 0, alt: 0,  // punteggi assi
    history: [],      // array di {day, choiceId, delta}
    companion: null,  // "lyra" o "borin" (deciso al giorno 10)
    quadrant: null,   // 1-4 (deciso al giorno 10, ricalcolato in base al profilo)
    act2ending: null, // chiave ending atto2 (deciso al giorno 20)
    finalEnding: null,// chiave ending finale (deciso al giorno 30)
    completed: false
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialState();
    return JSON.parse(raw);
  } catch(e) {
    return getInitialState();
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch(e) {
    console.error("Impossibile salvare lo stato", e);
  }
}

// ============================================================
// RECUPERO DILEMMA CORRENTE
// ============================================================
function getCurrentDilemma(state) {
  const day = state.day;
  if (day <= 10) {
    return ACT1[day - 1];
  }
  if (day <= 20) {
    const data = getAct2Data(state.companion, state.quadrant);
    return data[day - 11];
  }
  if (day <= 30) {
    const data = getAct3Data(state.act2ending);
    return data[day - 21];
  }
  return null; // gioco finito
}

// ============================================================
// APPLICAZIONE DI UNA SCELTA
// ============================================================
function applyChoice(state, optionId) {
  const dilemma = getCurrentDilemma(state);
  const option = dilemma.options.find(o => o.id === optionId);
  if (!option) return state;

  // aggiorna i punteggi
  const delta = option.delta || {};
  state.cosc += (delta.cosc || 0);
  state.calc += (delta.calc || 0);
  state.ego  += (delta.ego  || 0);
  state.alt  += (delta.alt  || 0);

  // salva nello storico
  state.history.push({ day: state.day, choiceId: optionId, comment: option.comment || "" });

  // giorno 10: decide il companion per l'Atto 2
  if (state.day === 10 && option.companion) {
    state.companion = option.companion;
    state.quadrant = getQuadrant(state.cosc, state.calc, state.ego, state.alt);
  }

  // giorno 20: decide l'ending Atto2 -> ramo Atto3
  if (state.day === 20 && option.ending) {
    state.act2ending = option.ending;
  }

  // giorno 30: decide il finale definitivo
  if (state.day === 30 && option.ending) {
    state.finalEnding = option.ending;
    state.completed = true;
  }

  // avanza giorno
  if (state.day < 30) {
    state.day += 1;
  }

  saveState(state);
  return state;
}

// ============================================================
// SERIALE (codifica del percorso)
// ============================================================
// Ogni scelta è codificata come 1 carattere (A=0, B=1 in base alla posizione nell'array options)
// Il seriale è: TS-<base36 del giorno>-<bitstring in base36>
function generateSerial(state) {
  const bits = state.history.map(h => {
    // 0 se è la prima opzione del dilemma originale, 1 se la seconda
    // semplificazione: usiamo l'ordine A/B -> 0/1 dato che tutti i dilemmi hanno options[0]=A, options[1]=B
    return h.choiceId === "A" ? "0" : "1";
  }).join("");

  // converte la bitstring in numero, poi in base36
  let serialBody = "";
  // dividi in blocchi di 5 bit per evitare numeri troppo grandi
  for (let i = 0; i < bits.length; i += 5) {
    const chunk = bits.substr(i, 5).padEnd(5, "0");
    const val = parseInt(chunk, 2);
    serialBody += val.toString(36);
  }

  const dayCode = state.day.toString(36).toUpperCase();
  return `TS-${dayCode}${state.history.length.toString(36).toUpperCase()}-${serialBody.toUpperCase()}`;
}

// Decodifica un seriale e ricostruisce lo stato giocando tutte le scelte in sequenza
function decodeSerial(serial) {
  try {
    const parts = serial.trim().toUpperCase().split("-");
    if (parts[0] !== "TS" || parts.length !== 3) throw new Error("formato non valido");

    const header = parts[1];
    const numChoices = parseInt(header.substr(-1), 36);
    const serialBody = parts[2];

    // ricostruisci la bitstring
    let bits = "";
    for (let i = 0; i < serialBody.length; i++) {
      const val = parseInt(serialBody[i], 36);
      bits += val.toString(2).padStart(5, "0");
    }
    bits = bits.substr(0, numChoices);

    if (bits.length !== numChoices) throw new Error("lunghezza non valida");

    // rigioca tutte le scelte
    let state = getInitialState();
    for (let i = 0; i < bits.length; i++) {
      const choiceId = bits[i] === "0" ? "A" : "B";
      state = applyChoiceSilent(state, choiceId);
    }
    saveState(state);
    return state;
  } catch(e) {
    console.error("Seriale non valido", e);
    return null;
  }
}

// Come applyChoice ma non salva su storage ad ogni passo (per la decodifica/replay)
function applyChoiceSilent(state, optionId) {
  const dilemma = getCurrentDilemma(state);
  if (!dilemma) return state;
  const option = dilemma.options.find(o => o.id === optionId);
  if (!option) return state;

  const delta = option.delta || {};
  state.cosc += (delta.cosc || 0);
  state.calc += (delta.calc || 0);
  state.ego  += (delta.ego  || 0);
  state.alt  += (delta.alt  || 0);

  state.history.push({ day: state.day, choiceId: optionId, comment: option.comment || "" });

  if (state.day === 10 && option.companion) {
    state.companion = option.companion;
    state.quadrant = getQuadrant(state.cosc, state.calc, state.ego, state.alt);
  }
  if (state.day === 20 && option.ending) {
    state.act2ending = option.ending;
  }
  if (state.day === 30 && option.ending) {
    state.finalEnding = option.ending;
    state.completed = true;
  }

  if (state.day < 30) {
    state.day += 1;
  }
  return state;
}

// ============================================================
// COMMENTO DINAMICO (pattern su scelte recenti)
// ============================================================
function getDynamicComment(state, lastOptionComment) {
  // controlla streak su asse Coscienza/Calcolo nelle ultime scelte
  const recent = state.history.slice(-3);
  let coscStreak = 0, calcStreak = 0;
  for (let i = recent.length - 1; i >= 0; i--) {
    // approssimazione: usiamo il commento base, ma proviamo ad arricchirlo con streak generiche
  }
  // semplice arricchimento basato su streak di scelte uguali (A o B)
  const lastChoices = state.history.slice(-3).map(h => h.choiceId);
  if (lastChoices.length === 3 && lastChoices.every(c => c === lastChoices[0])) {
    const streakNote = lastChoices[0] === "A"
      ? " (3° scelta di fila in questa direzione)"
      : " (3° scelta di fila in questa direzione)";
    return lastOptionComment + streakNote;
  }
  return lastOptionComment;
}
