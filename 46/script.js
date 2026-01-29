// -----------------------------
// Game data
// -----------------------------
const PETS = [
    // level: 1..10
    { emoji: "🐣", name: "Chick", level: 1, reward: 1},
    { emoji: "🐰", name: "Bunny", level: 2, reward: 2 },
    { emoji: "🐱", name: "Cat", level: 3, reward: 4 },
    { emoji: "🐶", name: "Dog", level: 4, reward: 7 },
    { emoji: "🦊", name: "Fox", level: 5, reward: 11 },
    { emoji: "🐼", name: "Panda", level: 6, reward: 16 },
    { emoji: "🦁", name: "Lion", level: 7, reward: 22 },
    { emoji: "🐘", name: "Elephant", level: 8, reward: 30 },
    { emoji: "🐲", name: "Dragon", level: 9, reward: 40 },
    { emoji: "🦄", name: "Unicorn", level: 10, reward: 55 },
];
const board = new Array(16).fill(null);  // [null, null, null...]
let poop = 1000
let bestLevel = 1

// HTML elements
const boardEl = document.getElementById("grid")
const poopEl = document.getElementById("poop")
const bestLvlEl = document.getElementById("bestLevel")
const buyBtnEl = document.getElementById("buyBtn")

// -----------------------------
// Helpers
// -----------------------------
function generatePetIndex() {
    const index = Math.floor(Math.random() * board.length)  // 0 - 15
    return index
}

function increasePoop(reward) {
    poop += reward
    updateUI()
}

// -----------------------------
// Core actions
// -----------------------------
function spawnNewPet() {
    // validation
    if (poop < 10) {
        alert("You don't have enough poop!")
        return
    }
    let boardIsFull = true
    for (let i = 0; i < board.length; i++) {
        const cellData = board[i]
        if (cellData === null) {
            boardIsFull = false
            break
        }
    }
    if (boardIsFull === true) {
        alert("Board is full!")
        return
    }

    const pet = PETS[0]  // { emoji: "🐣", name: "Chick" }
    let index = generatePetIndex()  // 0 - board.length
    while (board[index] !== null) {
        index = generatePetIndex()
    }
    board[index] = pet
    poop -= 10

    render()
    updateUI()
}

// -----------------------------
// Rendering
// -----------------------------
function render() {
    boardEl.innerHTML = ""

    for (let i = 0; i < board.length; i++) {
        const cellData = board[i]  // null or { emoji: "🐣", name: "Chick" }

        // cells
        const cellDiv = document.createElement("div")
        cellDiv.className = "cell"

        // pets
        if (cellData !== null) {  // { emoji: "🐣", name: "Chick", level: 1, reward: 1}
            const emoji = cellData.emoji
            const reward = cellData.reward

            const petDiv = document.createElement("div")
            petDiv.className = "pet"
            petDiv.textContent = emoji

            // triggers
            petDiv.addEventListener("click",() => increasePoop(reward))

            cellDiv.appendChild(petDiv)
        }

        boardEl.appendChild(cellDiv)
    }
}

function updateUI() {
    poopEl.textContent = poop
    bestLvlEl.textContent = bestLevel
}

// -----------------------------
// Triggers
// -----------------------------
buyBtnEl.addEventListener("click", spawnNewPet)

// -----------------------------
// Game start
// -----------------------------
spawnNewPet()
render()
updateUI()