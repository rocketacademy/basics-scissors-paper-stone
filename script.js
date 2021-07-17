var main = function (input) {
  var playerPick = input;
  console.log("Player: " + playerPick);
  var PCpick = randomPick();
  console.log("PC: " + PCpick);
  var defaultMessage = getDefaultMessage(playerPick, PCpick);
  if (playerPick == PCpick) {
    numDraws += 1;
    return `${defaultMessage} <br><br> It is a draw! <br><br> ${getWinLossMsg()}`;
  }
  if (doesPlayerWin(playerPick, PCpick)) {
    numPlayerWins += 1;
    return `${defaultMessage} <br><br> Computer wins! <br><br> ${getWinLossMsg()}`;
  }
  numPCWins += 1;
  return `Computer Wins! <br><br> ${getWinLossMsg()} `;
};

//random function
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

var randomPick = function () {
  var randomDecimal = Math.random() * 3;
  var randomNum = Math.ceil(randomDecimal);
  if (randomNum == 1) {
    return SCISSORS;
  }
  if (randomNum == 2) {
    return PAPER;
  }
  return STONE;
};

var doesPlayerWin = function (playerPick, PCpick) {
  return (
    (playerPick == SCISSORS && PCpick == PAPER) ||
    (playerPick == PAPER && PCpick == STONE) ||
    (playerPick == STONE && PCpick == SCISSORS)
  );
};

var numPlayerWins = 0;
var numPCWins = 0;
var numDraws = 0;

var getWinLossMsg = function () {
  return `Computer: ${numPCWins} | Player: ${numPlayerWins} | Draws: ${numDraws}`;
};

var getDefaultMessage = function (playerPick, PCpick) {
  return `PC pick: ${PCpick} | Player pick: ${playerPick}`;
};
