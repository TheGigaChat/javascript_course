// == vs ===

// What is the difference
// 10 === "10" → false
// 10 == "10" → true

// Why
// "05" == 5
// "5.0" == 5
// "5a" == 5

// Problem with booleans
// true == "1"
// false == ""

// null and undefined can use ==
// null == undefined
// null === undefined
// null == 0

// x == null
// x === null || x === undefined

// Empty string, zero, whitespace
// "" == 0 → true
// "\n" == 0 → true
// " " == 0 → true

// === never gets these wierd results

// Arrays and Objects
// [] === []
// { } === { }

// wierd examples
// [1,2] == "1,2" → true
// [] == 0 → true
// [] == "" → true

// NaN problem
// NaN == NaN → false
// NaN === NaN → false
// Number.isNaN(value)

// conclusion
// === is a standard
// x == null is only one exception


// quizz
// console.log("5" == 5)

// console.log("0" == false)

// console.log("" == 0)

// console.log(null == undefined)

// console.log(null === undefined)

// console.log([] == 0)

// console.log([1] == 1)

// console.log([] == [])

// console.log(NaN == NaN)

// console.log({ } == "[object Object]")


// quizz answers
// console.log("5" == 5) → true

// console.log("0" == false) → true

// console.log("" == 0) → true

// console.log(null == undefined) → true

// console.log(null === undefined) → false

// console.log([] == 0) → true

// console.log([1] == 1) → true

// console.log([] == []) → false

// console.log(NaN == NaN) → false

// console.log({ } == "[object Object]") → true
