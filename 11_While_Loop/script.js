/* While Loop */


// basic example
let number = 1
while (number < 10) {
    console.log(number)
    number = number + 1;
}

// solves the problem
let number2 = 1;
console.log(number2);
number2 = number2 + 1;
console.log(number2);
number2 = number2 + 1;
console.log(number2);
number2 = number2 + 1;
console.log(number2);
number2 = number2 + 1;
console.log(number2);
number2 = number2 + 1;
console.log(number2);
number2 = number2 + 1;
console.log(number2);
number2 = number2 + 1;
console.log(number2);
number2 = number2 + 1;
console.log(number2);
number2 = number2 + 1;


// infinite loop
while (true) {
    console.log("infinite loop")
    break  // will exit the while loop to prevent an infinite loop
}


// while vs if
let num = 0
if (num < 10) { // true or false
    // body
    console.log(num)
}
console.log("The next section.")

let score = 0
while (score < 10) { // true or false
    // body
    score = score + 1
    console.log(score)
}
console.log("The next section.")


// another example
let string = ""
while (string.length < 7) {  // true
    string = string + "b"  // concatination
    if (string.length > 2) {
        string = string + "c"
    }
    console.log(string)
}


// code challenge. You have a word = "" and speed = 0.
// Add letter "a" to the name until the name length is less that 4.
// If the length is more or equal to 4, increase the speed by 2.
// If the speed is more than 5, finish the loop and print the message.
// that all cycles have finished.

let word = ""
let speed = 0
while (speed <= 5) {
    if (word.length < 4) {
        word = word + "a"
        console.log(word)
    } else {
        speed = speed + 2
        console.log(speed)
    }
}
console.log("All cycles have finished")
