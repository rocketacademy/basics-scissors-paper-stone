var SCISSORS = `scissors`;
var PAPER = `paper`;
var STONE = `stone`;
var REVERSED_SCISSORS = `reversed scissors`;
var REVERSED_PAPER = `reversed paper`;
var REVERSED_STONE = `reversed stone`;

var numberOfUserWins = 0;
var numberOfComputerWins = 0;

var currentGameMode = "username";
var userName = "";

// generate random computer answer

var getRandomInteger = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  return randomInteger;
};

var getComputerAnswers = function () {
  var computerAnswers = getRandomInteger(2);
  if (computerAnswers == 1) {
    return SCISSORS;
  }
  if (computerAnswers == 2) {
    return PAPER;
  }
  return STONE;
};

// main function

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "username") {
    userName = input;
    currentGameMode = "scissors paper stone";
    return `Welcome, ${userName}! You may now play <i>Scissors Paper Stone</i> by entering 1 of the 3 objects.`;
  } else if (currentGameMode == "scissors paper stone") {
    var computerAnswer = getComputerAnswers();
    if (
      !(
        input == SCISSORS ||
        input == PAPER ||
        input == STONE ||
        input == REVERSED_SCISSORS ||
        input == REVERSED_PAPER ||
        input == REVERSED_STONE
      )
    ) {
      return `Please type in 'scissors', 'paper', or 'stone' only.`;
    } else {
      if (
        ((input == SCISSORS || input == REVERSED_SCISSORS) &&
          computerAnswer == SCISSORS) ||
        ((input == PAPER || input == REVERSED_PAPER) &&
          computerAnswer == PAPER) ||
        ((input == STONE || input == REVERSED_STONE) && computerAnswer == STONE)
      ) {
        myOutputValue = `It's a draw, ${userName}! Try again!`;
      }
      if (
        ((input == SCISSORS || input == REVERSED_STONE) &&
          computerAnswer == PAPER) ||
        ((input == STONE || input == REVERSED_PAPER) &&
          computerAnswer == SCISSORS) ||
        ((input == PAPER || input == SCISSORS) && computerAnswer == STONE)
      ) {
        numberOfUserWins = numberOfUserWins + 1;
        myOutputValue = `You win, ${userName}! You have won ${numberOfUserWins} time(s).`;
      }
      if (
        ((input == SCISSORS || input == REVERSED_PAPER) &&
          computerAnswer == STONE) ||
        ((input == STONE || input == REVERSED_SCISSORS) &&
          computerAnswer == PAPER) ||
        ((input == PAPER || input == REVERSED_STONE) &&
          computerAnswer == SCISSORS)
      ) {
        numberOfComputerWins = numberOfComputerWins + 1;
        myOutputValue = `The computer wins, ${userName}! It has won ${numberOfComputerWins} time(s).`;
      }
    }
  }
  return `${myOutputValue} <br><br> You chose ${input}, and the computer chose ${computerAnswer}.`;
};
