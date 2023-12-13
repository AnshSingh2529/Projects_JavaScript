let boxes = document.querySelectorAll('.box');
let message = document.querySelector('.msg');
let turnO = true;
let newgame = document.querySelector('.new_game');
let resetGame = document.querySelector('.reset_btn');

// Total  winning patterns.
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener('click', function () {
    if (turnO) {
      box.innerHTML = 'O';
      turnO = false;
    } else {
      box.innerHTML = 'X';
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

// for erase the game.
const resetbtn = () => {
  turnO = true;
  enableGame();
  message.classList.add('hide');
};
// restart the game.
const enableGame = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = '';
  }
};

// For disable the boxes after winning the Game.
const DisableBox = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

// Message for the winner team.
const Showwinner = (winner) => {
  message.innerHTML = `CONGRATULATION! [${winner}] YOU WIN THE GAME`;
  message.classList.remove('hide');
  DisableBox();
};
// Check who is the winner.
const checkWinner = () => {
  // Loop on the winning pattern
  for (pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;
    // Conditions to win the Game.
    if (pos1val != '' && pos2val != '' && pos3val != '') {
      if (pos1val === pos2val && pos2val === pos3val) {
        Showwinner(pos1val);
      }
    }
  }
};

newgame.addEventListener('click', enableGame);
resetGame.addEventListener('click', resetbtn);
