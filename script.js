// Scorekeeping Global State
var wins = 0;
var losses = 0;
var draws = 0;
var totalRounds = 0;
var userWinPercentage = 0;
var computerWinPercentage = 0;
var winsInARow = 0;
var lossesInARow = 0;
var userLastWon = 0;
var comLastWon = 0;

// Other Global States
var userName = "no user name";
var reversedModeHint = 0;
var gameMode = "waiting for user name";

var main = function (input) {
  var myOutputValue = "";
  if (gameMode == "waiting for user name") {
    userName = input;
    gameMode = "waiting for game mode";
    return `Nice to meet you <b>${userName}</b>, welcome to Scissors, Paper, Stone.<br>To begin, enter either 'Regular SPS' or 'Korean SPS'.`;
  }
  // Select Game Modes (Korean SPS or Regular SPS)
  else if (input == "Korean SPS") {
    gameMode = "Korean SPS";
    return `Welcome to Korean Scissors, Paper, Stone. To begin, enter either 'scissors', 'paper' or 'stone'.<br><br><b><i>Additional Korean Version Rules: You only win a round if you win a match and follow-up with a draw in the next match.</b></i>`;
  } else if (input == "Regular SPS") {
    gameMode = "SPS";
    return `Welcome to Regular Scissors, Paper Stone. To begin, enter either 'scissors', 'paper' or 'stone'.`;
  }
  // Error Message for either Korean SPS or Regular SPS
  else if (gameMode == "waiting for game mode") {
    return `Please select a game mode before proceeding.<br>To begin, enter either 'Regular SPS' or 'Korean SPS'.`;
  }
  // Regular SPS Game
  else if (
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

    if (totalRounds != 0) {
      myOutputValue += scoreBoard();
    }

    // Prompt user to try Reverse Game Mode if played 10 rounds of Normal Game Mode
    if (reversedModeHint > 10) {
      myOutputValue += `<br><br><i>(pssst..!)</i> Tired of this same old game? Try the <b>Reversed</b> Game Mode. Simply add 'reversed' to your choice of 'scissors', 'paper' or 'stone'. For example: 'reversed stone'`;
    }
  }
  // Korean SPS Game
  else if (
    gameMode == "Korean SPS" &&
    (input == "scissors" || input == "paper" || input == "stone")
  ) {
    myOutputValue = koreanSPS(input);
    if (totalRounds != 0) {
      myOutputValue += scoreBoard();
    }
  } else {
    // Error Message
    myOutputValue = `Please try again. Kindly input either 'scissors', 'paper' or 'stone'.`;
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

// Function: Korean SPS
var koreanSPS = function (playerGuess) {
  var opponentPick = choicePick(randomOpponentNum());
  var message = "";

  // Initial Throw
  if (userLastWon == 0 && comLastWon == 0) {
    // Draw condition
    if (playerGuess == opponentPick) {
      message = `It's a draw!`;
    }
    //Scissors
    if (playerGuess == "scissors") {
      if (opponentPick == "paper") {
        message = `You have the winning hand! 묵찌빠 (muk-jji-ppa)!`;
        userLastWon = 1;
      }
      if (opponentPick == "stone") {
        message = `You have the losing hand! 묵찌빠 (muk-jji-ppa)!`;
        comLastWon = 1;
      }
    }
    //Paper
    if (playerGuess == "paper") {
      if (opponentPick == "stone") {
        message = `You have the winning hand! 묵찌빠 (muk-jji-ppa)!`;
        userLastWon = 1;
      }
      if (opponentPick == "scissors") {
        message = `You have the losing hand! 묵찌빠 (muk-jji-ppa)!`;
        comLastWon = 1;
      }
    }
    //Stone
    if (playerGuess == "stone") {
      if (opponentPick == "scissors") {
        message = `You have the winning hand! 묵찌빠 (muk-jji-ppa)!`;
        userLastWon = 1;
      }
      if (opponentPick == "paper") {
        message = `You have the losing hand! 묵찌빠 (muk-jji-ppa)!`;
        comLastWon = 1;
      }
    }
    // Subsequent Throws
  } else if (userLastWon == 1 || comLastWon == 1) {
    // Draw condition
    if (playerGuess == opponentPick) {
      if (userLastWon == 1) {
        message = `It's a draw, you won! Nice one! 😎`;
        wins = wins + 1;
        winsInARow = winsInARow + 1;
        lossesInARow = 0;
        userLastWon = 0;
        totalRounds = totalRounds + 1;
      } else if (comLastWon == 1) {
        message = `It's a draw, you lost! 💩`;
        losses = losses + 1;
        winsInARow = 0;
        lossesInARow = lossesInARow + 1;
        comLastWon = 0;
        totalRounds = totalRounds + 1;
      }
    } else if (playerGuess != opponentPick) {
      //Scissors
      if (playerGuess == "scissors") {
        if (opponentPick == "paper") {
          message = `You have the winning hand! 묵찌빠 (muk-jji-ppa)!`;
          userLastWon = 1;
          comLastWon = 0;
        }
        if (opponentPick == "stone") {
          message = `You have the losing hand! 묵찌빠 (muk-jji-ppa)!`;
          comLastWon = 1;
          userLastWon = 0;
        }
      }

      //Paper
      if (playerGuess == "paper") {
        if (opponentPick == "stone") {
          message = `You have the winning hand! 묵찌빠 (muk-jji-ppa)!`;
          userLastWon = 1;
          comLastWon = 0;
        }
        if (opponentPick == "scissors") {
          message = `You have the losing hand! 묵찌빠 (muk-jji-ppa)!`;
          comLastWon = 1;
          userLastWon = 0;
        }
      }

      //Stone
      if (playerGuess == "stone") {
        if (opponentPick == "scissors") {
          message = `You have the winning hand! 묵찌빠 (muk-jji-ppa)!`;
          userLastWon = 1;
          comLastWon = 0;
        }
        if (opponentPick == "paper") {
          message = `You have the losing hand! 묵찌빠 (muk-jji-ppa)!`;
          comLastWon = 1;
          userLastWon = 0;
        }
      }
    }
  }
  myOutputValue = `${message}`;

  myOutputValue += `<br>You picked ${inputEmoji(
    playerGuess
  )}, while your opponent picked ${inputEmoji(opponentPick)}
    <br><br>Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.<br><b><i>Additional Korean Version Rules: You only win a round if you win a match and follow-up with a draw in the next match.</b></i>`;
  return myOutputValue;
};

// Function: Display Scoreboard
var scoreBoard = function () {
  message = `<br><br>`;
  // Outputs user wins, computer wins, draws, user win percentage and computer win percentage
  userWinPercentage = ((wins / totalRounds) * 100).toFixed(1);
  computerWinPercentage = ((losses / totalRounds) * 100).toFixed(1);

  if (userWinPercentage >= computerWinPercentage && totalRounds > 5) {
    message += `<b><i>Well done ${userName}, you're doing awesome! Keep going! 💫</b></i><br>`;
  } else if (computerWinPercentage >= userWinPercentage && totalRounds > 5) {
    message += `<b><i>Oh no ${userName}, you're getting beat! Switch up that strategy! 💭</b></i><br>`;
  }

  message += `<br><u>Scoreboard</u><br><b>${userName}</b> won: ${wins}<br>Computer won: ${losses}<br>No. of 'Regular SPS' Draws: ${draws}<br><br><b>${userName}'s</b> win percentage: ${userWinPercentage}%<br>Computer's win percentage: ${computerWinPercentage}%`;
  return message;
};
