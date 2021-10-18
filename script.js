//A basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

var numberUserWon = 0;
var numberComputerWon = 0;
var numberDraws = 0;
var userName = "";
var gameMode = "";

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

// Check if the input is one of the three words
var validInput = function (userWord) {
  if (
    userWord == "scissors" ||
    userWord == "paper" ||
    userWord == "stone" ||
    userWord == " reverse scissors" ||
    userWord == "reverse paper" ||
    userWord == "reverse stone"
  )
    return true;
};

// The rules of Scissors Paper Stone game and reverse Scissors Paper Stone game
var gameRules = function (userWord, computerWord) {
  if (
    (userWord == "scissors" && computerWord == "paper") ||
    (userWord == "paper" && computerWord == "stone") ||
    (userWord == "stone" && computerWord == "scissors") ||
    (userWord == "reverse paper" && computerWord == "scissors") ||
    (userWord == "reverse stone" && computerWord == "paper") ||
    (userWord == "reverse scissors" && computerWord == "stone")
  )
    return true;
};

var main = function (input) {
  var programChoice = randomProgram();
  var iconUser = addIcone(input);
  var iconComputer = addIcone(programChoice);
  var totalParty = numberUserWon + numberDraws + numberComputerWon;

  if (userName == "") {
    userName = input;
    return `Hello ${userName}, welcome to the game.<br><br>Please choose your game mode : normal or reverse.`;
  }

  if (gameMode == "") {
    gameMode = input;
    return `${gameMode} mode activated, ${userName} choose your type "scissors" "paper" or "stone".`;
  }

  if (validInput(input)) {
    // Check if we do not have the same result between player and program
    if (input == programChoice) {
      numberDraws += 1;
      return `It's a draw.<br>It's the ${numberDraws} draws`;
    }

    // If it is reverse mode, we add "reverse" to the user choice
    if (gameMode == "reverse") {
      input = "reverse " + input;
      console.log(input);
    }

    // The rules of Scissors Paper Stone game and reverse Scissors Paper Stone game
    if (gameRules(input, programChoice)) {
      numberUserWon += 1;
      return `${userName},you win with ${iconUser}.<br>Already ${numberUserWon} success`;
    } else {
      numberComputerWon += 1;
      totalParty = numberUserWon + numberDraws + numberComputerWon;
      return `The computer chose ${programChoice} ${iconComputer}.<br>${userName} you chose ${input} ${iconUser}.<br><br>You lose! Bummer.<br><br>Now you can type "scissors" "paper" or "stone" to play another round !<br><br>you've been winning ${numberUserWon}/${totalParty} turns.`;
    }
  } else {
    return `There are only 3 input options, ${input} is incorrect, please choice among scissors, paper, stone, reverse scissors, reverse paper or reverse stone`;
  }
};
