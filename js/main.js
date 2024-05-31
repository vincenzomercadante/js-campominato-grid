/** 
 *  1. Genero la struttura in HTML e CSS
 * 2. Al caricamento della pagina genero una griglia 10x10
 * 3. All'interno della griglia genero le 100 celle
 * 4. Quando l'utente clicca su ogni cella
   - la cella si colora di azzurro
   - stampa un messaggio in console relativo al numero della cella   
 * 5. Al click del bottone 'Play'
   - la mia griglia si resetta generandone una nuova

 * ### BONUS

 * 1. Creo l'input nell'HTML
 * 2. L'utente sceglie la difficoltà della tabella da 'easy' ad 'hard'
 * 3. una volta cliccato il bottone play
   - SE ha selezionato easy
     - creo una tabella 10x10
   - SE ha selezionato medium
     - creo una tabella 9x9
   - SE ha selezionato hard
     - creo una tabella 7x7
*/

// RECUPERO GLI ELEMENTI HTML
const playButton = document.getElementById("play-button");

// genero la griglia dopo il click del mio pulsante
playButton.addEventListener("click", function () {
  generateGrid();
});
