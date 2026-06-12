// ATTO 2 - Borin + Quadrante 4 (Calcolo+Egoismo) "i Due Lupi"
const ACT2_BORIN_Q4 = [
{ day:11, text:"Borin, scaltro com'è, propone di \"lavorare\" insieme: lui individua le occasioni, tu, con la tua presenza, le rendi più \"convincenti\".",
  options:[
    {id:"A", label:"Accetti, è un buon arrangiamento", delta:{calc:1,ego:1}, comment:"Borin: \"Sapevo che eri il compagno giusto.\""},
    {id:"B", label:"Accetti, ma con dei limiti chiari su cosa fare", delta:{cosc:1,alt:1}, comment:"Borin: \"Va bene, va bene, dei limiti. Per ora.\""}
  ]},
{ day:12, text:"La prima \"occasione\": un gioco di carte truccato in una locanda, con avventori che possono permettersi di perdere qualche moneta.",
  options:[
    {id:"A", label:"Partecipi attivamente", delta:{calc:1,ego:1}, comment:"Una bella sommetta, in tasca."},
    {id:"B", label:"Resti a guardare, lasci fare a Borin", delta:{cosc:1,alt:1}, comment:"Un compromesso, per ora."}
  ]},
{ day:13, text:"Le cose vanno bene. Troppo bene, forse. Borin propone di alzare la posta, in tutti i sensi: bersagli più ricchi, rischi maggiori.",
  options:[
    {id:"A", label:"Sei d'accordo, perché fermarsi?", delta:{calc:1,ego:1}, comment:"Borin, raggiante, è come ti avesse sempre immaginato."},
    {id:"B", label:"Suggerisci di restare nei limiti attuali", delta:{cosc:1,alt:1}, comment:"Borin, un po' deluso, ma accetta."}
  ]},
{ day:14, text:"Borin, una sera, ridendo: \"Siamo proprio una bella squadra, eh? Due lupi, contro un mondo di pecore.\" C'è qualcosa, nel modo in cui lo dice, che ti fa pensare.",
  options:[
    {id:"A", label:"Ridi con lui, è solo un modo di dire", delta:{calc:1,ego:1}, comment:"O forse non lo è."},
    {id:"B", label:"Quella frase ti resta addosso, in modo strano", delta:{cosc:1,alt:1}, comment:"Borin non se ne accorge, o fa finta."}
  ]},
{ day:15, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Una delle vostre \"occasioni\" coinvolge, stavolta, qualcuno che davvero non può permettersi di perdere quello che ha.",
  options:[
    {id:"A", label:"Procedi comunque, gli affari sono affari", delta:{calc:1,ego:1}, comment:"Borin non fa domande."},
    {id:"B", label:"Ti ritiri da questa, almeno", delta:{cosc:1,alt:1}, comment:"Borin, sorpreso: \"Ehi, tutto bene?\""}
  ]},
{ day:16, text:"Le vostre attività iniziano ad attirare l'attenzione di persone poco raccomandabili, che vogliono una fetta dei \"guadagni\", o altro.",
  options:[
    {id:"A", label:"Negoziate con loro, restando nel giro", delta:{calc:1,ego:1}, comment:"Il giro si allarga, e si complica."},
    {id:"B", label:"È il momento di tirarsi fuori da questo giro", delta:{cosc:1,alt:1}, comment:"Borin, riluttante, capisce."}
  ]},
{ day:17, text:"Borin, di punto in bianco: \"Sai, a volte mi chiedo se siamo davvero amici, o solo... due persone che si tornano comode a vicenda.\"",
  options:[
    {id:"A", label:"\"Funziona così, no?\"", delta:{calc:1,ego:1}, comment:"Borin annuisce, ma qualcosa nel suo sguardo cambia."},
    {id:"B", label:"Ammetti che la domanda ti turba, un po'", delta:{cosc:1,alt:1}, comment:"Borin: \"Anche a me. Anche a me.\""}
  ]},
{ day:18, text:"Notizie di Lyra: ha bisogno di aiuto, da qualche parte. Borin: \"Non è affar nostro, ormai, no?\"",
  options:[
    {id:"A", label:"\"No, non lo è\"", delta:{calc:1,ego:1}, comment:"Il messaggio resta senza risposta."},
    {id:"B", label:"Senti che dovreste fare qualcosa, almeno scrivere", delta:{cosc:1,alt:1}, comment:"Un piccolo gesto, in mezzo a tutto."}
  ]},
{ day:19, guide:"Domani saprai che tipo di lupi siete diventati.", text:"Avete guadagnato molto, in questi giorni. Ma il mondo intorno a voi sembra... più piccolo, in qualche modo.",
  options:[
    {id:"A", label:"È il prezzo del successo, ti dici", delta:{calc:1,ego:1}, comment:"Borin sembra pensare lo stesso."},
    {id:"B", label:"Inizi a chiederti se sia davvero questo che volevi", delta:{cosc:1,alt:1}, comment:"Una domanda che resta lì, in sospeso."}
  ]},
{ day:20, guide:"Due lupi, dicevi. Ma anche i lupi, a volte, si guardano allo specchio.", text:"Bivio finale.",
  options:[
    {id:"A", label:"\"Siamo bravi in questo. Continuiamo così\"", delta:{calc:1,ego:1}, ending:"i_due_lupi", comment:"Voi due, contro il mondo. O forse, solo contro voi stessi."},
    {id:"B", label:"\"Forse è il momento di guardarci allo specchio, davvero\"", delta:{cosc:1,alt:1}, ending:"lo_specchio", comment:"Un primo, piccolo passo, verso qualcosa di diverso."}
  ]}
];
