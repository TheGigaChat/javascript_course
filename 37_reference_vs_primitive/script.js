// Problem with loging objects
const inventory = {
  water: 0,
  fire: 0,
  air: 0,
  earth: 0
}
console.log(inventory)

inventory["air"] += 1
console.log(inventory)

// Reference data types behavior
const t = [1, 2, 3]
const p = t
console.log(t)
console.log(p)

t.push(4)
console.log(t)
console.log(p)

// Coding Quiz
let myVariable = 22
let myArray = []
let num = myVariable

console.log(myVariable)
console.log(myArray)
console.log(num)

// Coding Quiz
let numbers = [1, 2, 3]
let object1 = {num: 22}
let object2 = {num: 22}

// object1["letter"] = "a"

console.log(numbers)
console.log(object1)
console.log(object2)
