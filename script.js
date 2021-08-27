var main = function (userInput) {
  // GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE
  var programOutput = generateProgramOutput();

  // CHECK IF USER INPUT IS VALID; IF NOT, GENERATE ERROR MESSAGE.
  if (!checkUserInputValidity(userInput)) {
    return `Please input "scissors", "paper" or "stone".`;
  }

  // CHECK IF USER INPUT CONTAINS "reversed"; IF YES, GENERATE REVERSE OUTCOME. IF NO, GENERATE NORMAL OUTCOME.
  // if yes, check if user win, lose or draw. and return outcome string. (reversed version)
  if (userInput.includes("reversed")) {
    var userOutcome = generateReversedResults(userInput, programOutput);
    // if no, check if user win, lose or draw. and return outcome string. (normal version)
  } else {
    var userOutcome = generateNormalResults(userInput, programOutput);
  }

  // GENERATE NICER INPUT: ADD EMOJIS
  // AND REASSIGN VALUE
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

// HELPER FUNCTIONS BELOW: //

// GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE
// generate a number from 0 to 2, to be used by computer to select output from array
var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  return Math.floor(randomDecimal);
};
// generate computer output: randomly choose scissors, paper or stone
var generateProgramOutput = function () {
  const outputOptions = ["scissors", "paper", "stone"];
  return outputOptions[generateRandomNumber()];
};

// CHECK IF USER INPUT IS VALID
var checkUserInputValidity = function (userInput) {
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

// TO GENERATE OUTPUT MESSAGES WHEN USER WINS, LOSES OR DRAWS.
// #1: normal version
var generateNormalResults = function (userInput, programOutput) {
  // if user wins, output message
  if (
    (userInput.includes("scissors") && programOutput == "paper") ||
    (userInput.includes("paper") && programOutput == "stone") ||
    (userInput.includes("stone") && programOutput == "scissors")
  ) {
    return `win! Congrats.`;
  }
  // if user loses, output message
  if (
    (userInput.includes("scissors") && programOutput == "stone") ||
    (userInput.includes("paper") && programOutput == "scissors") ||
    (userInput.includes("stone") && programOutput == "paper")
  ) {
    return `lose! Bummer.`;
    // if anything else (user draws), output message
  }
  return `draw. Try again?`;
};

// #2: reversed version
var generateReversedResults = function (userInput, programOutput) {
  // if user wins normally, reverse output message
  if (generateNormalResults(userInput, programOutput) == "win! Congrats.") {
    return `lose! Bummer.`;
  }
  // if user loses normally, reverse output message
  if (generateNormalResults(userInput, programOutput) == "lose! Bummer.") {
    return `win! Congrats.`;
  }
  // if anything else (user draws), output message
  return `draw. Try again?`;
};

// GENERATE NICER INPUT: ADD-ON EMOJIS
var addEmojis = function (input) {
  // if user input includes "scissors", return knife emoji
  if (input.includes("scissors")) {
    return ` 🔪`;
  }
  // if user input includes "paper", return paper
  if (input.includes("paper")) {
    return ` 📄`;
  }
  // if anything else ("stone"), return easter island emoji
  return ` 🗿`;
};
