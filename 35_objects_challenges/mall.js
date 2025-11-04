// -------------------- Data --------------------
const stuff = [
  "water", "fire", "stone", "air", "earth", "fire",
  "banana", "water", "dust", "air", "earth", "fire"
];

const hero = {
  name: "Hero",
  hp: 100,
  damage: 10,
  speed: 500
};

// -------------------- PART 1: Inventory --------------------
const inventory = {
  water: 0,
  fire: 0,
  air: 0,
  earth: 0,

  addElements(list) {
    // TODO: build counts from a raw list (ignoring invalid elements)
  },

  addElement(element) {
    // TODO: increase the count of the corresponding element (ignoring invalid elements)
  },

  takeElement(element) {
    // TODO: decrease the count of the corresponding element (ignoring invalid elements)
    // If the element count is 0, display the message "You don't have this resource."
  },
}