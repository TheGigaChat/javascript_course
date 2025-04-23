/* Buckshot roulette */

let playerLives = 2
let dealerLives = 2
let bullet = Math.floor(Math.random() * 2)
let playerChoice = confirm("🔫 Where do you want to shoot?\nOK - Shoot the dealer! 😎\nCancel - Shoot yourself! 😬") // true - shoot the dealer, false - shoot yourself

// game loop
// first cycle
if (playerLives > 0 && dealerLives > 0) {
    if (playerChoice && bullet == 1) {
        dealerLives = dealerLives - 1
        console.log("😃 You hit the dealer! Dealer loses a life. Dealer lives: " + dealerLives)
    } else if (playerChoice && bullet == 0) {
        playerLives = playerLives - 1
        console.log("😢 Empty shot! Dealer counterattacks! You lose a life. Player lives: " + playerLives)
    } else if (!playerChoice && bullet == 1) {
        playerLives = playerLives - 1
        console.log("😢 Oops! You shot yourself! You lose a life. Player lives: " + playerLives)
    } else {
        playerLives = playerLives + 1
        console.log("💖 Lucky break! You gain an extra life. Player lives: " + playerLives)
    }
}


// second cycle
if (playerLives > 0 && dealerLives > 0) {

    bullet = Math.floor(Math.random() * 2)
    playerChoice = confirm("🔫 Where do you want to shoot?\nOK - Shoot the dealer! 😎\nCancel - Shoot yourself! 😬")

    if (playerChoice && bullet == 1) {
        dealerLives = dealerLives - 1
        console.log("😃 You hit the dealer! Dealer loses a life. Dealer lives: " + dealerLives)
    } else if (playerChoice && bullet == 0) {
        playerLives = playerLives - 1
        console.log("😢 Empty shot! Dealer counterattacks! You lose a life. Player lives: " + playerLives)
    } else if (!playerChoice && bullet == 1) {
        playerLives = playerLives - 1
        console.log("😢 Oops! You shot yourself! You lose a life. Player lives: " + playerLives)
    } else {
        playerLives = playerLives + 1
        console.log("💖 Lucky break! You gain an extra life. Player lives: " + playerLives)
    }
}


// third cycle
if (playerLives > 0 && dealerLives > 0) {

    bullet = Math.floor(Math.random() * 2)
    playerChoice = confirm("🔫 Where do you want to shoot?\nOK - Shoot the dealer! 😎\nCancel - Shoot yourself! 😬")

    if (playerChoice && bullet == 1) {
        dealerLives = dealerLives - 1
        console.log("😃 You hit the dealer! Dealer loses a life. Dealer lives: " + dealerLives)
    } else if (playerChoice && bullet == 0) {
        playerLives = playerLives - 1
        console.log("😢 Empty shot! Dealer counterattacks! You lose a life. Player lives: " + playerLives)
    } else if (!playerChoice && bullet == 1) {
        playerLives = playerLives - 1
        console.log("😢 Oops! You shot yourself! You lose a life. Player lives: " + playerLives)
    } else {
        playerLives = playerLives + 1
        console.log("💖 Lucky break! You gain an extra life. Player lives: " + playerLives)
    }
}

// winning check
if (playerLives > 0 && dealerLives == 0) {
    console.log("😊 Congratulations! You killed the dealer! 🎉")
}

if (playerLives == 0 && dealerLives > 0) {
    console.log("😢 Game Over! You died! Dealer wins! 💀")
}

// default
if (playerLives > 0 && dealerLives > 0) {
    console.log("🕹️ All cycles are completed! Please refresh the page to start a new session.")
}
