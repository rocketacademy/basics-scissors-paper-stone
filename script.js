var main = function (input) {
  var randomChoice = randomNumber();
  var compChoice = "";

  //computer logic
  if (randomChoice == 1) {
    compChoice = "stone";
  }
  if (randomChoice == 2) {
    compChoice = "paper";
  }
  if (randomChoice == 3) {
    compChoice = "scissors";
  }

  var myOutputValue = `Haha, lets enter only Scissors, Paper, or Stone!`;

  //it's a draw
  if (input == compChoice) {
    myOutputValue = `it's a draw! you entered ${input} and the computer choice is ${compChoice}!`;
  }
  //you win
  if (
    (input == "scissors" && compChoice == "paper") ||
    (input == "paper" && compChoice == "stone") ||
    (input == "stone" && compChoice == "scissors")
  ) {
    myOutputValue = `you win! you entered ${input} and the computer choice is ${compChoice}!`;
  }
  //you lose
  if (
    (input == "scissors" && compChoice == "stone") ||
    (input == "paper" && compChoice == "scissors") ||
    (input == "stone" && compChoice == "paper")
  ) {
    myOutputValue = `you lose! you entered ${input} and the computer choice is ${compChoice}!`;
  }
  return myOutputValue;
};

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
};
