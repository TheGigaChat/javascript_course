/* Challenge 1 */
// Sum all the numbers from 1 to 100 including.
// Answer should be 5050

// anouther short way
let works = true
let number = 1
let total = 0
while (works) {

    if (number < 100) {
        total = total + number  // 1
        number = number + 1  // 2
    }
    if (number == 100) {
        total = total + number
        works = false
    }

    console.log(total)
}

// short way
// let number = 1
// let total = 0
// while (number <= 100) {
//     total = total + number
//     number = number + 1
// }
// console.log(total2)

// long way
// let number = 0
// let total = 0
// while (number < 100) {
//     number = number + 1
//     total = total + number
//     console.log(total)
// }



/* Challenge 2 */
// Love Letter
// you have a letter = ""
// you have a counter = 0

// Rising phase: counter 0 → 5
// Every iteration add the word "darling"

// Falling phase: counter 5 → -5
// Every iteration add the word "love"

let letter = ""
let counter = 0
while (counter < 5) {
    letter = letter + "darling "
    counter = counter + 1
}

while (counter > -5) {
    letter = letter + "love "
    counter = counter - 1
}

console.log(letter)



/* Challenge 3 */
// Printing Machine
// We need a message with 5 letters
// Ask a user to write a message

// while (message.length < 6) -> write a message
// use a confirm() to ask the user's choice
// ok -> add the chosen letter: default is "A"
// cancel -> switch "A" to "B" and "B" to "A"

let message = ""
let currentLetter = "A"
confirm("Please write a message.")
while (message.length < 5) {
    let userChoice = confirm("Current letter is: " + currentLetter)
    if (userChoice) {
        message = message + currentLetter
        console.log(message)
    } else {
        if (currentLetter === "A") {
            currentLetter = "B"
        } else if (currentLetter === "B") {
            currentLetter = "A"
        }
    }
}
