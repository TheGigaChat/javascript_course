// cookie and count
let count = 0

const countElement = document.getElementById("count")
const cookieElement = document.getElementById("cookie")

function increaseCount() {
    count += clickPower
    countElement.textContent = "Count: " + count
}

cookieElement.addEventListener('click', increaseCount)


// click power button
let clickPower = 1
let clickCost = 10

const clickPowerElement = document.getElementById("clickPower")
const clickCostElement = document.getElementById("clickCost")
const clickButtonElement = document.getElementById("clickButton")

function increaseClickPower() {
    // validation
    if (count >= clickCost) {
        // update JS variables
        count -= clickCost
        clickPower++
        clickCost = Math.round(clickCost * 1.4)
        
        // update HTML elements
        countElement.textContent = "Count: " + count
        clickPowerElement.textContent = "Current click power: " + clickPower
        clickCostElement.textContent = "Cost: " + clickCost
    }
}

clickButtonElement.addEventListener("click", increaseClickPower)


// auto-click power button
let autoClickPower = 0
let autoClickCost = 50

const autoClickPowerElement = document.getElementById("autoClickPower")
const autoClickCostElement = document.getElementById("autoClickCost")
const autoClickButtonElement = document.getElementById("autoClickButton")

function increaseAutoClickPower() {
    // validation
    if (count >= autoClickCost) {
        // update JS variables
        count -= autoClickCost
        autoClickPower++
        autoClickCost = Math.round(autoClickCost * 1.6)
        
        // update HTML elements
        countElement.textContent = "Count: " + count
        autoClickPowerElement.textContent = "Current auto-click power: " + autoClickPower
        autoClickCostElement.textContent = "Cost: " + autoClickCost
    }
}

function increaseCountByAutoClickPower() {
    count += autoClickPower
    countElement.textContent = "Count: " + count
    console.log("click")
}

autoClickButtonElement.addEventListener("click", increaseAutoClickPower)

setInterval(increaseCountByAutoClickPower, 1000)
