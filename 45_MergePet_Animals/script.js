// -----------------------------
// Game data
// -----------------------------
const PETS = [
    // level: 1..10
    { emoji: "🐣", name: "Chick" },
    { emoji: "🐰", name: "Bunny" },
    { emoji: "🐱", name: "Cat" },
    { emoji: "🐶", name: "Dog" },
    { emoji: "🦊", name: "Fox" },
    { emoji: "🐼", name: "Panda" },
    { emoji: "🦁", name: "Lion" },
    { emoji: "🐘", name: "Elephant" },
    { emoji: "🐲", name: "Dragon" },
    { emoji: "🦄", name: "Unicorn" },
];
const board = new Array(16).fill(null);  // [null, null, null...]

// HTML elements
const boardEl = document.getElementById("grid")

// -----------------------------
// Helpers
// -----------------------------
function generatePetIndex() {
    const index = Math.floor(Math.random() * board.length)  // 0 - 15
    return index
}

// -----------------------------
// Core actions
// -----------------------------
function spawnNewPet() {
    const pet = PETS[0]  // { emoji: "🐣", name: "Chick" }
    const index = generatePetIndex()  // 0 - board.length
    board[index] = pet
}

// -----------------------------
// Rendering
// -----------------------------
function render() {
    for (let i = 0; i < board.length; i++) {
        const cellData = board[i]  // null or { emoji: "🐣", name: "Chick" }

        // cells
        const cellDiv = document.createElement("div")
        cellDiv.className = "cell"

        // pets
        if (cellData !== null) {  // { emoji: "🐣", name: "Chick" }
            const emoji = cellData.emoji
            const petDiv = document.createElement("div")
            petDiv.className = "pet"
            petDiv.textContent = emoji
            cellDiv.appendChild(petDiv)
        }

        boardEl.appendChild(cellDiv)
    }
}

// -----------------------------
// Game start
// -----------------------------
spawnNewPet()
render()