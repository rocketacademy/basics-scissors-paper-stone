//FAITH: SPS PART 1 + PART 2 More Comfortable, Reverse Game Mode

var userWin = 0;
var comWin = 0;
var numDraws = 0;
var currentGameMode = "waiting for user name";
var userName;

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    userName = input; // set the name
    currentGameMode = "SPS game"; // now that we have the name, switch the mode

    myOutputValue = "Hello " + userName;
  } else if (currentGameMode == "SPS game") {
    myOutputValue = playSPSgame(input);
  }

  return myOutputValue;
};

// get random integer
var getSPS = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.ceil(randomFloat);
  var computerChoice;

  // assign integer to SPS
  if (resultInteger == 1) {
    computerChoice = "scissors";
  }
  if (resultInteger == 2) {
    computerChoice = "stone";
  }
  if (resultInteger == 3) {
    computerChoice = "paper";
  }
  return computerChoice;
};

var playSPSgame = function (input) {
  var comSelect = getSPS(); //call com output of SPS
  var myOutputValue = "You lose!";

  // screening valid input
  if (
    input != "scissors" &&
    input != "stone" &&
    input != "paper" &&
    input != "reverse scissors" &&
    input != "reverse stone" &&
    input != "reverse paper"
  ) {
    return "There are only 3 possible inputs: scissors, paper or stone. Please try again!";
  }

  if (input == comSelect || input == "reverse " + comSelect) {
    //draw
    myOutputValue = "It's a draw!";
  }

  if (
    // win
    ((input == "paper" || input == "reverse scissors") &&
      comSelect == "stone") ||
    ((input == "stone" || input == "reverse paper") &&
      comSelect == "scissors") ||
    ((input == "scissors" || input == "reverse stone") && comSelect == "paper")
  ) {
    myOutputValue = "You win!";
  }

  var uCRatio = userVsCom(myOutputValue);
  return `The computer chose ${comSelect}.<br>
  You chose ${input}.<br>
  ${myOutputValue} <br><br>
  ${uCRatio}`;
};

var userVsCom = function (fOutput) {
  if (fOutput == "You win!") {
    userWin += 1;
  }

  if (fOutput == "You lose!") {
    comWin += 1;
  }

  if (fOutput == "It's a draw!") {
    numDraws += 1;
  }

  return ` 
  You've won ${userWin} / ${Number(userWin + comWin + numDraws)} times. <br><br>
  Not bad, ${userName}!`;
};
