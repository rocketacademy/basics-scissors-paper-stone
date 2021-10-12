var main = function (input) {
  // Validate that input is any of below 6 options otherwise return a play instruction
  if (
    !(
      input == "stone" ||
      input == "paper" ||
      input == "scissors" ||
      input == "reversed stone" ||
      input == "reversed paper" ||
      input == "reversed scissors"
    )
  ) {
    return 'Enter "scissors", "paper", or "stone" to start playing. You can also test your luck by adding a secret word in front hehe 🙃';
  }
  // Get computer's random generated choice
  machineChoice = machinePlay();
  // Rationalise player's input to one of stone, paper or scissors
  humanChoice = setHumanChoice(input);
  // Game Mode is assigned value 1 by default, will be -1 if input indicated reversed word
  gameMode = setGameMode(input);
  // Above 3 parameters passed into playSPS function to determine player outcome. Value of 1 represents win, 0 is draw, -1 is lose
  outcome = playSPS(machineChoice, humanChoice, gameMode);
  // Determine the output string to print
  var myOutputValue = printOutputMessage(
    machineChoice,
    humanChoice,
    gameMode,
    outcome
  );

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

var setHumanChoice = function (humanInput) {
  var humanChoice = "stone";

  if (humanInput == "paper" || humanInput == "reversed paper") {
    humanChoice = "paper";
  }

  if (humanInput == "scissors" || humanInput == "reversed scissors") {
    humanChoice = "scissors";
  }
  return humanChoice;
};

var setGameMode = function (humanInput) {
  var gameMode = 1;

  if (
    humanInput == "reversed scissors" ||
    humanInput == "reversed paper" ||
    humanInput == "reversed stone"
  ) {
    gameMode = -1;
  }

  return gameMode;
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
  // If the game is played in reverse, gameMode will have value -1. Multiplying it into outcome's value of 1 or -1 will effectively reverse it.
  // If gameMode has default value 1 or if outcome is a draw, the multiplication does not have any effect.
  outcome = outcome * gameMode;

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
  var gameModeMessage = "";
  var REVERSED = "";
  var cheekyReplay = "";
  if (gameMode == -1) {
    gameModeMessage = "You tempted luck! 🙃<br><br>";
    REVERSED = "◀️ reversed ";
    cheekyReplay = " Don't play cheeky again! 🙄";
  }
  var outputMessage = `${gameModeMessage}The computer chose ${machineChoice} ${setEmoji(
    machineChoice
  )}.<br>You chose ${REVERSED}${humanChoice} ${setEmoji(
    humanChoice
  )}.<br><br>${outcomeMessage}<br><br>Now you can type "scissors" "paper" or "stone" to play another round!${cheekyReplay}`;

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
