// Scorekeeping Global States
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
var computerHelp = 0;

var main = function (input) {
  var myOutputValue = "";
  if (gameMode == "waiting for user name") {
    userName = input;
    gameMode = "waiting for game mode";
    return `Nice to meet you <b>${userName}</b>, welcome to Scissors, Paper, Stone.<br>To begin, enter either:<br><br>1. Regular SPS<br>2. Korean SPS<br>3. Guess the Word<br>4. Dice Game</b>`;
  }
  // Select Game Modes (Korean SPS, Regular SPS or Guess the Word)
  else if (input == "Korean SPS") {
    gameMode = "Korean SPS";
    return `Welcome to Korean Scissors, Paper, Stone. To begin, enter either 'scissors', 'paper' or 'stone'.<br><br><b><i>Additional Korean Version Rules: You only win a round if you win a match and follow-up with a draw in the next match.</b></i>`;
  } else if (input == "Regular SPS") {
    gameMode = "SPS";
    return `Welcome to Regular Scissors, Paper Stone. To begin, enter either 'scissors', 'paper' or 'stone'.`;
  } else if (input == "Guess the Word") {
    gameMode = "Guess the Word";
    return `Welcome to Guess the Word. To begin, enter the secret word.`;
  } else if (input == "Dice Game") {
    gameMode = "Dice Game";
    return `Welcome to Dice Game. To begin, enter a number from 1 to 6.`;
  }
  // Error Message for either Korean SPS, Regular SPS, Guess the Word or Dice Game
  else if (gameMode == "waiting for game mode") {
    return `Please select a game mode before proceeding.<br>To begin, enter either 'Regular SPS', 'Korean SPS', 'Guess the Word' or 'Dice Game'.`;
  }
  // Activate Computer vs. Computer
  else if (input == "Activate Lazy Mode" && computerHelp == 0) {
    computerHelp = 1;
    return `Computer will now help you choose.`;
  }
  // Deactivate Computer vs. Computer
  else if (input == "Deactivate Lazy Mode" && computerHelp == 1) {
    computerHelp = 0;
    return "Computer will no longer help you choose.";
  }
  // Regular SPS Game
  else if (
    gameMode == "SPS" &&
    (input == "scissors" ||
      input == "reversed scissors" ||
      input == "paper" ||
      input == "reversed paper" ||
      input == "stone" ||
      input == "reversed stone" ||
      (computerHelp == 1 && input == ""))
  ) {
    // Normal Game Mode
    if (
      input == "scissors" ||
      input == "paper" ||
      input == "stone" ||
      (computerHelp == 1 && input == "")
    ) {
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
    (input == "scissors" ||
      input == "paper" ||
      input == "stone" ||
      (computerHelp == 1 && input == ""))
  ) {
    myOutputValue = koreanSPS(input);
    if (totalRounds != 0) {
      myOutputValue += scoreBoard();
    }
  }
  // Guess the Word
  else if (gameMode == "Guess the Word") {
    myOutputValue = guessTheWord(input);
  }
  // Dice Game
  else if (gameMode == "Dice Game") {
    myOutputValue = diceGame(input);
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
  var choice = "";
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
    inputNew = "scissors ✌🏼";
  }
  if (input == "paper") {
    inputNew = "paper 🖐🏼";
  }
  if (input == "stone") {
    inputNew = "stone ✊🏼";
  }
  return inputNew;
};

// Function: Remove word 'reversed'
var removeReversed = function (reversed) {
  var withoutReversed = "";
  if (reversed == "reversed scissors") {
    withoutReversed = "scissors";
  }
  if (reversed == "reversed paper") {
    withoutReversed = "paper";
  }
  if (reversed == "reversed stone") {
    withoutReversed = "stone";
  }
  return withoutReversed;
};

// Function: Normal Game Mode
var normalSPS = function (playerGuess) {
  var opponentPick = choicePick(randomOpponentNum());
  var message = "";
  if (computerHelp == 1) {
    playerGuess = choicePick(randomOpponentNum());
  }
  reversedModeHint = reversedModeHint + 1;
  // Draw condition
  if (playerGuess == opponentPick) {
    message = `It's a draw! 👁👄👁`;
    draws = draws + 1;
    winsInARow = 0;
    lossesInARow = 0;
  }

  //Scissors
  if (playerGuess == "scissors") {
    if (opponentPick == "paper") {
      message = `You won! Nice one! 😎`;
      wins = wins + 1;
      winsInARow = winsInARow + 1;
      lossesInARow = 0;
    }
    if (opponentPick == "stone") {
      message = `You lost! 💩`;
      losses = losses + 1;
      winsInARow = 0;
      lossesInARow = lossesInARow + 1;
    }
  }

  //Paper
  if (playerGuess == "paper") {
    if (opponentPick == "stone") {
      message = `You won! Nice one! 😎`;
      wins = wins + 1;
      winsInARow = winsInARow + 1;
      lossesInARow = 0;
    }
    if (opponentPick == "scissors") {
      message = `You lost! 💩`;
      losses = losses + 1;
      winsInARow = 0;
      lossesInARow = lossesInARow + 1;
    }
  }

  //Stone
  if (playerGuess == "stone") {
    if (opponentPick == "scissors") {
      message = `You won! Nice one! 😎`;
      wins = wins + 1;
      winsInARow = winsInARow + 1;
      lossesInARow = 0;
    }
    if (opponentPick == "paper") {
      message = `You lost! 💩`;
      losses = losses + 1;
      winsInARow = 0;
      lossesInARow = lossesInARow + 1;
    }
  }

  var finalMessage = `${message}`;

  if (winsInARow > 2) {
    finalMessage += `Wow <b>${userName}</b>! You're on a winning streak! Keep it up!`;
  } else if (lossesInARow > 2) {
    finalMessage += `Darn <b>${userName}</b>! You're on a losing streak! Don't give up!`;
  }

  finalMessage += `<br>You picked ${inputEmoji(
    playerGuess
  )}, while your opponent picked ${inputEmoji(opponentPick)}
    <br><br>Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.`;

  totalRounds = totalRounds + 1;
  return finalMessage;
};

// Function: Reversed SPS
var reversedSPS = function (playerGuess) {
  reversedModeHint = 0;
  var opponentPick = choicePick(randomOpponentNum());
  var message = "";
  // Draw condition
  if (removeReversed(playerGuess) == opponentPick) {
    message = `It's a draw! 👁👄👁`;
    draws = draws + 1;
  }

  //Reversed Scissors
  if (playerGuess == "reversed scissors") {
    if (opponentPick == "stone") {
      message = `You won! Nice one! 😎`;
      wins = wins + 1;
    }
    if (opponentPick == "paper") {
      message = `You lost! 💩`;
      losses = losses + 1;
    }
  }

  //Reversed Paper
  if (playerGuess == "reversed paper") {
    if (opponentPick == "scissors") {
      message = `You won! Nice one! 😎`;
      wins = wins + 1;
    }
    if (opponentPick == "stone") {
      message = `You lost! 💩`;
      losses = losses + 1;
    }
  }

  //Reversed Stone
  if (playerGuess == "reversed stone") {
    if (opponentPick == "paper") {
      message = `You won! Nice one! 😎`;
      wins = wins + 1;
    }
    if (opponentPick == "scissors") {
      message = `You lost! 💩`;
      losses = losses + 1;
    }
  }

  var finalMessage = `Secret <b>Reversed</b> Mode Unlocked! 😈<br><br>${message}`;

  if (winsInARow > 2) {
    finalMessage += `Wow <b>${userName}</b>! You're on a winning streak! Keep it up!`;
  } else if (lossesInARow > 2) {
    finalMessage += `Darn <b>${userName}</b>! You're on a losing streak! Don't give up!`;
  }

  finalMessage += `<br>You picked ${inputEmoji(
    removeReversed(playerGuess)
  )}, while your opponent picked ${inputEmoji(
    opponentPick
  )}<br><br>Special <b>Reversed</b> Rules: scissors beat stone, stone beats paper, and paper beats scissors. If both parties choose the same object, it's a draw.`;
  totalRounds = totalRounds + 1;
  return finalMessage;
};

// Function: Korean SPS
var koreanSPS = function (playerGuess) {
  var opponentPick = choicePick(randomOpponentNum());
  if (computerHelp == 1) {
    playerGuess = choicePick(randomOpponentNum());
  }
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
  var finalMessage = `${message}`;

  finalMessage += `<br>You picked ${inputEmoji(
    playerGuess
  )}, while your opponent picked ${inputEmoji(opponentPick)}
    <br><br>Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.<br><b><i>Additional Korean Version Rules: You only win a round if you win a match and follow-up with a draw in the next match.</b></i>`;
  return finalMessage;
};

// Function: Guess The Word
var guessTheWord = function (playerGuess) {
  var message = "";

  if (playerGuess == `palatable papaya`) {
    message = `You've guessed the right secret word!`;
  } else {
    message = `You got the wrong word. Please try again.`;
  }
  return message;
};

// Function: Dice Game
var diceGame = function (playerGuess) {
  var message = "";
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  if (computerHelp == 1) {
    playerGuess = Math.floor(Math.random() * 6) + 1;
  }

  if (isNaN(Number(playerGuess)) || playerGuess <= 0 || playerGuess >= 7) {
    return `Please input a valid number between 1 to 6.`;
  } else if (playerGuess == diceRoll) {
    message = `That's right! You guessed ${playerGuess}, dice rolled ${diceRoll}.`;
  } else {
    message = `You guessed wrong. You guessed ${playerGuess}, dice rolled ${diceRoll}.`;
  }
  return message;
};

// Function: Display Scoreboard
var scoreBoard = function () {
  var message = `<br><br>`;
  // Outputs user wins, computer wins, draws, user win percentage and computer win percentage
  userWinPercentage = ((wins / totalRounds) * 100).toFixed(1);
  computerWinPercentage = ((losses / totalRounds) * 100).toFixed(1);

  if (userWinPercentage > computerWinPercentage && totalRounds > 10) {
    message += `<b><i>Well done ${userName}, you're doing awesome! Keep going! 💫</b></i><br>`;
  } else if (computerWinPercentage > userWinPercentage && totalRounds > 10) {
    message += `<b><i>Oh no ${userName}, you're getting beat! Switch up that strategy! 💭</b></i><br>`;
  }

  message += `<br><u>Scoreboard</u><br><b>${userName}</b> won: ${wins}<br>Computer won: ${losses}<br>No. of 'Regular SPS' Draws: ${draws}<br><br><b>${userName}'s</b> win percentage: ${userWinPercentage}%<br>Computer's win percentage: ${computerWinPercentage}%`;
  return message;
};
