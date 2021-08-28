var totalgames = 0;
var userwins = 0;
var tiedgames = 0;
var computerwins = 0;
var userName = "";
var currentGameMode = "Waiting for User Name";

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "Waiting for User Name") {
    userName = input; // allow user to input userName
    currentGameMode = "diceGame"; // toggle game mode to play game
    myOutputValue = "Hello " + userName + ". Lets Play!";
    return myOutputValue;
  } else if (currentGameMode == "diceGame") {
    if (input != "Scissors" || input != "Paper" || input != "Stone") {
      // Validating the input
      var myOutputValue = "Only Scissors, Paper or Stone! <br> Try again";
      var computerchose = computermove();
      totalgames = totalgames + 1;
    }
    // Tied Grouping
    if (input == computerchose) {
      tiedgames = tiedgames + 1;
      myOutputValue =
        "You used " +
        input +
        " and Computer used " +
        computerchose +
        ". <br> Its a tie!";
    }

    // Win Grouping
    if (
      (input == "Scissors" && computerchose == "Paper") ||
      (input == "Paper" && computerchose == "Stone") ||
      (input == "Stone" && computerchose == "Scissors")
    ) {
      userwins = userwins + 1;
      myOutputValue =
        "You used " +
        input +
        " and Computer used " +
        computerchose +
        ". <br> You WIN!!!";
    }

    // Lose Grouping
    if (
      (input == "Scissors" && computerchose == "Stone") ||
      (input == "Paper" && computerchose == "Scissors") ||
      (input == "Stone" && computerchose == "Paper")
    ) {
      computerwins = computerwins + 1;
      myOutputValue =
        "You used " +
        input +
        " and Computer used " +
        computerchose +
        ". <br> You Lose :(";
    }
  }
  userWinPercentage = Math.floor((userwins / totalgames) * 100);
  tiedGamesPercentage = Math.floor((tiedgames / totalgames) * 100);
  computerWinPercentage = Math.floor((computerwins / totalgames) * 100);
  allStats =
    "<br> Total games " +
    userName +
    " played :" +
    totalgames +
    "<br> User won :" +
    userwins +
    " (" +
    userWinPercentage +
    "%) <br> Tied Games :" +
    tiedgames +
    " (" +
    tiedGamesPercentage +
    "%) <br> Computer won :" +
    computerwins +
    " (" +
    computerWinPercentage +
    "%)";
  return myOutputValue + allStats;
};
// Using math random to generate computer's move
// convert the computer's move in numbers to SPS.
var computermove = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var computernumber = randomInteger + 1;
  console.log("Computer generated number");
  console.log(computernumber);

  if (computernumber == 1) {
    computeroutput = "Scissors";
  }
  if (computernumber == 2) {
    computeroutput = "Paper";
  }
  if (computernumber == 3) {
    computeroutput = "Stone";
  }
  console.log("===== Computer used =====");
  console.log(computeroutput);
  return computeroutput;
};
