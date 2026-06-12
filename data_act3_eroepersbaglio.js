// ATTO 3 - da "Eroe per Sbaglio" (Borin Q1, B) - giorni 21-30
const ACT3_EROEPERSBAGLIO = [
{ day:21, text:"La leggenda cresce, sempre più grande, sempre più lontana dalla verità. Borin ne è felicissimo. Tu, un po' meno.",
  options:[
    {id:"A", label:"Inizi a sentirti a disagio nel tuo stesso 'personaggio'", delta:{cosc:1,alt:1}, comment:"Un peso, inaspettato."},
    {id:"B", label:"Ti adatti, recitando la parte che ti aspettano", delta:{calc:1,ego:1}, comment:"Funziona, ma è stancante."}
  ]},
{ day:22, text:"Qualcuno, ispirato dalla leggenda, tenta un'impresa pericolosa 'come l'eroe', e finisce nei guai - perché la leggenda non racconta i veri rischi.",
  options:[
    {id:"A", label:"Intervieni per aiutarlo, e provi a correggere la leggenda", delta:{cosc:1,alt:1}, comment:"Borin, riluttante, capisce."},
    {id:"B", label:"Lo aiuti, ma la leggenda resta intatta", delta:{calc:1,ego:1}, comment:"Borin: \"Meglio così, no?\""}
  ]},
{ day:23, text:"Il Traghettatore: \"Le leggende hanno un peso. Chi le porta, a volte, si dimentica di essere ancora una persona.\"",
  options:[
    {id:"A", label:"\"Lo sto scoprendo\"", delta:{cosc:1,alt:1}, comment:"Una verità che inizia a farsi sentire."},
    {id:"B", label:"\"Le persone vogliono leggende, non persone\"", delta:{calc:1,ego:1}, comment:"Una difesa, forse, più che una convinzione."}
  ]},
{ day:24, text:"Borin, sentendo qualcosa nel tuo tono ultimamente, ti chiede: \"Tutto bene? Sembri... diverso.\"",
  options:[
    {id:"A", label:"Gli racconti del peso della leggenda", delta:{cosc:1,alt:1}, comment:"Borin, sorpreso: \"Non ci avevo pensato. Mi dispiace.\""},
    {id:"B", label:"Minimizzi, va tutto bene", delta:{calc:1,ego:1}, comment:"Borin non insiste, ma resta preoccupato."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Un nobile, ispirato dalla leggenda, ti offre un ruolo prestigioso - ma richiederebbe di mantenere e alimentare la leggenda stessa, ufficialmente.",
  options:[
    {id:"A", label:"Rifiuti, è il momento di essere onesto su chi sei", delta:{cosc:1,alt:1}, comment:"Un passo importante, anche se difficile."},
    {id:"B", label:"Accetti, è un'opportunità troppo grande", delta:{calc:1,ego:1}, comment:"La leggenda diventa, ufficialmente, parte di te."}
  ]},
{ day:26, text:"Lyra, di cui avete sentito parlare, sembra ora a sua volta nota per le sue gesta. Borin: \"Vedi? Anche lei è diventata una leggenda, a modo suo.\"",
  options:[
    {id:"A", label:"Ti chiedi se lei stia vivendo lo stesso peso che senti tu", delta:{cosc:1,alt:1}, comment:"Una preoccupazione condivisa, a distanza."},
    {id:"B", label:"\"Bene per lei\", e proseguite", delta:{calc:1,ego:1}, comment:"La vita va avanti, per tutti."}
  ]},
{ day:27, text:"Il Traghettatore: \"Una leggenda può essere una gabbia dorata. Resta comunque una gabbia.\"",
  options:[
    {id:"A", label:"\"Voglio uscirne, in qualche modo\"", delta:{cosc:1,alt:1}, comment:"Una decisione, finalmente presa."},
    {id:"B", label:"\"È tardi per cambiare, ormai\"", delta:{calc:1,ego:1}, comment:"Il Traghettatore: \"Non è mai tardi. Ma è sempre più difficile, aspettando.\""}
  ]},
{ day:28, text:"Un'occasione per 'smentire' pubblicamente alcune delle esagerazioni sulla leggenda si presenta - rischioso per la tua reputazione, ma onesto.",
  options:[
    {id:"A", label:"Lo fai, costi quel che costi", delta:{cosc:1,alt:1}, comment:"Borin, sorpreso, ma sostiene la tua scelta."},
    {id:"B", label:"Lasci che la leggenda viva ancora un po'", delta:{calc:1,ego:1}, comment:"La gabbia, ancora una volta, resta."}
  ]},
{ day:29, text:"Borin, una sera: \"Sai, forse ho esagerato un po', con le storie. Se ti hanno fatto pesare, mi dispiace davvero.\"",
  options:[
    {id:"A", label:"\"Non è colpa tua, Borin. Ma grazie\"", delta:{cosc:1,alt:1}, comment:"Un momento di vera vicinanza, finalmente."},
    {id:"B", label:"\"È andata così. Non importa più, ormai\"", delta:{calc:1,ego:1}, comment:"Borin, non del tutto convinto, lascia correre."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: L'EROE PER SBAGLIO. Sei diventato una leggenda - più grande della verità, più grande, forse, di te stesso. Che tu l'abbia abbracciata o tu stia ancora cercando di liberartene, una cosa è certa: la storia che la gente racconta di te, ormai, vive di vita propria, indipendentemente da chi sei davvero. Resta da capire se questo sia un dono, o un peso - o entrambi.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_eroe_per_sbaglio", comment:"Il tuo profilo finale è pronto."}
  ]}
];
