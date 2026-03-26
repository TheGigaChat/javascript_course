// API challenges
// Use: Fetch, Promise, async/await

async function findMaxPriceProduct() {
    const products = await fetch("https://dummyjson.com/products")
    const productsJson = await products.json()  // {products: [{price: number}]}
    const productsArray = productsJson.products
    let maxPrice = 0

    for (let i = 0; i < productsArray.length; i++) {
        const product = productsArray[i]
        const price = product.price
        if (price > maxPrice) {
            maxPrice = price
        }
    }

    console.log(maxPrice)
}

findMaxPriceProduct()

async function getContriesOfThreeRandomUsers() {
    const countries = []

    for (let i = 0; i < 3; i++) {
        const randomUser = await fetch("https://randomuser.me/api/")
        const randomUserJson = await randomUser.json()  // {results: [{location: {contry: "string"}}]}
        const results = randomUserJson.results
        const user = results[0]
        const location = user.location
        const country = location.country
        countries.push(country)
    }

    console.log(countries)
}

getContriesOfThreeRandomUsers()
