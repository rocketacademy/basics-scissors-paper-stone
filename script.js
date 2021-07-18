// win-loss record
stateWinUser = 0;
stateWinComp = 0;
stateDraw = 0;
stateWinUserPercent = 0;
stateWinCompPercent = 0;
numGamesPlayed = 0;

// calculate win % of user
var getWinUserPercent = function () {
  var calcWinUserPercent = Math.floor((stateWinUser / numGamesPlayed) * 100);
  if (stateWinUser == 0) {
    return `You have won 0 times.`;
  }
  return `You have won ${stateWinUser} time(s), which is ${calcWinUserPercent}% of the time.`;
};

// calculate win % of computer
var getWinCompPercent = function () {
  var calcWinCompPercent = Math.floor((stateWinComp / numGamesPlayed) * 100);
  if (stateWinComp == 0) {
    return `The computer has won 0 times.`;
  }
  return `Computer has won ${stateWinComp} time(s) which is ${calcWinCompPercent}% of the time.`;
};

// set display message for number of draws
var getDrawMessage = function () {
  if (stateDraw == 0) {
    return `Number of draws is 0.`;
  }
  return `Number of draws is ${stateDraw}`;
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

// input validation function
var inputValidation = function (input) {
  if (
    input !== "scissors" ||
    input !== "paper" ||
    input !== "stone" ||
    input !== "reversed scissors" ||
    input !== "reversed paper" ||
    input !== "reversed stone"
  ) {
    // set display message if input validation not met
    return `Please enter "scissors" "paper" or "stone" to start playing!
    <br><br> Like a challenge? <br>Begin your entry with "reversed"<space> to try your hand at a reversed Scissors Paper Stone game!`;
  }
};

var main = function (input) {
  // generate value when submit button is clicked
  var compHand = getRandomValue();
  console.log(compHand);

  // input validation
  var myOutputValue = inputValidation();

  // check if user draw
  if (input == compHand || input == `reversed ${compHand}`) {
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
    myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Bummer, it's a draw!<br><br>${winRate}<br>${winRateComp}<br>${drawMessage}<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }

  // check if user won
  if (
    ((input == "reversed paper" || input == "stone") &&
      compHand == "scissors") ||
    ((input == "reversed stone" || input == "scissors") &&
      compHand == "paper") ||
    ((input == "reversed scissors" || input == "paper") && compHand == "stone")
  ) {
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
    console.log("stateWinUser", stateWinUser);
    // set display message if user won
    myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Congratulations, you won!<br><br>${winRate}<br>${winRateComp}<br> ${drawMessage}<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }

  // check if user lost
  if (
    ((input == "reversed stone" || input == "paper") &&
      compHand == "scissors") ||
    ((input == "reversed scissors" || input == "stone") &&
      compHand == "paper") ||
    ((input == "reversed paper" || input == "scissors") && compHand == "stone")
  ) {
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
    // set display message if user lost
    myOutputValue = `You threw ${input}.<br> The computer threw ${compHand}.<br> Sorry, you lost!<br><br>${winRate}<br>${winRateComp}<br>${drawMessage}<br><br>Enter "scissors" "paper" or "stone" to play another round!`;
  }
  console.log("numGamesPlayed", numGamesPlayed);
  return myOutputValue;
};
