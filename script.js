var HAND_SCI = "scissors";
var HAND_PAP = "paper";
var HAND_STO = "stone";
var EMJ_SCI = "✂️";
var EMJ_PAP = "📄";
var EMJ_STO = "🗿";
var PLAYER_NAME = "player";
var COMP_NAME = "comp";

var userName = "";
var revMode = 1; // revMode off: 1, revMode on: -1
var korMode = 0; // korMode off: 0, korMode on: 1
var autoMode = 0; // autoMode off: 0, autoMode on: 1

var totalGames = 0;
var playerWon = 0;
var compWon = 0;
var drawWon = 0;

var currentWinner = "";
var totalKorGames = 0;
var playerKorWon = 0;
var compKorWon = 0;

// GENERATE RANDOM INTEGER (0-2) FOR COMPUTER
var randComp = function () {
  var randNum = Math.random() * 3;
  var randInt = Math.floor(randNum);
  return randInt;
};

// COMPARE PLAYER AND COMPUTER HANDS
var compareHands = function (player, comp) {
  // IF WIN
  if (player - comp == -1 * revMode || player - comp == 2 * revMode) {
    if (korMode == 1) {
      currentWinner = PLAYER_NAME;
      return "🕹 Try to capture to computer in the next turn! <br><br>";
    }
    totalGames += 1;
    playerWon += 1;
    return "You win! Hooray! <br><br>";
  }

  // IF DRAW
  if (player == comp) {
    if (korMode == 1) {
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
  if (korMode == 1) {
    currentWinner = COMP_NAME;
    return "🕹 Avoid the computer's attack! <br><br>";
  }
  totalGames += 1;
  compWon += 1;
  return "You lose! Bummer. <br><br>";
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
      input == "reverse off" ||
      input == "korean" ||
      input == "korean off" ||
      input == "auto" ||
      input == "auto off"
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

  // ACTIVATE/DEACTIVATE REVERSE MODE
  if (input == "reverse") {
    revMode = -1;
    korMode = 0;
    autoMode = 0;
    return "You are now in reverse mode. Enjoy! (Type 'reverse off' to return to normal mode)";
  }
  if (input == "reverse off") {
    revMode = 1;
    return "You are now in normal mode. Enjoy!";
  }

  // ACTIVATE/DEACTIVATE KOREAN MODE
  if (input == "korean") {
    korMode = 1;
    currentWinner = "";
    revMode = 1;
    autoMode = 0;
    return "You are now in Korean mode. Enjoy! (Type 'korean off' to return to normal mode)";
  }
  if (input == "korean off") {
    korMode = 0;
    return "You are now in normal mode. Enjoy!";
  }

  // ACTIVATE/DEACTIVATE AUTO MODE
  if (input == "auto") {
    autoMode = 1;
    revMode = 1;
    korMode = 0;
    return "You are now in Auto mode. Enjoy! (Type 'auto off' to return to normal mode)";
  }
  if (input == "auto off") {
    autoMode = 0;
    return "You are now in normal mode. Enjoy!";
  }

  // VALIDATE INPUT
  if (
    autoMode == 0 &&
    input != HAND_SCI &&
    input != HAND_PAP &&
    input != HAND_STO
  ) {
    return "⚠️ Invalid input. Please type 'scissors', 'paper', or 'stone' only. Alternatively, type 'reverse', 'korean' or 'auto' for the other game modes!";
  }

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

  var compNum = randComp();
  var compHand = assignNumToHand(compNum);
  var compEmj = assignNumToEmj(compNum);

  var playerNum;
  var playerEmj;
  var playerHand;

  if (autoMode == 1) {
    playerNum = randComp();
    playerHand = assignNumToHand(playerNum);
    playerEmj = assignNumToEmj(playerNum);
  }
  if (autoMode == 0) {
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
    "<br> 🟡 Player-Computer-Draw: " +
    playerWon +
    "-" +
    compWon +
    "-" +
    drawWon +
    "<br> 🟡 Winning Percentage: " +
    winPercentRound +
    "% <br>";

  // FORMAT OUTPUT (MODE)
  var modeMsg = "[NORMAL MODE] <br>";
  if (revMode == -1) {
    modeMsg =
      "[REVERSE MODE] (Type 'reverse off' to return to normal mode) <br>";
  }
  if (korMode == 1) {
    modeMsg = "[KOREAN MODE] (Type 'korean off' to return to normal mode) <br>";
  }
  if (autoMode == 1) {
    modeMsg = "[AUTO MODE] (Type 'auto off' to return to normal mode) <br>";
  }

  // FORMAT OUTPUT (KOREAN)
  if (korMode == 1) {
    var korStats =
      "📊 " +
      userName +
      "'s Statistics (Korean Mode) 📊 <br> 🟡 Total Games: " +
      totalKorGames +
      "<br> 🟡 Player-Computer: " +
      playerKorWon +
      "-" +
      compKorWon;

    return modeMsg + myOutputValue + finalResult + korStats;
  }

  return modeMsg + myOutputValue + finalResult + stats + statMessage;
};
