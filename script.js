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

//Win-loss record
var wins = 0;
var loses = 0;
var draws = 0;

//Name Input
var currentGameMode = "waiting for user name";
var userName = "";

var main = function (input) {
  var myOutputValue = "";

  // do this if game mode is ....
  if (currentGameMode == "waiting for user name") {
    //set the name
    userName = input;

    // now that we have the name, switch to other mode
    currentGameMode = "SPS game";

    myOutputValue =
      "Hello " +
      userName +
      "! <br>Please input scissors, paper or stone to start the game.";
  } else if (currentGameMode == "SPS game") {
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
      draws = draws + 1;

      var myOutputValue =
        "Draw! <br>You guessed " +
        hand +
        "." +
        " <br> The computer guessed " +
        comValue +
        "." +
        " <br><br>Wins = " +
        wins +
        " <br>Loses = " +
        loses +
        " <br>Draws = " +
        draws;

      console.log("draw response");
    }
    // Win

    if (
      (randomSPS == 1 && hand == "stone") ||
      (randomSPS == 2 && hand == "scissors") ||
      (randomSPS == 3 && hand == "paper")
    ) {
      wins = wins + 1;

      myOutputValue =
        "You Win! <br>You guessed " +
        hand +
        "." +
        " <br> The computer guessed " +
        comValue +
        "." +
        " <br><br> Wins = " +
        wins +
        " <br> Loses = " +
        loses +
        " <br> Draws = " +
        draws;

      console.log("win response");
    }

    // Lose
    if (
      (randomSPS == 1 && hand == "paper") ||
      (randomSPS == 2 && hand == "stone") ||
      (randomSPS == 3 && hand == "scissors")
    ) {
      loses = loses + 1;

      myOutputValue =
        "You Lose! <br>You guessed " +
        hand +
        "." +
        " <br> The computer guessed " +
        comValue +
        "." +
        " <br><br> Wins = " +
        wins +
        " <br> Loses = " +
        loses +
        " <br> Draws = " +
        draws;
    }
    console.log("lose response");
  }

  return myOutputValue;
};
