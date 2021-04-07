"use strict";

const STONE = 'pierre';
const PAPER = 'feuille';
const SCISSORS = 'ciseaux';

const WINNER_USER = 1;
const WINNER_COMPUTER = 2;

let choices = [
    STONE,
    PAPER,
    SCISSORS
];

let userScore = 0;
let computerScore = 0;

while (userScore < 2 && computerScore < 2) {
    let userChoice;
    while (choices.indexOf(userChoice) < 0) {
        userChoice = prompt(`Entrez ${choices.join(', ')}`, choices[1]);
        userChoice = userChoice.toLowerCase();
    }

    let computerChoice = choices[getRandomInt(3)];

    let winner = compare(userChoice, computerChoice);
    if (winner == WINNER_USER) {
        userScore++;
    } else if (winner == WINNER_COMPUTER) {
        computerScore++;
    }

    console.log(`Vous : ${userScore}, ordinateur : ${computerScore}`);
}

if (userScore >= 2) {
    console.log('Félicitations ! vous avez gagné !');
} else {
    console.log('Dommage ! vous avez perdu !');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function compare(user, computer) {
    console.log('compare : ' + user + ' versus ' + computer);
    if (user == computer) {
        return null;
    }

    if (user == STONE) {
        if (computer == PAPER) {
            return WINNER_COMPUTER;
        }

        if (computer == SCISSORS) {
            return WINNER_USER;
        }
    } else if (user == PAPER) {
        if (computer == STONE) {
            return WINNER_USER;
        }

        if (computer == SCISSORS) {
            return WINNER_COMPUTER;
        }
    } else if (user == SCISSORS) {
        if (computer == PAPER) {
            return WINNER_USER;
        }

        if (computer == STONE) {
            return WINNER_COMPUTER;
        }
    }
}
