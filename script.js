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

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// main script
var main = function (input) {
  console.log(currentGameMode);
  // initialise username
  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "SPS";
    myOutputValue = `Hello ${userName}, Now you can type "scissors" "paper" or "stone" to play scissors paper stone. <br> To play guess the word, please type "word game". <br> To play dice game, please type "dice game". `;

    // initialise SPS
  } else if (currentGameMode == "SPS") {
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
    if (
      input != "scissors" &&
      input != "paper" &&
      input != "stone" &&
      input != "word game" &&
      input != "dice game"
    ) {
      myOutputValue = `${userName}, you did not enter a valid input. <br> Please type and enter either "scissors", "paper" or "stone". ${stats} You can also enter "word game" to play guess the word or enter "dice game" to play dice game. `;

      //changing game mode, display gameplay message
    } else if (input == "word game") {
      currentGameMode = "word game";
      myOutputValue =
        "Welcome to guess the word, type in your guess or type in 'SPS' or 'dice game' to play scissors paper stone or dice game respectively. ";
      //changing game mode, display gameplay message
    } else if (input == "dice game") {
      currentGameMode = "dice game";
      myOutputValue =
        "Welcome to dice game, type in your guess. Make sure it is between 1 to 6, inclusive of both numbers. <br> Alternatively, type in 'word game' or 'SPS' to play guess the word or scissors paper stone respectively.";
      // output of SPS gameplay results
    } else {
      myOutputValue = `${userName}, the computer chose ${computer}${computerEmoji}. <br> you chose ${input}${playerEmoji}. <br> ${outcome}  ${stats} <br> ${reminder} You can also enter "word game" or "dice game" to play guess the word or dice game respectively.  `;
    }
    //initialise word game
  } else if (currentGameMode == "word game") {
    console.log(currentGameMode);
    // successful guess of secret word
    if (input == "palatable papaya") {
      myOutputValue =
        "You wrote the secret phrase! You can also enter 'SPS' or 'dice game' to play scissors paper stone or dice game respectively.  ";
      //changing game mode, display gameplay message
    } else if (input == "SPS") {
      currentGameMode = "SPS";
      myOutputValue =
        'Welcome to scissors paper stone. Please input "scissors", "paper" or "stone" to play the game. You can also enter "word game" to play guess the word';
      //changing game mode, display gameplay message
    } else if (input == "dice game") {
      currentGameMode = "dice game";
      myOutputValue =
        "Welcome to dice game, type in your guess. Make sure it is between 1 to 6, inclusive of both numbers.  <br> Alternatively, type in 'word game' or 'SPS' to play guess the word or scissors paper stone respectively.";
      // failure to guess word
    } else {
      myOutputValue =
        'Loser, you got it wrong.  You can also enter "SPS" or "dice game" to play scissors paper stone or dice game respectively.';
    }
    // initalise dice game
  } else if (currentGameMode == "dice game") {
    // validating input
    if (
      input != "1" &&
      input != "2" &&
      input != "3" &&
      input != "4" &&
      input != "5" &&
      input != "6" &&
      input != "word game" &&
      input != "SPS"
    ) {
      myOutputValue = `${userName}, you did not enter a valid input. <br> Please enter a number between 1 and 6. You can also enter "word game" to play guess the word or enter "SPS" to play scissors paper stone. `;
      //changing game mode, display gameplay message
    } else if (input == "word game") {
      currentGameMode = "word game";
      myOutputValue =
        "Welcome to guess the word, type in your guess or type in 'SPS' or 'dice game' to play scissors paper stone or dice game respectively. ";
      //changing game mode, display gameplay message
    } else if (input == "SPS") {
      currentGameMode = "SPS";
      myOutputValue =
        'Welcome to scissors paper stone. Please input "scissors", "paper" or "stone" to play the game. You can also enter "word game" to play guess the word';
      //playing of dice game
    } else {
      var randomDiceNumber = rollDice();
      myOutputValue =
        'You lose. You can also enter "SPS" or "word game" to play scissors paper stone or guess the word respectively.';
      if (input == randomDiceNumber) {
        myOutputValue =
          'You win! You can also enter "SPS" or "word game" to play scissors paper stone or guess the word respectively.';
      }
    }
  }

  // returning message for whatever decision player makes
  return myOutputValue;
};
