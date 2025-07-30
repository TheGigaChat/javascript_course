// Main Game Loop
let winner = false
const mapArray = [["#", "#", "#", "#", "#"], ["#", "#", "#", "#", "#"], ["#", "#", "#", "#", "#"], ["#", "#", "#", "#", "#"], ["#", "#", "#", "#", "#"]]

function drawMap() {
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
    let enemyIndex = Math.floor(Math.random() * 5) // set to a random in the future

    // get the first line
    const firstRow = mapArray[0]

    // set the enemy
    firstRow[enemyIndex] = "v"  // v = enemy  // say about the conversion
}

function addUnit() {
    // unit index
    let unitIndex = prompt("Give an index from 0-4")

    // get the last line
    const lastRow = mapArray[4]

    // set the unit
    lastRow[unitIndex] = "V"  // V - friendly unit
}

function moveEnemy() {
    // check all enemies
    for (let i = 4; i >= 0; i--) {
        const row = mapArray[i]
        for (let j = 0; j < 5; j++) {
            const tile = row[j]
            if (tile === "v") {
                // check the collision
                const canMove = collisionEnemy(i, j)
                if (canMove === undefined) {
                    return
                } else if (canMove) {
                    row[j] = "#"
                    const nextRow = mapArray[i + 1]
                    nextRow[j] = "v"
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
        // we have a winner
        winner = true
        console.log("You defeat..")
        return undefined // no matter the return
    }

    const nextTile = nextRow[j]
    if (nextTile === "#") {
        // don't have collision
        return true
    } else if (nextTile === "V") {
        return false
    }
    //  else if (nextTile === "v") {  // impossible case
    //     return true
    // }
}


function moveUnit() {
    // check all units
    for (let i = 0; i < 5; i++) {
        const row = mapArray[i]
        for (let j = 0; j < 5; j++) {
            const tile = row[j]
            if (tile === "V") {
                const canMove = collisionUnit(i, j)
                if (canMove === undefined) {
                    return
                } else if (canMove) {
                    row[j] = "#"
                    const nextRow = mapArray[i - 1]
                    nextRow[j] = "V"
                } else {
                    rowArray[j] = "#"
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
        // we have a winner
        winner = true
        console.log("You win!")
        return
    }

    const nextTile = nextRow[j]
    if (nextTile === "#") {
        // don't have a collision
        return true
    } else if (nextTile === "v") {
        return false
    }
}


drawMap()
console.log("-----")
while (!winner) {
    // Game
    addEnemy()
    addUnit()
    drawMap()
    console.clear()
    moveEnemy()
    if (winner) {
        break
    }
    moveUnit()
    if (winner) {
        break
    }
    drawMap()
    console.log("-----")
}
