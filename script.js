// assign a number to the move input by the user
var main = function (input) {
  // generate a random number for the program
  var generateRandomNumber = function () {
    var randomDecimal = Math.random() * 3;
    var randomInteger = Math.floor(randomDecimal);
    var randomNumber = randomInteger + 1;
    return randomNumber;
  };
  var programMoveNumber = generateRandomNumber();
  console.log("This is the program's move " + programMoveNumber);

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
  console.log("This is the user's move " + userMoveNumber);
  // compare user input with random number generated to determine the winner for the game or if it is a draw
  var myOutputValue;
  myOutputValue =
    "You entered an invalid option. Type 'scissors', 'paper', or 'stone' to play!";
  if (programMoveNumber == 1 && userMoveNumber == 2) {
    myOutputValue =
      "You chose paper. The computer chose scissors. The computer wins!";
  }
  if (programMoveNumber == 2 && userMoveNumber == 3) {
    myOutputValue =
      "You chose stone. The computer chose paper. The computer wins!";
  }
  if (programMoveNumber == 3 && userMoveNumber == 1) {
    myOutputValue =
      "You chose scissors. The computer chose stone. The computer wins!";
  }
  if (userMoveNumber == 1 && programMoveNumber == 2) {
    myOutputValue = "You chose scissors. The computer chose paper. You win!";
  }
  if (userMoveNumber == 2 && programMoveNumber == 3) {
    myOutputValue = "You chose paper. The computer chose stone. You win!";
  }
  if (userMoveNumber == 3 && programMoveNumber == 1) {
    myOutputValue = "You chose stone. The computer chose scissors. You win!";
  }
  if (userMoveNumber == programMoveNumber) {
    myOutputValue = "You both chose the same move. It's a draw!";
  }
  return myOutputValue;
};
