"use strict";

let player = {
    name: "player",
    hp: 20,
    strength: 0,
    defense: 0,
    isAlive: function () {
        return this.hp > 0;
    }
};

let dungeonMaster = {
    name: "dungeonMaster",
    hp: 25,
    strength: 6,
    defense: 4,
    isAlive: function () {
        return this.hp > 0;
    }
};

let weapons = {
    wood: 2,
    iron: 5,
    magical: 10
};

let armours = {
    wood: 1,
    iron: 3,
    magical: 5
};

let form = document.querySelector('form#form');
let resultTitle = document.querySelector('[data-result-title]');
let resultDetail = document.querySelector('[data-result-detail]');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let weapon = document.querySelector('input[name="weapon"]:checked');
    let chosenWeapon = weapon.value;
    player.strength = weapons[chosenWeapon];

    let armour = document.querySelector('input[name="armour"]:checked');
    let chosenArmour = armour.value;
    player.defense = armours[chosenArmour];

    startBattle();
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startBattle() {
    player.hp = randomInt(20, 25);
    dungeonMaster.hp = randomInt(25, 35);

    resultDetail.innerHTML = "";

    while (dungeonMaster.isAlive() && player.isAlive()) {
        let dmDamages = randomInt(1, dungeonMaster.strength) - player.defense;

        let damageMessage;
        if (dmDamages > 0) {
            player.hp -= dmDamages;
            damageMessage = `Il vous inflige ${dmDamages} points de dégâts ! `;
        } else {
            damageMessage = `Il vous rate ! `;
        }
        if (player.isAlive()) {
            damageMessage += `Heureusement, il vous reste <strong>${player.hp} points de vie</strong>`;
        } else {
            damageMessage += `Il vous a eu ! `;
        }
        let log = document.createElement('li');
        log.innerHTML = "Le Maître du Donjon attaque ! " + damageMessage;
        resultDetail.appendChild(log);

        if (player.isAlive()) {
            let playerDamages = randomInt(1, player.strength) - dungeonMaster.defense;
            let damageMessage;
            if (playerDamages > 0) {
                dungeonMaster.hp -= playerDamages;
                damageMessage = `Vous lui infligé ${playerDamages} points de dégâts ! `;
            } else {
                damageMessage = `Vous l'avez raté ! `;
            }
            if (dungeonMaster.isAlive()) {
                damageMessage += `Malheureusement, il lui reste <strong>${dungeonMaster.hp} points de vie</strong>`;
            } else {
                damageMessage += `Vous l'avez eu ! `;
            }
            let log = document.createElement('li');
            log.innerHTML = "A votre tour ! " + damageMessage;
            resultDetail.appendChild(log);
        }
    }

    if (player.isAlive()) {
        resultTitle.textContent = "Vous avez triomphé du Maître du Donjon !";
    } else {
        resultTitle.textContent = "Le mal triomphe !";
    }
}
