var rollNumber = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

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

// Reversed Game
// var main = function (input) {
//   var enemyOutput = generateResult();
//   console.log(enemyOutput);
//   var scissors = "scissors";
//   var rock = "rock";
//   var paper = "paper";
//   var rScissors = "reversed scissors";
//   var rRock = "reversed rock";
//   var rPaper = "reversed paper";
//   var myOutputValue = "oops";
//   if ((input == scissors || input == rScissors) && enemyOutput == rock) {
//     myOutputValue = "you win";
//   }
//   if ((input == scissors || input == rScissors) && enemyOutput == scissors) {
//     myOutputValue = "draw";
//   }
//   if ((input == scissors || input == rScissors) && enemyOutput == paper) {
//     myOutputValue = "you lose";
//   }
//   if ((input == paper || input == rPaper) && enemyOutput == rock) {
//     myOutputValue = "you lose";
//   }
//   if ((input == paper || input == rPaper) && enemyOutput == scissors) {
//     myOutputValue = "you win";
//   }
//   if ((input == paper || input == rPaper) && enemyOutput == paper) {
//     myOutputValue = "draw";
//   }
//   if ((input == rock || input == rRock) && enemyOutput == rock) {
//     myOutputValue = "draw";
//   }
//   if ((input == rock || input == rRock) && enemyOutput == scissors) {
//     myOutputValue = "you lose";
//   }
//   if ((input == rock || input == rRock) && enemyOutput == paper) {
//     myOutputValue = "you win";
//   }
//   if (
//     input !== rock &&
//     input !== scissors &&
//     input !== paper &&
//     input !== rRock &&
//     input !== rScissors &&
//     input !== rPaper
//   ) {
//     myOutputValue = "please input rock, paper or scissors";
//   }
//   console.log(myOutputValue);
//   return `The computer chose ${enemyOutput} <br> You chose ${input}. <br> ${myOutputValue} <br> Play again?`;
// };
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var totalGames = 0;
var currentGameMode = "waiting for user name";
var username = "";

var main = function (input) {
  var enemyOutput = generateResult();
  console.log(enemyOutput);
  var scissors = "scissors";
  var rock = "rock";
  var paper = "paper";
  var myOutputValue = " ";
  var goodJob = "";
  totalGames = totalGames + 1;
  if (currentGameMode == "waiting for user name") {
    username = input;
    currentGameMode = "scissors, paper, stone";
    myOutputValue = "Hello " + username;
  } else if (currentGameMode == "scissors, paper, stone") {
    if (input == scissors && enemyOutput == rock) {
      myOutputValue =
        username +
        ", you lose " +
        "you have won " +
        winCount +
        " times" +
        " and lost " +
        loseCount;
      loseCount = loseCount + 1;
    }
    if (input == scissors && enemyOutput == scissors) {
      myOutputValue =
        username +
        ", you lose " +
        "you have won " +
        winCount +
        " times" +
        " and lost " +
        loseCount;
      drawCount = drawCount + 1;
    }
    if (input == scissors && enemyOutput == paper) {
      myOutputValue =
        username +
        ", you lose" +
        " you have won " +
        winCount +
        " times" +
        " and lost " +
        loseCount;
      winCount = winCount + 1;
    }
    if (input == paper && enemyOutput == rock) {
      myOutputValue =
        username +
        ", you lose" +
        " you have won " +
        winCount +
        " times" +
        " and lost " +
        loseCount;
      winCount = winCount + 1;
    }
    if (input == paper && enemyOutput == scissors) {
      myOutputValue =
        username +
        ", you lose" +
        " you have won " +
        winCount +
        " times" +
        " and lost " +
        loseCount;
      loseCount = loseCount + 1;
    }
    if (input == paper && enemyOutput == paper) {
      myOutputValue =
        username +
        " , you lose " +
        " you have won " +
        winCount +
        " times" +
        " and lost " +
        loseCount;
      drawCount = drawCount + 1;
    }
    if (input == rock && enemyOutput == rock) {
      myOutputValue =
        username +
        ", you lose" +
        " you have won " +
        winCount +
        " times" +
        " and lost " +
        loseCount;
      drawCount = drawCount + 1;
    }
    if (input == rock && enemyOutput == scissors) {
      myOutputValue =
        username +
        ", you lose" +
        " you have won " +
        winCount +
        " times" +
        " and lost " +
        loseCount;
      winCount = winCount + 1;
    }
    if (input == rock && enemyOutput == paper) {
      myOutputValue =
        username +
        ", you lose" +
        " you have won " +
        winCount +
        " times" +
        " and lost " +
        loseCount;
      loseCount = loseCount + 1;
    }
    if (input !== rock && input !== scissors && input !== paper) {
      myOutputValue = "please input rock, paper or scissors";
    }
    var userWinPercentage = (winCount / totalGames) * 100;
    if (userWinPercentage > 50) {
      goodJob = username + " you are doing well!";
    }
    if (userWinPercentage < 50) {
      goodJob = username + " keep trying!";
    }
    // console.log(myOutputValue);
    // return `The computer chose ${enemyOutput} <br> You chose ${input}. <br> ${myOutputValue} <br> You lost ${loseCount} times, drawn ${drawCount} times and won ${winCount} times <br> You win ${userWinPercentage.toFixed(
    //   2
    // )}% of the time while the Computer win ${computerWinPercentage.toFixed(
    //   2
    // )}% of the time <br> Play again?`;
  }
  return `${myOutputValue} <br> ${goodJob}`;
};
