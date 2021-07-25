// gamemodes
var currentGameMode = "enter username";
var userName = "";
// record counter
var numWins = 0;
var numLosses = 0;
var numDraws = 0;
//  main function
var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "enter username") {
    userName = input;
    currentGameMode = "game mode selection";
    myOutputValue = `Hi ${userName}! Let's play scissors, paper, stone. <br> <br> Please pick a game mode: Classic, Reverse, or Korean.`;
    // game mode selection
  } else if (currentGameMode == "game mode selection") {
    if (input != "Classic" && input != "Reverse" && input != "Korean") {
      myOutputValue =
        "Game mode does not exist. Please choose Classic, Reverse, or Korean.";
    } else {
      currentGameMode = input;
      myOutputValue = `Great! Let's play ${currentGameMode} scissors, paper, stone. <br><br> To change game modes, type in "game mode" at any time.`;
    }
  } else if (input == "game mode") {
    currentGameMode = "game mode selection";
    myOutputValue =
      "What game mode would you like to change to: Classic, Reverse, or Korean?";
    // input validation up front
  } else if (input != "scissors" && input != "paper" && input != "stone") {
    myOutputValue =
      "Input does not exist. Please choose scissors, paper, or stone.";
    // game modes
  } else {
    if (currentGameMode == "Classic") {
      myOutputValue = playClassic(userName, input);
    } else if (currentGameMode == "Reverse") {
      myOutputValue = playReverse(userName, input);
    } else {
      myOutputValue = playKorean(userName, input);
    }
    // personalized message about the player's record
    if (numWins == numLosses) {
      personalMessage = `You are currently tied with the computer. You got this ${userName}!`;
    }
    if (numWins / numLosses > 1) {
      personalMessage = `You are winning by ${
        numWins - numLosses
      } points. Good job ${userName}!`;
    }
    if (numWins / numLosses < 1) {
      personalMessage = `You are losing by ${
        numLosses - numWins
      } points. You got this ${userName}!`;
    }
    // adjustments to the final output
    myOutputValue = `<u><b> ${currentGameMode} Mode </b></u> <br><br> ${myOutputValue} <br><br> Wins: ${numWins}, Losses: ${numLosses}, Draws: ${numDraws} <br> ${personalMessage}`;
  }
  return myOutputValue;
};
// Classic scissors, paper, stone logic
var playClassic = function (userName, input) {
  var compWord = randomWord();
  if (input == compWord) {
    message = `You chose ${compWord}. <br> The computer also chose ${compWord}. <br><br> It's a draw!`;
    numDraws = numDraws + 1;
  }
  if (input == "scissors" && compWord == "paper") {
    message =
      "You chose scissors. <br> The computer chose paper. <br><br> You won!";
    numWins = numWins + 1;
  }
  if (input == "scissors" && compWord == "stone") {
    message =
      "You chose scissors. <br> The computer chose stone. <br><br> You lost!";
    numLosses = numLosses + 1;
  }
  if (input == "paper" && compWord == "scissors") {
    message =
      "You chose paper. <br> The computer chose scissors. <br><br> You lost!";
    numLosses = numLosses + 1;
  }
  if (input == "paper" && compWord == "stone") {
    message =
      "You chose paper. <br> The computer chose stone. <br><br> You won!";
    numWins = numWins + 1;
  }
  if (input == "stone" && compWord == "scissors") {
    message =
      "You chose stone. <br> The computer chose scissors. <br><br> You won!";
    numWins = numWins + 1;
  }
  if (input == "stone" && compWord == "paper") {
    message =
      "You chose stone. <br> The computer chose scissors. <br><br> You lost!";
    numLosses = numLosses + 1;
  }
  return message;
};
// Reverse scissors, paper, rock logic
var playReverse = function (userName, input) {
  var compWord = randomWord();
  if (input == compWord) {
    message = `You chose ${compWord}. <br> The computer also chose ${compWord}. <br><br> It's a draw!`;
    numDraws = numDraws + 1;
  }
  if (input == "scissors" && compWord == "paper") {
    myOutputValue =
      "You chose scissors. <br> The computer chose paper. <br><br> You lost!";
    numLosses = numLosses + 1;
  }
  if (input == "scissors" && compWord == "stone") {
    myOutputValue =
      "You chose scissors. <br> The computer chose stone. <br><br> You won!";
    numWins = numWins + 1;
  }
  if (input == "paper" && compWord == "scissors") {
    myOutputValue =
      "You chose paper. <br> The computer chose scissors. <br><br> You won!";
    numWins = numWins + 1;
  }
  if (input == "paper" && compWord == "stone") {
    myOutputValue =
      "You chose paper. <br> The computer chose stone. <br><br> You lost!";
    numLosses = numLosses + 1;
  }
  if (input == "stone" && compWord == "scissors") {
    myOutputValue =
      "You chose stone. <br> The computer chose scissors. <br><br> You lost!";
    numLosses = numLosses + 1;
  }
  if (input == "stone" && compWord == "paper") {
    myOutputValue =
      "You chose stone. <br> The computer chose paper. <br><br> You won!";
    numWins = numWins + 1;
  }
  // personalized message about the player's record
  if (numWins == numLosses) {
    personalMessage = `You are currently tied with the computer. You got this ${userName}!`;
  }
  if (numWins / numLosses > 1) {
    personalMessage = `You are ${
      numWins - numLosses
    } wins ahead. Good job ${userName}!`;
  }
  if (numWins / numLosses < 1) {
    personalMessage = `You are losing by ${
      numLosses - numWins
    }. You got this ${userName}!`;
    // adjustments to the final output
    message = `<u><b> Reverse mode </b></u> <br><br> ${message} <br><br> Wins: ${numWins}, Losses: ${numLosses}, Draws: ${numDraws} <br> ${personalMessage}`;
  }
  return message;
};
// Korean scissors, paper, stone
var userMukjjippa = 0;
var computerMukjjippa = 0;
var playKorean = function (userName, input) {
  var compWord = randomWord();
  if (input == "scissors" && compWord == "paper") {
    message =
      "You chose scissors. <br> The computer chose paper. <br><br> Muk-jji-ppa! If you draw next round, you win!";
    userMukjjippa = userMukjjippa + 1;
    computerMukjjippa = 0;
  }
  if (input == "scissors" && compWord == "stone") {
    message =
      "You chose scissors. <br> The computer chose stone. <br><br> Muk-jji-ppa! If you draw next round, you lose!";
    computerMukjjippa = computerMukjjippa + 1;
    userMukjjippa = 0;
  }
  if (input == "paper" && compWord == "scissors") {
    message =
      "You chose paper. <br> The computer chose scissors. <br><br> Muk-jji-ppa! If you draw next round, you lose!";
    computerMukjjippa = computerMukjjippa + 1;
    userMukjjippa = 0;
  }
  if (input == "paper" && compWord == "stone") {
    message =
      "You chose paper. <br> The computer chose stone. <br><br> Muk-jji-ppa! If you draw next round, you win!";
    userMukjjippa = userMukjjippa + 1;
    computerMukjjippa = 0;
  }
  if (input == "stone" && compWord == "scissors") {
    message =
      "You chose stone. <br> The computer chose scissors. <br><br> Muk-jji-ppa! If you draw next round, you win!";
    userMukjjippa = userMukjjippa + 1;
    computerMukjjippa = 0;
  }
  if (input == "stone" && compWord == "paper") {
    message =
      "You chose stone. <br> The computer chose scissors. <br><br> Muk-jji-ppa! If you draw next round, you lose!";
    computerMukjjippa = computerMukjjippa + 1;
    userMukjjippa = 0;
  }
  // logic for when a draw and/or muk-jji-ppa occurs
  if (input == compWord) {
    if (userMukjjippa == 0 && computerMukjjippa == 0) {
      message = `You chose ${compWord}. <br> The computer also chose ${compWord}. <br><br> It's a draw!`;
    }
    if (userMukjjippa == 1) {
      message = `You chose ${compWord}. <br> The computer also chose ${compWord}. <br><br> It's a draw, which means you won this round!`;
      userMukjjippa = 0;
      numWins = numWins + 1;
    }
    if (computerMukjjippa == 1) {
      message = `You chose ${compWord}. <br> The computer also chose ${compWord}. <br><br> It's a draw, which means you lost this round!`;
      computerMukjjippa = 0;
      numLosses = numLosses + 1;
    }
  }
  return message;
};
// computer's pick
var randomWord = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    var randomWord = "scissors";
  } else if (randomInteger == 1) {
    var randomWord = "paper";
  } else {
    var randomWord = "stone";
  }
  return randomWord;
};
