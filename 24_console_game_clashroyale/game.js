// Main Game Loop
let winner
const mapArray = [["#", "#", "#", "#", "#"], ["#", "#", "#", "#", "#"], ["#", "#", "#", "#", "#"], ["#", "#", "#", "#", "#"], ["#", "#", "#", "#", "#"]]

function drawMap() {
    console.clear()
    let map = ""
    for (let i = 0; i < 5; i++) {
        let row = ""
        for (let j = 0; j < 5; j++) {
            const tile = mapArray[i][j]
            row += tile
        }
        map += row + "\n"
    }
    console.log(map)
}

function addEnemy() {
    // enemy index
    const enemyIndex = Math.floor(Math.random() * 5) // set to a random

    // get the first line
    const firstRow = mapArray[0]

    // add the collision in the future

    // set the enemy
    firstRow[enemyIndex] = "E"  // E = enemy  // say about the conversion
}

function addAlly() {
    // ally index
    const allyIndex = prompt("Give an index from 0-4")
    // const allyIndex = Math.floor(Math.random() * 5)

    // get the last line
    const lastRow = mapArray[4]

    // add the collision in the future

    // set the ally
    lastRow[allyIndex] = "A"  // A - ally
}

function moveEnemies() {
    // check all enemies
    for (let i = 4; i >= 0; i--) {
        const row = mapArray[i]
        for (let j = 0; j < 5; j++) {
            const tile = row[j]
            if (tile === "E") {
                // check the collision
                const canMove = collisionEnemy(i, j)
                if (canMove === undefined) {
                    winner = "E"
                    return
                } else if (canMove) {
                    row[j] = "#"
                    const nextRow = mapArray[i + 1]
                    nextRow[j] = "E"
                } else {
                    row[j] = "#"
                    const nextRow = mapArray[i + 1]
                    nextRow[j] = "#"
                }
            }
        }
    }
}

function collisionEnemy(i, j) {
    const nextRow = mapArray[i + 1]  // undefined
    if (nextRow === undefined) {
        return undefined // abrupt the function
    }

    const nextTile = nextRow[j]
    if (nextTile === "#") {
        // don't have collision
        return true
    } else if (nextTile === "A") {
        return false
    }
    //  else if (nextTile === "E") {  // impossible case
    //     return true
    // }
}


function moveAllies() {
    // check all Allies
    for (let i = 0; i < 5; i++) {
        const row = mapArray[i]
        for (let j = 0; j < 5; j++) {
            const tile = row[j]
            if (tile === "A") {
                const canMove = collisionAlly(i, j)
                if (canMove === undefined) {
                    winner = "A"
                    return
                } else if (canMove) {
                    row[j] = "#"
                    const nextRow = mapArray[i - 1]
                    nextRow[j] = "A"
                } else {
                    row[j] = "#"
                    const nextRow = mapArray[i - 1]
                    nextRow[j] = "#"
                }
            }
        }
    }
}

function collisionAlly(i, j) {
    const nextRow = mapArray[i - 1]  // undefined
    if (nextRow === undefined) {
        return undefined
    }

    const nextTile = nextRow[j]
    if (nextTile === "#") {
        // don't have a collision
        return true
    } else if (nextTile === "E") {
        return false
    }
}

function winnerCheck() {
    if (winner === "A") {
        console.log("You win!")
        return true
    } else if (winner === "E") {
        console.log("You lose..")
        return true
    }
}


drawMap()
while (winner === undefined) {
    // Game
    moveEnemies()
    if (winnerCheck()) {
        break
    }
    moveAllies()
    if (winnerCheck()) {
        break
    }
    addEnemy()
    addAlly()
    drawMap()
}
