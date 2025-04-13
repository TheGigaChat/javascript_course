/* Logical Operators (!, &&, ||) */

// Logical NOT Operator (!)

if (!true) {  // not true
    console.log("This statement is true.")
} else {
    console.log("This statement is false.")
}

// Logical AND Operator (&&)
if (true && true) {  // if ANY statement is False -> the result is False
    console.log("This statement is true.")
} else {
    console.log("This statement is false.")
}

if (!true && true) {
    console.log("This statement is true.")
} else {
    console.log("This statement is false.")
}

// example

let houseAmount = 50;  // 1 house = 10 people
let peopleAmount = 500;

// check if there are enough houses on the street
if (houseAmount * 10 >= peopleAmount) {
    console.log("On the street are enough houses🤩")
} else {
    console.log("We need more houses😭")
}


// doesn't work properly
houseAmount = 50;  // 1 house = 10 people
peopleAmount = 500;
let groceryAmount = 1; // 1 grocery = 5 people

// check if there are enough buildings
if (houseAmount * 10 >= peopleAmount) {
    console.log("On the street are enough buildings🤩")

    if (groceryAmount * 5 >= peopleAmount) {
        console.log("On the street are enough buildings🤩")

    } else {
        console.log("We need more buildings!")
    }

} else {
    console.log("We need more buildings!")
}


// solution using logical operators
houseAmount = 50;  // 1 house = 10 people
peopleAmount = 100;
groceryAmount = 1; // 1 grocery = 5 people

// check if there are enough buildings
if (houseAmount * 10 > peopleAmount && groceryAmount * 5 > peopleAmount) {
    console.log("On the street are enough buildings🤩")

} else {
    console.log("We need more buildings!")
}


// Logical OR Operator (||)

if (false || false) {  // if ANY statement is True -> the result is True
    console.log("This statement is true.")
} else {
    console.log("This statement is false.")
}




let speedLimit = 90 // 90 kph OR 55 mph
let bus = 50;
let truck = 70;
let sportsCar = 90;

// check if there are any exceeds
if (bus > speedLimit || truck > speedLimit || sportsCar > speedLimit) {
    console.log("There are speeders☠️")

} else {
    console.log("No speeders have been detected🌼")
}
