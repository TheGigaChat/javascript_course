/* Challenge 1 */
// Sum all the numbers from 1 to 100 including.
// Answer should be 5050

// anouther short way
let total = 0
for (let i = 1; i < 101; i++) {
    total += i
}
console.log(total)


/* Challenge 2 */
// Love Letter
// you have a letter = ""
// you have a counter = 0

// Rising phase: counter 0 → 5
// Every iteration add the word "darling"

// Falling phase: counter 5 → -5
// Every iteration add the word "love"

let letter = ""
for (let i = 0; i < 5; i++) {
    letter += "darling "
}

for (let j = 5; j > -5; j--) {
    letter += "love "
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

// let message = ""
// let currentLetter = "A"
// confirm("Please write a message.")

// for (let i = 0; message.length < 5; i++) {
//     let userChoice = confirm("Current letter is: " + currentLetter)
//     if (userChoice) {
//         message += currentLetter
//         console.log(message)
//     } else {
//         if (currentLetter === "A") {  // === the same as ==
//             currentLetter = "B"
//         } else {
//             currentLetter = "A"
//         }
//     }
// }
