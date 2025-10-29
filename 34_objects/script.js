// let heroHp = 100
// let heroDamage = 10

// let enemyHp = 50
// let enemyDamage = 15

// let enemy2Hp = 50
// let enemy2Damage = 10

// function battle() {
//     heroHp -= enemyDamage
//     enemyHp -= heroDamage
//     enemy2Hp -= heroDamage
//     console.log("Hero health is: " + heroHp)
//     console.log("Enemy health is: " + enemyHp)
//     console.log("Enemy2 health is: " + enemy2Hp)
// }

// console.log("Hero health is: " + heroHp)
// console.log("Enemy health is: " + enemyHp)
// console.log("Enemy2 health is: " + enemy2Hp)
// battle()

const hero = {
    name: "Hero",
    hp: 100,
    damage: 10,
    speed: 500
}

const enemy = {
    name: "Enemy",
    hp: 50,
    damage: 15,
    sound: function() {
        console.log("Arrr")
    },
    regenerate: function() {
        this.hp += 5
        console.log(this.name + " health is: " + this.hp)
    }
}

const healer = {
    name: "Healer",
    hp: 50,
    heal: 5,
}

function battle(attacker, defender) {
    defender.hp -= attacker.damage
    console.log(defender.name + " health is: " + defender.hp)
}

function heal(healer, healed) {
    healed.hp += healer.heal
    console.log(healed.name + " health is: " + healed.hp)
}

battle(enemy, hero)
battle(hero, enemy)
heal(healer, hero)
heal(healer, enemy)
enemy.sound()
enemy.regenerate()
