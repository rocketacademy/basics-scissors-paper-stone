// global declared variables
var players = []; // holds an array of Objects : players of the game
var numOfGames = 0; // counter for the game to end
var playing = false; // need to control when game ends and starts anew
var promptPlayer = ""; // falsy
var mode = "green";

// prompts person to enter name
var promptForName = function () {
  if (!promptPlayer) {
    promptPlayer = prompt(
      "😅😅 Please tell us your name before 👉 'SUBMIT' to start a NEW game"
    );
  } // second prompt if no input as prompter remains falsy
  if (!promptPlayer) {
    promptPlayer = prompt("C'mon, game won't start until we hear your name 😂");
  }
  // 3rd prompt but allows the game to continue
  if (!promptPlayer) {
    promptPlayer = "🤣No-Name-Human";
  }
  playing = true;
  return promptPlayer;
};

// function that dials a random number up to a preset maximum
var diceRoll = function (num) {
  var randomDecimal = Math.random() * num; //random number generator. num will be a preset parsed argument.
  var randomNumber = Math.floor(randomDecimal) + 1; // to remove decimal, but add "one" to ensure to count up to parsed "num"
  return randomNumber;
};

// create players function that creates player objects that can store scores won; name of players ; identity or an array of cards if needed.
var createPlayers = function (nameOfPlayer) {
  var playerNames = [nameOfPlayer, "Computer"];
  console.log(nameOfPlayer);
  var playerIdentity = ["player--1", "player--2"]; // extra stuff, not needed in this project but useful for more complex situations
  // for loop
  for (
    var currentIndex = 0;
    currentIndex < playerNames.length;
    currentIndex++
  ) {
    var playerName = playerNames[currentIndex];
    var currentPlayer = playerIdentity[currentIndex];
    var scores = 0;
    var card;

    var playerObject = {
      player: playerName, // stores player names or whatever you wish to call them
      score: scores, // scores are stored in here within the objects
      ID: currentPlayer, // not highly useful in this project, but can be utilised in more complex situations
      card: card, // object card that can be configured to hold an array of objects e.g. cards
    };
    players.push(playerObject); // add object to players = []
  }
};

// function that randomly selects either scissors, paper or stone
var randomObjectSelect = function () {
  randomNumber = diceRoll(3); // number "3" parsed and to count up and including 3 ====BEWARE==== @ line 41
  var cardArray = ["scissors", "paper", "stone"];
  var cardPicked = cardArray[randomNumber - 1]; // very common issue. =====BEWARE======, decide whether "- 1 " is needed as diceRoll is used.
  return cardPicked;
};
// InitGame function resets game to ground zero
var initGame = function () {
  players = [];
  numOfGames = 0;
  playing = false;
  promptPlayer = "";
  mode = "green";
};

// whoWinsEndGame determines when game ends and declare the winner
var whoWinsEndGame = function (numOfPlays) {
  var humanScore = players[0].score;
  var computerScore = players[1].score;
  var winner;
  // note that game is preset to end at game number "10"
  if (playing && numOfPlays == 10) {
    if (humanScore > computerScore) {
      winner = `<br/><br/>${promptPlayer} win, game ends. <br/><br/> Please click SUBMIT to restart.`;
      playing = false; // to end the game
    } else if (computerScore > humanScore) {
      winner = `<br/><br/> 👿Computer wins, game ends. <br/><br/> Please click SUBMIT to restart.`;
      playing = false;
    } else if (computerScore == humanScore) {
      winner = `It is a draw 🥱, click SUBMIT to restart.`;
      playing = false;
    }
    // just for show to eliminate output "undefined"
  } else {
    winner = `<br/><br/>📣 Oh goody!!`;
  }
  return winner;
};

// input scissors function that determines win or lose condition
var inputScissors = function (input) {
  randomObject = randomObjectSelect();
  // human wins
  if (randomObject == "paper") {
    var human = players[0];
    human.score += 1; // increases human score by one for game won
    scores = playersScoreDisplay();
    myOutputValue = `💯Computer picks ${randomObject}. <br/><br/> ${promptPlayer} wins. <br/><br/> ${scores}`;
  } // draw game
  else if (input == randomObject) {
    scores = playersScoreDisplay();
    myOutputValue = `😒Computer picks ${randomObject}. <br/><br/> It is a draw. <br/><br/> ${scores}`;
  } // computer wins
  else {
    var computer = players[1];
    computer.score += 1;
    scores = playersScoreDisplay();
    myOutputValue = `💢Computer picks ${randomObject} and wins. ${promptPlayer} lose !! <br/><br/> ${scores}`;
  }

  return myOutputValue;
};

// input paper function that determines win or lose result
var inputPaper = function (input) {
  randomObject = randomObjectSelect();
  // human wins
  if (randomObject == "stone") {
    human = players[0];
    human.score += 1; // increases human score by one for the game won
    scores = playersScoreDisplay();
    myOutputValue = `💯Computer picks ${randomObject}. <br/><br/> ${promptPlayer} win. <br/><br/> ${scores}`;
  } // draw game
  else if (input == randomObject) {
    scores = playersScoreDisplay();
    myOutputValue = `☠ Computer picks ${randomObject}. <br/><br/> It is a draw. <br/><br/> ${scores}`;
  } //computer wins
  else {
    computer = players[1];
    computer.score += 1; // increases computer score by one when wins
    scores = playersScoreDisplay();
    myOutputValue = `💢Computer picks ${randomObject}. <br/><br/> Computer wins. ${promptPlayer} lose ! <br/><br/> ${scores}`;
  }
  return myOutputValue;
};

// input stone function that determines win or lose result
var inputStone = function (input) {
  randomObject = randomObjectSelect();
  // human wins
  if (randomObject == "scissors") {
    human = players[0]; // extract object human in array
    human.score += 1; // increase human score by one for the game won
    scores = playersScoreDisplay();
    myOutputValue = `💯Computer picks ${randomObject}.<br/><br/> ${promptPlayer} win.<br/> <br/> ${scores}`;
  } // draw game
  else if (input == randomObject) {
    scores = playersScoreDisplay();
    myOutputValue = `🥱Computer picks ${randomObject}. <br/><br/> It is a draw. <br/><br/> ${scores}`;
  } // computer wins
  else {
    computer = players[1]; //extract object computer in array
    computer.score += 1; // increases computers score by one for game won
    scores = playersScoreDisplay();
    myOutputValue = `💢Computer picks ${randomObject} and wins. ${promptPlayer} lose ! <br/><br/> ${scores}`;
  }
  return myOutputValue;
};

// function to output to browser in template literal format of latest scores
var playersScoreDisplay = function () {
  var humanPlayerScore = players[0].score; // extracts human player score
  var computerPlayerScore = players[1].score; // extracts computer player score
  numOfGames += 1; // acts as a counter to end the game at preset game number "tenth". One game is worth "one"
  return `${promptPlayer} score is ${humanPlayerScore}, Computer score is ${computerPlayerScore}. <br/><br/> ${numOfGames} of 10 games.`;
};

// function that outputs to the browser
var main = function (input) {
  // only allows SUBMIT to restart game when mode is "red"
  if (input == "" && mode == "red") {
    initGame();
    promptPlayer = promptForName();
    createPlayers(promptPlayer);
    myOutputValue = `<br/>☀☀ G'day ${promptPlayer} ☀☀<br><br>The game has started.<br/><br/>To restart game, simply click "SUBMIT"<br/><br/>To make a selection, please input either of:<br/><br/> ✂ scissors; 📰 paper; 🥌 stone.`;
  }
  // flow control to start game and introduce the inputs
  if (input == "" && mode == "green") {
    createPlayers(promptPlayer);
    mode = "red";
    myOutputValue = `<br/>☀☀ G'day ${promptPlayer} ☀☀<br><br>The game has started.<br/><br/>To restart game, simply click "SUBMIT"<br/><br/>To make a selection, please input either of:<br/><br/> ✂ scissors; 📰 paper; 🥌 stone.`;
  }
  // to guide player at outset i.e green mode to press SUBMIT and nothing else to start game
  if (mode == "green" && input !== "") {
    return `😠😅 Please press SUBMIT to start the game.`;
  }

  // to guide player when incorrect input inserted, playing is a boolean which is "true"
  if (
    playing &&
    !(
      input == "scissors" ||
      input == "paper" ||
      input == "stone" ||
      input == ""
    )
  ) {
    myOutputValue = `Please only input "scissors" ; "paper" or "stone" in small caps`;
  }

  // to guide player to restart game when game ends
  if (!playing && input !== "") {
    myOutputValue = `😒😒😒 Please press submit to restart`;
  } // when "scissors" is input
  if (playing && input == "scissors") {
    myOutputValue = inputScissors(input);
  } // when "paper" is input
  if (playing && input == "paper") {
    myOutputValue = inputPaper(input);
  } //when "stone" is input
  if (playing && input == "stone") {
    myOutputValue = inputStone(input);
  }
  // decides whether to end the game and declare the winner
  whoWinsEnd = whoWinsEndGame(numOfGames);
  var myImage =
    '<img src="https://c.tenor.com/EnRojaH2AH4AAAAM/confused-meme.gif"/><br/><br/>';
  // to give value to main to output to browser
  return myImage + myOutputValue + whoWinsEnd;
};

promptPlayer = promptForName();
