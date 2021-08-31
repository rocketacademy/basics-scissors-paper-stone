var programWins = 0;
var userWins = 0;
var gameTurns = 0;
var gameMode = "waiting for username";
var userName;
// var encouragementComment = giveEncouragement(userWins, gameTurns);

var main = function (input) {
  if (gameMode == "waiting for username") {
    userName = input;
    gameMode = "dice game";
    myOutputValue =
      "Hello, " +
      userName +
      ". Start playing by entering either 'scissors', 'paper', or 'stone'!";
  } else if (gameMode == "dice game") {
    var programsMove = generateRandomNumber();
    console.log("This is the program's move " + programsMove);
    var usersMove = generateMoveNumber(input);
    console.log("This is the user's move " + usersMove);
    myOutputValue = generateOutputValue(programsMove, usersMove);
  }
  return myOutputValue;
};
console.log(gameMode);

var myOutputValue;

// generate a random number for the program
var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};

// assign a number to the move input by the user
var generateMoveNumber = function (input) {
  var userMoveNumber;
  if (input == "scissors") {
    userMoveNumber = 1;
  }
  if (input == "paper") {
    userMoveNumber = 2;
  }
  if (input == "stone") {
    userMoveNumber = 3;
  }
  return userMoveNumber;
};

// var giveEncouragement = function (userWins, gameTurns) {
//   var outputValue;
//   var winPercentage = (userWins / gameTurns) * 100;
//   if (winPercentage <= 25) {
//     outputValue = "Give it another shot!";
//   }
//   if (winPercentage >= 25 && winPercentage <= 50) {
//     outputValue = "Nice try!";
//   }
//   if (winPercentage >= 50 && winPercentage <= 75) {
//     outputValue = "Good work!";
//   }
//   if (winPercentage > 75) {
//     outputValue = "Keep it up!";
//   }
//   return outputValue;
// };

// compare user input with random number generated
var generateOutputValue = function (programsMove, usersMove) {
  myOutputValue =
    "You entered an invalid option. Type 'scissors', 'paper', or 'stone' to play!";
  if (programsMove == 1 && usersMove == 2) {
    programWins += 1;
    gameTurns += 1;
    myOutputValue =
      "You chose paper. The computer chose scissors. The computer wins! Thus far, you've been winning " +
      userWins +
      "/" +
      gameTurns +
      " turns. ";
  }
  if (programsMove == 2 && usersMove == 3) {
    programWins += 1;
    gameTurns += 1;
    myOutputValue =
      "You chose stone. The computer chose paper. The computer wins! Thus far, you've been winning " +
      userWins +
      "/" +
      gameTurns +
      " turns. ";
  }
  if (programsMove == 3 && usersMove == 1) {
    programWins += 1;
    gameTurns += 1;
    myOutputValue =
      "You chose scissors. The computer chose stone. The computer wins! Thus far, you've been winning " +
      userWins +
      "/" +
      gameTurns +
      " turns. ";
  }
  if (usersMove == 1 && programsMove == 2) {
    userWins += 1;
    gameTurns += 1;
    myOutputValue =
      "You chose scissors. The computer chose paper. You win! Thus far, you've been winning " +
      userWins +
      "/" +
      gameTurns +
      " turns. ";
  }
  if (usersMove == 2 && programsMove == 3) {
    userWins += 1;
    gameTurns += 1;
    myOutputValue =
      "You chose paper. The computer chose stone. You win! Thus far, you've been winning " +
      userWins +
      "/" +
      gameTurns +
      " turns. ";
  }
  if (usersMove == 3 && programsMove == 1) {
    userWins += 1;
    gameTurns += 1;
    myOutputValue =
      "You chose stone. The computer chose scissors. You win! Thus far, you've been winning " +
      userWins +
      "/" +
      gameTurns +
      " turns. ";
  }
  if (usersMove == programsMove) {
    gameTurns += 1;
    myOutputValue =
      "You both chose the same move. It's a draw! Thus far, you've been winning " +
      userWins +
      "/" +
      gameTurns +
      " turns. ";
  }
  return myOutputValue;
};
