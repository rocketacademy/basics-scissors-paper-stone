var main = function (userInput) {
  // GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE //
  var programOutput = generateProgramOutput();

  // CHECK IF USER INPUT IS VALID
  const inputOptions = [
    "scissors",
    "paper",
    "stone",
    "reversed scissors",
    "reversed paper",
    "reversed stone",
  ];
  // if does not contain any object in array, generate error message.
  if (!inputOptions.includes(userInput)) {
    return `Please input "scissors", "paper" or "stone". <br><br>
    <div> Easter Egg: try adding "reversed" in front of your input. E.g "reversed stone".
    `;
  }

  // CHECK IF USER INPUT CONTAINS "reversed"
  // if contains "reversed", check if user win, lose or draw. and return outcome string.
  if (userInput.includes("reversed")) {
    var userOutcome = checkReversedResult(userInput, programOutput);

    // if normal version, check if user win, lose or draw. and return outcome string.
  } else {
    var userOutcome = checkResult(userInput, programOutput);
  }

  // GENERATE NICER INPUT: ADD EMOJIS
  // AND REASSIGN VALUE
  userInput += addEmojis(userInput);
  programOutput += addEmojis(programOutput);

  // GENERATE OUTPUT MESSAGE ON WEBPAGE
  var myOutputValue = `The computer chose ${programOutput}. <br>
  You chose ${userInput}. <br><br>
  You ${userOutcome} <br><br>
  Now you can type "scissors", "paper" or "stone" to play another round!
  `;
  return myOutputValue;
};

// HELPER FUNCTIONS BELOW:
// GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE //
// generate a number from 0 to 2, to be used by computer to select output from array
var generateRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  return Math.floor(randomDecimal);
};

// computer randomly chooses scissors, paper or stone
var generateProgramOutput = function () {
  const outputOptions = ["scissors", "paper", "stone"];
  return (programOutput = outputOptions[generateRandomNumber()]);
};

// TO CHECK IF USER WINS, LOSES OR DRAWS. //
// #1: normal version
var checkResult = function (userInput, programOutput) {
  // if user wins, output message
  if (
    (userInput.includes("scissors") && programOutput == "paper") ||
    (userInput.includes("paper") && programOutput == "stone") ||
    (userInput.includes("stone") && programOutput == "scissors")
  ) {
    return `win! Congrats.`;

    // if user loses, output message
  } else if (
    (userInput.includes("scissors") && programOutput == "stone") ||
    (userInput.includes("paper") && programOutput == "scissors") ||
    (userInput.includes("stone") && programOutput == "paper")
  ) {
    return `lose! Bummer.`;

    // if anything else (user draws), output message
  } else {
    return `draw. Try again?`;
  }
};

// #2: reversed version
var checkReversedResult = function (userInput, programOutput) {
  // if user wins normally, reverse output message
  if (checkResult(userInput, programOutput) == "win! Congrats.") {
    return `lose! Bummer.`;

    // if user loses normally, reverse output message
  } else if (checkResult(userInput, programOutput) == "lose! Bummer.") {
    return `win! Congrats.`;
  } else {
    // if anything else (user draws), output message
    return `draw. Try again?`;
  }
};

// GENERATE NICER INPUT: ADD-ON EMOJIS//
var addEmojis = function (input) {
  if (input.includes("scissors")) {
    return ` 🔪`;
  } else if (input.includes("stone")) {
    return ` 🗿`;
  } else {
    return ` 📄`;
  }
};
