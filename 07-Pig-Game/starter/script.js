'use strict';

const newGame = function () {
    document.querySelector('#score--0').textContent = '0';
    document.querySelector('#score--1').textContent = '0';
    document.querySelector('#current--0').textContent = '0';
    document.querySelector('#current--1').textContent = '0';
    // player 1 is starting
}
const diceRoll = function dieRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

newGame();
document.querySelector('.btn--new').addEventListener('click', newGame);

let score1 = Number(document.querySelector('#score--0').textContent);
let score2 = Number(document.querySelector('#score--1').textContent);

let current1 = 0;
let current2 = 0;

let player1 = true;
let player2 = false;

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const changeTurn = function() {
    if(player1) {
        score1 += current1;
        document.querySelector('#score--0').textContent = `${score1}`;

        if(score1 >= 100){
            document.querySelector('.dice').classList.add('hidden');
            document
                .querySelector(`.player--0}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--0}`)
                .classList.remove('player--active');
        }

        current1 = 0;
        document.querySelector('#current--0').textContent = '0';
        
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
        player1 = false;
    }
    else {
        score2 += current2;
        document.querySelector('#score--1').textContent = `${score2}`;
        
        if(score2 >= 100){
            document.querySelector('.dice').classList.add('hidden');
            document
                .querySelector(`.player--1}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--1}`)
                .classList.remove('player--active');
        }
        current2 = 0;
        document.querySelector('#current--1').textContent = '0';
        
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');

        player1 = true;
    }
}

btnRoll.addEventListener('click', function() {
    if(player1) {
        current1 += diceRoll();
        if(diceRoll() === 1) {
            current1 = 0;
            changeTurn();
        }
        document.querySelector('#current--0').textContent = `${current1}`;
    } else {
        current2 += diceRoll();
        if(diceRoll() === 1) {
            current2 = 0;
            changeTurn();
        }
        document.querySelector('#current--1').textContent = `${current2}`;
    }
});

btnHold.addEventListener('click', changeTurn);