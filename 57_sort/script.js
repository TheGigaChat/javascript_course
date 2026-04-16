// Sort and toSorted

// Code challenge
// You have the array cars
const cars = [
    {brand: "Toyota", year: 2018, price: 15000},
    {brand: "Porsche", year: 2023, price: 120000},
    {brand: "Tesla", year: 2021, price: 42000},
    {brand: "Audi", year: 2019, price: 28000},
]
// 1. Sort by year (descending)
// 2. Sort by brand (descending)
// You should console.log() a new array (don't mutate it!)

const sortedCarsByYear = cars.toSorted((a, b) => b.year - a.year)
console.log(sortedCarsByYear)

const sortedCarsByBrand = cars.toSorted((a, b) => b.brand.localeCompare(a.brand))
console.log(sortedCarsByBrand)
