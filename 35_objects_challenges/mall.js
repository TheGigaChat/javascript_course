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
  },

  addElement(element) {
    // TODO: increase the count of the corresponding element (ignoring invalid elements)
  },

  takeElement(element) {
    // TODO: decrease the count of the corresponding element (ignoring invalid elements)
    // If the element count is 0, display the message "You don't have this resource."
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


// -------------------- PART 2: Alchemy Lab --------------------
const alchemyLab = {
  // 1 water, 2 air => speedPotion{speed: 50}
  // 2 fire, 1 earth => powerPotion{damage: 5}
  // 2 water, 1 earth => healthPotion{hp: 30}

  craftPotion(potionName, inventory) {
    // TODO: craft a potion using the recipes (ignoring invalid names)
    // if in the inventory is not enough recources, display a message.
    // when you craft a potion, you should take the recources from the inventory.
  },
}

console.log("\n== PART 2: Craft potions ==");
const p1 = alchemyLab.craftPotion("speedPotion", inventory);
// You don't have enough recourses.
const p2 = alchemyLab.craftPotion("powerPotion", inventory);
const p3 = alchemyLab.craftPotion("healthPotion", inventory);

console.log("Craft results:", p1, p2, p3);
// Craft results: {} {damage: 5} {hp: 30}

console.log("Inventory after crafting:", {
  water: inventory.water, fire: inventory.fire, air: inventory.air, earth: inventory.earth
});
// Inventory after crafting: {water: 1, fire: 0, air: 0, earth: 0}
