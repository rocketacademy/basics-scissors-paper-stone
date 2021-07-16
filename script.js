// SPS game = Scissors Paper Stone

var main = function (input) {
  var computerChoose = randomItem();

  // assigning emojis to the icon
  var inputEmoji;
  if (input == "scissors" || input == "reversed scissors") {
    inputEmoji = "✌";
  }
  if (input == "paper" || input == "reversed paper") {
    inputEmoji = "✋";
  }
  if (input == "stone" || input == "reversed stone") {
    inputEmoji = "✊";
  }
  var compEmoji;
  if (computerChoose == "scissors") {
    compEmoji = "✌";
  }
  if (computerChoose == "paper") {
    compEmoji = "✋";
  }
  if (computerChoose == "stone") {
    compEmoji = "✊";
  }

  // only 3 input options, and ask user to try again
  var myOutputValue =
    "ERROR! Invalid input. Please only type 'scissors', 'paper', or 'stone' to play another round!";

  // If both parties choose the same object, it's a draw
  if (
    (input == "scissors" && computerChoose == "scissors") ||
    (input == "paper" && computerChoose == "paper") ||
    (input == "stone" && computerChoose == "stone") ||
    (input == "reversed scissors" && computerChoose == "scissors") ||
    (input == "reversed paper" && computerChoose == "paper") ||
    (input == "reversed stone" && computerChoose == "stone")
  ) {
    myOutputValue =
      "It is a DRAW." +
      "<br>" +
      "You choose: " +
      input +
      " " +
      inputEmoji +
      "." +
      "<br>" +
      "The computer chooses: " +
      computerChoose +
      " " +
      compEmoji +
      ".";
  }

  // user beats computer when:
  // scissors beats paper,
  // paper beats stone,
  // and stone beats scissors.
  if (
    (input == "scissors" && computerChoose == "paper") ||
    (input == "paper" && computerChoose == "stone") ||
    (input == "stone" && computerChoose == "scissors")
  ) {
    myOutputValue =
      "You WIN!" +
      "<br>" +
      "You choose: " +
      input +
      " " +
      inputEmoji +
      "." +
      "<br>" +
      "The computer chooses: " +
      computerChoose +
      " " +
      compEmoji +
      ".";
  }

  // computer beats user when:
  // scissors loses to stone,
  // paper loses to scissors,
  // and stone loses to paper.
  if (
    (input == "scissors" && computerChoose == "stone") ||
    (input == "paper" && computerChoose == "scissors") ||
    (input == "stone" && computerChoose == "paper")
  ) {
    myOutputValue =
      "You LOSE!" +
      "<br>" +
      "You choose: " +
      input +
      " " +
      inputEmoji +
      "." +
      "<br>" +
      "The computer chooses: " +
      computerChoose +
      " " +
      compEmoji +
      ".";
  }

  // in REVERSE UNIVERSE:
  // scissors beat stone,
  // stone beats paper,
  // and paper beats scissors.
  if (
    (input == "reversed scissors" && computerChoose == "stone") ||
    (input == "reversed paper" && computerChoose == "scissors") ||
    (input == "reversed stone" && computerChoose == "paper")
  ) {
    myOutputValue =
      "You WIN!" +
      "<br>" +
      "You choose: " +
      input +
      " " +
      inputEmoji +
      "." +
      "<br>" +
      "The computer chooses: " +
      computerChoose +
      " " +
      compEmoji +
      ".";
  }

  // in REVERSE UNIVERSE:
  // scissors loses to  paper,
  // paper loses to  stone,
  // and stone loses to  scissors.
  if (
    (input == "reversed scissors" && computerChoose == "paper") ||
    (input == "reversed paper" && computerChoose == "stone") ||
    (input == "reversed stone" && computerChoose == "scissors")
  ) {
    myOutputValue =
      "You LOSE!" +
      "<br>" +
      "You choose: " +
      input +
      " " +
      inputEmoji +
      "." +
      "<br>" +
      "The computer chooses: " +
      computerChoose +
      " " +
      compEmoji +
      ".";
  }

  return myOutputValue;
};

// assigning each number to an object
var randomItem = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  var randomItem = randomNumber;

  console.log("random number generates: (1 = scissors, 2 = paper, 3 = stone)");
  console.log((randomItem = randomNumber));

  if (randomNumber == 1) {
    randomItem = "scissors";
  }
  if (randomNumber == 2) {
    randomItem = "paper";
  }
  if (randomNumber == 3) {
    randomItem = "stone";
  }

  return randomItem;
};
