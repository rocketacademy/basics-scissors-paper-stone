var main = function (input) {
  myOutputValue =
    "You can only choose scissors, paper, or stone. Please try again!";
  var computerHand = randomHandSign();
  if (
    (input == "scissors" && computerHand == "stone") ||
    (input == "paper" && computerHand == "scissors") ||
    (input == "stone" && computerHand == "paper")
  ) {
    myOutputValue =
      "You lose! You chose " +
      input +
      " and the computer chose " +
      computerHand +
      "<br><br> Type 'scissors', 'paper', or 'stone' to play another round!";
  }
  if (
    (input == "scissors" && computerHand == "paper") ||
    (input == "paper" && computerHand == "stone") ||
    (input == "stone" && computerHand == "scissors")
  ) {
    myOutputValue =
      "You win! You chose " +
      input +
      " and the computer chose " +
      computerHand +
      "<br><br> Type 'scissors', 'paper', or 'stone' to play another round!";
  }
  if (
    (input == "scissors" && computerHand == "scissors") ||
    (input == "paper" && computerHand == "paper") ||
    (input == "stone" && computerHand == "stone")
  ) {
    myOutputValue =
      "It's a draw! You chose " +
      input +
      " and the computer chose " +
      computerHand +
      "<br><br> Type 'scissors', 'paper', or 'stone' to play another round!";
  }

  if (
    (input == "reversed scissors" && computerHand == "stone") ||
    (input == "reversed paper" && computerHand == "scissors") ||
    (input == "reversed stone" && computerHand == "paper")
  ) {
    myOutputValue =
      "You win! You chose " +
      input +
      " and the computer chose " +
      computerHand +
      "<br><br> Type 'reversed scissors', 'reversed paper', or 'reversed stone' to play another round!";
  }
  if (
    (input == "reversed scissors" && computerHand == "paper") ||
    (input == "reversed paper" && computerHand == "stone") ||
    (input == "reversed stone" && computerHand == "scissors")
  ) {
    myOutputValue =
      "You lose! You chose " +
      input +
      " and the computer chose " +
      computerHand +
      "<br><br> Type 'reversed scissors', 'reversed paper', or 'reversed stone' to play another round!";
  }
  if (
    (input == "reversed scissors" && computerHand == "scissors") ||
    (input == "reversed paper" && computerHand == "paper") ||
    (input == "reversed stone" && computerHand == "stone")
  ) {
    myOutputValue =
      "It's a draw! You chose " +
      input +
      " and the computer chose " +
      computerHand +
      "<br><br> Type 'reversed scissors', 'reversed paper', or 'reversed stone' to play another round!";
  }
  return myOutputValue;
};

var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var randomHandSign = function () {
  var numHandSigns = 3;
  var randomNum = generateRandomInteger(numHandSigns);
  if (randomNum == 1) {
    return "scissors";
  }
  if (randomNum == 2) {
    return "paper";
  }
  if (randomNum == 3) {
    return "stone";
  }
};
