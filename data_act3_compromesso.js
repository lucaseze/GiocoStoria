// ATTO 3 - da "il Compromesso" (Borin Q3, B) - giorni 21-30
const ACT3_COMPROMESSO = [
{ day:21, text:"Borin è rimasto, e la strada, con lui, sembra un po' meno dritta - e un po' più larga. Ti chiedi se sia un bene, o solo diverso.",
  options:[
    {id:"A", label:"Continui ad applicare i tuoi principi, ma con più ascolto verso Borin", delta:{cosc:1,ego:1}, comment:"Borin: \"Apprezzo che tu ci provi, sai?\""},
    {id:"B", label:"Lasci che Borin influenzi anche le tue scelte, più spesso", delta:{calc:1,alt:1}, comment:"Un equilibrio nuovo, in costruzione."}
  ]},
{ day:22, text:"Una disputa locale richiede il tuo giudizio - ma Borin ha un'opinione diversa dalla tua su come affrontarla, basata sulla sua esperienza.",
  options:[
    {id:"A", label:"Segui il tuo giudizio, come sempre", delta:{cosc:1,ego:1}, comment:"Borin, un po' deluso, ma accetta."},
    {id:"B", label:"Consideri seriamente la prospettiva di Borin, stavolta", delta:{calc:1,alt:1}, comment:"Il risultato è diverso da quello che avresti scelto da solo - e forse migliore."}
  ]},
{ day:23, text:"Il Traghettatore: \"Hai trovato qualcuno che vede il mondo diversamente da te. Cosa farai, con questa differenza?\"",
  options:[
    {id:"A", label:"\"La rispetto, ma resto fedele a me stesso\"", delta:{cosc:1,ego:1}, comment:"Un equilibrio, mantenuto."},
    {id:"B", label:"\"Sto imparando da lei, anche\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore: \"Imparare, senza perdere sé stessi. Non è poco.\""}
  ]},
{ day:24, text:"Lyra manda notizie. Borin: \"Dovremmo andarla a trovare, qualche volta. Insieme.\"",
  options:[
    {id:"A", label:"\"Vediamo, quando ci sarà il momento giusto\"", delta:{cosc:1,ego:1}, comment:"Borin annuisce, paziente."},
    {id:"B", label:"\"Sì, organizziamolo davvero\"", delta:{calc:1,alt:1}, comment:"Un piano, concreto."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Borin si trova in una situazione delicata, dovuta al suo passato. I tuoi principi ti direbbero una cosa, ma il legame con lui ne suggerisce un'altra.",
  options:[
    {id:"A", label:"Segui i tuoi principi, anche se questo metterà Borin in difficoltà", delta:{cosc:1,ego:1}, comment:"Borin capisce, ma è un momento difficile per entrambi."},
    {id:"B", label:"Trovi un modo per onorare sia i principi che l'amicizia", delta:{calc:1,alt:1}, comment:"Non facile, ma possibile - e Borin lo nota."}
  ]},
{ day:26, text:"Un viaggiatore, vedendovi insieme, commenta: \"Voi due siete una strana coppia. Uno così rigido, l'altro così... non rigido. Eppure funziona.\"",
  options:[
    {id:"A", label:"\"Funziona perché ognuno resta sé stesso\"", delta:{cosc:1,ego:1}, comment:"Borin: \"Esatto. Più o meno.\""},
    {id:"B", label:"\"Funziona perché impariamo l'uno dall'altro\"", delta:{calc:1,alt:1}, comment:"Borin, sorridendo: \"Sì, anche questo.\""}
  ]},
{ day:27, text:"Il Traghettatore: \"Il compromesso non è perdere parte di sé. È trovare spazio per qualcun altro, senza sparire.\"",
  options:[
    {id:"A", label:"\"Sto ancora imparando il confine\"", delta:{cosc:1,ego:1}, comment:"Un equilibrio, in corso."},
    {id:"B", label:"\"Penso di averlo trovato, con Borin\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore annuisce, approvando."}
  ]},
{ day:28, text:"Una grande decisione si presenta - importante per entrambi, con implicazioni diverse per ciascuno.",
  options:[
    {id:"A", label:"Decidi tu, come sempre, ma spieghi bene il perché a Borin", delta:{cosc:1,ego:1}, comment:"Borin, anche se non del tutto d'accordo, capisce e rispetta."},
    {id:"B", label:"Decidete insieme, davvero insieme, per la prima volta su qualcosa di importante", delta:{calc:1,alt:1}, comment:"Un momento significativo per la vostra amicizia."}
  ]},
{ day:29, text:"Borin, una sera: \"Sai, all'inizio pensavo che saresti sempre stato 'quello con le regole'. Ora penso che tu sia 'quello con le regole che però mi ascolta'. È un bel cambiamento.\"",
  options:[
    {id:"A", label:"\"Le regole restano. Ma ho imparato ad ascoltare, sì\"", delta:{cosc:1,ego:1}, comment:"Un equilibrio, riconosciuto."},
    {id:"B", label:"\"Forse sono cambiato più di quanto pensassi\"", delta:{calc:1,alt:1}, comment:"Borin: \"In meglio, amico. In meglio.\""}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: IL COMPROMESSO. Hai imparato che essere fedele ai propri principi e essere aperto agli altri non sono in conflitto - sono parte dello stesso equilibrio, sempre in costruzione. Borin è al tuo fianco, diverso da te in molti modi, ma proprio per questo un compagno di viaggio prezioso. La tua strada, ancora solida, ha trovato spazio per qualcun altro, senza perdere sé stessa.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_compromesso", comment:"Il tuo profilo finale è pronto."}
  ]}
];
