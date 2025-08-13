// Game
let winner = false
const mapArray = [
    ["#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#"]
]

function drawMap() {
    let mapString = ""
    for (let i = 0; i < 5; i++) {
        const rowArray = mapArray[i]  // ["#", "#", "#", "#", "#"]
        let rowString = ""
        for (let j = 0; j < 5; j++) {
            const tile = rowArray[j]  // "#"
            rowString += tile  // "#####"
        }
        mapString += rowString + "\n"
    }
    console.log(mapString)
}

function addEnemy() {
    const enemyIndex = Math.floor(Math.random() * 5)  // 0-4

    // get the first row
    const firstRow = mapArray[0]  // ["#", "#", "#", "#", "#"]

    firstRow[enemyIndex] = "E"  // E = enemy
}

function addAlly() {
    const allyIndex = prompt("Give an index from 0-4")

    // get the last row
    const lastRow = mapArray[4]

    lastRow[allyIndex] = "A"  // A = ally
}

function moveEnemies() {
    for (let i = 4; i >= 0; i--) {
        const row = mapArray[i]  // ["#", "#", "#", "#", "#"]
        for (let j = 4; j >= 0; j--) {
            const tile = row[j]  // "#"
            if (tile === "E") {
                const collision = enemyCollision()  // true, false, undefiend

                if (collision === undefined) {
                    setWinner("E")  // stops the game and declares a winner
                    return
                } else if (collision) {
                    row[j] = "#"
                    const nextRow = mapArray[i + 1]
                    nextRow[j] = "#"
                } else {
                    row[j] = "#"
                    const nextRow = mapArray[i + 1]
                    nextRow[j] = "E"
                }
            }
        }
    }
}

function enemyCollision() {

}

function setWinner(_winner) {

}

while (!winner) {
    drawMap()
    addAlly()
    break
}
