// ATTO 1 - giorni 1-10, comuni a tutti i percorsi
const ACT1 = [
{
  day: 1,
  guide: "Benvenuto, viandante. Ogni giorno, un sentiero si dividerà. Tu deciderai chi lo percorre.",
  text: "Sei nei pressi di una miniera abbandonata. Un guardiano sta per chiudere una paratia che devierà un torrente sotterraneo, salvando il villaggio a valle ma allagando una galleria dove lavora, ignaro, un minatore solitario.",
  options: [
    { id:"A", label:"Gridi per avvisarlo", delta:{cosc:1, ego:1}, comment:"Salvi il minatore, ma il villaggio a valle rischia." },
    { id:"B", label:"Resti in silenzio", delta:{calc:1, alt:1}, comment:"Il villaggio è salvo, ma quel grido non lo darai mai." }
  ]
},
{
  day: 2,
  text: "Borin, il nano incontrato alla locanda, ti sussurra: \"Ho un debito con la guardia, se non pago entro stasera mi sbattono dentro. Prestami quei soldi: te li rendo entro la settimana, parola di nano.\"",
  options: [
    { id:"A", label:"Gli presti i soldi", delta:{calc:1, alt:1}, comment:"Borin: \"Sei un amico vero. Ti devo un barile di idromele.\"" },
    { id:"B", label:"Rifiuti", delta:{cosc:1, ego:1}, comment:"Borin, sospirando: \"Ok... me la sono cercata.\"" }
  ]
},
{
  day: 3,
  guide: "Hai notato? Ogni scelta ne disinnesca un'altra. Nessuna è gratuita.",
  text: "Tra le radici di un albero trovi una borsa con monete d'oro e un sigillo. Lo stemma appartiene a una famiglia nota per i suoi metodi poco puliti.",
  options: [
    { id:"A", label:"Vai a restituirla di persona", delta:{cosc:1, alt:1}, comment:"Rischioso, ma onesto fino in fondo." },
    { id:"B", label:"La consegni in modo anonimo al tempio", delta:{calc:1, ego:1}, comment:"Più sicuro per te." }
  ]
},
{
  day: 4,
  text: "Stavi attraversando il posto di dazio quando hai visto il capitano intascarsi parte dell'oro destinato al villaggio. Ora ti chiama in disparte: \"So che hai visto. Se lo dici, la colpa ricade sul mio sottoposto, non su di me. Resta in silenzio e ci guadagni anche tu.\"",
  guide: "La giustizia silenziosa è ancora giustizia? O è complicità con un sorriso?",
  options: [
    { id:"A", label:"Riferisci quello che hai visto", delta:{cosc:1, alt:1}, comment:"Anche se ti crea problemi." },
    { id:"B", label:"Stai zitto, ma avverti il sottoposto in privato", delta:{calc:1, ego:1}, comment:"Eviti il conflitto diretto." }
  ]
},
{
  day: 5,
  text: "Borin ti raggiunge col sacco in spalla, sconvolto: \"Mi hanno cacciato dalla gilda. Pare che il consiglio sull'affare dei soldi sia arrivato alle orecchie sbagliate. Non so dove dormire stanotte.\"",
  options: [
    { id:"A", label:"Gli offri di viaggiare al tuo fianco, senza condizioni", delta:{alt:2}, comment:"Borin diventa tuo compagno di viaggio." },
    { id:"B", label:"Lo aiuti a trovare riparo altrove", delta:{ego:1, calc:1}, comment:"Lo aiuti, ma a distanza." }
  ]
},
{
  day: 6,
  guide: "Le promesse sono gabbie che ci costruiamo da soli. O forse sono ponti.",
  text: "Un viandante al fuoco di un accampamento ti confida un segreto vecchio di anni: se una persona del villaggio vicino lo sapesse, le risparmierebbe un dolore che vive ora per un equivoco legato a quel fatto.",
  options: [
    { id:"A", label:"Mantieni la promessa di silenzio", delta:{cosc:1, ego:1}, comment:"La fiducia resta intatta." },
    { id:"B", label:"Trovi un modo per far arrivare la verità", delta:{calc:1, alt:1}, comment:"Anche tradendo quella fiducia." }
  ]
},
{
  day: 7,
  text: "Un sogno, o forse no. Da una parte il tuo migliore amico d'infanzia, dall'altra uno sconosciuto che hai visto poco prima promettere ai suoi due figli di tornare presto a casa. Sai che il tuo amico, in questa scelta, salverebbe sempre chi ha una famiglia ad aspettarlo, \"perché è la cosa giusta da fare\".",
  options: [
    { id:"A", label:"Salvi il tuo amico", delta:{ego:1, cosc:1}, comment:"L'istinto, prima di tutto." },
    { id:"B", label:"Salvi lo sconosciuto", delta:{alt:1, calc:1}, comment:"Onorando ciò in cui il tuo amico crede." }
  ]
},
{
  day: 8,
  text: "A un crocevia, una ranger con un mantello verde scuro ripara una ruota di carro. Ti chiede una mano, e nasce una conversazione. Si chiama Lyra. Quando ti chiede \"che strada stai percorrendo, viandante?\", senti due possibili risposte.",
  options: [
    { id:"A", label:"Le racconti qualcosa di vero e scomodo di te", delta:{cosc:1, alt:1}, comment:"Lyra, sorridendo: \"Non capita spesso che qualcuno sia così diretto. Mi piace.\"" },
    { id:"B", label:"Resti sul vago", delta:{calc:1, ego:1}, comment:"Lyra: \"Sei simpatico. Misterioso, ma simpatico.\"" }
  ]
},
{
  day: 9,
  text: "Lyra ti raggiunge: ha saputo di un'antica prova che potrebbe restituirle un potere perduto, ma è pericolosa. \"Secondo te dovrei tentarla? Dimmi sinceramente cosa pensi.\"",
  options: [
    { id:"A", label:"Le dici quello che ha bisogno di sentire", delta:{calc:1, alt:1}, comment:"Lyra, raddrizzando le spalle: \"Hai ragione. Lo farò.\"" },
    { id:"B", label:"Le dici la tua reale preoccupazione", delta:{cosc:1, ego:1}, comment:"Lyra, dopo un silenzio: \"...Forse hai ragione. Ma ci avevo sperato così tanto.\"" }
  ]
},
{
  day: 10,
  guide: "Dieci sentieri attraversati. Da domani, le strade iniziano a separarsi davvero.",
  text: "È la notte del solstizio: Lyra ti aveva chiesto di accompagnarla a un rito importante per lei. Nello stesso momento, Borin ti raggiunge di corsa: ha trovato un'occasione per essere riammesso nella gilda, ma l'incontro è stanotte ed è terrorizzato all'idea di affrontarlo da solo.",
  options: [
    { id:"A", label:"Vai con Borin", delta:{calc:1, alt:1}, companion:"borin", comment:"Sacrifichi il rito di Lyra per aiutarlo concretamente." },
    { id:"B", label:"Vai con Lyra", delta:{cosc:1, ego:1}, companion:"lyra", comment:"Onori l'impegno preso, e mandi un messaggio a Borin." }
  ]
}
];
