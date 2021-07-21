var main = function (input) {
  var compWord = randomWord();
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reversed scissors" &&
    input != "reversed paper" &&
    input != "reversed stone"
  ) {
    var myOutputValue =
      "Input does not exist. Please choose scissors, paper, or stone.";
  }
  if (input == compWord || input == `reversed ${compWord}`) {
    var myOutputValue = `You chose ${compWord}. <br> The computer also chose ${compWord} <br><br> It's a draw!`;
  }
  if (input == "scissors" && compWord == "paper") {
    var myOutputValue =
      "You chose scissors. <br> The computer chose paper. <br><br> You won!";
  }
  if (input == "scissors" && compWord == "stone") {
    var myOutputValue =
      "You chose scissors. <br> The computer chose stone. <br><br> You lost!";
  }
  if (input == "paper" && compWord == "scissors") {
    var myOutputValue =
      "You chose paper. <br> The computer chose scissors. <br><br> You lost!";
  }
  if (input == "paper" && compWord == "stone") {
    var myOutputValue =
      "You chose paper. <br> The computer chose stone. <br><br> You won!";
  }
  if (input == "stone" && compWord == "scissors") {
    var myOutputValue =
      "You chose stone. <br> The computer chose scissors. <br><br> You won!";
  }
  if (input == "stone" && compWord == "paper") {
    var myOutputValue =
      "You chose stone. <br> The computer chose scissors. <br><br> You lost!";
  }
  if (input == "reversed scissors" && compWord == "paper") {
    var myOutputValue =
      "You chose scissors. <br> The computer chose paper. <br><br> You lost!";
  }
  if (input == "reversed scissors" && compWord == "stone") {
    var myOutputValue =
      "You chose scissors. <br> The computer chose stone. <br><br> You won!";
  }
  if (input == "reversed paper" && compWord == "scissors") {
    var myOutputValue =
      "You chose paper. <br> The computer chose scissors. <br><br> You won!";
  }
  if (input == "reversed paper" && compWord == "stone") {
    var myOutputValue =
      "You chose paper. <br> The computer chose stone. <br><br> You lost!";
  }
  if (input == "reversed stone" && compWord == "scissors") {
    var myOutputValue =
      "You chose stone. <br> The computer chose scissors. <br><br> You lost!";
  }
  if (input == "reversed stone" && compWord == "paper") {
    var myOutputValue =
      "You chose stone. <br> The computer chose paper. <br><br> You won!";
  }
  return myOutputValue;
};
var randomWord = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    var randomWord = "scissors";
  } else if (randomInteger == 1) {
    var randomWord = "paper";
  } else {
    var randomWord = "stone";
  }
  return randomWord;
};
