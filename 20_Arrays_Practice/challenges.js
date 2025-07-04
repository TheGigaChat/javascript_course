// Part 1: “Stock the Fridge”
// • Take each item from newProducts and add it to the end of fridge.
// • After the loop, print out the updated fridge array.

// Starting code
const fridge = ["🍞", "🧀", "🌶️"];
const newProducts = ["🍄", "🥓", "🥒", "🥔"];

// Solution
for (let i = 0; i < newProducts.length; i++) {
    const currentProduct = newProducts[i]
    fridge.push(currentProduct)
}

// Result
console.log(fridge);
// → ["🍞","🧀","🌶️","🍄","🥓","🥒","🥔"]



// Part 2: “Clear the Incoming List”
// • Remove every element from the newProducts array until it’s empty.
// • After you’re done, log the (now empty) newProducts.

// Starting code continues
// newProducts still exists from Part 1

// Solution
while (newProducts.length > 0) {
    newProducts.pop()
}

// Result
console.log(newProducts);
// → []



// Part 3: “Calculate the Total Cost”
// • Given newProductsCosts (e.g. [10,20,6,4]), compute the sum of all prices into totalPrice.
// • Print out the final totalPrice.

// Starting code
const newProductsCosts = [10, 20, 6, 4];
let totalPrice = 0;

// Solution
for (let i = 0; i < newProductsCosts.length; i++) {
    const currentPrice = newProductsCosts[i]
    totalPrice += currentPrice
}

// Result
console.log(totalPrice);
// → 40



// Part 4: “Find the Highest Price”
// • Loop through newProductsCosts to find the highest number.
// • Store it in a maximum variable (start it at 0).
// • Log out the maximum.

// Starting code
let maximum = 0;

// Solution
for (let i = 0; i < newProductsCosts.length; i++) {
    const currentPrice = newProductsCosts[i]
    if (currentPrice > maximum) {
        maximum = currentPrice
    }
}

// Result
console.log(maximum);
// → 20



// Part 5: “Find the Lowest Price”
// • Loop through newProductsCosts to find the smallest number.
// • Initialize minimum to Infinity (so any real price is smaller).
// • Log out the minimum.

// Starting code
let minimum = Infinity;

// Solution
for (let i = 0; i < newProductsCosts.length; i++) {
    const currentPrice = newProductsCosts[i]
    if (currentPrice < minimum) {
        minimum = currentPrice
    }
}

// Result
console.log(minimum);
// → 4
