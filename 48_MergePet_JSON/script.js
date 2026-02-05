let poop = 10
let poopJson = null

function save() {
    poopJson = JSON.stringify(poop)
    localStorage.setItem("poop", poopJson)
}

function load() {
    poopJson = localStorage.getItem("poop")
    poop = JSON.parse(poopJson)
    console.log(poop)
}

load()
