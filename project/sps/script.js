// Store string constants in variables
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";
var WIN = "win";
var LOSE = "lose";
var DRAW = "draw";

// Global variables
var reversedMode = false;
var userWins = 0;
var computerWins = 0;
var draws = 0;
var regexpReversedChoice = /reversed (scissors|paper|stone)/;

// Main
var main = function (input) {
  // Check for reversed mode selection first and invalid input
  if (regexpReversedChoice.test(input)) {
    reversedMode = true;
    // Assign the capture group of the regex to user shape
    input = input.match(regexpReversedChoice)[1];
  }

  // Check for other invalid input
  if (!(input == SCISSORS || input == PAPER || input == STONE)) {
    return `You entered "${input}", please enter "${SCISSORS}", "${PAPER}" or "${STONE}" to play. Or add "reversed" before your choice (e.g."reversed scissors") for a different challenge.`;
  }
  var computerShape = getComputerShape();
  var userShape = getUserShape(input);
  var result = didUserWin(userShape, computerShape, reversedMode);
  var totalPlays = Number(userWins) + Number(computerWins) + Number(draws);

  // Reset reversed mode
  if (reversedMode) {
    reversedMode = false;
  }

  return generateOutputMessage(
    userShape,
    computerShape,
    result,
    userWins,
    totalPlays
  );
};

// Modules

// User Shape Generator
function getUserShape(input) {
  switch (input) {
    case SCISSORS:
      return 1;
    case PAPER:
      return 2;
    case STONE:
      return 3;
  }
}

// Computer Shape Generator
function getComputerShape() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
}

// Emoji Generator
function getEmoji(shape) {
  switch (shape) {
    case 1:
      return "&#x2702";
    case 2:
      return "&#x1F4C4";
    case 3:
      return "&#x26F0";
  }
}

// SPS Logic
function didUserWin(userShape, computerShape, reversedMode) {
  var difference = mod(Number(computerShape) - Number(userShape), 3);
  if (difference == 0) {
    draws += 1;
    return DRAW;
  }

  if (reversedMode) {
    switch (difference) {
      case 1:
        computerWins += 1;
        return LOSE;
      case 2:
        userWins += 1;
        return WIN;
    }
  } else {
    switch (difference) {
      case 1:
        userWins += 1;
        return WIN;
      case 2:
        computerWins += 1;
        return LOSE;
    }
  }
}

// Modulus Function
function mod(n, m) {
  var remainder = n % m;
  return Math.floor(remainder >= 0 ? remainder : remainder + m);
}

// Output Message Generator
function generateOutputMessage(
  userShape,
  computerShape,
  result,
  userWins,
  totalPlays
) {
  var message = `&#x1F476 VS &#x1F916 <br>`;
  message += `${getEmoji(userShape)} VS ${getEmoji(computerShape)}<br>`;
  switch (result) {
    case WIN:
      message += `You won! Congrats! &#x1F389`;
      break;
    case LOSE:
      message += `You lose! Better luck next time! &#x1F340`;
      break;
    case "draw":
      message += `It's a draw! What are the odds!? &#x1F914`;
      break;
  }
  message += `<br>You have won ${userWins}/${totalPlays} turns so far!<br>`;
  message += `Now you can type ${SCISSORS}, "${PAPER}" or "${STONE}" to play another round!<br>Or add "reversed" before your choice for a different challenge &#x1F648`;
  return message;
}
