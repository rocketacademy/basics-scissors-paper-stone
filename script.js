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
  var randomDecimal = Math.random() * num; //random number generator.
  var randomNumber = Math.floor(randomDecimal) + 1; // remove decimal. Add one to include num.
  return randomNumber;
};

// create players function that creates player objects that can store as properties.
var createPlayers = function (nameOfPlayer) {
  var playerNames = [nameOfPlayer, "Computer"];
  var playerIdentity = ["player--1", "player--2"]; // extra stuff
  // for loop
  for (
    var currentIndex = 0;
    currentIndex < playerNames.length;
    currentIndex++
  ) {
    var playerName = playerNames[currentIndex];
    var currentPlayer = playerIdentity[currentIndex];
    var scores = 0;
    var cards;

    var playerObject = {
      player: playerName, // stores player names or whatever you wish to call them
      score: scores, // scores are stored in here within the objects
      ID: currentPlayer, // not highly useful in this project
      card: cards, // object card that can be configured to hold an array of objects e.g. cards
    };
    players.push(playerObject); // add object to players = []
  }
};

// function that randomly selects either scissors, paper or stone
var randomObjectSelect = function () {
  var randomNumber = diceRoll(3); // number "3" parsed and to count up and including 3.
  var cardArray = ["scissors", "paper", "stone"];
  var cardPicked = cardArray[randomNumber - 1]; // watch for -1 bug
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
  } else {
    winner = ` Nice one !`;
  }
  return winner;
};
// function to output to browser in template literal format of latest scores
var playersScoreDisplay = function () {
  var humanPlayerScore = players[0].score; // extracts human player score
  var computerPlayerScore = players[1].score; // extracts computer player score
  numOfGames += 1; // acts as a counter to end the game at preset game number "tenth".
  return `${promptPlayer} score is ${humanPlayerScore}, Computer score is ${computerPlayerScore}. <br/><br/> ${numOfGames} of 10 games.`;
};
// function deciding winner
var scissorsPaperStoneCheck = function (SPS) {
  var computerSelection = randomObjectSelect();
  var humanSelection = players[0].player;
  // human wins
  if (
    (computerSelection == "paper" && SPS == "scissors") ||
    (computerSelection == "stone" && SPS == "paper") ||
    (computerSelection == "scissors" && SPS == "stone")
  ) {
    var human = players[0];
    human.score += 1; // increases human score by one for game won
    var scores = playersScoreDisplay();
    var myOutputValue = `${humanSelection} picked ${SPS}. 💯Computer picks ${computerSelection}. <br/><br/> ${promptPlayer} wins. <br/><br/> ${scores}`;
  }
  // draw game
  else if (computerSelection == SPS) {
    scores = playersScoreDisplay();
    myOutputValue = `${humanSelection} picked ${SPS}. 😒Computer picks ${computerSelection}. <br/><br/> It is a draw. <br/><br/> ${scores}`;
  }
  // computer wins
  else {
    var computer = players[1];
    computer.score += 1;
    scores = playersScoreDisplay();
    myOutputValue = `${humanSelection} picked ${SPS}. 💢Computer picks ${computerSelection} and wins. .<br/><br/>${promptPlayer} loses !! <br/><br/> ${scores}`;
  }
  var whoWinsEnd = whoWinsEndGame(numOfGames);
  return myOutputValue + whoWinsEnd;
};

// function that outputs to the browser
var main = function (input) {
  // initiates game, prompts players name and guide appropriate inputs
  if ((input == "" && mode == "red") || (input == "" && mode == "green")) {
    // red mode means manual restart which then prompts player's name
    if (mode == "red") {
      initGame();
      promptPlayer = promptForName();
    } // green mode means auto player name prompt when browser first starts
    if (mode == "green") {
      mode = "red";
    }
    createPlayers(promptPlayer);
    var myOutputValue = `<br/>☀☀ G'day ${promptPlayer} ☀☀<br><br>The game has started.<br/><br/>To restart game, simply click "SUBMIT"<br/><br/>To make a selection, please input either of:<br/><br/> ✂ scissors; 📰 paper; 🥌 stone.`;
  }
  // guide player to press restart when game ends
  if (!playing && input !== "") {
    myOutputValue = `😒😒😒 Please press submit to restart`;
  }
  if (playing) {
    if (input == "scissors" || input == "paper" || input == "stone") {
      var winResult = scissorsPaperStoneCheck(input);
      return winResult;
    } else if (input !== "") {
      myOutputValue = `Please only input "scissors" ; "paper" or "stone" in small caps`;
    }
  }
  // fancy image for fun
  var myImage =
    '<img src="https://c.tenor.com/EnRojaH2AH4AAAAM/confused-meme.gif"/><br/><br/>';

  return myImage + myOutputValue;
};
// required for auto prompt when browser initial start
promptPlayer = promptForName();
