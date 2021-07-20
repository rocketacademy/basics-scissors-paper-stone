// PROJECT 1 : Scissors Paper Stone
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
// user win, lose or draw

var roundsPlayerWin = 0;
var roundsSystemWin = 0;
var roundsDraw = 0;
var gameMode = "Please key in your name!";
var username = "";

// create random number generator to represent the three actions
var generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  var sps = "";
  if (randomNumber == 0) {
    return "scissors";
  }
  if (randomNumber == 1) {
    return "paper";
  }
  if (randomNumber == 2) {
    return "stone";
  }
  return sps;
};

var spsGame = function (username, playerGuess) {
  var randomSPS = generateRandomNumber();
  var systemChoiceStatement = `Computer chose ${randomSPS}`;
  var inputChoiceStatement = `You chose ${playerGuess}`;
  var anotherRoundStatement = `Now you can type "scissors" "paper" or "stone" to play another round!`;
  console.log(randomSPS);

  var message = `${username}, something went wrong! <br> This round is not recorded. <br><br> Please try again with inputs "scissors", "paper" or "stone".`;

  ///// THE BASIC SPS /////
  // win conditions
  if (
    (playerGuess == "scissors" && randomSPS == "paper") ||
    (playerGuess == "paper" && randomSPS == "stone") ||
    (playerGuess == "stone" && randomSPS == "scissors")
  ) {
    roundsPlayerWin = roundsPlayerWin + 1;
    message = `${username}, you win! Lucky!`;
  }

  // lose conditions
  if (
    (playerGuess == "scissors" && randomSPS == "stone") ||
    (playerGuess == "paper" && randomSPS == "scissors") ||
    (playerGuess == "stone" && randomSPS == "paper")
  ) {
    roundsSystemWin = roundsSystemWin + 1;
    message = `${username}, you lose! Bummer!`;
  }

  // draw conditions
  if (playerGuess == randomSPS) {
    roundsDraw = roundsDraw + 1;
    message = `${username}, you draw! Another round!`;
  }

  ///// THE REVERSED SPS /////
  // win conditions
  if (
    (playerGuess == "reversed scissors" && randomSPS == "stone") ||
    (playerGuess == "reversed paper" && randomSPS == "scissors") ||
    (playerGuess == "reversed stone" && randomSPS == "paper")
  ) {
    roundsPlayerWin = roundsPlayerWin + 1;
    message = `${username}, you win! Lucky!`;
  }

  // lose conditions
  if (
    (playerGuess == "reversed scissors" && randomSPS == "paper") ||
    (playerGuess == "reversed paper" && randomSPS == "stone") ||
    (playerGuess == "reversed stone" && randomSPS == "scissors")
  ) {
    roundsSystemWin = roundsSystemWin + 1;
    message = `${username}, you lose! Bummer!`;
  }

  // draw conditions
  if (playerGuess == `reversed ` + randomSPS) {
    roundsDraw = roundsDraw + 1;
    message = `${username}, you draw! Another round!`;
  }
  var totalGames = roundsPlayerWin + roundsSystemWin + roundsDraw;
  var winningPercentage = ((100 * roundsPlayerWin) / totalGames).toFixed(2);

  var goodOrBadStatement = function () {
    if (winningPercentage > 50) {
      return `You've win more than half the games! Pretty good!`;
    } else if (winningPercentage < 50) {
      return `You've win less than half the games! Try harder!`;
    } else if ((winningPercentage = 50)) {
      return `You've win exactly half the games!`;
    }
  };

  return (
    message +
    "<br>" +
    "<br>" +
    systemChoiceStatement +
    "<br>" +
    inputChoiceStatement +
    "<br>" +
    "<br>" +
    anotherRoundStatement +
    "<br>" +
    "<br>" +
    `Rounds won: ${roundsPlayerWin}. <br> Round lost: ${roundsSystemWin}. <br> Rounds draw: ${roundsDraw}. <br> Winning percentage: ${winningPercentage}%` +
    "<br>" +
    "<br>" +
    goodOrBadStatement()
  );
};

var main = function (input) {
  var myOutputValue = ``;

  if (gameMode == "Please key in your name!" && input == "") {
    myOutputValue = `Please key in your name!`;
  } else if (gameMode == "Please key in your name!" && input !== "") {
    username = input;
    gameMode = `scissors paper stone!`;
    myOutputValue = `Hello ${username}. <br> To play the game, key in "scissors", "paper" or "stone" and submit.`;
  } else if ((gameMode = `scissors paper stone!`)) {
    myOutputValue = spsGame(username, input);
  }
  return myOutputValue;
};
