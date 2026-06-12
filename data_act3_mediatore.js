// ATTO 3 - da "il Mediatore Stanco" (Lyra Q2, B) - giorni 21-30
const ACT3_MEDIATORE = [
{ day:21, text:"Hai deciso di cambiare approccio. È più lento, più faticoso, ma Lyra, al tuo fianco, sembra respirare meglio.",
  options:[
    {id:"A", label:"Le proponi di proseguire insieme con questo nuovo stile", delta:{cosc:1,alt:1}, comment:"Lyra: \"Mi piace questa versione di te.\""},
    {id:"B", label:"Ti chiedi se sarai in grado di mantenerlo, sotto pressione", delta:{calc:1,ego:1}, comment:"Un dubbio onesto, almeno."}
  ]},
{ day:22, text:"Una situazione complessa si presenta: un conflitto tra due gruppi, di nuovo. Stavolta scegli la via lenta, trasparente.",
  options:[
    {id:"A", label:"Mediare richiede settimane, ma sembra funzionare davvero", delta:{cosc:1,alt:1}, comment:"Più lento, ma più solido."},
    {id:"B", label:"A metà, la tentazione di 'accelerare' con vecchi metodi è forte", delta:{calc:1,ego:1}, comment:"Resisti, ma è difficile."}
  ]},
{ day:23, text:"Il Traghettatore, osservandoti lavorare diversamente: \"È più faticoso, così, vero?\"",
  options:[
    {id:"A", label:"\"Sì. Ma sembra più vero\"", delta:{cosc:1,alt:1}, comment:"Il Traghettatore annuisce, quasi con calore."},
    {id:"B", label:"\"A volte mi manca la vecchia efficienza\"", delta:{calc:1,ego:1}, comment:"Una risposta onesta, anche questa."}
  ]},
{ day:24, text:"La mediazione lenta produce un accordo che, per la prima volta, entrambe le parti capiscono e accettano davvero, senza trucchi.",
  options:[
    {id:"A", label:"È una piccola vittoria, ma significativa", delta:{cosc:1,alt:1}, comment:"Lyra, orgogliosa: \"Visto? Si può fare.\""},
    {id:"B", label:"Ti chiedi se valga il tempo e l'energia spesi", delta:{calc:1,ego:1}, comment:"Una domanda legittima, anche questa."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Sei stanco - non del lavoro, ma del cambiamento. Cambiare stile è più faticoso di quanto pensassi.",
  options:[
    {id:"A", label:"Ne parli con Lyra, apertamente", delta:{cosc:1,alt:1}, comment:"Lyra: \"Va bene essere stanchi. Non devi essere perfetto, sai?\""},
    {id:"B", label:"Tieni duro, in silenzio", delta:{calc:1,ego:1}, comment:"Lyra nota, comunque, qualcosa."}
  ]},
{ day:26, text:"Un vecchio 'cliente' di quando usavi metodi più spicci ti ricontatta, con un'offerta lucrosa per tornare ai vecchi metodi, una volta.",
  options:[
    {id:"A", label:"Rifiuti, fermamente", delta:{cosc:1,alt:1}, comment:"Lyra, che ha ascoltato: \"Sono fiera di te.\""},
    {id:"B", label:"Sei tentato - una volta non farebbe male, no?", delta:{calc:1,ego:1}, comment:"Un momento di debolezza, riconosciuto come tale."}
  ]},
{ day:27, text:"Il Traghettatore, ancora: \"Cambiare strada è il viaggio più lungo che si possa fare, anche restando fermi.\"",
  options:[
    {id:"A", label:"\"Lo sto imparando\"", delta:{cosc:1,alt:1}, comment:"Una risposta semplice, vera."},
    {id:"B", label:"\"Spero solo di non tornare indietro\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore: \"La paura di tornare indietro è già un passo avanti.\""}
  ]},
{ day:28, text:"Lyra ha trovato finalmente risposte sul suo potere perduto - stavolta, con metodi che entrambi potete guardare in faccia.",
  options:[
    {id:"A", label:"Festeggiate insieme, senza riserve", delta:{cosc:1,alt:1}, comment:"Un momento pulito, finalmente."},
    {id:"B", label:"Ti chiedi cosa farete ora, con questo nuovo potere", delta:{calc:1,alt:1}, comment:"Pianificare, ancora, ma insieme."}
  ]},
{ day:29, text:"Una sera tranquilla. Lyra: \"Sai, all'inizio pensavo che fossi solo... bravo a far funzionare le cose. Ora penso che tu sia bravo a far funzionare le persone. È diverso, e migliore.\"",
  options:[
    {id:"A", label:"La ringrazi, sinceramente", delta:{cosc:1,alt:1}, comment:"Un momento di vera connessione."},
    {id:"B", label:"Scherzi, per alleggerire un momento troppo serio", delta:{calc:1,alt:1}, comment:"Lyra ride, e il momento resta comunque vero."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: IL MEDIATORE STANCO (MA VERO). Hai imparato che i risultati più solidi sono spesso quelli più lenti, e che la fiducia di chi ti sta vicino vale più di qualsiasi soluzione brillante ma fredda. Lyra è al tuo fianco, e insieme avete trovato un modo di affrontare il mondo che, pur faticoso, vi appartiene davvero.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_mediatore_stanco", comment:"Il tuo profilo finale è pronto."}
  ]}
];
