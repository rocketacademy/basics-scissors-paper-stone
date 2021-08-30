var main = function (userInput) {
  // GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE
  var programOutput = generateProgramOutput();

  // CHECK IF USER INPUT IS VALID; IF NOT, GENERATE ERROR MESSAGE.
  if (!checkUserInputValidity(userInput)) {
    return `Please input "scissors", "paper" or "stone".`;
  }

  // GENERAT RESULT
  var userOutcome = generateOutput(userInput, programOutput);

  // GENERATE NICER INPUT: ADD EMOJIS, & REASSIGN VALUE
  userInput += addEmojis(userInput);
  programOutput += addEmojis(programOutput);

  // GENERATE OUTPUT MESSAGE ON WEBPAGE
  var myOutputValue = `The computer chose ${programOutput}. <br>
    You chose ${userInput}. <br><br>
    You ${userOutcome} <br><br>
    Now you can type "scissors", "paper" or "stone" to play another round!<br><br>
    <div> Easter Egg: try adding "reversed" in front of your input. E.g "reversed stone".`;
  return myOutputValue;
};

// GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE
var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  return Math.floor(randomDecimal);
};
var generateProgramOutput = function () {
  const outputOptions = ["scissors", "paper", "stone"];
  return outputOptions[generateRandomNumber()];
};

// CHECK IF USER INPUT IS VALID
var checkUserInputValidity = function (userInput) {
  // added the reversed ones in because users might enter something random with "scissors"
  const inputOptions = [
    "scissors",
    "paper",
    "stone",
    "reversed scissors",
    "reversed paper",
    "reversed stone",
  ];
  // check if user input is one of array objects. if yes, return true. if no, return false.
  if (inputOptions.includes(userInput)) {
    return true;
  }
  return false;
};

// CHECK IF USER WIN OR LOSE
var checkIfUserWin = function (userInput, programOutput) {
  // if user wins, return true. if not, return false.
  if (
    (userInput.includes("scissors") && programOutput == "paper") ||
    (userInput.includes("paper") && programOutput == "stone") ||
    (userInput.includes("stone") && programOutput == "scissors")
  ) {
    return true;
  }
  return false;
};

// CHECK IF USER INPUT CONTAINS "reversed"; IF YES, GENERATE REVERSE OUTCOME. IF NO, GENERATE NORMAL OUTCOME.
var checkIfReversed = function (userInput) {
  if (userInput.includes("reversed")) {
    return true;
  }
  return false;
};

// TO GENERATE OUTPUT MESSAGES WHEN USER WINS, LOSES OR DRAWS.
var generateOutput = function (userInput, programOutput) {
  // if normal mode and user wins OR if reversed mode and user loses => Win
  if (
    (!checkIfReversed(userInput) && checkIfUserWin(userInput, programOutput)) ||
    (checkIfReversed(userInput) && !checkIfUserWin(userInput, programOutput))
  ) {
    return `win! Congrats.`;
  }
  // if normal mode and user loses OR if reversed mode and user wins  => Lose
  if (
    (!checkIfReversed(userInput) &&
      !checkIfUserWin(userInput, programOutput)) ||
    (checkIfReversed(userInput) &&
      checkUserInputValidity(userInput, programOutput))
  ) {
    return `lose! Bummer.`;
  }
  return `draw. Try again?`;
};

// GENERATE NICER INPUT: ADD-ON EMOJIS
var addEmojis = function (input) {
  if (input.includes("scissors")) {
    return ` 🔪`; // if user input includes "scissors", return knife emoji
  }
  if (input.includes("paper")) {
    return ` 📄`; // if user input includes "paper", return paper
  }
  // if anything else ("stone"), return easter island emoji
  return ` 🗿`;
};
