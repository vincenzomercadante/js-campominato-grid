/**
 *
 * @param {HTMLObjectElement} gridContainer main della pagina dove verrà inserita la griglia
 */
function generateGrid(gridContainer) {
  gridContainer.innerHTML = "";
  const boxContainer = document.createElement("div");
  boxContainer.classList.add("box-container");
  gridContainer.append(boxContainer);

  let containerElements;
  for (let i = 0; i < 100; i++) {
    boxContainer.append(generateBox(i));
  }
}

/**
 *
 * @param {number} boxText index relativo al numero del box creato
 * @returns {object} boxEl box creato che andrà inserito all'interno del BoxContainer
 */

function generateBox(boxText) {
  const boxEl = document.createElement("div");
  boxEl.classList.add("box");
  boxEl.innerText = boxText;
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
