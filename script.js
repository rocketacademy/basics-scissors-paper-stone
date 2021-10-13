var scissors = "scissors";
var paper = "paper";
var stone = "stone";

var main = function (input) {
  var player = input;
  var computer = computerChoice();
  console.log("Computer Choice");
  console.log(computer);
  console.log("User Choice");
  console.log(input);
  var myOutputValue = "you lose";

  //check for invalid inputs
  if (player != scissors && player != stone && player != paper) {
    myOutputValue =
      "you have entered a incorrect input <br> Please enter either scissors, paper or stone <br>";
  }

  //check for win
  if (
    (player == scissors && computer == paper) ||
    (player == stone && computer == scissors) ||
    (player == paper && computer == stone)
  ) {
    myOutputValue = `You have played ${input} and you have won the computer's choice ${computer}! <br> good job!`;
  }

  //check for draw
  if (
    (player == scissors && computer == scissors) ||
    (player == stone && computer == stone) ||
    (player == paper && computer == paper)
  ) {
    myOutputValue = `Its a draw!!`;
  }

  return myOutputValue;
};

var computerChoice = function () {
  var number = randomNumber();
  choice = scissors;

  if (randomNumber == 0) {
    choice = stone;
  }

  if (randomNumber == 1) {
    choice = paper;
  }
  return choice;
};

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randNumber = randomInteger;
  console.log(randNumber);
  return randNumber;
};
