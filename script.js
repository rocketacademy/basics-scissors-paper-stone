var main = function (input) {
  var computer = computerRoll();
  //any input other than rock, paper or scissors give this outputValue
  var myOutputValue = "Please input 'stone', 'paper' or 'scissors' to play.";
  if (input == computer) {
    myOutputValue =
      "We have an exact draw! You chose " +
      input +
      " and the computer chose " +
      computer +
      ". Better luck next time!";
  }
  if (
    (input == "scissors" && computer == "paper") ||
    (input == "paper" && computer == "stone") ||
    (input == "stone" && computer == "scissors")
  ) {
    myOutputValue =
      "You won! You picked " +
      input +
      " and the computer picked " +
      computer +
      ". Nice one!";
  }
  if (
    (input == "scissors" && computer == "stone") ||
    (input == "paper" && computer == "scissors") ||
    (input == "stone" && computer == "paper")
  ) {
    myOutputValue =
      "You lost! You picked " +
      input +
      " and the computer picked " +
      computer +
      ". Better luck next time!";
  }
  if (
    (input == "scissors" && computer == "scissors") ||
    (input == "paper" && computer == "paper") ||
    (input == "stone" && computer == "stone")
  ) {
    myOutputValue =
      "It's a draw! You picked " +
      input +
      " and the computer picked " +
      computer +
      ". No winners this time!";
  }

  return myOutputValue;
};

// computer rolls randomly
var computerRoll = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  var randomRoll = randomInteger + 1;
  console.log("Random Number 1-3");
  console.log(randomRoll);
  var computerRoll = "scissors";
  // Paper = 2
  if (randomRoll == 2) {
    computerRoll = "paper";
  }
  // Stone = 3
  if (randomRoll == 3) {
    computerRoll = "stone";
  }
  console.log("Computer's Roll");
  console.log(computerRoll);
  return computerRoll;
};
