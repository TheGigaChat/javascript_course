import { hero as player, enemy } from "./entity.js"
import damage from "./gameLogic.js"


console.log(enemy.hp)
damage(player, enemy)
console.log(enemy.hp)
