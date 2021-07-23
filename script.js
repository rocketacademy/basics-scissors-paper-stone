var scissors = "scissors";
var stone = "stone";
var paper = "paper";
var totalScore = 0;
var main = function (input) {
  var numberGenerator = Math.random() * 3;
  var computerOption = Math.floor(numberGenerator);
  //If input equals 0  computer chooses scissors
  if (computerOption == "0") {
    //input = scissors
    if (input == scissors) {
      return (myOutputValue = "You Draw ");
    } else if (input == stone) {
      return (myOutputValue = "You Lose ");
    } else if (input == paper) {
      totalScore = totalScore + 1;
      return (myOutputValue = "You Win " + totalScore);
    }
  }
  //If input equals 1  computer chooses paper
  if (computerOption == "1") {
    //input = paper
    if (input == scissors) {
      return (myOutputValue = "You Lose ");
    } else if (input == stone) {
      totalScore = totalScore + 1;
      return (myOutputValue = "You Win " + totalScore);
    } else if (input == paper) {
      return (myOutputValue = "You Draw ");
    }
  }
  //If input equals 2  computer chooses stone
  if (computerOption == "2") {
    //input = stone
    if (input == scissors) {
      totalScore = totalScore + 1;
      return (myOutputValue = "You Win " + totalScore);
    } else if (input == stone) {
      return (myOutputValue = "You Draw ");
    } else if (input == paper) {
      return (myOutputValue = "You Lose ");
    }
  }

  // User never choose scissors, paper or stone
  if (input != paper || input != scissors || input != stone) {
    return (myOutputValue =
      "Incorrect! You guessed " +
      input +
      ", there are only there options sicssors, stone, paper");
  }
};
