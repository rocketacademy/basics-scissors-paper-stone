var rollDice = function () {
  return 1;
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var gameMode = "Waiting for username";
var userWin = 0;
var progWin = 0;
var userName = " ";

var main = function (input) {
  var progsChoice = rollDice();
  if (progsChoice == 1) {
    progsChoice = "Scissors";
  }
  if (progsChoice == 2) {
    progsChoice = "Paper";
  }
  if (progsChoice == 3) {
    progsChoice = "Stone";
  }
  console.log(progsChoice);

  if (input == "Normal") {
    gameMode = "Normal";
  }
  if (input == "Reverse") {
    gameMode = "Reverse";
  }
  console.log(gameMode);

  if (gameMode == "Waiting for username") {
    userName = input;
    var myOutputValue = `Welcome ${userName}! Type 'Normal' to play a normal game of scissors, paper, stone, and type 'Reverse' to play the reverse game. <br> After choosing a game mode, you can only type 'Scissors', 'Paper' or 'Stone'.`;
  } else if (gameMode == "Normal") {
    myOutputValue = playNormalSPS(progsChoice, input);
  } else if (gameMode == "Reverse") {
    myOutputValue = playReverseSPS(progsChoice, input);
  }
  return myOutputValue;
};

var playNormalSPS = function (progsChoice, input) {
  var message = "";
  if (input.includes(progsChoice)) {
    message = "It's a draw!";
  } else if (
    (input == "Scissors" && progsChoice == "Paper") ||
    (input == "Paper" && progsChoice == "Stone") ||
    (input == "Stone" && progsChoice == "Scissors")
  ) {
    userWin = userWin + 1;
    message = `${userName}, you won! Yay!`;
  } else if (
    (progsChoice == "Scissors" && input == "Paper") ||
    (progsChoice == "Paper" && input == "Stone") ||
    (progsChoice == "Stone" && input == "Scissors")
  ) {
    progWin = progWin + 1;
    message = `${userName}, you lost! Sobbles.`;
  }
  return `${message} <br> The game mode was ${gameMode}.🙂 <br> The computer chose ${progsChoice} and you chose ${input}. You have won ${userWin} game(s) while the computer has won ${progWin} game(s). Feel free to play again!`;
};

var playReverseSPS = function (progsChoice, input) {
  var message = "";
  if (input.includes(progsChoice)) {
    message = "It's a draw!";
  } else if (
    (input == "Scissors" && progsChoice == "Stone") ||
    (input == "Paper" && progsChoice == "Scissors") ||
    (input == "Stone" && progsChoice == "Paper")
  ) {
    userWin = userWin + 1;
    message = `${userName}, you won! Yay!`;
  } else if (
    (input == "Scissors" && progsChoice == "Paper") ||
    (input == "Paper" && progsChoice == "Stone") ||
    (input == "Stone" && progsChoice == "Scissors")
  ) {
    progWin = progWin + 1;
    message = `${userName}, you would've won if this was the normal game.`;
  }
  return `${message} <br> The game mode was ${gameMode}.🙃 <br> The computer chose ${progsChoice} and you chose ${input}. You have won ${userWin} game(s) while the computer has won ${progWin} game(s). Feel free to play again!`;
};

//Old code
// if (
//   (input == "Scissors" && progsChoice == "Paper") ||
//   (input == "Paper" && progsChoice == "Stone") ||
//   (input == "Stone" && progsChoice == "Scissors") ||
//   (input == "Reverse Scissors" && progsChoice == "Stone") ||
//   (input == "Reverse Stone" && progsChoice == "Paper") ||
//   (input == "Reverse Paper" && progsChoice == "Scissors")
// ) {
//   myOutputValue = "You win! Yay!";
// }
// if (
//   (progsChoice == "Scissors" && input == "Paper") ||
//   (progsChoice == "Paper" && input == "Stone") ||
//   (progsChoice == "Stone" && input == "Scissors")
// ) {
//   myOutputValue = "You lose! Sobbles.";
// }
// if (
//   (input == "Reverse Scissors" && progsChoice == "Paper") ||
//   (input == "Reverse Stone" && progsChoice == "Scissors") ||
//   (input == "Reverse Paper" && progsChoice == "Stone")
// ) {
//   myOutputValue = "You would've won if this was the normal game.";
// }
