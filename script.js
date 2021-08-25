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

var main = function (input) {
  var comOutput = diceRoll();
  var userObject = icon(input);
  var comObject = icon(comOutput);
  var reversedOutput = `reversed ${comOutput}`;
  var myOutputValue = `Input is invalid. Do only enter scissors, paper or stone`;

  if (input == comOutput || input == reversedOutput) {
    var myOutputValue = `User chose ${input}${userObject} <br> Computer chose ${comOutput}${comObject} <br><br>
    It's a draw! `;
  }

  if (
    (input == "scissors" && comOutput == "paper") ||
    (input == "paper" && comOutput == "stone") ||
    (input == "stone" && comOutput == "scissors")
  ) {
    var myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    User wins!`;
  }

  if (
    (input == "paper" && comOutput == "scissors") ||
    (input == "stone" && comOutput == "paper") ||
    (input == "scissors" && comOutput == "stone")
  ) {
    var myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    Computer wins!`;
  }

  if (
    (input == "reversed scissors" && comOutput == "paper") ||
    (input == "reversed paper" && comOutput == "stone") ||
    (input == "reversed stone" && comOutput == "scissors")
  ) {
    var myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    Computer wins!`;
  }

  if (
    (input == "reversed paper" && comOutput == "scissors") ||
    (input == "reversed stone" && comOutput == "paper") ||
    (input == "reversed scissors" && comOutput == "stone")
  ) {
    var myOutputValue = `User chose ${input}${userObject} <br>
    Computer chose ${comOutput}${comObject}<br><br>
    User wins!`;
  }
  return myOutputValue;
};
