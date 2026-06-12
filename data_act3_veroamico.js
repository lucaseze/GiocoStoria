// ATTO 3 - da "il Vero Amico" (Borin Q1, A) - giorni 21-30
const ACT3_VEROAMICO = [
{ day:21, text:"Hai scelto le persone sopra le storie. Borin, al tuo fianco, sembra capire che qualcosa è diverso - in senso buono.",
  options:[
    {id:"A", label:"Proponi a Borin un viaggio senza 'missioni', solo per voi due", delta:{cosc:1,alt:1}, comment:"Borin: \"Non l'avevo mai considerata un'opzione, ma mi piace.\""},
    {id:"B", label:"Continuate ad aiutare la gente, ma con meno enfasi sulle 'storie'", delta:{calc:1,alt:1}, comment:"Lo stesso spirito, diverso stile."}
  ]},
{ day:22, text:"Un villaggio ha un piccolo problema - niente di epico. Borin, scherzando: \"Niente leggende, stavolta? Che noia, eh?\"",
  options:[
    {id:"A", label:"\"Le piccole cose contano anche loro\"", delta:{cosc:1,alt:1}, comment:"Borin: \"Touché.\""},
    {id:"B", label:"Risolvete in fretta, e proseguite", delta:{calc:1,alt:1}, comment:"Efficiente, e va bene così."}
  ]},
{ day:23, text:"Il Traghettatore, di passaggio: \"Le leggende svaniscono. Le amicizie, quando sono vere, restano.\"",
  options:[
    {id:"A", label:"\"Lo spero\"", delta:{cosc:1,alt:1}, comment:"Borin, che ha sentito: \"Anch'io, amico.\""},
    {id:"B", label:"Non rispondi, ma Borin lo fa per te: \"Resterà.\"", delta:{calc:1,alt:1}, comment:"Una certezza, condivisa."}
  ]},
{ day:24, text:"Lyra manda notizie - sta bene, è lontana, ma pensa a voi. Borin: \"Dovremmo andare a trovarla, qualche volta.\"",
  options:[
    {id:"A", label:"\"Sì, dovremmo\"", delta:{cosc:1,alt:1}, comment:"Un'intenzione, per ora."},
    {id:"B", label:"\"Magari. Vediamo come va\"", delta:{calc:1,alt:1}, comment:"Le cose si vedrà."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Borin si trova in difficoltà, stavolta - niente di grave, ma ha bisogno del tuo aiuto, e per una volta sei tu quello che deve sostenere lui.",
  options:[
    {id:"A", label:"Resti al suo fianco, senza esitazione", delta:{cosc:1,alt:1}, comment:"Borin: \"Sapevo che potevo contarci.\""},
    {id:"B", label:"Lo aiuti, ma anche lui deve fare la sua parte", delta:{calc:1,alt:1}, comment:"Un'amicizia equilibrata, non solo da una parte."}
  ]},
{ day:26, text:"Un cantastorie vi riconosce: \"Voi due! Le leggende eroiche! Posso intervistarvi?\" Borin, sorridendo, ti guarda, aspettando la tua reazione.",
  options:[
    {id:"A", label:"Accetti, ma racconti la verità, senza esagerazioni", delta:{cosc:1,alt:1}, comment:"Borin: \"Anche la verità, alla fine, non è male.\""},
    {id:"B", label:"Declinate insieme, gentilmente", delta:{calc:1,alt:1}, comment:"Non vi serve più, ormai."}
  ]},
{ day:27, text:"Il Traghettatore: \"Cosa resterà, di questo viaggio, quando le storie saranno dimenticate?\"",
  options:[
    {id:"A", label:"\"Quello che abbiamo fatto, per chi ne aveva bisogno\"", delta:{cosc:1,alt:1}, comment:"Una risposta che sembra giusta."},
    {id:"B", label:"\"Noi due, immagino\"", delta:{calc:1,alt:1}, comment:"Borin, sorridendo: \"Mi va bene così.\""}
  ]},
{ day:28, text:"Un'occasione si presenta per un'ultima, grande impresa - rischiosa, ma per una buona causa.",
  options:[
    {id:"A", label:"La affrontate insieme, come sempre", delta:{cosc:1,alt:1}, comment:"Borin: \"Insieme, come sempre.\""},
    {id:"B", label:"Valutate i rischi con più attenzione del solito, prima di decidere", delta:{calc:1,alt:1}, comment:"Più maturi, ma non meno coraggiosi."}
  ]},
{ day:29, text:"Una sera tranquilla, al fuoco. Borin: \"Sai, all'inizio pensavo che sarei stato solo... il tuo aiutante comico. Ora penso che siamo davvero amici. Veri.\"",
  options:[
    {id:"A", label:"\"Lo siamo, Borin. Lo siamo sempre stati\"", delta:{cosc:1,alt:1}, comment:"Un momento semplice, e vero."},
    {id:"B", label:"Scherzi, per non diventare troppo sentimentali", delta:{calc:1,alt:1}, comment:"Borin ride, ma capisce comunque."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: IL VERO AMICO. Le storie su di te, vere o esagerate, sfumeranno col tempo, come accade a tutte le leggende. Ma l'amicizia con Borin - costruita giorno per giorno, scelta dopo scelta - è qualcosa di reale, e duraturo. Hai imparato che le persone che restano, valgono più di qualsiasi ballata.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_vero_amico", comment:"Il tuo profilo finale è pronto."}
  ]}
];
