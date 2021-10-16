
// generated SPS

var generateRandomScissorsPaperStone = function(){
var randomDecimal = Math.random() * 3
var randomInteger = Math.floor (randomDecimal)
var diceNumber = randomInteger +1 
var RandomScissorsPaperStone = "undefined"

if (diceNumber == 1){
  RandomScissorsPaperStone = 'scissors' 
};

if (diceNumber == 2){
  RandomScissorsPaperStone = 'paper'

};
if (diceNumber == 3){
  RandomScissorsPaperStone = 'stone'
 
};
console.log (RandomScissorsPaperStone);
return RandomScissorsPaperStone

};


/*

// win or lose
​
var getResults = function(a, b){
  var result = "undefined";

if (a == b){
  result = "It's a tie!"
}

if (a == "scissors" && b == "paper"){
  result = "You win!"
}

if (a == "scissors" && b == "stone"){
  result = "You lose!"
}

if (a == "paper" && b == "scissors"){
  result = "You lose!"
}

if (a == "paper" && b == "stone"){
  result = "You win!"
}

if (a == "stone" && b == "paper"){
  result = "You lose!"
}

if (a == "stone" && b == "scissors"){
  result = "You win!"
}

console.log (result);
return result;

};

*/


var main = function (input) {
  var userPlays =  input;
  var computerPlays = generateRandomScissorsPaperStone();
  // var results = getResults(userPlays, computerPlays);
  var output = "User plays: " + userPlays + ". " + "Computer plays: " + computerPlays + ". " 
  
  //+ results;

  return output;
}

