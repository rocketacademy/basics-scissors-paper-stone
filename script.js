/* Part 1 : 
Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

Part 2: 
- win-loss record : Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.
- Username : add a feature to collect the user's name as the first input after the page loads
- Formatting : use <br> to create new lines in the output */

//input : scissors, paper, stone
//output : win, lose, draw

var scissors = "scissors";
var paper = "paper";
var stone = "stone";

//default game mode
var currentGameMode = "waiting for user name";
var userName = "";

//win-loss record
var userNumOfWins = 0;
var compNumOfWins = 0;
var numOfDraws = 0;
var numOfTurns = 0;

//generate random number 0-3
var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal);
  return randomNumber;
};

//computer generates random game outputs
var compChoice = function () {
  var randomInteger = rollDice();
  console.log("random number = " + randomInteger);

  var compOption = "";

  // set computer random generated game outputs
  if (randomInteger == 0) {
    compOption = scissors;
  }

  if (randomInteger == 1) {
    compOption = paper;
  }

  if (randomInteger == 2) {
    compOption = stone;
  }
  return compOption;
};
console.log("computer choice = " + compChoice());
console.log("current game mode = " + currentGameMode);

var main = function (input) {
  var gameOutput = "";

  //start with username mode
  if (currentGameMode == "waiting for user name") {
    //set the name
    userName = input;

    //after inputting name, we can switch to game mode
    currentGameMode = "scissors paper stone game";
    console.log("switch game mode -> " + currentGameMode);

    //output username and start game
    gameOutput = `Hello ${userName}! <br> Please enter scissors, paper or stone to start the game`;

    //switch to game mode
  } else if (currentGameMode == "scissors paper stone game") {
    //scissors paper stone game logic
    var compFinalChoice = compChoice();

    gameOutput = `Please enter scissors, paper or stone to continue the game`;

    //winning scenarios: scissors > paper, paper > stone, stone > scissors

    //if user wins
    if (
      (input == scissors && compFinalChoice == paper) ||
      (input == paper && compFinalChoice == stone) ||
      (input == stone && compFinalChoice == scissors)
    ) {
      userNumOfWins = userNumOfWins + 1;
      numOfTurns = numOfTurns + 1;
      gameOutput = `Computer chose ${compFinalChoice} <br> ${userName} chose ${input} <br> <br> ${userName} has won! <br> ${userName} has won ${userNumOfWins}/${numOfTurns} turns <br> Total no. of Draws : ${numOfDraws}`;

      //if computer wins
    } else if (
      (compFinalChoice == scissors && input == paper) ||
      (compFinalChoice == paper && input == stone) ||
      (compFinalChoice == stone && input == scissors)
    ) {
      compNumOfWins = compNumOfWins + 1;
      numOfTurns = numOfTurns + 1;
      gameOutput = `Computer chose ${compFinalChoice} <br> ${userName} chose ${input} <br> <br> Computer has won! <br> Computer has won ${compNumOfWins}/${numOfTurns} turns <br> Total no. of Draws : ${numOfDraws}`;
    }

    //if its the same --> draw
    if (input == compFinalChoice) {
      numOfDraws = numOfDraws + 1;
      numOfTurns = numOfTurns + 1;
      gameOutput = `Its a draw! <br> Total number of draws is ${numOfDraws}`;
    }
  }
  return gameOutput;
};
