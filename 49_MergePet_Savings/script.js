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
let mergeCellIndex1 = null  // null or index
let mergeCellIndex2 = null

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

function resetIndexes() {
    mergeCellIndex1 = null
    mergeCellIndex2 = null
    render()
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

function tryToMerge(cellIndex) {  // 0 - board.length
    if (mergeCellIndex1 === null && mergeCellIndex2 === null) {
        mergeCellIndex1 = cellIndex
        return
    }

    if (mergeCellIndex1 !== null && mergeCellIndex2 === null) {
        mergeCellIndex2 = cellIndex

        const pet1 = board[mergeCellIndex1]
        const pet2 = board[mergeCellIndex2]

        // validation
        if (pet1.level !== pet2.level) {
            alert("The levels are different!")
            resetIndexes()
            return
        }

        if (mergeCellIndex1 === mergeCellIndex2) {
            alert("Can't merge a pet to itself.")
            resetIndexes()
            return
        }

        if (PETS[pet1.level] === undefined) {
            alert("You can't merge animals of the maximum level.")
            resetIndexes()
            return
        }

        // merging
        // { emoji: "🐰", name: "Bunny", level: 2, reward: 2 }
        const nextLevelPet = PETS[pet1.level]  // nextPetIndex = pet.level
        board[mergeCellIndex1] = null
        board[mergeCellIndex2] = nextLevelPet
        bestLevel = Math.max(bestLevel, nextLevelPet.level)
        resetIndexes()
    }
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

            // merging
            const mergeBtn = document.createElement("button")
            mergeBtn.textContent = "merge"

            if (mergeCellIndex1 === i || mergeCellIndex2 === i) {
                mergeBtn.className = "dragOver"
            }

            // triggers
            petDiv.addEventListener("click",() => increasePoop(reward))
            mergeBtn.addEventListener("click", () => {
                mergeBtn.className = "dragOver"
                tryToMerge(i)
            })

            petDiv.appendChild(mergeBtn)
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