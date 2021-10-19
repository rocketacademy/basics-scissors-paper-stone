
// Project 1: scissors paper stone 
// user input scissors or paper, or stone
// input validation for "scissors" "paper" "stone"
// check input vs randomSign 
// each attempt = attempt + 1
// each win = numberOfWins + 1 

var attempt = 0;
var numberOfWins = 0;

var main = function (input) {
  input = input.toLowerCase();
  var randomSign = randomGenerateSign();
  console.log (randomSign);
  attempt = attempt + 1
  var myOutputValue = "";  
 

// check user vs. randomSign
if (input == "scissors" && randomSign == "paper"||
input == "paper" && randomSign == "stone" ||
input == "stone" && randomSign == "scissors") {
numberOfWins = numberOfWins + 1;
var outcome = "you win"
}

if (input == "scissors" && randomSign == "stone"||
input == "paper" && randomSign == "scissors" ||
input == "stone" && randomSign == "paper") {
outcome = "you lose"
}

if (input == randomSign) {
outcome = "you draw"
}

myOutputValue = "You chose " + input + '<br>' + "The computer chose " + randomSign + '<br>' + " Result " + outcome + '<br>' + "You've won " + numberOfWins + " out of " + attempt + " times";
return myOutputValue;
};

//generate randomSign
var randomGenerateSign = function() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var listSign = ["scissors", "paper", "stone"];
  var playedSign = listSign[randomInteger];
  return playedSign;
}
