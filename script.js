'use strict';

//generating random number
let flag = 1;
let answer = Math.trunc(Math.random() * 20) + 1;
console.log(answer);
let score = 10;
let highScore = 0;
//change start guessing class 'message' function
function guessOutput(input) {
    document.querySelector('.message').textContent = input;
}

function scoreUpdate() {
    score--;
    document.querySelector('.score').textContent = score;
}

function findingHighScore() {
    if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}

//button check press
document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    if (!guess) {
        document.querySelector('.message').textContent = 'No number entered!';
    } else if (score == 0) {
        guessOutput('You Lose.');
    } else if (flag === 0) {
        guessOutput('You already won!');
    } else if (guess > answer) {
        scoreUpdate();
        guessOutput('Too high!');
    } else if (guess < answer) {
        scoreUpdate();
        guessOutput('Too low!');
    } else if (guess == answer) {
        guessOutput('You won!');
        flag = 0;
        document.querySelector('body').style.backgroundColor = '#60b347';
        findingHighScore();
    }
});

//button again press
document.querySelector('.again').addEventListener('click', function() {
    flag = 1;
    score = 10;
    answer = Math.trunc(Math.random() * 20) + 1;
    console.log(answer);

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.score').textContent = 10;
});