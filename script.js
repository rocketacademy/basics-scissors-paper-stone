// computer random chooses scissors, paper, or stone
var computerChoice = function () {
  const game = ["scissors", "paper", "stone"];

  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  var computerhand = game[randomInteger];
  return computerhand;
};

var inputName = function (name) {
  return `Hello ${name}, please input 'scissors' 'paper' or 'stone' to start playing the game.`;
};

var getIcon = function (hand) {
  if (hand == "scissors" || hand == "reversed scissors") {
    return "✂️";
  }
  if (hand == "paper" || hand == "reversed paper") {
    return "🗒";
  }
  if (hand == "stone" || hand == "reversed stone") {
    return "🪨";
  }
};

// normal game mode
var playNormalGame = function (playerHand, computerHand) {
  if (
    (playerHand == "scissors" && computerHand == "paper") ||
    (playerHand == "paper" && computerHand == "stone") ||
    (playerHand == "stone" && computerHand == "scissors")
  ) {
    return "win";
  }
  if (
    (playerHand == "scissors" && computerHand == "stone") ||
    (playerHand == "paper" && computerHand == "scissors") ||
    (playerHand == "stone" && computerHand == "paper")
  ) {
    return "lose";
  }
  if (
    (playerHand == "scissors" && computerHand == "scissors") ||
    (playerHand == "paper" && computerHand == "paper") ||
    (playerHand == "stone" && computerHand == "stone")
  ) {
    return "draw";
  } else {
    return "error";
  }
};

// reversed game mode
var playReversedGame = function (playerHand, computerHand) {
  if (
    (playerHand == "scissors" && computerHand == "stone") ||
    (playerHand == "paper" && computerHand == "scissors") ||
    (playerHand == "stone" && computerHand == "paper")
  ) {
    return "win";
  }
  if (
    (playerHand == "scissors" && computerHand == "paper") ||
    (playerHand == "paper" && computerHand == "stone") ||
    (playerHand == "stone" && computerHand == "scissors")
  ) {
    return "lose";
  }
  if (
    (playerHand == "scissors" && computerHand == "scissors") ||
    (playerHand == "paper" && computerHand == "paper") ||
    (playerHand == "stone" && computerHand == "stone")
  ) {
    return "draw";
  } else {
    return "error";
  }
};

// definiing round outcomes count
var roundCount = -1;
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var prevWinner = 0;

var reverseGameMode = false;

var main = function (input) {
  if (roundCount == -1) {
    roundCount += 1;
    var playerName = input;
    return inputName(playerName);
  } else {
    // computer's choice
    var computer = computerChoice();
    var computerIcon = getIcon(computer);
    var playerIcon = getIcon(input);

    // start of game
    roundCount += 1;

    if (input == "reverse") {
      reverseGameMode = true;
      return "Start of reverse game mode";
    }

    if (input == "normal") {
      reverseGameMode = false;
      return "Start of normal game mode";
    }

    if (reverseGameMode) {
      var outcome = playReversedGame(input, computer);
    } else {
      outcome = playNormalGame(input, computer);
    }

    if (outcome == "win") {
      winCount += 1;
      prevWinner = "you";
      var myOutputValue = `Hello ${playerName}! <br> <br>  The computer chose ${computer} ${computerIcon}. <br> You chose ${input} ${playerIcon}. <br> <br> You win! Congrats. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round! `;
    }
    if (outcome == "lose") {
      loseCount += 1;
      prevWinner = "computer";
      myOutputValue = `Hello ${playerName}! <br> <br> The computer chose ${computer} ${computerIcon}. <br> You chose ${input} ${playerIcon}. <br> <br> You lose! Bummer. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (outcome == "draw") {
      if (prevWinner == "you") {
        winCount += 1;
      }
      if (prevWinner == "computer") {
        loseCount += 1;
      }
      myOutputValue = `Hello ${playerName}! <br> <br> The computer chose ${computer} ${computerIcon}. <br> You chose ${input} ${playerIcon}. <br> <br> It is a draw! <br> Since the previous winner is ${prevWinner}, ${prevWinner} win! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (outcome == "error") {
      roundCount -= 1; // ignore round if input is not valid
      myOutputValue = `Hello ${playerName}! <br> <br> "${input}" is not a valid choice. <br> <br> Please choose only "scissors" "paper" or "stone" to play the game.`;
    }

    var yourWinRate = ((winCount / roundCount) * 100).toFixed(2);
    var computerWinRate = ((loseCount / roundCount) * 100).toFixed(2);
    var winLossRecord = `<br> <br> Round Count: ${roundCount} <br> Win Count: ${winCount} <br> Lose Count: ${loseCount} <br> <br> Your Win Rate: ${yourWinRate}% <br> Computer's Win Rate: ${computerWinRate}%`;
  }

  myOutputValue += winLossRecord;

  return myOutputValue;
};
