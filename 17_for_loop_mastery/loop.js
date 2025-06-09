// Part 1
// ask the user to write something prompt()
// for each character, add a random cat or dog to the house

// Part 2
// for each cat => add a new bone
// if bones more or equal to dogs => console.log(All dogs are happy!)
// else console.log(We don't have enough food)

// Part 3
// if we don't have enough food => for each dog that is hungry => add the word "more " to the message. At the end add the word "food" to the message.
// log the message to the console


// Part 1
let userMessage = prompt("Please ..")
let cats = 0
let dogs = 0
for (let i = 0; i < userMessage.length; i++) {
    let randomValue = Math.floor(Math.random() * 2)  // 0 or 1
    if (randomValue === 1) {
        cats++
    } else {
        dogs++
    }
}

// Part 2
let bones = 0
let enoughFood = true
for (let i = 0; i < cats; i++) {
    bones++
}
if (bones >= dogs) {
    console.log("All dogs are happy:3")
} else {
    console.log("We don't have enough food!")
    enoughFood = false
}

// Part 3
let hungryDogs = dogs - bones
let message = ""
if (!enoughFood) {
    for (let i = 0; i < hungryDogs; i++) {
        message += "more "
    }
    message += "food"
}
console.log(message)
