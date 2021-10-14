var main = function (input) {
  // computer's choice
  var computer = computerChoice();

  // player wins if
  // player chooses scissors, computer chooses paper
  // player chooses paper, computer chooses stone
  // player chooses stone, computer chooses scissors
  // player chooses reversed scissors, computer chooses stone
  // player chooses reversed paper, computer chooses scissors
  // player chooses reversed stone, computer chooses paper

  if (
    (input == "scissors" && computer == "paper") ||
    (input == "paper" && computer == "stone") ||
    (input == "stone" && computer == "scissors") ||
    (input == "reversed stone" && computer == "stone") ||
    (input == "reversed paper" && computer == "scissors") ||
    (input == "reversed stone" && computer == "paper")
  ) {
    var myOutputValue = `The computer chose ${computer}. <br> You chose ${input}. <br> <br> You win! Congrats. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round! `;
  }

  // player loses if
  // player chooses scissors, computer chooses stone
  // player chooses paper, computer chooses scissors
  // player chooses stone, computer chooses paper
  // player chooses reversed scissors, computer chooses paper
  // player chooses reversed paper, computer chooses stone
  // player chooses reversed stone, computer chooses scissors

  if (
    (input == "scissors" && computer == "stone") ||
    (input == "paper" && computer == "scissors") ||
    (input == "stone" && computer == "paper") ||
    (input == "reversed scissors" && computer == "paper") ||
    (input == "reversed paper" && computer == "stone") ||
    (input == "reversed stone" && computer == "scissors")
  ) {
    myOutputValue = `The computer chose ${computer}. <br> You chose ${input}. <br> <br> You lose! Bummer. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  // game draws if both player and computer chooses the same

  if (
    (input == "scissors" && computer == "scissors") ||
    (input == "paper" && computer == "paper") ||
    (input == "stone" && computer == "stone") ||
    (input == "reversed scissors" && computer == "scissors") ||
    (input == "reversed paper" && computer == "paper") ||
    (input == "reversed stone" && computer == "stone")
  ) {
    myOutputValue = `The computer chose ${computer}. <br> You chose ${input}. <br> <br> It is a draw! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  // input validation
  // prompt if input is not scissors, paper or stone

  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reversed scissors" &&
    input != "reversed paper" &&
    input != "reversed stone"
  ) {
    myOutputValue = `"${input}" is not a valid choice. <br> <br> Please choose only "scissors" "paper" or "stone" to play the game.`;
  }
  return myOutputValue;
};

// function: computer random chooses scissors, paper, or stone
var computerChoice = function () {
  const game = ["scissors", "paper", "stone"];

  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  var computerhand = game[randomInteger];
  return computerhand;
};
