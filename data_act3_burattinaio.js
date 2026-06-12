// ATTO 3 - da "il Burattinaio Illuminato" (Lyra Q2, A) - giorni 21-30
const ACT3_BURATTINAIO = [
{ day:21, text:"Lyra ti ha lasciato un messaggio, breve: \"Ho bisogno di pensare. Ci vediamo, forse.\" Sei solo, con la tua efficienza, e un vago senso di vuoto.",
  options:[
    {id:"A", label:"La lasci al suo spazio, e prosegui da solo", delta:{calc:1,ego:1}, comment:"Funziona, ma il silenzio è strano."},
    {id:"B", label:"Le scrivi, cercando di capire cosa sia successo", delta:{cosc:1,alt:1}, comment:"Lyra risponde, dopo un po': \"Devo solo capire alcune cose.\""}
  ]},
{ day:22, text:"Una città importante ha un problema complesso: due fazioni sull'orlo di un conflitto. La tua reputazione di 'risolutore' ti precede.",
  options:[
    {id:"A", label:"Usi i tuoi metodi consueti: pressioni, illusioni, mezze verità", delta:{calc:1,ego:1}, comment:"Funziona, di nuovo. Sempre più in fretta."},
    {id:"B", label:"Provi un approccio diverso, più trasparente, anche se più lento", delta:{cosc:1,alt:1}, comment:"Più difficile, ma diverso."}
  ]},
{ day:23, text:"Il Traghettatore, comparendo all'improvviso: \"Sei molto bravo a far muovere le cose. Ti sei mai chiesto chi muove te?\"",
  options:[
    {id:"A", label:"\"Io muovo me stesso, sempre\"", delta:{calc:1,ego:1}, comment:"Il Traghettatore non risponde, ma resta a guardarti più a lungo del solito."},
    {id:"B", label:"La domanda ti resta addosso, più di quanto vorresti", delta:{cosc:1,alt:1}, comment:"Inizia a farti riflettere."}
  ]},
{ day:24, text:"Risolvi il conflitto tra le due fazioni, brillantemente. Ma nessuno dei due lati sa esattamente come, o a cosa ha rinunciato per arrivarci.",
  options:[
    {id:"A", label:"Va bene così, l'importante è il risultato", delta:{calc:1,ego:1}, comment:"Un'altra vittoria per la tua reputazione."},
    {id:"B", label:"Ti assicuri che entrambe le parti capiscano davvero cosa è successo", delta:{cosc:1,alt:1}, comment:"Più trasparente, anche se meno 'pulito' come risultato."}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Lyra ti scrive di nuovo: ha deciso di proseguire la sua ricerca da sola, per un po'. \"Non è una punizione. È solo... ho bisogno di capire chi sono, senza essere 'parte di una squadra' per un momento.\"",
  options:[
    {id:"A", label:"Rispetti la sua scelta, anche se ti pesa", delta:{cosc:1,alt:1}, comment:"Una solitudine diversa, stavolta."},
    {id:"B", label:"Ti immergi ancora di più nel lavoro, per non pensarci", delta:{calc:1,ego:1}, comment:"Funziona, per un po'."}
  ]},
{ day:26, text:"Una delle tue 'soluzioni' passate inizia a creare problemi inattesi - conseguenze che non avevi previsto, o non avevi voluto vedere.",
  options:[
    {id:"A", label:"Trovi un'altra soluzione 'efficiente' per il problema nuovo", delta:{calc:1,ego:1}, comment:"Funziona, ma il pattern continua."},
    {id:"B", label:"Torni indietro, ad affrontare la causa originale", delta:{cosc:1,alt:1}, comment:"Più lento, ma affronti davvero il problema."}
  ]},
{ day:27, text:"Il Traghettatore, ancora: \"Sei diventato molto bravo a sistemare le cose. Ti sei mai chiesto se le cose, a volte, vorrebbero solo essere capite, non sistemate?\"",
  options:[
    {id:"A", label:"\"Sistemarle È capirle\"", delta:{calc:1,ego:1}, comment:"Una risposta che, anche a te, suona meno convincente del solito."},
    {id:"B", label:"\"...Forse no\"", delta:{cosc:1,alt:1}, comment:"Il Traghettatore, per la prima volta, sembra quasi triste, guardandoti."}
  ]},
{ day:28, text:"Lyra ti scrive di nuovo, stavolta più lunga: ha capito alcune cose, su di sé, e su di voi. \"Vorrei vederti. Se vuoi.\"",
  options:[
    {id:"A", label:"Vai da lei, lasciando in sospeso il lavoro attuale", delta:{cosc:1,alt:1}, comment:"La prima volta, da tanto, che scegli qualcosa che non sia 'efficiente'."},
    {id:"B", label:"Finisci prima il lavoro, poi andrai", delta:{calc:1,ego:1}, comment:"Lyra capisce, ma qualcosa, nel tono della prossima risposta, è diverso."}
  ]},
{ day:29, text:"Quando (o se) ti incontri con Lyra, lei è cambiata - più sicura, ma anche più distante, in un modo nuovo. Non è arrabbiata. È solo... diversa.",
  options:[
    {id:"A", label:"Provi a capire cosa è cambiato, davvero, parlandone", delta:{cosc:1,alt:1}, comment:"Una conversazione difficile, ma vera."},
    {id:"B", label:"Provi a 'gestire' la situazione, come fai sempre", delta:{calc:1,ego:1}, comment:"Lyra, con gentilezza: \"Non funziona con me, sai?\""}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: IL BURATTINAIO ILLUMINATO. Sei diventato straordinariamente efficace nel risolvere problemi, capace di muovere persone e situazioni come pochi altri. Ma quell'efficienza ha un prezzo: Lyra, e altri come lei, hanno bisogno di essere incontrati, non gestiti. Il tuo sentiero prosegue, brillante e solitario, con la consapevolezza, finalmente emersa, che qualcosa - forse la cosa più importante - non si può 'risolvere'.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_burattinaio_illuminato", comment:"Il tuo profilo finale è pronto."}
  ]}
];
