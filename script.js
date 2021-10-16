
// Project 1: scissors paper stone 
// user input scissors or paper, or stone
// input validation for "scissors" "paper" "stone"
// assign 0,1,2 to scissors, paper, stone
// random generate number 0,1,2
// check input vs comPlay
// winCondition: scissors > paper || paper > stone || stone > scissors 
// drawCondition: input == computerRandom


var main = function (input) {
  input = input.toLowerCase();
  var myOutputValue = "";
  var input1 = "";

//input validation
if (input != "scissors" || 
input != "paper" ||
input != "stone") { 
  myOutputValue = "Please try again, type 'scissors' 'paper' or 'stone'"
  return myOutputValue;
}  
  var comPlay = randomNumber()
console.log (comPlay)

// scissors = 0
// paper = 1
// stone = 2 

if(comPlay == 0){
  input1 = "scissors"
}

if(comPlay == 1){
  input1 = "paper"
}

if(comPlay == 2){
  input1 = "stone"
}

// check user vs. computer outomce
if (input == "scissors" && comPlay == 1||
input == "paper" && comPlay == 2 ||
input == "stone" && comPlay == 0){
var outcome = "you win"
}

if (input == "scissors" && comPlay == 2||
input == "paper" && comPlay == 0 ||
input == "stone" && comPlay == 1){
outcome = "you lose"
}

if (input == "scissors" && comPlay == 0||
input == "paper" && comPlay == 1 ||
input == "stone" && comPlay == 2){
outcome = "you draw"
}

myOutputValue = "You chose " + input + '<br>' + "The computer chose " + input1 + '<br>' + " Result " + outcome;
return myOutputValue;
};

//generate random number for comPlay
var randomNumber = function(){
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger
}
