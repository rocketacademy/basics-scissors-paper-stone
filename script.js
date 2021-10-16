//user inputs either scissors, paper or stone
// program generates a random number from 1 to 3.
// if the number is 1, it means scissors. if the number is 2, paper. if the number is 3, stone.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

var rollDice = function () {
  // Generate a decimal from 0 through 2, inclusive of 0 and exclusive of 2.
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  computerChoice = 0;
  //convert to scissors/paper/stone
  if (diceNumber == 1) {
    computerChoice = "scissors";
  }
  if (diceNumber == 2) {
    computerChoice = "paper";
  }
  if (diceNumber == 3) {
    computerChoice = "stone";
  }
  return computerChoice;
};

//store a global value for the roll without calling the function again.
var storeRollDice = rollDice();

//CONDITIONS FOR WINNING/LOSING/ETC
var checkWinOrLose = function (input, storeRollDice) {
  //no valid input
  if (input != "scissors" && input != "paper" && input != "stone") {
    var winOrLoseStatement =
      "Please enter either 'scissors' or 'paper' or 'stone'.";
  }
  //win conditions
  else if (
    (input == "scissors" && storeRollDice == "paper") ||
    (input == "paper" && storeRollDice == "stone") ||
    (input == "stone" && storeRollDice == "scissors")
  ) {
    var winOrLoseStatement = "You win! Noiiice.";
  }
  //lose conditions
  else if (
    (input == "scissors" && storeRollDice == "stone") ||
    (input == "paper" && storeRollDice == "scissors") ||
    (input == "stone" && storeRollDice == "paper")
  ) {
    var winOrLoseStatement = "You lose! GG EZ.";
  }
  //draw conditions
  else if (input == storeRollDice) {
    var winOrLoseStatement = "It's a DRAW.";
  }
  return winOrLoseStatement;
};

var main = function (input) {
  //DISPLAY STATEMENT:
  //The computer chose ${computerChoice}. You chose ${yourChoice}. You {winOrLose}.
  var statement =
    "The computer chose " +
    storeRollDice +
    "<br>" +
    "<br>" +
    "You chose " +
    input +
    "<br>" +
    "<br>" +
    checkWinOrLose(input, storeRollDice);
  var myOutputValue = statement;
  return myOutputValue;
};
