// ATTO 3 - da "il Fuorilegge Gentile" (Borin Q2, B) - giorni 21-30
const ACT3_FUORILEGGEGENTILE = [
{ day:21, text:"Avete scelto di restare un passo avanti a tutti, continuando il vostro modo di aiutare la gente. La taglia, però, cresce, e con essa l'attenzione su di voi.",
  options:[
    {id:"A", label:"Cambiate zona spesso, restando flessibili", delta:{calc:1,alt:1}, comment:"Borin: \"La vita del viandante, eh?\""},
    {id:"B", label:"Vi stabilite in una zona, gestendo i rischi localmente", delta:{cosc:1,alt:1}, comment:"Più rischioso, ma più radicato."}
  ]},
{ day:22, text:"Una nuova 'occasione' enorme si presenta - il bersaglio è qualcuno davvero spietato, ma l'operazione è estremamente rischiosa.",
  options:[
    {id:"A", label:"La affrontate, è il bersaglio giusto stavolta", delta:{calc:1,alt:1}, comment:"Borin: \"Ok, ultima volta che dico questa frase, di nuovo.\""},
    {id:"B", label:"È troppo rischioso, lasciate correre", delta:{cosc:1,alt:1}, comment:"Prudenza, per una volta."}
  ]},
{ day:23, text:"Il Traghettatore: \"Restare un passo avanti, per sempre, è una corsa che non si vince. Si rallenta, soltanto.\"",
  options:[
    {id:"A", label:"\"Per ora ci basta restare avanti\"", delta:{calc:1,alt:1}, comment:"Borin: \"Per ora va bene così.\""},
    {id:"B", label:"\"Forse hai ragione. Dovremo fermarci, prima o poi\"", delta:{cosc:1,alt:1}, comment:"Una consapevolezza, per il futuro."}
  ]},
{ day:24, text:"Una delle famiglie aiutate tempo fa vi offre un rifugio sicuro, un posto dove nessuno verrebbe a cercarvi - per un po', almeno.",
  options:[
    {id:"A", label:"Accettate, una pausa fa bene", delta:{calc:1,alt:1}, comment:"Riposo, finalmente."},
    {id:"B", label:"Rifiutate, non volete metterli a rischio", delta:{cosc:1,alt:1}, comment:"Borin, un po' deluso, ma capisce."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Borin, una sera: \"Sai, a volte penso a cosa succederebbe se ci catturassero. Non per paura, solo... mi chiedo se ne valga la pena.\"",
  options:[
    {id:"A", label:"\"Ne vale la pena, per chi aiutiamo\"", delta:{calc:1,alt:1}, comment:"Borin annuisce, ma la domanda resta."},
    {id:"B", label:"\"Forse dovremmo iniziare a pensare a un'uscita\"", delta:{cosc:1,alt:1}, comment:"Un primo pensiero verso il futuro."}
  ]},
{ day:26, text:"Un cacciatore di taglie, particolarmente abile, vi sta seguendo da giorni. Lo notate, ma lui non sa che lo avete notato.",
  options:[
    {id:"A", label:"Lo seminate, con un trucco elaborato", delta:{calc:1,alt:1}, comment:"Funziona, ma per quanto?"},
    {id:"B", label:"Lo affrontate direttamente, provando a dialogare", delta:{cosc:1,alt:1}, comment:"Rischioso, ma diretto."}
  ]},
{ day:27, text:"Il Traghettatore: \"Una vita di fuga, anche se gentile, resta una vita di fuga. Cosa state fuggendo, davvero?\"",
  options:[
    {id:"A", label:"\"Le conseguenze, immagino\"", delta:{calc:1,alt:1}, comment:"Un'onestà, finalmente."},
    {id:"B", label:"\"Forse è il momento di smettere di fuggire\"", delta:{cosc:1,alt:1}, comment:"Borin, sorpreso, ma non contrario."}
  ]},
{ day:28, text:"Lyra, di cui avete sentito parlare, sembra ora avere una vita più stabile, da qualche parte. Borin: \"Forse anche per noi, un giorno...\"",
  options:[
    {id:"A", label:"\"Magari. Ma non ancora\"", delta:{calc:1,alt:1}, comment:"Il sogno resta, per ora, un sogno."},
    {id:"B", label:"\"Forse è più vicino di quanto pensiamo\"", delta:{cosc:1,alt:1}, comment:"Un'apertura, verso il cambiamento."}
  ]},
{ day:29, text:"Un'ultima grande 'occasione' si presenta - potrebbe essere quella che vi permette finalmente di 'ritirarvi', con dignità e sicurezza.",
  options:[
    {id:"A", label:"La affrontate, è la vostra occasione", delta:{calc:1,alt:1}, comment:"Borin, nervoso ma determinato: \"Ok. Andiamo.\""},
    {id:"B", label:"Decidete che è il momento di fermarvi, senza altre 'ultime occasioni'", delta:{cosc:1,alt:1}, comment:"Una scelta più saggia, forse."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: IL FUORILEGGE GENTILE. Avete vissuto, e continuate a vivere, ai margini delle regole, ma sempre con un codice tutto vostro: aiutare chi ha bisogno, anche a costo di restare un passo avanti a tutti per sempre. È una vita di movimento, di rischio, e di libertà - non priva di paure, ma piena di significato. Tu e Borin, sulla strada, ancora.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_fuorilegge_gentile", comment:"Il tuo profilo finale è pronto."}
  ]}
];
