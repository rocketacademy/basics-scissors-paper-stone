//Create a game of scissors, paper, and stone.
// rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// Design system to generate numbers which will be assigned to scissors, paper and stone
var systemGenerator = function (input) {
  // Assigning options to number 1 to 3
  var optionArrary = ["scissors", "paper", "stone"];
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var systemChoice = optionArrary[randomInteger];
  console.log("The system chose " + systemChoice);

  // creating a default response for losing
  var myOutputValue = `The computer chose ${systemChoice}. You chose ${input}. Boohoo! You lose! Now you can type "scissors" "paper" or "stone" to play another round!`;
  console.log("losing response");

  //create a response for draw where input and system generated results are the same
  if (input == systemChoice) {
    console.log("draw response");
    myOutputValue = `The computer chose ${systemChoice}. You chose ${input}. Draw! Bummer. Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  // Create a sequence to win when scissors beat paper and paper beat stone and stone beat scissors
  if (
    (input == `scissors` && systemChoice == `paper`) ||
    (input == `paper` && systemChoice == `stone`) ||
    (input == `stone` && systemChoice == `scissors`)
  ) {
    console.log("winning response");
    // create a response for winning
    myOutputValue = `The computer chose ${systemChoice}. You chose ${input}. You win! Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  return myOutputValue;
};

// call out function
var main = function (input) {
  var myOutputValue = systemGenerator(input);
  return myOutputValue;
};
