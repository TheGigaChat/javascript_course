// Part 1: Message Mixer
// • Prompt the user for input and store in userMessage.
// • For each character in userMessage:
//     – Randomly choose 0 or 1.
//     – If 0, increment cats; if 1, increment dogs.

// let userMessage = prompt("Please write a message");
// let cats = 0;
// let dogs = 0;
// Use Math.floor(Math.random() * 2) for random 0 or 1.

let userMessage = prompt("Please write a message")
let cats = 0
let dogs = 0
for (let i = 0; i < userMessage.length; i++) {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
        cats++
    } else {
        dogs++
    }
}

console.log("Number of cats: " + cats)
console.log("Number of dogs: " + dogs)


// Part 2: Bone Distribution
// • For each cat → add a new bone
// • If bones ≥ dogs → log "All animals are happy!"
// • Otherwise → log "Not enough food"

// let bones = 0;

let bones = 0
let enoughFood = true
for (let i = 0; i < cats; i++) {
    bones++
}
if (bones >= dogs) {
    console.log("All animals are happy!")
} else {
    console.log("Not enough food :(")
    enoughFood = false
}

console.log("Number of bones: " + bones)


// Part 3: Hungry-Dog Alert
// • If we logged "All animals are happy!", (no additional message).
// • Otherwise:
//     – For each dog that is hungry → add the word "more " to the message.
//     – After all cycles add the word "food" to the message
//     – Log that message.

// let hungryDogs = ??;
// let message = "";

let hungryDogs = dogs - bones
let message = ""
if (!enoughFood) {
    for (let i = 0; i < hungryDogs; i++) {
        message += "more "
    }
    message += "food"
    console.log(message)
}
