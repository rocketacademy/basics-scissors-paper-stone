//Final version of the game. This one compares the names of the input with a number generated that has been converted to either Rock, Paper, or Scissors

//Global variables to count wins and losses
var winCounter = 0;
var lossCounter = 0;
var drawCounter = 0;

var currentMode = "standing by for username";
var userName = "";

//MAIN FUNCTION
var main = function (input) {
  console.log(">>>Running Program. Current mode: " + currentMode);

  //Step 2normal: Running normal game of Rock Paper Scissors
  if (currentMode == "waiting for player mode choice" && input == "Normal") {
    var myOutputValue = `Your game mode is now: 'Normal'. Now, type 'Rock', 'Paper', or 'Scissors' into the input. <br/><br/>Remember: Paper > Rock, Scissors > Paper, Rock > Scissors.<br/><br/>
      Let's see who wins!`;
    currentMode = "Normal";
    console.log(`. Player Name: ${userName}. Mode changed to: ${currentMode}`);
    console.log(
      `Counter status (Win-Loss-Draw): ${winCounter}-${lossCounter}-${drawCounter}`
    );
  }
  //Step 2korean: Running korean version of RPS
  if (currentMode == "waiting for player mode choice" && input == "Korean") {
    currentMode = "Korean";
    var myOutputValue = `Your game mode is now: 'Korean'. Now, type 'Rock', 'Paper', or 'Scissors' into the input.`;
    console.log(`. Player Name: ${userName}. Mode changed to: ${currentMode}`);
    console.log(
      `Counter status (Win-Loss-Draw): ${winCounter}-${lossCounter}-${drawCounter}`
    );
  }
  //Step2invalid: validation of user input
  if (
    currentMode == "waiting for player mode choice" &&
    input !== ("Normal" || "Korean")
  ) {
    return "Please enter 'Normal' or 'Korean'.";
  }

  //Step 1a
  if (input == "") {
    //Displays default message with empty input box
    currentMode = "standing by for username";
    console.log("WELCOME working. Current mode: " + currentMode);
    return "Hello, please enter your name to start.";
  }

  //Step 1b
  if (input !== "" && currentMode == "standing by for username") {
    //Display rules of game
    userName = input; //Player sets name
    currentMode = "waiting for player mode choice";
    var myOutputValue = //Output message to choose game mode
      "Hi " +
      userName +
      `! Let's play a game of Rock, Paper, Scissors! <br/> There are two game types: Normal or Korean. <br/> Please choose your game mode by typing in 'Normal' or 'Korean'.`;
    console.log(
      `Name Saved. Player Name: ${userName}. Mode changed to: ${currentMode}`
    );
  }

  //Choosing what functions run depending on Game Mode entered
  //Normal game mode
  if (currentMode == "Normal" && input !== "Normal") {
    var myOutputValue = normalGame(input);
  }
  if (currentMode == "Korean" && input !== "Korean") {
    var myOutputValue = koreanGame(input);
  }
  return myOutputValue;
};

//Function for Normal Game mode
var normalGame = function (input) {
  if (input == "Rock" || input == "Paper" || input == "Scissors") {
    var rNG = randomNumberGenerator();
    var convertedToItem = rngConversion(rNG);
    var myOutputValue = normalRPS(input, convertedToItem);
    return myOutputValue;
  }
};
//Function for Korean Game mode
var koreanGame = function (input) {
  if (input == "Rock" || input == "Paper" || input == "Scissors") {
    var rNG = randomNumberGenerator();
    var convertedToItem = rngConversion(rNG);
    var myOutputValue = koreanRPS(input, convertedToItem);
    return myOutputValue;
  }
};

//Generating a number
var randomNumberGenerator = function () {
  var randomNumber = Math.random() * 3;
  var numberCleanedUp = Math.floor(randomNumber);
  console.log(`RNG working. Number generated: ${numberCleanedUp}`);
  return numberCleanedUp;
};

//Assigning an item to each generated number ("Rock" - 0, "Paper" - 1, or "Scissors" - 2)
var rngConversion = function (numberCleanedUp) {
  if (numberCleanedUp == 0) {
    var generatedItem = "Rock";
  }
  if (numberCleanedUp == 1) {
    var generatedItem = "Paper";
  }
  if (numberCleanedUp == 2) {
    var generatedItem = "Scissors";
  }
  console.log(`Converter working. RNGenerated item is: ${generatedItem}`);
  return generatedItem;
};

//Normal Rock Paper Scissors (RPS) calculations
var normalRPS = function (input, generatedItem) {
  console.log("Running normal game.");
  var user = input;
  var program = generatedItem;
  //Code for stalemate condition & output message
  if (user == program) {
    drawCounter = drawCounter + 1;
    var myOutputValue = `It's a draw, ${userName}! <br/>You chose ${input}, and we chose ${generatedItem}<br/>  <br/>Your current tally is:<br/>Wins   - ${winCounter}<br/>Losses - ${lossCounter} <br/>Draws  - ${drawCounter}`;
  }
  //Code for winning conditions & output message
  if (
    (user == "Scissors" && program == "Paper") ||
    (user == "Paper" && program == "Rock") ||
    (user == "Rock" && program == "Scissors")
  ) {
    winCounter = winCounter + 1;
    var myOutputValue = `Congratulations, ${userName}, A WINNER IS YOU! <br/>You chose ${input}, and we chose ${generatedItem}<br/><br/>Your current tally is:<br/>Wins   - ${winCounter}<br/>Losses - ${lossCounter} <br/>Draws  - ${drawCounter}`;

    //Code for losing conditions & output message
  } else if (user !== program) {
    lossCounter = lossCounter + 1;
    var myOutputValue = `Sorry, ${userName}, you've lost! Want to try again?<br/>You chose ${input}, and we chose ${generatedItem}<br/><br/>Your current tally is:<br/>Wins   - ${winCounter}<br/>Losses - ${lossCounter} <br/>Draws  - ${drawCounter}`;
  }
  console.log("Game complete.");
  return myOutputValue;
};

var counterReset = function () {
  //Many thanks to Dong Kun for teaching me this! Resets counter.
  winCounter = 0;
  lossCounter = 0;
  drawCounter = 0;
};

//Korean Rock Paper Scissors (RPS) calculations
var koreanRPS = function (input, generatedItem) {
  console.log("Running Korean game.");
  var user = input;
  var program = generatedItem;
  //Stalemate on first round
  if (user == program && winCounter == 0 && lossCounter == 0) {
    var myOutputValue = `Round one is a draw! Game has been reset. <br/>You chose ${input}, and we chose ${generatedItem}.`;
    console.log("Counters");
  }
  //Player wins first round
  if (
    (user == "Scissors" && program == "Paper") ||
    (user == "Paper" && program == "Rock") ||
    (user == "Rock" && program == "Scissors")
  ) {
    winCounter = winCounter + 1;
    var myOutputValue =
      "You've won this round! You chose " +
      input +
      ", and we chose " +
      generatedItem +
      ". You need to draw the next round to win the game!";
  } else if (user !== program) {
    //Program wins first round
    lossCounter = lossCounter + 1;
    var myOutputValue = `You've lost this round. If the next round is a draw, you lose the game! <br/>You chose ${input}, and we chose ${generatedItem}.`;
  }
  //Player wins second round with a draw
  if (user == program && winCounter == 1 && lossCounter == 0) {
    drawCounter = drawCounter + 1;
    var myOutputValue = `Congratulations, ${userName}! You've won Muk-jji-ppa! <br/>You chose ${input}, and we chose ${generatedItem}.`;
    counterReset();
  }
  //Program wins second round with a draw
  if (user == program && lossCounter == 1 && winCounter == 0) {
    drawCounter = drawCounter + 1;
    var myOutputValue = `You lose this game of Muk-jji-ppa! Want to try again? <br/>You chose ${input}, and we chose ${generatedItem}.`;
    counterReset();
  }
  //No winners conditions
  if (
    winCounter == 2 || //If player wins twice in a row, reset game
    lossCounter == 2 || //If program wins twice in a row, reset game
    (winCounter == 1 && lossCounter == 1) //If round 1 is a win, but round 2 is a loss
  ) {
    var myOutputValue =
      "Round two is invalid, resulting in no winner of Muk-jji-ppa. Try again?";
    counterReset();
  }
  console.log(
    ". Player item vs program item: " + input + " vs. " + generatedItem
  );
  console.log("Player Name: " + userName + ". Current mode: " + currentMode);
  console.log(
    "Counter status (Win-Loss-Draw): " +
      winCounter +
      "-" +
      lossCounter +
      "-" +
      drawCounter
  );
  console.log("Game complete.");
  return myOutputValue;
};

/*WORK IN PROGRESS
//Allows for mode change between games
var inGameModeChanger = function (input) {
  if ((currentMode = "Korean" && input == "Normal")) {
    currentMode = "Normal";
    var myOutputValue = "Mode switched to Normal!";
    console.log(
      "Player Name: " + userName + "Mode changed to " + currentMode + "."
    );
  }
  if ((currentMode = "Normal" && input == "Korean")) {
    currentMode = "Korean";
    var myOutputValue = "Mode switched to Korean!";
    console.log(
      "Player Name: " + userName + "Mode changed to " + currentMode + "."
    );
  }
  return myOutputValue;
};
*/
