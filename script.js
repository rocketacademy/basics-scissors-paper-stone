// Create a basic version of Scissors Paper Stone where
// the user inputs one of "scissors", "paper", or "stone",
// the program internally randomly chooses scissors, paper, or stone,
// and the program outputs whether the user won, the program won, or it's a draw.

// SPS function randomises the computer choice
function SPS() {
  var randomiser = Math.floor(Math.random() * 3); // using randomiser to pick a number
  var computer;
  if (randomiser == 0) {
    computer = "scissors";
  } else if (randomiser == 1) {
    computer = "paper";
  } else if (randomiser == 2) {
    computer = "stone";
  }
  return computer; // returning the results of the randomised choice
}

var main = function (input) {
  var myOutputValue = "Enter scissors, paper or stone to play.";
  var comPlay = SPS(); // run function ONCE per submit clicked
  var reverseCom = "reversed " + comPlay; // to check against reverse playing
  console.log("computer:", comPlay);
  // if player chose the same as com
  if (input == comPlay || input == reverseCom) {
    myOutputValue = `You played ${input}. <br> Computer played ${comPlay}. <br><br>It's a draw!`;
  } else if (
    // else if player wins computer
    (input == "scissors" && comPlay == "paper") ||
    (input == "paper" && comPlay == "stone") ||
    (input == "stone" && comPlay == "scissors") ||
    // conditions for reversed playing
    (input == "reversed scissors" && comPlay == "stone") ||
    (input == "reversed paper" && comPlay == "scissors") ||
    (input == "reversed stone" && comPlay == "paper")
  ) {
    myOutputValue = `You played ${input}. <br> Computer played ${comPlay}. <br><br>You win!`;
  } else if (
    // else if player loses
    (input == "scissors" && comPlay == "stone") ||
    (input == "paper" && comPlay == "scissors") ||
    (input == "stone" && comPlay == "paper") ||
    // conditions for reversed playing
    (input == "reversed scissors" && comPlay == "paper") ||
    (input == "reversed paper" && comPlay == "stone") ||
    (input == "reversed stone" && comPlay == "scissors")
  ) {
    myOutputValue = `You played ${input}. <br> Computer played ${comPlay}. <br><br>You lose! Try again?`;
  }
  return myOutputValue;
};
