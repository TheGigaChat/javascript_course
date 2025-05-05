/* While Loop */


/* Challenge 1 */
// total sum from 1 to 100
// long way
// let works = true
// let number = 1
// let total = 0
// while (works) {

//     if (number < 100) {
//         total = total + number  // 1
//         number = number + 1  // 2
//     }
//     if (number == 100) {
//         total = total + number
//         works = false
//     }

//     console.log(total)
// }

// shorter
// let number = 1
// let total = 0
// while (number <= 100) {
//     total = total + number
//     number = number + 1
//     console.log(total)
// }


/* Challenge 2 */
// love letter
// you have a letter = ""
// you have a counter = 0

// Rising phase: counter 0 → 5
// Every iteration add the word "darling"

// Falling phase: counter 5 → -5
// Every iteration add the word "love"

// let letter = ""
// let counter = 0
// while (counter < 5) {
//     letter = letter + "darling "
//     counter = counter + 1
// }

// while (counter > -5) {
//     letter = letter + "love "
//     counter = counter - 1
// }

// console.log(letter)


/* Challenge 3 */
// encrypted message
// we need a message with 5 letters
// ask a user to write a message

// while (message < 5) -> write a message
// yes -> add a chosen letter: default is "A"
// no -> switch "A" to "B" and "B" to "A"
//
// let message = ""
// let currentLetter = "A"
// confirm("Please write a message.")
// while (message.length < 5) {
//     let userChoice = confirm("Current letter is: " + currentLetter)
//     if (userChoice) {
//         message = message + currentLetter
//         console.log(message)
//     } else {
//         if (currentLetter == "A") {
//             currentLetter = "B"
//         } else if (currentLetter == "B") {
//             currentLetter = "A"
//         }
//     }
// }

