// Basic Scissors Paper Stone
// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
// Input Validation
// Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

//Attaching the word 'scissors', 'paper' and 'stone' to a variable to define them.
var Scissors = "scissors";
var Stone = "stone";
var Paper = "paper";

//The main function is where the system calculates whether the user has won or lose the game.
var main = function (input) {
  var ProgramsObj = randObjforProgram();

  if (input == ProgramsObj) {
    return `Draw! Computer picked ${ProgramsObj} while you choose ${input}. Type in 'scissors', 'paper' or 'stone' to play again!`;
  }
  if (
    (input == "scissors" && ProgramsObj == Stone) ||
    (input == "paper" && ProgramsObj == Scissors) ||
    (input == "stone" && ProgramsObj == Paper)
  ) {
    return `Computer won! Computer choose ${ProgramsObj} while you picked ${input}. Type in 'scissors', 'paper' or 'stone' to try again!`;
  }
  if (
    (input == "scissors" && ProgramsObj == Paper) ||
    (input == "paper" && ProgramsObj == Stone) ||
    (input == "stone" && ProgramsObj == Scissors)
  ) {
    return `YOU WIN!!! Computer picked ${ProgramsObj} while you took ${input}. Type in 'scissors', 'paper' or 'stone' to play again!`;
  }
  if (input != "scissors" || input != "stone" || input != "paper") {
    return `Only type in 'scissors', 'paper' or 'stone' to play.`;
  }
};

//   var myOutputValue = test01;
// return `You ${myOutputValue}!`;

//Generate scissors, paper, stone by random number.
var randObjforProgram = function () {
  var generateObj = Math.floor(Math.random() * 3);

  console.log("numstoObj");
  console.log(generateObj);
  if (generateObj == 2) {
    return Scissors;
  }
  if (generateObj == 1) {
    return Stone;
  }
  if (generateObj == 0) {
    return Paper;
  }
};
