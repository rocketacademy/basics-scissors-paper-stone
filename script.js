// input a choice between scissors paper stone
// output if the player has won the game against the computer
// if input is not valid, output will indicate what are the valid choices and remind the player to play them accordingly

// defining game mode
var currentGameMode = "waiting for user name";

// defining username
var userName = "";

// function to random computer's choice
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

// statistic variables
var numGames = 0;
var playerWins = 0;
var comWins = 0;
var draws = 0;

// function to decide winner
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

// variable to store reminder
var reminder =
  'Now you can type "scissors" "paper" or "stone" to play another round!';

// function to print emoji
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

// function to calculate statistics
var statistics = function (numGames, playerWins, comWins, draws) {
  var playerWinPercentage = Math.floor((playerWins / numGames) * 100);
  var comWinPercentage = Math.floor((comWins / numGames) * 100);
  var drawPercentage = Math.floor((draws / numGames) * 100);
  return `<br> ${numGames} games played. <br> You won: ${playerWinPercentage}% <br> Computer won: ${comWinPercentage}% <br> Draws: ${drawPercentage}%`;
};

// main script
var main = function (input) {
  // initialise username
  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "SPS";
    myOutputValue = `Hello ${userName}, Now you can type "scissors" "paper" or "stone" to play scissors paper stone `;

    // initialise SPS
  } else if ((currentGameMode = "SPS")) {
    // defining computer choice
    var computer = computerChoice();
    var myOutputValue = "";
    // deciding outcome
    var outcome = decision(input, computer);
    // store choice as emoji
    var playerEmoji = emoticon(input);
    var computerEmoji = emoticon(computer);

    // calculate statistics
    var stats = statistics(numGames, playerWins, comWins, draws);

    // validating input
    if (input != "scissors" && input != "paper" && input != "stone") {
      myOutputValue = `${userName}, you did not enter a valid input. <br> Please type and enter either "scissors", "paper" or "stone". ${stats}`;

      // defining gameplay message
    } else {
      myOutputValue = `${userName}, the computer chose ${computer}${computerEmoji}. <br> you chose ${input}${playerEmoji}. <br> ${outcome}  ${stats} <br> ${reminder}  `;
    }
  }

  // returning game play message
  return myOutputValue;
};
