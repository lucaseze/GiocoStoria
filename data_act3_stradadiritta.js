// ATTO 3 - da "la Strada Diritta" (Borin Q3, A) - giorni 21-30
const ACT3_STRADADIRITTA = [
{ day:21, text:"Borin ha preso la sua strada, con affetto ma senza rimpianti. Sei di nuovo solo, fedele ai tuoi principi, come hai sempre voluto essere.",
  options:[
    {id:"A", label:"Continui ad applicare i tuoi principi, ovunque vai", delta:{cosc:1,ego:1}, comment:"È chi sei."},
    {id:"B", label:"Ti chiedi, ogni tanto, come stia Borin", delta:{calc:1,alt:1}, comment:"Un pensiero, di tanto in tanto."}
  ]},
{ day:22, text:"Una città ha bisogno di un giudice imparziale per una disputa importante. La tua reputazione di integrità ti precede.",
  options:[
    {id:"A", label:"Accetti il ruolo, con serietà", delta:{cosc:1,ego:1}, comment:"Un compito che ti si addice."},
    {id:"B", label:"Accetti, ma cerchi anche di capire le persone coinvolte, non solo i fatti", delta:{calc:1,alt:1}, comment:"Un piccolo passo verso un approccio diverso."}
  ]},
{ day:23, text:"Il Traghettatore: \"Sei diventato un punto di riferimento per molti. Ma un punto di riferimento, da solo, può sembrare lontano.\"",
  options:[
    {id:"A", label:"\"La distanza fa parte del ruolo\"", delta:{cosc:1,ego:1}, comment:"Una giustificazione, forse."},
    {id:"B", label:"\"Forse posso essere un punto di riferimento più vicino\"", delta:{calc:1,alt:1}, comment:"Un'apertura, piccola ma reale."}
  ]},
{ day:24, text:"Un messaggio da Borin, dopo tempo: sta bene, ha trovato la sua strada, e ti ringrazia per tutto. \"Sei stato un buon amico, anche se diverso da me.\"",
  options:[
    {id:"A", label:"Rispondi, brevemente ma sinceramente", delta:{cosc:1,ego:1}, comment:"Un contatto, mantenuto."},
    {id:"B", label:"Rispondi con calore, e proponi di rivedervi, qualche volta", delta:{calc:1,alt:1}, comment:"Borin risponde, felice."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Il tuo ruolo di giudice/arbitro ti porta in contatto con molte persone, ognuna con la propria storia. Inizi a notare che, a volte, le storie contano quanto i principi.",
  options:[
    {id:"A", label:"Mantieni il focus sui principi, come sempre", delta:{cosc:1,ego:1}, comment:"Coerente, come sempre."},
    {id:"B", label:"Inizi a considerare anche le storie, nelle tue decisioni", delta:{calc:1,alt:1}, comment:"Un piccolo, significativo cambiamento."}
  ]},
{ day:26, text:"Lyra, di cui hai sentito notizie, sembra avere trovato il suo equilibrio, da qualche parte. Ti chiedi se anche tu lo abbia trovato, o se lo stia ancora cercando.",
  options:[
    {id:"A", label:"Il tuo equilibrio è la coerenza, e questo basta", delta:{cosc:1,ego:1}, comment:"Una risposta che ti convince, quasi del tutto."},
    {id:"B", label:"Forse l'equilibrio è qualcos'altro, ancora da scoprire", delta:{calc:1,alt:1}, comment:"Una domanda aperta, e va bene così."}
  ]},
{ day:27, text:"Il Traghettatore: \"Hai costruito una strada diritta e solida. Ma le strade, a volte, portano a incroci inattesi.\"",
  options:[
    {id:"A", label:"\"La mia strada resta diritta\"", delta:{cosc:1,ego:1}, comment:"Una scelta, ribadita."},
    {id:"B", label:"\"Forse sono pronto per un incrocio, ora\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore: \"Gli incroci, a volte, sono i posti più interessanti.\""}
  ]},
{ day:28, text:"Borin ti invita a una piccola festa, nel villaggio dove ora vive. Niente di epico, solo un'occasione per rivedersi.",
  options:[
    {id:"A", label:"Declini, hai impegni più importanti", delta:{cosc:1,ego:1}, comment:"Borin capisce, ma è un po' deluso."},
    {id:"B", label:"Accetti, e ci vai", delta:{calc:1,alt:1}, comment:"Borin, felicissimo di rivederti."}
  ]},
{ day:29, text:"(Se sei andato alla festa) Rivedere Borin ti fa bene, in un modo che non ti aspettavi. (Se non sei andato) Un altro messaggio di Borin, più breve, arriva. Capisce, ma c'è una distanza, ora, tra voi.",
  options:[
    {id:"A", label:"Continui sulla tua strada, fedele a te stesso", delta:{cosc:1,ego:1}, comment:"Coerente, fino in fondo."},
    {id:"B", label:"Riconosci che, forse, la strada diritta può avere delle curve, ogni tanto", delta:{calc:1,alt:1}, comment:"Un piccolo, ma significativo, cambiamento."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: LA STRADA DIRITTA, DA SOLO. Hai costruito una vita basata su principi solidi, e sei diventato un punto di riferimento per molti - un giudice, un arbitro, una voce di integrità in un mondo spesso confuso. Il prezzo, però, è stato un certo isolamento: le persone ti rispettano, ma poche ti conoscono davvero. La tua strada resta diritta, solida, e - per scelta o per natura - prevalentemente solitaria.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_strada_diritta", comment:"Il tuo profilo finale è pronto."}
  ]}
];
