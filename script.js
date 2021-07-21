//win loss record
var numOfWin = 0;
var numOfLose = 0;
var numOfDraw = 0;
var winPercentage = 0;

//User name
var currentGameMode = "waiting for username";
var userName = "";

// Generate a random integer from 1 to max inclusive
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
//Generate scissors, paper or stone
var generateSPS = function () {
  var numSPSInRepertoire = 3;
  var random = generateRandomInteger(numSPSInRepertoire);
  if (random == 1) {
    return "scissors";
  }
  if (random == 2) {
    return "paper";
  }
  if (random == 3) {
    return "stone";
  }
};
//the game
var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for username") {
    //set the name
    userName = input;
    currentGameMode = "ScissorsPaperStone";
    return (myOutputValue =
      "Welcome " +
      userName +
      "! Time for you to make a move! Scissors, Paper or Stone?");
  } else if (currentGameMode == "ScissorsPaperStone") {
    var winPercentage = 100 * (numOfWin / (numOfWin + numOfLose + numOfDraw));
    var genericOutput = `${userName}'s play: ${input}. Program's play: ${randomSPS}.`;
    var randomSPS = generateSPS();
  }
  if (
    (input == "scissors" && randomSPS == "paper") ||
    (input == "paper" && randomSPS == "stone") ||
    (input == "stone" && randomSPS == "scissors")
  ) {
    numOfWin = numOfWin + 1;
    return `${genericOutput} You win! <br> Your Win:Lose:Draw Ratio is ${numOfWin}: ${numOfLose} :${numOfDraw}. <br> Your winning percentage is ${winPercentage}% `;
  }

  if (input == randomSPS) {
    numOfDraw = numOfDraw + 1;
    return `${genericOutput} You draw! <br> Your Win:Lose:Draw Ratio is ${numOfWin}: ${numOfLose} :${numOfDraw}. <br> Your winning percentage is ${winPercentage}%`;
  }
  if (
    (input == "scissors" && randomSPS == "stone") ||
    (input == "paper" && randomSPS == "scissors") ||
    (input == "stone" && randomSPS == "paper")
  ) {
    numOfLose = numOfLose + 1;
    return `${genericOutput} You lose! <br> Your Win:Lose:Draw Ratio is ${numOfWin}: ${numOfLose} :${numOfDraw}. <br> Your winning percentage is ${winPercentage}% `;
  }

  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    return "Invalid input, please choose either scissors, paper or stone.";
  }
};
