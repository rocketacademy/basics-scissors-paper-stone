var userCurrentScore = 0;
var comCurrentScore = 0;
var totalNumberOfMatch = 0;
var numberOfDraws = 0;
var userWinningPercentage = 0;
var comWinningPercentage = 0;

var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger;

  if (diceNumber == 0) return "scissors";
  if (diceNumber == 1) return "paper";
  if (diceNumber == 2) return "stone";
};

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
  percentage = (userCurrentScore / totalNumberOfMatch) * 100;
  return percentage;
};

var getComWinningPercentage = function () {
  percentage = (comCurrentScore / totalNumberOfMatch) * 100;
  return percentage;
};

var main = function (input) {
  var comOutput = diceRoll();
  var userObject = icon(input);
  var comObject = icon(comOutput);
  var reversedOutput = `reversed ${comOutput}`;
  var myOutputValue = `Input is invalid. Do only enter scissors, paper or stone`;

  if (input == comOutput || input == `reversed${comOutput}`) {
    numberOfDraws += 1;
    totalNumberOfMatch += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `User chose ${input}${userObject} <br> Computer chose ${comOutput}${comObject} <br><br>
    It's a draw! <br><br>
    User's current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage}%) <br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage}%) <br>
    Number of draws: ${numberOfDraws}`;
  }

  if (
    (input == "scissors" && comOutput == "paper") ||
    (input == "paper" && comOutput == "stone") ||
    (input == "stone" && comOutput == "scissors")
  ) {
    totalNumberOfMatch += 1;
    userCurrentScore += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    User wins! <br><br>
    User's current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage}%) <br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage}%)<br>
    Number of draws: ${numberOfDraws}`;
  }

  if (
    (input == "paper" && comOutput == "scissors") ||
    (input == "stone" && comOutput == "paper") ||
    (input == "scissors" && comOutput == "stone")
  ) {
    totalNumberOfMatch += 1;
    comCurrentScore += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    Computer wins! <br><br>
    User's current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage}%)<br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage}%)<br>
    Number of draws: ${numberOfDraws}`;
  }

  if (
    (input == "reversed scissors" && comOutput == "paper") ||
    (input == "reversed paper" && comOutput == "stone") ||
    (input == "reversed stone" && comOutput == "scissors")
  ) {
    totalNumberOfMatch += 1;
    comCurrentScore += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    Computer wins! <br><br>
    User's current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage}%)<br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage}%)<br>
    Number of draws: ${numberOfDraws}`;
  }

  if (
    (input == "reversed paper" && comOutput == "scissors") ||
    (input == "reversed stone" && comOutput == "paper") ||
    (input == "reversed scissors" && comOutput == "stone")
  ) {
    totalNumberOfMatch += 1;
    userCurrentScore += 1;
    userWinningPercentage = getUserWinningPercentage();
    comWinningPercentage = getComWinningPercentage();
    myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    User wins! <br><br>
    User's current score: ${userCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${userWinningPercentage}%)<br>
    Computer's current score: ${comCurrentScore} out of ${totalNumberOfMatch} (Winning Percentage: ${comWinningPercentage}%)<br>
    Number of draws: ${numberOfDraws}`;
  }
  return myOutputValue;
};
