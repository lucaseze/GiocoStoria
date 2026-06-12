// ATTO 2 - Lyra + Quadrante 2 (Calcolo+Altruismo) "lo Stratega"
const ACT2_LYRA_Q2 = [
{ day:11, text:"Il villaggio è colpito da una maledizione sui raccolti. Gli anziani sospettano uno spirito del bosco, offeso da un patto rotto generazioni fa. Propongono un sacrificio rituale per placarlo.",
  options:[
    {id:"A", label:"Cerchi un compromesso con lo spirito senza sacrifici", delta:{calc:1,alt:1}, comment:"Più lento, ma nessuno verrà ferito."},
    {id:"B", label:"Lasci che il rituale proceda", delta:{cosc:1,ego:1}, comment:"Rispetti le tradizioni del luogo."}
  ]},
{ day:12, text:"Lyra scopre che lo spirito può essere placato con un'offerta di valore: un manufatto magico custodito dal villaggio stesso, importante per la sua storia.",
  options:[
    {id:"A", label:"Convinci gli anziani a cederlo", delta:{calc:1,alt:1}, comment:"Un pezzo di storia, in cambio di un futuro."},
    {id:"B", label:"Cerchi un'alternativa, costi quel che costi", delta:{cosc:1,ego:1}, comment:"Non tutto si può barattare."}
  ]},
{ day:13, text:"Mentre negozi con lo spirito, capisci che potresti ingannarlo con un'illusione invece dell'offerta reale. Funzionerebbe, probabilmente.",
  options:[
    {id:"A", label:"Usi l'illusione", delta:{calc:1,alt:1}, comment:"Il villaggio non perde nulla, se funziona."},
    {id:"B", label:"Rifiuti l'inganno, offri il vero manufatto", delta:{cosc:1,ego:1}, comment:"Anche a costo del patrimonio del villaggio."}
  ]},
{ day:14, text:"Lyra è a disagio: \"Stiamo diventando bravi a piegare le regole. Mi chiedo dove sia il limite.\"",
  options:[
    {id:"A", label:"Le dici che il fine giustifica i mezzi, qui", delta:{calc:1,ego:1}, comment:"Lyra non risponde, pensierosa."},
    {id:"B", label:"Le dici che ha ragione, va trovato un limite", delta:{cosc:1,alt:1}, comment:"Lyra: \"Grazie per averlo detto.\""}
  ]},
{ day:15, text:"Lo spirito, placato o ingannato, si ritira, ma rivela che la vera causa della maledizione è un altro villaggio vicino, che anni fa lo derubò.",
  options:[
    {id:"A", label:"Avverti il villaggio vicino del pericolo", delta:{calc:1,alt:1}, comment:"Anche se non è affar tuo."},
    {id:"B", label:"Non è un tuo problema, prosegui", delta:{cosc:1,ego:1}, comment:"Hai già fatto la tua parte."}
  ]},
{ day:16, text:"Il villaggio salvato vuole ricompensarti generosamente, più di quanto serva a te per proseguire il viaggio.",
  options:[
    {id:"A", label:"Accetti tutto, userai il resto per altri", delta:{calc:1,alt:1}, comment:"Lyra ti guarda, incerta se crederti."},
    {id:"B", label:"Accetti solo lo stretto necessario", delta:{cosc:1,ego:1}, comment:"Il resto resta al villaggio."}
  ]},
{ day:17, text:"Una gilda di mercanti, saputo del tuo \"talento\" nel risolvere problemi delicati, ti offre un incarico ben pagato: convincere un nobile a cedere alcune terre, con mezzi non proprio diretti.",
  options:[
    {id:"A", label:"Accetti l'incarico", delta:{calc:1,ego:1}, comment:"Affari sono affari."},
    {id:"B", label:"Rifiuti", delta:{cosc:1,alt:1}, comment:"Non tutto si fa per denaro."}
  ]},
{ day:18, text:"Lyra ha trovato una pista sul suo potere perduto, ma richiede di intrufolarsi in un luogo sacro, di notte, senza permesso.",
  options:[
    {id:"A", label:"L'aiuti, trovando un modo elegante per entrare", delta:{calc:1,alt:1}, comment:"Funziona, ma resta un'intrusione."},
    {id:"B", label:"La convinci a chiedere il permesso ufficialmente", delta:{cosc:1,ego:1}, comment:"Più lento, ma corretto."}
  ]},
{ day:19, guide:"Domani saprai che tipo di stratega sei diventato.", text:"Un vecchio compagno di strada ti riconosce: \"Tu sei quello che ha risolto la cosa con quel trucco, vero? Ne parlano ancora.\" Non sai se è un complimento.",
  options:[
    {id:"A", label:"Ne sei orgoglioso, ha funzionato", delta:{calc:1,ego:1}, comment:"I risultati parlano."},
    {id:"B", label:"Minimizzi, preferiresti altri metodi", delta:{cosc:1,alt:1}, comment:"Ma i metodi alternativi sono più lenti."}
  ]},
{ day:20, guide:"Hai risolto molto, piegando molto. Ne è valsa la pena?", text:"Bivio finale.",
  options:[
    {id:"A", label:"\"I risultati contano più del metodo.\"", delta:{calc:1,ego:1}, ending:"il_burattinaio_illuminato", comment:"Sei diventato molto efficace. E molto solo."},
    {id:"B", label:"\"Voglio tornare a metodi che posso guardare in faccia.\"", delta:{cosc:1,alt:1}, ending:"il_mediatore_stanco", comment:"Lyra resta al tuo fianco, sollevata."}
  ]}
];
