var userWonCount = 0;
var comWonCount = 0;
var userName = "";
var startOfRound = true;

var main = function (input) {
  //for start of round, register user name
  if (startOfRound) {
    startOfRound = false;
    userName = input;
    return `Welcome ${userName}!`;
  }

  //process if the input is valid
  if (inputValidation(input)) {
    return `You entered ${input} which is not a valid input. Only the following are accepted: scissors, paper, stone, reversed scissors, reversed paper or reversed stone. ${userName}, please try again.`;
  }

  var randNumber = randomNumGenerator();
  console.log(randNumber);
  var handFromProgram = playByProgram(randNumber);
  var result = winningHand(input, handFromProgram);

  //process if user wants to play reversed
  if (
    input == "reversed scissors" ||
    input == "reversed paper" ||
    input == "reversed stone"
  ) {
    var result = reversedGameWinningHand(input, handFromProgram);
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
  var myOutputValue = `Hi ${userName}! You played ${input} while the computer played ${handFromProgram}. <br><br> ${result} <br><br> ${userName}'s winning percentage is ${winPercent}%. <br><br> Let's play again!!!`;
  return myOutputValue;
};

//to validate user input
var inputValidation = function (userGuess) {
  if (
    !(
      userGuess == "scissors" ||
      userGuess == "stone" ||
      userGuess == "paper" ||
      userGuess == "reversed scissors" ||
      userGuess == "reversed stone" ||
      userGuess == "reversed paper"
    )
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
    (userInput == "reversed scissors" && programPlay == "scissors") ||
    (userInput == "reversed paper" && programPlay == "paper") ||
    (userInput == "reversed stone" && programPlay == "stone")
  ) {
    return "It is a draw!";
  }
  if (
    (userInput == "reversed scissors" && programPlay == "stone") ||
    (userInput == "reversed paper" && programPlay == "scissors") ||
    (userInput == "reversed stone" && programPlay == "paper")
  ) {
    userWonCount++;
    return "You are playing the reversed game. <br><br> Congrats, you win!";
  }
  if (
    (userInput == "reversed stone" && programPlay == "scissors") ||
    (userInput == "reversed scissors" && programPlay == "paper") ||
    (userInput == "reversed paper" && programPlay == "stone")
  ) {
    comWonCount++;
    return "You are playing the reversed game. <br><br> Oh no, you lost!";
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
