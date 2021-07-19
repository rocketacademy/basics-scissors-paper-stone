// Store string constants in variables
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var WIN = "win";
var LOSE = "lose";
var DRAW = "draw";
var NORMAL = "normal";
var REVERSED = "reversed";
var KOREAN = "korean";
var COMPUTER = "Computer";
var NOBODY = "Nobody";

// Global variables
var userName = "Player";
var result;
var userWins = 0;
var computerWins = 0;
var draws = 0;
var lastWinner = NOBODY;

// Main
var main = function (name, mode, choice) {
  // Set user name if the input is not blank, otherwise use the default value "Player"
  if (name != "") {
    userName = name;
  }

  // Set computer and user choices
  var computerShape = getComputerShape();
  var userShape = getUserShape(choice);

  // Game play depending on mode selected
  switch (mode) {
    case NORMAL:
      result = playNormalSPS(userShape, computerShape);
      break;
    case REVERSED:
      result = playReversedSPS(userShape, computerShape);
      break;
    case KOREAN:
      result = playKoreanSPS(userShape, computerShape);
      break;
    case COMPUTER:
      userShape = getComputerShape();
      result = playNormalSPS(userShape, computerShape);
      break;
  }

  // Calculate total number of plays
  var totalPlays = Number(userWins) + Number(computerWins) + Number(draws);

  return generateOutputMessage(userShape, computerShape, totalPlays);
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

// Modulus Function
function mod(n, m) {
  var remainder = n % m;
  return Math.floor(remainder >= 0 ? remainder : remainder + m);
}

// Normal SPS Logic
function playNormalSPS(userShape, computerShape) {
  var difference = mod(Number(computerShape) - Number(userShape), 3);
  switch (difference) {
    case 0:
      draws += 1;
      return DRAW;
    case 1:
      userWins += 1;
      return WIN;
    case 2:
      computerWins += 1;
      return LOSE;
  }
}

// Reversed SPS Logic
function playReversedSPS(userShape, computerShape) {
  var difference = mod(Number(computerShape) - Number(userShape), 3);
  switch (difference) {
    case 0:
      draws += 1;
      return DRAW;
    case 1:
      computerWins += 1;
      return LOSE;
    case 2:
      userWins += 1;
      return WIN;
  }
}

// Korean SPS Logic
function playSPS(userShape, computerShape) {
  var difference = mod(Number(computerShape) - Number(userShape), 3);
  switch (difference) {
    case 0:
      return DRAW;
    case 1:
      return WIN;
    case 2:
      return LOSE;
  }
}

function playKoreanSPS(userShape, computerShape) {
  switch (playSPS(userShape, computerShape)) {
    case WIN:
      lastWinner = userName;
      return KOREAN;
    case LOSE:
      lastWinner = COMPUTER;
      return KOREAN;
    case DRAW:
      if (lastWinner == userName) {
        userWins += 1;
        lastWinner = NOBODY;
        return WIN;
      }
      if (lastWinner == COMPUTER) {
        computerWins += 1;
        lastWinner = NOBODY;
        return LOSE;
      } else {
        return KOREAN;
      }
  }
}

// Output Message Generator
function generateOutputMessage(userShape, computerShape, totalPlays) {
  var message = `&#x1F476 VS &#x1F916 <br>`;
  message += `${getEmoji(userShape)} VS ${getEmoji(computerShape)}<br>`;
  switch (result) {
    case WIN:
      message += `${userName} won! Congrats! &#x1F389`;
      break;
    case LOSE:
      message += `${userName} lost! Better luck next time! &#x1F340`;
      break;
    case DRAW:
      message += `It's a draw! What are the odds!? &#x1F914`;
      break;
    case KOREAN:
      if (lastWinner == NOBODY) {
        message += `${NOBODY} has the advantage at the moment, only time will tell.`;
      } else {
        message += `${lastWinner} has the advantage and needs a draw in the next round to win!`;
      }
  }
  message += `<br>${userName}'s score so far:<br>Out of ${totalPlays} rounds, ${userWins} wins, ${computerWins} losses, ${draws} draws.<br>`;
  message += `Choose a version and shape to play another round!&#x1F648`;
  return message;
}
