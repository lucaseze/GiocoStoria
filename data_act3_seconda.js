// ATTO 3 - da "la Seconda Possibilità" (Lyra Q4, B) - giorni 21-30
const ACT3_SECONDA = [
{ day:21, text:"Hai ammesso, almeno a te stesso, di aver confuso il guadagno con il valore. Lyra è ancora lì, ad aspettare - non per sempre, ma per ora.",
  options:[
    {id:"A", label:"Le parli apertamente di quello che hai capito", delta:{cosc:1,alt:1}, comment:"Lyra ascolta, senza giudicare, ma con attenzione."},
    {id:"B", label:"Provi a dimostrarlo con i fatti, più che con le parole", delta:{calc:1,alt:1}, comment:"Lyra nota, comunque, il cambiamento."}
  ]},
{ day:22, text:"Una vecchia 'occasione' di affari si ripresenta - stavolta, decidi consapevolmente come gestirla.",
  options:[
    {id:"A", label:"La gestisci in modo equo, anche se guadagni meno", delta:{cosc:1,alt:1}, comment:"Un piccolo, concreto cambiamento."},
    {id:"B", label:"Trovi un equilibrio: un buon affare, ma onesto", delta:{calc:1,alt:1}, comment:"Non tutto bianco o nero, ma un passo nella direzione giusta."}
  ]},
{ day:23, text:"Il Traghettatore: \"Le seconde possibilità sono rare. Cosa farai, con questa?\"",
  options:[
    {id:"A", label:"\"Provarci, sul serio, stavolta\"", delta:{cosc:1,alt:1}, comment:"Il Traghettatore annuisce."},
    {id:"B", label:"\"Non sprecarla, come ho fatto con altre cose\"", delta:{calc:1,alt:1}, comment:"Una consapevolezza, finalmente."}
  ]},
{ day:24, text:"Una persona che avevi 'usato' in passato (giorno 13/15, Atto 2) ti incontra di nuovo. Stavolta, hai la possibilità di sistemare le cose.",
  options:[
    {id:"A", label:"Ti scusi apertamente, e provi a rimediare", delta:{cosc:1,alt:1}, comment:"Non facile, ma necessario."},
    {id:"B", label:"Trovi un modo indiretto per compensare, senza grandi discorsi", delta:{calc:1,alt:1}, comment:"Funziona comunque, a modo tuo."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Lyra ti propone di affrontare insieme una sfida - non per guadagno, ma perché vale la pena, e basta.",
  options:[
    {id:"A", label:"Accetti, senza calcolare cosa ci guadagnerai", delta:{cosc:1,alt:1}, comment:"Una prima volta, per te."},
    {id:"B", label:"Accetti, ma una piccola parte di te calcola ancora, per abitudine", delta:{calc:1,alt:1}, comment:"Cambiare richiede tempo, e va bene."}
  ]},
{ day:26, text:"La sfida con Lyra va bene - non perfettamente, ma bene. E per la prima volta da tempo, il guadagno non è la prima cosa a cui pensi, dopo.",
  options:[
    {id:"A", label:"Lo noti, e ne sei sorpreso, in modo positivo", delta:{cosc:1,alt:1}, comment:"Un piccolo cambiamento, notato."},
    {id:"B", label:"Non ci pensi troppo, semplicemente accade", delta:{calc:1,alt:1}, comment:"A volte, i cambiamenti più veri sono i meno notati."}
  ]},
{ day:27, text:"Il Traghettatore: \"Il valore di una cosa non è sempre quello che si può portare in tasca.\"",
  options:[
    {id:"A", label:"\"Lo sto imparando, lentamente\"", delta:{cosc:1,alt:1}, comment:"Una riflessione onesta."},
    {id:"B", label:"\"Alcune cose ancora me le porto in tasca, però\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore, quasi ridendo: \"Va bene anche questo.\""}
  ]},
{ day:28, text:"Lyra, una sera: \"Sai, all'inizio pensavo che ti importasse solo del guadagno. Ora non ne sono più così sicura. È un cambiamento che mi piace.\"",
  options:[
    {id:"A", label:"Le racconti, sinceramente, del tuo percorso", delta:{cosc:1,alt:1}, comment:"Un momento di vera connessione."},
    {id:"B", label:"Sorridi, senza grandi discorsi - i fatti parlano", delta:{calc:1,alt:1}, comment:"Anche questo, va bene."}
  ]},
{ day:29, text:"Un'ultima 'vecchia occasione' si presenta - quella che, in passato, avresti accettato senza pensarci.",
  options:[
    {id:"A", label:"La rifiuti, con convinzione", delta:{cosc:1,alt:1}, comment:"Non è più chi sei."},
    {id:"B", label:"La rifiuti, ma con un po' di nostalgia per la facilità di prima", delta:{calc:1,alt:1}, comment:"Onesto, e umano."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: LA SECONDA POSSIBILITÀ. Hai riconosciuto, in tempo, che la strada che stavi percorrendo ti stava allontanando da ciò che conta davvero - e hai scelto di cambiarla. Non è stato un cambiamento immediato o perfetto, ma è stato vero. Lyra è ancora al tuo fianco, non per dovere, ma per scelta - la tua, e la sua. Una seconda possibilità, ben usata.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_seconda_possibilita", comment:"Il tuo profilo finale è pronto."}
  ]}
];
