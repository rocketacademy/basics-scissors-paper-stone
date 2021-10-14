var numOfUserWins = 0;
var numOfCompWins = 0;
var numOfUserLosses = 0;
var numOfCompLosses = 0;
var numOfDraws = 0;
var numOfPlays = 0;

var main = function (userHand) {
  var result = "";
  var output = "";

  if (!validateInput(userHand)) {
    return 'Invalid. You only have 6 options "paper", "scissors", "stone", "reversed paper", "reversed scissors", "reversed stone".';
  }

  // increment number of plays everytime user guesses and guess is valid
  numOfPlays++;

  // this will produce randomly either scissors, paper or stone.
  var generatedHand = generateHand();

  // result will contain either "user wins", "user draws" or "user loses"
  result = compareHands(userHand, generatedHand);

  userHand = addSymbol(userHand);
  generatedHand = addSymbol(generatedHand);

  output = `The computer chose ${generatedHand}.<br>You chose ${userHand}.<br><br>`;

  if (result == "user loses") {
    output += `You lose! Bummer.<br><br>`;
  } else if (result == "user draws") {
    output += `You draw!.<br><br>`;
  } else {
    output += `You win! Have a pat on your back.<br><br>`;
  }

  output +=
    'Now you can type "scissors" "paper" or "stone" to play another round! <br><br><hr><br>';

  output += `User wins: ${numOfUserWins} | User losses: ${numOfUserLosses} | User draws: ${numOfDraws} | User win percentage: ${(
    (numOfUserWins / numOfPlays) *
    100
  ).toFixed(2)}% <br>`;

  output += `Comp wins: ${numOfCompWins} | Comp losses: ${numOfCompLosses} | Comp draws: ${numOfDraws} | Comp win percentage: ${(
    (numOfCompWins / numOfPlays) *
    100
  ).toFixed(2)}%`;

  return output;
};

var generateHand = function () {
  var handOptions = ["scissors", "paper", "stone"];
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  return handOptions[randomInteger];
};

var compareHands = function (userHand, generatedHand) {
  if (
    (userHand == "reversed paper" && generatedHand == "scissors") ||
    (userHand == "reversed stone" && generatedHand == "paper") ||
    (userHand == "reversed scissors" && generatedHand == "stone") ||
    (userHand == "scissors" && generatedHand == "paper") ||
    (userHand == "paper" && generatedHand == "stone") ||
    (userHand == "stone" && generatedHand == "scissors")
  ) {
    // user wins
    numOfUserWins++;
    numOfCompLosses++;
    return "user wins";
  } else if (
    userHand == generatedHand ||
    (userHand == "reversed paper" && generatedHand == "paper") ||
    (userHand == "reversed stone" && generatedHand == "stone") ||
    (userHand == "reversed scissors" && generatedHand == "scissors")
  ) {
    // user draws
    numOfDraws++;
    return "user draws";
  } else {
    // user loses
    numOfUserLosses++;
    numOfCompWins++;
    return "user loses";
  }
};

var addSymbol = function (userHand) {
  switch (userHand) {
    case "scissors":
    case "reversed scissors":
      // code block
      userHand += " ✂️";
      break;
    case "paper":
    case "reversed paper":
      userHand += " 📋";
      break;
    default:
      // code block
      userHand += " ⛰️";
  }

  return userHand;
};

var validateInput = function (userHand) {
  if (
    !(
      userHand == "paper" ||
      userHand == "scissors" ||
      userHand == "stone" ||
      userHand == "reversed paper" ||
      userHand == "reversed scissors" ||
      userHand == "reversed stone"
    )
  ) {
    return false;
  } else {
    return true;
  }
};
