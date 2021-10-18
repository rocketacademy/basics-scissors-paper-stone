var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSEDSCISSORS = "reversed scissors";
var REVERSEDPAPER = "reversed paper";
var REVERSEDSTONE = "reversed stone";

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

var main = function (input) {
  var computer = computerChoice();
  var player = input;
  console.log("Computer Choice", computer);
  console.log("User Choice", input);
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
    myOutputValue = `You have played ${input} and you have won the computer's choice ${computer}! <br> good job! <br> Now you can type "scissors, paper or stone to start new game <br>`;
  }

  //check for draw
  if (player == computer) {
    myOutputValue = `You have played ${input} and its the same as the computer's choice ${computer}! <br> Its a draw!!`;
  }

  return myOutputValue;
};
