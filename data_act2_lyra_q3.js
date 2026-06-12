// ATTO 2 - Lyra + Quadrante 3 (Coscienza+Egoismo) "il Solitario"
const ACT2_LYRA_Q3 = [
{ day:11, text:"Il villaggio è colpito da una maledizione sui raccolti. Tu hai già le tue regole su come affrontare queste cose, e differiscono da quelle degli anziani.",
  options:[
    {id:"A", label:"Agisci secondo i tuoi principi, anche contro il loro parere", delta:{cosc:1,ego:1}, comment:"Gli anziani non sono contenti."},
    {id:"B", label:"Ti adatti alle loro usanze, anche se non le condividi", delta:{calc:1,alt:1}, comment:"Lyra apprezza la tua apertura."}
  ]},
{ day:12, text:"Lyra propone un piano che richiede di fidarsi ciecamente di lei, senza spiegazioni complete. \"A volte bisogna fidarsi, e basta.\"",
  options:[
    {id:"A", label:"Vuoi capire tutto prima di agire", delta:{cosc:1,ego:1}, comment:"Lyra, un po' ferita: \"Va bene. Te lo spiego.\""},
    {id:"B", label:"Ti fidi e basta", delta:{calc:1,alt:1}, comment:"Funziona, e Lyra te ne è grata."}
  ]},
{ day:13, text:"Un abitante del villaggio ti chiede di infrangere una delle tue regole personali, per una buona causa, una sola volta.",
  options:[
    {id:"A", label:"Non infrangi la regola, nemmeno per questo", delta:{cosc:1,ego:1}, comment:"L'abitante se ne va deluso."},
    {id:"B", label:"Fai un'eccezione", delta:{calc:1,alt:1}, comment:"Ti chiedi se sia stato giusto."}
  ]},
{ day:14, text:"Lyra, una sera: \"Ti ammiro, sai? Ma a volte è difficile starti vicino, con tutte queste righe che non si possono attraversare.\"",
  options:[
    {id:"A", label:"\"Le righe sono ciò che sono\"", delta:{cosc:1,ego:1}, comment:"Lyra annuisce, ma qualcosa si è incrinato."},
    {id:"B", label:"Provi ad ascoltare, e magari ad ammorbidirti un po'", delta:{calc:1,alt:1}, comment:"Lyra sorride, sollevata."}
  ]},
{ day:15, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"La maledizione si rivela legata a uno spirito che chiede solo una cosa: che qualcuno lo ascolti, dopo secoli di solitudine.",
  options:[
    {id:"A", label:"Resti, ad ascoltarlo, per quanto serva", delta:{cosc:1,ego:1}, comment:"Capisci qualcosa di te stesso, in quel silenzio."},
    {id:"B", label:"Mandi Lyra, che è più brava in queste cose", delta:{calc:1,alt:1}, comment:"Funziona comunque."}
  ]},
{ day:16, text:"Il villaggio è salvo. Ti offrono una festa in tuo onore. Non ti piacciono le feste.",
  options:[
    {id:"A", label:"Non ci vai", delta:{cosc:1,ego:1}, comment:"Resti solo, ancora una volta, per scelta."},
    {id:"B", label:"Ci vai, per Lyra", delta:{calc:1,alt:1}, comment:"Non è così male, in realtà."}
  ]},
{ day:17, text:"Un viandante misterioso ti riconosce e ti chiede di unirti a un gruppo che condivide i tuoi stessi principi rigidi. \"Finalmente, qualcuno che capisce.\"",
  options:[
    {id:"A", label:"Ti interessa, sembrano persone come te", delta:{cosc:1,ego:1}, comment:"Lyra non è invitata a questo incontro."},
    {id:"B", label:"Rifiuti, preferisci la tua strada attuale", delta:{calc:1,alt:1}, comment:"Lyra, di sfuggita: \"Grazie.\""}
  ]},
{ day:18, text:"Lyra ti chiede, direttamente: \"Dove stiamo andando, noi due? Voglio dire... insieme?\"",
  options:[
    {id:"A", label:"Rispondi con sincerità, anche se la risposta è 'non lo so'", delta:{cosc:1,ego:1}, comment:"Almeno è vero."},
    {id:"B", label:"Le dici quello che vuole sentire, per ora", delta:{calc:1,alt:1}, comment:"Rimandi la questione."}
  ]},
{ day:19, guide:"Domani saprai che tipo di solitario sei diventato.", text:"Il Traghettatore appare più spesso, ultimamente. Quasi come se fosse l'unico con cui parli davvero, in questi giorni.",
  options:[
    {id:"A", label:"Lo riconosci: è diventato la tua compagnia principale", delta:{cosc:1,ego:1}, comment:"Una presenza costante, se non calorosa."},
    {id:"B", label:"Cerchi di passare più tempo con Lyra, invece", delta:{calc:1,alt:1}, comment:"Un piccolo passo."}
  ]},
{ day:20, guide:"Le tue regole ti hanno protetto. Ma da cosa, esattamente?", text:"Bivio finale.",
  options:[
    {id:"A", label:"\"Le mie regole sono ciò che sono. Non cambio.\"", delta:{cosc:1,ego:1}, ending:"eremita", comment:"Proseguirai solo, fedele a te stesso."},
    {id:"B", label:"\"Forse posso lasciare entrare qualcuno.\"", delta:{calc:1,alt:1}, ending:"risveglio", comment:"Lyra è ancora lì, ad aspettare."}
  ]}
];
