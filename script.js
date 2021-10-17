// input a choice between scissors paper stone
// output if the player has won the game against the computer
// if input is not valid, output will indicate what are the valid choices and remind the player to play them accordingly
var currentGameMode = "waiting for user name";
var userName = "";
var computerChoice = function () {
  var randomInteger = Math.ceil(Math.random() * 3);
  var computerPlay = "";
  switch (randomInteger) {
    case 1:
      computerPlay = "scissors";
      break;
    case 2:
      computerPlay = "paper";
      break;
    case 3:
      computerPlay = "stone";
  }
  return computerPlay;
};

var numGames = 0;
var playerWins = 0;
var comWins = 0;
var draws = 0;
var decision = function (player, computer) {
  var message = "";
  if (player == "scissors") {
    switch (computer) {
      case "scissors":
        message = "It is a draw.";
        draws += 1;
        numGames += 1;
        break;
      case "paper":
        message = "Congratulations, you won!";
        playerWins += 1;
        numGames += 1;
        break;
      case "stone":
        message = "You lose! Bummer.";
        comWins += 1;
        numGames += 1;
    }
  } else if (player == "paper") {
    switch (computer) {
      case "scissors":
        message = "You lose! Bummer";
        comWins += 1;
        numGames += 1;
        break;
      case "paper":
        message = "It is a s.";
        draws += 1;
        numGames += 1;
        break;
      case "stone":
        message = "Congratulations, you won!";
        playerWins += 1;
        numGames += 1;
    }
  } else if (player == "stone") {
    switch (computer) {
      case "scissors":
        message = "Congratulations, you won!";
        playerWins += 1;
        numGames += 1;
        break;
      case "paper":
        message = "You lose! Bummer";
        comWins += 1;
        numGames += 1;
        break;
      case "stone":
        message = "It is a draw.";
        draws += 1;
        numGames += 1;
    }
  }
  return message;
};

var reminder =
  'Now you can type "scissors" "paper" or "stone" to play another round!';

var emoticon = function (play) {
  var emoji = "";
  switch (play) {
    case "scissors":
      emoji = String.fromCodePoint(0x2702);
      break;
    case "paper":
      emoji = String.fromCodePoint(0x1f4c4);
      break;
    case "stone":
      emoji = String.fromCodePoint(0x1f5ff);
  }
  return emoji;
};

var statistics = function (numGames, playerWins, comWins, draws) {
  var playerWinPercentage = Math.floor((playerWins / numGames) * 100);
  var comWinPercentage = Math.floor((comWins / numGames) * 100);
  var drawPercentage = Math.floor((draws / numGames) * 100);
  return `<br> ${numGames} games played. <br> You won: ${playerWinPercentage}% <br> Computer won: ${comWinPercentage}% <br> Draws: ${drawPercentage}%`;
};

var main = function (input) {
  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "SPS";
    myOutputValue = `Hello ${userName}, Now you can type "scissors" "paper" or "stone" to play scissors paper stone `;
  } else if ((currentGameMode = "SPS")) {
    var computer = computerChoice();
    var myOutputValue = "";
    var outcome = decision(input, computer);
    var playerEmoji = emoticon(input);
    var computerEmoji = emoticon(computer);
    var stats = statistics(numGames, playerWins, comWins, draws);

    if (input != "scissors" && input != "paper" && input != "stone") {
      myOutputValue = `${userName}, you did not enter a valid input. <br> Please type and enter either "scissors", "paper" or "stone". ${stats}`;
    } else {
      myOutputValue = `${userName}, the computer chose ${computer}${computerEmoji}. <br> you chose ${input}${playerEmoji}. <br> ${outcome}  ${stats} <br> ${reminder}  `;
    }
  }

  return myOutputValue;
};
