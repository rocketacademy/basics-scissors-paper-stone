var main = function (input) {
  var gameResult = scissorsPaperRock();

  myOutputValue =
    // default putput is a validation input

    "Please choose a valid input, the inputs are scissors, paper or rock. Your input was " +
    input +
    "the computer would have chosen " +
    gameResult;
  /* default ouptut is lose state 
    
    myOutputValue =
  "You Lose! You chose " +
    input +
    " and the computer chose " +
    gameResult +
    " ."; */

  if (gameResult == input) {
    myOutputValue =
      "Draw! You chose " +
      input +
      " and the computer chose " +
      gameResult +
      " .";
  }
  if (gameResult == "scissors" && input == "rock") {
    myOutputValue =
      "Win! You chose " +
      input +
      " and the computer chose " +
      gameResult +
      " .";
  }

  if (gameResult == "scissors" && input == "paper") {
    myOutputValue =
      "Lose! You chose " +
      input +
      " and the computer chose " +
      gameResult +
      " .";
  }

  if (gameResult == "paper" && input == "scissors") {
    myOutputValue =
      "Win! You chose " +
      input +
      " and the computer chose " +
      gameResult +
      " .";
  }

  if (gameResult == "paper" && input == "rock") {
    myOutputValue =
      "Lose! You chose " +
      input +
      " and the computer chose " +
      gameResult +
      " .";
  }

  if (gameResult == "rock" && input == "paper") {
    myOutputValue =
      "Win! You chose " +
      input +
      " and the computer chose " +
      gameResult +
      " .";

    if (gameResult == "rock" && input == "scissors") {
      myOutputValue =
        "Lose! You chose " +
        input +
        " and the computer chose " +
        gameResult +
        " .";
    }

    /*if (input ! "scissors"){
    myOutputValue = input+" is not a valid input. Please type scissors, paper or rock"}

    if (input ! "paper"){
    myOutputValue = input+" is not a valid input. Please type scissors, paper or rock"}

    if (input !"rock"){
    myOutputValue = input+" is not a valid input. Please type scissors, paper or rock"}
  }*/
  }

  return myOutputValue;
};

var scissorsPaperRock = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 3;
  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);
  // it's anumber from 0 - 5 ... add 1
  var resultNumber = randomInteger + 1;

  if (resultNumber == 1) {
    myOutputValue2 = "scissors";
  }
  if (resultNumber == 2) {
    myOutputValue2 = "paper";
  }
  if (resultNumber == 3) {
    myOutputValue2 = "rock";
  }
  return myOutputValue2;
};
