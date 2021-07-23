var scissors = "1";
var stone = "2";
var paper = "3";
var totalScore = 0;
var main = function (input) {
  var numberGenerator = Math.random() * 3;
  var computerOption = Math.floor(numberGenerator);
  //computerOption = 1;
  var computerOption2 = Math.floor(numberGenerator);
  //computerOption2 = 2;
  //If input equals 0  computer chooses scissors
  if (computerOption == "0") {
    //input = scissors
    if (input == scissors) {
      return (myOutputValue =
        "user chooses scissor You Draw " + computerOption + " " + totalScore);
    } else if (input == stone) {
      return (myOutputValue = "You Lose " + computerOption + " " + totalScore);
    } else if (input == paper) {
      totalScore += 1;
      return (myOutputValue =
        "You Win " +
        computerOption +
        "win = " +
        totalScore +
        "lose = " +
        totalLose);
    }
  }
  //If input equals 1  computer chooses paper
  if (computerOption == "1") {
    //input = paper
    if (input == scissors) {
      return (myOutputValue = "You Lose " + computerOption + " " + totalScore);
    } else if (input == stone) {
      totalScore += 1;
      return (myOutputValue = "You Win " + computerOption + " " + totalScore);
    } else if (input == paper) {
      return (myOutputValue = "You Draw " + computerOption + " " + totalScore);
    }
  }
  //If input equals 2  computer chooses stone
  if (computerOption == "2") {
    //input = stone
    if (input == scissors) {
      totalScore += 1;
      return (myOutputValue = "You Win " + computerOption + " " + totalScore);
    } else if (input == stone) {
      return (myOutputValue = "You Draw " + computerOption + " " + totalScore);
    } else if (input == paper) {
      return (myOutputValue = "You Lose " + computerOption + " " + totalScore);
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
