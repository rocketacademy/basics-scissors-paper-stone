var myOutputValue = "";
var userWin = 0;
var computerWin = 0;
var totalPlay = 0;
var currentGameMode = "Waiting for username";
var userName = "";

// Computer generates random Number
var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

//Computer assigns number to "scissors", "paper", or "stone"
var computerGuesses = function () {
  var computerGuess = "";
  var guess = randomNumber();
  if (guess == 0) {
    computerGuess = "scissors";
  }
  if (guess == 1) {
    computerGuess = "paper";
  }
  if (guess == 2) {
    computerGuess = "stone";
  }
  return computerGuess;
};

// User input "scissors", "paper", or "stone";
// if user input beats computer's, user win
var main = function (input) {
  var userInput = input.toLowerCase();
  //Waiting for user input
  if (currentGameMode == "Waiting for username") {
    //if the input's value for not a number is false, the user has to type again
    if (Number.isNaN(Number(input)) == false) {
      myOutputValue = "Sorry please enter a Name.";
    } else {
      userName = input;
      currentGameMode = "SPS game";
      myOutputValue = "Hello " + userName;
    }
  }

  //When user input and the SPS game mode is switched on
  else if (currentGameMode == "SPS game") {
    var computersGuess = computerGuesses();
    //if we beat the computer, we win
    if (
      (computersGuess == "paper" && userInput == "scissors") ||
      (computersGuess == "stone" && userInput == "paper") ||
      (computersGuess == "scissors" && userInput == "stone")
    ) {
      userWin = userWin + 1;
      totalPlay = totalPlay + 1;
      myOutputValue =
        "The Computer chose " +
        computersGuess +
        "<br><br> You chose " +
        userInput +
        ".<br><br> You won! <br><br> Now you can type scissors, paper or stone to play another round! <br><br> You won: " +
        userWin;
      //else if the computer is the same as the user's input, it's a draw
    } else {
      if (computersGuess == userInput) {
        totalPlay = totalPlay + 1;
        myOutputValue =
          "The Computer chose " +
          computersGuess +
          "<br><br> You chose " +
          userInput +
          ".<br><br> It's a draw! <br><br> Now you can type scissors, paper or stone to play another round!";
        //if the 2 conditions are not met, the player lose
      } else {
        computerWin = computerWin + 1;
        totalPlay = totalPlay + 1;
        myOutputValue =
          "The Computer chose " +
          computersGuess +
          "<br><br> You chose " +
          userInput +
          ".<br><br> You lose! Bummer. <br><br> Now you can type scissors, paper or stone to play another round! <br><br> The computer won: " +
          computerWin;
      }
    }
  }
  return myOutputValue;
};
