var userWinCount = 0;
var programWinCount = 0;
var drawCount = 0;
var userName = "";

var main = function (input) {
  // on first run, anything that user writes shall be the username and it will be stored permanently

  // first run: true          true
  // second run: false        true
  if (userName.length == 0 && input != null) {
    userName = input;
    var myOutputValue = `Hi there ${input}, let's start the first round. Please input 'scissors', 'paper' or 'stone'.`;
    return myOutputValue;
  }

  // input validation check
  if (
    !(input == "scissors" || input == "paper" || input == "stone") &&
    userName.length !== 0
  ) {
    var myOutputValue = `sorry, there are only 3 input options. Please try again with 'scissors', 'paper' or 'stone'.`;
    return myOutputValue;
  }
  console.log(`user chooses `);
  console.log(input);

  var randomNumber1 = rollDice();
  if (randomNumber1 == 1) {
    randomNumber1 = "scissors";
  }

  if (randomNumber1 == 2) {
    randomNumber1 = "paper";
  }

  if (randomNumber1 == 3) {
    randomNumber1 = "stone";
  }
  console.log(`program chooses `);
  console.log(randomNumber1);

  // scenarios where user wins
  // use case: if user's input equals scissors, but program 'chooses' paper,
  // use case: if user's input equals paper, but program 'chooses' stone,
  // use case: if user's input equals stone, but program 'chooses' scissors,
  if (
    (input == "scissors" && randomNumber1 == "paper") ||
    (input == "paper" && randomNumber1 == "stone") ||
    (input == "stone" && randomNumber1 == "scissors")
  ) {
    userWinCount = userWinCount + 1;
    myOutputValue = `You're doing great, ${userName}.<br>You won ${userWinCount} time`;
  }

  //scenarios where it's a draw
  // use case: if user's input equals to program's input -> draw
  else if (randomNumber1 == input) {
    drawCount = drawCount + 1;
    myOutputValue = `it's a draw, ${userName}.<br> Total number of draw is ${drawCount} time`;
  }
  // scenarios where program wins
  // use case: if program's input equals scissors, but user 'chooses' paper,
  // use case: if program's input equals paper, but user 'chooses' stone,
  // use case: if program's input equals stone, but user 'chooses' scissors,
  else if (
    (randomNumber1 == "scissors" && input == "paper") ||
    (randomNumber1 == "paper" && input == "stone") ||
    (randomNumber1 == "stone" && input == "scissors")
  ) {
    programWinCount = programWinCount + 1;
    myOutputValue = `the program won.<br>You lose ${programWinCount} time, ${userName}.`;
  }

  // Return output
  return myOutputValue;
};
// function to generate 3 random numbers
var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;

  return randomNumber;
};
