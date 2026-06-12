// ATTO 3 - da "il Pilastro" (Lyra Q1, A) - giorni 21-30
const ACT3_PILASTRO = [
{ day:21, text:"Il villaggio ti ha eretto un piccolo monumento, esagerato secondo i tuoi gusti. Lyra è partita da sola per la sua ricerca, qualche giorno fa, con un sorriso che diceva 'capisco, ma mi manchi già'.",
  options:[
    {id:"A", label:"Resti, il villaggio ha ancora bisogno di te", delta:{cosc:1,alt:1}, comment:"Ti senti utile, e un po' solo."},
    {id:"B", label:"Decidi di seguirla, finalmente", delta:{calc:1,ego:1}, comment:"Il villaggio capirà."}
  ]},
{ day:22, text:"Un altro villaggio, sentita la tua fama, ti chiede aiuto per un problema simile a quello che hai già risolto.",
  options:[
    {id:"A", label:"Accetti, è il tuo ruolo ora", delta:{cosc:1,alt:1}, comment:"La tua reputazione cresce, il tuo tempo per te si riduce."},
    {id:"B", label:"Insegni loro come risolverlo da soli", delta:{calc:1,ego:1}, comment:"Più lento, ma li rende indipendenti."}
  ]},
{ day:23, text:"Il Traghettatore appare, come spesso accade nei momenti di bivio: \"Quanti villaggi puoi sostenere, prima che qualcosa, in te, si esaurisca?\"",
  options:[
    {id:"A", label:"\"Tutti quelli che servono\"", delta:{cosc:1,alt:1}, comment:"Una risposta che ti fa onore, e ti pesa."},
    {id:"B", label:"\"Forse devo trovare un equilibrio\"", delta:{calc:1,ego:1}, comment:"Il Traghettatore annuisce, per la prima volta sembra quasi sollevato."}
  ]},
{ day:24, text:"Un messaggio da Lyra, finalmente: ha trovato qualcosa, ma le serve il tuo aiuto per un'ultima fase del suo percorso. È lontano.",
  options:[
    {id:"A", label:"Parti immediatamente verso di lei", delta:{calc:1,alt:1}, comment:"Il villaggio dovrà fare senza di te, per un po'."},
    {id:"B", label:"Finisci prima gli impegni presi qui", delta:{cosc:1,ego:1}, comment:"Lyra aspetterà, ti dici."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Lungo la strada verso Lyra (o verso i tuoi impegni), incontri una situazione che richiederebbe il tuo aiuto, ma ti farebbe perdere tempo prezioso.",
  options:[
    {id:"A", label:"Ti fermi ad aiutare, come sempre", delta:{cosc:1,alt:1}, comment:"È chi sei, ormai."},
    {id:"B", label:"Per una volta, prosegui", delta:{calc:1,ego:1}, comment:"Una piccola, strana sensazione di libertà."}
  ]},
{ day:26, text:"Raggiungi Lyra (o lei raggiunge te). È cambiata, un po': più sicura di sé, ma anche più stanca.",
  options:[
    {id:"A", label:"Le offri il tuo aiuto, come sempre hai fatto per altri", delta:{cosc:1,alt:1}, comment:"Lyra, sorridendo: \"Sapevo che saresti venuto.\""},
    {id:"B", label:"Le chiedi, per una volta, di parlarti di lei, e basta", delta:{calc:1,alt:1}, comment:"Lyra, sorpresa, inizia a raccontare."}
  ]},
{ day:27, text:"Insieme, completate l'ultima fase della ricerca di Lyra. Il suo potere torna, in parte, ma con un costo: dovrà restare in quel luogo per un periodo, a 'stabilizzarsi'.",
  options:[
    {id:"A", label:"Resti con lei, il villaggio aspetterà", delta:{calc:1,alt:1}, comment:"La prima volta che scegli lei, prima di tutto."},
    {id:"B", label:"Torni al villaggio, promettendo di tornare", delta:{cosc:1,ego:1}, comment:"Lyra capisce, ma qualcosa, stavolta, sembra diverso."}
  ]},
{ day:28, text:"Il Traghettatore, un'ultima volta: \"Sei stato un pilastro per molti. Ma un pilastro, da solo, sostiene un tetto. Cosa sostiene te?\"",
  options:[
    {id:"A", label:"\"Il sapere di essere utile\"", delta:{cosc:1,ego:1}, comment:"Una risposta vera, ma incompleta."},
    {id:"B", label:"\"Forse, ora, anche Lyra\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore sorride, per la prima e ultima volta."}
  ]},
{ day:29, text:"Il villaggio organizza una grande festa in tuo onore (e, un po', in onore di Lyra, ormai nota anche lei). Borin, se mai lo rivedrai, ne sentirebbe parlare.",
  options:[
    {id:"A", label:"Accetti la festa con gratitudine, è il loro modo di dire grazie", delta:{cosc:1,alt:1}, comment:"Un momento di calore, meritato."},
    {id:"B", label:"Chiedi una festa più semplice, solo per chi conosci davvero", delta:{calc:1,alt:1}, comment:"Più intima, più vera."}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: IL PILASTRO COMPIUTO. Sei diventato la persona a cui un intero villaggio guarda, e Lyra, al tuo fianco, ha trovato in te non solo un compagno di viaggio, ma una casa. Il tuo nome verrà ricordato per generazioni, in quel villaggio - e tu, finalmente, hai imparato che essere un pilastro per altri non significa dover stare sempre in piedi da solo.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_pilastro_compiuto", comment:"Il tuo profilo finale è pronto."}
  ]}
];
