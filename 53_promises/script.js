// Fetch, Promise, async/await

// console.log("action 1")  // 1ms
// console.log("action 2")  // 1ms
// console.log("action 3")  // 1ms

// Promise status: pending, fulfilled, rejected

async function fetchUsers() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")  // 200ms
    const usersJson = await users.json()  // 100 ms
    // console.log(usersJson)  // Response: ReadableStream => string => JSON (object)

    for (let i = 0; i < usersJson.length; i++) {
        const user = usersJson[i]
        console.log(user)
    }
}

fetchUsers()  // async

console.log("action 1")  // 1ms
console.log("action 2")  // 1ms
console.log("action 3")  // 1ms

// sync then async

// setTimeout(() => {
//     console.log(users)  // Promise: fulfilled
// }, 1000)
