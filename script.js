// setting variables to avoid typo
var PAPER_OPTION = "paper";
var SCISSOR_OPTION = "scissor";
var STONE_OPTION = "stone";
var REVERSE_OPTION = "reverse";
var previousGameWinner = "  draw ";

// seetting variables for reverse SPS Game
var currentGameMode = "waiting for user name";
var userName = "";
var youWon = 0;
var computerWon = 0;
var gameDraw = 0;

// generating computer option function
var generateComputerOption = function () {
  var RandomNo = Math.random() * 3;
  var randomSelection = Math.ceil(RandomNo);

  if (randomSelection == 1) {
    return SCISSOR_OPTION;
  }
  if (randomSelection == 2) {
    return PAPER_OPTION;
  }

  return STONE_OPTION;
};

// input validation check

var wrongInputCheck = function (input) {
  var wrongInput = false;
  if (
    input !== PAPER_OPTION &&
    input !== SCISSOR_OPTION &&
    input !== STONE_OPTION &&
    input !== REVERSE_OPTION
  ) {
    var wrongInput = true;

    return wrongInput;
  }
};

// SPS Game decision function

var SPSGameDecision = function (input, computerOption) {
  SPSDecision = "lost";
  if (
    (input == PAPER_OPTION && computerOption == STONE_OPTION) ||
    (input == STONE_OPTION && computerOption == SCISSOR_OPTION) ||
    (input == SCISSOR_OPTION && computerOption == PAPER_OPTION)
  ) {
    SPSDecision = "won";
  } else if (input == computerOption) {
    SPSDecision = "draw";
  }
  return SPSDecision;
};

// Reverse SPS Game decision function

var reverseSPSGameDecision = function (input, computerOption) {
  reverseSPSDecision = "lost";

  if (
    (input == SCISSOR_OPTION && computerOption == STONE_OPTION) ||
    (input == PAPER_OPTION && computerOption == SCISSOR_OPTION) ||
    (input == STONE_OPTION && computerOption == PAPER_OPTION)
  ) {
    reverseSPSDecision = "won";
  } else if (input == computerOption) {
    reverseSPSDecision = "draw";
  }
  return reverseSPSDecision;
};

var main = function (input) {
  var computerOption = generateComputerOption();

  if (currentGameMode == "waiting for user name") {
    userName = input;
    myOutputValue = "Hello " + userName;
    currentGameMode = "SPS-game";
    return myOutputValue;
  }

  // input validation check after username input
  var inputNotValid = wrongInputCheck(input);
  if (inputNotValid == true) {
    return userName + " input not valid";
  }

  if (currentGameMode == "SPS-game") {
    if (input == REVERSE_OPTION) {
      currentGameMode = "Reverse-SPS-Game";

      myOutputValue = " starting reverse SPS game";
      return myOutputValue;
    }

    var gameResult = SPSGameDecision(input, computerOption);
    console.log("input" + input + "computer" + computerOption);
    myOutputValue = gameResult;
  }

  if (currentGameMode == "Reverse-SPS-Game") {
    reverseGameResult = reverseSPSGameDecision(input, computerOption);

    myOutputValue = reverseGameResult;

    // in reverse SPS mode - if againtype "reverse" - it switches back to normal sps mode

    if (input == REVERSE_OPTION) {
      currentGameMode = "SPS-game";
      return " Back to Normal SPS game";
    }
  }

  // korean mode
  if (myOutputValue == "won") {
    youWon = youWon + 1;
    previousGameWinner = userName + ", won";
    console.log(myOutputValue + previousGameWinner);
  } else if (myOutputValue == "lost") {
    computerWon = computerWon + 1;
    previousGameWinner = " computer won ";
  }
  if (myOutputValue == "draw") {
    gameDraw = gameDraw + 1;
    currentGameMode = "SPS-game";
    return " Korean SPS Game Ends, result is  " + previousGameWinner;
  }
  var totalGamesPlayed = youWon + computerWon + gameDraw;

  if (youWon > computerWon) {
    var yourGamePerformance =
      userName +
      ", you are doing good, you won " +
      youWon +
      "/" +
      totalGamesPlayed +
      " Note: Draw " +
      gameDraw;
    (" rounds");
  }
  if (youWon < computerWon) {
    var yourGamePerformance =
      userName +
      ", time to catch up. You are running behind! computer won " +
      computerWon +
      "/" +
      totalGamesPlayed +
      " rounds";
  }
  if (youWon == computerWon) {
    var yourGamePerformance =
      userName +
      ", you both are neck to neck! both won " +
      youWon +
      " each, out of total " +
      totalGamesPlayed +
      " rounds";
  }

  return (
    userName +
    " " +
    myOutputValue +
    "<br>" +
    "you chose " +
    input +
    "  and computer chose " +
    computerOption +
    "<br>" +
    yourGamePerformance
  );
};

// winning conditions
// scissor beats paper
// paper beats stone
// stone beats scissor

// reversed winning conditions
// paper beats scissor
// stone beats paper
// scissor beats stone
