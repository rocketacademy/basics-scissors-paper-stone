var players = [];
var numOfGames = 1;
var playing = true;

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
  var cardPicked = cardArray[randomNumber];
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
  if (playing && numOfPlays == 1) {
    if (humanScore > computerScore) {
      winner = `<br/><br/>Human wins, game ends. <br/><br/> Please click submit to restart`;
      playing = false;
    } else if (computerScore > humanScore) {
      winner = `<br/><br/>Computer wins, game ends. <br/><br/> Please click submit to restart`;
      playing = false;
    } else if (computerScore == humanScore) {
      winner = `It is a draw 🥱`;
      playing = false;
    }
  } else {
    winner = `📣 Oh goody!!`;
  }
  return winner;
};

var inputScissors = function (input) {
  var randomObject = randomObjectSelect();
  var currentPlayer = players[0].ID;
  if (
    currentPlayer == "player--1" &&
    input == "scissors" &&
    randomObject == "paper"
  ) {
    var human = players[0];
    human.score += 1;
    var scores = playersScoreDisplay();
    var myOutputValue = `💯Human wins and ${scores}`;
  } else {
    var computer = players[1];
    computer.score += 1;
    var scores = playersScoreDisplay();
    myOutputValue = `💢Computer wins and ${scores}`;
  }

  return myOutputValue;
};
var inputPaper = function (input) {
  var randomObject = randomObjectSelect();
  var currentPlayer = players[0].ID;
  if (
    currentPlayer == "player--1" &&
    input == "paper" &&
    randomObject == "stone"
  ) {
    var human = players[0];
    human.score += 1;
    var scores = playersScoreDisplay();
    var myOutputValue = `💯Human wins and ${scores}`;
  } else {
    var computer = players[1];
    computer.score += 1;
    var scores = playersScoreDisplay();
    myOutputValue = `💢Computer wins and ${scores}`;
  }
  return myOutputValue;
};
var inputStone = function (input) {
  var randomObject = randomObjectSelect();
  var currentPlayer = players[0].ID;
  if (
    currentPlayer == "player--1" &&
    input == "stone" &&
    randomObject == "scissors"
  ) {
    var human = players[0];
    human.score += 1;
    var scores = playersScoreDisplay();
    var myOutputValue = `💯Human wins and ${scores}`;
    return myOutputValue;
  } else {
    var computer = players[1];
    computer.score += 1;
    var scores = playersScoreDisplay();
    myOutputValue = `💢Computer wins and ${scores}`;
    return myOutputValue;
  }
};

var playersScoreDisplay = function () {
  var humanPlayerScore = players[0].score;
  var computerPlayerScore = players[1].score;
  numOfGames += 1;
  return `Human score is ${humanPlayerScore}, Computer score is ${computerPlayerScore}. ${numOfGames} of 10 games.`;
};

var main = function (input) {
  var input;

  if (input == "") {
    initGame();
    createPlayers();
    var myOutputValue = `To start, click submit. <br/><br/>Then, to make a selection, please input: <br/> ✂ scissors ✂,<br/>📰 paper 📰<br/>or<br/> 🥌 stone 🥌`;
  }
  if (!playing && input != "") {
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
