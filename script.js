// Game variables
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var reversedScissors = "reversed scissors";
var reversedPaper = "reversed paper";
var reversedStone = "reversed stone";

// Variables to track player's win lose and draw
var numPlayerWins = 0;
var numPlayerDraw = 0;
var numOfGamePlayed = 0;
var numPlayerLoss = 0;

// To track player's username
var username = ""; // false value

//Game Mode
var gameMode = "";
var regular = "regular";
var reversedSPS = "reversed sps";

// To randomzie the program ouputs
var randomObject = function () {
  var randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber == 1) return scissors;

  if (randomNumber == 2) return paper;

  if (randomNumber == 3) return stone;
};

// To check if player wins
var checkPlayerWins = function (userInput, programOutput) {
  if (userInput == paper && programOutput == stone) return true;
  if (userInput == stone && programOutput == scissors) return true;
  if (userInput == scissors && programOutput == paper) return true;
  if (userInput == reversedScissors && programOutput == stone) return true;
  if (userInput == reversedPaper && programOutput == scissors) return true;
  if (userInput == reversedStone && programOutput == paper) return true;
};

// To check if player draws
var checkPlayerDraw = function (userInput, programOutput) {
  if (programOutput == userInput) return true;
  if (programOutput == paper && userInput == reversedPaper) return true;
  if (programOutput == stone && userInput == reversedStone) return true;
  if (programOutput == scissors && userInput == reversedScissors) return true;
};

//To retrieve icon for print out message
var displayIcon = function (object) {
  if (object == scissors || object == reversedScissors) return " ✂️";
  if (object == paper || object == reversedPaper) return " 📄";
  if (object == stone || object == reversedStone) return " 🗿";
};

var startMessage = function (username) {
  if (gameMode == reversedSPS) {
    return `Thank you for playing, ${username}! <br> To start the game, enter reversed scissors, reversed paper, reversed stone`;
  }
  return `Thank you for playing, ${username}! <br> To start the game, enter scissors, paper, stone`;
};

// To display print out message
var resultMessage = function (userInput, programOutput) {
  var userInputIcon = displayIcon(userInput);
  var programOutputIcon = displayIcon(programOutput);
  return (
    "The computer chose " +
    programOutput +
    programOutputIcon +
    "." +
    "<br>" +
    "You chose " +
    userInput +
    userInputIcon +
    "."
  );
};

// To display player's record win, lose or draw
var recordMessage = function (
  username,
  numPlayerWins,
  numPlayerDraw,
  numPlayerLoss,
  numOfGamePlayed
) {
  var message = `So far ${username}, you've been winning ${numPlayerWins}/${numOfGamePlayed}`;
  var benchmark = Math.ceil(numOfGamePlayed / 2);
  console.log("bencmark:" + benchmark);
  if (numPlayerWins >= benchmark) {
    return `${message}. Pretty Good! <br><br> Win: ${numPlayerWins} | Lose: ${numPlayerLoss} | Draw: ${numPlayerDraw} <br><br>`;
  } else {
    return `${message}. Keep on trying! <br><br> Win: ${numPlayerWins} | Lose: ${numPlayerLoss} | Draw: ${numPlayerDraw} <br><br>`;
  }
};

// To display new game instuction message
var newGameInstruction = function (gameMode) {
  if (gameMode == reversedSPS) {
    return 'Now you can type " reversed scissors", " reversed paper" or " reversed stone" to play another round!';
  }
  return 'Now you can type "scissors", "paper" or "stone" to play another round!';
};

var main = function (input) {
  // Input username
  if (!username) {
    // Since the empty string is a false value then !false returns true
    if (!input) {
      return "Please enter your name to start the game!";
    }
    username = input;
    return `Hi ${username}! <br> Please choose your game mode: <br> 1. Regular <br> 2. Reversed sps`;
  }

  // Choose and validate game mode
  if (!gameMode) {
    console.log("c");
    if (!input) {
      console.log("f");
      return "Please choose your game mode: <br> 1. Regular <br> 2. Reversed sps";
    }
    if (input.toLowerCase() != regular && input.toLowerCase() != reversedSPS) {
      console.log("e");
      return "Please choose your game mode: <br> 1. Regular <br> 2. Reversed sps";
    }
    console.log("a");
    gameMode = input.toLowerCase();
    console.log("b");
    return startMessage(username);
  }

  var programOutput = randomObject();
  var userInput = input.toLowerCase();
  console.log("draw:" + numPlayerDraw);
  console.log("loss:" + numPlayerLoss);
  console.log("win:" + numPlayerWins);
  console.log("play" + numOfGamePlayed);

  var displayMessage = resultMessage(userInput, programOutput);

  // Validate Input of SPS according to their mode
  if (
    gameMode == regular &&
    userInput != paper &&
    userInput != scissors &&
    userInput != stone
  ) {
    return 'Input invalid. Please enter "scissors", "paper" or "stone" to start the game!';
  } else if (
    gameMode == reversedSPS &&
    userInput != reversedPaper &&
    userInput != reversedScissors &&
    userInput != reversedStone
  ) {
    return 'Input invalid. Please enter " reversed scissors", "reversed paper" or " reversed stone" to start the game!';
  }

  // Game Play Start
  if (checkPlayerDraw(userInput, programOutput)) {
    numPlayerDraw += 1;
    numOfGamePlayed += 1;
    console.log(numPlayerDraw, numOfGamePlayed);
    return (
      displayMessage +
      "<br><br>" +
      "It's a draw! Try again next time." +
      "<br><br> " +
      recordMessage(
        username,
        numPlayerWins,
        numPlayerDraw,
        numPlayerLoss,
        numOfGamePlayed
      ) +
      newGameInstruction(gameMode)
    );
  }

  // else check if player wins
  if (checkPlayerWins(userInput, programOutput)) {
    numPlayerWins += 1;
    numOfGamePlayed += 1;
    console.log(numPlayerWins, numOfGamePlayed);
    return (
      displayMessage +
      "<br><br>" +
      "You win! Congratulations." +
      "<br><br> " +
      recordMessage(
        username,
        numPlayerWins,
        numPlayerDraw,
        numPlayerLoss,
        numOfGamePlayed
      ) +
      newGameInstruction(gameMode)
    );
  }

  // else player loses
  numPlayerLoss += 1;
  numOfGamePlayed += 1;
  console.log(numPlayerLoss, numOfGamePlayed);
  return (
    displayMessage +
    "<br><br>" +
    "You lose! Bummer." +
    "<br><br> " +
    recordMessage(
      username,
      numPlayerWins,
      numPlayerDraw,
      numPlayerLoss,
      numOfGamePlayed
    ) +
    newGameInstruction(gameMode)
  );
};
