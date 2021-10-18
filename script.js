var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSEDSCISSORS = "reversed scissors";
var REVERSEDPAPER = "reversed paper";
var REVERSEDSTONE = "reversed stone";
var WIN = "win";
var LOST = "lost";
var DRAW = "draw";

//Gloval variable for counting
var playerWinCount = 0;
var comWinCount = 0;
var drawCount = 0;
var rounds = 0;
var winLose = "";

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randNumber = randomInteger;
  console.log(randNumber);
  return randNumber;
};

var computerChoice = function () {
  var number = randomNumber();
  var choice = SCISSORS;

  if (number == 0) {
    choice = STONE;
  }

  if (number == 1) {
    choice = PAPER;
  }
  return choice;
};

var winRate = function () {
  var percentage = Math.floor((playerWinCount / rounds) * 100);
  return percentage;
};

var countRound = function () {
  if (winLose == LOST) {
    comWinCount += 1;
  }

  if (winLose == WIN) {
    playerWinCount += 1;
  }

  if (winLose == DRAW) {
    drawCount += 1;
  }

  return winLose;
};

var main = function (input) {
  var computer = computerChoice();
  var player = input;
  console.log("Computer Choice", computer);
  console.log("User Choice", input);
  rounds += 1;
  winLose = LOST;
  var myOutputValue = `You have chosen ${input} and you have lost to the computer's choice ${computer}! <br> you lose! <br> Please type scissors, paper or stone to start a new game `;

  //check for invalid inputs
  if (
    player != SCISSORS &&
    player != STONE &&
    player != PAPER &&
    player != REVERSEDSCISSORS &&
    player != REVERSEDSTONE &&
    player != REVERSEDPAPER
  ) {
    myOutputValue =
      "you have entered a incorrect input <br> Please enter either scissors, paper or stone <br>";
  }

  //check for win
  if (
    (player == SCISSORS && computer == PAPER) ||
    (player == STONE && computer == SCISSORS) ||
    (player == PAPER && computer == STONE) ||
    (player == REVERSEDPAPER && computer == SCISSORS) ||
    (player == REVERSEDSTONE && computer == PAPER) ||
    (player == REVERSEDSCISSORS && computer == STONE)
  ) {
    winLose = WIN;
    console.log("Num of player wins", playerWinCount);
    myOutputValue = `You have played ${input} and you have won the computer's choice ${computer}! <br>`;
  }

  //check for draw
  if (player == computer) {
    winLose = DRAW;
    myOutputValue = `You have played ${input} and the computer's choice is ${computer}! <br> Its a draw!!`;
  }

  var adjustCount = countRound();
  var winrate = winRate();

  myOutputValue =
    myOutputValue +
    `<br><br> Statistics <br> Player win count: ${playerWinCount} <br> Computer win count: ${comWinCount} <br> Win rate: ${winrate}% <br> <br> Now you can type "scissors, paper or stone to start new game`;

  return myOutputValue;
};
