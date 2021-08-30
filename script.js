var userWinCount = 0;
var comWinCount = 0;
var numOfDraws = 0;
var totalRounds = 0;

var gameStarted = false;
var userName = "";

var main = function (userInput) {
  // CHECK IF USER ENTERED NAME
  // if user didn't enter anything, output to tell them to enter name
  if (userInput == "" && gameStarted == false) {
    return "please tell me your name to start playing";
  }
  // if user entered something, store userName, change game mode and tell them to play.
  if (gameStarted == false) {
    userName = userInput;
    gameStarted = true;
    return `hello <b>${userName}</b>, please enter "scissors", "paper" or "stone" to play. <br><br>
        <div id="easter-egg"> Easter Egg: try adding "reversed" in front of your input. E.g "reversed stone".`;
  }
  // if user is in game mode, trigger SPS game~
  if (gameStarted == true) {
    return playSPSGame(userInput);
  }
};

// HELPER FUNCTIONS
// PLAY SCISSORS PAPER STONE GAME
var playSPSGame = function (userInput) {
  // GENERATE RANDOM COMPUTER OUTPUT: SCISSORS, PAPER, STONE
  var programOutput = generateProgramOutput();

  // CHECK IF USER INPUT IS VALID; IF NOT, GENERATE ERROR MESSAGE.
  if (!checkUserInputValidity(userInput)) {
    return `hello <b>${userName}</b>, please enter "scissors", "paper" or "stone" to play. <br><br>
        <div id="easter-egg"> Easter Egg: try adding "reversed" in front of your input. E.g "reversed stone".`;
  }

  // GENERATE OUTPUT VALUE: USER WIN, LOSE OR DRAW
  var userOutcome = generateOutput(userInput, programOutput);

  // GENERATE NICER OUTPUT: ADD EMOJIS, ADD
  userInput += addEmojis(userInput);
  programOutput += addEmojis(programOutput);

  // GENERATE OUTPUT MESSAGE ON WEBPAGE
  myOutputValue = `The computer chose <b>${programOutput}</b>. <br>
        You chose <b>${userInput}</b>. <br><br>
        <b>You ${userOutcome}</b> <br><br>
        <hr> <br>
        So far <b>${userName}</b>... <br><br>
        Out of a total of ${totalRounds} game(s), 
        you've won ${userWinCount} game(s), computer has won ${comWinCount} game(s) and you guys drew ${numOfDraws} game(s). <br><br>`;

  // GENERATE ADDITIONAL MESSAGE
  myOutputValue += generateMessage(userWinCount, comWinCount);
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
  const inputOptions = [
    "scissors",
    "paper",
    "stone",
    "reversed scissors",
    "reversed paper",
    "reversed stone",
  ];
  // check if user input is one of array objects
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
    return `draw. Try again, ${userName}?`;
  }
  // if normal mode and user wins OR if reversed mode and user loses, user wins
  if (
    (!userInput.includes("reversed") &&
      checkIfUserWin(userInput, programOutput)) ||
    (userInput.includes("reversed") &&
      !checkIfUserWin(userInput, programOutput))
  ) {
    userWinCount += 1;
    return `win! Congrats, ${userName}!`;
  }
  comWinCount += 1;
  return `lose! Bummer, ${userName}.`;
};

// GENERATE NICER OUTPUT: ADD-ON EMOJIS
var addEmojis = function (input) {
  if (input.includes("scissors")) {
    return ` 🔪`;
  }
  if (input.includes("paper")) {
    return ` 📄`;
  }
  return ` 🗿`;
};

// GENERATE ADDITIONAL MESSAGE IF DOING WELL OR NOT
var generateMessage = function (userWinCount, comWinCount) {
  if (userWinCount > comWinCount) {
    return " <b>Pretty good! 👍</b>";
  }
  if (userWinCount < comWinCount) {
    return " <b>You can do better. 👊</b>";
  }
  return "";
};
