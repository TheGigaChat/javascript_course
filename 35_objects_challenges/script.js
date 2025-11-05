// object (key: value)

const fruit1 = {
  "banana": 1,
}

const fruit2 = {
  banana: "myBanana",
}

console.log(fruit1)
console.log(fruit2)


// 1 way
console.log(fruit1.banana)

// 2 way
const key = "banana"
console.log(fruit1[key])


// mall.js implementation

// -------------------- Data --------------------
const stuff = [
  "water", "fire", "stone", "air", "earth", "fire",
  "banana", "water", "dust", "air", "earth", "fire"
]

// -------------------- PART 1: Inventory --------------------
const inventory = {
  water: 0,
  fire: 0,
  air: 0,
  earth: 0,

  addElements(list) {
    // TODO: increase counts for valid elements (ignoring invalid elements)
    for (let i = 0; i < list.length; i++) {
      const element = list[i]

      if (element === "water") {
        this.water++
      }
      if (element === "fire") {
        this.fire++
      }
      if (element === "air") {
        this.air++
      }
      if (element === "earth") {
        this.earth++
      }

    }
  },

  addElement(element) {
    // TODO: increase the count of the corresponding element (ignoring invalid elements)
    if (this[element] !== undefined) {
      this[element]++
    }
  },

  takeElement(element) {
    // TODO: decrease the count of the corresponding element (ignoring invalid elements)
    // If the element count is 0, display the message "You don't have this resource."
    if (this[element] !== undefined) {
      if (this[element] === 0) {
        console.log("You don't have this resource")
      } else {
        this[element]--
      }
    }
  },
}

console.log("== PART 1: Build inventory ==");
inventory.addElements(stuff)
console.log("Inventory after addElements:", inventory);
// Inventory after addElements: {water: 2, fire: 3, air: 2, earth: 2, ...}

inventory.addElement("water");
inventory.addElement("water");
inventory.addElement("fire");
inventory.addElement("papaya"); // invalid => does nothing
console.log("Inventory after addElement:", inventory);
// Inventory after operations: {water: 4, fire: 4, air: 2, earth: 2}

inventory.takeElement("fire");
inventory.takeElement("banana"); // invalid => does nothing
inventory.takeElement("air");
inventory.takeElement("air");
inventory.takeElement("air"); // hits zero => "You don't have this resource."
console.log("Inventory after takeElement:", inventory);
// Inventory after operations: {water: 4, fire: 3, air: 0, earth: 2}
