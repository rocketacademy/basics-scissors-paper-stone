var userWins = 0; //number of times user wins
var compWins = 0; //number of time computer wins
var noOfPlays = 0; //number of rounds in total

var userName = "";
var gameStateOne = "Enter Username";
var gameStateTwo = "SPS Game";
var currentGameState = gameStateOne;

//this is so that i can use the tab function
var scissors = "scissors";
var paper = "paper";
var stone = "stone";

//Random scissors paper or stone
var scissorsPaperorStone = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "scissors";
  }
  if (randomNumber == 1) {
    return "paper";
  }
  if (randomNumber == 2) {
    return "stone";
  }
};

//Win lose draw conditions for normal SPS
var playerWinOrLose = function (userGuess, compGuess) {
  if (userGuess == compGuess) {
    return "draw";
  }
  if (
    (userGuess == scissors && compGuess == paper) ||
    (userGuess == paper && compGuess == stone) ||
    (userGuess == stone && compGuess == scissors)
  ) {
    return "win";
  }
  if (
    (userGuess == scissors && compGuess == stone) ||
    (userGuess == paper && compGuess == scissors) ||
    (userGuess == stone && compGuess == paper)
  ) {
    return "lose";
  }
};

var main = function (input) {
  if (input == "" && userName == "" && currentGameState == gameStateOne) {
    return `Please enter a user name to begin.`;
  }

  if (currentGameState == gameStateOne && input != "") {
    userName = input;
    currentGameState = gameStateTwo;
    return `Hi ${userName}, please enter "scissors" "paper" or "stone" to play.`;
  }

  var compSPS = scissorsPaperorStone();
  console.log(compSPS);
  var winOrLose = playerWinOrLose(input, compSPS);

  if (winOrLose == "win") {
    userWins += 1;
    noOfPlays += 1;
    return `You Win! <br> You chose ${input} & the computer chose ${compSPS}. <br> <br> ${userName} wins: ${userWins} over ${noOfPlays} rounds. <br> Computer wins: ${compWins} over ${noOfPlays} rounds.`;
  }

  if (winOrLose == "lose") {
    noOfPlays += 1;
    compWins += 1;
    return `You lost! <br> You chose ${input} & the computer chose ${compSPS}. <br> <br> ${userName} wins: ${userWins} over ${noOfPlays} rounds. <br> Computer wins: ${compWins} over ${noOfPlays} rounds.`;
  }

  if (winOrLose == "draw") {
    noOfPlays += 1;
    return `Both You and the Computer chose ${compSPS}. <br> <br> It is a draw. <br> ${userName} wins: ${userWins} over ${noOfPlays} rounds. <br> Computer wins: ${compWins} over ${noOfPlays} rounds.`;
  }
};
