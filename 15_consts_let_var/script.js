/* VAR vs LET vs CONST */


// var is a legasy code
var myCar = "Lamborghini"
console.log(myCar)


// before this point we used let, it creates variables that we can reassign.
let favouriteCoffee = "Espresso"
console.log("My favourite coffee is: " + favouriteCoffee)

// after 5 years
favouriteCoffee = "Latte"
console.log("My favourite coffee is: " + favouriteCoffee)


// // consts create constants of data that can't be changed
// const capitalCity = "London"
// console.log(capitalCity + " is the capital of great britain.")

// // after 5 years
// console.log(capitalCity + " is the capital of great britain.")


// comparison of let and const
// 1000 lines

let capitalCity = "London"
console.log(capitalCity + " is the capital of great britain.")

// after 5 years
capitalCity = "Manchester"
console.log(capitalCity + " is the capital of great britain.")


// rule what to choose
let favouriteAnimal = "Cat"
favouriteAnimal = "Dog"
