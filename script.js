// generate random number from 1 to 3 to match scissors, paper and stone
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// condition each random number to match scissors, paper and stone
var generateRandomOutcome = function () {
  var numOutcomes = 3;
  var randomOutcomeNum = generateRandomInteger(numOutcomes);

  if (randomOutcomeNum == 1) {
    return "scissors";
  }

  if (randomOutcomeNum == 2) {
    return "paper";
  }
  if (randomOutcomeNum == 3) {
    return "stone";
  }
};

// return outcome to player based on what they input
var main = function (input) {
  var randomOutcome = generateRandomOutcome();
  console.log("Computer played");
  console.log(randomOutcome);

  if (
    (input == "scissors" && randomOutcome == "scissors") ||
    (input == "paper" && randomOutcome == "paper") ||
    (input == "stone" && randomOutcome == "stone")
  ) {
    var myOutputValue = `You played ${input}. <br> The computer played ${randomOutcome}. <br><br> It's a draw! <br>Now you can type scissors, paper or stone to play again 🤪`;
  }

  if (
    (input == "scissors" && randomOutcome == "stone") ||
    (input == "paper" && randomOutcome == "scissors") ||
    (input == "stone" && randomOutcome == "paper")
  ) {
    var myOutputValue = `You played ${input}. <br> The computer played ${randomOutcome}. <br><br> You lose! <br>Now you can type scissors, paper or stone to play again 🤪`;
  }

  if (
    (input == "scissors" && randomOutcome == "paper") ||
    (input == "paper" && randomOutcome == "stone") ||
    (input == "stone" && randomOutcome == "scissors")
  ) {
    var myOutputValue = `You played ${input}. <br> The computer played ${randomOutcome}. <br><br> You win! <br>Now you can type scissors, paper or stone to play again 🤪`;
  }

  if (input != "scissors" && input != "paper" && input != "stone") {
    var myOutputValue = `You entered ${input} which is invalid. Please only enter scissors, paper or stone!`;
  }

  return myOutputValue;
};
