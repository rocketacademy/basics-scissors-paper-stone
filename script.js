var main = function (userHand) {
  var result = "";
  var output = "";

  // this will produce randomly either scissors, paper or stone.
  var generatedHand = generateHand();

  // result will contain either "user wins", "user draws" or "user loses"
  if (userHand.split(" ")[0] == "reversed") {
    userHand = userHand.split(" ")[1];
    result = compareReversedHands(userHand, generatedHand);
  } else {
    result = compareHands(userHand, generatedHand);
  }

  userHand = addSymbol(userHand);
  generatedHand = addSymbol(generatedHand);

  output = `The computer chose ${generatedHand}.<br>You chose ${userHand}.<br><br>`;

  if (result == "user wins") {
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

var compareReversedHands = function (userHand, generatedHand) {
  // scissors beats paper
  // paper beats stone
  // stone beats scissors
  if (
    (userHand == "scissors" && generatedHand == "paper") ||
    (userHand == "paper" && generatedHand == "stone") ||
    (userHand == "stone" && generatedHand == "scissors")
  ) {
    // user wins
    return "user wins";
  } else if (userHand == generatedHand) {
    // user draws
    return "user draws";
  } else {
    // user loses
    return "user loses";
  }
};

var compareHands = function (userHand, generatedHand) {
  // scissors beats paper
  // paper beats stone
  // stone beats scissors
  if (
    (userHand == "paper" && generatedHand == "scissors") ||
    (userHand == "stone" && generatedHand == "paper") ||
    (userHand == "scissors" && generatedHand == "stone")
  ) {
    // user wins
    return "user wins";
  } else if (userHand == generatedHand) {
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
      // code block
      hand += " ✂️";
      break;
    case "paper":
      hand += " 📋";
      break;
    default:
      // code block
      hand += " ⛰️";
  }

  return hand;
};
