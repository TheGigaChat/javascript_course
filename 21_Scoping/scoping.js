// First Example

const myVariable = 1  // scope creates boundaries
console.log(myVariable)

if (myVariable === 1) {
    const myVariable = 2
    console.log(myVariable)
}

for (let i = 0; i < 2; i++) {
    const myVariable = 3
    console.log(myVariable + i)
}
console.clear()


// Second example

let x = 5
console.log(x)

if (true) {
    console.log(x)
}

if (true) {
    let x = 10
    x++
    console.log(x)
}
