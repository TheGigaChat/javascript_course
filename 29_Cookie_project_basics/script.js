let count = 0

const countElement = document.getElementById("count")
const cookieElement = document.getElementById("cookie")

function increaseCount() {
    count++
    countElement.textContent = "Count: " + count
}

cookieElement.addEventListener('click', increaseCount)
