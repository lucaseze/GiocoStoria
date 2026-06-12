// ATTO 3 - da "Eremita" (Lyra Q3, A) - giorni 21-30
const ACT3_EREMITA = [
{ day:21, text:"Lyra ti ha lasciato, gentilmente ma definitivamente. \"Le tue regole sono ciò che sei. Le rispetto. Ma non posso viverci dentro.\" Sei di nuovo solo, come preferivi essere.",
  options:[
    {id:"A", label:"Va bene così, è la tua natura", delta:{cosc:1,ego:1}, comment:"Una solitudine familiare, quasi confortevole."},
    {id:"B", label:"Qualcosa, dentro, fa più male di quanto ti aspettassi", delta:{calc:1,alt:1}, comment:"Non lo ammetti a voce alta, ma lo senti."}
  ]},
{ day:22, text:"Il gruppo di persone con principi simili ai tuoi, di cui avevi sentito parlare, ti contatta di nuovo. Stavolta, decidi di incontrarli.",
  options:[
    {id:"A", label:"Ti uniscono, formalmente, alla loro causa", delta:{cosc:1,ego:1}, comment:"Finalmente, persone che 'capiscono'."},
    {id:"B", label:"Li ascolti, ma resti indipendente", delta:{calc:1,alt:1}, comment:"Anche tra simili, preferisci la tua strada."}
  ]},
{ day:23, text:"Il Traghettatore è una presenza quasi costante, ora. \"Sei più solo, o più libero, di prima?\"",
  options:[
    {id:"A", label:"\"Sono la stessa cosa, per me\"", delta:{cosc:1,ego:1}, comment:"Il Traghettatore non commenta, ma resta."},
    {id:"B", label:"\"Non sono sicuro che lo siano\"", delta:{calc:1,alt:1}, comment:"Una piccola fessura nella certezza."}
  ]},
{ day:24, text:"Il gruppo di 'simili' ti chiede di applicare i tuoi principi in una situazione che coinvolge persone innocenti, in modo che ti lascia a disagio.",
  options:[
    {id:"A", label:"I principi sono principi, applichi comunque", delta:{cosc:1,ego:1}, comment:"Il gruppo approva. Tu, un po' meno."},
    {id:"B", label:"Ti opponi, anche al gruppo stesso", delta:{calc:1,alt:1}, comment:"Forse i principi, da soli, non bastano."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Una notizia, di passaggio: Lyra ha trovato il suo potere, da sola. Sta bene. Non ti cerca, ma non sembra nemmeno arrabbiata. Solo... andata avanti.",
  options:[
    {id:"A", label:"Ne sei felice per lei, sinceramente", delta:{cosc:1,ego:1}, comment:"Un sentimento più complesso di quanto ti aspettassi."},
    {id:"B", label:"Ti chiedi se le cose potessero andare diversamente", delta:{calc:1,alt:1}, comment:"Una domanda che, forse, non ha risposta."}
  ]},
{ day:26, text:"Il gruppo di 'simili' inizia a mostrare crepe: anche tra persone con principi uguali, le interpretazioni divergono. Un conflitto interno emerge.",
  options:[
    {id:"A", label:"Resti fedele alla tua interpretazione, costi quel che costi", delta:{cosc:1,ego:1}, comment:"Il gruppo si divide, in parte per colpa tua."},
    {id:"B", label:"Provi a trovare un terreno comune, per il gruppo", delta:{calc:1,alt:1}, comment:"Difficile, ma ci provi."}
  ]},
{ day:27, text:"Il Traghettatore: \"Le tue regole ti hanno protetto da molto. Ma protezione e prigione, a volte, hanno le stesse mura.\"",
  options:[
    {id:"A", label:"\"Preferisco le mie mura a nessuna\"", delta:{cosc:1,ego:1}, comment:"Una risposta definitiva, forse."},
    {id:"B", label:"La frase resta, a lungo, nei tuoi pensieri", delta:{calc:1,alt:1}, comment:"Non hai una risposta, per ora."}
  ]},
{ day:28, text:"Un viaggiatore solitario, come te, ti chiede ospitalità per una notte. Conversando, scopri che anche lui, anni fa, ha scelto la solitudine per principio.",
  options:[
    {id:"A", label:"Trovi conforto nel suo essere come te", delta:{cosc:1,ego:1}, comment:"Due solitudini, una accanto all'altra."},
    {id:"B", label:"Gli chiedi se, col tempo, ha mai avuto dubbi", delta:{calc:1,alt:1}, comment:"Il viaggiatore: \"Tutti i giorni. Ma è tardi, per me, per cambiare.\""}
  ]},
{ day:29, text:"Sei a un bivio fisico, sulla mappa: una strada porta verso luoghi che non hai mai visto, da solo. L'altra, verso il villaggio dove tutto è iniziato.",
  options:[
    {id:"A", label:"Scegli l'ignoto, da solo, come sempre", delta:{cosc:1,ego:1}, comment:"È la tua natura, dopotutto."},
    {id:"B", label:"Scegli di tornare, almeno una volta, da dove sei partito", delta:{calc:1,alt:1}, comment:"Forse, solo per vedere."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: L'EREMITA. Hai seguito i tuoi principi fino in fondo, fedele a te stesso senza compromessi. Hai trovato in questo una forma di pace, anche se a un prezzo: i legami che avresti potuto costruire restano sentieri non percorsi. La tua strada prosegue, solitaria, definita esattamente come la volevi - né più, né meno.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_eremita", comment:"Il tuo profilo finale è pronto."}
  ]}
];
