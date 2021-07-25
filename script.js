var currentGameMode = "waiting for user name";
var myOutputValue = "";
var winCount = 0;
var lossCount = 0;
var userName = "";
var englishResult = "";

//scissors paper rock logic
var playGame = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var resultNumber = randomInteger + 1;
  console.log("result Number #: " + resultNumber);
  if (resultNumber == 1) {
    englishResult = "scissors";
  }
  if (resultNumber == 2) {
    englishResult = "paper";
  }
  if (resultNumber == 3) {
    englishResult = "rock";
  }
  console.log("English Result: " + englishResult);
  return englishResult;
};

//Make two modes for the game which are either 'waiting for user' or 'play game'
var main = function (input) {
  if (currentGameMode == "waiting for user name") {
    // set the name as input
    userName = input;
    console.log(userName);
    //now that we have the name, switch the mode
    currentGameMode = "play game";
    console.log(currentGameMode);

    return (myOutputValue = "Hello " + userName);
  }

  if (currentGameMode == "play game") {
    var userGuess = input;
    var gameResult = playGame();
    console.log("User Guess: " + userGuess);
    console.log("gameResult: " + gameResult);
    console.log("game type :" + currentGameMode);

    //validation code output value is the default
    if (input !== "scissors" && input !== "paper" && input !== "rock") {
      MyOutputValue =
        'Please select either "scissors", "paper" or "rock" as your inputs.';
    }
    if (gameResult == userGuess) {
      myOutputValue =
        "Draw! You chose " +
        userGuess +
        "and the computer chose " +
        gameResult +
        " Total times you won" +
        winCount +
        " total times computer won " +
        lossCount;
    }
    if (gameResult == "scissors" && userGuess == "rock") {
      winCount = winCount + 1;
      myOutputValue =
        "Win! You chose " +
        userGuess +
        " and the computer chose " +
        gameResult +
        " Total times you won" +
        winCount +
        " total times computer won " +
        lossCount;
    }

    if (gameResult == "scissors" && userGuess == "paper") {
      lossCount = lossCount + 1;
      myOutputValue =
        "Lose! You chose " +
        userGuess +
        " and the computer chose " +
        gameResult +
        " Total times you won" +
        winCount +
        " total times computer won " +
        lossCount;
    }

    if (gameResult == "paper" && userGuess == "scissors") {
      winCount = winCount + 1;
      myOutputValue =
        "Win! You chose " +
        userGuess +
        " and the computer chose " +
        gameResult +
        " Total times you won" +
        winCount +
        " total times computer won " +
        lossCount;
    }

    if (gameResult == "paper" && userGuess == "rock") {
      lossCount = lossCount + 1;
      myOutputValue =
        "Lose! You chose " +
        userGuess +
        " and the computer chose " +
        gameResult +
        " Total times you won" +
        winCount +
        " total times computer won " +
        lossCount;
    }

    if (gameResult == "rock" && userGuess == "paper") {
      winCount = winCount + 1;
      myOutputValue =
        "Win! You chose " +
        userGuess +
        " and the computer chose " +
        gameResult +
        " Total times you won" +
        winCount +
        " total times computer won " +
        lossCount;
    }

    if (gameResult == "rock" && userGuess == "scissors") {
      lossCount = lossCount + 1;
      yOutputValue =
        "Lose! You chose " +
        userGuess +
        " and the computer chose " +
        gameResult +
        " Total times you won" +
        winCount +
        " total times computer won " +
        lossCount;
    } else {
      //default output value is Lose state
      myOutputValue =
        "You Lose! You chose " +
        userGuess +
        " and the computer chose " +
        gameResult +
        " Total times you won" +
        winCount +
        " total times computer won " +
        lossCount;
    }
    return myOutputValue;
  }
};
