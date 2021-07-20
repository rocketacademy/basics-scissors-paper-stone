var user_lose = 0;
var user_win = 0;
var user_draw = 0;
var current_mode = "waiting";
var user_name = "";
var myOutputValue = "";

var main = function (input) {
  if (current_mode == "waiting") {
    user_name = input;
    current_mode = "gametime";
    return (myOutputValue =
      " hi " + user_name + "<br>" + "it's " + current_mode);
  } else if (current_mode == "gametime") {
    // Generate a random dice number
    var randomDiceNumber = rollDice();

    var stone = 1;
    var scissors = 2;
    var paper = 3;
    if (input != "stone" || input != "scissors" || input != "paper") {
      myOutputValue =
        "Try again, <br> available input are: scissors , paper or stone";
    }

    if (input == "stone" && randomDiceNumber == 1) {
      user_draw = user_draw + 1;
      myOutputValue =
        "The computer also chose stone <br> it's a draw <br> Now you can type scissors paper or stone to play another round!" +
        "<br>" +
        " so far you draw " +
        user_draw +
        " times";
    }
    if (input == "scissors" && randomDiceNumber == 2) {
      user_draw = user_draw + 1;
      myOutputValue =
        "The computer also chose scissors <br> it's a draw <br> Now you can type scissors paper or stone to play another round!" +
        "<br>" +
        " so far you draw " +
        user_draw +
        " times";
    }
    if (input == "paper" && randomDiceNumber == 3) {
      user_draw = user_draw + 1;
      myOutputValue =
        "The computer also chose paper <br> it's a draw <br> Now you can type scissors paper or stone to play another round!" +
        "<br>" +
        " so far you draw " +
        user_draw +
        " times";
    }

    // comparing input and random.
    if (input == "stone" && randomDiceNumber == scissors) {
      user_win = user_win + 1;
      myOutputValue =
        "The computer chose scissors <br> you win <br> Now you can type scissors paper or stone to play another round!" +
        "<br>" +
        " so far " +
        user_name +
        " " +
        user_win +
        " Computer " +
        user_lose;
    }

    if (input == "stone" && randomDiceNumber == paper) {
      user_lose = user_lose + 1;
      yOutputValue =
        "The computer chose paper <br>you lose <br> Now you can type scissors paper or stone to play another round!" +
        "<br>" +
        " so far " +
        user_name +
        " " +
        user_win +
        " Computer " +
        user_lose;
    }

    if (input == "paper" && randomDiceNumber == stone) {
      user_win = user_win + 1;
      myOutputValue =
        "The computer chose stone <br> you win <br> Now you can type scissors paper or stone to play another round!" +
        "<br>" +
        " so far " +
        user_name +
        " " +
        user_win +
        " Computer " +
        user_lose;
    }

    if (input == "paper" && randomDiceNumber == scissors) {
      user_lose = user_lose + 1;
      myOutputValue =
        "The computer chose scissors <br>you lose <br> Now you can type scissors paper or stone to play another round!" +
        "<br>" +
        " so far " +
        user_name +
        " " +
        user_win +
        " Computer " +
        user_lose;
    }

    if (input == "scissors" && randomDiceNumber == paper) {
      user_win = user_win + 1;
      myOutputValue =
        "The computer chose paper <br>you win <br> Now you can type scissors paper or stone to play another round!" +
        "<br>" +
        " so far " +
        user_name +
        " " +
        user_win +
        " Computer " +
        user_lose;
    }

    if (input == "scissors" && randomDiceNumber == stone) {
      user_lose = user_lose + 1;
      myOutputValue =
        "The computer chose stone <br>you lose <br> Now you can type scissors paper or stone to play another round!" +
        "<br>" +
        " so far " +
        user_name +
        " " +
        user_win +
        " Computer " +
        user_lose;
    }
    // Return output.
    //
    return myOutputValue;
  }
};

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
