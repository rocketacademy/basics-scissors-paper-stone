var userName = "";
var gameMode = 0;
var humanWinCount = 0;
var machineWinCount = 0;
var drawCount = 0;
var roundsPlayed = 0;

var korHumanWin = false;
var korMachineWin = false;

var main = function (input) {
  if (userName == "") {
    if (input == "") {
      return "Enter your name to start playing";
    }
    userName = input;
  }
  console.log("userName", userName);

  if (gameMode == 0) {
    if (!(input == 1 || input == 2 || input == 3 || input == 4)) {
      return "Enter the number corresponding to your choice of game mode<br>1. Regular<br>2. Reversed<br>3. Let computer play for you (Regular mode) <br>4. Korean";
    }
    gameMode = input;
  }
  console.log("gamemode", gameMode);

  if (
    !(input == "stone" || input == "paper" || input == "scissors") &&
    gameMode != 3
  ) {
    return 'Enter "scissors", "paper", or "stone" to start playing.';
  }
  // Get computer's random generated choice
  var machineChoice = machinePlay();

  var humanChoice = input;
  if (gameMode == 3) {
    humanChoice = machinePlay();
  }

  // Above 3 parameters passed into playSPS function to determine player outcome. Value of 1 represents win, 0 is draw, -1 is lose
  var outcome = playSPS(machineChoice, humanChoice, gameMode);

  if (gameMode == 4) {
    koreanOutput = playkoreanMode(machineChoice, humanChoice, outcome);
    return koreanOutput;
  }
  var scoreboard = resultsCounter(outcome);
  // Determine the output string to print
  var myOutputValue = printOutputMessage(
    machineChoice,
    humanChoice,
    gameMode,
    outcome
  );

  myOutputValue += scoreboard;

  return myOutputValue;
};

var machinePlay = function () {
  var randomThreeInteger = Math.floor(Math.random() * 3);

  var machineChoice = "stone";

  if (randomThreeInteger == 1) {
    machineChoice = "paper";
  }

  if (randomThreeInteger == 2) {
    machineChoice = "scissors";
  }
  return machineChoice;
};

var playSPS = function (machineChoice, humanChoice, gameMode) {
  // For the outcome variable, value of 1 represents win, 0 is draw, -1 is lose
  var outcome = -1;

  if (machineChoice == humanChoice) {
    outcome = 0;
  }

  if (
    (humanChoice == "stone" && machineChoice == "scissors") ||
    (humanChoice == "paper" && machineChoice == "stone") ||
    (humanChoice == "scissors" && machineChoice == "paper")
  ) {
    outcome = 1;
  }
  // If the game is played in reverse, Multiplying -1 into outcome's value of 1 or -1 will effectively reverse it.
  // If gameMode has default value 1 or if outcome is a draw, the multiplication does not have any effect.
  if (gameMode == 2) {
    outcome = outcome * -1;
  }
  return outcome;
};

var printOutputMessage = function (
  machineChoice,
  humanChoice,
  gameMode,
  outcome
) {
  var outcomeMessage = "You lose! Bummer.";

  if (outcome == 0) {
    outcomeMessage = " It is a draw.. Meh..";
  }

  if (outcome == 1) {
    outcomeMessage = "You win! Amazing.";
  }
  var REPLAY_MESSAGE =
    'Now you can type "scissors" "paper" or "stone" to play another round!';
  if (gameMode == 3) {
    REPLAY_MESSAGE = "Click submit to let computer play for you again";
  }
  var REVERSED = "";
  if (gameMode == 2) {
    REVERSED = "◀️ reversed ";
  }
  var outputMessage = `Hi ${userName}<br>The computer chose ${machineChoice} ${setEmoji(
    machineChoice
  )}.<br>You chose ${REVERSED}${humanChoice} ${setEmoji(
    humanChoice
  )}.<br><br>${outcomeMessage}<br><br>${REPLAY_MESSAGE}`;

  return outputMessage;
};
// Return emoji icon based on object's string
var setEmoji = function (object) {
  var emojiOutput = "💎";

  if (object == "paper") {
    emojiOutput = "📄";
  }

  if (object == "scissors") {
    emojiOutput = "✂️";
  }
  return emojiOutput;
};

var resultsCounter = function (outcome) {
  roundsPlayed += 1;
  if (outcome == 0) {
    drawCount += 1;
  }
  if (outcome == 1) {
    humanWinCount += 1;
  }
  if (outcome == -1) {
    machineWinCount += 1;
  }
  winRate = Math.round((humanWinCount / roundsPlayed) * 100);
  scoreboard = `<br><br>${userName} won ${humanWinCount}, Computer won ${machineWinCount}, Ties: ${drawCount}, Rounds Played: ${roundsPlayed}, Win Rate: ${winRate}%`;
  return scoreboard;
};

var playkoreanMode = function (machineChoice, humanChoice, outcome) {
  console.log(
    "machineChoice, humanChoice, outcome, korHumanWin, korMachineWin"
  );
  console.log(machineChoice, humanChoice, outcome, korHumanWin, korMachineWin);

  if (outcome == 0 && korHumanWin == false && korMachineWin == false) {
    return `The computer chose ${machineChoice}.<br>You chose ${humanChoice}<br>Play again`;
  }
  if (outcome == 0 && korHumanWin == true) {
    korHumanWin = false;
    korMachineWin = false;
    humanWinCount += 1;
    return `The computer chose ${machineChoice}.<br>You chose ${humanChoice}<br>Player wins<br>Player total win ${humanWinCount} Computer total win ${machineWinCount}`;
  }
  if (outcome == 0 && korMachineWin == true) {
    korMachineWin = false;
    korHumanWin = false;
    machineWinCount += 1;
    return `The computer chose ${machineChoice}.<br>You chose ${humanChoice}<br>Computer wins<br>Player total win ${humanWinCount} Computer total win ${machineWinCount}`;
  }
  if (outcome == 1) {
    korHumanWin = true;
    korMachineWin = false;
    return `The computer chose ${machineChoice}.<br>You chose ${humanChoice}<br>Player shouts muk-jji-ppa!`;
  }
  if (outcome == -1) {
    korMachineWin = true;
    korHumanWin = false;
    return `The computer chose ${machineChoice}.<br>You chose ${humanChoice}<br>Computer shouts muk-jji-ppa!`;
  }
};
