var gameState = "Pre-username mode";
var userName = "";
var totalTries = 0;
var totalWins = 0;
var totalDraws = 0;
var totalLosses = 0;

// Computer choice random generator
var numberGenerator = function () {
  // produces a decimal between 0 and 3 not inclusive
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 2, add 1. can be 1,2,3
  var choiceNumber = randomInteger + 1;

  return choiceNumber;
};

// This takes computer choice random number and decodes it into scissors, paper, or stone
var choiceDecoder = function (numberGenerator) {
  if (numberGenerator == 3) {
    return "scissors";
  } else if (numberGenerator == 2) {
    return "paper";
  } else if (numberGenerator == 1) {
    return "stone";
  } else {
    return "Invalid input";
  }
};

// This takes user choice input and encodes it into 1, 2, or 3
var choiceEncoder = function (input) {
  if (input == "scissors" || input == "reversed scissors") {
    return 3;
  } else if (input == "paper" || input == "reversed paper") {
    return 2;
  } else if (input == "stone" || input == "reversed stone") {
    return 1;
  } else {
    return "Invalid input";
  }
};

var main = function (input) {
  var myOutputValue = "";

  // Waiting for username input
  if (gameState == "Pre-username mode") {
    userName = input;
    if (userName == "") {
      myOutputValue = "Hello! What is your name?";
      return myOutputValue;
    } else {
      gameState = "Username mode";
    }
  }

  // After username input, first prompt
  if (gameState == "Username mode") {
    userName = input;
    gameState = "Game mode";
    myOutputValue = `Hey welcome ${userName}! Make a choice! Scissors, paper, or stone?`;
    return myOutputValue;
  } else if (gameState == "Game mode") {
    // Game mode
    var userChoiceNumber = choiceEncoder(input);
    var comChoiceNumber = numberGenerator();
    var comChoice = choiceDecoder(comChoiceNumber);

    var outcome = userChoiceNumber - comChoiceNumber;

    myOutputValue = `You chose ${input}. <br> Computer chose ${comChoice}. <br>`;

    if (isNaN(outcome)) {
      // Check if input is valid
      return `What was that?! <br><br> ${userName}, please input a valid choice: "scissors", "paper", or "stone"?`;
    } else if (input == "scissors" || input == "paper" || input == "stone") {
      totalTries += 1;
      // Logic flow below - normal game

      if (outcome == 0) {
        totalDraws += 1;
        myOutputValue += `It's a draw!`;
      } else if (outcome == 1 || outcome == -2) {
        totalWins += 1;
        myOutputValue += `You won!`;
      } else if (outcome == 2 || outcome == -1) {
        totalLosses += 1;
        myOutputValue += `You lost!`;
      }
    } else {
      // Reversed game flow
      totalTries += 1;
      if (outcome == 0) {
        totalDraws += 1;
        myOutputValue += `It's a draw!`;
      } else if (outcome == 1 || outcome == -2) {
        totalLosses += 1;
        myOutputValue += `You lost!`;
      } else if (outcome == 2 || outcome == -1) {
        totalWins += 1;
        myOutputValue += `You won!`;
      }
    }
    console.log("Com Choice:", comChoice);
    console.log("User Input:", input);

    return `Player name: ${userName} <br><br> ${myOutputValue} <br><br> You won ${totalWins} round(s) out of ${totalTries} tries!`;
  }
};
// user : U, com : C
// scissors = 3, paper = 2, stone = 1

// NORMAL CASE 1-3
// case 1: draw
// case 1: U choose sci(3), C choose sci(3) or any other similar
// therefore for case 1, U = C always => 0

// case 2: U win
// case 2: U choose sci (3), C choose paper (2) => 1
// case 2: U choose paper (2), C choose stone (1) => 1
// case 2: U choose stone (1), C choose sci (3) => -2
// therefore for case 2, U-C = 1 OR -2

// case 3: C win
// case 3: U choose paper (2), C choose sci (3) => -1
// case 3: U choose stone (1), C choose paper (2) => -1
// case 3: U choose sci (3), C choose stone (1) => 2
// therefore for case 2, U-C = -1 OR 2

// REVERSED CASE just reverse case 2 and 3 output for reversed input
