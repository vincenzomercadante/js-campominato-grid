# JS-CAMPOMINATO-GRID

## TRACCIA

- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
- Ogni cella ha un numero progressivo, da 1 a 100.
- Ci saranno quindi 10 caselle per ognuna delle 10 righe.
- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### BONUS

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## RISOLUZIONE

1. Genero la struttura in HTML e CSS
2. Al caricamento della pagina genero una griglia 10x10
3. All'interno della griglia genero le 100 celle
4. Quando l'utente clicca su ogni cella
   - la cella si colora di azzurro
   - stampa un messaggio in console relativo al numero della cella
5. Al click del bottone 'Play'
   - la mia griglia si resetta generandone una nuova

### BONUS

1. Creo l'input nell'HTML
2. L'utente sceglie la difficoltà della tabella da 'easy' ad 'hard'
3. una volta cliccato il bottone play
   - SE ha selezionato easy
     - creo una tabella 10x10
   - SE ha selezionato medium
     - creo una tabella 9x9
   - SE ha selezionato hard
     - creo una tabella 7x7
