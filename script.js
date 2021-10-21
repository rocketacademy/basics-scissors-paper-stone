var main = function (input) {
  var computerNumber = randomNumber();
  var computerChoice = "";
  console.log("compter number is supposed to be " + computerNumber);
  var lowercase = input.toLowerCase();
  console.log("Uppercase and Lowercase does not matter");

  if (computerNumber == 1) {
    computerChoice = "scissors";
  }

  if (computerNumber == 2) {
    computerChoice = "paper";
  }

  if (computerNumber == 3) {
    computerChoice = "stone";
  }

  var myOutputValue =
    "The computer chose " +
    computerChoice +
    ". <br> You chose " +
    lowercase +
    "<br><br> You lose! Bummer." +
    "<br><br> Hey, dont stop here keep going! Try again.";
  console.log("game results ");

  // Add input validation to check if what the user types is a valid choice, and if not, kindly let the user know that there are only 3 input options, and ask them to try again.
  if (input != "scissors" && input != "paper" && input != "stone") {
    myOutputValue =
      "Invalid Input!" +
      "<br><br> There are only 3 options Scissors, Paper, or Stone." +
      "<br><br> Please try again";
    console.log("If the player does not enter valid input");
  }

  return myOutputValue;
};
// // What is the input going to be?
// What should the output be?
// How will the computer's option be randomly generated?
// How many different cases are there?

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInterger = Math.floor(randomDecimal);
  var computerNumber = randomInterger + 1;
  console.log("Supposed to be random computer number " + computerNumber);
  return computerNumber;
};
