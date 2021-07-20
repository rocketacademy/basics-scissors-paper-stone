var myScore = 0;
var computerScore = 0;
var numberOfDraws = 0;
var totalNumberofRounds = myScore + computerScore + numberOfDraws;
var userWinningPercentage = (myScore / totalNumberofRounds) * 100;
var computerWinningPercentage = (computerScore / totalNumberofRounds) * 100;
var currentGameMode = `waiting for user name`;
var userName = ``;

var main = function (input) {
  var myOutputValue = ``;
  //do this if awaiting user to input his/her name
  if (currentGameMode == `waiting for user name`) {
    userName = input;
    currentGameMode = `Select game mode`;
    myOutputValue = `Hello ${userName}, please select your scissors paper stone game mode. Choose either "original" or "korean" version.`;
    return myOutputValue;
  } else if (currentGameMode == `Select game mode`) {
    if (input == `original`) {
      currentGameMode = `original`;
    }
    if (input == `korean`) {
      currentGameMode = `korean`;
    }
    myOutputValue = `Hi, ${userName}, you have selected ${input} mode. Please enter "scissors", "paper" or "stone" to begin the game. Good luck!`;
    return myOutputValue;
  } else if (currentGameMode == `original`) {
    var randomComputerMove = computerHand();
    var myOutputValue = `${userName}, you threw ${input}, the computer chose ${randomComputerMove}.`;

    // When player throws scissors or reversed scissors
    if (
      (input == "scissors" && randomComputerMove == "scissors") ||
      (input == "reversed scissors" && randomComputerMove == "scissors")
    ) {
      myScore = myScore + 0;
      computerScore = computerScore + 0;
      numberOfDraws = numberOfDraws + 1;
      totalNumberofRounds = myScore + computerScore + numberOfDraws;
      userWinningPercentage = ((myScore / totalNumberofRounds) * 100).toFixed(
        2
      );
      computerWinningPercentage = (
        (computerScore / totalNumberofRounds) *
        100
      ).toFixed(2);
      myOutputValue =
        myOutputValue +
        ` It is a draw! Try again!<br><br>Your score: ${myScore} <br><br> Computer's score: ${computerScore} <br><br>Number of draws: ${numberOfDraws} <br><br> Your winning percentage: ${userWinningPercentage}% <br><br> Computer's winning percentage: ${computerWinningPercentage}%`;
      return myOutputValue;
    }
    if (
      (input == "scissors" && randomComputerMove == "paper") ||
      (input == "reversed scissors" && randomComputerMove == "stone")
    ) {
      myScore = myScore + 1;
      computerScore = computerScore + 0;
      numberOfDraws = numberOfDraws + 0;
      totalNumberofRounds = myScore + computerScore + numberOfDraws;
      userWinningPercentage = ((myScore / totalNumberofRounds) * 100).toFixed(
        2
      );
      computerWinningPercentage = (
        (computerScore / totalNumberofRounds) *
        100
      ).toFixed(2);
      myOutputValue =
        myOutputValue +
        ` You won! Great job!<br><br>Your score: ${myScore} <br><br> Computer's score: ${computerScore} <br><br>Number of draws: ${numberOfDraws} <br><br> Your winning percentage: ${userWinningPercentage}% <br><br> Computer's winning percentage: ${computerWinningPercentage}%`;
      return myOutputValue;
    }
    if (
      (input == "scissors" && randomComputerMove == "stone") ||
      (input == "reversed scissors" && randomComputerMove == "paper")
    ) {
      myScore = myScore + 0;
      computerScore = computerScore + 1;
      numberOfDraws = numberOfDraws + 0;
      totalNumberofRounds = myScore + computerScore + numberOfDraws;
      userWinningPercentage = ((myScore / totalNumberofRounds) * 100).toFixed(
        2
      );
      computerWinningPercentage = (
        (computerScore / totalNumberofRounds) *
        100
      ).toFixed(2);
      myOutputValue =
        myOutputValue +
        ` You lost! Try again!<br><br>Your score: ${myScore} <br><br> Computer's score: ${computerScore} <br><br>Number of draws: ${numberOfDraws} <br><br> Your winning percentage: ${userWinningPercentage}% <br><br> Computer's winning percentage: ${computerWinningPercentage}%`;
      return myOutputValue;
    }
    // When player throws paper or reversed paper
    if (
      (input == "paper" && randomComputerMove == "scissors") ||
      (input == "reversed paper" && randomComputerMove == "stone")
    ) {
      myScore = myScore + 0;
      computerScore = computerScore + 1;
      numberOfDraws = numberOfDraws + 0;
      totalNumberofRounds = myScore + computerScore + numberOfDraws;
      userWinningPercentage = ((myScore / totalNumberofRounds) * 100).toFixed(
        2
      );
      computerWinningPercentage = (
        (computerScore / totalNumberofRounds) *
        100
      ).toFixed(2);
      myOutputValue =
        myOutputValue +
        ` You lost! Try again!<br><br>Your score: ${myScore} <br><br> Computer's score: ${computerScore} <br><br>Number of draws: ${numberOfDraws} <br><br> Your winning percentage: ${userWinningPercentage}% <br><br> Computer's winning percentage: ${computerWinningPercentage}%`;
      return myOutputValue;
    }
    if (
      (input == "paper" && randomComputerMove == "paper") ||
      (input == "reversed paper" && randomComputerMove == "paper")
    ) {
      myScore = myScore + 0;
      computerScore = computerScore + 0;
      numberOfDraws = numberOfDraws + 1;
      totalNumberofRounds = myScore + computerScore + numberOfDraws;
      userWinningPercentage = ((myScore / totalNumberofRounds) * 100).toFixed(
        2
      );
      computerWinningPercentage = (
        (computerScore / totalNumberofRounds) *
        100
      ).toFixed(2);
      myOutputValue =
        myOutputValue +
        ` It is a draw! Try again! <br><br>Your score: ${myScore} <br><br> Computer's score: ${computerScore} <br><br>Number of draws: ${numberOfDraws} <br><br> Your winning percentage: ${userWinningPercentage}% <br><br> Computer's winning percentage: ${computerWinningPercentage}%`;
      return myOutputValue;
    }
    if (
      (input == "paper" && randomComputerMove == "stone") ||
      (input == "reversed paper" && randomComputerMove == "scissors")
    ) {
      myScore = myScore + 1;
      computerScore = computerScore + 0;
      numberOfDraws = numberOfDraws + 0;
      totalNumberofRounds = myScore + computerScore + numberOfDraws;
      userWinningPercentage = ((myScore / totalNumberofRounds) * 100).toFixed(
        2
      );
      computerWinningPercentage = (
        (computerScore / totalNumberofRounds) *
        100
      ).toFixed(2);
      myOutputValue =
        myOutputValue +
        ` You won! Great job!<br><br>Your score: ${myScore} <br><br> Computer's score: ${computerScore} <br><br>Number of draws: ${numberOfDraws} <br><br> Your winning percentage: ${userWinningPercentage}% <br><br> Computer's winning percentage: ${computerWinningPercentage}%`;
      return myOutputValue;
    }
    // When player throws stone or reversed stone
    if (
      (input == "stone" && randomComputerMove == "scissors") ||
      (input == "reversed stone" && randomComputerMove == "paper")
    ) {
      myScore = myScore + 1;
      computerScore = computerScore + 0;
      numberOfDraws = numberOfDraws + 0;
      totalNumberofRounds = myScore + computerScore + numberOfDraws;
      userWinningPercentage = ((myScore / totalNumberofRounds) * 100).toFixed(
        2
      );
      computerWinningPercentage = (
        (computerScore / totalNumberofRounds) *
        100
      ).toFixed(2);
      myOutputValue =
        myOutputValue +
        ` You won! Great job!<br><br>Your score: ${myScore} <br><br> Computer's score: ${computerScore} <br><br>Number of draws: ${numberOfDraws} <br><br> Your winning percentage: ${userWinningPercentage}% <br><br> Computer's winning percentage: ${computerWinningPercentage}%`;
      return myOutputValue;
    }
    if (
      (input == "stone" && randomComputerMove == "paper") ||
      (input == "reversed stone" && randomComputerMove == "scissors")
    ) {
      myScore = myScore + 0;
      computerScore = computerScore + 1;
      numberOfDraws = numberOfDraws + 0;
      totalNumberofRounds = myScore + computerScore + numberOfDraws;
      userWinningPercentage = ((myScore / totalNumberofRounds) * 100).toFixed(
        2
      );
      computerWinningPercentage = (
        (computerScore / totalNumberofRounds) *
        100
      ).toFixed(2);
      myOutputValue =
        myOutputValue +
        ` You lost! Try again!<br><br>Your score: ${myScore} <br><br> Computer's score: ${computerScore} <br><br>Number of draws: ${numberOfDraws} <br><br> Your winning percentage: ${userWinningPercentage}% <br><br> Computer's winning percentage: ${computerWinningPercentage}%`;
      return myOutputValue;
    }
    if (
      (input == "stone" && randomComputerMove == "stone") ||
      (input == "reversed stone" && randomComputerMove == "stone")
    ) {
      myScore = myScore + 0;
      computerScore = computerScore + 0;
      numberOfDraws = numberOfDraws + 1;
      totalNumberofRounds = myScore + computerScore + numberOfDraws;
      userWinningPercentage = ((myScore / totalNumberofRounds) * 100).toFixed(
        2
      );
      computerWinningPercentage = (
        (computerScore / totalNumberofRounds) *
        100
      ).toFixed(2);
      myOutputValue =
        myOutputValue +
        ` It is a draw! Try again!<br><br>Your score: ${myScore} <br><br> Computer's score: ${computerScore} <br><br>Number of draws: ${numberOfDraws} <br><br> Your winning percentage: ${userWinningPercentage}% <br><br> Computer's winning percentage: ${computerWinningPercentage}%`;
      return myOutputValue;
    } else {
      return `You can only input: <br> "scissors" <br> "paper" <br> "stone" <br> "reversed scissors" <br> "reversed paper" or <br> "reversed stone". <br> You have input something else, please try again!`;
    }
  } else if (currentGameMode == `korean`) {
    var randomComputerMove = computerHand();

    // Rules for first round:
    if (
      input == "scissors" &&
      randomComputerMove == "paper" &&
      myScore == 0 &&
      computerScore == 0
    ) {
      myScore = myScore + 1;
      computerScore = computerScore + 0;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. You're the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "scissors" &&
      randomComputerMove == "stone" &&
      myScore == 0 &&
      computerScore == 0
    ) {
      myScore = myScore + 0;
      computerScore = computerScore + 1;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. The computer is the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "paper" &&
      randomComputerMove == "stone" &&
      myScore == 0 &&
      computerScore == 0
    ) {
      myScore = myScore + 1;
      computerScore = computerScore + 0;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. You're the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "paper" &&
      randomComputerMove == "scissors" &&
      myScore == 0 &&
      computerScore == 0
    ) {
      myScore = myScore + 0;
      computerScore = computerScore + 1;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. The computer is the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "stone" &&
      randomComputerMove == "scissors" &&
      myScore == 0 &&
      computerScore == 0
    ) {
      myScore = myScore + 1;
      computerScore = computerScore + 0;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. You're the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (
      input == "stone" &&
      randomComputerMove == "paper" &&
      myScore == 0 &&
      computerScore == 0
    ) {
      myScore = myScore + 0;
      computerScore = computerScore + 1;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. The computer is the attacker. Go again!<br><br>Your score: ${myScore}`;
    }

    if (input == randomComputerMove && myScore == 0 && computerScore == 0) {
      myScore = myScore + 0;
      computerScore = computerScore + 0;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. It's a draw, there's no attacker yet. Go again!<br><br>Your score: ${myScore}`;
    }

    // Rules for second round:
    if (!(input == randomComputerMove) && myScore == 1) {
      myScore = myScore - 1;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. Nobody wins, game resets!<br><br>Your score: ${myScore}`;
    }

    if (!(input == randomComputerMove) && computerScore == 1) {
      computerScore = computerScore - 1;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. Nobody wins, game resets!<br><br>Your score: ${myScore}`;
    }

    if (input == randomComputerMove && myScore == 1) {
      myScore = myScore - 1;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. Since you were the attacker, you win!`;
    }

    if (input == randomComputerMove && computerScore == 1) {
      computerScore = computerScore - 1;
      return `${userName}, you threw ${input} and computer threw ${randomComputerMove}. Since the computer was the attacker, you lost!`;
    }
  }
};

var computerHand = function () {
  // List possible moves computer can make
  var allComputerMoves = ["scissors", "paper", "stone"];

  // Generate a random integer from 0 to 2 inclusive
  var generateRandomInteger = Math.floor(Math.random() * 3);

  // Randomise possible moves computer can make
  var randomComputerMove = allComputerMoves[generateRandomInteger];

  return randomComputerMove;
};
