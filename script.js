//generate a number from 1-3
// 1 = scissors, 2 = stone, 3 = paper
// programme outputs either scissors, paper or stone
// if user inputs scissors and programme outputs scissors = draw
// if user inputs scissors and programme outputs paper = win
// if user inputs scissors and programme outputs stone = lose
// if user inputs paper and programme outputs paper = draw
// if user inputs paper and programme outputs scissors = lose
// if user inputs paper and programme outputs stone = win
// if user inputs stone and programme outputs stone = draw
// if user inputs stone and programme outputs paper = lose
// if user inputs stone and programme outputs scissors = win

//generating a random number from 0-2
var randomOutput = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
};

//if the computer generates 0, his guess is scissors
var randomAttack = randomOutput();
if (randomAttack == 0) {
  var finalAttack = "scissors";
  console.log(finalAttack);
}

//if the computer generates 1, his guess is stone
if (randomAttack == 1) {
  var finalAttack = "stone";
  console.log(finalAttack);
}

//if the computer generates 2, his guess is paper
if (randomAttack == 2) {
  var finalAttack = "paper";
  console.log(finalAttack);
}

var main = function (input) {
  // if the user types in an invalid input
  var myOutputValue = "Please type in either scissors, paper or stone";

  if (input == "scissors" && finalAttack == "scissors") {
    var myOutputValue = "Its a draw";
  }

  if (input == "scissors" && finalAttack == "paper") {
    var myOutputValue = "You win";
  }

  if (input == "scissors" && finalAttack == "stone") {
    var myOutputValue = "You lose";
  }

  if (input == "paper" && finalAttack == "scissors") {
    var myOutputValue = "You lose";
  }

  if (input == "paper" && finalAttack == "paper") {
    var myOutputValue = "It's a draw";
  }

  if (input == "paper" && finalAttack == "stone") {
    var myOutputValue = "You win";
  }

  if (input == "stone" && finalAttack == "scissors") {
    var myOutputValue = "You win";
  }

  if (input == "stone" && finalAttack == "paper") {
    var myOutputValue = "You lose";
  }

  if (input == "stone" && finalAttack == "stone") {
    var myOutputValue = "It's a draw";
  }

  return `${myOutputValue}! <br> You guessed ${input} but the computer chose ${finalAttack}. <br> Now you can type in scissors, paper or stone to play another round.`;
};
