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
}

/**
 *
 * @param {number} boxText index relativo al numero del box creato
 * @returns {object} boxEl box creato che andrà inserito all'interno del BoxContainer
 */

function generateBox(boxText, boxwidth) {
  const boxEl = document.createElement("div");
  boxEl.classList.add("box");
  boxEl.innerText = boxText;
  boxEl.style.width = `calc(100% / ${boxwidth})`;
  boxEl.addEventListener("click", function () {
    isClicked(this);
  });
  return boxEl;
}

/**
 *
 * @param {object} boxEl box che viene cliccato
 */
function isClicked(boxEl) {
  console.log(boxEl.innerText);
  boxEl.classList.toggle("clicked");
}
