// ATTO 3 - da "il Vincitore Solo" (Lyra Q4, A) - giorni 21-30
const ACT3_VINCITORE = [
{ day:21, text:"Lyra è partita, senza troppi drammi, ma senza voltarsi indietro. Le tue tasche sono piene. La strada, intorno, sembra un po' più vuota.",
  options:[
    {id:"A", label:"Investi i guadagni in nuove 'occasioni'", delta:{calc:1,ego:1}, comment:"Gli affari continuano, da soli ormai."},
    {id:"B", label:"Ti chiedi, per un momento, se rincorrerla", delta:{cosc:1,alt:1}, comment:"Il momento passa, ma resta."}
  ]},
{ day:22, text:"Una nuova occasione enorme si presenta: rischiosa, ma con un guadagno che potrebbe cambiarti la vita. Richiede di ingannare qualcuno che si fida di te.",
  options:[
    {id:"A", label:"Procedi, è il tuo modo ormai", delta:{calc:1,ego:1}, comment:"Il guadagno è enorme. Il fastidio, anche."},
    {id:"B", label:"Per la prima volta da un po', ti fermi a pensarci", delta:{cosc:1,alt:1}, comment:"Qualcosa, in te, sta cambiando, forse."}
  ]},
{ day:23, text:"Il Traghettatore, comparendo dal nulla: \"Hai tutto quello che volevi. Cos'altro vuoi, ora?\"",
  options:[
    {id:"A", label:"\"Di più, ovviamente\"", delta:{calc:1,ego:1}, comment:"Una risposta automatica, quasi."},
    {id:"B", label:"Non hai una risposta pronta, per la prima volta", delta:{cosc:1,alt:1}, comment:"Il silenzio dice più delle parole."}
  ]},
{ day:24, text:"Incontri, per puro caso, una persona che hai 'usato' tempo fa, in uno dei tuoi affari (giorno 13 o 15, Atto 2). Non ti riconosce, o forse fa finta.",
  options:[
    {id:"A", label:"Passi oltre, come se niente fosse", delta:{calc:1,ego:1}, comment:"Funziona. Ma qualcosa resta."},
    {id:"B", label:"Ti fermi, e in qualche modo provi a sistemare le cose", delta:{cosc:1,alt:1}, comment:"Piccolo, ma vero."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Le tue tasche sono piene, ma le notti, ultimamente, sono più lunghe. Qualcosa, dentro, chiede attenzione.",
  options:[
    {id:"A", label:"Ti distrai con nuovi affari, come sempre", delta:{calc:1,ego:1}, comment:"Funziona, per un altro po'."},
    {id:"B", label:"Ti fermi, davvero, per la prima volta, a chiederti perché", delta:{cosc:1,alt:1}, comment:"Una domanda difficile, ma necessaria."}
  ]},
{ day:26, text:"Una lettera, da Lyra. Breve: \"Spero che tu stia bene. Davvero.\" Niente di più, ma è qualcosa.",
  options:[
    {id:"A", label:"Non rispondi, cosa ci sarebbe da dire?", delta:{calc:1,ego:1}, comment:"La lettera resta, in un angolo, a lungo."},
    {id:"B", label:"Rispondi, anche solo con poche righe", delta:{cosc:1,alt:1}, comment:"Un piccolo ponte, forse."}
  ]},
{ day:27, text:"Il Traghettatore: \"Le monete pesano in tasca. Ma c'è un altro peso, che porti, e che le monete non alleggeriscono.\"",
  options:[
    {id:"A", label:"\"Non so di cosa parli\"", delta:{calc:1,ego:1}, comment:"Il Traghettatore non insiste, ma resta lì."},
    {id:"B", label:"Sai esattamente di cosa parla, anche se non lo dici", delta:{cosc:1,alt:1}, comment:"Un riconoscimento silenzioso."}
  ]},
{ day:28, text:"Un'occasione si presenta per rivedere Lyra - non direttamente, ma sai dove si trova, ora.",
  options:[
    {id:"A", label:"Lasci passare l'occasione, hai altri impegni", delta:{calc:1,ego:1}, comment:"Sempre 'altri impegni'."},
    {id:"B", label:"Vai a cercarla, senza un piano preciso", delta:{cosc:1,alt:1}, comment:"Un primo, incerto passo."}
  ]},
{ day:29, text:"(Se hai cercato Lyra) La trovi. È sorpresa di vederti, ma non ostile. \"Sei venuto. Non me lo aspettavo.\" (Se non l'hai cercata) Conti le tue monete, di nuovo. Sono molte. Non sembrano bastare, comunque.",
  options:[
    {id:"A", label:"Continui sulla strada che hai scelto, qualunque sia", delta:{calc:1,ego:1}, comment:"Coerente, almeno, con te stesso."},
    {id:"B", label:"Riconosci, davanti a te stesso, che qualcosa deve cambiare", delta:{cosc:1,alt:1}, comment:"Non è un cambiamento, ancora. Ma è un inizio."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: IL VINCITORE SOLO. Hai accumulato ricchezza, successo, e una reputazione di chi 'sa come funziona il mondo'. Ma le strade che hai percorso sono sempre più vuote, e le persone che ti hanno accompagnato sono rimaste indietro, una dopo l'altra. Hai vinto, secondo molte definizioni. Resta da chiedersi: vinto cosa, esattamente?",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_vincitore_solo", comment:"Il tuo profilo finale è pronto."}
  ]}
];
