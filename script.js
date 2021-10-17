var main = function (input) {
  var myOutputValue = "";
  var computerChoice = randomComputerChoiceGenerator();
  var userChoice = input;
  console.log("Computer choice :" + computerChoice);
  myOutputValue =
    "The computer chose " +
    computerChoice +
    ".<br>" +
    " You chose " +
    userChoice +
    ".<br>";
  console.log("User Choice :" + userChoice);

  if (
    userChoice == "scissors" ||
    userChoice == "paper" ||
    userChoice == "stone"
  ) {
    // user choice is same as computer choice. It is a draw
    if (userChoice == computerChoice) {
      myOutputValue = myOutputValue + " Its a Draw!!";
    }

    if (
      (userChoice == "scissors" && computerChoice == "stone") ||
      (userChoice == "paper" && computerChoice == "scissors") ||
      (userChoice == "stone" && computerChoice == "paper")
    ) {
      myOutputValue =
        myOutputValue +
        "You lose! Bummer." +
        "<br>" +
        "Now you can type 'scissors' 'paper' or 'stone' to play another round!";
    }

    // cases where user wins
    if (
      (userChoice == "scissors" && computerChoice == "paper") ||
      (userChoice == "paper" && computerChoice == "stone") ||
      (userChoice == "stone" && computerChoice == "scissors")
    ) {
      myOutputValue = myOutputValue + "Wow!! You Win Congrats !!";
    }
  } else {
    myOutputValue =
      "Try again!! please enter a valid choice. Enter either 'scissors', 'paper' or 'stone'.";
  }

  return myOutputValue;
}; // end of main

//function which generates a random computer choice
var randomComputerChoiceGenerator = function () {
  var computerChoice = "";
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    computerChoice = "scissors";
  }

  if (randomNumber == 2) {
    computerChoice = "paper";
  }
  if (randomNumber == 3) {
    computerChoice = "stone";
  }

  return computerChoice;
};
