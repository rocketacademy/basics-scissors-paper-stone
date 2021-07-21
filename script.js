var HAND_SCI = "scissors";
var HAND_PAP = "paper";
var HAND_STO = "stone";
var EMJ_SCI = "✂️";
var EMJ_PAP = "📄";
var EMJ_STO = "🗿";
var PLAYER_NAME = "player";
var COMP_NAME = "comp";

var userName = "";
var gameMode = "normal";
var modeMsg = "[NORMAL MODE] <br>";
var revMode = 1; // revMode off: 1, revMode on: -1

var totalGames = 0;
var playerWon = 0;
var compWon = 0;
var drawWon = 0;

var currentWinner = "";
var totalKorGames = 0;
var playerKorWon = 0;
var compKorWon = 0;

// ASSIGN HAND, NUM, EMJ (0 SCI, 1 PAP, 2 STO)
var assignNumToHand = function (number) {
  if (number == 0) {
    return HAND_SCI;
  }
  if (number == 1) {
    return HAND_PAP;
  }
  if (number == 2) {
    return HAND_STO;
  }
};

var assignNumToEmj = function (number) {
  if (number == 0) {
    return EMJ_SCI;
  }
  if (number == 1) {
    return EMJ_PAP;
  }
  if (number == 2) {
    return EMJ_STO;
  }
};

var assignHandToNum = function (hand) {
  if (hand == HAND_SCI) {
    return 0;
  }
  if (hand == HAND_PAP) {
    return 1;
  }
  if (hand == HAND_STO) {
    return 2;
  }
};

// GENERATE RANDOM INTEGER (0-2) FOR COMPUTER
var randComp = function () {
  var randNum = Math.random() * 3;
  var randInt = Math.floor(randNum);
  return randInt;
};

// COMPARE PLAYER AND COMPUTER HANDS
var compareHands = function (player, comp) {
  if (gameMode == "reverse") {
    revMode = -1;
  } else {
    revMode = 1;
  }
  // IF WIN
  if (player - comp == -1 * revMode || player - comp == 2 * revMode) {
    if (gameMode == "korean") {
      currentWinner = PLAYER_NAME;
      return "🕹 Try to capture to computer in the next turn! <br><br>";
    }
    totalGames += 1;
    playerWon += 1;
    return "You win! Hooray! <br><br>";
  }

  // IF DRAW
  if (player == comp) {
    if (gameMode == "korean") {
      if (currentWinner == "") {
        return "No one attacks. Try again! <br><br>";
      }
      if (currentWinner != "") {
        totalKorGames += 1;
        if (currentWinner == PLAYER_NAME) {
          playerKorWon += 1;
          currentWinner = "";
          return "You win! Hooray! <br><br>";
        }
        if (currentWinner == COMP_NAME) {
          compKorWon += 1;
          currentWinner = "";
          return "You lose! Bummer <br><br>";
        }
      }
    }
    totalGames += 1;
    drawWon += 1;
    return "Jinx! It's a draw! <br><br>";
  }

  // IF LOSE
  if (gameMode == "korean") {
    currentWinner = COMP_NAME;
    return "🕹 Avoid the computer's attack! <br><br>";
  }
  totalGames += 1;
  compWon += 1;
  return "You lose! Bummer. <br><br>";
};

var calcWinPercent = function (numberWon, numberGames) {
  var winPercent = (numberWon / numberGames) * 10000;
  var winPercentRound = Math.round(winPercent) / 100;
  return winPercentRound;
};

var main = function (input) {
  if (userName == "") {
    // CHECK THAT PLAYER ENTERED NAME FIRST, NOT SPS OR MODE
    if (
      input == HAND_SCI ||
      input == HAND_PAP ||
      input == HAND_STO ||
      input == "" ||
      input == "reverse" ||
      input == "korean" ||
      input == "auto" ||
      input == "reset" ||
      input == "normal"
    ) {
      return "⚠️ Please enter your name before starting the game!";
    }
    userName = input;
    return (
      "Welcome, " +
      userName +
      ". <br> Please type 'scissors', 'paper', or 'stone' to start the game! <br> Alternatively, type 'reverse', 'korean' or 'auto' for the other game modes!"
    );
  }

  // RESET MODES
  if (input == "reset") {
    gameMode = "normal";
    totalGames = 0;
    playerWon = 0;
    compWon = 0;
    drawWon = 0;
    currentWinner = "";
    totalKorGames = 0;
    playerKorWon = 0;
    compKorWon = 0;
    modeMsg = "[NORMAL MODE] <br>";
    return "You have reset and are now in normal mode. Enjoy!";
  }

  // ACTIVATE NORMAL MODE
  if (input == "normal") {
    gameMode = "normal";
    modeMsg = "[NORMAL MODE] <br>";
    return "You are now in normal mode. Enjoy!";
  }
  // ACTIVATE REVERSE MODE
  if (input == "reverse") {
    gameMode = "reverse";
    modeMsg = "[REVERSE MODE] (Type 'normal' to return to normal mode) <br>";
    return "You are now in reverse mode. Enjoy! (Type 'normal' to return to normal mode)";
  }
  // ACTIVATE KOREAN MODE
  if (input == "korean") {
    gameMode = "korean";
    currentWinner = "";
    modeMsg = "[KOREAN MODE] (Type 'normal' to return to normal mode) <br>";
    return "You are now in Korean mode. Enjoy! (Type 'normal' to return to normal mode)";
  }
  // ACTIVATE AUTO MODE
  if (input == "auto") {
    gameMode = "auto";
    modeMsg = "[AUTO MODE] (Type 'normal' to return to normal mode) <br>";
    return "You are now in Auto mode. Enjoy! (Type 'normal' to return to normal mode)";
  }

  // VALIDATE INPUT
  if (
    gameMode != "auto" &&
    input != HAND_SCI &&
    input != HAND_PAP &&
    input != HAND_STO
  ) {
    return "⚠️ Invalid input. Please type 'scissors', 'paper', or 'stone' only. Alternatively, type 'reverse', 'korean' or 'auto' for the other game modes!";
  }

  // ASSIGN HANDS
  var compNum = randComp();
  var compHand = assignNumToHand(compNum);
  var compEmj = assignNumToEmj(compNum);

  var playerNum;
  var playerEmj;
  var playerHand;

  if (gameMode == "auto") {
    playerNum = randComp();
    playerHand = assignNumToHand(playerNum);
    playerEmj = assignNumToEmj(playerNum);
  } else {
    playerHand = input;
    playerNum = assignHandToNum(playerHand);
    playerEmj = assignNumToEmj(playerNum);
  }

  // COMPARE HANDS
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
    ". <br><br>";

  // FORMAT OUTPUT (STATS)
  var winPercentage = calcWinPercent(playerWon, totalGames);
  if (gameMode == "korean") {
    winPercentage = calcWinPercent(playerKorWon, totalKorGames);
    if (Number.isNaN(winPercentage)) {
      winPercentage = "-";
    }
  }

  var statMessage = "Try harder! 😔";
  if (winPercentage >= 50) {
    statMessage = "Good going! 🥳";
  }

  var stats =
    "📊 " +
    userName +
    "'s Statistics 📊 <br> 🟡 Total Games: " +
    totalGames +
    "<br> 🟡 Player-Computer-Draw: " +
    playerWon +
    "-" +
    compWon +
    "-" +
    drawWon +
    "<br> 🟡 Winning Percentage: " +
    winPercentage +
    "% <br>";

  // FORMAT OUTPUT (KOREAN)
  if (gameMode == "korean") {
    var korStats =
      "📊 " +
      userName +
      "'s Statistics (Korean Mode) 📊 <br> 🟡 Total Games: " +
      totalKorGames +
      "<br> 🟡 Player-Computer: " +
      playerKorWon +
      "-" +
      compKorWon +
      "<br> 🟡 Winning Percentage: " +
      winPercentage +
      "% <br>";

    return modeMsg + myOutputValue + finalResult + korStats;
  }

  return modeMsg + myOutputValue + finalResult + stats + statMessage;
};
