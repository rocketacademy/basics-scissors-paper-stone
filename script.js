var main = function (input) {
  // Creating a variable for a user input of scissors, paper or stone
  var userChoice = input;

  // Creating a computer random choice through a system similar to rolling dice
  var computerSelectNum = Math.floor(Math.random() * 3) + 1;

  // Assigning the random number of 1 to 3 with scissors, paper and stone respectively
  var computerChoice = "default";
  if (computerSelectNum == 1) {
    computerChoice = "scissors";
  } else if (computerSelectNum == 2) {
    computerChoice = "paper";
  } else if (computerSelectNum == 3) {
    computerChoice = "stone";
  }

  // Writing a function that would produce who wins or loses through the game rules
  var SPS = function (userChoice) {
    // If user's choice and computer's choice are the same, the game is drawn.
    if (userChoice == computerChoice) {
      var gameResult = `Draw! You and computer both choose the same; ${userChoice} and ${computerChoice}.`;

      // If user chose scissors and computer chose paper, user wins.
    } else if (userChoice == "scissors" && computerChoice == "paper") {
      var gameResult = `You win! Computer loses! You chose ${userChoice} and computer chose ${computerChoice}.`;

      // If user chose scissors and computer chose stone, computer wins.
    } else if (userChoice == "scissors" && computerChoice == "stone") {
      var gameResult = `You lose! Computer wins! You chose ${userChoice} and computer chose ${computerChoice}.`;

      // If user chose paper and computer chose scissors, computer wins.
    } else if (userChoice == "paper" && computerChoice == "scissors") {
      var gameResult = `You lose! Computer wins! You chose ${userChoice} and computer chose ${computerChoice}.`;

      // If user chose papaer and computer chose stone, user wins.
    } else if (userChoice == "paper" && computerChoice == "stone") {
      var gameResult = `You win! Computer loses! You chose ${userChoice} and computer chose ${computerChoice}.`;

      // If user chose stone and computer chose paper, computer wins.
    } else if (userChoice == "stone" && computerChoice == "paper") {
      var gameResult = `You lose! Computer wins! You chose ${userChoice} and computer chose ${computerChoice}.`;

      // If user chose stone and computer chose scissors, user wins.
    } else if (userChoice == "stone" && computerChoice == "scissors") {
      var gameResult = `You win! Computer loses! You chose ${userChoice} and computer chose ${computerChoice}.`;
    }
    return gameResult;
  };

  // Outputing the result
  var myOutputValue = SPS(userChoice);
  return myOutputValue;
};
