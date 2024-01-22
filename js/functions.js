let insertBombsIndex;
let winClick;
let isGameOver;

/**
 *
 * @param {HTMLObjectElement} gridContainer main della pagina dove verrà inserita la griglia
 *
 */
function generateGrid(gridContainer) {
  const difficultSelection = document.getElementById("difficulty-selection");
  // reset var
  gridContainer.innerHTML = "";
  insertBombsIndex = [];
  isGameOver = false;
  winClick = 0;
  // creazione contenitore delle box
  const boxContainer = document.createElement("div");
  boxContainer.classList.add("box-container");
  gridContainer.append(boxContainer);

  // controllo sulla difficoltà del gioco
  let gridLevel;
  if (difficultSelection.value.toLowerCase() === "hard") {
    gridLevel = 7;
  } else if (difficultSelection.value.toLowerCase() === "medium") {
    gridLevel = 9;
  } else {
    gridLevel = 10;
  }

  // generazione griglia con celle
  for (let i = 0; i < Math.pow(gridLevel, 2); i++) {
    boxContainer.append(generateBox(i + 1, gridLevel));
  }

  // funzione genera bombe
  generateBomb(gridLevel);
}

/**
 *
 * @param {number} boxText index relativo al numero del box creato
 * @returns {object} boxEl box creato che andrà inserito all'interno del BoxContainer
 */

function generateBox(boxIndex, boxwidth) {
  // generazione della cella
  const boxEl = document.createElement("div");
  boxEl.classList.add("box");
  boxEl.style.width = `calc(100% / ${boxwidth})`;
  // funzione sul click della singola cella
  boxEl.addEventListener("click", function pippo() {
    if (!isGameOver) {
      // controllo presenza bomba sulla cella
      if (insertBombsIndex.includes(boxIndex)) {
        // caso di sconfitta del gioco
        this.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
        this.classList.add("bomb", "clicked");
        setTimeout(function () {
          alert("Hai perso");
        }, 400);
        isGameOver = true;
        this.removeEventListener("click", pippo);
      } else {
        // caso di vittoria del gioco
        this.classList.add("clicked");
        this.removeEventListener("click", pippo);
        winClick++;
        if (winClick == Math.pow(boxwidth, 2) - 16) {
          isGameOver = true;
          setTimeout(function () {
            alert("Hai vinto");
          }, 400);
        }
      }
    }
  });
  return boxEl;
}

/**
 *
 * @param {number} number Numero che indica il range su cui fare il random
 * @returns {number} numb NUmero generato casualmente
 */
function randomNumber(number) {
  // generatore numeri (coordinate bombe)
  const numb = Math.floor(Math.random() * number - 1 + 1 + 1);
  return numb;
}

/**
 *
 * @param {HTMLCollection} gameGrid array di tutte le box
 * @param {number} difficulty numero che indica la difficoltà per calcolare
 */
function generateBomb(difficulty) {
  let numb;
  // genera bombe
  while (insertBombsIndex.length < 16) {
    numb = randomNumber(Math.pow(difficulty, 2));
    if (!insertBombsIndex.includes(numb)) {
      insertBombsIndex.push(numb);
    }
  }
  console.log(insertBombsIndex);
}
