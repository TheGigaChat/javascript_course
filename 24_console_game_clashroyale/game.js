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

function addUnit() {
    // unit index
    const unitIndex = prompt("Give an index from 0-4")
    // const unitIndex = Math.floor(Math.random() * 5)

    // get the last line
    const lastRow = mapArray[4]

    // add the collision in the future

    // set the unit
    lastRow[unitIndex] = "U"  // U - friendly unit
}

function moveEnemy() {
    // check all enemies
    for (let i = 4; i >= 0; i--) {
        const row = mapArray[i]
        for (let j = 0; j < 5; j++) {
            const tile = row[j]
            if (tile === "E") {
                // check the collision
                const canMove = collisionEnemy(i, j)
                if (canMove === undefined) {
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
        if (winner === undefined) {
            // we have a winner
            winner = "E"
        }
        return undefined // abrupt the function
    }

    const nextTile = nextRow[j]
    if (nextTile === "#") {
        // don't have collision
        return true
    } else if (nextTile === "U") {
        return false
    }
    //  else if (nextTile === "E") {  // impossible case
    //     return true
    // }
}


function moveUnit() {
    // check all units
    for (let i = 0; i < 5; i++) {
        const row = mapArray[i]
        for (let j = 0; j < 5; j++) {
            const tile = row[j]
            if (tile === "U") {
                const canMove = collisionUnit(i, j)
                if (canMove === undefined) {
                    return
                } else if (canMove) {
                    row[j] = "#"
                    const nextRow = mapArray[i - 1]
                    nextRow[j] = "U"
                } else {
                    row[j] = "#"
                    const nextRow = mapArray[i - 1]
                    nextRow[j] = "#"
                }
            }
        }
    }
}

function collisionUnit(i, j) {
    const nextRow = mapArray[i - 1]  // undefined
    if (nextRow === undefined) {
        if (winner === undefined) {
            // we have a winner
            winner = "U"
        }
        return
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
    if (winner === "U") {
        console.log("You win!")
        return true
    } else if (winner === "E") {
        console.log("You defeat..")
        return true
    }
}


drawMap()
while (!winner) {
    // Game
    moveEnemy()
    moveUnit()
    if (winnerCheck()) {
        break
    }
    addEnemy()
    addUnit()
    drawMap()
    winnerCheck()
}
