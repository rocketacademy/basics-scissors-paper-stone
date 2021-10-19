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
  var myOutputValue = "";
  if (currentGameMode == `awaiting user name`) {
    // set the name
    if (
      input == "scissors" ||
      input == "paper" ||
      input == "rock" ||
      input == "reversed scissors" ||
      input == "reversed paper" ||
      input == "reversed rock"
    ) {
      myOutputValue = "Please input your name";
    } else {
      userName = input;
      // now that we have the name, switch the mode
      currentGameMode = "dice game";
      myOutputValue = `Hello ` + userName;
    }
  } else if (currentGameMode == "dice game") {
    //dice game logic
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
    console.log("myoutputvalue");
    console.log(myOutputValue);

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
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! <br><br> Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
    }

    // if input wins generateRandomChoice, output = you win
    if (
      // input = scissors, win randomchoice = paper
      (input == "scissors" && randomChoice == CHOICE_PAPER) ||
      // input paper, win randomchoice = rock
      (input == "paper" && randomChoice == CHOICE_ROCK) ||
      // input rock , win randomchoice = scissors
      (input == "rock" && randomChoice == CHOICE_SCISSORS)
    ) {
      userWonCount = userWonCount + 1; //user win + 1
      myOutputValue =
        "The computer chose " +
        randomChoice +
        ". <br>" +
        "You chose " +
        input +
        ". <br><br>" +
        "Congratulations! It's a win! <br><br>" +
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! <br><br> Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
    }

    // lose scenarios
    if (
      (input == "scissors" && randomChoice == CHOICE_ROCK) ||
      (input == "paper" && randomChoice == CHOICE_SCISSORS) ||
      (input == "rock" && randomChoice == CHOICE_PAPER)
    ) {
      cpuWonCount = cpuWonCount + 1; // cpu win +1
      myOutputValue =
        "The computer chose " +
        randomChoice +
        ". <br>" +
        "You chose " +
        input +
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
    if (input == randomChoiceReversed) {
      myOutputValue =
        "The computer chose " +
        randomChoiceReversed +
        ". <br>" +
        "You chose " +
        input +
        ". <br><br>" +
        "It's a draw! <br><br>" +
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
    }

    // reversed win scenarios
    if (
      (input == "reversed scissors" &&
        randomChoiceReversed == REVERSED_CHOICE_ROCK) ||
      (input == "reversed paper" &&
        randomChoiceReversed == REVERSED_CHOICE_SCISSORS) ||
      (input == "reversed rock" &&
        randomChoiceReversed == REVERSED_CHOICE_PAPER)
    ) {
      userWonCount = userWonCount + 1; //user win + 1
      myOutputValue =
        "The computer chose " +
        randomChoiceReversed +
        ". <br>" +
        "You chose " +
        input +
        ". <br><br>" +
        "Congratulations! It's a win! <br><br>" +
        "Now you can type scissors, paper or rock to play another round! <br> You can also type Reversed Scissors, Reversed Paper, Reversed Rock to try the Reversed Game! Your win-loss record is: <br> Your win record: " +
        userWonCount +
        `<br> CPU win record :` +
        cpuWonCount;
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
      cpuWonCount = cpuWonCount + 1; //cpu win
      myOutputValue =
        "The computer chose " +
        randomChoiceReversed +
        ". <br>" +
        "You chose " +
        input +
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
