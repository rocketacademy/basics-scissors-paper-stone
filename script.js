// PROJECT 1 PART 1 (Incl More Comfortable) + PART 2 (Base)
// Global values used

var scissors = "scissors";
var paper = "paper";
var stone = "stone";

var reverseScissors = "reversed scissors";
var reversePaper = "reversed paper";
var reverseStone = "reversed stone";

var playerWinCount = 0;
var gameCount = 0;
var winRate = Math.round((playerWinCount / gameCount) * 100) + "%";
var gameMode = "waiting for username";
var userName = "";

// Creating functions to randomly output "scissors", "paper", or "stone"

var rollingRandomNumber = function (input) {
  //return 2; //for testing; remove when done testing
  var randomOutput = Math.floor(Math.random() * 3) + 1;
  console.log("rolling random number to be assigned to SPS later");
  return randomOutput;
};

var assignNumberToSPS = function (input) {
  var rolledNumber = rollingRandomNumber();
  console.log(
    "rolling random number to assign to SPS. the number is " + rolledNumber
  );
  var numberToSPS = "some number was assigned but it wasnt 1 or 2 or 3";

  //Assign random number to scissors, paper or stone

  if (rolledNumber == 1) {
    numberToSPS = scissors;
  }

  if (rolledNumber == 2) {
    numberToSPS = paper;
  }

  if (rolledNumber == 3) {
    numberToSPS = stone;
  }

  console.log("SPS is " + numberToSPS);
  return numberToSPS;
};

// Create functions for win, draw and loss;

var userWins = function (userGuess, programmeOutputsSPS) {
  return (
    ((userGuess == scissors || userGuess == reverseStone) &&
      programmeOutputsSPS == paper) ||
    ((userGuess == paper || userGuess == reverseScissors) &&
      programmeOutputsSPS == stone) ||
    ((userGuess == stone || userGuess == reversePaper) &&
      programmeOutputsSPS == scissors)
  );
};

var userDraws = function (userGuess, programmeOutputsSPS) {
  return (
    userGuess == programmeOutputsSPS ||
    (userGuess == reversePaper && programmeOutputsSPS == paper) ||
    (userGuess == reverseStone && programmeOutputsSPS == stone) ||
    (userGuess == reverseScissors && programmeOutputsSPS == scissors)
  );
};

var userLoses = function (userGuess, programmeOutputsSPS) {
  return (
    ((userGuess == scissors || userGuess == reversePaper) &&
      programmeOutputsSPS == stone) ||
    ((userGuess == paper || userGuess == reverseStone) &&
      programmeOutputsSPS == scissors) ||
    ((userGuess == stone || userGuess == reverseScissors) &&
      programmeOutputsSPS == paper)
  );
};

// Create main function:

var main = function (input) {
  var programmeOutputsSPS = assignNumberToSPS();
  console.log("programe outputs " + programmeOutputsSPS);

  // If game mode is "waiting on user name" ...

  if (gameMode == "waiting for username") {
    userName = input;
    gameMode = "scissors paper stone mode";
    return (
      "Welcome, " +
      userName +
      ". Now key in 'scissors', 'paper', or 'stone' to play. Plus, try adding 'reverse' and see what happens'"
    );
  }

  // If game mode has switched to 'scissors paper stone mode' ...
  else if (gameMode == "scissors paper stone mode") {
    var userGuess = input.toLowerCase();

    // Eliminate NaN values for win rate in first round of game
    if (playerWinCount == 0 || gameCount == 0) {
      winRate = "0";
    }

    //Creating messages to be shown
    var messageWinRate = function (winRate) {
      if (winRate <= 60) {
        return " Your win rate is " + winRate + "% - keep trying!";
      } else return " Your win rate is " + winRate + "% - doing well!";
    };

    var standardMessage =
      "<br><br> You chose " +
      userGuess +
      " and the computer chose " +
      programmeOutputsSPS +
      ". <br><br>";

    //User wins
    if (userWins(userGuess, programmeOutputsSPS) == true) {
      playerWinCount = playerWinCount + 1;
      gameCount = gameCount + 1;
      winRate = Math.round((playerWinCount / gameCount) * 100);
      console.log("win rate = " + winRate + " and game no = " + gameCount);
      return "Congrats! You won." + standardMessage + messageWinRate(winRate);

      //User draws
    } else if (userDraws(userGuess, programmeOutputsSPS) == true) {
      gameCount = gameCount + 1;
      winRate = Math.round((playerWinCount / gameCount) * 100);
      console.log("win rate = " + winRate + " and game no = " + gameCount);
      return "It's a tie." + standardMessage + messageWinRate(winRate);

      //User loses
    } else if (userLoses(userGuess, programmeOutputsSPS) == true) {
      gameCount = gameCount + 1;
      winRate = Math.round((playerWinCount / gameCount) * 100);
      console.log("win rate = " + winRate + " and game no = " + gameCount);
      return "You lost. " + standardMessage + messageWinRate(winRate);
    }
    return "Did you enter 'scissors', 'paper' or 'stone' exactly?";
  }
};
