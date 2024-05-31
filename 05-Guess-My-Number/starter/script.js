'use strict';

let score = 20;
let highscore = 0;
let guessedNumber = getRandomInt(1, 20);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if(guess > 20 || guess < 1) {
        document.querySelector('.message').textContent = "Out of bounds value!";
    } else {
        if(guess != guessedNumber) {
            score--;
            if(score < 1) {
                document.querySelector('.message').textContent = "You lost, play again!";
                return;
            }
            document.querySelector('.score').textContent = score;
            if(guess > guessedNumber) {
                document.querySelector('.message').textContent = "Too high!";
            } else {
                document.querySelector('.message').textContent = "Too low!";
            }
            
        }
        if(guess == guessedNumber) {
            document.querySelector('.message').textContent = "Correct number!";
            document.querySelector('.number').textContent = guessedNumber;
            document.querySelector('.score').textContent = score;
            if(score > highscore)
            {
                highscore = score;
            }
            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('body').style.backgroundColor = '#60b347';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value='';
    
});