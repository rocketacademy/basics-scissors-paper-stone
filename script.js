// Global Variables
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var totalGames = 0;
var currentGameMode = "waiting for user name";
var username = "";
var scissors = "scissors";
var rock = "rock";
var paper = "paper";
var goodJob = "";
var rScissors = "reversed scissors";
var rRock = "reversed rock";
var rPaper = "reversed paper";
var myOutputValue = "";
var rScissors = "reversed scissors";
var rRock = "reversed rock";
var rPaper = "reversed paper";
var koreanGameStart = "waiting for winner";

// Roll a random number between 1 and user chosen number.
var rollNumber = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
// Function to determine what the computer will choose.
var generateResult = function () {
  var output = "try again";
  var totalResults = 3;
  var randomResult = rollNumber(totalResults);
  if (randomResult == 1) {
    output = "paper";
  }
  if (randomResult == 2) {
    output = "scissors";
  }
  if (randomResult == 3) {
    output = "rock";
  }
  return output;
};

// Choice of Game Mode
var gameMode = function (input) {
  if (input == "scissors, paper, stone") {
    currentGameMode = "scissors, paper, stone"; // normal SPS
  }
  if (input == "reverse SPS") {
    currentGameMode = "reverse SPS"; // SPS where the rules are reversed
  }
  if (input == "reverse reverse SPS") {
    currentGameMode = "scissors, paper, stone"; // reverse reverse SPS so it's normal SPS
  }
  if (input == "Korean SPS") {
    currentGameMode = "Korean SPS"; // korean SPS
  }
  if (input == "Computer") {
    currentGameMode = "Computer";
  }
  return "you have chosen " + currentGameMode;
};

// Reversed Game Mode
var gameResultRSPS = function (input, enemyOutput) {
  if ((input == scissors || input == rScissors) && enemyOutput == rock) {
    myOutputValue = "you won " + message(username, winCount, loseCount);
    winCount = winCount + 1;
  }
  if ((input == scissors || input == rScissors) && enemyOutput == scissors) {
    myOutputValue = "draw! " + message(username, winCount, loseCount);
    drawCount = drawCount + 1;
  }
  if ((input == scissors || input == rScissors) && enemyOutput == paper) {
    myOutputValue = "you lose " + message(username, winCount, loseCount);
    loseCount = loseCount + 1;
  }
  if ((input == paper || input == rPaper) && enemyOutput == rock) {
    myOutputValue = "you lose " + message(username, winCount, loseCount);
    loseCount = loseCount + 1;
  }
  if ((input == paper || input == rPaper) && enemyOutput == scissors) {
    myOutputValue = "you won " + message(username, winCount, loseCount);
    winCount = winCount + 1;
  }
  if ((input == paper || input == rPaper) && enemyOutput == paper) {
    myOutputValue = "draw! " + message(username, winCount, loseCount);
    drawCount = drawCount + 1;
  }
  if ((input == rock || input == rRock) && enemyOutput == rock) {
    myOutputValue = "draw! " + message(username, winCount, loseCount);
    drawCount = drawCount + 1;
  }
  if ((input == rock || input == rRock) && enemyOutput == scissors) {
    myOutputValue = "you lose " + message(username, winCount, loseCount);
    loseCount = loseCount + 1;
  }
  if ((input == rock || input == rRock) && enemyOutput == paper) {
    myOutputValue = "you won " + message(username, winCount, loseCount);
    winCount = winCount + 1;
  }
  if (
    input !== rock &&
    input !== scissors &&
    input !== paper &&
    input !== rRock &&
    input !== rScissors &&
    input !== rPaper
  ) {
    myOutputValue = "please input rock, paper or scissors"; // input validation.
  }
  totalGames = totalGames + 1;
  console.log(myOutputValue);
  return myOutputValue;
};

// Computer Game Mode
var computer = function (ownInput, enemyOutput) {
  ownInput = generateResult();
  if (ownInput == 1) {
    ownInput = "paper";
  }
  if (ownInput == 2) {
    ownInput = "scissors";
  }
  if (ownInput == 3) {
    ownInput = "rock";
  }
  myOutputValue = gameResultSPS(ownInput, enemyOutput);
  return myOutputValue;
};

// For user to give their name.
var userInput = function (input) {
  username = input;
  myOutputValue = "Hello " + username + ", " + "please choose a game";
  return myOutputValue; // provides welcome message and asks user to choose a game
};

// core base code for the scissors, paper, stone game.
var gameResultSPS = function (input, enemyOutput) {
  if (input == scissors && enemyOutput == rock) {
    loseCount = loseCount + 1;
    myOutputValue = "you lost " + message(username, winCount, loseCount);
  }
  if (input == enemyOutput) {
    drawCount = drawCount + 1;
    myOutputValue = myOutputValue =
      "draw! " + message(username, winCount, loseCount);
  }
  if (input == scissors && enemyOutput == paper) {
    winCount = winCount + 1;
    myOutputValue = "you win " + message(username, winCount, loseCount);
  }
  if (input == paper && enemyOutput == rock) {
    winCount = winCount + 1;
    myOutputValue = "you win " + message(username, winCount, loseCount);
  }
  if (input == paper && enemyOutput == scissors) {
    loseCount = loseCount + 1;
    myOutputValue = "you lost " + message(username, winCount, loseCount);
  }
  if (input == rock && enemyOutput == scissors) {
    winCount = winCount + 1;
    myOutputValue = "you win " + message(username, winCount, loseCount);
  }
  if (input == rock && enemyOutput == paper) {
    loseCount = loseCount + 1;
    myOutputValue = "you lost " + message(username, winCount, loseCount);
  }
  if (input !== rock && input !== scissors && input !== paper) {
    myOutputValue = "please input rock, paper or scissors";
  }
  totalGames = totalGames + 1;
  return myOutputValue;
};

// to keep track of score
var message = function (username, winCount, loseCount) {
  myOutputValue =
    username +
    "," +
    " you have won " +
    winCount +
    " times" +
    " and lost " +
    loseCount +
    " and drawn " +
    drawCount +
    " times";
  return myOutputValue;
};

// to keep track of score in % terms and encouraging message.
var percentageResult = function () {
  var userWinPercentage = (winCount / totalGames) * 100;
  if (userWinPercentage > 50) {
    goodJob = username + " you are doing well!";
  }
  if (userWinPercentage < 50) {
    goodJob = username + " keep trying!";
  }
  return goodJob;
};

// function to see who starts the game (Korean SPS)
var outcomeKoreanSPS = function (input, enemyOutput) {
  if (input == scissors && enemyOutput == paper) {
    myOutputValue = "user wins";
  }
  if (input == paper && enemyOutput == rock) {
    myOutputValue = "user wins";
  }
  if (input == rock && enemyOutput == scissors) {
    myOutputValue = "user wins";
  }
  if (input == scissors && enemyOutput == paper) {
    myOutputValue = "computer wins";
  }
  if (input == paper && enemyOutput == rock) {
    myOutputValue = "computer wins";
  }
  if (input == rock && enemyOutput == scissors) {
    myOutputValue = "computer wins";
  }
  console.log(myOutputValue);
  return myOutputValue;
};

// function for winning condition for Korean SPS if user is the attacker
var koreanSPSUserWinner = function (input, enemyOutput) {
  if (input == enemyOutput) {
    myOutputValue = "user wins";
  }
  if (input !== enemyOutput) {
    myOutputValue = "computer wins";
  }
  return myOutputValue;
};

// function fo winning condition for Korean SPS if computer is the attacker
var koreanSPSCompWinner = function (input, enemyOutput) {
  if (input == enemyOutput) {
    myOutputValue = "computer wins";
  }
  if (input !== enemyOutput) {
    myOutputValue = "user wins";
  }
  return myOutputValue;
};

// Korean SPS Game Mode
var koreanSPS = function (input, enemyOutput) {
  // to start, the game needs to decide who goes first
  if (koreanGameStart == "waiting for winner") {
    // assigns 'user wins' or computer wins to myOutputValue
    myOutputValue = outcomeKoreanSPS(input, enemyOutput);
    console.log(myOutputValue);
    koreanGameStart = myOutputValue;
  } else if (koreanGameStart == "user wins") {
    // if the user wins, then if the computer matches the user, the user wins
    myOutputValue = koreanSPSUserWinner(input, enemyOutput);
    if (myOutputValue == "user wins") {
      winCount = winCount + 1;
      koreanGameStart = "user wins"; // if the user wins, the user continues to be the attacker
    } else if (myOutputValue !== "user wins") {
      loseCount = loseCount + 1;
      koreanGameStart = "computer wins"; // if the user loses, then it switches to the computer being the attacker.
    }
  } else if (koreanGameStart == "computer wins") {
    myOutputValue = koreanSPSCompWinner(input, enemyOutput);
    if (myOutputValue == "computer wins") {
      loseCount = loseCount + 1;
      koreanGameStart = "computer wins";
    } else if (myOutputValue !== "computer wins") {
      winCount = winCount + 1;
      koreanGameStart = "user wins";
    }
    myOutputValue = "you won " + winCount;
    return myOutputValue;
  }
};

// main function
var main = function (input) {
  var enemyOutput = generateResult();
  console.log("see enemyOutput");
  console.log(enemyOutput);
  if (currentGameMode == "waiting for user name") {
    myOutputValue = userInput(input); // user input and welcome message;
    console.log(myOutputValue);
    console.log(currentGameMode);
    currentGameMode = "waiting for game";
  } else if (currentGameMode == "waiting for game") {
    console.log(currentGameMode);
    myOutputValue = gameMode(input); // choose game mode
  } else if (
    currentGameMode == "scissors, paper, stone" ||
    currentGameMode == "reverse reverse SPS"
  ) {
    console.log(currentGameMode);
    myOutputValue = `${gameResultSPS(
      input,
      enemyOutput
    )} <br> ${percentageResult()}`;
  } else if (currentGameMode == "reverse SPS") {
    myOutputValue = `${gameResultRSPS(
      input,
      enemyOutput
    )} <br> ${percentageResult()}`;
  } else if (currentGameMode == "Computer") {
    myOutputValue = computer(input, enemyOutput);
  } else if (currentGameMode == "Korean SPS") {
    myOutputValue = koreanSPS(input, enemyOutput);
  }
  return myOutputValue;
};
