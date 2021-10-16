var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var reversedScissors = "reversed scissors";
var reversedPaper = "reversed paper";
var reversedStone = "reversed stone";

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randNumber = randomInteger;
  console.log(randNumber);
  return randNumber;
};

var computerChoice = function () {
  var number = randomNumber();
  var choice = scissors;

  if (number == 0) {
    choice = stone;
  }

  if (number == 1) {
    choice = paper;
  }
  return choice;
};

var main = function (input) {
  var computer = computerChoice();
  var player = input;
  console.log("Computer Choice");
  console.log(computer);
  console.log("User Choice");
  console.log(input);
  var myOutputValue = `You have played ${input} and you have lost to the computer's choice ${computer}! <br> you lose! <br> Please type scissors, paper or stone to start a new game `;

  //check for invalid inputs
  if (
    player != scissors &&
    player != stone &&
    player != paper &&
    player != reversedScissors &&
    player != reversedStone &&
    player != reversedPaper
  ) {
    myOutputValue =
      "you have entered a incorrect input <br> Please enter either scissors, paper or stone <br>";
  }

  //check for win
  if (
    (player == scissors && computer == paper) ||
    (player == stone && computer == scissors) ||
    (player == paper && computer == stone) ||
    (player == reversedPaper && computer == scissors) ||
    (player == reversedStone && computer == paper) ||
    (player == reversedScissors && computer == stone)
  ) {
    myOutputValue = `You have played ${input} and you have won the computer's choice ${computer}! <br> good job! <br> Now you can type "scissors, paper or stone to start new game <br>`;
  }

  //check for draw
  if (player == computer) {
    myOutputValue = `You have played ${input} and its the same as the computer's choice ${computer}! <br> Its a draw!!`;
  }

  return myOutputValue;
};
