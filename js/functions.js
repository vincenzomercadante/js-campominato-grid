const insertBombsIndex = [];
let isGameOver = false;
const gameGrid = document.querySelectorAll(".box");

/**
 *
 * @param {HTMLObjectElement} gridContainer main della pagina dove verrà inserita la griglia
 *
 */
function generateGrid(gridContainer) {
  const difficultSelection = document.getElementById("difficulty-selection");
  gridContainer.innerHTML = "";
  const boxContainer = document.createElement("div");
  boxContainer.classList.add("box-container");
  gridContainer.append(boxContainer);

  let gridLevel;
  if (difficultSelection.value.toLowerCase() === "hard") {
    gridLevel = 7;
  } else if (difficultSelection.value.toLowerCase() === "medium") {
    gridLevel = 9;
  } else {
    gridLevel = 10;
  }

  for (let i = 0; i < gridLevel * gridLevel; i++) {
    boxContainer.append(generateBox(i + 1, gridLevel));
  }

  generateBomb(gameGrid, gridLevel);
}

/**
 *
 * @param {number} boxText index relativo al numero del box creato
 * @returns {object} boxEl box creato che andrà inserito all'interno del BoxContainer
 */

function generateBox(boxIndex, boxwidth) {
  const boxEl = document.createElement("div");
  boxEl.classList.add("box");
  boxEl.style.width = `calc(100% / ${boxwidth})`;
  boxEl.addEventListener("click", function () {
    if (!isGameOver) {
      if (insertBombsIndex.includes(boxIndex)) {
        this.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
        this.classList.add("bomb", "clicked");
        isGameOver = true;
      } else {
        this.classList.add("clicked");
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
  const numb = Math.floor(Math.random() * number - 1 + 1);
  return numb;
}

/**
 *
 * @param {HTMLCollection} gameGrid array di tutte le box
 * @param {number} difficulty numero che indica la difficoltà per calcolare
 */
function generateBomb(gameGrid, difficulty) {
  let numb;

  while (insertBombsIndex.length < 16) {
    numb = randomNumber(Math.pow(difficulty, 2));
    if (!insertBombsIndex.includes(numb)) {
      insertBombsIndex.push(numb);
    }
  }
}
