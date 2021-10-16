// Scissors paper stone game
// Input is scissors, paper or stone by user.
// Output = Win/ Lose or Draw
// Random 1,2,3 calibrated into scissors paper and stone
// Use rolldice function 1,2,3.
// Use if function. If input = random = draw
// IF INPUT = Scissors (1) wins paper (2)
// IF INPUT = Paper (2) wins rock (3)
// IF INPUT = Rock (1) wins scissors (1)

var rollDice = function () {
  //Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor opration.
  // This will be an integer from 0 to 2 inclusive
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 3 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var main = function (input) {
  var hand = input;
  var randomSPS = rollDice();

  // If function for Output
  if (randomSPS == 1) {
    var comValue = "scissors";
  }

  if (randomSPS == 2) {
    var comValue = "paper";
  }

  if (randomSPS == 3) {
    var comValue = "stone";
  }
  console.log("The system chose " + comValue);
  // Draw
  if (
    (randomSPS == 1 && hand == "scissors") ||
    (randomSPS == 2 && hand == "paper") ||
    (randomSPS == 3 && hand == "stone")
  ) {
    var myOutputValue =
      "Draw! You guessed " + hand + "." + " The computer guessed " + comValue;

    console.log("draw response");
  }
  // Win
  if (
    (randomSPS == 1 && hand == "stone") ||
    (randomSPS == 2 && hand == "scissors") ||
    (randomSPS == 3 && hand == "paper")
  ) {
    myOutputValue =
      "You Win! You guessed " +
      hand +
      "." +
      " The computer guessed " +
      comValue;
    console.log("win response");
  }

  // Lose
  if (
    (randomSPS == 1 && hand == "paper") ||
    (randomSPS == 2 && hand == "stone") ||
    (randomSPS == 3 && hand == "scissors")
  ) {
    myOutputValue =
      "You Lose! You guessed " +
      hand +
      "." +
      " The computer guessed " +
      comValue;
    console.log("lose response");
  }

  return myOutputValue;
};
