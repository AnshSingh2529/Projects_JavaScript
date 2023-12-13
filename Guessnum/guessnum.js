let randomNumber = parseInt(Math.random() * 100 + 1);
let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessfield');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastresult');
let loworhi = document.querySelector('.loworhigh');
let StartOver = document.querySelector('.resultparas');

let p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a Valid Number');
  } else if (guess < 1) {
    alert('Please enter a Number more than One');
  } else if (guess > 100) {
    alert('Please enter a Number less than Hundred');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displaymessage(`Game Over. Random number was ${randomNumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomNumber) {
    displaymessage(`You guessed it right`);
    endgame();
  } else if (guess < randomNumber) {
    displaymessage(`You guessed number is Too low`);
  } else if (guess > randomNumber) {
    displaymessage(`You guessed number is Too high`);
  }
}

function displayguess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `[${guess}]  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  StartOver.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebtn = document.querySelector('#newGame');
  newgamebtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);
    displaymessage('');
    playgame = true;
  });
}
