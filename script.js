var currentGameMode = 'waiting for user name';
var userName = '';
var myOutputValue = 'waiting for user name'

var main = function (input) {
  if (currentGameMode == 'waiting for user name') {
    // set the name
    userName = input;
  }
  
    // now that we have the name, switch the mode
    currentGameMode = 'generateRandomScissorsPaperStone';

    myOutputValue = 'Hello ' + userName;
  }else if (currentGameMode == 'generateRandomScissorsPaperStone') {
    // generateRandomScissorsPaperStone logic
  
  // generated SPS

var generateRandomScissorsPaperStone = function(){
var randomDecimal = Math.random() * 3
var randomInteger = Math.floor(randomDecimal)
var diceNumber = randomInteger + 1 
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

// win or lose
​
var getResults = function(){
  var result = "undefined";


if (userPlays == computerPlays){
  result = "It's a tie!"
};

if (userPlays == "scissors" && computerPlays == "paper"){
  result = "You win!"
};

if (userPlays == "scissors" && computerPlays == "stone"){
  result = "You lose!"
};

if (userPlays == "paper" && computerPlays == "scissors"){
  result = "You lose!"
};

if (userPlays == "paper" && computerPlays == "stone"){
  result = "You win!"
};

if (userPlays == "stone" && computerPlays == "paper"){
  result = "You lose!"
};

if (userPlays == "stone" && computerPlays == "scissors"){
  result = "You win!"
};


console.log (result);
return result;
};

var main = function (input) {
  var userPlays =  input;
  var computerPlays = generateRandomScissorsPaperStone();
  var results = getResults();
  var output = "User plays: " + userPlays + ". " + "Computer plays: " + computerPlays + ". " 
  + results;

  return output;
};

