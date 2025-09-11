let count = 0

const countElement = document.getElementById("count")
const buttonElement = document.getElementById("cookie")

function increaseCounter() {
    count++
    countElement.textContent = "Count: " + count;
}

buttonElement.addEventListener("click", increaseCounter)
