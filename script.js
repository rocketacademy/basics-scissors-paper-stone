var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  var stone = 1;
  var scissors = 2;
  var paper = 3;
  var myOutputValue = "test";

  if (input != "stone" || input != "scissors" || input != "paper") {
    myOutputValue =
      "Try again, <br> available input are: scissors , paper or stone";
  }

  if (input == "stone" && randomDiceNumber == 1) {
    myOutputValue =
      "The computer also chose stone <br> it's a draw <br> Now you can type scissors paper or stone to play another round!";
  }
  if (input == "scissors" && randomDiceNumber == 2) {
    myOutputValue =
      "The computer also chose scissors <br> it's a draw <br> Now you can type scissors paper or stone to play another round!";
  }
  if (input == "paper" && randomDiceNumber == 3) {
    myOutputValue =
      "The computer also chose paper <br> it's a draw <br> Now you can type scissors paper or stone to play another round!";
  }

  // comparing input and random.
  if (input == "stone" && randomDiceNumber == scissors) {
    myOutputValue =
      "The computer chose scissors <br> you win <br> Now you can type scissors paper or stone to play another round!";
  }

  if (input == "stone" && randomDiceNumber == paper) {
    myOutputValue =
      "The computer chose paper <br>you lose <br> Now you can type scissors paper or stone to play another round!";
  }

  if (input == "paper" && randomDiceNumber == stone) {
    myOutputValue =
      "The computer chose stone <br> you win <br> Now you can type scissors paper or stone to play another round!";
  }

  if (input == "paper" && randomDiceNumber == scissors) {
    myOutputValue =
      "The computer chose scissors <br>you lose <br> Now you can type scissors paper or stone to play another round!";
  }

  if (input == "scissors" && randomDiceNumber == paper) {
    myOutputValue =
      "The computer chose paper <br>you win <br> Now you can type scissors paper or stone to play another round!";
  }

  if (input == "scissors" && randomDiceNumber == stone) {
    myOutputValue =
      "The computer chose stone <br>you lose <br> Now you can type scissors paper or stone to play another round!";
  }
  // Return output.
  return myOutputValue;
};

//   stone = 1;
// scissors = 2;
// paper = 3;
/*var draw_calc = function (input, input2) {
  if (input == "stone" && randomDiceNumber == 1) {
    return true;
  }
  if (input == "scissors" && randomDiceNumber == 2) {
    return true;
  }
  if (input == "paper" && randomDiceNumber == 3) {
    return true;
  }
};*/

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
