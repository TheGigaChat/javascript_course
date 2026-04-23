export default function attack(player, enemy) {
    enemy.hp -= player.damage
}

export function isAlive(entity) {
    if (entity.hp > 0) {
        return true
    } else {
        return false
    }
}