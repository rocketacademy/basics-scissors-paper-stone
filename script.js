// overrides: reverse?
var reverseOverride = false;

var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var generateComputerHandGesture = function () {
  var randomDigit = generateRandomInteger(3);
  if (randomDigit == 1) {
    var computerHandGesture = "scissors";
  }
  if (randomDigit == 2) {
    var computerHandGesture = "paper";
  }
  if (randomDigit == 3) {
    var computerHandGesture = "stone";
  }
  console.log(`computer's choice is: ${computerHandGesture}`);
  return computerHandGesture;
};

var winDecider = function (handGesture1, handGesture2) {
  // handgesture1 is user input
  console.log(`player's choice is: ${handGesture1}`);
  if (reverseOverride == false) {
    if (
      (handGesture1 == "scissors" && handGesture2 == "paper") ||
      (handGesture1 == "paper" && handGesture2 == "stone") ||
      (handGesture1 == "stone" && handGesture2 == "scissors")
    ) {
      console.log("player wins");
      return "Player";
    }
  }
  // new ruleset for reverse mode
  if (reverseOverride == true) {
    if (
      (handGesture1 == "reverse scissors" && handGesture2 == "stone") ||
      (handGesture1 == "reverse paper" && handGesture2 == "scissors") ||
      (handGesture1 == "reverse stone" && handGesture2 == "paper")
    ) {
      console.log("player wins");
      return "Player";
    }
    if (
      (handGesture1 == "reverse scissors" && handGesture2 == "scissors") ||
      (handGesture1 == "reverse paper" && handGesture2 == "paper") ||
      (handGesture1 == "reverse stone" && handGesture2 == "stone")
    ) {
      console.log("draw");
      return "Draw";
    }
  }

  if (handGesture1 == handGesture2) {
    console.log("draw");
    return "Draw";
  }
  console.log("computer wins");
  return "Computer";
};

var inputValidate = function (inputText) {
  if (inputText == "scissors" || inputText == "paper" || inputText == "stone") {
    return true;
  }
  if (
    inputText == "reverse scissors" ||
    inputText == "reverse paper" ||
    inputText == "reverse stone"
  ) {
    reverseOverride = true;
    console.log("reverse mode activated.");
    return true;
  }
  console.log("input invalid!");
  return false;
};

var main = function (input) {
  reverseOverride = false;
  var validation = inputValidate(input);
  if (validation == false) {
    return "Invalid Input. Please type only scissors, paper, or stone, and try again.";
  }
  var gesture1 = input;
  var gesture2 = generateComputerHandGesture();
  var winner = winDecider(gesture1, gesture2);
  if (winner == "Player") {
    var endstring = "You Win!";
  }
  if (winner == "Draw") {
    var endstring = "Draw!";
  }
  if (winner == "Computer") {
    var endstring = "You Lose. Oops.";
  }
  var myOutputValue = `You chose: ${gesture1}
    The computer chose: ${gesture2}
    \n
    ${endstring}
    \n
    Play again?`;
  // <br> didnt seem to work with the template literals i was using, nor did template literals actually seem to be literal on Brave
  // nor did \n work
  // :/
  return myOutputValue;
};
