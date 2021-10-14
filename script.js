var numOfUserWins = 0;
var numOfCompWins = 0;
var numOfUserLosses = 0;
var numOfCompLosses = 0;
var numOfDraws = 0;
var numOfPlays = 0;
var userName = "";
var gameMode = "normal";

var main = function (input) {
  var result = "";
  var output = "";

  if (input.length !== 0 && userName.length == 0) {
    // the very first time user starts game, the first word submitted will be user's name
    userName = input;
    output += `Hello ${userName}!<br><br>To play, you have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".`;
    return output;
  } else if (input.length == 0 && userName.length != 0) {
    // once user has a name, if user does not submit anything
    output = `You have to enter something.<br><br>You have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".`;
    return output;
  } else if (input.length != 0 && userName.length != 0) {
    // check whether user types in reverse when game is normal
    // or user types in normal when game is reverse
    // return immediately if game mode changes
    if (
      (gameMode == "normal" && input == "reverse") ||
      (gameMode == "reverse" && input == "normal")
    ) {
      gameMode = input;
      output = `You have to enter something.<br><br>You have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".`;
      return output;
    }

    // once user has a name, user submits something, validate input
    if (!validateInput(input)) {
      return 'Invalid. You only have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".';
    }

    // if input is valid, increment numOfPlays++
    numOfPlays++;

    // this will produce randomly either scissors, paper or stone.
    var generatedHand = generateHand();

    // result will contain either "user wins", "user draws" or "user loses"
    result = compareHands(input, generatedHand, gameMode);

    input = addSymbol(input);

    generatedHand = addSymbol(generatedHand);

    output += `Hello ${userName}!<br><br>`;

    output += `The computer chose ${generatedHand}.<br>You chose ${input}.<br><br>`;

    if (gameMode == "normal") {
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
    } else {
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
    }

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

    return output;
  } else {
    output = "Enter your name to play!";
    return output;
  }
};

var generateHand = function () {
  var handOptions = ["scissors", "paper", "stone"];
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  return handOptions[randomInteger];
};

var compareHands = function (input, generatedHand, gameMode) {
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
};

var calculateTally = function (userResult, gameMode) {
  if (gameMode == "normal") {
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

var validateInput = function (input) {
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
