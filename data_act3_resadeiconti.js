// ATTO 3 - da "la Resa dei Conti" (Borin Q2, A) - giorni 21-30
const ACT3_RESADEICONTI = [
{ day:21, text:"Avete deciso di affrontare le conseguenze. La taglia sulle vostre teste è reale, e qualcuno, presto, verrà a riscuoterla.",
  options:[
    {id:"A", label:"Vi presentate apertamente alle autorità, raccontando tutto", delta:{cosc:1,alt:1}, comment:"Borin, nervoso, ma con te: \"Va bene. Affrontiamolo.\""},
    {id:"B", label:"Aspettate che vengano da voi, pronti a spiegarvi", delta:{calc:1,alt:1}, comment:"Meno drastico, ma più rischioso."}
  ]},
{ day:22, text:"Le autorità, ascoltando la vostra versione, scoprono che molte delle vostre 'vittime' erano in realtà persone corrotte, e le 'famiglie aiutate' confermano i vostri racconti.",
  options:[
    {id:"A", label:"La situazione si chiarisce a vostro favore, parzialmente", delta:{cosc:1,alt:1}, comment:"Non siete liberi, ma le cose migliorano."},
    {id:"B", label:"Restano comunque dei conti da saldare, legalmente", delta:{calc:1,alt:1}, comment:"Niente è semplice, ma è onesto."}
  ]},
{ day:23, text:"Il Traghettatore, presente anche qui: \"Affrontare le conseguenze richiede coraggio. Più di quanto ne serva per evitarle.\"",
  options:[
    {id:"A", label:"\"Lo sto scoprendo, in questi giorni\"", delta:{cosc:1,alt:1}, comment:"Borin annuisce, d'accordo."},
    {id:"B", label:"\"Spero solo che finisca bene\"", delta:{calc:1,alt:1}, comment:"Una speranza onesta."}
  ]},
{ day:24, text:"Vi viene proposto un accordo: restituire parte dei guadagni (quelli ottenuti in modo meno chiaro) in cambio di una sorta di amnistia parziale.",
  options:[
    {id:"A", label:"Accettate, anche se vi resta poco", delta:{cosc:1,alt:1}, comment:"Borin, sospirando: \"Va bene. Ricominciamo da capo, allora.\""},
    {id:"B", label:"Negoziate per trattenere una parte, per ricominciare", delta:{calc:1,alt:1}, comment:"Un compromesso, ragionevole."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Una delle famiglie che avevate aiutato (giorno 12, Atto 2) si presenta a testimoniare in vostro favore, spontaneamente.",
  options:[
    {id:"A", label:"Sei commosso da questo gesto", delta:{cosc:1,alt:1}, comment:"Borin, anche lui commosso, anche se finge di non esserlo."},
    {id:"B", label:"Lo accogli con gratitudine, ma resti concentrato sulla situazione", delta:{calc:1,alt:1}, comment:"Un aiuto importante, in un momento difficile."}
  ]},
{ day:26, text:"La situazione si risolve: niente prigione, ma una sorta di 'servizio alla comunità' per un periodo, in entrambi i casi.",
  options:[
    {id:"A", label:"Lo affrontate con spirito positivo, è meglio di quanto temevate", delta:{cosc:1,alt:1}, comment:"Borin: \"Servizio alla comunità? Beh, è quello che facevamo già, no?\""},
    {id:"B", label:"È un peso, ma lo accettate, è il prezzo giusto", delta:{calc:1,alt:1}, comment:"Equo, alla fine."}
  ]},
{ day:27, text:"Il Traghettatore: \"Avete pagato il vostro conto. Cosa farete, ora che siete liberi - davvero liberi?\"",
  options:[
    {id:"A", label:"\"Continuare ad aiutare, ma nei limiti della legge, stavolta\"", delta:{cosc:1,alt:1}, comment:"Borin: \"Più noioso. Ma anche più tranquillo.\""},
    {id:"B", label:"\"Non lo so ancora, ma qualcosa di diverso\"", delta:{calc:1,alt:1}, comment:"Un'apertura, verso nuove possibilità."}
  ]},
{ day:28, text:"Durante il 'servizio alla comunità', scoprite che siete piuttosto bravi a risolvere problemi reali, in modo legale - e la gente ve ne è grata.",
  options:[
    {id:"A", label:"Decidete di continuare in questa direzione, anche dopo", delta:{cosc:1,alt:1}, comment:"Borin: \"Chi l'avrebbe detto. Siamo bravi, anche senza scorciatoie.\""},
    {id:"B", label:"È un'opzione tra altre, valutate con calma", delta:{calc:1,alt:1}, comment:"Aperti a diverse strade, ora."}
  ]},
{ day:29, text:"Borin, una sera: \"Sai, ho avuto paura, durante tutto questo. Ma sono contento che l'abbiamo affrontato insieme. E che l'abbiamo affrontato, punto.\"",
  options:[
    {id:"A", label:"\"Anch'io, Borin. Ne valeva la pena\"", delta:{cosc:1,alt:1}, comment:"Un momento di vera condivisione."},
    {id:"B", label:"\"È andata meglio di quanto pensassi\"", delta:{calc:1,alt:1}, comment:"Borin ride, concordando."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: LA RESA DEI CONTI. Avete affrontato le conseguenze delle vostre scelte, a testa alta, e ne siete usciti - non indenni, ma onesti. Quello che era nato come 'fare del bene fuori dalle regole' si è trasformato in qualcosa di più stabile: la capacità di fare del bene, e basta, senza dover guardarsi le spalle. Borin è al tuo fianco, più leggero di quanto sia mai stato.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_resa_dei_conti", comment:"Il tuo profilo finale è pronto."}
  ]}
];
