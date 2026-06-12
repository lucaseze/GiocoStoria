// ATTO 3 - da "lo Specchio" (Borin Q4, B) - giorni 21-30
const ACT3_SPECCHIO = [
{ day:21, text:"Hai detto a Borin che forse è il momento di guardarvi allo specchio, davvero. Lui, sorpreso, non ha risposto subito. Ora, qualcosa è diverso tra voi - più silenzioso, più onesto.",
  options:[
    {id:"A", label:"Proponi di parlare apertamente di come siete diventati", delta:{cosc:1,alt:1}, comment:"Borin, esitante, ma d'accordo: \"Ok. Proviamo.\""},
    {id:"B", label:"Aspetti che sia Borin a fare il primo passo", delta:{calc:1,ego:1}, comment:"Un'attesa, carica di significato."}
  ]},
{ day:22, text:"Una vecchia 'occasione' si presenta - quella che, prima, avreste accettato senza pensarci. Stavolta, entrambi esitate.",
  options:[
    {id:"A", label:"La rifiutate, insieme, senza bisogno di parlarne troppo", delta:{cosc:1,alt:1}, comment:"Un accordo silenzioso, ma chiaro."},
    {id:"B", label:"Ne discutete, e decidete insieme di rifiutarla", delta:{calc:1,alt:1}, comment:"Un primo, vero dialogo su questo tema."}
  ]},
{ day:23, text:"Il Traghettatore, presente di nuovo: \"Guardarsi allo specchio è il primo passo. Il secondo, è decidere cosa fare con quello che si vede.\"",
  options:[
    {id:"A", label:"\"Stiamo ancora capendo cosa vediamo\"", delta:{cosc:1,alt:1}, comment:"Onesto, e va bene così."},
    {id:"B", label:"\"Vediamo due persone che possono cambiare\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore: \"Un buon inizio.\""}
  ]},
{ day:24, text:"Borin, una sera: \"Sai, quella domanda che ti ho fatto - se siamo amici o solo comodi - ci ho pensato molto. Penso che siamo amici. Ma penso anche che dovremmo essere amici migliori.\"",
  options:[
    {id:"A", label:"\"Sono d'accordo. Da dove iniziamo?\"", delta:{cosc:1,alt:1}, comment:"Un momento di vera apertura, da entrambe le parti."},
    {id:"B", label:"\"È un buon punto di partenza, sì\"", delta:{calc:1,alt:1}, comment:"Borin, sorridendo: \"Piccoli passi, eh?\""}
  ]},
{ day:25, guide:"Il bene che fai oggi è visto da tutti. Il bene che non fai a te stesso, da nessuno.",
  text:"Un'occasione di aiutare qualcuno, senza alcun guadagno, si presenta - il tipo di cosa che, prima, avreste ignorato senza pensarci.",
  options:[
    {id:"A", label:"La cogliete, insieme, consapevolmente", delta:{cosc:1,alt:1}, comment:"Un piccolo, ma significativo, cambiamento."},
    {id:"B", label:"Ci pensate, e poi la cogliete comunque", delta:{calc:1,alt:1}, comment:"Non immediato, ma reale."}
  ]},
{ day:26, text:"Notizie di Lyra arrivano - sta bene, e chiede di voi. Borin: \"Dovremmo risponderle. Davvero, stavolta.\"",
  options:[
    {id:"A", label:"Scrivete insieme, raccontando, con sincerità, come state cambiando", delta:{cosc:1,alt:1}, comment:"Lyra, nella sua risposta, sembra felice per voi."},
    {id:"B", label:"Scrivete qualcosa di breve, ma sincero", delta:{calc:1,alt:1}, comment:"Un piccolo passo, verso il mondo che avevate chiuso fuori."}
  ]},
{ day:27, text:"Il Traghettatore: \"Il mondo che avevate reso piccolo, ora, sembra riaprirsi. È spaventoso, vero?\"",
  options:[
    {id:"A", label:"\"Un po'. Ma anche... bello\"", delta:{cosc:1,alt:1}, comment:"Un'apertura, condivisa."},
    {id:"B", label:"\"Spaventoso, sì. Ma necessario\"", delta:{calc:1,alt:1}, comment:"Il Traghettatore annuisce, comprensivo."}
  ]},
{ day:28, text:"Un vecchio 'cliente' delle vostre attività passate vi cerca, con una proposta che, prima, avreste accettato all'istante.",
  options:[
    {id:"A", label:"Rifiutate, insieme, con convinzione", delta:{cosc:1,alt:1}, comment:"Borin: \"Non siamo più quelli, eh?\""},
    {id:"B", label:"Rifiutate, ma con un po' di nostalgia per la facilità di prima", delta:{calc:1,alt:1}, comment:"Onesto, e umano - per entrambi."}
  ]},
{ day:29, text:"Borin, una sera, guardando il fuoco: \"Sai, se qualcuno ci avesse detto, all'inizio, che saremmo diventati... questo, non ci avrei creduto. In senso buono, intendo.\"",
  options:[
    {id:"A", label:"\"Nemmeno io. Ma sono contento di come è andata\"", delta:{cosc:1,alt:1}, comment:"Un momento di vera connessione, tra due persone che si sono trovate, e ritrovate."},
    {id:"B", label:"\"È un buon cambiamento, credo\"", delta:{calc:1,alt:1}, comment:"Borin, sorridendo: \"Credo anch'io.\""}
  ]},
{ day:30, guide:"Il sentiero finisce qui, viandante. O forse, è solo l'inizio di un altro.",
  text:"FINALE: LO SPECCHIO. Tu e Borin avete fatto qualcosa di raro: avete riconosciuto, insieme, chi stavate diventando - e avete scelto di cambiare rotta, non da soli, ma l'uno per l'altro. Non tutto è cambiato in un giorno, ma il mondo, intorno a voi, sembra di nuovo un po' più grande. Due persone, che si sono guardate allo specchio, e hanno scelto di migliorare quello che hanno visto - insieme.",
  options:[
    {id:"A", label:"Fine del percorso", delta:{}, ending:"FINAL_specchio", comment:"Il tuo profilo finale è pronto."}
  ]}
];
