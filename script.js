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

// keep track of number of times player won, computer won and total rounds played
var numPlayerWon = 0;
var numComputerWon = 0;
var numTotalRoundsPlayed = 0;
var userName = "";

// return outcome to player based on what they input
var main = function (input) {
  var randomOutcome = generateRandomOutcome();
  console.log("Computer played");
  console.log(randomOutcome);

  if (userName == "") {
    if (input == "") {
      return `Please set a username by typing it in the input box.`;
    }
    userName = input;
    return `You have set your username as ${input}! <br> Let's get started with the game ${input} 😉`;
  }

  if (
    (input == "scissors" && randomOutcome == "scissors") ||
    (input == "paper" && randomOutcome == "paper") ||
    (input == "stone" && randomOutcome == "stone")
  ) {
    numTotalRoundsPlayed += 1;
    var myOutputValue = `You played ${input}. <br> The computer played ${randomOutcome}. <br><br>It's a draw! <br> So far you have won ${numPlayerWon}/${numTotalRoundsPlayed} rounds 🤪`;
  }

  if (
    (input == "scissors" && randomOutcome == "stone") ||
    (input == "paper" && randomOutcome == "scissors") ||
    (input == "stone" && randomOutcome == "paper")
  ) {
    numComputerWon += 1;
    numTotalRoundsPlayed += 1;
    var myOutputValue = `You played ${input}. <br> The computer played ${randomOutcome}. <br><br> You lose! <br>So far you have won ${numPlayerWon}/${numTotalRoundsPlayed} rounds 🤪`;
  }

  if (
    (input == "scissors" && randomOutcome == "paper") ||
    (input == "paper" && randomOutcome == "stone") ||
    (input == "stone" && randomOutcome == "scissors")
  ) {
    numPlayerWon += 1;
    numTotalRoundsPlayed += 1;
    var myOutputValue = `You played ${input}. <br> The computer played ${randomOutcome}. <br><br> You win! <br>So far you have won ${numPlayerWon}/${numTotalRoundsPlayed} rounds 🤪`;
  }

  if (input != "scissors" && input != "paper" && input != "stone") {
    var myOutputValue = `You entered ${input} which is invalid. Please only enter scissors, paper or stone!`;
  }

  return myOutputValue;
};
