const isLazy = true
const weather = "rain"

if (isLazy) {
    console.log("😴")
} else {
    console.log("🐕")
}

// good use
const petEmoji = isLazy ? "😴" : "🐕";
console.log(petEmoji)

if (isLazy && weather === "rain" || !isLazy && weather === "sunny") {
    console.log("A long condition😭")
}

// bad use
isLazy && weather === "rain" || !isLazy && weather === "sunny" ? console.log("A long condition😭") : ""
