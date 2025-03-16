/* Short storytelling game project */

// Use Alt + Z to wrap the file

// let userChoice = confirm("Do you want to play a game?")
// confirm(userChoice)


confirm("Prison officer - Listen up, rookie. Welcome to our yard. You gotta choose your path wisely, or our boys will boot you out. Time's short, so I'll only show you one room—Kitchen or Gym, it's your call.")

let userChoice = confirm("Kitchen = ok \nGym = cancel")

if (userChoice) {

    confirm("Action - Go to the kitchen. \nPrison guard - In here, you'll be cookin' up grub for the whole block. If you wanna earn some street cred, you better put in the work.")

    userChoice = confirm("Talk to a man = ok \nChow down on a bowl of ramen = cancel")

    if (userChoice) {

        confirm("Action - Talk to a man. \nKyle - I'm Kyle, the head cook around here. Show me what you got with that tomato—prove you can be of use.")

        userChoice = confirm("Slice the tomato just like I asked = ok \nCook up a bowl of ramen instead of slicing the tomato = cancel")

        if (userChoice) {

            confirm("Kyle - That cut was one of the roughest I've seen, but I'll let you stick around in the kitchen. \nAchievement - A Young Cook")

        } else {

            confirm("Kyle - You ain’t been listenin’, rookie. Get outta here.\nAchievement - Exile Slime")

        }
    }
}

confirm("Thanks for playing!")





























































































// // user inputs
// let userChoice = confirm("Do you want to play a game?") // true / false
// confirm(userChoice)



// // game project
// let playerChoice
// confirm("Prison officer - Listen up, rookie. Welcome to our yard. You gotta choose your path wisely, or our boys will boot you out. Time's short, so I'll only show you one room—Kitchen or Gym, it's your call.")

// playerChoice = confirm("Kitchen = ok \ngym = cancel")  // \n means a new line

// if (playerChoice) {

//     confirm("Action - Go to the kitchen. \nPrison guard - In here, you'll be cookin' up grub for the whole block. If you wanna earn some street cred, you better put in the work.")

//     playerChoice = confirm("Talk to a man = ok \nChow down on a bowl of ramen = cancel")  // interesting words ask the AI

//     if (playerChoice) {
//         confirm("Action - Talk to Kyle. \nKyle - I'm Kyle, the head cook around here. Show me what you got with that tomato—prove you can be of use.")

//         playerChoice = confirm("Slice the tomato just like I asked = ok \nCook up a bowl of ramen instead of slicing the tomato = cancel")
//     }
// }

// independent thank for playing message
