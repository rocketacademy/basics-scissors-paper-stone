// set global variables
var numGamesDraw = 0;
var numGamesWon = 0;
var numGamesPlayed = 0;
var currentGameMode = "enter user name";
console.log(currentGameMode);
var userName = "";

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

// ------------------  Main game ---------------------------------
//--------------------Main game ---------------------------------

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "enter user name") {
    // setting the user name
    userName = input;
    // change the game mode to SPS.
    currentGameMode = "SPS";
    myOutputValue = `Hello ${userName}! Let's start playing!`;
    console.log(currentGameMode);
  } else if (currentGameMode == "SPS") {
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
    myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>You played ${input} ${iconPlayer}.<br>You lost ='( <br>${userName}, you have played ${numGamesPlayed} games and your win percentage is ${percentageWin()}%.<br>Lets play another round!`;

    // IF condition to determine if player has input an invalid guess with corresponding. output.
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
  }
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
