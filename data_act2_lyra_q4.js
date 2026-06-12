// ATTO 2 - Lyra + Quadrante 4 (Calcolo+Egoismo) "l'Opportunista"
const ACT2_LYRA_Q4 = [
{ day:11, text:"Il villaggio, colpito da una maledizione sui raccolti, offre una ricompensa a chi risolve il problema. Una bella somma.",
  options:[
    {id:"A", label:"Ti offri, principalmente per la ricompensa", delta:{calc:1,ego:1}, comment:"Lyra alza un sopracciglio, ma non commenta."},
    {id:"B", label:"Ti offri, e doni la ricompensa al villaggio se la vinci", delta:{cosc:1,alt:1}, comment:"Lyra annuisce, approvando."}
  ]},
{ day:12, text:"Scopri la causa della maledizione: un mercante locale ha rubato un manufatto sacro. Potresti recuperarlo e farti pagare due volte, dal villaggio e dal mercante per il silenzio.",
  options:[
    {id:"A", label:"Giochi su entrambi i fronti", delta:{calc:1,ego:1}, comment:"Funziona, ma è scivoloso."},
    {id:"B", label:"Recuperi il manufatto e basta", delta:{cosc:1,alt:1}, comment:"Una ricompensa, pulita."}
  ]},
{ day:13, text:"Il mercante, scoperto, ti offre una percentuale sui suoi affari se lo aiuti a coprire altre tracce in futuro.",
  options:[
    {id:"A", label:"Accetti, è un buon affare", delta:{calc:1,ego:1}, comment:"Lyra inizia a fare domande."},
    {id:"B", label:"Rifiuti e lo segnali", delta:{cosc:1,alt:1}, comment:"Lyra: \"Pensavo che avresti accettato.\""}
  ]},
{ day:14, text:"Lyra, con tono serio: \"Ultimamente ogni cosa che facciamo finisce per portarti un guadagno. È un caso?\"",
  options:[
    {id:"A", label:"\"È così che funziona il mondo\"", delta:{calc:1,ego:1}, comment:"Lyra resta in silenzio per un po'."},
    {id:"B", label:"Ammetti che forse stai esagerando", delta:{cosc:1,alt:1}, comment:"Lyra: \"Grazie per averlo ammesso.\""}
  ]},
{ day:15, text:"Un'occasione enorme: una mappa per un tesoro, ma per ottenerla devi vendere informazioni che potrebbero metter in difficoltà un villaggio innocente.",
  options:[
    {id:"A", label:"Vendi le informazioni", delta:{calc:1,ego:1}, comment:"Il tesoro è quasi tuo."},
    {id:"B", label:"Rifiuti l'occasione", delta:{cosc:1,alt:1}, comment:"Il villaggio non saprà mai del rischio corso."}
  ]},
{ day:16, text:"Con (o senza) il tesoro, ti imbatti in un gruppo di viandanti in difficoltà. Aiutarli ti costerebbe tempo e risorse.",
  options:[
    {id:"A", label:"Prosegui per la tua strada", delta:{calc:1,ego:1}, comment:"Hai i tuoi piani."},
    {id:"B", label:"Ti fermi ad aiutare", delta:{cosc:1,alt:1}, comment:"Lyra ti aiuta senza dire nulla, ma è contenta."}
  ]},
{ day:17, text:"Ti viene offerta una posizione di prestigio in una città lontana, ben pagata, ma lontano dal percorso che stai facendo con Lyra.",
  options:[
    {id:"A", label:"Sei tentato fortemente dall'offerta", delta:{calc:1,ego:1}, comment:"Lyra capisce che ci stai pensando."},
    {id:"B", label:"La rifiuti senza troppi rimpianti", delta:{cosc:1,alt:1}, comment:"Lyra, sollevata, anche se non lo dice."}
  ]},
{ day:18, text:"Lyra ha trovato una pista sul suo potere perduto, ma è in una zona pericolosa, senza ricompensa per te.",
  options:[
    {id:"A", label:"La accompagni comunque, anche se non ci guadagni nulla", delta:{cosc:1,alt:1}, comment:"Lyra è sorpresa, e commossa."},
    {id:"B", label:"Le suggerisci di aspettare un'occasione più \"conveniente\"", delta:{calc:1,ego:1}, comment:"Lyra ci va da sola."}
  ]},
{ day:19, guide:"Domani saprai che tipo di opportunista sei diventato.", text:"Le tue tasche sono piene (o quasi). Ma Lyra, ultimamente, parla meno con te.",
  options:[
    {id:"A", label:"Non te ne preoccupi troppo, hai altri pensieri", delta:{calc:1,ego:1}, comment:"È così che va, ti dici."},
    {id:"B", label:"Le chiedi se va tutto bene tra voi", delta:{cosc:1,alt:1}, comment:"Lyra: \"Forse. Vediamo.\""}
  ]},
{ day:20, guide:"Hai ottenuto molto. Cosa hai perso, nel frattempo?", text:"Bivio finale.",
  options:[
    {id:"A", label:"\"Ho quello che volevo. Il resto si vedrà.\"", delta:{calc:1,ego:1}, ending:"il_vincitore_solo", comment:"Le tasche piene, la strada vuota."},
    {id:"B", label:"\"Forse ho confuso il guadagno con il valore.\"", delta:{cosc:1,alt:1}, ending:"la_seconda_possibilita", comment:"Lyra ti aspetta, ancora, per ora."}
  ]}
];
