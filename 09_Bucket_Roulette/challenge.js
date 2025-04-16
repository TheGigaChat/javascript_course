// Buckshot roulette — Code repetition to emphasize future importance of loops and functions

let playerLives = 2
let dealerLives = 2
let bullet
let playerChoice

// First cycle
if (playerLives > 0 && dealerLives > 0) {
    bullet = Math.floor(Math.random() * 2)
    playerChoice = confirm("🔫 Where do you want to shoot?\nOK - Shoot the dealer! 😎\nCancel - Shoot yourself! 😬")

    if (bullet === 1 && playerChoice) {
        dealerLives = dealerLives - 1
        console.log("😃 You hit the dealer! Dealer loses a life. Remaining lives: " + (dealerLives))
    } else if (bullet === 1 && !playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Oops! You shot yourself! You lose a life. Remaining lives: " + (playerLives))
    } else if (bullet === 0 && playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Empty shot! Dealer counterattacks! You lose a life. Remaining lives: " + (playerLives))
    } else {
        playerLives = playerLives + 1
        console.log("💖 Lucky break! You gain an extra life. Total lives: " + (playerLives))
    }

} // End of First cycle

// Second cycle
if (playerLives > 0 && dealerLives > 0) {
    bullet = Math.floor(Math.random() * 2)
    playerChoice = confirm("🔫 Where do you want to shoot?\nOK - Shoot the dealer! 😎\nCancel - Shoot yourself! 😬")

    if (bullet === 1 && playerChoice) {
        dealerLives = dealerLives - 1
        console.log("😃 You hit the dealer! Dealer loses a life. Remaining lives: " + (dealerLives))
    } else if (bullet === 1 && !playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Oops! You shot yourself! You lose a life. Remaining lives: " + (playerLives))
    } else if (bullet === 0 && playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Empty shot! Dealer counterattacks! You lose a life. Remaining lives: " + (playerLives))
    } else {
        playerLives = playerLives + 1
        console.log("💖 Lucky break! You gain an extra life. Total lives: " + (playerLives))
    }

} // End of Second cycle

// Third cycle
if (playerLives > 0 && dealerLives > 0) {
    bullet = Math.floor(Math.random() * 2)
    playerChoice = confirm("🔫 Where do you want to shoot?\nOK - Shoot the dealer! 😎\nCancel - Shoot yourself! 😬")

    if (bullet === 1 && playerChoice) {
        dealerLives = dealerLives - 1
        console.log("😃 You hit the dealer! Dealer loses a life. Remaining lives: " + (dealerLives))
    } else if (bullet === 1 && !playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Oops! You shot yourself! You lose a life. Remaining lives: " + (playerLives))
    } else if (bullet === 0 && playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Empty shot! Dealer counterattacks! You lose a life. Remaining lives: " + (playerLives))
    } else {
        playerLives = playerLives + 1
        console.log("💖 Lucky break! You gain an extra life. Total lives: " + (playerLives))
    }

} // End of Third cycle

// Fourth cycle
if (playerLives > 0 && dealerLives > 0) {
    bullet = Math.floor(Math.random() * 2)
    playerChoice = confirm("🔫 Where do you want to shoot?\nOK - Shoot the dealer! 😎\nCancel - Shoot yourself! 😬")

    if (bullet === 1 && playerChoice) {
        dealerLives = dealerLives - 1
        console.log("😃 You hit the dealer! Dealer loses a life. Remaining lives: " + (dealerLives))
    } else if (bullet === 1 && !playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Oops! You shot yourself! You lose a life. Remaining lives: " + (playerLives))
    } else if (bullet === 0 && playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Empty shot! Dealer counterattacks! You lose a life. Remaining lives: " + (playerLives))
    } else {
        playerLives = playerLives + 1
        console.log("💖 Lucky break! You gain an extra life. Total lives: " + (playerLives))
    }

} // End of Fourth cycle

// Fifth cycle
if (playerLives > 0 && dealerLives > 0) {
    bullet = Math.floor(Math.random() * 2)
    playerChoice = confirm("🔫 Where do you want to shoot?\nOK - Shoot the dealer! 😎\nCancel - Shoot yourself! 😬")

    if (bullet === 1 && playerChoice) {
        dealerLives = dealerLives - 1
        console.log("😃 You hit the dealer! Dealer loses a life. Remaining lives: " + (dealerLives))
    } else if (bullet === 1 && !playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Oops! You shot yourself! You lose a life. Remaining lives: " + (playerLives))
    } else if (bullet === 0 && playerChoice) {
        playerLives = playerLives - 1
        console.log("😢 Empty shot! Dealer counterattacks! You lose a life. Remaining lives: " + (playerLives))
    } else {
        playerLives = playerLives + 1
        console.log("💖 Lucky break! You gain an extra life. Total lives: " + (playerLives))
    }
} // End of Fifth cycle

// Final game outcome message
if (playerLives == 0 || dealerLives == 0) {
    if (playerLives == 0) {
        confirm("😢 Game Over! You died! Dealer wins! 💀")
    } else {
        confirm("😊 Congratulations! You killed the dealer! 🎉")
    }
} else {
    let continueGame = confirm("🕹️ All cycles are completed!\nDo you want to start a new session? (OK = Yes, Cancel = No)")
    if (continueGame) {
        // In this simple structure, instruct the user to refresh the page.
        confirm("Please refresh the page to start a new session.")
    } else {
        confirm("👋 Thanks for playing! See you next time!")
    }
}
