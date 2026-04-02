// Valid ages are from 18 to 100 (both including)
const ages = [12, 35, 16, 37, 0, 220]

// Filter valid ages with a for loop
const validAges = []
for (let i = 0; i < ages.length; i++) {
    const age = ages[i]
    if (age >= 18 && age <= 100) {
        validAges.push(age)
    }
}
console.log(validAges)

// Filter valid ages with .forEach
const validAges2 = []
ages.forEach((age) => {
    if (age >= 18 && age <= 100) {
        validAges2.push(age)
    }
})
console.log(validAges2)

// Parse data1 with .map
const data1 = ["1", "2", "3", "4s"]  // [1, 2, 3, 0]

const mappedData = data1.map((item) => {
    if (isNaN(Number(item))) {
        return 0
    }
    return Number(item)
})

console.log(mappedData)

// Filter data2 with .filter
const data2 = ["1", "2", "3", "4s"]
const filteredData = data2.filter((item) => {
    if (!isNaN(Number(item))) {
        return item
    }
})
console.log(filteredData)

// Calculate the total sum of valid numbers with .reduce
const data = ["1", "2", "3", "4s"]
const totalSum = data.reduce((total, item) => {
    const numItem = Number(item)
    if (!isNaN(numItem)) {
        total += numItem
    }
    return total
}, 0)
console.log(totalSum)
