//DiceRoll Function
//Declare constant
var scissors = `scissors`;
var paper = `paper`;
var stone = `stone`;
var reversedScissors = `reversed scissors`;
var reversedPaper = `reversed paper`;
var reversedStone = `reversed stone`;

var currentMode = `pending inputs`;
var userName = "";

var rollDice = function () {
  //determine max number here
  return Math.floor(Math.random() * 3) + 1;
};

// Define computer result.
var generateComputerResult = function () {
  var randomDiceNumber = rollDice();
  var computerPlays = "";
  if (randomDiceNumber == 1) {
    computerPlays = scissors;
    return computerPlays;
  }
  if (randomDiceNumber == 2) {
    computerPlays = paper;
    return computerPlays;
  }
  if (randomDiceNumber == 3) {
    computerPlays = stone;
    return computerPlays;
  }
  return computerPlays;
};
//generate base msg
var generateStdMsg = function (userName, computerPlays, input) {
  return `Hello ${userName} :) Good game! <br> The computer played: ${computerPlays}. <br> You played: ${input}.`;
};
//generate overall result tracker
var userWins = 0;
var compWins = 0;
//THIS GOT ERROR :(
var trackOverallResult = function (userWins, compWins) {
  var overallResult;
  if (userWins > compWins) {
    overallResult = `<br>You win (${
      (userWins / (userWins + compWins)) * 100
    }% more than the computer`;
  } else if (userWins < compWins) {
    overallResult = `<br>The computer wins ${
      (userWins / (userWins + compWins)) * 100
    }% more than you`;
  } else if (userWins == compWins) {
    overallResult = `<br>You and the computer draw!`;
  }
  return overallResult;
};

//game modes
//=========================== NORMAL ============================

var playNormalGame = function (input, computerPlays, standardMessage) {
  var myOutputValue;
  if (
    //user wins
    (input == scissors && computerPlays == paper) ||
    (input == paper && computerPlays == stone) ||
    (input == stone && computerPlays == scissors)
  ) {
    myOutputValue = `${standardMessage} <br> YAY You win! <br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    userWins = userWins + 1;
    console.log("if statement", myOutputValue);
  } else if (
    //computer wins
    (computerPlays == scissors && input == paper) ||
    (computerPlays == paper && input == stone) ||
    (computerPlays == stone && input == scissors)
  ) {
    myOutputValue = `${standardMessage} <br> You lost :( <br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    compWins = compWins + 1;
    console.log("if statement", myOutputValue);
  } else if (
    //user draw with com
    input == computerPlays
  ) {
    myOutputValue = `${standardMessage} <br> it's a draw! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
    console.log("else if statement", computerPlays, input);
  } else if (
    //input validation
    input != scissors &&
    input != paper &&
    input != stone
  ) {
    myOutputValue = `You are playing Normal Scissors Paper Stone. Please input "scissors", "paper" or "stone" to play.`;
    console.log("else statement", computerPlays, input);
  }
  return myOutputValue;
};
//=========================== REVERSED ============================
var playReversedGame = function (
  input,
  computerPlays,
  standardMessage,
  userWins,
  compWins
) {
  var myOutputValue;
  if (
    //user wins
    (input == reversedScissors && computerPlays == stone) ||
    (input == reversedPaper && computerPlays == scissors) ||
    (input == reversedStone && computerPlays == paper)
  ) {
    myOutputValue = `${standardMessage} <br> Reversal! You won!<br> <br> Please input "reversed scissors", "reversed paper" or "reversed stone" to try again.`;
    userWins = userWins + 1;
  } else if (
    //computer wins
    (input == reversedScissors && computerPlays == paper) ||
    (input == reversedPaper && computerPlays == stone) ||
    (input == reversedStone && computerPlays == scissors)
  ) {
    myOutputValue = `${standardMessage}  <br> Reversal! You won! <br><br>Please input "reversed scissors", "reversed paper" or "reversed stone" to try again.`;
    compWins = compWins + 1;
    //draw conditions
  } else if (
    (input == reversedScissors && computerPlays == scissors) ||
    (input == reversedPaper && computerPlays == paper) ||
    (input == reversedStone && computerPlays == stone)
  ) {
    myOutputValue = `${standardMessage}<br> Reversal! It's a draw!<br><br>Please input "reversed scissors", "reversed paper" or "reversed stone" to try again.`;
    //input validation
  } else if (
    input != reversedScissors &&
    input != reversedPaper &&
    input != reversedStone
  ) {
    myOutputValue = `You are playing Reversed Scissors Paper Stone. Please input "reversed scissors", "reversed paper" or "reversed stone" to play.`;
    console.log("else if statement", computerPlays, input);
  }
  return myOutputValue;
};

//======================== KOREAN MUKJJIPPA =========================

// ============== Using modes to determine the second round (Buggy) ==============
var mukJjiPpaMode = false;

var playKoreanGame = function (input, computerPlays, standardMessage) {
  var myOutputValue;
  var koreanUserWins = 0;
  var koreanCompWins = 0;
  // default mukJjiPpaMode is false
  if (
    //user wins
    (input == scissors && computerPlays == paper) ||
    (input == paper && computerPlays == stone) ||
    (input == stone && computerPlays == scissors)
  ) {
    myOutputValue = `${standardMessage} <br>USER shouts Muk-Jji-Ppa!`;
    mukJjiPpaMode = true;
    koreanUserWins = koreanUserWins + 1;
    console.log(`user wins. mukJjiPpaMode`, mukJjiPpaMode);
  } else if (
    //computer wins
    (computerPlays == scissors && input == paper) ||
    (computerPlays == paper && input == stone) ||
    (computerPlays == stone && input == scissors)
  ) {
    myOutputValue = `${standardMessage} <br>COMPUTER shouts: Muk-Jji-Ppa!`;
    mukJjiPpaMode = true;
    koreanCompWins = koreanCompWins + 1;
  
  } else if ( //draw
    input == computerPlays) {
    myOutputValue = `${standardMessage} It's a draw. Please input "scissors", "paper" or "stone" to try again.`;
    mukJjiPpaMode = false;
   
    //input validation
    } else if (input != scissors &&
    input != paper &&
    input != stone
  ) {myOutputValue = `You're playing Muk-Jji-Ppa! Please input "scissors", "paper" or "stone".`;
    mukJjiPpaMode = false;
    console.log(`input validation statement: comp plays ${computerPlays}, you play${input} & mukJjiPpaMode is ${mukJjiPpaMode}`)
  }
  //if mukjjippa mode is true and user was the last to win, total user winnings +1
  if (mukJjiPpaMode == true) {
    if (koreanUserWins == 1 && input == computerPlays) {
      userWins = userWins + 1;
      myOutputValue = `${standardMessage}<br> You win Muk Jji Ppa!. ${koreanWinner}`;
      // mukJjiPpaMode = false;
      koreanUserWins =0;

  //if mukjjippa mode is true and computer was the last to win, total computer winnings +1
    } else if (koreanCompWins == 1 && input == computerPlays) {
      compWins = compWins + 1;
      myOutputValue = `${standardMessage}<br> Computer wins Muk Jji Ppa!${koreanWinner}`;
      // mukJjiPpaMode = false;
      koreanCompWins = 0;

    } else {myOutputValue = `${standardMessage}<br> No one won. Try again!`;
    }
  
  var trackKoreanWinner = function (userWins, compWins) {
    if (userWins > compWins) {
      koreanWinner = `<br> Overall winner is ${userName}. You won ${
        (userWins / (userWins + compWins)) * 100
      }% of the time`;
    } else if (userWins < compWins) {
      koreanWinner = `<br> Overall winner is computer. Computer won ${
        (userWins / (userWins + compWins)) * 100
      }% of the time`;
    } else if ((userWins = compWins)) {
      koreanWinner = `<br> It's a draw overall!`;
    }
    return koreanWinner;
  };
  var koreanWinner = trackKoreanWinner(userWins, compWins);

  return myOutputValue;
};
//=========================== COM v COM ============================
var playCOMvCOMgame = function (userGuess, computerPlays, standardMessage) {
  var myOutputValue;
  var userGuess = generateComputerResult();
  console.log(`userGuess =`, userGuess);
  if (
    //user wins
    (userGuess == scissors && computerPlays == paper) ||
    (userGuess == paper && computerPlays == stone) ||
    (userGuess == stone && computerPlays == scissors)
  ) {
    myOutputValue = `${standardMessage} Computer generated ${userGuess} for you.<br> You win YAY! <br><br> Now you can type "scissors", "paper" or "stone" to play another round!`;
    userWins = userWins + 1;
    console.log("if statement", myOutputValue);
  } else if (
    //computer wins
    (computerPlays == scissors && userGuess == paper) ||
    (computerPlays == paper && userGuess == stone) ||
    (computerPlays == stone && userGuess == scissors)
  ) {
    myOutputValue = `${standardMessage} Computer generated ${userGuess} for you.<br> You lose! <br><br> Now you can type "scissors", "paper" or "stone" to play another round!`;
    compWins = compWins + 1;
    console.log("if statement", myOutputValue);
  } else if (
    //its a draw
    userGuess == computerPlays
  ) {
    myOutputValue = `${standardMessage} <br> Computer generated ${userGuess} for you.<br> It's a draw! <br><br> Now you can type "scissors", "paper" or "stone" to play another round!`;
    console.log("else if statement", computerPlays, userGuess);
  }
  return myOutputValue;
};

//=========================== MAIN FUNC ============================
var main = function (input) {
  //Prevent caps errors
  input = input.toLowerCase();
  var myOutputValue = ``;

  var computerPlays = generateComputerResult();
  console.log(
    `generateComputerResult function, computer plays: ${computerPlays}`
  );

  var standardMessage = generateStdMsg(userName, computerPlays, input);
  console.log(standardMessage);

  //determine the game mode
  if (currentMode == `pending inputs`) {
    userName = input;
    console.log(`user name: ${userName}`);
    // now that we have the name, switch the mode
    currentMode = "normal game mode";
    myOutputValue = `Hello ${userName}! <br> Enter 'scissors', 'paper' or 'stone' to start the game! <br><br> Alternatively you can input any of the following to change the game mode: <br> 
    'reversed', 'korean' or 'com v com'.`;
    console.log(`current normal mode: ${currentMode}`);
  } else if (currentMode != `pending inputs` && input == "normal") {
    currentMode = "normal game mode";
    myOutputValue = `Let's play normal SPS!`;

    //allow selection of game modes
  } else if (currentMode != `pending inputs` && input == "korean") {
    currentMode = `mukJjiPpa`;
    myOutputValue = `Let's play Muk-Jji-Ppa!`;
  } else if (currentMode != `pending inputs` && input == `reversed`) {
    currentMode = `reversed`;
    myOutputValue = `Let's play reversed SPS!`;
  } else if (currentMode != `pending inputs` && input == `com v com`) {
    currentMode = `com v com`;
    myOutputValue = `Let's play Computer VS Computer!`;

    //start of actual game
  } else if (currentMode == "normal game mode") {
    console.log(`current mode: ${currentMode}`);
    myOutputValue =
      playNormalGame(input, computerPlays, standardMessage) + overallResult;
    //introduce reversed game mode
  } else if (currentMode == "reversed") {
    console.log(`current mode: ${currentMode}`);
    myOutputValue =
      playReversedGame(input, computerPlays, standardMessage) + overallResult;
    // introduce muk-jji-ppa game mode
  } else if (currentMode == `mukJjiPpa`) {
    console.log(`current mode: ${currentMode}`);
    myOutputValue =
      playKoreanGame(input, computerPlays, standardMessage) + overallResult;
  } else if (currentMode == `com v com`) {
    console.log(`current mode: ${currentMode}`);
    myOutputValue =
      playCOMvCOMgame(input, computerPlays, standardMessage) + overallResult;
  }

  var overallResult = trackOverallResult(userWins, compWins);
  console.log(`User and comp wins : ${(userWins, compWins)}`);

  return myOutputValue;
};
