////////////////////////////
//// States and Variables //
////////////////////////////

// Win-Loss Record
var playerWinRecord = 0;
var systemWinRecord = 0;
var gameTieRecord = 0;
var playerWinPerc = 0;
var systemWinPerc = 0;

// Username
var currentGameMode = "waiting for user name";
var userName = "";

//Reverse Game Mode
var isReversedGameMode = false;

///////////////
//// Main  ////
///////////////

var main = function (input) {
  // inputs: "stone", "paper", "scissors" -- "add reversed in front for reversed game mode"

  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "SPS Game";
    myOutputValue = `Welcome [ ${userName} ] ! to the Scissors, Paper, Stone Game!`;

    return myOutputValue;
  }

  // check if user wants to play the game in reversed (input is "reversed")
  if (input == "reverse") {
    reverseGameMode();

    myOutputValue = ""; // empty string so as to prank the friend :)))

    return myOutputValue;
  }

  //console.log("start of program");
  // clean user input
  var userInputCleaned = cleanStr(input);

  // check if user wants to play the reversed game
  var isReversedGame = userInputCleaned.includes("reversed");
  if (isReversedGame == true) {
    reverseGameMode(); // to reverse the reversed game mode

    userInputCleaned = extractSpsStr(userInputCleaned);
  }

  // validate user input
  if (validateInput(userInputCleaned) == false) {
    return "bruh.<br><br>Invalid input. <br><br> Please enter one of the following: <br>- Scissors<br>- Paper<br>- Stone";
  }

  myOutputValue = spsLogic(userInputCleaned, isReversedGameMode);

  // if user input contains "reversed" revert game mode back to previous game reversed state
  if (isReversedGame == true) {
    reverseGameMode();
  }

  return myOutputValue;
};

////////////////////////////
//// Helper Functions  ////
///////////////////////////

var cleanStr = function (uncleanedStr) {
  // clean user input (lowercase + remove leading and trailing spaces)
  return uncleanedStr.trim().toLowerCase();
};

var extractSpsStr = function (userInputPara) {
  // extract SPS text from reversed user input
  return userInputPara.split(" ")[1];
};

var formatStr = function (stringToFormat) {
  // format strings for output aesthetics
  return stringToFormat.charAt(0).toUpperCase() + stringToFormat.slice(1);
};
var addSpacesToStr = function (numOfBlankSpace) {
  var blankText = "";
  for (let i = 0; i < numOfBlankSpace; i++) {
    blankText += "&nbsp";
  }
  return blankText;
};

var validateInput = function (userInputPara) {
  // check whether user input is one of the game options: Scissors, Paper or Stone
  // if it is not, highlight to user and end the program

  // console.log("validate input start");
  if (
    !(
      userInputPara == "scissors" ||
      userInputPara == "paper" ||
      userInputPara == "stone"
    )
  ) {
    //console.log("validate false input end");
    return false;
  }

  //console.log("validate true input end");
  return true;
};

var generateSysInput = function () {
  // generate system's input of Scissors, Paper or Stone

  // initalise variable
  var sPs = "";
  // initialise variable and assign random number of 0 to less than 3
  var randNum = Math.random() * 3;
  // initalise variable and get integer from random number
  var intNum = Math.floor(randNum);

  // assign Scissors, Paper or Stone values based on generated random integer
  if (intNum == 0) {
    sPs = "scissors";
  } else if (intNum == 1) {
    sPs = "paper";
  } else sPs = "stone";

  return sPs;
};

var generateGameStatsMsg = function () {
  // generate game stat msg to be added to final output
  playerWinPerc =
    0 + (playerWinRecord / (playerWinRecord + systemWinRecord)) * 100;
  systemWinPerc =
    0 + (systemWinRecord / (playerWinRecord + systemWinRecord)) * 100;

  // to prevent variable from having naan value
  if (isNaN(playerWinPerc)) {
    playerWinPerc = 0;
  }
  if (isNaN(systemWinRecord)) {
    systemWinRecord = 0;
  }

  return `<br><br><br> ## ${userName}'s skills ##
    <br>Win/Loss: Player < ${playerWinRecord} > VS System: < ${systemWinRecord} >
    <br>Ties:${addSpacesToStr(9)}Count${addSpacesToStr(2)}< ${gameTieRecord} >
    <br>Win %:${addSpacesToStr(5)}Player < ${playerWinPerc.toFixed(
    2
  )}% > VS System: < ${systemWinPerc.toFixed(2)}% >`;
};

var generateSystemMsg = function () {
  // generate system message based on player vs system win record
  if (playerWinRecord == systemWinRecord) {
    return "<br><br><br><br>System: A worthy adversary indead";
  }
  if (playerWinRecord > systemWinRecord) {
    return "<br><br><br><br>System: Don't let this get into your head, human.";
  }
  return "<br><br><br><br>System: Hah. Weak.";
};

var reversedGameModeStatus = function () {
  // displays reversed game mode status
  if (isReversedGameMode == false) {
    return "Game Mode: Normal<br><br>";
  }
  return "Game Mode: Reversed<br><br>";
};

var spsLogic = function (cleanedUserInput, isReversed) {
  // SPS logic - generate system's choice, evaluate with user's choice and output results

  // generate system's choice of 'Scissors', 'Paper' or 'Stone'
  var systemSps = generateSysInput();

  // format SPS output
  var formattedUserInput = formatStr(cleanedUserInput);
  var formattedSysInput = formatStr(systemSps);

  // return tie message for tie condition
  if (cleanedUserInput == systemSps) {
    gameTieRecord += 1;

    return (
      reversedGameModeStatus() +
      `Player: [ ${formattedUserInput} ] VS System: [ ${formattedSysInput} ]
    <br><br>You tied ._.<br><br><i>"We live to fight another day - Ragnar Lothbrok (Vikings)"</i>
    <br><br>Enter input to play again!` +
      generateGameStatsMsg() +
      generateSystemMsg()
    );
  }

  // return win message depending on game reversal condition
  if (isReversed == true) {
    // return win message for reversed win conditions

    if (
      (cleanedUserInput == "stone" && systemSps == "paper") ||
      (cleanedUserInput == "scissors" && systemSps == "stone") ||
      (cleanedUserInput == "paper" && systemSps == "scissors")
    ) {
      playerWinRecord += 1;

      return (
        reversedGameModeStatus() +
        `Player: [ ${formattedUserInput} ] VS System: [ ${formattedSysInput} ]
        <br><br>You won!!! :D
        <br><br><i>"To the victor belong the spoils of the enemy - William L. Marcy"</i>
        <br><br>Enter input to play again!` +
        generateGameStatsMsg() +
        generateSystemMsg()
      );
    }
  } else if (
    // return win message for normal win conditions

    (cleanedUserInput == "scissors" && systemSps == "paper") ||
    (cleanedUserInput == "paper" && systemSps == "stone") ||
    (cleanedUserInput == "stone" && systemSps == "scissors")
  ) {
    playerWinRecord += 1;

    return (
      reversedGameModeStatus() +
      `Player: [ ${formattedUserInput} ] VS System: [ ${formattedSysInput} ]
      <br><br>You won!!! :D
      <br><br><i>"To the victor belong the spoils of the enemy - William L. Marcy"</i>
      <br><br>Enter input to play again!` +
      generateGameStatsMsg() +
      generateSystemMsg()
    );
  }
  // return loss message otherwise

  systemWinRecord += 1;
  return (
    reversedGameModeStatus() +
    `Player: [ ${formattedUserInput} ] VS System: [ ${formattedSysInput} ]
    <br><br>You lost :(<br><br><i>"Fall down seven times, stand up eight - Japanese proverb"</i>
    <br><br>Enter input to play again!` +
    generateGameStatsMsg() +
    generateSystemMsg()
  );
};

var reverseGameMode = function () {
  // toggles reversed game mode
  if (isReversedGameMode == false) {
    isReversedGameMode = true;
  } else if (isReversedGameMode == true) {
    isReversedGameMode = false;
  }
};
