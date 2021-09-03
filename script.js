var numUserWins = 0;
var numComputerWins = 0;
var numGames = 0;
var userName = 0;
var gameMode = "Waiting for player";
var gameType = " ";
var prevRoundOutcome = " ";
var numMJPWins = 0;
var numMJPLosses = 0;

var main = function (input) {
  if (gameMode == "Waiting for player") {
    userName = input;
    gameMode = "Choose game mode";
    console.log("username captured");
    return (myOutputValue =
      "Hi " +
      userName +
      "!<br>Welcome to the Scissors-Paper-Stone game!<br><br>Please enter:<br>normal - To play the normal version of Scissors-Paper-Stone, or<br>korean - To play the korean version, also known as muk-jji-ppa!");
  } else if (gameMode == "Choose game mode") {
    //default message
    myOutputValue =
      "Hi " +
      userName +
      ", please enter a valid input to start playing.<br><br>To play the normal version of Scissors-Paper-Stone, enter: normal<br>To play the korean version, also known as muk-jji-ppa, enter: korean<br><br>Hit the submit button once you've made your choice.";
    //validate game type input
    if (input == "korean" || input == "normal") {
      gameMode = "Game mode";
      console.log("type chosen");
      gameType = input;
      myOutputValue = getGameTypeMessage(input);
    }
    return myOutputValue;

    //Normal game // NEED TO ADD STATS TRACKING!!
  } else if (gameMode == "Game mode" && gameType == "normal") {
    console.log("normal game run");
    var spsOutput = spsGenerator();
    console.log(spsOutput);

    var myOutputValue =
      "Please enter only:<br><br>1. scissors<br>2. paper<br>3. stone<br><br>Or you can try your luck at reversed Scissors-Paper-Stone by adding reversed in front of your choice.";

    if (
      input == "scissors" ||
      input == "paper" ||
      input == "stone" ||
      input == "reversed scissors" ||
      input == "reversed paper" ||
      input == "reversed stone"
    ) {
      myOutputValue = runNormalGame(input, spsOutput);
    }

    return myOutputValue;

    //Korean game
  } else if (gameMode == "Game mode" && gameType == "korean") {
    console.log("korean game run");
    var spsOutput = spsGenerator();
    console.log(spsOutput);

    var myOutputValue =
      "Please enter only:<br><br>1. scissors<br>2. paper<br>3. stone<br><br>Or you can try your luck at reversed Scissors-Paper-Stone by adding reversed in front of your choice.";

    if (input == "scissors" || input == "paper" || input == "stone") {
      gameOutcome = getGameOutcome(input, spsOutput);
    }
    if (
      input == "reversed scissors" ||
      input == "reversed paper" ||
      input == "reversed stone"
    ) {
      gameOutcome = getReversedGameOutcome(input, spsOutput);
    }
    console.log(gameOutcome);

    if (prevRoundOutcome == "win" && gameOutcome == "draw") {
      trackWinningStats(gameOutcome);
      numMJPWins = numMJPWins + 1;
      return (myOutputValue =
        "YOU WON muk-jji-ppa!<br><br>You chose " +
        input +
        ".<br>The computer chose " +
        spsOutput +
        ".<br><br>Its a draw!<br><br>Muk jji ppa wins: " +
        numMJPWins +
        "<br>Muk jji ppa losses: " +
        numMJPLosses +
        "<br><br>Refresh the page to start a new game or enter an new input to continue playing.");
    }
    if (prevRoundOutcome == "lose" && gameOutcome == "draw") {
      trackWinningStats(gameOutcome);
      numMJPLosses = numMJPLosses + 1;
      return (myOutputValue =
        "YOU LOST!<br><br>You chose " +
        input +
        ".<br>The computer chose " +
        spsOutput +
        ".<br><br>Its a draw!<br><br>Muk jji ppa wins: " +
        numMJPWins +
        "<br>Muk jji ppa losses: " +
        numMJPLosses +
        "<br><br>Refresh the page to start a new game or enter an new input to continue playing.");
    }
    if (
      input == "scissors" ||
      input == "paper" ||
      input == "stone" ||
      input == "reversed scissors" ||
      input == "reversed paper" ||
      input == "reversed stone"
    )
      myOutputValue = runKoreanGame(input, spsOutput);

    return myOutputValue;
  }
};

// //function to run korean game
var runKoreanGame = function (userGuess, spsOutput) {
  //if function to validate input and run normal SPS rules
  if (userGuess == "scissors" || userGuess == "paper" || userGuess == "stone") {
    trackWinningStats(getGameOutcome(userGuess, spsOutput));
    koreanGameOutput = getKoreanOutputMessage(
      userGuess,
      spsOutput,
      getGameOutcome(userGuess, spsOutput),
      numUserWins,
      numGames
    );
  }
  //if function to switch to reversed rules if reversed input is entered
  if (
    userGuess == "reversed scissors" ||
    userGuess == "reversed paper" ||
    userGuess == "reversed stone"
  ) {
    trackWinningStats(getReversedGameOutcome(userGuess, spsOutput));
    koreanGameOutput = getKoreanOutputMessage(
      userGuess,
      spsOutput,
      getReversedGameOutcome(userGuess, spsOutput),
      numUserWins,
      numGames
    );
  }

  return koreanGameOutput;
};
//function to get interim korean game message
var getKoreanOutputMessage = function (
  userGuess,
  spsOutput,
  gameOutcome,
  numUserWins,
  numGames
) {
  var winRate = numUserWins / numGames;

  myOutputValue =
    "You chose " +
    userGuess +
    ".<br>The computer chose " +
    spsOutput +
    ".<br><br>Its a draw.<br><br>Enter another input to continue playing!<br><br>Number of rounds played: " +
    numGames +
    "<br>Player wins: " +
    numUserWins +
    "<br>Computer wins: " +
    numComputerWins +
    "<br>Draws: " +
    (numGames - numComputerWins - numUserWins);

  if (gameOutcome == "win")
    myOutputValue =
      "You chose " +
      userGuess +
      ".<br>The computer chose " +
      spsOutput +
      ".<br><br>You " +
      gameOutcome +
      " this round.<br><br>Draw the next round and you win the game!<br><br>Number of rounds played: " +
      numGames +
      "<br>Player wins: " +
      numUserWins +
      "<br>Computer wins: " +
      numComputerWins +
      "<br>Draws: " +
      (numGames - numComputerWins - numUserWins);

  if (gameOutcome == "lose")
    myOutputValue =
      "You chose " +
      userGuess +
      ".<br>The computer chose " +
      spsOutput +
      ".<br><br>The computer won this round.<br><br>Draw the next round and you lose the game.<br><br>Number of games played: " +
      numGames +
      "<br>Player wins: " +
      numUserWins +
      "<br>Computer wins: " +
      numComputerWins +
      "<br>Draws: " +
      (numGames - numComputerWins - numUserWins);

  return myOutputValue;
};

//random number generator to give scissors, paper or stone
var spsGenerator = function () {
  var randomNum1to3 = Math.ceil(Math.random() * 3);
  var spsOutput = "scissors";
  if (randomNum1to3 == 2) var spsOutput = "paper";
  if (randomNum1to3 == 3) var spsOutput = "stone";
  return spsOutput;
};

//function to decide on game outcome
var getGameOutcome = function (input, computerChoice) {
  var gameOutcome = "draw";
  if (input == "scissors" && computerChoice == "paper") var gameOutcome = "win";
  if (input == "scissors" && computerChoice == "stone")
    var gameOutcome = "lose";
  if (input == "paper" && computerChoice == "scissors")
    var gameOutcome = "lose";
  if (input == "paper" && computerChoice == "stone") var gameOutcome = "win";
  if (input == "stone" && computerChoice == "scissors") var gameOutcome = "win";
  if (input == "stone" && computerChoice == "paper") var gameOutcome = "lose";
  return gameOutcome;
};

//function to decide on reversed game outcome
var getReversedGameOutcome = function (input, computerChoice) {
  var gameOutcome = "draw";
  if (input == "reversed scissors" && computerChoice == "paper")
    var gameOutcome = "lose";
  if (input == "reversed scissors" && computerChoice == "stone")
    var gameOutcome = "win";
  if (input == "reversed paper" && computerChoice == "scissors")
    var gameOutcome = "win";
  if (input == "reversed paper" && computerChoice == "stone")
    var gameOutcome = "lose";
  if (input == "reversed stone" && computerChoice == "scissors")
    var gameOutcome = "lose";
  if (input == "reversed stone" && computerChoice == "paper")
    var gameOutcome = "win";
  return gameOutcome;
};

//function to return myOutputValue
var getNormalOutputMessage = function (
  input,
  spsOutput,
  gameOutcome,
  numUserWins,
  numGames
) {
  var winRate = numUserWins / numGames;
  var endMessage =
    "You can do better than that " +
    userName +
    ". <br>Do not give up! Enter another input to keep going!";
  if (winRate >= 0.5) {
    var endMessage =
      "You're doing great so far " +
      userName +
      "! Good job!<br>Enter another input to keep going!";
  }
  myOutputValue =
    "You chose " +
    input +
    ".<br>The computer chose " +
    spsOutput +
    ".<br><br>You " +
    gameOutcome +
    "!<br><br>Number of wins: " +
    numUserWins +
    "<br>Number of draws: " +
    (numGames - numComputerWins - numUserWins) +
    "<br>Number of games played: " +
    numGames +
    "<br><br>" +
    endMessage;
  return myOutputValue;
};

//function to track numUserWins, numComputerWins and numGames
var trackWinningStats = function (gameOutcome) {
  numGames += 1;
  prevRoundOutcome = gameOutcome;
  if (gameOutcome == "win") numUserWins += 1;
  if (gameOutcome == "lose") numComputerWins += 1;
  console.log(numGames);
  console.log(numUserWins);
  console.log(numComputerWins);
};

//function to generate game type message
var getGameTypeMessage = function (gameTypeChoice) {
  if (gameTypeChoice == "normal")
    return (gameTypeMessage =
      "You have chosen the " +
      gameTypeChoice +
      " version of Scissors-Paper-Stone.<br><br>Enter your choice of:<br><br>1. scissors<br>2. paper<br>3. stone<br><br> Then click the submit button to start playing. Goodluck!");
  if (gameTypeChoice == "korean")
    return (gameTypeMessage =
      "You have chosen the " +
      gameTypeChoice +
      " version muk-jji-ppa.<br><br>Enter your choice of:<br><br>1. scissors<br>2. paper<br>3. stone<br><br>To win under muk-jji-ppa rules, you need a draw after a winning round to win. If the round after a win is not a draw, the game continues.<br><br>Once you've made your choice, click the submit button to start playing. Goodluck!");
};

var runNormalGame = function (userGuess, spsOutput) {
  //if function to validate input and run normal SPS rules
  if (userGuess == "scissors" || userGuess == "paper" || userGuess == "stone") {
    trackWinningStats(getGameOutcome(userGuess, spsOutput));
    normalGameOutput = getNormalOutputMessage(
      userGuess,
      spsOutput,
      getGameOutcome(userGuess, spsOutput),
      numUserWins,
      numGames
    );
  }
  //if function to switch to reversed rules if reversed input is entered
  if (
    userGuess == "reversed scissors" ||
    userGuess == "reversed paper" ||
    userGuess == "reversed stone"
  ) {
    trackWinningStats(getReversedGameOutcome(userGuess, spsOutput));
    normalGameOutput = getNormalOutputMessage(
      userGuess,
      spsOutput,
      getReversedGameOutcome(userGuess, spsOutput),
      numUserWins,
      numGames
    );
  }
  return normalGameOutput;
};
