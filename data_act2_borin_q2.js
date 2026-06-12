// ATTO 2 - Borin + Quadrante 2 (Calcolo+Altruismo) "il Fuorilegge Gentile"
const ACT2_BORIN_Q2 = [
{ day:11, text:"Borin conosce delle scorciatoie poco legali per attraversare il territorio, evitando dazi pesanti che soffocano i piccoli mercanti locali.",
  options:[
    {id:"A", label:"Usate le scorciatoie, aiutando anche altri mercanti", delta:{calc:1,alt:1}, comment:"Borin: \"Vedi? A volte le regole vanno aggirate, per il bene di tutti.\""},
    {id:"B", label:"Pagate i dazi regolarmente", delta:{cosc:1,ego:1}, comment:"Più lento, ma corretto."}
  ]},
{ day:12, text:"Un piccolo mercante, salvato dai dazi, vi offre informazioni su un deposito di un mercante corrotto, pieno di beni rubati a famiglie povere.",
  options:[
    {id:"A", label:"Recuperate i beni e li restituite alle famiglie", delta:{calc:1,alt:1}, comment:"Borin, soddisfatto: \"Robin Hood approverebbe.\""},
    {id:"B", label:"Segnalate il deposito alle autorità, senza intervenire", delta:{cosc:1,ego:1}, comment:"Più lento, le famiglie aspetteranno."}
  ]},
{ day:13, text:"Le autorità iniziano a cercare i \"due che girano per il territorio facendo del bene a modo loro\". Non è una buona pubblicità, legalmente parlando.",
  options:[
    {id:"A", label:"Continuate, con più cautela", delta:{calc:1,alt:1}, comment:"Borin: \"Più cautela, meno gloria. Affare fatto.\""},
    {id:"B", label:"Vi fermate, è troppo rischioso", delta:{cosc:1,ego:1}, comment:"Borin, un po' deluso, capisce."}
  ]},
{ day:14, text:"Borin, una sera: \"Sai, mi piace questa vita. Aiutare la gente, un po' fuori dalle regole. Mi sento... utile, per la prima volta.\"",
  options:[
    {id:"A", label:"Condividi il sentimento", delta:{calc:1,alt:1}, comment:"Borin sorride, raramente così sincero."},
    {id:"B", label:"Gli ricordi i rischi che state correndo", delta:{cosc:1,ego:1}, comment:"Borin: \"Sì, lo so. Ma ne vale la pena, no?\""}
  ]},
{ day:15, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Un ex socio di Borin, della vecchia gilda, vi propone un \"colpo\" molto più grande, ma stavolta il bersaglio non è chiaramente \"cattivo\", solo ricco.",
  options:[
    {id:"A", label:"Rifiutate, il bersaglio non lo merita", delta:{cosc:1,alt:1}, comment:"Borin, con un po' di rimpianto, è d'accordo."},
    {id:"B", label:"Accettate, userete il guadagno per molte famiglie", delta:{calc:1,alt:1}, comment:"Borin: \"Ok, ma è l'ultima volta che dico questa frase.\""}
  ]},
{ day:16, text:"Le autorità vi stanno quasi alle calcagna. Un capo villaggio, che avete aiutato, offre di proteggervi, in cambio di un favore futuro non specificato.",
  options:[
    {id:"A", label:"Accettate la protezione", delta:{calc:1,alt:1}, comment:"Un favore non specificato è un rischio, ma per ora siete al sicuro."},
    {id:"B", label:"Rifiutate, non volete debiti del genere", delta:{cosc:1,ego:1}, comment:"Più rischioso, ma più liberi."}
  ]},
{ day:17, text:"Borin propone di \"ritirarsi\" per un po', in un villaggio tranquillo dove nessuno vi conosce, prima di proseguire.",
  options:[
    {id:"A", label:"Accetti, una pausa fa bene", delta:{calc:1,alt:1}, comment:"Riposo meritato."},
    {id:"B", label:"Vuoi proseguire, c'è ancora gente da aiutare", delta:{cosc:1,ego:1}, comment:"Borin, stanco, ti segue comunque."}
  ]},
{ day:18, text:"Una vecchia vittima del mercante corrotto (giorno 12) vi rintraccia: vuole ringraziarvi pubblicamente, in piazza. Ma questo vi renderebbe identificabili.",
  options:[
    {id:"A", label:"Accettate, anche a costo dell'anonimato", delta:{calc:1,alt:1}, comment:"Borin: \"Beh, ne è valsa la pena vedere quella faccia.\""},
    {id:"B", label:"Declinate gentilmente, restando nell'ombra", delta:{cosc:1,ego:1}, comment:"Più sicuro."}
  ]},
{ day:19, guide:"Domani saprai che tipo di fuorilegge sei diventato.", text:"La taglia sulle vostre teste, se esiste, è ormai abbastanza nota. Borin ne è quasi divertito.",
  options:[
    {id:"A", label:"Ti preoccupa più di quanto vuoi ammettere", delta:{cosc:1,ego:1}, comment:"Borin: \"Eh, capita.\""},
    {id:"B", label:"Anche tu inizi a trovarla, in fondo, divertente", delta:{calc:1,alt:1}, comment:"Una vita diversa da quella che immaginavi."}
  ]},
{ day:20, guide:"Avete fatto del bene, fuori dalle regole. Qualcuno verrà a chiedere il conto?", text:"Bivio finale.",
  options:[
    {id:"A", label:"\"Affrontiamo le conseguenze, qualunque siano\"", delta:{cosc:1,alt:1}, ending:"la_resa_dei_conti", comment:"Un confronto inevitabile, ma a testa alta."},
    {id:"B", label:"\"Continuiamo a muoverci, un passo avanti a tutti\"", delta:{calc:1,alt:1}, ending:"il_fuorilegge_gentile", comment:"Liberi, utili, sempre in movimento."}
  ]}
];
