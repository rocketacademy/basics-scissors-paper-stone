var numOfPlayerWins = 0;
var numOfComputerWins = 0;
var numOfDraws = 0;
var username = "";
var enterYourNameFirst = "enter your name first";
var gameMode = "Normal";

var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

//assigning values to scissors, paper or stone

var generateComputersThrow = function () {
  var typesOfThrows = 3;
  var randomComputersThrow = generateRandomInteger(typesOfThrows);
  if (randomComputersThrow == 1) {
    return "scissors";
  }
  if (randomComputersThrow == 2) {
    return "paper";
  }
  if (randomComputersThrow == 3) {
    return "stone";
  }
  return "error";
};

//Enter name first

var main = function (playersThrow) {
  var myOutputValue = "Please only throw scissors, paper or stone.";

  //First stage - enter name first

  if (enterYourNameFirst == "enter your name first") {
    username = playersThrow;
    enterYourNameFirst = "begin game";
    gameMode = "Normal";
    console.log(enterYourNameFirst);
    return "hello " + username + ", you may now begin the game.";
  }

  //Second Stage - allow the game to proceed after username is collected (Normal Mode)
  if (enterYourNameFirst == "begin game" && gameMode == "Normal") {
    var computersSPS = generateComputersThrow();
    console.log("computer throws " + computersSPS);
    //draw scenarios
    if (
      (playersThrow == "scissors" && computersSPS == "scissors") ||
      (playersThrow == "paper" && computersSPS == "paper") ||
      (playersThrow == "stone" && computersSPS == "stone") ||
      (playersThrow == "reversed scissors" && computersSPS == "scissors") ||
      (playersThrow == "reversed paper" && computersSPS == "paper") ||
      (playersThrow == "reversed stone" && computersSPS == "stone")
    ) {
      numOfDraws = numOfDraws + 1;
      return (
        "<B>Game mode: </b>" +
        gameMode +
        "<BR><BR>" +
        username +
        "'s throw: " +
        playersThrow +
        "<BR><BR>Computer's throw: " +
        computersSPS +
        "<BR><BR>You draw!<BR><BR><B>Scoreboard</B><BR><BR>Player: " +
        numOfPlayerWins +
        "<BR><BR>Computer: " +
        numOfComputerWins +
        "<BR><BR>Number of times you've drawed: " +
        numOfDraws
      );
    }
    //lose scenarios
    if (
      (playersThrow == "scissors" && computersSPS == "stone") ||
      (playersThrow == "paper" && computersSPS == "scissors") ||
      (playersThrow == "stone" && computersSPS == "paper") ||
      (playersThrow == "reversed scissors" && computersSPS == "paper") ||
      (playersThrow == "reversed paper" && computersSPS == "stone") ||
      (playersThrow == "reversed stone" && computersSPS == "scissors")
    ) {
      numOfComputerWins = numOfComputerWins + 1;
      return (
        "<B>Game mode: </b>" +
        gameMode +
        "<BR><BR>" +
        username +
        "'s throw: " +
        playersThrow +
        "<BR><BR>Computer's throw: " +
        computersSPS +
        "<BR><BR>You LOOOSER 🤡🤡🤡 <BR><BR><B>Scoreboard</B><BR><BR>Player: " +
        numOfPlayerWins +
        "<BR><BR>Computer: " +
        numOfComputerWins +
        "<BR><BR>Number of times you've drawed: " +
        numOfDraws
      );
    }
    //win scenarios
    if (
      (playersThrow == "scissors" && computersSPS == "paper") ||
      (playersThrow == "paper" && computersSPS == "stone") ||
      (playersThrow == "stone" && computersSPS == "scissors") ||
      (playersThrow == "reversed scissors" && computersSPS == "stone") ||
      (playersThrow == "reversed paper" && computersSPS == "scissors") ||
      (playersThrow == "reversed stone" && computersSPS == "paper")
    ) {
      numOfPlayerWins = numOfPlayerWins + 1;
      return (
        "<B>Game mode: </b>" +
        gameMode +
        "<BR><BR>" +
        username +
        "'s throw: " +
        playersThrow +
        "<BR><BR>Computer's throw: " +
        computersSPS +
        "<BR><BR>U A WINNER 🎉🎉🎉<BR><BR><B>Scoreboard</B><BR><BR>Player: " +
        numOfPlayerWins +
        "<BR><BR>Computer: " +
        numOfComputerWins +
        "<BR><BR>Number of times you've drawed: " +
        numOfDraws
      );
    }
  }

  //Second Stage - allow the game to proceed after username is collected (reversed Mode)//
  if (playersThrow == "reversed") {
    gameMode = "reversed";
    return (
      "Hello, " +
      username +
      ". You've chose the reversed mode. You may proceed with the game."
    );
  }

  if (enterYourNameFirst == "begin game" && gameMode == "reversed") {
    var computersSPS = generateComputersThrow();
    console.log("computer throws " + computersSPS);
    //draw scenarios//
    if (
      (playersThrow == "scissors" && computersSPS == "scissors") ||
      (playersThrow == "paper" && computersSPS == "paper") ||
      (playersThrow == "stone" && computersSPS == "stone")
    ) {
      numOfDraws = numOfDraws + 1;
      return (
        "<B>Game mode: </b>" +
        gameMode +
        "<BR><BR>" +
        username +
        "'s throw: " +
        playersThrow +
        "<BR><BR>Computer's throw: " +
        computersSPS +
        "<BR><BR>You draw!<BR><BR><B>Scoreboard</B><BR><BR>Player: " +
        numOfPlayerWins +
        "<BR><BR>Computer: " +
        numOfComputerWins +
        "<BR><BR>Number of times you've drawed: " +
        numOfDraws
      );
    }
    //lose scenarios//
    if (
      (playersThrow == "scissors" && computersSPS == "paper") ||
      (playersThrow == "paper" && computersSPS == "stone") ||
      (playersThrow == "stone" && computersSPS == "scissors")
    ) {
      numOfComputerWins = numOfComputerWins + 1;
      return (
        "<B>Game mode: </b>" +
        gameMode +
        "<BR><BR>" +
        username +
        "'s throw: " +
        playersThrow +
        "<BR><BR>Computer's throw: " +
        computersSPS +
        "<BR><BR>You LOOOSER 🤡🤡🤡 <BR><BR><B>Scoreboard</B><BR><BR>Player: " +
        numOfPlayerWins +
        "<BR><BR>Computer: " +
        numOfComputerWins +
        "<BR><BR>Number of times you've drawed: " +
        numOfDraws
      );
    }
    //win scenarios//
    if (
      (playersThrow == "scissors" && computersSPS == "stone") ||
      (playersThrow == "paper" && computersSPS == "scissors") ||
      (playersThrow == "stone" && computersSPS == "paper")
    ) {
      numOfPlayerWins = numOfPlayerWins + 1;
      return (
        "<B>Game mode: </b>" +
        gameMode +
        "<BR><BR>" +
        username +
        "'s throw: " +
        playersThrow +
        "<BR><BR>Computer's throw: " +
        computersSPS +
        "<BR><BR>U A WINNER 🎉🎉🎉<BR><BR><B>Scoreboard</B><BR><BR>Player: " +
        numOfPlayerWins +
        "<BR><BR>Computer: " +
        numOfComputerWins +
        "<BR><BR>Number of times you've drawed: " +
        numOfDraws
      );
    }
  }

  return myOutputValue;
};
