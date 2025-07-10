// Scoping Examples

let x = 5
console.log(x)

if (true) {
    console.log(x)
}

if (true) {
    let x = 10
    x++
    console.log(x)  // change only local variable
}
console.log(x)  // global is still the same

if (true) {
    x++
    console.log(x)
}
console.log(x)

if (true) {
    x = 1
    console.log(x)
}
console.log(x)

if (true) {
    let y = 1
    console.log(y)
}
// console.log(y)  // throws an error

if (true) {
    // console.log(y)  // throws an error
}
console.clear()


// Nested Local Scopes

if (true) {
    let x = 10
    console.log(x)
    if (true) {
        console.log(x)
        let y = 1
        console.log(y)
    }
    // console.log(y)  // throws an error
}

if (true) {
    let x = 20
    console.log(x)  // throws an error until we declare x in a local scope
}
