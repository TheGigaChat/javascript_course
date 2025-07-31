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

while (!winner) {
    drawMap()
    break
}
