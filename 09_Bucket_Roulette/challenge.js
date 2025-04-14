// roullete

// ammos and you should choose where you want to shot

let firstAmmo = Math.floor(Math.random() * 2)
// let secondAmmo = Math.floor(Math.random() * 2)
// let thirdAmmo = Math.floor(Math.random() * 2)

let playerLifes = 2
let dillerLifes = 2

// let playerWasShotten

// first cycle
let playerChoice = confirm("Where do you want to shoot?\nOK - Diller\nCancel - Myself") // true - opponent, false - yourself

// console.log(firstAmmo)


// playerLifes || dillerLifes == 0
if (playerLifes == 0 || dillerLifes == 0) {
    // someone is dead
    if (playerLifes == 0) {
        confirm("Diller is a Winner!")
    } else {
        confirm("Player is a Winner")
    }
} // else is not needed

// visualise all the combinations that we have
if (firstAmmo == 1 && playerChoice) {
    console.log("Dillar has -1 life. 1 live is remaining, be careful")
    dillerLifes--
} else if (firstAmmo == 1 && !playerChoice) {
    console.log("Player has -1 life. 1 live is remaining, be careful")
    playerLifes--
} else if (firstAmmo == 0 && playerChoice) {
    console.log("Dillar has +1 life. 1 live is remaining, be careful")
    dillerLifes++
} else {
    console.log("Player has +1 life. 1 live is remaining, be careful")
    playerLifes++
}

// second cycle

// upload the random again
firstAmmo = Math.floor(Math.random() * 2)

if (playerLifes == 0 || dillerLifes == 0) {
    // someone is dead
    if (playerLifes == 0) {
        confirm("Diller is a Winner!")
    } else {
        confirm("Player is a Winner")
    }
}

playerChoice = confirm("Where do you want to shoot?\nOK - Diller\nCancel - Myself")

if (firstAmmo == 1 && playerChoice) {
    console.log("Dillar has -1 life. 1 live is remaining, be careful")
    dillerLifes--
} else if (firstAmmo == 1 && !playerChoice) {
    console.log("Player has -1 life. 1 live is remaining, be careful")
    playerLifes--
} else if (firstAmmo == 0 && playerChoice) {
    console.log("Dillar has +1 life. 1 live is remaining, be careful")
    dillerLifes++
} else {
    console.log("Player has +1 life. 1 live is remaining, be careful")
    playerLifes++
}


// third cycle

// upload the random again
firstAmmo = Math.floor(Math.random() * 2)

if (playerLifes == 0 || dillerLifes == 0) {
    // someone is dead
    if (playerLifes == 0) {
        confirm("Diller is a Winner!")
    } else {
        confirm("Player is a Winner")
    }
}

playerChoice = confirm("Where do you want to shoot?\nOK - Diller\nCancel - Myself")

if (firstAmmo == 1 && playerChoice) {
    console.log("Dillar has -1 life. 1 live is remaining, be careful")
    dillerLifes--
} else if (firstAmmo == 1 && !playerChoice) {
    console.log("Player has -1 life. 1 live is remaining, be careful")
    playerLifes--
} else if (firstAmmo == 0 && playerChoice) {
    console.log("Dillar has +1 life. 1 live is remaining, be careful")
    dillerLifes++
} else {
    console.log("Player has +1 life. 1 live is remaining, be careful")
    playerLifes++
}


// fourth cycle

// upload the random again
firstAmmo = Math.floor(Math.random() * 2)

if (playerLifes == 0 || dillerLifes == 0) {
    // someone is dead
    if (playerLifes == 0) {
        confirm("Diller is a Winner!")
    } else {
        confirm("Player is a Winner")
    }
}

playerChoice = confirm("Where do you want to shoot?\nOK - Diller\nCancel - Myself")

if (firstAmmo == 1 && playerChoice) {
    console.log("Dillar has -1 life. 1 live is remaining, be careful")
    dillerLifes--
} else if (firstAmmo == 1 && !playerChoice) {
    console.log("Player has -1 life. 1 live is remaining, be careful")
    playerLifes--
} else if (firstAmmo == 0 && playerChoice) {
    console.log("Dillar has +1 life. 1 live is remaining, be careful")
    dillerLifes++
} else {
    console.log("Player has +1 life. 1 live is remaining, be careful")
    playerLifes++
}


// fifth cycle

// upload the random again
firstAmmo = Math.floor(Math.random() * 2)

if (playerLifes == 0 || dillerLifes == 0) {
    // someone is dead
    if (playerLifes == 0) {
        confirm("Diller is a Winner!")
    } else {
        confirm("Player is a Winner")
    }
}

playerChoice = confirm("Where do you want to shoot?\nOK - Diller\nCancel - Myself")

if (firstAmmo == 1 && playerChoice) {
    console.log("Dillar has -1 life. 1 live is remaining, be careful")
    dillerLifes--
} else if (firstAmmo == 1 && !playerChoice) {
    console.log("Player has -1 life. 1 live is remaining, be careful")
    playerLifes--
} else if (firstAmmo == 0 && playerChoice) {
    console.log("Dillar has +1 life. 1 live is remaining, be careful")
    dillerLifes++
} else {
    console.log("Player has +1 life. 1 live is remaining, be careful")
    playerLifes++
}

alert("You have chosen all your bullets and now you are dead!")
