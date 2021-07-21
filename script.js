// PROJECT 1 : Scissors Paper Stone
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
// user win, lose or draw

var roundsPlayerWin = 0;
var roundsSystemWin = 0;
var roundsDraw = 0;
var gameMode = `Please key in your name!`;
var username = "";
var prevWinner = ``;
var comOrPlayer = `player`;

// create random number generator to represent the three actions
var generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  var sps = "";
  if (randomNumber == 0) {
    return "scissors";
  }
  if (randomNumber == 1) {
    return "paper";
  }
  if (randomNumber == 2) {
    return "stone";
  }
  return sps;
};

///// THE BASIC SPS /////
var normalGame = function (username, playerGuess) {
  var randomSPS = generateRandomNumber();
  var systemChoiceStatement = `Computer chose ${randomSPS}`;
  var inputChoiceStatement = `You chose ${playerGuess}`;
  var anotherRoundStatement = `Now you can type "scissors" "paper" or "stone" to play another round!`;
  console.log(randomSPS);

  var message = `${username}, something went wrong! <br> This round is not recorded. <br><br> Please try again with inputs "scissors", "paper" or "stone".`;

  // win conditions
  if (
    (playerGuess == "scissors" && randomSPS == "paper") ||
    (playerGuess == "paper" && randomSPS == "stone") ||
    (playerGuess == "stone" && randomSPS == "scissors")
  ) {
    roundsPlayerWin = roundsPlayerWin + 1;
    message = `${username}, you win! Lucky!`;
  }

  // lose conditions
  if (
    (playerGuess == "scissors" && randomSPS == "stone") ||
    (playerGuess == "paper" && randomSPS == "scissors") ||
    (playerGuess == "stone" && randomSPS == "paper")
  ) {
    roundsSystemWin = roundsSystemWin + 1;
    message = `${username}, you lose! Bummer!`;
  }

  // draw conditions
  if (playerGuess == randomSPS) {
    roundsDraw = roundsDraw + 1;
    message = `${username}, you draw! Another round!`;
  }
  var totalGames = roundsPlayerWin + roundsSystemWin + roundsDraw;
  var winningPercentage = ((100 * roundsPlayerWin) / totalGames).toFixed(2);

  var goodOrBadStatement = function () {
    if (winningPercentage > 50) {
      return `You've win more than half the games! Pretty good!`;
    } else if (winningPercentage < 50) {
      return `You've win less than half the games! Try harder!`;
    } else if ((winningPercentage = 50)) {
      return `You've win exactly half the games!`;
    }
  };

  return (
    message +
    "<br>" +
    "<br>" +
    systemChoiceStatement +
    "<br>" +
    inputChoiceStatement +
    "<br>" +
    "<br>" +
    anotherRoundStatement +
    "<br>" +
    "<br>" +
    `Rounds won: ${roundsPlayerWin}. <br> Round lost: ${roundsSystemWin}. <br> Rounds draw: ${roundsDraw}. <br> Winning percentage: ${winningPercentage}%` +
    "<br>" +
    "<br>" +
    goodOrBadStatement()
  );
};

///// THE REVERSED SPS /////
var reverseGame = function (username, playerGuess) {
  var randomSPS = generateRandomNumber();
  var systemChoiceStatement = `Computer chose ${randomSPS}`;
  var inputChoiceStatement = `You chose ${playerGuess}`;
  var anotherRoundStatement = `Now you can type "scissors" "paper" or "stone" to play another round!`;
  console.log(randomSPS);

  var message = `${username}, something went wrong! <br> This round is not recorded. <br><br> Please try again with inputs "reversed scissors", "reversed paper" or "reversed stone".`;

  // win conditions
  if (
    (playerGuess == "reversed scissors" && randomSPS == "stone") ||
    (playerGuess == "reversed paper" && randomSPS == "scissors") ||
    (playerGuess == "reversed stone" && randomSPS == "paper")
  ) {
    roundsPlayerWin = roundsPlayerWin + 1;
    message = `${username}, you win! Lucky!`;
  }

  // lose conditions
  if (
    (playerGuess == "reversed scissors" && randomSPS == "paper") ||
    (playerGuess == "reversed paper" && randomSPS == "stone") ||
    (playerGuess == "reversed stone" && randomSPS == "scissors")
  ) {
    roundsSystemWin = roundsSystemWin + 1;
    message = `${username}, you lose! Bummer!`;
  }

  // draw conditions
  if (playerGuess == `reversed ` + randomSPS) {
    roundsDraw = roundsDraw + 1;
    message = `${username}, you draw! Another round!`;
  }
  var totalGames = roundsPlayerWin + roundsSystemWin + roundsDraw;
  var winningPercentage = ((100 * roundsPlayerWin) / totalGames).toFixed(2);

  var goodOrBadStatement = function () {
    if (winningPercentage > 50) {
      return `You've win more than half the games! Pretty good!`;
    } else if (winningPercentage < 50) {
      return `You've win less than half the games! Try harder!`;
    } else if ((winningPercentage = 50)) {
      return `You've win exactly half the games!`;
    }
  };

  return (
    message +
    "<br>" +
    "<br>" +
    systemChoiceStatement +
    "<br>" +
    inputChoiceStatement +
    "<br>" +
    "<br>" +
    anotherRoundStatement +
    "<br>" +
    "<br>" +
    `Rounds won: ${roundsPlayerWin}. <br> Round lost: ${roundsSystemWin}. <br> Rounds draw: ${roundsDraw}. <br> Winning percentage: ${winningPercentage}%` +
    "<br>" +
    "<br>" +
    goodOrBadStatement()
  );
};

///// THE KOREAN SPS /////
var koreanGame = function (username, playerGuess) {
  var randomSPS = generateRandomNumber();
  var systemChoiceStatement = `Computer chose ${randomSPS}`;
  var inputChoiceStatement = `You chose ${playerGuess}`;
  var anotherRoundStatement = `Now you can type "scissors" "paper" or "stone" to play another round!`;
  console.log(randomSPS);

  var message = `${username}, something went wrong! <br> This round is not recorded. <br><br> Please try again with inputs "scissors", "paper" or "stone".`;

  // prev round win conditions
  if (
    (playerGuess == "scissors" && randomSPS == "paper") ||
    (playerGuess == "paper" && randomSPS == "stone") ||
    (playerGuess == "stone" && randomSPS == "scissors")
  ) {
    prevWinner = `player`;
    message = `${username}, you win! You need a draw next!`;
  }

  // prev round lose conditions
  if (
    (playerGuess == "scissors" && randomSPS == "stone") ||
    (playerGuess == "paper" && randomSPS == "scissors") ||
    (playerGuess == "stone" && randomSPS == "paper")
  ) {
    prevWinner = `system`;
    message = `${username}, you lose! You need a win next, then a draw!`;
  }

  // final win/loss conditions
  if (playerGuess == randomSPS && prevWinner == `player`) {
    roundsPlayerWin = roundsPlayerWin + 1;
    prevWinner = `none`;
    message = `${username}, you draw so you win! Another round!`;
  } else if (playerGuess == randomSPS && prevWinner == `system`) {
    roundsSystemWin = roundsSystemWin + 1;
    prevWinner = `none`;
    message = `${username}, you draw so you lose! Another round!`;
  }

  var totalGames = roundsPlayerWin + roundsSystemWin + roundsDraw;
  var winningPercentage = ((100 * roundsPlayerWin) / totalGames).toFixed(2);

  var goodOrBadStatement = function () {
    if (winningPercentage > 50) {
      return `You've win more than half the games! Pretty good!`;
    } else if (winningPercentage < 50) {
      return `You've win less than half the games! Try harder!`;
    } else if ((winningPercentage = 50)) {
      return `You've win exactly half the games!`;
    }
  };

  return (
    message +
    "<br>" +
    "<br>" +
    systemChoiceStatement +
    "<br>" +
    inputChoiceStatement +
    "<br>" +
    "<br>" +
    anotherRoundStatement +
    "<br>" +
    "<br>" +
    `Rounds won: ${roundsPlayerWin}. <br> Round lost: ${roundsSystemWin}. <br> Rounds draw: ${roundsDraw}. <br> Winning percentage: ${winningPercentage}%` +
    "<br>" +
    "<br>" +
    goodOrBadStatement() +
    "<br>" +
    "<br>" +
    `Feel free to change between "normal", "reverse" or "korean" mode!`
  );
};

var main = function (input) {
  var myOutputValue = ``;

  if (gameMode == `Please key in your name!` && input == ``) {
    myOutputValue = `Please key in your name!`;
  } else if (gameMode == `Please key in your name!` && input !== ``) {
    username = input;
    gameMode = `chooseMode`;
    myOutputValue = `Hello ${username}. <br> Enter your preferred mode, "normal", "reverse" or "korean".`;
  }

  if (
    gameMode == `chooseMode` &&
    input !== `reverse` &&
    input !== `normal` &&
    input !== `korean`
  ) {
    myOutputValue = `Hello ${username}. <br> Enter your preferred mode, "normal", "reverse" or "korean".`;
  } else if (gameMode == `chooseMode` && input == `normal`) {
    gameMode = `normal`;
    myOutputValue = `Hello ${username}. <br> You chose NORMAL mode!<br> Choose between "scissors", "paper" or "stone"`;
  } else if (gameMode == `chooseMode` && input == `reverse`) {
    gameMode = `reverse`;
    myOutputValue = `Hello ${username}. <br> You chose REVERSE mode!<br> Choose between "reversed scissors", "reversed paper" or "reversed stone"`;
  } else if (gameMode == `chooseMode` && input == `korean`) {
    gameMode = `korean`;
    myOutputValue = `Hello ${username}. <br> You chose KOREAN mode!<br> Choose between "scissors", "paper" or "stone"`;
  } else if (
    gameMode == `normal` &&
    input !== `reverse` &&
    input !== `korean` &&
    comOrPlayer == `player`
  ) {
    myOutputValue = normalGame(username, input);
  } else if (
    gameMode == `reverse` &&
    input !== `normal` &&
    input !== `korean` &&
    comOrPlayer == `player`
  ) {
    myOutputValue = reverseGame(username, input);
  } else if (
    gameMode == `korean` &&
    input !== `normal` &&
    input !== `reverse` &&
    comOrPlayer == `player`
  ) {
    myOutputValue = koreanGame(username, input);
  } else if (
    gameMode == `normal` &&
    input !== `reverse` &&
    input !== `korean` &&
    comOrPlayer == `com`
  ) {
    myOutputValue = normalGame(username, generateRandomNumber()); //only normal game works
  } else if (
    gameMode == `reverse` &&
    input !== `normal` &&
    input !== `korean` &&
    comOrPlayer == `com`
  ) {
    myOutputValue = reverseGame(username, `reversed ` + generateRandomNumber()); //dont work
  } else if (
    gameMode == `korean` &&
    input !== `normal` &&
    input !== `reverse` &&
    comOrPlayer == `com`
  ) {
    myOutputValue = koreanGame(username, generateRandomNumber()); //dont work
  } else if (gameMode == `normal` && input == `reverse`) {
    gameMode = `reverse`;
    myOutputValue = `Hello ${username}. <br> You chose REVERSE mode!<br> Choose between "reversed scissors", "reversed paper" or "reversed stone"`;
  } else if (gameMode == `normal` && input == `korean`) {
    gameMode = `korean`;
    myOutputValue = `You chose KOREAN mode!<br> Choose between "scissors", "paper" or "stone"`;
  } else if (gameMode == `reverse` && input == `normal`) {
    gameMode = `normal`;
    myOutputValue = `Hello ${username}. <br> You chose NORMAL mode!<br> Choose between "scissors", "paper" or "stone"`;
  } else if (gameMode == `reverse` && input == `korean`) {
    gameMode = `korean`;
    myOutputValue = `You chose KOREAN mode!<br> Choose between "scissors", "paper" or "stone"`;
  } else if (gameMode == `korean` && input == `normal`) {
    gameMode = `normal`;
    myOutputValue = `Hello ${username}. <br> You chose NORMAL mode!<br> Choose between "scissors", "paper" or "stone"`;
  } else if (gameMode == `korean` && input == `reverse`) {
    gameMode = `reverse`;
    myOutputValue = `Hello ${username}. <br> You chose REVERSE mode!<br> Choose between "reversed scissors", "reversed paper" or "reversed stone"`;
  }

  ////// HERE IS EDITED
  if (
    (gameMode == `normal` || gameMode == `reverse` || gameMode == `korean`) &&
    input == `com`
  ) {
    comOrPlayer = `com`;
    myOutputValue = `You chose to have computer to make a guess for you. Now click submit to continue with the game`;
  } else if (
    (gameMode == `normal` || gameMode == `reverse` || gameMode == `korean`) &&
    input == `player`
  ) {
    comOrPlayer = `player`;
    myOutputValue = `You chose to have make your own guess. Now click type your guess and submit to continue with the game`;
  }
  return myOutputValue;
};
