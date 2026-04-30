// Set - collection of unique values

const set = new Set();

set.add(1)
set.add(2)
set.add(2)
set.delete(3)
set.clear()
set.add(1)
set.add(2)
const setResult = set.has(1)

console.log(set, setResult)


const array = []

array.push(1)
array.push(2)
array.push(2)
array.push(3)
array.push(4)
array.push(5)
array.shift()
array.pop()
array.splice(2, 1)
const result = array.includes(3)
array[3] = 100
array[1] = 5

console.log(array, result)
