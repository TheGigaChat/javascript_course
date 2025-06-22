// arrays
const arr = []

// add and remove
arr.push(23, 22, 21, 29)
arr.pop()
arr.unshift("I am the first")
arr.shift()

// return the value
arr.push(29)
const lastElement = arr.pop()
arr.unshift("I am the first")
const firstElement = arr.shift()
console.log(lastElement)
console.log(firstElement)
console.log(arr)
console.clear()

// access by indexes
const shelf = [true, "apple", 10]
console.log(shelf[0])
console.log(shelf[1])
console.log(shelf[2])
console.log(shelf[3])
const shelfLength = shelf.length
console.log(shelfLength)
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

