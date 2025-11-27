// Classes

// const enemy = {
//     hp: 100,
//     damage: 10,
//     special: undefined
// }

class Unit {
    name
    hp
    damage
    constructor(name, hp, damage) {
        this.name = name
        this.hp = hp
        this.damage = damage
    }
    getHp() {
        return this.hp
    }
    getDamage() {
        return this.damage
    }
    setHp(hp) {
        this.hp = hp
    }
}

function generateHundredUnits() {
    for (let i = 0; i < 100; i++) {
        const enemy = new Enemy(10 * i + 1, i)
        console.log(enemy)
    }
}

// generateHundredUnits()


// const enemy = new Unit("enemy", 100, 10)
// const ally = new Unit("ally", 100, 20)

function battle() {
    ally.setHp(ally.getHp() - enemy.getDamage())
    enemy.setHp(enemy.getHp() - ally.getDamage())
}

console.log(enemy, ally)
battle()
console.log(enemy, ally)
