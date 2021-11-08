var main = function (input) {
  var results = scissorsPaperStone(input);
  return results;
};

var username = prompt("What is your name?");
document.querySelector(
  "#header"
).innerHTML = `Hello  ${username}, Welcome to Basics: Scissors Paper Stone 🚀`;

var winRecord = 0;
var loseRecord = 0;
var drawRecord = 0;

var scissorsPaperStone = function (input) {
  var output = "";
  var listOfChoice = ["scissors", "paper", "stone"];
  var computerChoice = Math.floor(Math.random() * listOfChoice.length);
  var userChoice = listOfChoice.indexOf(input);
  var results = userChoice - computerChoice;
  var winningCases = [-1, 2]; // By the order Scissors=1 Paper=2 Stone=3, if input-output, [-1 , 2] are winning cases, [1 -2] are losing cases, [0] is draw
  var losingCases = [1, -2];
  if (winningCases.includes(results)) {
    output = "Win";
    winRecord += 1;
  }
  if (losingCases.includes(results)) {
    output = "Lose";
    loseRecord += 1;
  }
  if (results == 0) {
    output = "Draw";
    drawRecord += 1;
  }
  return ` The computer chose ${listOfChoice[computerChoice]} the result is: ${output}`;
};
