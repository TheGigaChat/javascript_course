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

// TODO 1: Create player and enemy objects using the Unit class
const player = new Unit("Player", 110, 10)
const enemy = new Unit("Enemy", 100, 10)
const PLAYER_MAX_HP = player.getHp()
const ENEMY_MAX_HP = enemy.getHp()

// TODO 2: Get HTML elements (hp spans, button, log)
const playerHp = document.getElementById("player-hp")
const enemyHp = document.getElementById("enemy-hp")
const attackButton = document.getElementById("attack-btn")
const log = document.getElementById("log")
const playerBar = document.getElementById("player-bar")
const enemyBar = document.getElementById("enemy-bar")

// TODO 3: Implement battle logic function
function battle() {
    enemy.setHp(enemy.getHp() - player.getDamage())
    player.setHp(player.getHp() - enemy.getDamage())

    const message = "Player attacked enemy. Enemy hp: " + enemy.getHp()
    + ". Enemy attacked player. Player hp: " + player.getHp() + "."
    return message
}

// TODO 4: Update UI function
function updateUI(message) {
    playerHp.textContent = player.getHp()
    enemyHp.textContent = enemy.getHp()
    log.textContent = message
    playerBar.style.width = (player.getHp() / PLAYER_MAX_HP * 100) + "%"
    enemyBar.style.width = (enemy.getHp() / ENEMY_MAX_HP * 100) + "%"
}

// TODO 5: Winning check function
function winningCheck() {
    if (player.getHp() <= 0 && enemy.getHp() <= 0) {
        return "Both fighters are dead.."
    }
    if (player.getHp() <= 0) {
        return "Player is dead.."
    }
    if (enemy.getHp() <= 0) {
        return "Enemy is dead.."
    }
    return ""
}

// TODO 6: Game runs after each attack
function gameLoop() {
    const battleMessage = battle()
    const winningMessage = winningCheck()
    if (winningMessage === "") {
        updateUI(battleMessage)
    } else {
        updateUI(winningMessage)
        attackButton.disabled = true
    }
}
attackButton.addEventListener("click", gameLoop)
updateUI()
