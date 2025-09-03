// Modulo
console.log(4 % 2)  // remainder of a division
console.log(5 % 3)  // 5 - 3 (the highest divisible number) = 2 remainder


// Usage
// 1. Checking for Even or Odd Numbers: 
const number = 5
if (number % 2 == 0) {
    console.log("This number is even.")
} else if (number % 1 == 0) {
    console.log("This number is odd.")
}


// 2. Use modulo inside loops:
for (let i = 0; i < 1000; i++) {
    if (i % 100 == 0) {
        console.log(i)
    }
}


// Code Challenges (Time Conversions):
const totalSeconds = 150
const minutes = Math.floor(totalSeconds / 60)
const remainingSeconds = 150 % 60
console.log("Your time is " + minutes + " mitunes and " + remainingSeconds + " seconds.")
// "Your time is 2 minutes and 30 seconds."
