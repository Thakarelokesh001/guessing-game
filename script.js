'use strict';
/*
const con = document.querySelector('.message').textContent;
console.log(con)

document.querySelector('.message').textContent = '🥳Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
*/
// const nameInput = prompt("Enter your name to play the game")
// const nameguess = document.querySelector('.name').textContent = `Guess Number ${nameInput}`

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//console.log(number)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //    console.log(guess,typeof guess)

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';
  } 
  else if (guess === secretNumber)
   {
    document.querySelector('.message').textContent = '🥳 Correct Number!'; 
    // document.querySelector('body').style = 'background-color:green'
    document.querySelector('body').style.backgroundColor='#60b347'
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent = secretNumber;
    
    if(score>highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore
    }

  } 
  else if (guess > secretNumber) 
  {
    if (score > 1) 
    {
      document.querySelector('.message').textContent = 'Too High';
      score = score - 1; //score-=1 or score--;
      document.querySelector('.score').textContent = score;
    } 
    else 
    {
      document.querySelector('.message').textContent = '🙁 You loose the Game';
      document.querySelector('.score').textContent = 0;
    }

  }
   else if (guess < secretNumber) 
   {
      if(score>1)
      {
        document.querySelector('.message').textContent = 'Too Low';
        score = score - 1; //score-=1 or score--;
        document.querySelector('.score').textContent = score;
      }
      else
      {
        document.querySelector('.message').textContent = '🙁 You loose the Game';
        document.querySelector('.score').textContent = 0;
      }
  }
});

document.querySelector('.again').addEventListener('click',function(){
    // document.querySelector('.score').value=score;
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
})