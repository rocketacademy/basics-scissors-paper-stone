//Associate random number to an output of Scissors Paper or Stone
var scissorsPaperorStone = function () {
  //produce random number from 1 to 3
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber) + 1;
  console.log("random integer", randomInteger);

  //Number to scissors paper or stone
  if (randomInteger == 1) {
    return "scissors";
  }

  if (randomInteger == 2) {
    return "paper";
  }

  if (randomInteger == 3) {
    return "stone";
  }
};

var main = function (input) {
  //if input is anything other than scissors paper or stone, to get an invalid response
  var myOutputValue = `Please type 'scissors', 'paper' or 'stone' to play. <br> Or add 'reversed' infront and try you luck at reversed mode.`;
  var compSPS = scissorsPaperorStone();
  console.log("scissors paper or stone", compSPS);

  //Input does not match winning conditions
  //Add "reversed xxx" as valid input
  if (
    input == "scissors" ||
    input == "paper" ||
    input == "stone" ||
    input == "reversed scissors" ||
    input == "reversed paper" ||
    input == "reversed stone"
  ) {
    myOutputValue = `You chose ${input}. <br>
    The computer chose ${compSPS}. <br> <br>
    You lose! Try again.`;
  }

  //If user inputs Scissors or reversed stone and comp = paper, user wins
  if (
    (input == "scissors" || input == "reversed paper") &&
    compSPS == "paper"
  ) {
    myOutputValue = `You chose ${input}. <br> The computer chose ${compSPS}. <br> <br> You win, happy days.`;
  }

  //Paper and reversed scissors beats stone
  if (
    (input == "paper" || input == "reversed scissors") &&
    compSPS == "stone"
  ) {
    myOutputValue = `You chose ${input}. <br> The Computer chose ${compSPS}, you win, happy days.`;
  }
  //Stone and reversed paper beats scissors
  if (
    (input == "stone" || input == "reversed paper") &&
    compSPS == "scissors"
  ) {
    myOutputValue = `You chose ${input}. <br> The Computer chose ${compSPS}, you win, happy days.`;
  }

  //if same object, draw
  if (input == compSPS || input == "reversed " + compSPS) {
    myOutputValue = `Both You and the Computer chose ${compSPS}. <br> <br> It is a draw.`;
  }

  return myOutputValue;
};
