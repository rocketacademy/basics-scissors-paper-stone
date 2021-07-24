var main = function (input) {
  return conditionList(input);
};

var generateRandomRPS = function () {
  var numPossibleWords = 3;
  var randomNum = Math.floor(Math.random() * numPossibleWords) + 1;
  console.log(randomNum);
  if (randomNum == 1) return "rock";
  else if (randomNum == 2) return "paper";
  else if (randomNum == 3) return "scissors";
};

var roundCount = 0;
var winCount = 0;

var conditionList = function (input) {
  var randomAns = generateRandomRPS();
  if (input == randomAns) {
    roundCount = roundCount + 1;
    return (
      "The computer chooses" +
      randomAns +
      "<br>" +
      "You chose" +
      input +
      "<br>" +
      "Draw!" +
      "<br>" +
      "So far you have been winning" +
      winCount +
      "/" +
      roundCount +
      "turns. Great Job!"
    );
  } else if (input == "rock" && randomAns == "paper") {
    roundCount = roundCount + 1;
    return (
      "The computer chooses" +
      randomAns +
      "<br>" +
      "You chose" +
      input +
      "<br>" +
      "You Lose!" +
      "<br>" +
      "So far you have been winning" +
      winCount +
      "/" +
      roundCount +
      "turns. Great Job!"
    );
  } else if (input == "rock" && randomAns == "scissors") {
    roundCount = roundCount + 1;
    winCount = winCount + 1;
    return (
      "The computer chooses" +
      randomAns +
      "<br>" +
      "You chose" +
      input +
      "<br>" +
      "You Win!" +
      "<br>" +
      "So far you have been winning" +
      winCount +
      "/" +
      roundCount +
      "turns. Great Job!"
    );
  } else if (input == "paper" && randomAns == "rock") {
    roundCount = roundCount + 1;
    winCount = winCount + 1;
    return (
      "The computer chooses" +
      randomAns +
      "<br>" +
      "You chose" +
      input +
      "<br>" +
      "You Win!" +
      "<br>" +
      "So far you have been winning" +
      winCount +
      "/" +
      roundCount +
      "turns. Great Job!"
    );
  } else if (input == "paper" && randomAns == "scissors") {
    roundCount = roundCount + 1;
    return (
      "The computer chooses" +
      randomAns +
      "<br>" +
      "You chose" +
      input +
      "<br>" +
      "You Lose!" +
      "<br>" +
      "So far you have been winning" +
      winCount +
      "/" +
      roundCount +
      "turns. Great Job!"
    );
  } else if (input == "scissors" && randomAns == "rock") {
    roundCount = roundCount + 1;
    return (
      "The computer chooses" +
      randomAns +
      "<br>" +
      "You chose" +
      input +
      "<br>" +
      "You Lose!" +
      "<br>" +
      "So far you have been winning" +
      winCount +
      "/" +
      roundCount +
      "turns. Great Job!"
    );
  } else if (input == "scissors" && randomAns == "paper") {
    roundCount = roundCount + 1;
    winCount = winCount + 1;
    return (
      "The computer chooses" +
      randomAns +
      "<br>" +
      "You chose" +
      input +
      "<br>" +
      "You Win!" +
      "<br>" +
      "So far you have been winning" +
      winCount +
      "/" +
      roundCount +
      "turns. Great Job!"
    );
  }
};
