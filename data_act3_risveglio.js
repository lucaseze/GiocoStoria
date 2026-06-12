// ATTO 3 - da "Risveglio" (Lyra Q3, B) - giorni 21-30
const ACT3_RISVEGLIO = [
{ day:21, text:"Hai deciso di lasciare entrare Lyra, un po'. È un cambiamento piccolo, quasi impercettibile, ma lei lo nota.",
  options:[
    {id:"A", label:"Le racconti qualcosa di te che non avevi mai detto a nessuno", delta:{cosc:1,alt:1}, comment:"Lyra ascolta, in silenzio, senza giudicare."},
    {id:"B", label:"Le chiedi, per la prima volta, qualcosa su di lei", delta:{calc:1,alt:1}, comment:"Una conversazione diversa dalle altre."}
  ]},
{ day:22, text:"Una situazione richiede, per essere risolta, di fidarsi completamente di qualcun altro - cosa che, finora, hai sempre evitato.",
  options:[
    {id:"A", label:"Fai un passo indietro, lasci fare a Lyra", delta:{cosc:1,alt:1}, comment:"Difficile, ma funziona."},
    {id:"B", label:"Provi un approccio condiviso, a metà tra il tuo modo e il suo", delta:{calc:1,alt:1}, comment:"Un piccolo compromesso, su una piccola cosa."}
  ]},
{ day:23, text:"Il Traghettatore, osservandoti: \"Le tue regole non sono scomparse. Ma sembrano avere... finestre, ora.\"",
  options:[
    {id:"A", label:"\"Solo per le persone giuste\"", delta:{cosc:1,alt:1}, comment:"Il Traghettatore sorride, appena."},
    {id:"B", label:"\"Sto ancora capendo come funziona\"", delta:{calc:1,alt:1}, comment:"Onesto, e va bene così."}
  ]},
{ day:24, text:"Lyra ti propone di affrontare insieme la ricerca del suo potere perduto - non come 'aiuto', ma come compagni veri, alla pari.",
  options:[
    {id:"A", label:"Accetti, è un passo importante per entrambi", delta:{cosc:1,alt:1}, comment:"Una squadra, finalmente, non solo un viaggio condiviso."},
    {id:"B", label:"Senti ancora il bisogno di mantenere un po' di indipendenza", delta:{calc:1,ego:1}, comment:"Lyra capisce, e rispetta i tuoi ritmi."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Durante la ricerca, una difficoltà inattesa richiederebbe di infrangere una delle tue regole - non per pigrizia o convenienza, ma per il bene di Lyra.",
  options:[
    {id:"A", label:"La infrangi, per lei", delta:{calc:1,alt:1}, comment:"La prima vera eccezione, fatta con consapevolezza."},
    {id:"B", label:"Trovi un'alternativa, anche se più difficile", delta:{cosc:1,alt:1}, comment:"Le tue regole, anche qui, trovano spazio per lei."}
  ]},
{ day:26, text:"Lyra, una sera: \"Sai, all'inizio pensavo che fossi rigido, e basta. Ora penso che tu sia... profondo. È diverso, e mi piace di più.\"",
  options:[
    {id:"A", label:"Accogli il complimento, sinceramente", delta:{cosc:1,alt:1}, comment:"Un momento semplice, e vero."},
    {id:"B", label:"Ti senti, per la prima volta da tempo, vulnerabile - e va bene", delta:{calc:1,alt:1}, comment:"Una nuova sensazione, non spiacevole."}
  ]},
{ day:27, text:"Il Traghettatore: \"Il risveglio non è diventare qualcun altro. È scoprire le parti di te che dormivano.\"",
  options:[
    {id:"A", label:"\"Forse è quello che sta succedendo\"", delta:{cosc:1,alt:1}, comment:"Una riflessione che ti accompagna."},
    {id:"B", label:"\"Spero di non perdere chi ero\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore: \"Non lo perderai. Si espanderà, semplicemente.\""}
  ]},
{ day:28, text:"Lyra trova il suo potere perduto - e stavolta, è davvero un momento condiviso, non solo 'assistito'.",
  options:[
    {id:"A", label:"Festeggiate, insieme, come pari", delta:{cosc:1,alt:1}, comment:"Un traguardo di entrambi."},
    {id:"B", label:"Ti chiedi, con curiosità sincera, cosa significhi per il vostro futuro", delta:{calc:1,alt:1}, comment:"Una domanda aperta, affrontata insieme."}
  ]},
{ day:29, text:"Borin, di passaggio per caso (o forse no), vi trova insieme. Nota qualcosa di diverso in te, e non sa bene cosa.",
  options:[
    {id:"A", label:"Glielo spieghi, a modo tuo", delta:{cosc:1,alt:1}, comment:"Borin: \"Beh, qualunque cosa sia, ti sta bene.\""},
    {id:"B", label:"Lo lasci scoprire da solo, col tempo", delta:{calc:1,alt:1}, comment:"Borin, sorridendo, capisce comunque."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: IL RISVEGLIO. Le tue regole non sono scomparse - sono diventate più sagge, capaci di lasciare spazio a chi conta davvero. Lyra è al tuo fianco, non come eccezione alle tue regole, ma come parte di chi sei diventato. Hai imparato che la coerenza più profonda non è rigidità, ma la capacità di restare fedeli a sé stessi anche mentre si cresce.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_risveglio", comment:"Il tuo profilo finale è pronto."}
  ]}
];
