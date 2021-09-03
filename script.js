var totalgames = 0;
var userwins = 0;
var tiedgames = 0;
var computerwins = 0;
var userName = "";
var currentGameMode = "Waiting for User Name";

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "Waiting for User Name") {
    // allow user to input userName
    userName = input;
    // toggle game mode to play game
    currentGameMode = "Undecided";
    myOutputValue =
      "Hello " + userName + ". Lets Play SPS, Reverse SPS or Computer!";
    return myOutputValue;
  }
  if (currentGameMode == "Undecided") {
    currentGameMode = input;
    myOutputValue = "Welcome, " + userName + ". Lets play " + input;
    return myOutputValue;
  }

  if (currentGameMode == "SPS") {
    if (input != "Scissors" && input != "Paper" && input != "Stone") {
      return "Only Scissors, Paper or Stone! <br> Try again";
    }
    var computerchose = computermove();
    totalgames = totalgames + 1;
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
  if (currentGameMode == "Reverse SPS") {
    if (input != "Scissors" && input != "Paper" && input != "Stone") {
      return "Only Scissors, Paper or Stone! <br> Try again";
    }
    var computerchose = computermove();
    totalgames = totalgames + 1;

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

    // Lose Grouping
    if (
      (input == "Scissors" && computerchose == "Paper") ||
      (input == "Paper" && computerchose == "Stone") ||
      (input == "Stone" && computerchose == "Scissors")
    ) {
      computerwins = computerwins + 1;
      myOutputValue =
        "You used " +
        input +
        " and Computer used " +
        computerchose +
        ". <br> You Lose :(";
    }

    // Win Grouping
    if (
      (input == "Scissors" && computerchose == "Stone") ||
      (input == "Paper" && computerchose == "Scissors") ||
      (input == "Stone" && computerchose == "Paper")
    ) {
      userwins = userwins + 1;
      myOutputValue =
        "You used " +
        input +
        " and Computer used " +
        computerchose +
        ". <br> You WIN!!!";
    }
  }
  // Computer vs Computer game mode
  if (currentGameMode == "Computer") {
    // Generate 2 computer output
    var computerAchose = computermove();
    var computerBchose = computermove();
    // compare 2 computer output
    //Tied Grouping
    if (computerAchose == computerBchose) {
      myOutputValue =
        "Computer A used " +
        computerAchose +
        " and Computer B used " +
        computerBchose +
        ".<br> Its a tie!";
    }
    // Computer A wins
    if (
      (computerAchose == "Scissors" && computerBchose == "Paper") ||
      (computerAchose == "Paper" && computerBchose == "Stone") ||
      (computerAchose == "Stone" && computerBchose == "Scissors")
    ) {
      myOutputValue =
        "Computer A used " +
        computerAchose +
        "and Computer B used " +
        computerBchose +
        ". <br> Computer A won!";
    }
    //Computer B wins
    if (
      (computerAchose == "Scissors" && computerBchose == "Stone") ||
      (computerAchose == "Paper" && computerBchose == "Scissors") ||
      (computerAchose == "Stone" && computerBchose == "Paper")
    ) {
      myOutputValue =
        "Computer A used " +
        computerAchose +
        " and Computer B used " +
        computerBchose +
        ". <br> Computer B won!";
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
