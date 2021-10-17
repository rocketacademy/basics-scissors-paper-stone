//A basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

//The random function to determine the choice for the program
var randomProgram = function () {
  var choice = ["scissors", "paper", "stone"];
  return choice[Math.floor(Math.random() * choice.length)];
};

//Find the icone for each choice
var addIcone = function (object) {
  if (object == "scissors" || object == "reverse scissors") return `✂️`;
  if (object == "paper" || object == "reverse paper") return `🗒`;
  if (object == "stone" || object == "reverse stone") return `🪨`;
};

var main = function (input) {
  programChoice = randomProgram();
  icone = addIcone(input);

  // Check if the input is one of the three words
  if (
    input == "scissors" ||
    input == "paper" ||
    input == "stone" ||
    input == " reverse scissors" ||
    input == "reverse paper" ||
    input == "reverse stone"
  ) {
    // Check if we do not have the same result between player and program
    if (input == programChoice) {
      return "It's a draw";
    }

    // The rules of Scissors Paper Stone game and reverse Scissors Paper Stone game
    if (
      (input == "scissors" && programChoice == "paper") ||
      (input == "paper" && programChoice == "stone") ||
      (input == "stone" && programChoice == "scissors") ||
      (input == "reverse paper" && programChoice == "scissors") ||
      (input == "reverse stone" && programChoice == "paper") ||
      (input == "reverse scissors" && programChoice == "stone")
    ) {
      return `You win with ${icone}`;
    } else {
      return `The computer chose ${programChoice} ${icone}.<br>You chose ${input} ${icone}.<br><br>You lose! Bummer.<br><br>Now you can type "scissors" "paper" or "stone" to play another round !`;
    }
  } else {
    return `There are only 3 input options, ${input} is incorrect, please choice among scissors, paper, stone, reverse scissors, reverse paper or reverse stone`;
  }
};
