var main = function (userInput) {
  // generate computer output
  var programOutput = generateProgramOutput();

  // check if user input is valid
  const inputOptions = ["scissors", "paper", "stone"];
  if (!inputOptions.includes(userInput)) {
    return `Please input "scissors", "paper" or "stone".`;
  }

  // check if user win, lose or draw. and return description.
  var userOutcome = checkResult(userInput, programOutput);

  // generate nicer input and reassign value
  var userInput = generateNiceInput(userInput);
  var programOutput = generateNiceInput(programOutput);

  // output on website
  var myOutputValue = `The computer chose ${programOutput}. <br>
  You chose ${userInput}. <br><br>
  You ${userOutcome} <br><br>
  Now you can type "scissors", "paper" or "stone" to play another round!
  `;
  return myOutputValue;
};

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

// check if user wins, loses or draws.
var checkResult = function (userInput, programOutput) {
  //user wins
  if (
    (userInput == "scissors" && programOutput == "paper") ||
    (userInput == "paper" && programOutput == "stone") ||
    (userInput == "stone" && programOutput == "scissors")
  ) {
    return "win! Congrats.";

    // user loses
  } else if (
    (userInput == "scissors" && programOutput == "stone") ||
    (userInput == "paper" && programOutput == "scissors") ||
    (userInput == "stone" && programOutput == "paper")
  ) {
    return "lose! Bummer.";

    // user draws
  } else {
    return "draw. Try again?";
  }
};

// generate nicer input
var generateNiceInput = function (input) {
  if (input == "scissors") {
    return "scissors 🔪";
  } else if (input == "stone") {
    return "stone 🗿";
  } else {
    return "paper 📄";
  }
};
