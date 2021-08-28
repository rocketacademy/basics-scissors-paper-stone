var userCurrentScore = 0;
var comCurrentScore = 0;
var totalNumberOfMatch = 0;
var numberOfDraws = 0;
var userWinningPercentage = 0;
var comWinningPercentage = 0;

var currentGameMode = "waiting for user name";
var userName = "";

// roll a random number
var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger;

  if (diceNumber == 0) return "scissors";
  if (diceNumber == 1) return "paper";
  if (diceNumber == 2) return "stone";
};

// show icon according to input
var icon = function (input, comOutput) {
  if (
    input == "scissors" ||
    comOutput == "scissors" ||
    input == "reversed scissors"
  )
    return "✂️";
  if (input == "paper" || comOutput == "paper" || input == "reversed paper")
    return "🗒";
  if (input == "stone" || comOutput == "stone" || input == "reversed stone")
    return "🚀";
};

var getUserWinningPercentage = function () {
  percentage = Math.round((userCurrentScore / totalNumberOfMatch) * 100);
  message = `${percentage}%).`;
  if (userCurrentScore < comCurrentScore) {
    message = `${percentage}%). You can catch up!`;
  }
  if (userCurrentScore > comCurrentScore) {
    message = `${percentage}%). You are doing well!`;
  }
  return message;
};

var getComWinningPercentage = function () {
  percentage = Math.round((comCurrentScore / totalNumberOfMatch) * 100);
  message = `${percentage}%)`;
  return message;
};

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "sps game";
    myOutputValue = `Hello, ${userName}! You can start the game by entering scissors, paper or stone.`;
  } else if (currentGameMode == "sps game") {
    myOutputValue = playSPSGame(input);
  }
  return myOutputValue;
};

var playSPSGame = function (userInput) {
  var comOutput = diceRoll();
  var userObject = icon(userInput);
  var comObject = icon(comOutput);
  var reversedOutput = `reversed ${comOutput}`;
  var myOutputValue = `Input is invalid. Do only enter scissors, paper or stone.`;

  if (userInput == comOutput || userInput == `reversed${comOutput}`) {
    numberOfDraws += 1;
    totalNumberOfMatch += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `${userName} chose ${userInput}${userObject} <br> Computer chose ${comOutput}${comObject} <br><br>
    It's a draw! <br><br>
    ${userName}'s current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage} <br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage} <br>
    Number of draws: ${numberOfDraws}`;
  }

  if (
    (userInput == "scissors" && comOutput == "paper") ||
    (userInput == "paper" && comOutput == "stone") ||
    (userInput == "stone" && comOutput == "scissors")
  ) {
    totalNumberOfMatch += 1;
    userCurrentScore += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `${userName} chose ${userInput}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    ${userName} wins! <br><br>
    ${userName}'s current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage} <br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage}<br>
    Number of draws: ${numberOfDraws}`;
  }

  if (
    (userInput == "paper" && comOutput == "scissors") ||
    (userInput == "stone" && comOutput == "paper") ||
    (userInput == "scissors" && comOutput == "stone")
  ) {
    totalNumberOfMatch += 1;
    comCurrentScore += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `${userName} chose ${userInput}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    Computer wins! <br><br>
    ${userName}'s current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage}<br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage}<br>
    Number of draws: ${numberOfDraws}`;
  }

  if (
    (userInput == "reversed scissors" && comOutput == "paper") ||
    (userInput == "reversed paper" && comOutput == "stone") ||
    (userInput == "reversed stone" && comOutput == "scissors")
  ) {
    totalNumberOfMatch += 1;
    comCurrentScore += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `${userName} chose ${userInput}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    Computer wins! <br><br>
    ${userName}'s current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage}<br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage}<br>
    Number of draws: ${numberOfDraws}`;
  }

  if (
    (userInput == "reversed paper" && comOutput == "scissors") ||
    (userInput == "reversed stone" && comOutput == "paper") ||
    (userInput == "reversed scissors" && comOutput == "stone")
  ) {
    totalNumberOfMatch += 1;
    userCurrentScore += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `${userName} chose ${userInput}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    ${userName} wins! <br><br>
    ${userName}'s current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage}<br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage}<br>
    Number of draws: ${numberOfDraws}`;
  }
  return myOutputValue;
};
