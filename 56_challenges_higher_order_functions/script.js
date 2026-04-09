// Map, Filter or Reduce

// Find only small balls and convert them into objects
// function findAndConvertSmallBalls(sizes) {}
// size: small | medium | large
// ["large", "small", "medium", "small"] -> [{ name: "ball", size: "small" }, { name: "ball", size: "small" }]

function findAndConvertSmallBalls(sizes) {
    // ["large", "small", "medium", "small"] -> ["small", "small"]
    const filteredSizes = sizes.filter((size) => {
        if (size === "small") {
            return size
        }
    })

    // ["small", "small"] -> [{ name: "ball", size: "small" }, { name: "ball", size: "small" }]
    const mappedSizes = filteredSizes.map((size) => {
        const ballObj = { name: "ball", size: size }
        return ballObj
    })

    return mappedSizes
}

console.log(findAndConvertSmallBalls(["large", "small", "medium", "small"]))


// Calculate how many swords can be crafted
// function craftMaximumSwords(resources) {}
// Sword craft: 3 stone + 5 wood
// [{ name: "stone", quantity: 6 }, { name: "wood", quantity: 10 }] -> {name: "sword", quantity: 2}

function craftMaximumSwords(resources) {
    let stone = 0
    let wood = 0
    const swordObj = resources.reduce((sword, resource) => {
        sword  // {name: "sword", quantity: 2}
        resource  // { name: "wood", quantity: 10 }

        if (resource.name === "stone") {
            stone = resource.quantity
        }
        if (resource.name === "wood") {
            wood = resource.quantity
        }

        while (stone >= 3 && wood >= 5) {
            stone -= 3
            wood -= 5
            sword += 1
        }

        // sword.quantity = Math.min(
        //     Math.floor(stone / 3), Math.floor(wood / 5)
        // )

        return sword

    }, {name: "sword", quantity: 0})

    return swordObj
}

console.log(craftMaximumSwords([{ name: "stone", quantity: 6 }, { name: "wood", quantity: 10 }]))
