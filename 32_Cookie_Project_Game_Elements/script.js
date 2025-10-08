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
let autoClickPower = 0
let clickCost = 10
let autoClickCost = 50

const clickPowerElement = document.getElementById("clickPower")
const clickCostElement = document.getElementById("clickCost")
const clickButtonElement = document.getElementById("clickButton")
const autoClickPowerElement = document.getElementById("autoClickPower")
const autoClickCostElement = document.getElementById("autoClickCost")
const autoClickButtonElement = document.getElementById("autoClickButton")

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
