var main = function (input) {
  if (
    input != "scissors" ||
    input != "paper" ||
    input != "rock" ||
    input != "reversed scissors" ||
    input != "reversed paper" ||
    input != "reversed rock"
  ) {
    myOutputValue =
      "Please try again and input the following : Scissors, Paper, Rock, Reversed Scissors, Reversed Paper, Reversed Rock";
  }
  var randomChoice = generateRandomChoice();
  var randomChoiceReversed = generateRandomChoiceReversed(); // for reversed game
  console.log("randomChoice");
  console.log(randomChoice);

  // draw scenarios
  if (input == randomChoice) {
    myOutputValue =
      "The computer chose " +
      randomChoice +
      ". <br>" +
      "You chose " +
      input +
      ". <br><br>" +
      "It's a draw! <br><br>" +
      "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! ";
  }

  // if input wins generateRandomChoice, output = you win
  // input = scissors, win randomchoice = paper
  if (
    (input == "scissors" && randomChoice == CHOICE_PAPER) ||
    // input paper, win randomchoice = rock
    (input == "paper" && randomChoice == CHOICE_ROCK) ||
    // input rock , win randomchoice = scissors
    (input == "rock" && randomChoice == CHOICE_SCISSORS)
  ) {
    myOutputValue =
      "The computer chose " +
      randomChoice +
      ". <br>" +
      "You chose " +
      input +
      ". <br><br>" +
      "Congratulations! It's a win! <br><br>" +
      "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game!";
  }
  // lose scenarios
  if (
    (input == "scissors" && randomChoice == CHOICE_ROCK) ||
    (input == "paper" && randomChoice == CHOICE_SCISSORS) ||
    (input == "rock" && randomChoice == CHOICE_PAPER)
  ) {
    myOutputValue =
      "The computer chose " +
      randomChoice +
      ". <br>" +
      "You chose " +
      input +
      ". <br><br>" +
      "You lose! Bummer. <br><br>" +
      "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game!";
  } //else
  //var myOutputValue = "Please input the following : scissors , paper , rock";
  console.log("myOutputValue for else");
  console.log(myOutputValue);
  //var randomChoice = generateRandomChoice(input);
  //console.log("program choice");
  //console.log(randomChoice);

  // reversed choices scenarios
  //reversed choice draw
  if (input == randomChoiceReversed) {
    myOutputValue =
      "The computer chose " +
      randomChoiceReversed +
      ". <br>" +
      "You chose " +
      input +
      ". <br><br>" +
      "It's a draw! <br><br>" +
      "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! ";
  }

  // reversed win scenarios
  // input = scissors, win randomchoice = paper
  if (
    (input == "reversed scissors" &&
      randomChoiceReversed == REVERSED_CHOICE_ROCK) ||
    // input paper, win randomchoice = rock
    (input == "reversed paper" &&
      randomChoiceReversed == REVERSED_CHOICE_SCISSORS) ||
    // input rock , win randomchoice = scissors
    (input == "reversed rock" && randomChoiceReversed == REVERSED_CHOICE_PAPER)
  ) {
    myOutputValue =
      "The computer chose " +
      randomChoiceReversed +
      ". <br>" +
      "You chose " +
      input +
      ". <br><br>" +
      "Congratulations! It's a win! <br><br>" +
      "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game!";
  }
  // reversed lose scenarios
  if (
    (input == "reversed scissors" &&
      randomChoiceReversed == REVERSED_CHOICE_PAPER) ||
    (input == "reversed paper" &&
      randomChoiceReversed == REVERSED_CHOICE_ROCK) ||
    (input == "reversed rock" &&
      randomChoiceReversed == REVERSED_CHOICE_SCISSORS)
  ) {
    myOutputValue =
      "The computer chose " +
      randomChoiceReversed +
      ". <br>" +
      "You chose " +
      input +
      ". <br><br>" +
      "You lose! Bummer. <br><br>" +
      "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game!";
  }
  return myOutputValue;
};

// Define Choices
var CHOICE_SCISSORS = "scissors";
var CHOICE_PAPER = "paper";
var CHOICE_ROCK = "rock";

//generate random integer between scissor, paper and stone
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  console.log(randomInteger);
  return randomInteger;
};

var generateRandomChoice = function () {
  var totalChoice = 3;
  var randomChoiceNumber = generateRandomInteger(totalChoice);
  console.log(randomChoiceNumber);
  if (randomChoiceNumber == 1) {
    return CHOICE_SCISSORS;
  }
  if (randomChoiceNumber == 2) {
    return CHOICE_PAPER;
  }
  if (randomChoiceNumber == 3) {
    return CHOICE_ROCK;
  }
};

// Define Choices for Reversed Game
var REVERSED_CHOICE_SCISSORS = "reversed scissors";
var REVERSED_CHOICE_PAPER = "reversed paper";
var REVERSED_CHOICE_ROCK = "reversed rock";

var generateRandomChoiceReversed = function () {
  var totalChoiceReversed = 3;
  var randomChoiceNumberReversed = generateRandomInteger(totalChoiceReversed);
  console.log(randomChoiceNumberReversed);
  if (randomChoiceNumberReversed == 1) {
    return REVERSED_CHOICE_SCISSORS;
  }
  if (randomChoiceNumberReversed == 2) {
    return REVERSED_CHOICE_PAPER;
  }
  if (randomChoiceNumberReversed == 3) {
    return REVERSED_CHOICE_ROCK;
  }
};
