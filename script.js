var userWonCount = 0;
var comWonCount = 0;
var userName = "";
var startOfRound = true;
var gameMode = "Waiting for user choice";
var koreanSpsState = "first round";
var roundWinner = "";

var main = function (input) {
  var myOutputValue = "";

  //for start of round, register user name
  if (startOfRound) {
    startOfRound = false;
    userName = input;
    return `Welcome ${userName}! Please choose the game mode: <br><br> 1. Normal play <br><br> 2. Reversed play <br><br> 3. Korean SPS <br><br> 4. Computer vs computer <br><br> Enter the number choice.`;
  }
  //user choosing the game mode
  if (gameMode == "Waiting for user choice") {
    gameMode = gameModeProcess(input);
    //to see if the user input is one of the choices
    if (modeValidation(input)) {
      gameMode = "Waiting for user choice";
      return `You entered ${input} which is not one of the given choices (1, 2 or 3). ${userName}, please enter again.`;
    }
    //for com vs com mode, need to prompt user just click submit
    if (gameMode == "computer vs computer") {
      return `You have chosen ${gameMode}, you can start by clicking submit without entering anything.`;
    }
    return `You have chosen ${gameMode}, let's start!`;
  }

  //process if the input is valid and exception for com vs com game mode
  if (inputValidation(input) && !(gameMode == "computer vs computer")) {
    return `You entered ${input} which is not a valid input. Only the following are accepted: scissors, paper or stone. ${userName}, please try again.`;
  }

  var randNumber = randomNumGenerator();
  var randNumber2 = randomNumGenerator();
  console.log(randNumber);
  var handFromProgram = playByProgram(randNumber);
  var handFromProgram2 = playByProgram(randNumber2);

  if (gameMode == "normal play") {
    var result = winningHand(input, handFromProgram);
  }
  if (gameMode == "reversed play") {
    var result = reversedGameWinningHand(input, handFromProgram);
  }
  if (gameMode == "korean SPS") {
    myOutputValue = evaluateKoreanSPS(input, handFromProgram);
    return `You are playing the Korean SPS version. <br><br> You played ${input} while the computer played ${handFromProgram}. <br><br> ${myOutputValue}`;
  }
  if (gameMode == "computer vs computer") {
    input = handFromProgram2;
    var result = winningHand(handFromProgram, handFromProgram2);
  }
  console.log(userWonCount);
  console.log(comWonCount);

  var winPercent = (
    (userWonCount * 100) /
    (userWonCount + comWonCount)
  ).toFixed(2);

  //if the first round is a draw, since divide by 0 is NaN
  if (userWonCount == 0 && comWonCount == 0) {
    winPercent = 0;
  }
  myOutputValue = `Hi ${userName}! You played ${input} while the computer played ${handFromProgram}. <br><br> ${result} <br><br> ${userName}'s winning percentage is ${winPercent}%. <br><br> Let's play again!!!`;
  return myOutputValue;
};

//to process the game mode
var gameModeProcess = function (userInput) {
  if (userInput == 1) {
    return `normal play`;
  }
  if (userInput == 2) {
    return `reversed play`;
  }
  if (userInput == 3) {
    return `korean SPS`;
  }
  if (userInput == 4) {
    return `computer vs computer`;
  }
};

//to validate the user input for the game mode
var modeValidation = function (userInput) {
  if (
    !(
      userInput == "1" ||
      userInput == "2" ||
      userInput == "3" ||
      userInput == "4"
    )
  ) {
    return true;
  }
};

//to validate user input
var inputValidation = function (userGuess) {
  if (
    !(userGuess == "scissors" || userGuess == "stone" || userGuess == "paper")
  ) {
    return true;
  }
};

//to evaluate the winner for normal play
var winningHand = function (userInput, programPlay) {
  if (userInput == programPlay) {
    return "It is a draw!";
  }
  if (
    (userInput == "scissors" && programPlay == "paper") ||
    (userInput == "paper" && programPlay == "stone") ||
    (userInput == "stone" && programPlay == "scissors")
  ) {
    userWonCount++;
    return "Congrats, you win!";
  }
  if (
    (userInput == "stone" && programPlay == "paper") ||
    (userInput == "scissors" && programPlay == "stone") ||
    (userInput == "paper" && programPlay == "scissors")
  ) {
    comWonCount++;
    return "Oh no, you lost!";
  }
};

//to evaluate the winner for reversed play
var reversedGameWinningHand = function (userInput, programPlay) {
  if (
    (userInput == "scissors" && programPlay == "scissors") ||
    (userInput == "paper" && programPlay == "paper") ||
    (userInput == "stone" && programPlay == "stone")
  ) {
    return "It is a draw!";
  }
  if (
    (userInput == "scissors" && programPlay == "stone") ||
    (userInput == "paper" && programPlay == "scissors") ||
    (userInput == "stone" && programPlay == "paper")
  ) {
    userWonCount++;
    return "You are playing the reversed game. <br><br> Congrats, you win!";
  }
  if (
    (userInput == "stone" && programPlay == "scissors") ||
    (userInput == "scissors" && programPlay == "paper") ||
    (userInput == "paper" && programPlay == "stone")
  ) {
    comWonCount++;
    return "You are playing the reversed game. <br><br> Oh no, you lost!";
  }
};

//to evaluate the winner Korean SPS
var evaluateKoreanSPS = function (userInput, programPlay) {
  var resultOutput = "";
  if (koreanSpsState == "first round") {
    var firstRoundResult = winningHand(userInput, programPlay);
    resultOutput = evaluate1stRound(firstRoundResult);
    return resultOutput;
  }

  if (koreanSpsState == "after first round") {
    var roundResult = winningHand(userInput, programPlay);
    resultOutput = evaluateRoundWinner(roundResult);
    if (roundResult == "It is a draw!") {
      return `${resultOutput} The game has ended. ${roundWinner} have won the game.`;
    }
    return resultOutput;
  }
};

//to evaluate first round of Korean SPS
var evaluate1stRound = function (firstRoundResult) {
  if (firstRoundResult == "It is a draw!") {
    return `Your first round was a draw! Restarting first round...`;
  }
  if (firstRoundResult == "Congrats, you win!") {
    koreanSpsState = "after first round";
    roundWinner = userName;
    return `You won the first round! You will call out for the next round.`;
  }
  if (firstRoundResult == "Oh no, you lost!") {
    koreanSpsState = "after first round";
    roundWinner = "Computer";
    return `Computer won the first round ): The computer will call out for the next round.`;
  }
};

//to evaluate the winner of subsequent rounds
var evaluateRoundWinner = function (roundResult) {
  if (roundResult == "It is a draw!") {
    return `Both played the same!`;
  }
  if (roundResult == "Congrats, you win!") {
    roundWinner = userName;
    return `You won this round! You will call out for the next round.`;
  }
  if (roundResult == "Oh no, you lost!") {
    roundWinner = "computer";
    return `Computer won this round ): The computer will call out for the next round.`;
  }
};

//to match the random number to the scissors, paper and stone
var playByProgram = function (randomNum) {
  if (randomNum == 1) {
    return "scissors";
  }
  if (randomNum == 2) {
    return "paper";
  }
  if (randomNum == 3) {
    return "stone";
  }
};

//to randomly generate a number from 1 to 3
var randomNumGenerator = function () {
  //Math.random generate a decimal from 0 to 1
  var randomDecimal = Math.random() * 3;
  //Math.floor round the number down to an integer
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
