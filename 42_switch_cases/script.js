// Switch statement

let foodAmount = 0
const dogName = "Bob"

if (dogName === "Bob") {
    foodAmount = 1
    console.log("Your food is ready Bob.")
} else if (dogName === "Bob") {
    foodAmount = 3
    console.log("Have a nice meal Gary!")
} else {
    foodAmount = 2
    console.log("Default food amount for a new dog.")
}

switch (dogName) {
    case "Bob":
        foodAmount = 1
        console.log("Your food is ready Bob.")
        break
    case "Gary":
        foodAmount = 3
        console.log("Have a nice meal Gary!")
        break
    default:
        foodAmount = 2
        console.log("Default food amount for a new dog.")
        break
}
