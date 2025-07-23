// challenges

// Challenge number: 1
// This function has one parameter `message`.
// The function should display the message in the console with the question mark in the end.
//
// Examples:
//  - displayQuestion(How are you) => "How are you?"
//  - displayQuestion(How are you?) => "How are you??"
//  - displayQuestion(How are you!) => "How are you!?"

// Solution
function displayQuestion(message) {
    const question = message + "?"
    return question
}

// Short Solution
function displayQuestion(message) {
    return message + "?"
}



// Challenge number: 2
// This function has two parameters `hours`, `payPerHour`.
// The function should calculate how much money a person get per `hours`.
//
// Examples:
//  - calculateEarnings(1, 1) => 1
//  - calculateEarnings(0, 1) => 0
//  - calculateEarnings(10, 10) => 100
//  - calculateEarnings(40, 100) => 4000

function calculateEarnings(hours, payPerHour) {
    return hours * payPerHour
}



// Challenge number: 3
// You have the array `plans`.
// This function has one parameter `plan`.
// The function should add a given `plan` to the beginning and the end of the `plans` array.
//
// ATTENTION! The function doesn't return anything!
//
// Example 1:
//   const plans = ["code"];
//   addPlanToBothEnds("eat");
//   console.log(plans): ["eat", "code", "eat"]
//
// Example 2:
//   const plans = ["sleep", "work"];
//   addPlanToBothEnds("read");
//   console.log(plans): ["read", "sleep", "work", "read"]

// Initial code
const plans = []
function addPlanToBothEnds(plan) {
    plans.unshift(plan)
    plans.push(plan)
}


// Challenge number: 4
// This function has two parameters `numbers[]`, `number`.
// The function should return true if a given array `numbers[]` contains a number that is greater than a given `number`.
// Oterwise it should return false.
//
// Examples
//  - containsNumberGreaterThan([2], 1) => true
//  - containsNumberGreaterThan([1], 2) => false
//  - containsNumberGreaterThan([1, 0, 2], 2) => false
//  - containsNumberGreaterThan([1, 0, 2], 1) => true
//  - containsNumberGreaterThan([], 0) => false

function containsNumberGreaterThan(numbers, number) {
    let response = false

    for (let i = 0; i < numbers.length; i++) {
        const numberFromArray = numbers[i]
        if (numberFromArray > number) {
            response = true
        }
    }

    return response
}

// Show the keyword return (optional)
