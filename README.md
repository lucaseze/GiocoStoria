# Trolley School

Un viaggio narrativo di 30 giorni, dilemmi morali e finali multipli.

## Come pubblicarlo su GitHub Pages

1. Crea un nuovo repository su GitHub (es. `trolley-school`)
2. Carica TUTTI i file di questa cartella nel repository (mantenendo i nomi esatti)
3. Vai su **Settings → Pages**
4. In "Source", seleziona il branch principale (es. `main`) e cartella `/ (root)`
5. Salva. Dopo 1-2 minuti il gioco sarà online su:
   `https://<tuonomeutente>.github.io/<nomerepo>/`

## Note tecniche

- Nessun backend richiesto: tutto funziona con `localStorage` nel browser
- Il "seriale" (es. `TS-A5-3K9...`) codifica l'intero percorso di scelte e permette di:
  - Ripristinare il progresso su un altro dispositivo
  - Condividere/confrontare percorsi con altri
  - Rivedere il proprio cammino con la funzione Replay
- Struttura: 10 giorni comuni (Atto 1) → 8 percorsi possibili (Atto 2, in base al profilo e al compagno scelto al giorno 10) → 12 finali (Atto 3)

## File

- `index.html` - pagina principale
- `engine.js` - logica di gioco (stato, profilo, seriale)
- `ui.js` - rendering e interazioni
- `data_act1.js`, `data_act2_*.js`, `data_act3_*.js` - contenuti narrativi
