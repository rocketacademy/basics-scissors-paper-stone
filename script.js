var players = [];
var numOfGames = 0;
var playing = false;

var diceRoll = function (num) {
  var randomDecimal = Math.random() * num;
  var randomNumber = Math.floor(randomDecimal) + 1;
  return randomNumber;
};

var createPlayers = function () {
  var playerNames = ["Human", "Computer"];
  var playerIdentity = ["player--1", "player--2"];
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
      player: playerName,
      score: scores,
      ID: currentPlayer,
      card: card,
    };
    players.push(playerObject);
  }
};

var randomObjectSelect = function () {
  var randomNumber = diceRoll(3);
  var cardArray = ["scissors", "paper", "stone"];
  var cardPicked = cardArray[randomNumber - 1];
  return cardPicked;
};

var initGame = function () {
  players = [];
  numOfGames = 0;
  playing = true;
};

var whoWinsEndGame = function (numOfPlays) {
  var humanScore = players[0].score;
  var computerScore = players[1].score;
  var winner;
  if (playing && numOfPlays == 10) {
    if (humanScore > computerScore) {
      winner = `<br/><br/>You win, game ends. <br/><br/> Please click submit to restart`;
      playing = false;
    } else if (computerScore > humanScore) {
      winner = `<br/><br/>Computer wins, game ends. <br/><br/> Please click submit to restart`;
      playing = false;
    } else if (computerScore == humanScore) {
      winner = `It is a draw 🥱`;
      playing = false;
    }
  } else {
    winner = `<br/><br/>📣 Oh goody!!`;
  }
  return winner;
};

// input scissors
var inputScissors = function (input) {
  var randomObject = randomObjectSelect();

  if (randomObject == "paper") {
    var human = players[0];
    human.score += 1;
    var scores = playersScoreDisplay();
    var myOutputValue = `💯Computer picks ${randomObject}. <br/><br/> You win. <br/><br/> ${scores}`;
  } else if (input == randomObject) {
    var scores = playersScoreDisplay();
    myOutputValue = `💯Computer picks ${randomObject}. <br/><br/> It is a draw. <br/><br/> ${scores}`;
  } else {
    var computer = players[1];
    computer.score += 1;
    var scores = playersScoreDisplay();
    myOutputValue = `💢Computer picks ${randomObject} and wins. You lose !! <br/><br/> ${scores}`;
  }

  return myOutputValue;
};

// input paper
var inputPaper = function (input) {
  var randomObject = randomObjectSelect();
  console.log(randomObject);
  if (randomObject == "stone") {
    var human = players[0];
    human.score += 1;
    var scores = playersScoreDisplay();
    var myOutputValue = `💯Computer picks ${randomObject}. <br/><br/> You win. <br/><br/> ${scores}`;
  } else if (input == randomObject) {
    var scores = playersScoreDisplay();
    myOutputValue = `💯Computer picks ${randomObject}. <br/><br/> It is a draw. <br/><br/> ${scores}`;
  } else {
    var computer = players[1];
    computer.score += 1;
    var scores = playersScoreDisplay();
    myOutputValue = `💢Computer picks ${randomObject}. <br/><br/> Computer wins. You lose ! <br/><br/> ${scores}`;
  }
  return myOutputValue;
};

// input stone
var inputStone = function (input) {
  var randomObject = randomObjectSelect();
  console.log(randomObject);
  if (randomObject == "scissors") {
    var human = players[0];
    human.score += 1;
    var scores = playersScoreDisplay();
    var myOutputValue = `💯Computer picks ${randomObject}.<br/><br/> You win.<br/> <br/> ${scores}`;
  } else if (input == randomObject) {
    var scores = playersScoreDisplay();
    myOutputValue = `💯Computer picks ${randomObject}. <br/><br/> It is a draw. <br/><br/> ${scores}`;
  } else {
    var computer = players[1];
    computer.score += 1;
    var scores = playersScoreDisplay();
    myOutputValue = `💢Computer picks ${randomObject} and wins. You lose ! <br/><br/> ${scores}`;
  }
  return myOutputValue;
};

var playersScoreDisplay = function () {
  var humanPlayerScore = players[0].score;
  var computerPlayerScore = players[1].score;
  numOfGames += 1;
  return `Human score is ${humanPlayerScore}, Computer score is ${computerPlayerScore}. <br/><br/> ${numOfGames} of 10 games.`;
};

initGame();
createPlayers();
var main = function (input) {
  var input;
  if (input == "") {
    initGame();
    createPlayers();
    var myOutputValue = `To restart, click submit. <br/><br/> or else, to make a selection, please input either of:<br/><br/> ✂ scissors; 📰 paper; 🥌 stone.`;
  }
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

  if (!playing && input !== "") {
    myOutputValue = `😒😒😒 Please press submit to restart`;
  }
  if (playing && input == "scissors") {
    myOutputValue = inputScissors(input);
  }
  if (playing && input == "paper") {
    myOutputValue = inputPaper(input);
  }

  if (playing && input == "stone") {
    myOutputValue = inputStone(input);
  }

  var whoWinsEnd = whoWinsEndGame(numOfGames);

  return myOutputValue + whoWinsEnd;
};
