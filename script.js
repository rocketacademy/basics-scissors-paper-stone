// Adding state to the user & computer's game score
var userWin = 0;
var computerWin = 0;
var userName = "";

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
  var gamePlay = function (userChoice) {
    // If user's choice and computer's choice are the same, the game is drawn. Therefore adding no value to the user's and the computer's game score.
    if (userChoice == computerChoice) {
      var gameResult = `Draw! You and computer both choose the same; ${userChoice} and ${computerChoice}. Your score is ${userWin} and the computer score is ${computerWin}.`;

      // If user chose scissors and computer chose paper, user wins. Therefore adding +1 to the user's game score.
    } else if (userChoice == "scissors" && computerChoice == "paper") {
      userWin = userWin + 1;
      var gameResult = `You win! Computer loses! You chose ${userChoice} and computer chose ${computerChoice}. Your score is ${userWin} and the computer score is ${computerWin}.`;

      // If user chose scissors and computer chose stone, computer wins. Therefore, adding +1 to computer's game score.
    } else if (userChoice == "scissors" && computerChoice == "stone") {
      computerWin = computerWin + 1;
      var gameResult = `You lose! Computer wins! You chose ${userChoice} and computer chose ${computerChoice}. Your score is ${userWin} and the computer score is ${computerWin}.`;

      // If user chose paper and computer chose scissors, computer wins. Therefore, adding +1 to computer's game score.
    } else if (userChoice == "paper" && computerChoice == "scissors") {
      computerWin = computerWin + 1;
      var gameResult = `You lose! Computer wins! You chose ${userChoice} and computer chose ${computerChoice}. Your score is ${userWin} and the computer score is ${computerWin}.`;

      // If user chose papaer and computer chose stone, user wins. Therefore, adding +1 to the user's game score.
    } else if (userChoice == "paper" && computerChoice == "stone") {
      userWin = userWin + 1;
      var gameResult = `You win! Computer loses! You chose ${userChoice} and computer chose ${computerChoice}. Your score is ${userWin} and the computer score is ${computerWin}.`;

      // If user chose stone and computer chose paper, computer wins. Therefore, adding +1 to the computer's game score.
    } else if (userChoice == "stone" && computerChoice == "paper") {
      computerWin = computerWin + 1;
      var gameResult = `You lose! Computer wins! You chose ${userChoice} and computer chose ${computerChoice}. Your score is ${userWin} and the computer score is ${computerWin}.`;

      // If user chose stone and computer chose scissors, user wins. Therefore, adding +1 to the user's game score.
    } else if (userChoice == "stone" && computerChoice == "scissors") {
      userWin = userWin + 1;
      var gameResult = `You win! Computer loses! You chose ${userChoice} and computer chose ${computerChoice}. Your score is ${userWin} and the computer score is ${computerWin}.`;
    }
    return gameResult;
  };

  // Outputing the result including the game scores
  var myOutputValue = gamePlay(userChoice);
  return myOutputValue;
};
