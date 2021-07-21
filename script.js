// set global variables
// to track games and progress
var numGamesDraw = 0;
var numGamesWon = 0;
var numGamesPlayed = 0;

// to set game mode
var currentGameMode = "enter user name";
console.log(currentGameMode);

// to set user name
var userName = "";

// for Korean game
var lastWinner = 0;

//set function to return percentage win
var percentageWin = function () {
  var winRate = Math.floor((numGamesWon / numGamesPlayed) * 100);
  return winRate;
};

// function to generate random computer move
var randomItem = function () {
  var random = Math.floor(Math.random() * 3);
  var programMove = "stone";
  if (random == 1) {
    programMove = "scissors";
  }
  if (random == 2) {
    programMove = "paper";
  }
  return programMove;
};

// function to determine when game is a draw where computer's move and players move is the same.
var drawGame = function (input, computerMove) {
  return input == computerMove;
};

// function to determine when player wins in normal mode
var playerWin = function (input, computerMove) {
  return (
    (input == "scissors" && computerMove == "paper") ||
    (input == "stone" && computerMove == "scissors") ||
    (input == "paper" && computerMove == "stone")
  );
};

// function to determine when player wins in reversed mode
// created another var so that we do not need to change the number of games and won percentage logic etc
var playerWinReserved = function (input, computerMove) {
  return (
    (input == "stone" && computerMove == "paper") ||
    (input == "paper" && computerMove == "scissors") ||
    (input == "scissors" && computerMove == "stone")
  );
};

// function to determine when player inputs an invalid guess.
var invalid = function (input) {
  return input != "scissors" && input != "stone" && input != "paper";
};

// function to determine when player loses (this is for Korean mode)
var playerLose = function (input, computerMove) {
  return (
    (input == "stone" && computerMove == "paper") ||
    (input == "paper" && computerMove == "scissors") ||
    (input == "scissors" && computerMove == "stone")
  );
};

// function to return the logo corresponding to the move.
var iconLogo = function (look) {
  var logo = "none";
  if (look == "scissors" || look == "reversed scrissors") {
    logo = "✂️";
  }
  if (look == "paper" || look == "reversed paper") {
    logo = "📜";
  }
  if (look == "stone" || look == "reversed stone") {
    logo = "🗿";
  }
  return logo;
};

// ------------------  Main game ---------------------------------
//-------------------- Main game ---------------------------------

// define main function to enter different game modes and versions
var main = function (input) {
  var myOutputValue = "";
  console.log(currentGameMode);
  if (input == "refresh") {
    currentGameMode = "Choose your game";
    myOutputValue = `Hello ${userName}! Please choose the game mode you'll like to play. <br><br>Type in "Normal", "Reversed", "Korean", "AI"`;
  } else if (currentGameMode == "enter user name") {
    myOutputValue = setUserName(input);
  } else if (currentGameMode == "Choose your game") {
    myOutputValue = startGame(input);
  } else if (currentGameMode == "Normal") {
    myOutputValue = normalGame(input);
  } else if (currentGameMode == "Reversed") {
    myOutputValue = reversedGame(input);
  } else if (currentGameMode == "Korean") {
    myOutputValue = koreanGame(input);
  } else if (currentGameMode == "AI") {
    myOutputValue = aiGame(input);
  }
  // console log to track which game mode we are current in
  console.log("currentGameMode", currentGameMode);
  return myOutputValue;
};

//----------- Set user name game mode --------------------

var setUserName = function (playerName) {
  userName = playerName;
  currentGameMode = "Choose your game";
  var myOutputValue = `Hello ${userName}! Please choose the game mode you'll like to play. <br><br>Type in "Normal", "Reversed", "Korean", "AI"`;
  return myOutputValue;
};

// ----------- game mode to choose the type of game---------

var startGame = function (input) {
  var myOutputValue = `Please type "Normal", "Reversed", "Korean", "AI"`;
  if (input == "Normal") {
    currentGameMode = "Normal";
    myOutputValue = `You have selected ${input} as your game of choice! <br><br>This is the normal scissors, paper, stone game.<br><br>Start by typing in "scissors", "paper" or "stone"`;
  }
  if (input == "Reversed") {
    currentGameMode = "Reversed";
    myOutputValue = `You have selected ${input} as your game of choice! <br><br>This is the REVERSED of scissors, paper, stone game.<br><br>Start by typing in "scissors", "paper" or "stone"`;
  }
  if (input == "Korean") {
    currentGameMode = "Korean";
    myOutputValue = `You have selected ${input} as your game of choice! <br><br>The Ultimate Winner is determined in a draw game.<br><br>The Ultimate Winner is the previous winner when the current game is a draw!<br><br>Start by typing in "scissors", "paper" or "stone"`;
  }
  if (input == "AI") {
    currentGameMode = "AI";
    myOutputValue = `You have selected Computer Vs AI as your game of choice! <br><br>An AI machine will pick for you!<br><br>Start by pressing Submit`;
  }
  return myOutputValue;
};

// ------------------ Normal game mode ----------------------

var normalGame = function (input) {
  // to generate computer's move. console log to see response and verify outcome.
  var computerMove = randomItem();
  console.log("computer", computerMove);

  // to generate the icons for the moves
  var iconComputer = iconLogo(computerMove);
  console.log("iconComputer", iconComputer);
  var iconPlayer = iconLogo(input);
  console.log("iconPlayer", iconPlayer);

  // to call the win, draw, invalid functions in main to help determine outcome.
  var draw = drawGame(input, computerMove);
  var win = playerWin(input, computerMove);
  var tryAgain = invalid(input);

  //tracking of game progress
  numGamesPlayed += 1;
  console.log("numGamesPlayed", numGamesPlayed);

  //set base output as lose scenario
  var myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>You played ${input} ${iconPlayer}.<br>You lost ='( <br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;

  // IF condition to determine if player has input an invalid guess with corresponding output. To minus 1 game to counter the default +1 above
  if (tryAgain) {
    numGamesPlayed -= 1;
    myOutputValue = `Please type in scissors, paper or stone.`;
  }

  // IF condition to determine if player wins with corresponding output.
  if (win) {
    numGamesWon += 1;
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>You won!!!<br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;
  }

  // IF condition to determine if game is a draw with corresponding output.
  if (draw) {
    numGamesDraw += 1;
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw!<br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;
  }
  console.log("numGamesPlayed after ifs", numGamesPlayed);
  console.log("numGamesWon after", numGamesWon);
  return myOutputValue;
};

// -----------------Reversed game mode -------------------
// -------------------------------------------------------

// notes will only show the difference from Normal game mode

var reversedGame = function (input) {
  var computerMove = randomItem();
  console.log("computer", computerMove);

  var iconComputer = iconLogo(computerMove);
  console.log("iconComputer", iconComputer);
  var iconPlayer = iconLogo(input);
  console.log("iconPlayer", iconPlayer);

  var draw = drawGame(input, computerMove);

  // changed win condition with new variable
  var win = playerWinReserved(input, computerMove);
  var tryAgain = invalid(input);

  numGamesPlayed += 1;
  console.log("numGamesPlayed", numGamesPlayed);

  var myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>You played ${input} ${iconPlayer}.<br>You lost ='( <br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;

  if (tryAgain) {
    numGamesPlayed -= 1;
    myOutputValue = `Please type in scissors, paper or stone.`;
  }
  if (win) {
    numGamesWon += 1;
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>You won!!!<br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;
  }
  if (draw) {
    numGamesDraw += 1;
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw!<br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;
  }
  console.log("numGamesPlayed after ifs", numGamesPlayed);
  console.log("numGamesWon after", numGamesWon);
  return myOutputValue;
};

// --------------------- Korean Game Mode --------------------
// -----------------------------------------------------------

// notes will only show the difference from normal game mode

var koreanGame = function (input) {
  var computerMove = randomItem();
  console.log("computer", computerMove);
  var iconComputer = iconLogo(computerMove);

  console.log("iconComputer", iconComputer);
  var iconPlayer = iconLogo(input);
  console.log("iconPlayer", iconPlayer);

  var draw = drawGame(input, computerMove);
  var win = playerWin(input, computerMove);

  // new var of lose in order to track the previous winner.
  var lose = playerLose(input, computerMove);
  var tryAgain = invalid(input);

  var myOutputValue = "";

  if (tryAgain) {
    myOutputValue = `Please type in scissors, paper or stone.`;
  }
  if (win) {
    // global variable of last winner used here
    // Last winner 1 is when player wins
    lastWinner = 1;
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>You won this round<br>Now you need to draw in the next round!`;
  }
  if (lose) {
    // when computer wins, set last winner to 2
    lastWinner = 2;
    myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>You played ${input} ${iconPlayer}.<br> Computer won this round.<br>If next round is a draw, Computer wins...`;
  }

  // IF condition to take into account last winner in order to determine the ultimate winner
  if (draw) {
    if (lastWinner == 2) {
      myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw.<br>As computer won the previous game, computer is the Ultimate Winner!`;
    }
    if (lastWinner == 1) {
      myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw.<br> As ${userName} won the previous game, ${userName} is the Ultimate Winner!`;
    }
    // account for situation of first game draw and there is no previous winner
    if (lastWinner == 0) {
      myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw.<br> There is no previous winner, please play again.`;
    }
  }
  console.log("lastWinner", lastWinner);
  return myOutputValue;
};

// ---------------- Computer vs Computer (AI) mode ---------
// ---------------------------------------------------------

// notes will only show the difference from normal game mode

var aiGame = function () {
  var computerMove = randomItem();
  console.log("computer", computerMove);

  var iconComputer = iconLogo(computerMove);
  console.log("iconComputer", iconComputer);

  // add var for computer to select for player
  var playerMove = randomItem();

  // there is no need to into account players "input"
  var iconPlayer = iconLogo(playerMove);
  console.log("iconPlayer", iconPlayer);

  var draw = drawGame(playerMove, computerMove);
  var win = playerWin(playerMove, computerMove);

  numGamesPlayed += 1;
  console.log("numGamesPlayed", numGamesPlayed);

  // changed all the text to better describe the game

  var myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>AI played for you ${playerMove} ${iconPlayer}.<br>You lost ='( <br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;

  if (win) {
    numGamesWon += 1;
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>AI played for you ${playerMove} ${iconPlayer}.<br>You won!!!<br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;
  }

  if (draw) {
    numGamesDraw += 1;
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>AI played for you ${playerMove}.<br>It's a draw!<br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;
  }
  console.log("numGamesPlayed after ifs", numGamesPlayed);
  console.log("numGamesWon after ifs", numGamesWon);
  return myOutputValue;
};

/* -------------PART 1 with more comfortable--------------------
---------------------------------------------------------------

// function to generate random computer move
var randomItem = function () {
  var random = Math.floor(Math.random() * 3);
  var programMove = "stone";
  if (random == 1) {
    programMove = "scissors";
  }
  if (random == 2) {
    programMove = "paper";
  }
  return programMove;
};

// function to determine when game is a draw where computer's move and players move is the same.
var drawGame = function (input, computerMove) {
  return input.includes(computerMove);
};

// function to determine when player wins.
var playerWin = function (input, computerMove) {
  return (
    ((input == "scissors" || input == "reversed stone") &&
      computerMove == "paper") ||
    ((input == "stone" || input == "reversed paper") &&
      computerMove == "scissors") ||
    ((input == "paper" || input == "reversed scissors") &&
      computerMove == "stone")
  );
};

// function to determine when player inputs an invalid guess.
var invalid = function (input) {
  return (
    input != "scissors" &&
    input != "stone" &&
    input != "paper" &&
    input != "reversed scissors" &&
    input != "reversed stone" &&
    input != "reversed paper"
  );
};

// function to return the logo corresponding to the move.
var iconLogo = function (look) {
  var logo = "none";
  if (look == "scissors" || look == "reversed scrissors") {
    logo = "✂️";
  }
  if (look == "paper" || look == "reversed paper") {
    logo = "📜";
  }
  if (look == "stone" || look == "reversed stone") {
    logo = "🗿";
  }
  return logo;
};

// Main game

var main = function (input) {
  // to generate computer's move. console log to see response and verify outcome.
  var computerMove = randomItem();
  console.log("computer", computerMove);

  // to generate the icons for the moves
  var iconComputer = iconLogo(computerMove);
  console.log("iconComputer", iconComputer);
  var iconPlayer = iconLogo(input);
  console.log("iconPlayer", iconPlayer);

  // to call the win, draw, invalid functions in main to help determine outcome.
  var draw = drawGame(input, computerMove);
  var win = playerWin(input, computerMove);
  var tryAgain = invalid(input);

  //set base output as lose scenario
  var myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>You played ${input} ${iconPlayer}.<br>You lost ='( <br>Lets play another round!`;

  // IF condition to determine if player has input an invalid guess with corresponding. output.
  if (tryAgain) {
    myOutputValue = `Please type in scissors, paper or stone.`;
  }

  // IF condition to determine if player wins with corresponding output.
  if (win) {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>You won!!!<br>Lets play another round!`;
  }

  // IF condition to determine if game is a draw with corresponding output.
  if (draw) {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw!<br>Lets play another round!`;
  }
  return myOutputValue;
};

-------------------------------------------------------------------------------------------------------------------------------------
*/
