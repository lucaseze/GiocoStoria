// ATTO 3 - da "Equilibrio Ritrovato" (Lyra Q1, B) - giorni 21-30
const ACT3_EQUILIBRIO = [
{ day:21, text:"Hai lasciato il villaggio nelle mani capaci di chi avevi formato. Tu e Lyra siete di nuovo sulla strada, leggeri, per la prima volta da un po'.",
  options:[
    {id:"A", label:"Proponi di seguire la pista di Lyra, finalmente", delta:{cosc:1,alt:1}, comment:"Lyra, sorpresa e felice: \"Sei sicuro?\""},
    {id:"B", label:"Proponi di viaggiare senza meta precisa, per un po'", delta:{calc:1,ego:1}, comment:"Lyra: \"Mi piace come idea.\""}
  ]},
{ day:22, text:"Lungo la strada, un gruppo di viaggiatori vi chiede aiuto per un piccolo problema - niente di epico, solo la vita di tutti i giorni.",
  options:[
    {id:"A", label:"Aiutate, con piacere", delta:{cosc:1,alt:1}, comment:"Piccole cose, fatte bene."},
    {id:"B", label:"Indicate loro chi può aiutarli meglio", delta:{calc:1,ego:1}, comment:"Non tutto deve passare da voi, ormai."}
  ]},
{ day:23, text:"Il Traghettatore, di passaggio: \"Ti vedo diverso. Più leggero. È un complimento, se ti interessa saperlo.\"",
  options:[
    {id:"A", label:"\"Ho imparato che non tutto dipende da me\"", delta:{cosc:1,alt:1}, comment:"Il Traghettatore annuisce, quasi soddisfatto."},
    {id:"B", label:"\"Ho solo trovato qualcuno con cui condividere il peso\"", delta:{calc:1,alt:1}, comment:"Lyra, che ha sentito, ti prende la mano."}
  ]},
{ day:24, text:"Raggiungete il luogo della ricerca di Lyra. È più semplice di quanto temesse, forse perché non è sola, stavolta.",
  options:[
    {id:"A", label:"La lasci procedere da sola, è il suo momento", delta:{cosc:1,ego:1}, comment:"Lyra, dopo, ti abbraccia forte: \"Grazie per essere qui, comunque.\""},
    {id:"B", label:"L'aiuti attivamente, è il vostro momento", delta:{calc:1,alt:1}, comment:"Insieme, è più facile."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Il potere di Lyra torna, completo stavolta. È diversa, ma è ancora lei - solo, più sé stessa.",
  options:[
    {id:"A", label:"Le chiedi cosa vorrebbe fare ora, con questo potere", delta:{cosc:1,alt:1}, comment:"Lyra: \"Non lo so ancora. Ma voglio scoprirlo con te.\""},
    {id:"B", label:"Festeggiate semplicemente, senza pensare al 'dopo'", delta:{calc:1,alt:1}, comment:"Un momento, e basta."}
  ]},
{ day:26, text:"Borin, di cui non avete più notizie da tempo, vi raggiunge per caso - più o meno per caso. Sembra felice di vedervi, e anche un po' diverso.",
  options:[
    {id:"A", label:"Lo invitate a viaggiare ancora con voi", delta:{cosc:1,alt:1}, comment:"Borin: \"Pensavo non l'avreste mai chiesto.\""},
    {id:"B", label:"Vi raccontate a vicenda cosa è successo, poi ognuno per la sua strada", delta:{calc:1,ego:1}, comment:"Un addio caloroso."}
  ]},
{ day:27, text:"Un villaggio in difficoltà, sentita la fama (modesta) del tuo gruppo, chiede aiuto. Stavolta, è una scelta, non un obbligo.",
  options:[
    {id:"A", label:"Aiutate, perché potete e volete", delta:{cosc:1,alt:1}, comment:"Diverso da prima: stavolta è una scelta libera."},
    {id:"B", label:"Declinate, avete altri progetti per ora", delta:{calc:1,ego:1}, comment:"Anche dire no, a volte, è una forma di equilibrio."}
  ]},
{ day:28, text:"Il Traghettatore, forse per l'ultima volta: \"Hai trovato quello che cercavi, viandante?\"",
  options:[
    {id:"A", label:"\"Non sapevo nemmeno cosa stessi cercando\"", delta:{cosc:1,alt:1}, comment:"Una risposta onesta."},
    {id:"B", label:"\"Sì. O almeno, qualcosa che ci si avvicina molto\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore svanisce, con un sorriso."}
  ]},
{ day:29, text:"Una sera tranquilla, al fuoco, con Lyra (e forse Borin). Nessun dilemma epocale, solo... una sera tranquilla.",
  options:[
    {id:"A", label:"Parli del futuro, dei prossimi passi", delta:{cosc:1,alt:1}, comment:"Pianificare, insieme."},
    {id:"B", label:"Ti godi semplicemente il momento, senza pensare al dopo", delta:{calc:1,alt:1}, comment:"A volte basta questo."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: L'EQUILIBRIO RITROVATO. Hai imparato che aiutare gli altri e prenderti cura di te non sono in conflitto - sono parte dello stesso cammino. Lyra è al tuo fianco, non come un peso o un dovere, ma come una scelta che rifaresti ogni giorno. Il villaggio va avanti, sereno, e tu vai avanti con lui, leggero.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_equilibrio_ritrovato", comment:"Il tuo profilo finale è pronto."}
  ]}
];
