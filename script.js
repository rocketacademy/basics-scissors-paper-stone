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
  var myOutputValue = `Please type 'scissors', 'paper' or 'stone' to play (:`;
  var compSPS = scissorsPaperorStone();
  console.log("scissors paper or stone", compSPS);

  //Input does not match winning conditions
  if (input == "scissors" || input == "paper" || input == "stone") {
    myOutputValue = `The computer chose ${compSPS}. You chose ${input}. You lose!`;
  }

  //If user inputs Scissors and comp = paper, user wins
  if (input == "scissors" && compSPS == "paper") {
    myOutputValue = `Your ${input} against Computer's ${compSPS}. You win.`;
  }
  //Paper beats stone
  if (input == "paper" && compSPS == "stone") {
    myOutputValue = `Your ${input} against Computer's ${compSPS}, you win.`;
  }
  //Stone beats scissors
  if (input == "stone" && compSPS == "scissors") {
    myOutputValue = `Your ${input} against Computer's ${compSPS}, you win.`;
  }
  //if same object, draw
  if (input == compSPS) {
    myOutputValue = `You and the Computer chose ${input}, it's a draw.`;
  }

  return myOutputValue;
};
