var userWinCount = 0;
var comWinCount = 0;
var numOfDraws = 0;
var totalRounds = 0;

var main = function (userInput) {
  // GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE
  var programOutput = generateProgramOutput();

  // CHECK IF USER INPUT IS VALID; IF NOT, GENERATE ERROR MESSAGE.
  if (!checkUserInputValidity(userInput)) {
    return `Please input "scissors", "paper" or "stone". <br><br>
    <div id="easter-egg"> Easter Egg: try adding "reversed" in front of your input. E.g "reversed stone".`;
  }

  // GENERATE OUTPUT VALUE: user win, lose, draw
  var userOutcome = generateOutput(userInput, programOutput);

  // CALCULATE USER WINNING PERCENTAGE
  var userWinPercentage = Math.round(
    ((userWinCount / totalRounds) * 10000) / 100
  );
  // CALCULATE COMPUTER WINNING PERCENTAGE
  var comWinPercentage = Math.round(
    ((comWinCount / totalRounds) * 10000) / 100
  );

  // GENERATE NICER INPUT: ADD EMOJIS, & REASSIGN VALUE
  userInput += addEmojis(userInput);
  programOutput += addEmojis(programOutput);

  // GENERATE OUTPUT MESSAGE ON WEBPAGE
  var myOutputValue = `The computer chose <b>${programOutput}</b>. <br>
    You chose <b>${userInput}</b>. <br><br>
    <b>You ${userOutcome}</b>
    <hr> <br>
    A total of <b>${totalRounds} round(s)</b> have been played: <br>
    you won <b>${userWinCount} time(s)</b>, computer won <b>${comWinCount}</b> time(s) and you guys tied <b>${numOfDraws}</b> time(s). <br>
    You win <b>${userWinPercentage}%</b> of the time, while computer wins <b>${comWinPercentage}%</b> of the time.`;
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

// TO GENERATE OUTPUT MESSAGES WHEN USER WINS, LOSES OR DRAWS. EVEN IN REVERSED MODE.
var generateOutput = function (userInput, programOutput) {
  totalRounds += 1;
  if (userInput.includes(programOutput)) {
    numOfDraws += 1;
    return `draw. Try again?`;
  }
  // if normal mode and user wins OR if reversed mode and user loses => Win
  if (
    (!userInput.includes("reversed") &&
      checkIfUserWin(userInput, programOutput)) ||
    (userInput.includes("reversed") &&
      !checkIfUserWin(userInput, programOutput))
  ) {
    userWinCount += 1;
    return `win! Congrats.`;
  }
  comWinCount += 1;
  return `lose! Bummer.`;
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
