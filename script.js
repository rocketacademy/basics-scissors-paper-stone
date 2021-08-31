playerWinCount = 0;
computerWinCount = 0;
drawCount = 0;
currentGameMode = "waiting for user name...";
userName = "";

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for user name...") {
    console.log(currentGameMode);
    userName = input;
    console.log("user name: " + userName);
    currentGameMode = "normal or reverse...";
    myOutputValue = "Please choose between 'normal' or 'reverse'.";
    return myOutputValue;
  } else if (currentGameMode == "normal or reverse...") {
    console.log(currentGameMode);
    currentGameMode = input;
    myOutputValue = "Please choose between 'scissors', 'paper' or 'stone'.";
    return myOutputValue;
  } else if (currentGameMode == "normal") {
    myOutputValue =
      "Please try again. Use only 'scissors', 'paper' or 'stone'.";
    if (input == "scissors" || input == "paper" || input == "stone") {
      myOutputValue = playSPS(input);
    }
    return myOutputValue;
  } else if (currentGameMode == "reverse") {
    console.log(currentGameMode);
    myOutputValue =
      "Please try again. Use only 'scissors', 'paper' or 'stone'.";
    if (input == "scissors" || input == "paper" || input == "stone") {
      myOutputValue = playSPS(input);
    }
    return myOutputValue;
  }
};

var playSPS = function (input) {
  // roll a random computer hand
  computerHand = rollHand();
  // input is player hand
  playerHand = input;
  return rulesSPS(playerHand, computerHand);
};

var rulesSPS = function (playerHand, computerHand) {
  if (playerHand == computerHand) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    drawCount = drawCount + 1;
    console.log("draws: " + drawCount);
    console.log("player wins: " + playerWinCount);
    console.log("computer wins: " + computerWinCount);
    return responseSPS("draw", playerHand, computerHand);
  } else if (
    (playerHand == "scissors" && computerHand == "paper") ||
    (playerHand == "paper" && computerHand == "stone") ||
    (playerHand == "stone" && computerHand == "scissors")
  ) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    if (currentGameMode == "normal") {
      playerWinCount = playerWinCount + 1;
    } else if (currentGameMode == "reverse") {
      computerWinCount = computerWinCount + 1;
    }
    console.log("draws: " + drawCount);
    console.log("player wins: " + playerWinCount);
    console.log("computer wins: " + computerWinCount);
    if (currentGameMode == "normal") {
      return responseSPS("win", playerHand, computerHand);
    } else if (currentGameMode == "reverse") {
      return responseSPS("lose", playerHand, computerHand);
    }
  } else if (
    (computerHand == "scissors" && playerHand == "paper") ||
    (computerHand == "paper" && playerHand == "stone") ||
    (computerHand == "stone" && playerHand == "scissors")
  ) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    if (currentGameMode == "normal") {
      computerWinCount = computerWinCount + 1;
    } else if (currentGameMode == "reverse") {
      playerWinCount = playerWinCount + 1;
    }
    console.log("draws: " + drawCount);
    console.log("player wins: " + playerWinCount);
    console.log("computer wins: " + computerWinCount);
    if (currentGameMode == "normal") {
      return responseSPS("lose", playerHand, computerHand);
    } else if (currentGameMode == "reverse") {
      return responseSPS("win", playerHand, computerHand);
    }
  }
};

var responseSPS = function (referee, playerHand, computerHand) {
  r = referee;
  if (r == "draw") {
    return (
      "The computer chose " +
      computerHand +
      ". <br> " +
      userName +
      " chose " +
      playerHand +
      ". <br><br> Draw!" +
      "<br><br> player wins: " +
      playerWinCount +
      "<br> computer wins: " +
      computerWinCount +
      "<br> draws: " +
      drawCount +
      "<br><br> " +
      calcWinLoss(playerWinCount, computerWinCount, drawCount) +
      "<br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  } else if (r == "win") {
    return (
      "The computer chose " +
      computerHand +
      ". <br> " +
      userName +
      " chose " +
      playerHand +
      ". <br><br> You win! Hooray." +
      "<br><br> player wins: " +
      playerWinCount +
      "<br> computer wins: " +
      computerWinCount +
      "<br> draws: " +
      drawCount +
      "<br><br> " +
      calcWinLoss(playerWinCount, computerWinCount, drawCount) +
      "<br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  } else if (r == "lose") {
    return (
      "The computer chose " +
      computerHand +
      ". <br> " +
      userName +
      " chose " +
      playerHand +
      ". <br><br> You lose! Bummer." +
      "<br><br> player wins: " +
      playerWinCount +
      "<br> computer wins: " +
      computerWinCount +
      "<br> draws: " +
      drawCount +
      "<br><br> " +
      calcWinLoss(playerWinCount, computerWinCount, drawCount) +
      "<br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
};

// win loss ratio message
var calcWinLoss = function (playerWinCount, computerWinCount, drawCount) {
  totalCount = playerWinCount + computerWinCount + drawCount;
  if (playerWinCount / totalCount >= 0.5) {
    return "So far " + userName + ", you're doing well!";
  } else if (playerWinCount / totalCount < 0.5) {
    return (
      "So far " + userName + ", too bad you're not doing well! Keep Trying!"
    );
  }
};

// You decide to prank your friends and create an SPS game where the rules are reversed
var playReverseSPS = function (input) {
  // roll a random computer hand
  computerHand = rollHand();
  // input is player hand
  playerHand = convertReverse(input);
  // if both player and computer have the same hand the game draws
  if (playerHand == computerHand) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    return (
      "The computer chose " +
      computerHand +
      ". <br> You chose " +
      playerHand +
      ". <br><br> Draw! <br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
  // reverse (scissors beats paper, paper beats stone, stone beats scissors)
  if (
    (playerHand == "scissors" && computerHand == "paper") ||
    (playerHand == "paper" && computerHand == "stone") ||
    (playerHand == "stone" && computerHand == "scissors")
  ) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    return (
      "The computer chose " +
      computerHand +
      ". <br> You chose " +
      playerHand +
      ". <br><br> You lose! Bummer. <br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
  // reverse (scissors beats paper, paper beats stone, stone beats scissors)
  if (
    (computerHand == "scissors" && playerHand == "paper") ||
    (computerHand == "paper" && playerHand == "stone") ||
    (computerHand == "stone" && playerHand == "scissors")
  ) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    return (
      "The computer chose " +
      computerHand +
      ". <br> You chose " +
      playerHand +
      ". <br><br> You win! Hooray. <br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
};

// convert reversed hand to hand
var convertReverse = function (input) {
  playerHand = input;
  if (playerHand == "reversed scissors") {
    playerHand = "scissors";
  }
  if (playerHand == "reversed paper") {
    playerHand = "paper";
  }
  if (playerHand == "reversed stone") {
    playerHand = "stone";
  }
  return playerHand;
};

// function rolls integer and assigns each integer to a hand
var rollHand = function () {
  randomHand = rollInteger();
  if (randomHand == 1) {
    return "scissors";
  } else if (randomHand == 2) {
    return "paper";
  } else if (randomHand == 3) {
    return "stone";
  }
};

// roll random integer 1, 2 or 3
var rollInteger = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the ceiling operation.
  // This will be an integer from 1 to 3 inclusive.
  var randomInteger = Math.ceil(randomDecimal);
  return randomInteger;
};
