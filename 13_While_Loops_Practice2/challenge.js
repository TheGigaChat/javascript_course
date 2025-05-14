/* Challenge 3 */
// Printing Machine
// We need a message with 5 letters
// Ask a user to write a message

// while (message.length < 6) -> write a message
// use a confirm() to ask the user's choice
// ok -> add a chosen letter: default is "A"
// cancel -> switch "A" to "B" and "B" to "A"

let message = ""
let currentLetter = "A"
while (message.length < 2) {
    let userChoice = confirm("Please write a message.\nOK - Add the current letter.\nCANCEL - Switch the letter.\nCurrent letter is - " + currentLetter)

    if (userChoice == true) {
        message = message + currentLetter
        console.log(message)
    } else {
        if (currentLetter == "A") {
            currentLetter = "B"
        } else {
            currentLetter = "A"
        }
    }
}
