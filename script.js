// global variables
var userName = ``;
var numPlayerWinCounter = 0;
var numComputerWinCounter = 0;
var numDrawsCounter = 0;

// game modes

var gameMode1 = `user to log in`;
var gameMode2 = `user to throw`;
var gameMode3 = `user to play`;
gameMode = gameMode1;

// generate random number
var generateRandomNo = function () {
  var randomNo = Math.ceil(Math.random() * 3);
  return randomNo;
};

// define outcome
var numberDefinition = function (generatedinteger) {
  var computerAction = `Default`;
  var computerPick = generateRandomNo();

  if (computerPick == 1) {
    computerAction = `scissors`;
  }

  if (computerPick == 2) {
    computerAction = `paper`;
  }

  if (computerPick == 3) {
    computerAction = `stone`;
  }

  return computerAction;
};

var genResetMsg = function () {
  return `Throw another action to play again!`;
};

// scissors Paper Stone - Basic
// user inputs scissor / paper / stone only

var main = function (input) {
  var computerResult = numberDefinition();
  var userThrow = ``;
  var resetMsg = genResetMsg();

  if (!input && gameMode == gameMode1) {
    return `Please input a username to start the game!`;
  }

  if (gameMode == gameMode1) {
    userName = input;
    gameMode = gameMode2;
    return `Hello ${userName}👋! Throw scissors / paper / stone to begin the game`;
  }

  if (gameMode == gameMode2) {
    userThrow = input;
  }

  // rules
  // user must input either scissors/paper/stone
  if (
    (gameMode == gameMode2 && userThrow == `scissors`) ||
    (gameMode == gameMode2 && userThrow == `paper`) ||
    (gameMode == gameMode2 && userThrow == `stone`)
  ) {
    gameMode = gameMode3;
  } else {
    return `Invalid input. You can only throw scissors / paper / stone.`;
  }

  if (gameMode == gameMode3 && userThrow == computerResult) {
    numDrawsCounter = numDrawsCounter + 1;
    gameMode = gameMode2;
    return `It is a draw! <br><br> User: ${userName} <br> Player wins: ${numPlayerWinCounter}. <br> Computer wins: ${numComputerWinCounter}. <br> Draw: ${numDrawsCounter}. <br><br>${resetMsg}`;
  }

  if (
    (gameMode == gameMode3 &&
      userThrow == `scissors` &&
      computerResult == `paper`) ||
    (gameMode == gameMode3 &&
      userThrow == `paper` &&
      computerResult == `stone`) ||
    (gameMode == gameMode3 &&
      userThrow == `stone` &&
      computerResult == `scissors`)
  ) {
    numPlayerWinCounter = numPlayerWinCounter + 1;
    gameMode = gameMode2;
    return `Congratulations! You won! <br><br> User: ${userName} <br> Player wins: ${numPlayerWinCounter}. <br> Computer wins: ${numComputerWinCounter}. <br> Draw: ${numDrawsCounter}.<br><br>${resetMsg}`;
  }

  if (
    (gameMode == gameMode3 &&
      userThrow == `scissors` &&
      computerResult == `stone`) ||
    (gameMode == gameMode3 &&
      userThrow == `paper` &&
      computerResult == `scissors`) ||
    (gameMode == gameMode3 && userThrow == `stone` && computerResult == `paper`)
  ) {
    numComputerWinCounter = numComputerWinCounter + 1;
    gameMode = gameMode2;
    return `Sorry you lost! <br><br> User: ${userName} <br>Player wins: ${numPlayerWinCounter}. <br> Computer wins: ${numComputerWinCounter}. <br> Draw: ${numDrawsCounter}.<br><br>${resetMsg}`;
  }
};

//  return `${myOutputValue} You threw ${input} and the computer threw ${computerResult}.`;
