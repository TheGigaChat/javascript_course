// Errors handling
// try catch

const num = 0
console.log(num)
try {
    num = 1
} catch (error) {
    console.error(error)
}

console.log(num)

// Custom errors
const age = prompt("Please type your age: ")
try {
    // open files
    if (age === null) {
        throw new Error("Age can not be null!")
    } if (isNaN(Number(age)) === true) {
        throw new Error("Age must be a number!")
    }
} catch(error) {
    alert(error)
} finally {
    // close files
}
