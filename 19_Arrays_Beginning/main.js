// arrays
const ingredient = "🌶️"
const ingredients = ["🍄", "🥓", "🥒", "🥔"]

// add and remove
ingredients.push("🥕")
ingredients.pop()
ingredients.unshift("🥩")
ingredients.shift()

// return the value
const ingredientsLength = ingredients.push("🧀")
const lastElement = ingredients.pop()
ingredients.unshift("🍞")
const firstElement = ingredients.shift()
console.log(lastElement)
console.log(firstElement)
console.log(ingredients)
console.clear()

// access by indexes
const shelf = [true, "apple", 10]
console.log(shelf[0])
console.log(shelf[1])
console.log(shelf[2])
console.log(shelf[3])
const shelfLength = shelf.length
console.log(shelfLength)
const lastElementIndex = shelfLength - 1
console.log(lastElementIndex)
console.clear()


// code challenge
// you have the array that calls items
// no mater how many items you add, the program should display each element from an array in the console on a new line
// example
// const items = [1, 2, 3]
// console.log(items[0])
// console.log(items[1])
// console.log(items[2])

const items = [1, 2, 3, true, false]
for (let i = 0; i < items.length; i++) {
    const item = items[i]
    console.log(item)
}
console.clear()
