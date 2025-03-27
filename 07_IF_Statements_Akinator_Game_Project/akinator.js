/* Akinator-style Game Code Challenge */

let playerWord = "Paperss"
let playerWordLength = playerWord.length

if (playerWordLength > 0) {
    console.log("You made a word.")

    if (playerWordLength < 7) {  // wordLength <= 6 should work the same
        console.log("You made a word between 1 to 6 characters.")

        if (playerWord !== "carrot") {
            console.log("Your word isn't carrot. Why you don't eat enough vegetables🤔")

            if (playerWordLength <= 4) {
                console.log("You have between 1 to 4 characters word.")

                if (playerWord === "Bob") {
                    console.log("I knew that you make your name. It was very easy 😁")

                } else {
                    console.log("I tried my best, but your word is too difficult. You win 😑")
                }

            } else {
                console.log("You have a word between 5 to 6 characters.")

                if (playerWord === "paper") {
                    console.log("Your word is paper. I know that you want to play a rock, paper, scissors😁")

                } else {
                    console.log("I tried my best, but your word is too difficult. You win 😑")
                }
            }

        } else {
            console.log("Your word is carrot🤩")
            console.log("I know I'm smart😁")
        }

    } else {
        console.log("Your word is too big for me. I give up😔")
    }

} else {
    console.log("I know, you didn't guess anything😊")
}

