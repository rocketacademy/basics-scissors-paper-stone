var numOfUserWins = 0;
var numOfCompWins = 0;
var numOfUserLosses = 0;
var numOfCompLosses = 0;
var numOfDraws = 0;
var numOfPlays = 0;
var userName = "";
var gameMode = "normal SPS";

var main = function (input) {
  var result = "";
  var output = "";

  if (input.length !== 0 && userName.length == 0) {
    // the very first time user starts game, the first word submitted will be user's name
    userName = input;
    output += `Hello ${userName}! The current mode is ${gameMode}.<br><br>To play, you have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".`;
    return output;
  } else if (input.length == 0 && userName.length != 0) {
    // once user has a name, if user does not submit anything
    output = `The current mode is ${gameMode}. You have to enter something.<br><br>You have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".`;
    return output;
  } else if (input.length != 0 && userName.length != 0) {
    // if mode is normal SPS and user types in normal SPS,
    // or change in mode, return output immediately
    if (checkChangeInMode(input, gameMode)) {
      return output;
    }

    // once user has a name, user submits something, validate input
    if (!validateInput(input, gameMode)) {
      if (gameMode == "normal SPS" || gameMode == "reverse SPS") {
        return `The current mode is ${gameMode}. Invalid. You only have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".`;
      } else if (gameMode == "dice game") {
        return `The current mode is ${gameMode}. Invalid. You need to guess a number.`;
      }
    }
    output += `Hello ${userName}!<br><br>`;

    // if input is valid, increment numOfPlays++
    numOfPlays++;

    var generatedHand = "";

    // this will produce randomly either scissors, paper or stone for SPS
    // and generate random dice number for dice game
    if (
      gameMode == "normal SPS" ||
      gameMode == "reverse SPS" ||
      gameMode == "dice game"
    ) {
      generatedHand = generateHand(gameMode);
    }

    // result will contain either "user wins", "user draws" or "user loses"
    result = decideWinOrLose(input, generatedHand, gameMode);

    if (gameMode == "normal SPS" || gameMode == "reverse SPS") {
      input = addSymbol(input);

      generatedHand = addSymbol(generatedHand);
      output += `The computer chose ${generatedHand}.<br>You chose ${input}.<br><br>`;
    }

    if (gameMode == "normal SPS") {
      switch (result) {
        case "user wins":
          output += `You win! Have a pat on your back.<br><br>`;
          break;
        case "user loses":
          output += `You lose! Bummer.<br><br>`;
          break;
        default:
          output += `You draw!.<br><br>`;
      }
    } else if (gameMode == "reverse SPS") {
      switch (result) {
        case "user wins":
          output += `You lose! Bummer.<br><br>`;
          break;
        case "user loses":
          output += `You win! Have a pat on your back.<br><br>`;
          break;
        default:
          output += `You draw!.<br><br>`;
      }
    } else if (gameMode == "word game") {
      switch (result) {
        case "user wins":
          output += `You win! Have a pat on your back.<br><br>`;
          break;
        default:
          output += `You lose! Bummer.<br><br>`;
      }
    } else if (gameMode == "dice game") {
      switch (result) {
        case "user wins":
          output += `You win! Have a pat on your back.<br><br>`;
          break;
        default:
          output += `You lose! Bummer.<br><br>`;
      }
    }

    if (gameMode == "normal SPS" || gameMode == "reverse SPS") {
      output +=
        'Now you can type "scissors", "paper" or "stone" to play another round! <br><br><hr><br>';

      output += `Your wins: ${numOfUserWins} | Your losses: ${numOfUserLosses} | Your draws: ${numOfDraws} | Your win percentage: ${(
        (numOfUserWins / numOfPlays) *
        100
      ).toFixed(2)}% <br>`;

      output += `Comp wins: ${numOfCompWins} | Comp losses: ${numOfCompLosses} | Comp draws: ${numOfDraws} | Comp win percentage: ${(
        (numOfCompWins / numOfPlays) *
        100
      ).toFixed(2)}% <br><br>`;

      if (numOfUserWins > numOfCompWins) {
        output += `You're ahead of the computer! Maintain this lead.`;
      } else if (numOfUserWins < numOfCompWins) {
        output += `If I were you, I would start bucking up!!!`;
      } else {
        output += `This next round may be a tiebreaker! Fingers crossed!`;
      }
    } else if (gameMode == "word game") {
      output += `There's only one secret phrase. There's no point playing another round.`;
    } else if (gameMode == "dice game") {
      output += `Now you can make another guess!`;
    }

    return output;
  } else {
    output = "Enter your name to play!";
    return output;
  }
};

var generateHand = function (gameMode) {
  if (gameMode == "normal SPS" || gameMode == "reverse SPS") {
    var handOptions = ["scissors", "paper", "stone"];
    var randomDecimal = Math.random() * 3;
    var randomInteger = Math.floor(randomDecimal);
    return handOptions[randomInteger];
  } else if (gameMode == "dice game") {
    var randomDecimal = Math.random() * 6;
    var randomInteger = Math.floor(randomDecimal) + 1;
    return randomInteger;
  }
};

var decideWinOrLose = function (input, generatedHand, gameMode) {
  if (gameMode == "normal SPS" || gameMode == "reverse SPS") {
    if (
      (input == "reversed paper" && generatedHand == "scissors") ||
      (input == "reversed stone" && generatedHand == "paper") ||
      (input == "reversed scissors" && generatedHand == "stone") ||
      (input == "scissors" && generatedHand == "paper") ||
      (input == "paper" && generatedHand == "stone") ||
      (input == "stone" && generatedHand == "scissors")
    ) {
      // user wins
      calculateTally("win", gameMode);
      return "user wins";
    } else if (
      input == generatedHand ||
      (input == "reversed paper" && generatedHand == "paper") ||
      (input == "reversed stone" && generatedHand == "stone") ||
      (input == "reversed scissors" && generatedHand == "scissors")
    ) {
      // user draws
      calculateTally("draw", gameMode);
      return "user draws";
    } else {
      // user loses
      calculateTally("lose", gameMode);
      return "user loses";
    }
  } else if (gameMode == "word game") {
    if (input == "palatable papaya") {
      return "user wins";
    } else {
      return "user loses";
    }
  } else if (gameMode == "dice game") {
    if (input == generatedHand) {
      return "user wins";
    } else {
      return "user loses";
    }
  }
};

var calculateTally = function (userResult, gameMode) {
  if (gameMode == "normal SPS") {
    switch (userResult) {
      case "win":
        numOfUserWins++;
        numOfCompLosses++;
        break;
      case "lose":
        numOfCompWins++;
        numOfUserLosses++;
        break;
      default:
        numOfDraws++;
    }
  } else {
    switch (userResult) {
      case "win":
        numOfCompWins++;
        numOfUserLosses++;
        break;
      case "lose":
        numOfUserWins++;
        numOfCompLosses++;
        break;
      default:
        numOfDraws++;
    }
  }
};

var checkChangeInMode = function (input, gameMode) {
  if (
    (gameMode == "normal SPS" && input == "reverse SPS") ||
    (gameMode == "reverse SPS" && input == "normal SPS") ||
    (gameMode == "word game" && input == "normal SPS") ||
    (gameMode == "word game" && input == "reverse SPS") ||
    (gameMode == "dice game" && input == "normal SPS") ||
    (gameMode == "dice game" && input == "reverse SPS")
  ) {
    gameMode = input;
    output = `The current mode is ${gameMode}. You have to enter something.<br><br>You have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".`;
    return true;
  } else if (
    (gameMode == "normal SPS" && input == "word game") ||
    (gameMode == "reverse SPS" && input == "word game") ||
    (gameMode == "dice game" && input == "word game")
  ) {
    gameMode = input;
    output = `The current mode is ${gameMode}. Guess the secret phrase!`;
    return true;
  } else if (
    (gameMode == "normal SPS" && input == "dice game") ||
    (gameMode == "reverse SPS" && input == "dice game") ||
    (gameMode == "word game" && input == "dice game")
  ) {
    gameMode = input;
    output = `The current mode is ${gameMode}. Guess the dice number!`;
    return true;
  } else if (gameMode == input) {
    if (gameMode == "normal SPS" || gameMode == "reverse SPS") {
      output = `You are already in this ${gameMode}. You have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".`;
      return true;
    } else if (gameMode == "word game") {
      output = `You are already in this ${gameMode}. Please guess the secret phrase.`;
      return true;
    } else {
      output = `You are already in this ${gameMode}. Please guess the dice number.`;
      return true;
    }
  } else {
    return false;
  }
};

var validateInput = function (input, gameMode) {
  if (gameMode == "normal SPS" || gameMode == "reverse SPS") {
    if (
      !(
        input == "paper" ||
        input == "scissors" ||
        input == "stone" ||
        input == "reversed paper" ||
        input == "reversed scissors" ||
        input == "reversed stone"
      )
    ) {
      return false;
    } else {
      return true;
    }
  } else if (gameMode == "word game") {
    return true;
  } else if (gameMode == "dice game") {
    if (Number.isNaN(Number(input))) {
      return false;
    } else {
      return true;
    }
  }
};

var addSymbol = function (input) {
  switch (input) {
    case "scissors":
    case "reversed scissors":
      // code block
      input += " ✂️";
      break;
    case "paper":
    case "reversed paper":
      input += " 📋";
      break;
    default:
      // code block
      input += " ⛰️";
  }

  return input;
};
