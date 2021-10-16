// Scorekeeping Global State
var wins = 0;
var losses = 0;
var draws = 0;
var totalRounds = 0;
var winsInARow = 0;
var lossesInARow = 0;

// Other Global States
var userName = "no user name";
var reversedModeHint = 0;
var gameMode = "waiting for user name";

var main = function (input) {
  var myOutputValue = "";
  if (gameMode == "waiting for user name") {
    userName = input;
    gameMode = "SPS";
    return `Nice to meet you ${userName}, welcome to Scissors, Paper, Stone.<br>To begin, enter either 'scissors', 'paper' or 'stone'.`;
  } else if (
    gameMode == "SPS" &&
    (input == "scissors" ||
      input == "reversed scissors" ||
      input == "paper" ||
      input == "reversed paper" ||
      input == "stone" ||
      input == "reversed stone")
  ) {
    input = input.toLowerCase();

    // Normal Game Mode
    if (input == "scissors" || input == "paper" || input == "stone") {
      myOutputValue = normalSPS(input);
    }

    // Reversed Game Mode
    else if (
      input == "reversed scissors" ||
      input == "reversed paper" ||
      input == "reversed stone"
    ) {
      myOutputValue = reversedSPS(input);
    }

    myOutputValue += `<br><br>`;
    // Outputs user wins, computer wins, draws, user win percentage and computer win percentage
    var userWinPercentage = ((wins / totalRounds) * 100).toFixed(1);
    var computerWinPercentage = ((losses / totalRounds) * 100).toFixed(1);

    if (userWinPercentage >= computerWinPercentage && totalRounds > 5) {
      myOutputValue += `<b><i>Well done ${userName}, you're doing awesome! Keep going! 💫</b></i><br>`;
    } else if (computerWinPercentage >= userWinPercentage && totalRounds > 5) {
      myOutputValue += `<b><i>Oh no ${userName}, you're getting beat! Switch up that strategy! 💭</b></i><br>`;
    }

    myOutputValue += `<br><u>Scoreboard</u><br><b>${userName}</b> won: ${wins}<br>Computer won: ${losses}<br>No. of Draws: ${draws}<br><br><b>${userName}'s</b> win percentage: ${userWinPercentage}%<br>Computer's win percentage: ${computerWinPercentage}%`;

    // Prompt user to try Reverse Game Mode if played 10 rounds of Normal Game Mode
    if (reversedModeHint > 10) {
      myOutputValue += `<br><br><i>(pssst..!)</i> Tired of this same old game? Try the <b>Reversed</b> Game Mode. Simply add 'reversed' to your choice of 'scissors', 'paper' or 'stone'. For example: 'reversed stone'`;
    }
  } else {
    // Error Message
    myOutputValue = `Please try again. Kindly input either 'scissors', 'paper' or 'stone'.
  <br><br>Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
  <br><br>Perhaps somewhere lies a secret <b>reversed</b> game mode..? I wonder if it has a secret <b>reversed</b> set of rules too...?`;
  }
  return myOutputValue;
};

// Function: Returns random integer (0, 1 or 2)
var randomOpponentNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

// Function: Returns pick from number input (scissors, paper or stone)
var choicePick = function (num) {
  if (num == 0) {
    choice = "scissors";
  }
  if (num == 1) {
    choice = "paper";
  }
  if (num == 2) {
    choice = "stone";
  }
  return choice;
};

// Function: Add emoji
var inputEmoji = function (input) {
  if (input == "scissors") {
    input = "scissors ✌🏼";
  }
  if (input == "paper") {
    input = "paper 🖐🏼";
  }
  if (input == "stone") {
    input = "stone ✊🏼";
  }
  return input;
};

// Function: Remove word 'reversed'
var removeReversed = function (reversed) {
  if (reversed == "reversed scissors") {
    var withoutReversed = "scissors";
  }
  if (reversed == "reversed paper") {
    var withoutReversed = "paper";
  }
  if (reversed == "reversed stone") {
    var withoutReversed = "stone";
  }
  return withoutReversed;
};

// Function: Normal Game Mode
var normalSPS = function (playerGuess) {
  var opponentPick = choicePick(randomOpponentNum());
  reversedModeHint = reversedModeHint + 1;
  // Draw condition
  if (playerGuess == opponentPick) {
    var score = `It's a draw! 👁👄👁`;
    draws = draws + 1;
    winsInARow = 0;
    lossesInARow = 0;
  }

  //Scissors
  if (playerGuess == "scissors") {
    if (opponentPick == "paper") {
      var score = `You won! Nice one! 😎`;
      wins = wins + 1;
      winsInARow = winsInARow + 1;
      lossesInARow = 0;
    }
    if (opponentPick == "stone") {
      var score = `You lost! 💩`;
      losses = losses + 1;
      winsInARow = 0;
      lossesInARow = lossesInARow + 1;
    }
  }

  //Paper
  if (playerGuess == "paper") {
    if (opponentPick == "stone") {
      var score = `You won! Nice one! 😎`;
      wins = wins + 1;
      winsInARow = winsInARow + 1;
      lossesInARow = 0;
    }
    if (opponentPick == "scissors") {
      var score = `You lost! 💩`;
      losses = losses + 1;
      winsInARow = 0;
      lossesInARow = lossesInARow + 1;
    }
  }

  //Stone
  if (playerGuess == "stone") {
    if (opponentPick == "scissors") {
      var score = `You won! Nice one! 😎`;
      wins = wins + 1;
      winsInARow = winsInARow + 1;
      lossesInARow = 0;
    }
    if (opponentPick == "paper") {
      var score = `You lost! 💩`;
      losses = losses + 1;
      winsInARow = 0;
      lossesInARow = lossesInARow + 1;
    }
  }

  myOutputValue = `${score}`;

  if (winsInARow > 2) {
    myOutputValue += `Wow <b>${userName}</b>! You're on a winning streak! Keep it up!`;
  } else if (lossesInARow > 2) {
    myOutputValue += `Darn <b>${userName}</b>! You're on a losing streak! Don't give up!`;
  }

  myOutputValue += `<br>You picked ${inputEmoji(
    playerGuess
  )}, while your opponent picked ${inputEmoji(opponentPick)}
    <br><br>Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.`;

  totalRounds = totalRounds + 1;
  return myOutputValue;
};

// Function: Reversed SPS
var reversedSPS = function (playerGuess) {
  reversedModeHint = 0;
  var opponentPick = choicePick(randomOpponentNum());
  // Draw condition
  if (removeReversed(playerGuess) == opponentPick) {
    var score = `It's a draw! 👁👄👁`;
    draws = draws + 1;
  }

  //Reversed Scissors
  if (playerGuess == "reversed scissors") {
    if (opponentPick == "stone") {
      var score = `You won! Nice one! 😎`;
      wins = wins + 1;
    }
    if (opponentPick == "paper") {
      var score = `You lost! 💩`;
      losses = losses + 1;
    }
  }

  //Reversed Paper
  if (playerGuess == "reversed paper") {
    if (opponentPick == "scissors") {
      var score = `You won! Nice one! 😎`;
      wins = wins + 1;
    }
    if (opponentPick == "stone") {
      var score = `You lost! 💩`;
      losses = losses + 1;
    }
  }

  //Reversed Stone
  if (playerGuess == "reversed stone") {
    if (opponentPick == "paper") {
      var score = `You won! Nice one! 😎`;
      wins = wins + 1;
    }
    if (opponentPick == "scissors") {
      var score = `You lost! 💩`;
      losses = losses + 1;
    }
  }

  myOutputValue = `Secret <b>Reversed</b> Mode Unlocked! 😈<br><br>${score}`;

  if (winsInARow > 2) {
    myOutputValue += `Wow <b>${userName}</b>! You're on a winning streak! Keep it up!`;
  } else if (lossesInARow > 2) {
    myOutputValue += `Darn <b>${userName}</b>! You're on a losing streak! Don't give up!`;
  }

  myOutputValue += `<br>You picked ${inputEmoji(
    removeReversed(playerGuess)
  )}, while your opponent picked ${inputEmoji(
    opponentPick
  )}<br><br>Special <b>Reversed</b> Rules: scissors beat stone, stone beats paper, and paper beats scissors. If both parties choose the same object, it's a draw.`;
  totalRounds = totalRounds + 1;
  return myOutputValue;
};
