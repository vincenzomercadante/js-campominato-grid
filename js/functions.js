let bombIndexes;
let winClick;
let isGameOver;
const gridContainer = document.getElementById("main");

/**
 *
 * @param {HTMLObjectElement} gridContainer main della pagina dove verrà inserita la griglia
 *
 */
function generateGrid() {
  // get the selected difficulty
  const selectedLevel = document
    .getElementById("difficulty-selection")
    .value.toLowerCase();

  gameInitialization();

  // generate game grid
  const gameContainer = boxGenerator();

  // check on game difficulty
  const gameDifficulty =
    selectedLevel === "hard" ? 7 : selectedLevel === "medium" ? 9 : 10;

  // cell generator
  for (let i = 0; i < Math.pow(gameDifficulty, 2); i++) {
    gameContainer.append(generateBox(i + 1, gameDifficulty));
  }

  generateBomb(gameDifficulty);
}

/**
 *
 * @param {number} boxText box indexes
 * @returns {object} boxEl created box
 */

function generateBox(boxIndex, boxWidth) {
  // cell generator
  const boxEl = document.createElement("div");
  boxEl.classList.add("box");
  boxEl.style.width = `calc(100% / ${boxWidth})`;
  
  boxEl.addEventListener("click", function pippo() {
    if (!isGameOver) {
      // check if cell has bomb in it
      if (bombIndexes.includes(boxIndex)) {
        this.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
        this.removeEventListener("click", pippo);
        this.classList.add("bomb", "clicked");
        gameLost();
      } else {
        // win case
        this.removeEventListener("click", pippo);
        this.classList.add("clicked");
        winClick++;
        gameWinCheck(winClick, boxWidth);
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
  // genera bombe
  while (bombIndexes.length < 16) {
    const bombIndex = randomNumber(Math.pow(difficulty, 2));
    if (!bombIndexes.includes(bombIndex)) {
      bombIndexes.push(bombIndex);
    }
  }
}

/**
 * funzione che rende cliccate tutte le celle
*/
function allVisible() {
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    if (bombIndexes.includes(i)) {
      boxes[i].innerHTML = `<i class="fa-solid fa-bomb"></i>`;
      boxes[i].classList.add("bomb");
    }
    boxes[i].classList.add("clicked");
  }
}

// initialize game variables to the initial value
function gameInitialization() {
  gridContainer.innerHTML = "";
  bombIndexes = [];
  isGameOver = false;
  winClick = 0;
}

// game grid generation
function boxGenerator() {
  const boxContainer = document.createElement("div");
  boxContainer.classList.add("box-container");
  gridContainer.append(boxContainer);
  return boxContainer;
}

// check if the user win the game
function gameWinCheck(winClicksCount, boxWidth) {
  if (winClicksCount == Math.pow(boxWidth, 2) - 16) {
    isGameOver = true;
    setTimeout(function () {
      alert("Hai vinto");
    }, 400);
  }
}

// game lost function
function gameLost() {
  allVisible();
  setTimeout(function () {
    alert("Hai perso");
  }, 400);
  isGameOver = true;
}
