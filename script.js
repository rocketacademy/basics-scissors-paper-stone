//global variable
//win-loss record
var userWonCount = 0;
var cpuWonCount = 0;
//user name input
var currentGameMode = `awaiting user name`;
var userName = "";

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

var main = function (input) {
  var guess = input.toLowerCase();
  var myOutputValue = "";
  if (currentGameMode == `awaiting user name`) {
    // set the name
    if (
      guess == "scissors" ||
      guess == "paper" ||
      guess == "rock" ||
      guess == "reversed scissors" ||
      guess == "reversed paper" ||
      guess == "reversed rock"
    ) {
      return (myOutputValue = "Please input your name");
    } else {
      userName = input;
      // now that we have the name, switch the mode
      currentGameMode = "dice game";
      myOutputValue = `Hello ` + userName;
    }
  } else if (currentGameMode == "dice game") {
    //dice game logic
    if (
      guess != "scissors" ||
      guess != "paper" ||
      guess != "rock" ||
      guess != "reversed scissors" ||
      guess != "reversed paper" ||
      guess != "reversed rock"
    ) {
      myOutputValue =
        "Please try again and input the following : Scissors, Paper, Rock, Reversed Scissors, Reversed Paper, Reversed Rock";
    }
    var randomChoice = generateRandomChoice();
    var randomChoiceReversed = generateRandomChoiceReversed(); // for reversed game
    console.log("randomChoice");
    console.log(randomChoice);
    console.log("myoutputvalue");
    console.log(myOutputValue);

    // draw scenarios
    if (guess == randomChoice) {
      myOutputValue =
        "The computer chose " +
        randomChoice +
        ". <br>" +
        "You chose " +
        guess +
        ". <br><br>" +
        "It's a draw! <br><br>" +
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! <br><br> Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
    }

    // if input wins generateRandomChoice, output = you win
    if (
      // input = scissors, win randomchoice = paper
      (guess == "scissors" && randomChoice == CHOICE_PAPER) ||
      // guess paper, win randomchoice = rock
      (guess == "paper" && randomChoice == CHOICE_ROCK) ||
      // guess rock , win randomchoice = scissors
      (guess == "rock" && randomChoice == CHOICE_SCISSORS)
    ) {
      userWonCount = userWonCount + 1; //user win + 1
      myOutputValue =
        "The computer chose " +
        randomChoice +
        ". <br>" +
        "You chose " +
        guess +
        ". <br><br>" +
        "Congratulations! It's a win! <br><br>" +
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! <br><br> Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
    }

    // lose scenarios
    if (
      (guess == "scissors" && randomChoice == CHOICE_ROCK) ||
      (guess == "paper" && randomChoice == CHOICE_SCISSORS) ||
      (guess == "rock" && randomChoice == CHOICE_PAPER)
    ) {
      cpuWonCount = cpuWonCount + 1; // cpu win +1
      myOutputValue =
        "The computer chose " +
        randomChoice +
        ". <br>" +
        "You chose " +
        guess +
        ". <br><br>" +
        "You lose! Bummer. <br><br>" +
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! <br><br> Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
    }
    console.log("myOutputValue for else");
    console.log(myOutputValue);

    // reversed choices scenarios
    //reversed choice draw
    if (guess == randomChoiceReversed) {
      myOutputValue =
        "The computer chose " +
        randomChoiceReversed +
        ". <br>" +
        "You chose " +
        guess +
        ". <br><br>" +
        "It's a draw! <br><br>" +
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
    }

    // reversed win scenarios
    if (
      (guess == "reversed scissors" &&
        randomChoiceReversed == REVERSED_CHOICE_ROCK) ||
      (guess == "reversed paper" &&
        randomChoiceReversed == REVERSED_CHOICE_SCISSORS) ||
      (guess == "reversed rock" &&
        randomChoiceReversed == REVERSED_CHOICE_PAPER)
    ) {
      userWonCount = userWonCount + 1; //user win + 1
      myOutputValue =
        "The computer chose " +
        randomChoiceReversed +
        ". <br>" +
        "You chose " +
        guess +
        ". <br><br>" +
        "Congratulations! It's a win! <br><br>" +
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
    }

    // reversed lose scenarios
    if (
      (guess == "reversed scissors" &&
        randomChoiceReversed == REVERSED_CHOICE_PAPER) ||
      (guess == "reversed paper" &&
        randomChoiceReversed == REVERSED_CHOICE_ROCK) ||
      (guess == "reversed rock" &&
        randomChoiceReversed == REVERSED_CHOICE_SCISSORS)
    ) {
      cpuWonCount = cpuWonCount + 1; //cpu win
      myOutputValue =
        "The computer chose " +
        randomChoiceReversed +
        ". <br>" +
        "You chose " +
        guess +
        ". <br><br>" +
        "You lose! Bummer. <br><br>" +
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game!Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
    }
  }
  return myOutputValue;
};
