//user inputs either scissors, paper or stone
// program generates a random number from 1 to 3.
// if the number is 1, it means scissors. if the number is 2, paper. if the number is 3, stone.
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

//prompt user to enter name
//store user;s name as a global variable
var userName = "";
var chooseName = function (input) {
  userName = input;
};

//Convert Scissors/paper/stone to variables
var scissors = "scissors";
var paper = "paper";
var stone = "stone";

//Win-loss-draw and number of games as global variables
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var totalGamesCount = function (winCount, loseCount, drawCount) {
  return Number(winCount) + Number(loseCount) + Number(drawCount);
};
var winPercentage = function () {
  //debug
  console.log("winCount");
  console.log(winCount);
  console.log("totalGamesCount(winCount, loseCount, drawCount)");
  console.log(totalGamesCount(winCount, loseCount, drawCount));
  //

  return Math.floor(
    (Number(winCount) * 100) /
      Number(totalGamesCount(winCount, loseCount, drawCount))
  );
};

//store a global value for the roll without calling the function again. The 'main' function calls the roll function and updates the global variable.
var storeRollDice = 0;

var rollDice = function () {
  // Generate a decimal from 0 through 2, inclusive of 0 and exclusive of 2.
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  var computerChoice = 0;
  //convert to scissors/paper/stone
  if (diceNumber == 1) {
    computerChoice = scissors;
  }
  if (diceNumber == 2) {
    computerChoice = paper;
  }
  if (diceNumber == 3) {
    computerChoice = stone;
  }
  return computerChoice;
};

//CONDITIONS FOR WINNING/LOSING/ETC
var checkWinOrLose = function (input, storeRollDice) {
  //win conditions
  if (
    (input == scissors && storeRollDice == paper) ||
    (input == paper && storeRollDice == stone) ||
    (input == stone && storeRollDice == scissors)
  ) {
    winCount = winCount + 1;
    var winOrLoseStatement = "You win! Noiiice.";
  }
  //lose conditions
  else if (
    (input == scissors && storeRollDice == stone) ||
    (input == paper && storeRollDice == scissors) ||
    (input == stone && storeRollDice == paper)
  ) {
    loseCount = loseCount + 1;
    var winOrLoseStatement = "You lose! GG EZ.";
  }
  //draw conditions
  else if (input == storeRollDice) {
    drawCount = drawCount + 1;
    var winOrLoseStatement = "It's a DRAW.";
  }
  return winOrLoseStatement;
};

//write an extra (de)motivational message
var writeExtraMessage = function () {
  if (winPercentage() >= 50) {
    var extraMessage = "Your parents might not disown you!";
  } else if (winPercentage() < 50) {
    var extraMessage = "Pls uninstall";
  }
  return extraMessage;
};

var main = function (input) {
  //calls the roll function which updates the global variable of the stored roll value.
  storeRollDice = rollDice();

  if (input == "" && userName == "") {
    var statement = `Enter your name!`;
  } else if (userName == "") {
    chooseName(input);
    var welcomeMessage = `Hi ${userName}! Please enter either 'scissors', 'paper' or 'stone'.`;
    var statement = welcomeMessage;
  } else {
    //invalid input repsonse
    if (input != scissors && input != paper && input != stone) {
      var statement = `What is '${input}'??!$? Noob${userName}69, please enter either 'scissors' or 'paper' or 'stone'.`;
    } else {
      //DISPLAY STATEMENT:
      //The computer chose ${computerChoice}. You chose ${yourChoice}. You {winOrLose}.
      var statement =
        "The computer chose " +
        storeRollDice +
        "<br>" +
        "You chose " +
        input +
        "<br>" +
        checkWinOrLose(input, storeRollDice) +
        "<br>" +
        "<br>" +
        "<br>" +
        userName +
        "'s Stats:" +
        "<br>" +
        "Number of Wins:" +
        winCount +
        "<br>" +
        "Number of Losses:" +
        loseCount +
        "<br>" +
        "Number of Draws:" +
        drawCount +
        "<br>" +
        "Win Rate:" +
        winPercentage() +
        "%" +
        "<br>" +
        "Number of games played:" +
        totalGamesCount(winCount, loseCount, drawCount) +
        "<br>" +
        "<br>" +
        writeExtraMessage();
    }
  }

  var myOutputValue = statement;
  return myOutputValue;
};
