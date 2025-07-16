// Function - a block of reusable code.
function email() {
    console.log("Hi!")
    console.log("Something important...")
    console.log("All the best, Bob")
}

// send to friend1
email()

// send to friend2
email()


// Arguments and Parameters
function emailParam(mainPart) {  // mainPart is a variable and it is called a Parameter
    console.log("Hi!")
    console.log(mainPart)
    console.log("All the best, Bob")
}

// send to friend1
emailParam("How are you?")  // "How are you?" is a message that we send to the function and it is called an Argument

emailParam("Something important..")  // we can send different messages to the funciton



// Return keyword
function emailReturn(message) {
    console.log("Hi!")
    console.log(message)
    console.log("All the best, Bob")

    // send back a responce that the message has been sent successfully
    return "Arrived"
}

const emailResponce = emailReturn("message")  // emailResponce is equal to "Arrived"
console.log(emailResponce)
