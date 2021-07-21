// store game mode
var currentGameMode = "waiting for username";

// set game mode
var setGameMode = function (userName, input) {
  if (input == "reverse") {
    currentGameMode = "reversed";
    stateWinUser = 0;
    stateWinComp = 0;
    stateDraw = 0;
    stateWinUserPercent = 0;
    stateWinCompPercent = 0;
    numGamesPlayed = 0;
    return `Hey ${userName}, initializing game in reversed mode.<br><br>Enter "scissors" "paper" or "stone" to begin playing in new mode.`;
  }
  if (input == "normal") {
    currentGameMode = "normal";
    stateWinUser = 0;
    stateWinComp = 0;
    stateDraw = 0;
    stateWinUserPercent = 0;
    stateWinCompPercent = 0;
    numGamesPlayed = 0;
    return `Hey ${userName}, initializing game in normal mode.<br><br>Enter "scissors" "paper" or "stone" to begin playing in new mode.`;
  }
  if (input == "korean") {
    currentGameMode = "korean";
    stateWinUser = 0;
    stateWinComp = 0;
    stateDraw = 0;
    stateWinUserPercent = 0;
    stateWinCompPercent = 0;
    numGamesPlayed = 0;
    lastWinner = "";
    return `Hey ${userName}, initializing game in korean mode.<br><br>Enter "scissors" "paper" or "stone" to begin playing in new mode.`;
  }
};

// store userName
var userName = "";

// validate input for username
var runCheckInputUser = function (input) {
  if (input == "") return "TRUE";
  return "FALSE";
};

// set display message if input validation for username is met
var welcomeUser = function (input) {
  userName = input;
  currentGameMode = "normal";
  return `Welcome ${userName}! <br><br>Enter "scissors", "paper" or "stone" to start playing.<br><br>Like a challenge? <br>You can play different game modes. Enter "reverse" or "korean" to start a new game in reversed or korean mode. Enter "normal" to get back to normal gameplay.<br><br>Current Game Mode: ${currentGameMode}`;
};

// input validation for username
var inputValidationUser = function (input) {
  if (runCheckInputUser(input) == "TRUE") {
    return `Please enter your username to start playing.`;
  }
  return welcomeUser(input);
};

// win-loss record
stateWinUser = 0;
stateWinComp = 0;
stateDraw = 0;
stateWinUserPercent = 0;
stateWinCompPercent = 0;
numGamesPlayed = 0;
// store last Winner
var lastWinner = "";

var calcWinUserPercent = function () {
  var winPercent = Math.floor((stateWinUser / numGamesPlayed) * 100);
  return winPercent;
};

// calculate win % of user
var getWinUserPercent = function () {
  if (stateWinUser == 0) {
    return `${userName} has won 0 times.`;
  }
  return `${userName} has won ${stateWinUser} time(s), which is ${calcWinUserPercent()}% of the time.`;
};

// calculate win % of computer
var getWinCompPercent = function () {
  var calcWinCompPercent = Math.floor((stateWinComp / numGamesPlayed) * 100);
  if (stateWinComp == 0) {
    return `The computer has won 0 times.`;
  }
  return `Computer has won ${stateWinComp} time(s) which is ${calcWinCompPercent}% of the time.`;
};

// store computer value
var compHand = 0;
// store user input
var userHand = 0;

// mode for user to have hand generated randomly if input box is left blank
var userAutoHand = function (input) {
  if (input == "") {
    input = getRandomValue();
  }
  return input;
};

// generate random number
var getRandomNumber = function () {
  // generate random whole number from 1 to 3
  var setRandomInteger = Math.floor(Math.random() * 3) + 1;
  return setRandomInteger;
};

// generate random game values
var getRandomValue = function () {
  var randomValue = getRandomNumber();
  // assign number to game values
  if (randomValue == 1) {
    return "scissors";
  }
  if (randomValue == 2) {
    return "paper";
  }
  return "stone";
};

// --- input checks and conditions ---

// validate input
var runCheckInput = function (input) {
  if (
    input == "" ||
    input !== "reverse" ||
    input !== "computer" ||
    input !== "scissors" ||
    input !== "paper" ||
    input !== "stone" ||
    input !== "reversed scissors" ||
    input !== "reversed paper" ||
    input !== "reversed stone"
  )
    return "TRUE";
  return "FALSE";
};

// input validation function
var inputValidation = function (userName, input) {
  return `Please enter "scissors" "paper" or "stone" to start playing!
    <br><br> Like a challenge? <br>You can play different game modes. Enter "reverse" or "korean" to start new game in reversed or korean mode. Enter "normal" to get back to normal gameplay.`;
};

// check if user won
var runCheckWin = function (input) {
  if (
    ((input == "reversed paper" || input == "stone") &&
      compHand == "scissors") ||
    ((input == "reversed stone" || input == "scissors") &&
      compHand == "paper") ||
    ((input == "reversed scissors" || input == "paper") && compHand == "stone")
  )
    return "TRUE";
  return "FALSE";
};

// check if user lost
var runCheckLost = function (input) {
  if (
    ((input == "reversed stone" || input == "paper") &&
      compHand == "scissors") ||
    ((input == "reversed scissors" || input == "stone") &&
      compHand == "paper") ||
    ((input == "reversed paper" || input == "scissors") && compHand == "stone")
  )
    return "TRUE";
  return "FALSE";
};

// check if user lost for reverse mode
var runCheckLostReverse = function (input) {
  if (
    ((input == "reversed paper" || input == "stone") &&
      compHand == "scissors") ||
    ((input == "reversed stone" || input == "scissors") &&
      compHand == "paper") ||
    ((input == "reversed scissors" || input == "paper") && compHand == "stone")
  )
    return "TRUE";
  return "FALSE";
};

// check if user won for reverse mode
var runCheckWinReverse = function (input) {
  if (
    ((input == "reversed stone" || input == "paper") &&
      compHand == "scissors") ||
    ((input == "reversed scissors" || input == "stone") &&
      compHand == "paper") ||
    ((input == "reversed paper" || input == "scissors") && compHand == "stone")
  )
    return "TRUE";
  return "FALSE";
};

// check if user draw
var runCheckDraw = function (input) {
  if (input == compHand || input == `reversed ${compHand}`) return "TRUE";
  return "FALSE:";
};

// --- return functions for conditions met ---

// set display message for number of draws
var getDrawMessage = function () {
  if (stateDraw == 0) {
    return `Number of draws is 0.`;
  }
  return `Number of draws is ${stateDraw}`;
};

// draw outcome function
var drawOutcome = function (input) {
  // add count to number of games played
  numGamesPlayed += 1;
  // add count to number of wins by user
  stateDraw += 1;
  console.log("stateDraw", stateDraw);
  var drawMessage = getDrawMessage();
  // get display message about win rate of user
  var winRate = getWinUserPercent();
  // get display message about win rate of comp
  var winRateComp = getWinCompPercent();
  // set display message if user draw
  return `You threw ${userHand}.<br> The computer threw ${compHand}.<br> Bummer ${userName}, it's a draw!<br><br>${winRate}<br>${winRateComp}<br>${drawMessage}<br><br>Enter "scissors" "paper" or "stone" to play another round!<br><br>Like a challenge? <br>You can play different game modes. Enter "reverse" or "korean" to start a new game in reversed or korean mode. Enter "normal" to get back to normal gameplay.<br><br>Current Game Mode: ${currentGameMode}`;
};

// draw outcome function for korean mode
var drawOutcomeKorean = function (lastWinner, username) {
  // add count to number of games played
  numGamesPlayed += 1;
  // add count to number of wins by user
  stateDraw += 1;
  console.log("stateDraw", stateDraw);
  var drawMessage = getDrawMessage();
  // get display message about win rate of user
  var winRate = getWinUserPercent();
  // get display message about win rate of comp
  var winRateComp = getWinCompPercent();
  // set display message if user draw
  return `You threw ${userHand}.<br> The computer threw ${compHand}.<br> Bummer ${userName}, it's a draw!<br><br>${winRate}<br>${winRateComp}<br>${drawMessage}<br><br>Since the last winner was ${lastWinner}, ${lastWinner} wins the game!<br><br>Enter "scissors" "paper" or "stone" to play another round!<br><br>Like a challenge? <br>You can play different game modes. Enter "reverse" or "korean" to start a new game in reversed or korean mode. Enter "normal" to get back to normal gameplay.<br><br>Current Game Mode: ${currentGameMode}`;
};

// personalised message if user is doing well
var getUserStreak = function (input) {
  if (calcWinUserPercent() > 50) {
    return `So far ${userName}, you've been winning ${stateWinUser} out of ${numGamesPlayed} time(s). Doing pretty good there!`;
  }
  if (calcWinUserPercent() < 40 || isNaN(Number(getWinUserPercent()))) {
    return `So far ${userName}, you've been winning ${stateWinUser} out of ${numGamesPlayed} time(s). You can do better!`;
  }
  return "";
};

// functions to execute and message to display if user won
var winOutcome = function (input) {
  // store winner record
  lastWinner = userName;
  // add count to number of games played
  numGamesPlayed += 1;
  // add count to number of wins by user
  stateWinUser += 1;
  // get display message about draw count
  var drawMessage = getDrawMessage();
  // get display message about win rate of user
  var winRate = getWinUserPercent();
  // get display message about win rate of comp
  var winRateComp = getWinCompPercent();
  var userStreak = getUserStreak();
  console.log("stateWinUser", stateWinUser);
  // set display message if user won
  return `You threw ${userHand}.<br> The computer threw ${compHand}.<br> Congratulations ${userName}, you won!<br><br>${winRate}<br>${winRateComp}<br>${drawMessage}<br><br>${userStreak}<br><br>Enter "scissors" "paper" or "stone" to play another round!<br><br>Like a challenge? <br>You can play different game modes. Enter "reverse" or "korean" to start a new game in reversed or korean mode. Enter "normal" to get back to normal gameplay.<br><br>Current Game Mode: ${currentGameMode}`;
};

// functions to execute and message to display if user lost
var loseOutcome = function (input) {
  // store winner record
  lastWinner = `Computer`;
  // add count to number of games played
  numGamesPlayed += 1;
  // add count to number of wins by comp
  stateWinComp += 1;
  // get display message about draw count
  var drawMessage = getDrawMessage();
  // get display message about win rate of user
  var winRate = getWinUserPercent();
  // get display message about win rate of comp
  var winRateComp = getWinCompPercent();
  console.log("stateWinComp", stateWinComp);
  var userStreak = getUserStreak();
  // set display message if user lost
  return `${userName} threw ${userHand}.<br> The computer threw ${compHand}.<br> Sorry ${userName}, you lost!<br><br>${winRate}<br>${winRateComp}<br>${drawMessage}<br><br>${userStreak}<br><br>Enter "scissors" "paper" or "stone" to play another round!<br><br>Like a challenge? <br>You can play different game modes. Enter "reverse" or "korean" to start a new game in reversed or korean mode. Enter "normal" to get back to normal gameplay.<br><br>Current Game Mode: ${currentGameMode}`;
};

// --- functions for different game modes ---

// function if game mode is normal
var playSPS = function (userName, input) {
  // generate value when submits button is clicked
  compHand = getRandomValue();
  console.log(compHand);

  // set users input value for the round
  userHand = input;

  // if user draw
  if (runCheckDraw(input) == "TRUE") {
    return drawOutcome();
  }

  // if user won
  if (runCheckWin(input) == "TRUE") {
    return winOutcome();
  }

  // check if user lost
  if (runCheckLost(input) == "TRUE") {
    return loseOutcome();
  }

  // input validation
  if (runCheckInput(input) == "TRUE") {
    return inputValidation();
  }

  console.log("numGamesPlayed", numGamesPlayed);
};

// function if game mode in reverse
var playSPSReverse = function (userName, input) {
  // generate value when submits button is clicked
  compHand = getRandomValue();
  console.log(compHand);

  // set users input value for the round
  userHand = input;

  // if user draw
  if (runCheckDraw(input) == "TRUE") {
    return drawOutcome();
  }

  // if user won
  if (runCheckWinReverse(input) == "TRUE") {
    return winOutcome();
  }

  // check if user lost
  if (runCheckLostReverse(input) == "TRUE") {
    return loseOutcome();
  }

  // input validation
  if (runCheckInput(input) == "TRUE") {
    return inputValidation();
  }
};

// function if game mode in korean
var playKoreanSPSReverse = function (userName, input) {
  // generate value when submits button is clicked
  compHand = getRandomValue();
  console.log(compHand);

  // set users input value for the round
  userHand = input;

  // if user draw
  if (runCheckDraw(input) == "TRUE") {
    return drawOutcomeKorean(lastWinner);
  }

  // if user won
  if (runCheckWinReverse(input) == "TRUE") {
    return winOutcome();
  }

  // check if user lost
  if (runCheckLostReverse(input) == "TRUE") {
    return loseOutcome();
  }

  // input validation
  if (runCheckInput(input) == "TRUE") {
    return inputValidation();
  }
};

// --- main function ---

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for username") {
    return inputValidationUser(input);
  }
  input = userAutoHand(input);
  console.log(input);
  if (currentGameMode == "reversed") {
    myOutputValue = playSPSReverse(userName, input);
  }
  if (currentGameMode == "normal") {
    myOutputValue = playSPS(userName, input);
  }
  if (currentGameMode == "korean") {
    myOutputValue = playKoreanSPSReverse(userName, input);
  }
  if (input == "reverse" || input == "normal" || input == "korean") {
    myOutputValue = setGameMode(userName, input);
  }
  console.log(currentGameMode);
  console.log(getWinUserPercent);

  return myOutputValue;
};
