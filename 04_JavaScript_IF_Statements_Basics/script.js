/* IF STATEMENTS */

// one branch choice
if (true) {  // or false
    console.log("Watch Rick and Morty")
} else {
    console.log("Learn coding")
}


let myChoice = true
myChoice = false
if (myChoice) {  // not equals true
    console.log("Watch Rick and Morty")
} else {  // optional
    console.log("Learn coding")
}

// don't need to be inside of the branch all the time
console.log("Independent action: I'm hungry :(")




let ladyLackChoice = true
// multiple branches
if (myChoice) {
    console.log("You found a farm!")
    if (ladyLackChoice) {
        console.log("You found a cuttie girl.")
    } else {
        console.log("You took an apple.")
    }
} else {
    console.log("You found a dangeon.")
    if (ladyLackChoice) {
        console.log("You found a treasure box.")
    } else {
        console.log("Have been killed by a zombie...")
    }
}

// How to ask a user's choice?
let userChoice = confirm("Do you want to play a game?");
if (userChoice) {
    confirm("User said true.")
} else {
    confirm("User said false.")
}


// short story code challenge
