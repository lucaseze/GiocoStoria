// ATTO 3 - da "i Due Lupi" (Borin Q4, A) - giorni 21-30
const ACT3_DUELUPI = [
{ day:21, text:"Avete deciso di continuare così: due lupi, contro un mondo di pecore. I guadagni crescono. Il mondo intorno, continua a restringersi.",
  options:[
    {id:"A", label:"Alzate ancora la posta, nuove occasioni più rischiose", delta:{calc:1,ego:1}, comment:"Borin: \"Sempre più in alto, eh?\""},
    {id:"B", label:"Vi godete, per un momento, quello che avete già", delta:{cosc:1,alt:1}, comment:"Un raro momento di pausa."}
  ]},
{ day:22, text:"Una delle vostre 'occasioni' coinvolge, stavolta, qualcuno che vi ricorda Borin, di anni fa - prima che lo conoscessi.",
  options:[
    {id:"A", label:"Procedi comunque, gli affari sono affari", delta:{calc:1,ego:1}, comment:"Borin, stranamente, non commenta. Per niente."},
    {id:"B", label:"Ti fermi, qualcosa in questa situazione è diverso", delta:{cosc:1,alt:1}, comment:"Borin, sorpreso dalla tua reazione, ti guarda a lungo."}
  ]},
{ day:23, text:"Il Traghettatore, una presenza sempre più rara, ultimamente: \"I lupi cacciano in branco perché da soli non sopravvivono. Voi due, però, sembrate sempre più soli, anche insieme.\"",
  options:[
    {id:"A", label:"\"Non capisco cosa intendi\"", delta:{calc:1,ego:1}, comment:"Il Traghettatore non risponde, e questa volta non torna per un po'."},
    {id:"B", label:"La frase ti resta addosso, più delle altre", delta:{cosc:1,alt:1}, comment:"Qualcosa, dentro, inizia a muoversi."}
  ]},
{ day:24, text:"Borin, di punto in bianco: \"Sai, quella persona di ieri... mi ha fatto pensare a com'ero io, prima. Prima che tu... beh, prima di te.\"",
  options:[
    {id:"A", label:"\"Eri diverso, allora?\"", delta:{calc:1,ego:1}, comment:"Borin, vago: \"Diverso. Sì.\""},
    {id:"B", label:"\"Forse possiamo essere diversi anche ora\"", delta:{cosc:1,alt:1}, comment:"Borin ti guarda, in silenzio, per un momento lungo."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Un'occasione enorme, la più grande di tutte, si presenta - ma il bersaglio, stavolta, è qualcuno che, tempo fa, vi aveva aiutato.",
  options:[
    {id:"A", label:"Gli affari sono affari, anche stavolta", delta:{calc:1,ego:1}, comment:"Borin, per la prima volta, esprime un dubbio: \"Sei sicuro?\""},
    {id:"B", label:"No. Non questa persona. Non così", delta:{cosc:1,alt:1}, comment:"Borin, sollevato: \"Pensavo che avresti detto di sì.\""}
  ]},
{ day:26, text:"Le vostre attività, sempre più aggressive (o meno, a seconda delle scelte), iniziano ad attirare l'attenzione di qualcuno di davvero pericoloso.",
  options:[
    {id:"A", label:"Affrontate la minaccia direttamente, come due lupi farebbero", delta:{calc:1,ego:1}, comment:"Rischioso, molto."},
    {id:"B", label:"Trovate un modo per evitarla, anche se significa rinunciare a qualcosa", delta:{cosc:1,alt:1}, comment:"Più prudente."}
  ]},
{ day:27, text:"Il Traghettatore, riapparendo: \"Avete sentito la domanda di Borin, giorni fa? 'Siamo davvero amici, o solo comodi l'uno per l'altro?' Avete trovato una risposta?\"",
  options:[
    {id:"A", label:"\"Non ci ho pensato più\"", delta:{calc:1,ego:1}, comment:"Il Traghettatore, per l'ultima volta forse, sembra deluso."},
    {id:"B", label:"\"Ci ho pensato. E credo che la risposta sia più complicata del previsto\"", delta:{cosc:1,alt:1}, comment:"Un'apertura, importante."}
  ]},
{ day:28, text:"Borin, una sera, più serio del solito: \"Ascolta. Quella roba di ieri, la persona che ci aveva aiutato... non potevo farlo. E penso che neanche tu, davvero.\"",
  options:[
    {id:"A", label:"\"Forse hai ragione. Forse stiamo esagerando, da un po'\"", delta:{cosc:1,alt:1}, comment:"Un riconoscimento, importante, condiviso."},
    {id:"B", label:"\"È solo lavoro, Borin. Non renderlo personale\"", delta:{calc:1,ego:1}, comment:"Borin, con un'espressione che non gli avevi mai visto, annuisce e si allontana, per un po'."}
  ]},
{ day:29, text:"(Se hai riconosciuto l'eccesso) Tu e Borin parlate, davvero, per la prima volta da tanto. (Se non l'hai fatto) Borin è distante, più di prima. Le cose, tra voi, sono cambiate, in un modo che non vorresti.",
  options:[
    {id:"A", label:"Continui come prima, due lupi, contro tutto", delta:{calc:1,ego:1}, comment:"Coerente, con quello che siete diventati."},
    {id:"B", label:"Provi a cambiare rotta, anche se è difficile e tardivo", delta:{cosc:1,alt:1}, comment:"Un tentativo, sincero, di cambiamento."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: I DUE LUPI. Tu e Borin avete costruito, insieme, una vita basata sull'efficienza, sul guadagno, sull'essere 'un passo avanti' a tutti. Funziona, in un certo senso. Ma il mondo intorno a voi è diventato più piccolo, più diffidente, e le persone che incontrate, sempre più spesso, sono solo 'occasioni'. Due lupi, ancora insieme - ma quanto, davvero, si conoscono l'un l'altro, resta una domanda aperta.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_due_lupi", comment:"Il tuo profilo finale è pronto."}
  ]}
];
