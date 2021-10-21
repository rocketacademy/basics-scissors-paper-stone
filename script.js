// Number of games won
var numGamesWon = 0;

// Number of games lost
var numGamesLost = 0;

// Number of games drew
var numGamesDrew = 0;

var main = function (input) {
  var randomOutcome = generateSPS();
  console.log(randomOutcome);
  var myOutputValue = "please input: scissors, paper, or stone.";

  // input is scissors
  if (input == "scissors" && randomOutcome == "paper") {
    numGamesWon = numGamesWon + 1;
    myOutputValue =
      "You win! You picked " +
      input +
      " and computer picked " +
      randomOutcome +
      ". You've won " +
      numGamesWon +
      " times, lost " +
      numGamesLost +
      " times, and drew " +
      numGamesDrew +
      " times.";
  }
  if (input == "scissors" && randomOutcome == "stone") {
    numGamesLost = numGamesLost + 1;
    myOutputValue =
      "You lose! You picked " +
      input +
      " and computer picked " +
      randomOutcome +
      ". You've won " +
      numGamesWon +
      " times, lost " +
      numGamesLost +
      " times, and drew " +
      numGamesDrew +
      " times.";
  }
  if (input == "scissors" && randomOutcome == "scissors") {
    numGamesDrew = numGamesDrew + 1;
    myOutputValue =
      "You drew! You picked " +
      input +
      " and computer picked " +
      randomOutcome +
      ". You've won " +
      numGamesWon +
      " times, lost " +
      numGamesLost +
      " times, and drew " +
      numGamesDrew +
      " times.";
  }

  // input is paper
  if (input == "paper" && randomOutcome == "paper") {
    numGamesDrew = numGamesDrew + 1;
    myOutputValue =
      "You drew! You picked " +
      input +
      " and computer picked " +
      randomOutcome +
      ". You've won " +
      numGamesWon +
      " times, lost " +
      numGamesLost +
      " times, and drew " +
      numGamesDrew +
      " times.";
  }
  if (input == "paper" && randomOutcome == "stone") {
    numGamesWon = numGamesWon + 1;
    myOutputValue =
      "You win! You picked " +
      input +
      " and computer picked " +
      randomOutcome +
      ". You've won " +
      numGamesWon +
      " times, lost " +
      numGamesLost +
      " times, and drew " +
      numGamesDrew +
      " times.";
  }
  if (input == "paper" && randomOutcome == "scissors") {
    numGamesLost = numGamesLost + 1;
    myOutputValue =
      "You lose! You picked " +
      input +
      " and computer picked " +
      randomOutcome +
      ". You've won " +
      numGamesWon +
      " times, lost " +
      numGamesLost +
      " times, and drew " +
      numGamesDrew +
      " times.";
  }

  // input is stone
  if (input == "stone" && randomOutcome == "paper") {
    numGamesLost = numGamesLost + 1;
    myOutputValue =
      "You lose! You picked " +
      input +
      " and computer picked " +
      randomOutcome +
      ". You've won " +
      numGamesWon +
      " times, lost " +
      numGamesLost +
      " times, and drew " +
      numGamesDrew +
      " times.";
  }
  if (input == "stone" && randomOutcome == "stone") {
    numGamesDrew = numGamesDrew + 1;
    myOutputValue =
      "You drew! You picked " +
      input +
      " and computer picked " +
      randomOutcome +
      ". You've won " +
      numGamesWon +
      " times, lost " +
      numGamesLost +
      " times, and drew " +
      numGamesDrew +
      " times.";
  }
  if (input == "stone" && randomOutcome == "scissors") {
    numGamesWon = numGamesWon + 1;
    myOutputValue =
      "You win! You picked " +
      input +
      " and computer picked " +
      randomOutcome +
      ". You've won " +
      numGamesWon +
      " times, lost " +
      numGamesLost +
      " times, and drew " +
      numGamesDrew +
      " times.";
  }

  return myOutputValue;
};

// random generation
var generateSPS = function () {
  var randomNo = Math.random() * 3;
  var randomSPS = Math.floor(randomNo);
  if (randomSPS == 0) {
    return "scissors";
  }
  if (randomSPS == 1) {
    return "paper";
  }
  return "stone";
};
