/* Comparison Operators */

// ===

if (true) {  // obvious
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}

if (10 === 10) {  // also true but with triple equal operator
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}

if (10 === "10") {  // false
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}

if ("Bob" === "bob") {
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}


// !, !==

if (!true) {  // false
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}

if (!false) {  // true
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}

if (!!false) {  // false
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}

if (!!!!false) {  // false, can add as many you want, but there is no sense
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}

if ("cat" !== "dog") {  // true
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}


// <, >, <=, >=

if (10 < 100) {  // grater than, less than
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}

if (10 <= 10) {  // grater than, less than
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}

let myWordLength1 = "lslsls".length
let myWordLength2 = "lslsls".length
console.log(myWordLength1)

if (myWordLength1 <= myWordLength2) {  // by length
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}
