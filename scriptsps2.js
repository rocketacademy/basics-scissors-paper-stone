var main = function (input) {
  var playerPick = input;
  console.log("Player pick: " + playerPick);
  var PCpick = randomPick();
  console.log("PC Pick: " + PCpick);
  var defaultMessage = getDefaultMessage(playerPick, PCpick);
  if (playerPick == PCpick) {
    numDraws += 1;
    return `${defaultMessage} <br><br> It is a draw! <br><br> ${getWinLossMsg()}`;
  }
  // add condition for reverse, if ... else
  if (doesPlayerWin(playerPick, PCpick)) {
    numPlayerWins += 1;
    return `${defaultMessage} <br><br> Player wins! <br><br> ${getWinLossMsg()}`;
  }
  numPCWins += 1;
  return `${defaultMessage} <br><br> Computer Wins! <br><br> ${getWinLossMsg()} `;

  //Reverse game
};

//random function
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVSCISSORS = "Reversed scissors";
var REVSTONE = "Reversed stone";
var REVPAPER = "Reversed paper";

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

//PlayerWinFunction
var doesPlayerWin = function (playerPick, PCpick) {
  //input parameter is playerPick and PCpick
  return (
    (playerPick == SCISSORS && PCpick == PAPER) ||
    (playerPick == PAPER && PCpick == STONE) ||
    (playerPick == STONE && PCpick == SCISSORS) ||
    (playerPick == REVSCISSORS && PCpick == STONE) ||
    (playerPick == REVSTONE && PCpick == PAPER) ||
    (playerPick == REVPAPER && PCpick == SCISSORS) ||
    
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

// Function for player wins in the reverse game
// var doesPlayerWinReverse = function (playerPick, PCpick) {
//   (playerPick == REVSCISSORS && PCpick == REVSTONE) ||
//     (playerPick == REVSTONE && PCpick == REVPAPER) ||
//     (playerPick == REVPAPER && PCpick == REVSCISSORS);
// };

// if (playerPick == REVSCISSORS || input == REVSTONE || input == REVPAPER) {
//   if (playerPick == PCpick) {
//     numDraws += 1;
//     return `${defaultMessage} <br><br> Ot os a draw <br><br> ${getWinLossMsg()}`;
//   }
//   if (doesPlayerWin(playerPick, PCpick)) {
//     numPlayerWins += 1;
//     return `You have entered a reversed game <br><br> Player Wins! <br><br> ${getWinLossMsg()}`;
//   }
//   numPCWins += 1;
//   return `${defaultMessage} <br><br> Computer Wins! <br><br> ${getWinLossMsg()}`;
// }
