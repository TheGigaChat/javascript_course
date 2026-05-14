// set code challenge

// implement the function uniqueWords(words)
// return a unique array of words
// filter in the case-sensitive way
// but result should preserve the original case
// you must use Set() in a solution
function uniqueWords(words) {
    const set = new Set()
    const resultArray = []

    for (const word of words) {
        const wordLowerCase = word.toLowerCase()
        if (!set.has(wordLowerCase)) {
            set.add(wordLowerCase)
            resultArray.push(word)
        }
    }

    return resultArray
}

const words = ["I", "he", "She", "ShE", "it", "It", "HE", "HE"]
let wordLowerCase = "he"
const wordsLowerCase = ["i", "he", "she", "it"]  // it will be a set
const resultArray = ["I", "he", "She", "it"]
console.log(uniqueWords(words))  // ["I", "he", "She", "it"]