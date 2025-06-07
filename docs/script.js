'use strict';

const namePlayer0 = prompt('Enter the first player name : ');
const namePlayer1 = prompt('Enter the second player name : ');

document.getElementById('name--0').textContent = namePlayer0;
document.getElementById('name--1').textContent = namePlayer1;

let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let currentScore0El = document.getElementById('current--0');
let currentScore1El = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');


const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNew = document.querySelector('.btn--new');
let display = document.querySelector('.retry-again');

const xButton = document.querySelector('.x');




let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
currentScore0El.textContent = Number(0);


let diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

buttonRoll.addEventListener('click', function(){
    let dice = Math.trunc(Math.random()*6 +1);
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if(dice!=1){
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent= 0;
        activePlayer = activePlayer === 0 ?  1 :  0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        
    }
})

buttonHold.addEventListener('click', function(){
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer]>=100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        displayWinner();
        
    }
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ?  1 :  0;
    
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
   
})
buttonNew.addEventListener('click', function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    document.querySelector('.retry-again').classList.add('hidden');
    document.querySelector('.dice').classList.add('hidden');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--winner');
})

function displayWinner(){
    if(activePlayer === 0){
        document.querySelector('.player-name').textContent = namePlayer0;
    }else{
        document.querySelector('.player-name').textContent = namePlayer1;
    }
    document.querySelector('.retry-again').classList.remove('hidden');
}

xButton.addEventListener('click', function(){
    document.querySelector('.retry-again').classList.add('hidden');
})