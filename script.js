var myScore = 0;
var computersScore = 0;
var numberOfDraws = 0;
var totalNumberOfRounds = myScore + computersScore + numberOfDraws;
var myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
var computersWinningPercentage = 100 - myWinningPercentage;

var currentGameMode = `waiting for user name`;
var userName = ``;

var main = function (input) {
  var myOutputValue = ``;
  if (currentGameMode == `waiting for user name`) {
    userName = input;
    currentGameMode = "to select mode";
    myOutputValue = `Hello ${userName}. Please select your Scissors Paper Stone game mode. Enter either "original" or "korean".`;
    return myOutputValue;
  } else if (currentGameMode == `to select mode`) {
    if (input == `original`) {
      currentGameMode = `original`;
    }

    if (input == `korean`) {
      currentGameMode = `korean`;
    }

    myOutputValue = `Hi ${userName}, you've selected ${input} mode. Please enter "scissors" or "paper" or "stone" to begin.`;
    return myOutputValue;
  } else if (currentGameMode == `original`) {
    var randomComputershand = computershand();

    // All win cases:
    if (
      (input == "scissors" && randomComputershand == "paper") ||
      (input == "reversed stone" && randomComputershand == "paper")
    ) {
      myScore = myScore + 1;
      computersScore = computersScore + 0;
      numberOfDraws = numberOfDraws + 0;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You win!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    }

    if (
      (input == "paper" && randomComputershand == "stone") ||
      (input == "reversed scissors" && randomComputershand == "stone")
    ) {
      myScore = myScore + 1;
      computersScore = computersScore + 0;
      numberOfDraws = numberOfDraws + 0;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You win!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    }

    if (
      (input == "stone" && randomComputershand == "scissors") ||
      (input == "reversed paper" && randomComputershand == "scissors")
    ) {
      myScore = myScore + 1;
      computersScore = computersScore + 0;
      numberOfDraws = numberOfDraws + 0;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You win!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    }

    // All draw cases:
    if (input == randomComputershand) {
      myScore = myScore + 0;
      computersScore = computersScore + 0;
      numberOfDraws = numberOfDraws + 1;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. It's a draw!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    }

    if (input == "reversed scissors" && randomComputershand == "scissors") {
      myScore = myScore + 0;
      computersScore = computersScore + 0;
      numberOfDraws = numberOfDraws + 1;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. It's a draw!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    }

    if (input == "reversed paper" && randomComputershand == "paper") {
      myScore = myScore + 0;
      computersScore = computersScore + 0;
      numberOfDraws = numberOfDraws + 1;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. It's a draw!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    }

    if (input == "reversed stone" && randomComputershand == "stone") {
      myScore = myScore + 0;
      computersScore = computersScore + 0;
      numberOfDraws = numberOfDraws + 1;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. It's a draw!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    }

    // All lose cases:
    if (
      (input == "scissors" && randomComputershand == "stone") ||
      (input == "reversed paper" && randomComputershand == "stone")
    ) {
      myScore = myScore + 0;
      computersScore = computersScore + 1;
      numberOfDraws = numberOfDraws + 0;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You lost!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    }

    if (
      (input == "paper" && randomComputershand == "scissors") ||
      (input == "reversed stone" && randomComputershand == "scissors")
    ) {
      myScore = myScore + 0;
      computersScore = computersScore + 1;
      numberOfDraws = numberOfDraws + 0;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You lost!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    }

    if (
      (input == "stone" && randomComputershand == "paper") ||
      (input == "reversed scissors" && randomComputershand == "paper")
    ) {
      myScore = myScore + 0;
      computersScore = computersScore + 1;
      numberOfDraws = numberOfDraws + 0;
      totalNumberOfRounds = myScore + computersScore + numberOfDraws;
      myWinningPercentage = (myScore / totalNumberOfRounds) * 100;
      computersWinningPercentage = 100 - myWinningPercentage;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You lost!<br><br>Your score: ${myScore}<br><br> Your opponent's score: ${computersScore}<br><br>Number of draws: ${numberOfDraws}<br><br>Total number of rounds: ${totalNumberOfRounds}<br><br>Your winning rate: ${myWinningPercentage}%<br><br>The computer's winning rate: ${computersWinningPercentage}%`;
    } else {
      return `Sorry, you can only choose: <br>scissors,<br>or paper,<br>or stone,<br>or reversed scissors,<br>or reversed paper,<br>or reversed stone.<br>Try again.`;
    }
  } else if (currentGameMode == `korean`) {
    var randomComputershand = computershand();

    // Rules for first round:
    if (
      input == "scissors" &&
      randomComputershand == "paper" &&
      myScore == 0 &&
      computersScore == 0
    ) {
      myScore = myScore + 1;
      computersScore = computersScore + 0;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You're the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "scissors" &&
      randomComputershand == "stone" &&
      myScore == 0 &&
      computersScore == 0
    ) {
      myScore = myScore + 0;
      computersScore = computersScore + 1;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. The computer is the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "paper" &&
      randomComputershand == "stone" &&
      myScore == 0 &&
      computersScore == 0
    ) {
      myScore = myScore + 1;
      computersScore = computersScore + 0;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You're the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "paper" &&
      randomComputershand == "scissors" &&
      myScore == 0 &&
      computersScore == 0
    ) {
      myScore = myScore + 0;
      computersScore = computersScore + 1;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. The computer is the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "stone" &&
      randomComputershand == "scissors" &&
      myScore == 0 &&
      computersScore == 0
    ) {
      myScore = myScore + 1;
      computersScore = computersScore + 0;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You're the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "stone" &&
      randomComputershand == "paper" &&
      myScore == 0 &&
      computersScore == 0
    ) {
      myScore = myScore + 0;
      computersScore = computersScore + 1;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. The computer is the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (input == randomComputershand && myScore == 0 && computersScore == 0) {
      myScore = myScore + 0;
      computersScore = computersScore + 0;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. It's a draw, there's no attacker yet. Go again!<br><br>Your score: ${myScore}`;
    }

    // Rules for second round:
    if (input !== randomComputershand && myScore == 1) {
      myScore = myScore - 1;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. Your attack failed, game resets!<br><br>Your score: ${myScore}`;
    }

    if (input !== randomComputershand && computersScore == 1) {
      computersScore = computersScore - 1;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. Computer's attack failed, game resets!<br><br>Your score: ${myScore}`;
    }

    if (input == randomComputershand && myScore == 1) {
      myScore = myScore - 1;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. You win!`;
    }

    if (input == randomComputershand && computersScore == 1) {
      computersScore = computersScore - 1;
      return `${userName} threw ${input} and computer threw ${randomComputershand}. Computer wins! You lost!`;
    }
  }
};

// List all possible moves by the computer
// var number = Math.floor(Math.random() * 3);
// // Randomize possible moves by the computer
var computershand = function () {
  var words = ["scissors", "paper", "stone"];
  var number = Math.floor(Math.random() * 3);
  var randomWord = words[number];
  return randomWord;
};
