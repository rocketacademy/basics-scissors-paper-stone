var main = function (input) {
  // default output message if input is not valid
  var myOutputValue =
    "Please try again. Use only 'scissors', 'paper' or 'stone'.";
  // only valid inputs of scissors, paper or stone will play the game
  if (input == "scissors" || input == "paper" || input == "stone") {
    myOutputValue = playSPS(input);
  }
  // only valid inputs of reversed scissors, reversed paper or reversed stone will play the game with reversed rules
  if (
    input == "reversed scissors" ||
    input == "reversed paper" ||
    input == "reversed stone"
  ) {
    myOutputValue = playReverseSPS(input);
  }
  return myOutputValue;
};

var playSPS = function (input) {
  // roll a random computer hand
  computerHand = rollHand();
  // input is player hand
  playerHand = input;
  // if both player and computer have the same hand the game draws
  if (playerHand == computerHand) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    return (
      "The computer chose " +
      computerHand +
      ". <br> You chose " +
      playerHand +
      ". <br><br> Draw! <br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
  // scissors beats paper, paper beats stone, stone beats scissors
  if (
    (playerHand == "scissors" && computerHand == "paper") ||
    (playerHand == "paper" && computerHand == "stone") ||
    (playerHand == "stone" && computerHand == "scissors")
  ) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    return (
      "The computer chose " +
      computerHand +
      ". <br> You chose " +
      playerHand +
      ". <br><br> You win! Hooray. <br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
  // scissors beats paper, paper beats stone, stone beats scissors
  if (
    (computerHand == "scissors" && playerHand == "paper") ||
    (computerHand == "paper" && playerHand == "stone") ||
    (computerHand == "stone" && playerHand == "scissors")
  ) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    return (
      "The computer chose " +
      computerHand +
      ". <br> You chose " +
      playerHand +
      ". <br><br> You lose! Bummer. <br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
};

// You decide to prank your friends and create an SPS game where the rules are reversed
var playReverseSPS = function (input) {
  // roll a random computer hand
  computerHand = rollHand();
  // input is player hand
  playerHand = convertReverse(input);
  // if both player and computer have the same hand the game draws
  if (playerHand == computerHand) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    return (
      "The computer chose " +
      computerHand +
      ". <br> You chose " +
      playerHand +
      ". <br><br> Draw! <br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
  // reverse (scissors beats paper, paper beats stone, stone beats scissors)
  if (
    (playerHand == "scissors" && computerHand == "paper") ||
    (playerHand == "paper" && computerHand == "stone") ||
    (playerHand == "stone" && computerHand == "scissors")
  ) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    return (
      "The computer chose " +
      computerHand +
      ". <br> You chose " +
      playerHand +
      ". <br><br> You lose! Bummer. <br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
  // reverse (scissors beats paper, paper beats stone, stone beats scissors)
  if (
    (computerHand == "scissors" && playerHand == "paper") ||
    (computerHand == "paper" && playerHand == "stone") ||
    (computerHand == "stone" && playerHand == "scissors")
  ) {
    console.log("player hand: " + playerHand);
    console.log("computer hand: " + computerHand);
    return (
      "The computer chose " +
      computerHand +
      ". <br> You chose " +
      playerHand +
      ". <br><br> You win! Hooray. <br><br> Now you can type 'scissors', 'paper' or 'stone' to play another round!"
    );
  }
};

// convert reversed hand to hand
var convertReverse = function (input) {
  playerHand = input;
  if (playerHand == "reversed scissors") {
    playerHand = "scissors";
  }
  if (playerHand == "reversed paper") {
    playerHand = "paper";
  }
  if (playerHand == "reversed stone") {
    playerHand = "stone";
  }
  return playerHand;
};

// function rolls integer and assigns each integer to a hand
var rollHand = function () {
  randomHand = rollInteger();
  if (randomHand == 1) {
    return "scissors";
  }
  if (randomHand == 2) {
    return "paper";
  }
  if (randomHand == 3) {
    return "stone";
  }
};

// roll random integer 1, 2 or 3
var rollInteger = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the ceiling operation.
  // This will be an integer from 1 to 3 inclusive.
  var randomInteger = Math.ceil(randomDecimal);

  return randomInteger;
};
