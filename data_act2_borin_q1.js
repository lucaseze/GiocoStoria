// ATTO 2 - Borin + Quadrante 1 (Coscienza+Altruismo) "l'Eroe per Sbaglio"
const ACT2_BORIN_Q1 = [
{ day:11, text:"Borin, per ringraziarti, ti porta a un torneo locale dove spera di vincere qualche moneta. Durante l'evento, scopri che l'organizzatore froda i partecipanti.",
  options:[
    {id:"A", label:"Lo denunci pubblicamente, rovinando il torneo", delta:{cosc:1,alt:1}, comment:"Borin perde la sua occasione, ma è giusto."},
    {id:"B", label:"Aiuti Borin a vincere comunque, ignorando la frode", delta:{calc:1,ego:1}, comment:"Borin vince qualcosa, almeno."}
  ]},
{ day:12, text:"La tua reputazione di \"persona che fa la cosa giusta\" inizia a girare. Un gruppo di abitanti ti chiede di aiutarli contro un bullo locale, un ex soldato.",
  options:[
    {id:"A", label:"Accetti di affrontarlo", delta:{cosc:1,alt:1}, comment:"Borin: \"Aspetta, TU? Va bene, vengo anch'io.\""},
    {id:"B", label:"Suggerisci di risolverla diplomaticamente", delta:{calc:1,ego:1}, comment:"Più lento, meno rischioso."}
  ]},
{ day:13, text:"Borin, entusiasta della tua \"carriera eroica\", inizia a raccontare in giro storie esagerate sulle tue gesta. La gente inizia ad aspettarsi cose impossibili da te.",
  options:[
    {id:"A", label:"Provi a vivere secondo quelle aspettative", delta:{cosc:1,alt:1}, comment:"Pesante, ma in qualche modo motivante."},
    {id:"B", label:"Chiedi a Borin di smetterla con le esagerazioni", delta:{calc:1,ego:1}, comment:"Borin, deluso: \"Ma sono fan tuoi!\""}
  ]},
{ day:14, text:"Un anziano malato in un villaggio vicino ha bisogno di un'erba rara, che cresce solo in una zona pericolosa.",
  options:[
    {id:"A", label:"Andate a raccoglierla, rischiando", delta:{cosc:1,alt:1}, comment:"Borin, terrorizzato ma presente: \"Ok, ok, andiamo.\""},
    {id:"B", label:"Cercate un'alternativa più sicura, anche se meno efficace", delta:{calc:1,ego:1}, comment:"L'anziano migliora, ma più lentamente."}
  ]},
{ day:15, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Borin si fa male durante uno dei vostri \"incarichi\". Niente di grave, ma è spaventato.",
  options:[
    {id:"A", label:"Vi fermate per qualche giorno, a riposare", delta:{cosc:1,alt:1}, comment:"Borin, grato, anche se non lo dice."},
    {id:"B", label:"Proseguite, c'è ancora molto da fare", delta:{calc:1,ego:1}, comment:"Borin tiene il passo, a fatica."}
  ]},
{ day:16, text:"La gilda di Borin, sentite le voci sulle tue gesta (e su di lui al tuo fianco), gli offre la riammissione, a patto che tu \"presti\" il tuo nome per alcune missioni della gilda.",
  options:[
    {id:"A", label:"Accetti, per Borin", delta:{cosc:1,alt:1}, comment:"Borin è raggiante."},
    {id:"B", label:"Suggerisci a Borin di rientrare per merito proprio", delta:{calc:1,ego:1}, comment:"Più difficile, ma più vero."}
  ]},
{ day:17, text:"Un nobile locale, colpito dalla tua fama, ti offre un titolo onorifico, in cambio della tua presenza a eventi di corte.",
  options:[
    {id:"A", label:"Accetti, potrebbe aiutarti ad aiutare altri", delta:{cosc:1,alt:1}, comment:"Borin: \"Un titolo! Posso essere il tuo... assistente?\""},
    {id:"B", label:"Rifiuti, preferisci restare libero", delta:{calc:1,ego:1}, comment:"Borin, un po' deluso, capisce."}
  ]},
{ day:18, text:"Lyra (di cui avevate notizie sporadiche) manda un messaggio: ha bisogno di aiuto, lontano da qui. Borin, però, ha finalmente un'occasione importante proprio in questi giorni.",
  options:[
    {id:"A", label:"Vai ad aiutare Lyra", delta:{cosc:1,alt:1}, comment:"Borin capisce, anche se è dispiaciuto."},
    {id:"B", label:"Resti per Borin, e rispondi a Lyra che non puoi", delta:{calc:1,ego:1}, comment:"Lyra non risponde più, per un po'."}
  ]},
{ day:19, guide:"Domani saprai che tipo di eroe sei diventato.", text:"Le storie su di te, ormai, sono diventate leggenda, in parte vere, in parte no. Borin ne è orgogliosissimo.",
  options:[
    {id:"A", label:"Provi a correggere le parti false della leggenda", delta:{cosc:1,alt:1}, comment:"Borin: \"Ma rovina la storia!\""},
    {id:"B", label:"Lasci che la leggenda viva, vera o no", delta:{calc:1,ego:1}, comment:"Borin è raggiante."}
  ]},
{ day:20, guide:"Sei diventato un eroe, forse per sbaglio. Ti riconosci, in questa storia?", text:"Bivio finale.",
  options:[
    {id:"A", label:"\"Le storie contano meno delle persone che ho aiutato\"", delta:{cosc:1,alt:1}, ending:"il_vero_amico", comment:"Borin resta al tuo fianco, vero amico oltre le storie."},
    {id:"B", label:"\"Sono diventato la leggenda che Borin voleva\"", delta:{calc:1,ego:1}, ending:"eroe_per_sbaglio", comment:"Una leggenda, forse più grande di te."}
  ]}
];
