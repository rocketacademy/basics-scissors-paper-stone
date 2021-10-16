var main = function (input) {
  var results = scissorsPaperStone(input);
  return results;
};

var scissorsPaperStone = function (input) {
  var listOfChoice = ["scissors", "paper", "stone"];
  var computerChoice = Math.floor(Math.random() * listOfChoice.length);
  //var computerChoice = listOfChoice[randomChoice];
  var userChoice = listOfChoice.indexOf(input);
  var results = userChoice - computerChoice;
  var winningCases = [-1, 2];
  var losingCases = [1, -2];
  if (winningCases.includes(results)) {
    output = "Win";
  }
  if (losingCases.includes(results)) {
    output = "Lose";
  }
  if (results == 0) {
    output = "Draw";
  }
  return "The computer chose " + listOfChoice[computerChoice] + "the " + output;
};
