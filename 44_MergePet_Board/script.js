// -----------------------------
// Game data
// -----------------------------
const board = new Array(16).fill(null);  // [null, null, null...]

// HTML elements
const boardEl = document.getElementById("grid")

// -----------------------------
// Rendering
// -----------------------------
function render() {
    for (let i = 0; i < board.length; i++) {
        const cellDiv = document.createElement("div")
        cellDiv.className = "cell"
        boardEl.appendChild(cellDiv)
    }
}

// -----------------------------
// Game start
// -----------------------------

render()