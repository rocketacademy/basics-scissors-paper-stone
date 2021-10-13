var main = function (userHand) {
  var result = "";
  var output = "";

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
    'Now you can type "scissors" "paper" or "stone" to play another round!';

  return output;
};

var generateHand = function () {
  var handOptions = ["scissors", "paper", "stone"];
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  return handOptions[randomInteger];
};

var compareHands = function (userHand, generatedHand) {
  console.log("userHand: " + userHand);
  console.log("generatedHand: " + generatedHand);
  if (
    (userHand == "reversed paper" && generatedHand == "scissors") ||
    (userHand == "reversed stone" && generatedHand == "paper") ||
    (userHand == "reversed scissors" && generatedHand == "stone") ||
    (userHand == "scissors" && generatedHand == "paper") ||
    (userHand == "paper" && generatedHand == "stone") ||
    (userHand == "stone" && generatedHand == "scissors")
  ) {
    // user wins`
    return "user wins";
  } else if (
    userHand == generatedHand ||
    (userHand == "reversed paper" && generatedHand == "paper") ||
    (userHand == "reversed stone" && generatedHand == "stone") ||
    (userHand == "reversed scissors" && generatedHand == "scissors")
  ) {
    // user draws
    return "user draws";
  } else {
    // user loses
    return "user loses";
  }
};

var addSymbol = function (hand) {
  switch (hand) {
    case "scissors":
    case "reversed scissors":
      // code block
      hand += " ✂️";
      break;
    case "paper":
    case "reversed paper":
      hand += " 📋";
      break;
    default:
      // code block
      hand += " ⛰️";
  }

  return hand;
};
