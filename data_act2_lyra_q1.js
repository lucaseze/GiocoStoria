// ATTO 2 - giorni 11-20, percorso: Lyra + Quadrante 1 (Coscienza+Altruismo) "il Custode"
const ACT2_LYRA_Q1 = [
{ day:11, text:"Un villaggio sulla rotta è colpito da una maledizione che fa appassire i raccolti. Gli anziani, sentita la tua fama, ti chiedono di guidare la ricerca della causa.",
  options:[
    {id:"A", label:"Accetti il ruolo di guida", delta:{cosc:1,alt:1}, comment:"Ti assumi la responsabilità."},
    {id:"B", label:"Aiuti ma lasci coordinare un anziano", delta:{calc:1,ego:1}, comment:"Resti in secondo piano."}
  ]},
{ day:12, text:"Lyra individua una traccia magica verso una grotta lontana. \"Possiamo seguirla, ma il villaggio resterà senza nessuno che organizzi la difesa.\"",
  options:[
    {id:"A", label:"Andate alla grotta", delta:{cosc:1,alt:1}, comment:"La fonte va fermata alla radice."},
    {id:"B", label:"Restate a organizzare la difesa", delta:{calc:1,ego:1}, comment:"Mandate esploratori alla grotta."}
  ]},
{ day:13, text:"Una famiglia già aiutata chiede un altro favore, più grande, fuori da quanto promesso. Altri notano che a te chiedono sempre di più.",
  options:[
    {id:"A", label:"Accetti, ancora", delta:{alt:2}, comment:"Non sai dire di no."},
    {id:"B", label:"Li indirizzi a chi può occuparsene", delta:{calc:1,ego:1}, comment:"Restando nei tuoi limiti."}
  ]},
{ day:14, text:"Lyra, al fuoco: \"Da giorni sei sempre per gli altri. Va bene così, davvero, ma volevo dirtelo.\"",
  options:[
    {id:"A", label:"Le dici che ti serve restare concentrato", delta:{cosc:1,ego:1}, comment:"Lyra annuisce, in silenzio."},
    {id:"B", label:"Ti prendi una sera solo per voi due", delta:{calc:1,alt:1}, comment:"Qualunque cosa accada."}
  ]},
{ day:15, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Scopri che un esploratore del villaggio ha rubato provviste dalla scorta comune, poche, \"per la famiglia\". Nessun altro se n'è accorto.",
  options:[
    {id:"A", label:"Lo affronti privatamente", delta:{cosc:1,alt:1}, comment:"Gli dai modo di restituire senza vergogna."},
    {id:"B", label:"Lo segnali agli anziani", delta:{calc:1,ego:1}, comment:"Lasci decidere a loro."}
  ]},
{ day:16, text:"Sei esausto, notti di guardia, giorni di marcia. Lyra nota le tue mani tremare sulla mappa. \"Quand'è l'ultima volta che hai dormito davvero?\"",
  options:[
    {id:"A", label:"Continui comunque", delta:{cosc:1,ego:1}, comment:"Il villaggio conta su di te."},
    {id:"B", label:"Ti concedi un giorno di riposo", delta:{calc:1,alt:1}, comment:"Delegando."}
  ]},
{ day:17, text:"Gli anziani ti offrono il titolo di \"Guardiano del villaggio\", un ruolo permanente che ti legherebbe a quel luogo.",
  options:[
    {id:"A", label:"Accetti", delta:{alt:2}, comment:"Il villaggio sarà la tua casa."},
    {id:"B", label:"Rifiuti, ma formi qualcun altro", delta:{calc:1,ego:1}, comment:"Resti libero di proseguire."}
  ]},
{ day:18, text:"Lyra ti mostra una mappa: poco lontano c'è il luogo dove potrebbe trovare risposte sul suo potere perduto. È ora o mai più, ma stanotte arriva una richiesta d'aiuto urgente dal villaggio, non gravissima ma reale.",
  options:[
    {id:"A", label:"Aiuti il villaggio", delta:{cosc:1,alt:1}, comment:"Lyra, con un sorriso triste: \"Lo sapevo. Va bene così... credo.\""},
    {id:"B", label:"Parti con Lyra", delta:{calc:1,ego:1}, comment:"Lyra: \"Grazie. Ne avevo bisogno.\""}
  ]},
{ day:19, guide:"Domani saprai che tipo di guardiano sei diventato.",
  text:"Un cantastorie vuole scrivere una ballata su di te, \"l'eroe che salvò il villaggio\". Lyra scherza: \"Finalmente famoso. Ricordati di me quando intoneranno il tuo nome.\"",
  options:[
    {id:"A", label:"Rifiuti, il merito è di tutti", delta:{cosc:1,alt:1}, comment:"Resti nell'ombra."},
    {id:"B", label:"Accetti, potrebbe attirare aiuti", delta:{calc:1,ego:1}, comment:"La fama ha i suoi usi."}
  ]},
{ day:20, guide:"Se potessi tornare al giorno 11 e scegliere B, restare in disparte, lo faresti?",
  text:"Bivio finale. Il villaggio è salvo, ma tu sei cambiato.",
  options:[
    {id:"A", label:"\"No. Rifarei tutto.\"", delta:{cosc:1,alt:1}, ending:"il_pilastro", comment:"Il villaggio non ti dimenticherà mai."},
    {id:"B", label:"\"Forse avrei dovuto lasciare spazio anche a me.\"", delta:{calc:1,ego:1}, ending:"equilibrio_ritrovato", comment:"Tu e Lyra proseguite insieme."}
  ]}
];
