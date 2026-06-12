// ATTO 2 - Borin + Quadrante 3 (Coscienza+Egoismo) "la Strada Diritta, da Solo"
const ACT2_BORIN_Q3 = [
{ day:11, text:"Borin propone una scorciatoia poco ortodossa per risparmiare giorni di viaggio. Va contro i tuoi principi su come affrontare le cose.",
  options:[
    {id:"A", label:"Rifiuti, fai le cose secondo le regole", delta:{cosc:1,ego:1}, comment:"Borin: \"Ok, ok, facciamo a modo tuo.\""},
    {id:"B", label:"Per una volta, lo segui", delta:{calc:1,alt:1}, comment:"Funziona, sorprendentemente."}
  ]},
{ day:12, text:"Borin si offre di insegnarti alcuni \"trucchi del mestiere\" della sua vecchia gilda, utili ma moralmente grigi.",
  options:[
    {id:"A", label:"Declini, preferisci i tuoi metodi", delta:{cosc:1,ego:1}, comment:"Borin: \"Va bene, va bene, niente trucchi.\""},
    {id:"B", label:"Accetti di imparare, non si sa mai", delta:{calc:1,alt:1}, comment:"Aggiungi qualche strumento in più."}
  ]},
{ day:13, text:"Un conflitto tra due fazioni locali: Borin vorrebbe restare neutrale e guadagnarci da entrambe le parti, ma tu hai una posizione chiara su chi ha ragione.",
  options:[
    {id:"A", label:"Prendi posizione, anche se Borin non è d'accordo", delta:{cosc:1,ego:1}, comment:"Borin: \"Sapevo che l'avresti fatto.\""},
    {id:"B", label:"Resti neutrale, come suggerisce Borin", delta:{calc:1,alt:1}, comment:"Più sicuro, meno coerente con te stesso."}
  ]},
{ day:14, text:"Borin, sospirando: \"Sai, a volte vorrei solo che le cose fossero un po' più semplici tra noi. Non sempre 'giusto o sbagliato'.\"",
  options:[
    {id:"A", label:"\"Per me è importante esserlo\"", delta:{cosc:1,ego:1}, comment:"Borin annuisce, ma sembra un po' stanco."},
    {id:"B", label:"Provi a essere più flessibile, per lui", delta:{calc:1,alt:1}, comment:"Borin sorride, grato."}
  ]},
{ day:15, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Le tue scelte coerenti ti hanno fatto guadagnare il rispetto di molti, ma anche qualche nemico tra chi preferisce le scorciatoie.",
  options:[
    {id:"A", label:"Non cambi nulla, è il prezzo dell'integrità", delta:{cosc:1,ego:1}, comment:"Borin, preoccupato per la tua sicurezza."},
    {id:"B", label:"Cerchi un modo per ridurre l'attrito, senza tradirti", delta:{calc:1,alt:1}, comment:"Un po' di diplomazia, finalmente."}
  ]},
{ day:16, text:"Borin trova un'opportunità di lavoro per sé, ma è dall'altra parte del territorio. \"Potrei seguirla... o restare con te. Tu che dici?\"",
  options:[
    {id:"A", label:"Gli dici onestamente che la decisione è sua", delta:{cosc:1,ego:1}, comment:"Borin: \"Grazie per la sincerità. Penso che... resterò, per ora.\""},
    {id:"B", label:"Gli dici che ti farebbe piacere se restasse", delta:{calc:1,alt:1}, comment:"Borin, sorpreso e contento, resta."}
  ]},
{ day:17, text:"Un giudice locale, colpito dalla tua reputazione di persona di principio, ti chiede di fare da arbitro in una disputa complicata.",
  options:[
    {id:"A", label:"Accetti, è importante fare la cosa giusta", delta:{cosc:1,ego:1}, comment:"Un compito pesante, ma lo affronti."},
    {id:"B", label:"Suggerisci qualcun altro più adatto", delta:{calc:1,alt:1}, comment:"Più comodo per te."}
  ]},
{ day:18, text:"Lyra manda notizie: sta bene, ma il suo percorso l'ha portata lontano. Borin, leggendo il messaggio sopra la tua spalla: \"Sembra che stia bene senza di noi, eh?\"",
  options:[
    {id:"A", label:"\"Bene. È quello che conta\"", delta:{cosc:1,ego:1}, comment:"Borin ti guarda, non del tutto convinto."},
    {id:"B", label:"Senti una punta di nostalgia, che condividi con Borin", delta:{calc:1,alt:1}, comment:"Borin: \"Anch'io, amico. Anch'io.\""}
  ]},
{ day:19, guide:"Domani saprai che tipo di persona sei diventato, su questa strada diritta.", text:"Sei rispettato, conosciuto per la tua integrità. Ma anche, a volte, per la tua rigidità.",
  options:[
    {id:"A", label:"Ne sei fiero, è chi sei", delta:{cosc:1,ego:1}, comment:"Borin: \"Sì, lo sei. Nel bene e nel male.\""},
    {id:"B", label:"Ti chiedi se ci sia spazio per cambiare, un po'", delta:{calc:1,alt:1}, comment:"Borin: \"C'è sempre spazio, amico.\""}
  ]},
{ day:20, guide:"La tua strada è diritta. Ma le strade diritte, a volte, sono anche solitarie.", text:"Bivio finale.",
  options:[
    {id:"A", label:"\"La mia strada resta questa, con o senza compagnia\"", delta:{cosc:1,ego:1}, ending:"la_strada_diritta", comment:"Borin ti saluta, con affetto, prendendo la sua strada."},
    {id:"B", label:"\"Forse posso essere fermo nei principi e flessibile nelle persone\"", delta:{calc:1,alt:1}, ending:"il_compromesso", comment:"Borin resta, e la strada sembra un po' meno dritta, e un po' più larga."}
  ]}
];
