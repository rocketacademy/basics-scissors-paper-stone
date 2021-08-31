var main = function (input) {
  var randomChoice = compChoice();
  if (input != "rock" && input != "paper" && input != "scissors") {
    return "Invalid choice, please select either one of these options: Rock, Paper or Scissors";
  }
  if (input == randomChoice) {
    console.log(randomChoice);
    return `It's a draw, you both selected ${input}.<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (
    (input == "rock" && randomChoice == "scissors") ||
    (input == "paper" && randomChoice == "rock") ||
    (input == "scissors" && randomChoice == "paper")
  ) {
    console.log(randomChoice);
    return `The computer chose ${randomChoice}. <br> You chose ${input}. <br><br> You win!`;
  }
  if (
    (input == "rock" && randomChoice == "paper") ||
    (input == "paper" && randomChoice == "scissors") ||
    (input == "scissors" && randomChoice == "rock")
  ) {
    console.log(randomChoice);
    return `The computer chose ${randomChoice}. <br> You chose ${input}. <br><br> You lose! Bummer. <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
};
var compChoice = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal) + 1;
  if (randomNumber == 1) {
    return "rock";
  }
  if (randomNumber == 2) {
    return "paper";
  }
  if (randomNumber == 3) {
    return "scissors";
  }
};
