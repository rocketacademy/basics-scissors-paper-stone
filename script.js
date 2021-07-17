var HAND_SCI = "scissors";
var HAND_PAP = "paper";
var HAND_STO = "stone";
var EMJ_SCI = "✂️";
var EMJ_PAP = "📄";
var EMJ_STO = "🗿";
var HAND_REV_SCI = "reversed scissors";
var HAND_REV_PAP = "reversed paper";
var HAND_REV_STO = "reversed stone";

var revMode = 1; // revMode on: 1, revMode off: -1 (on by default)
var totalGames = 0;
var playerWon = 0;
var compWon = 0;
var drawWon = 0;
var userName = "";

// GENERATE RANDOM INTEGER (0-2) FOR COMPUTER
var randComp = function () {
  var randNum = Math.random() * 3;
  var randInt = Math.floor(randNum);
  return randInt;
};

// COMPARE PLAYER AND COMPUTER HANDS
var compareHands = function (player, comp) {
  totalGames += 1;
  if (player - comp == -1 * revMode || player - comp == 2 * revMode) {
    playerWon += 1;
    result = "You win! Hooray!";
    return result;
  }
  if (player == comp) {
    drawWon += 1;
    result = "Jinx! It's a draw!";
    return result;
  }
  compWon += 1;
  var result = "You lose! Bummer.";
  return result;
};

var main = function (input) {
  revMode = 1;

  if (userName == "") {
    // CHECK THAT PLAYER ENTERED NAME FIRST, NOT SPS
    if (
      input == HAND_SCI ||
      input == HAND_PAP ||
      input == HAND_STO ||
      input == HAND_REV_SCI ||
      input == HAND_REV_PAP ||
      input == HAND_REV_STO
    ) {
      return "⚠️ Please enter your name before starting the game!";
    }
    userName = input;
    return (
      "Welcome, " +
      userName +
      ". Please type 'scissors', 'paper', or 'stone' to start the game!"
    );
  }

  // VALIDATE INPUT
  if (
    input != HAND_SCI &&
    input != HAND_PAP &&
    input != HAND_STO &&
    input != HAND_REV_SCI &&
    input != HAND_REV_PAP &&
    input != HAND_REV_STO
  ) {
    return "⚠️ Invalid input. Please type 'scissors', 'paper', or 'stone' only. <br> Or try 'reversed (your hand)' for the reversed mode.";
  }
  // ASSIGN COMPHAND AND COMPEMJ (0 SCI, 1 PAP, 2 STO)
  var compNum = randComp();
  var compHand;
  var compEmj;
  if (compNum == 0) {
    compHand = HAND_SCI;
    compEmj = EMJ_SCI;
  }
  if (compNum == 1) {
    compHand = HAND_PAP;
    compEmj = EMJ_PAP;
  }
  if (compNum == 2) {
    compHand = HAND_STO;
    compEmj = EMJ_STO;
  }
  // ASSIGN PLAYERNUM AND PLAYEREMJ(0 SCI, 1 PAP, 2 STO)
  var playerNum;
  var playerEmj;
  if (input == HAND_SCI || input == HAND_REV_SCI) {
    playerNum = 0;
    playerEmj = EMJ_SCI;
  }
  if (input == HAND_PAP || input == HAND_REV_PAP) {
    playerNum = 1;
    playerEmj = EMJ_PAP;
  }
  if (input == HAND_STO || input == HAND_REV_STO) {
    playerNum = 2;
    playerEmj = EMJ_STO;
  }
  // COMPARE HANDS ACCORDING TO NON-REVERSED OR REVERSED MODE
  if (input == HAND_REV_SCI || input == HAND_REV_PAP || input == HAND_REV_STO) {
    revMode = -1;
  }
  var finalResult = compareHands(playerNum, compNum);

  // FORMAT OUTPUT
  var myOutputValue =
    "The computer chose " +
    compHand +
    " " +
    compEmj +
    ". <br>" +
    userName +
    " chose " +
    input +
    " " +
    playerEmj +
    ". <br>" +
    "<br>" +
    finalResult +
    "<br>" +
    "<br>" +
    "Now you can type 'scissors', 'paper', or 'stone' to play another round! <br> Or try 'reversed (your hand)' for the reversed mode!";

  var winPercent = (playerWon / totalGames) * 10000;
  var winPercentRound = Math.round(winPercent) / 100;
  var statMessage = "Try harder! 😔";

  if (winPercentRound >= 50) {
    statMessage = "Good going! 🥳";
  }

  var stats =
    "📊 " +
    userName +
    "'s Statistics 📊 <br> 🟡 Total Games: " +
    totalGames +
    "<br> 🟡 Player-Computer-Draws: " +
    playerWon +
    "-" +
    compWon +
    "-" +
    drawWon +
    "<br> 🟡 Winning Percentage: " +
    winPercent +
    "%";

  return myOutputValue + "<br><br>" + stats + "<br>" + statMessage;
};
