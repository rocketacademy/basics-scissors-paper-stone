// Setting of Parameters //
var rock = "Rock";
var scissors = "Scissors";
var paper = "Paper";

var player = "player";
var computer = "computer";

var win = "Win";
var lose = "Lose";
var draw = "Draw";

// User to enter their user names //
var currentGameMode = "waiting for user name";
var userName = "";

// Global states parameters //
var numPlayerWins = 0;
var numComputerWins = 0;
var numOfDraws = 0;

//Computer chooses on random of Rock, Paper Scissors //
var computerChoice = function () {
  var randomNumber = Math.random() * 3;
  console.log(randomNumber);
  var randomNumberRounded = Math.floor(randomNumber);
  console.log(randomNumberRounded);
  var computerChoice = "";
  if (randomNumberRounded == 0) {
    computerChoice = rock;
    console.log(computerChoice);
  }
  if (randomNumberRounded == 1) {
    computerChoice = scissors;
    console.log(computerChoice);
  }
  if (randomNumberRounded == 2) {
    computerChoice = paper;
    console.log(computerChoice);
  }
  return computerChoice;
};

var main = function (input) {
  var gameOutcome = "";
  //setting game mode for user to enter user name //
  if (currentGameMode == "waiting for user name") {
    // set user name //
    userName = input;

    //now that we have username, switch to the mode to game//
    currentGameMode = "Rock Paper Scissors";
    //gameOutcome = myOutputValue//
    gameOutcome =
      " Hello " +
      userName +
      "! <br> Please type Rock, Paper or Scissors to play the game!";
  } else if (currentGameMode == "Rock Paper Scissors") {
    // Move the Rock Paper Scissors game into the else if//
    // if user does not put in any input, outcome is "Please choose Rock or Scissors or Paper and try again!" //
    var computerFinalChoice = computerChoice();
    gameOutcome =
      "Please choose Rock or Scissors or Paper and try again! <br> User " +
      userName +
      " has won " +
      numPlayerWins +
      " games, Computer has won " +
      numComputerWins +
      " games and total draws is, " +
      numOfDraws;
    // if user choice = computer final choice, is draw //
    if (input == computerFinalChoice) {
      numOfDraws += 1;
      gameOutcome =
        "The game ends in a draw! <br> User " +
        userName +
        " has won " +
        numPlayerWins +
        " games, Computer has won " +
        numComputerWins +
        " games and total draws is, " +
        numOfDraws;
    }
    // if user beats computer in final choice, user wins! //
    if (
      (input == "Rock" && computerFinalChoice == "Scissors") ||
      (input == "Scissors" && computerFinalChoice == "Paper") ||
      (input == "Paper" && computerFinalChoice == "Rock")
    ) {
      numPlayerWins += 1;
      gameOutcome =
        "You win the game! <br> User " +
        userName +
        " has won " +
        numPlayerWins +
        " games, Computer has won " +
        numComputerWins +
        " games and total draws is, " +
        numOfDraws;
    }
    // if computer beats user, computer wins! //
    if (
      (input == "Paper" && computerFinalChoice == "Scissors") ||
      (input == "Scissors" && computerFinalChoice == "Rock") ||
      (input == "Rock" && computerFinalChoice == "Paper")
    ) {
      numComputerWins += 1;
      gameOutcome =
        "You lose the game! <br> User " +
        userName +
        " has won " +
        numPlayerWins +
        " games, Computer has won " +
        numComputerWins +
        " games and total draws is, " +
        numOfDraws;
    }
    // Console log to check the record of winning/draw statistics if code is working (start)//
    console.log("Player win number is" + numPlayerWins);
    console.log("Computer win number is" + numComputerWins);
    console.log("Draw number is" + numOfDraws);
    // Console log to check the record of winning/draw statistics if code is working (ends) ++ code is working//
  }
  return gameOutcome;
};

// Scissors beats paper, paper beats stone, and stone beats scissors

//Part 2//
// add state to project such that it keeps track of the number of times the user has won and the number of times computer has won.
// Number user has won, number computer has won, number of draws, each party winning percentage
// using <br> to arrange message return to look nicer
