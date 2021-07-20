var main = function (input) {
  var computerChoice = assignComputerChoice(getComputerChoice());
  
  if(input != "Scissors" || "Paper" || "Stone"){
    myOutputValue = "Please type 'Scissors', 'Paper' or 'Stone' to play the game."
  }
  if(input == computerChoice){
    myOutputValue = "Draw";
    }
  if(computerChoice == winningMapping[input]){
    myOutputValue = "You Win";
    }
  if(computerChoice == losingMapping[input]){
    myOutputValue = "You Lose";
    }
 
  return myOutputValue;
};

//convert computer's choice to an actual string using array - based on winning and losing game outcome
var winningMapping = {Stone: "Scissors", Paper: "Stone", Scissors: "Paper"};
var losingMapping = {Stone: "Paper", Paper: "Scissors", Scissors: "Stone"};

//generate random number from one to three
var getComputerChoice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal)+1;
  console.log('Random number is '+randomInteger);
  return randomInteger;
};
  
//Assign random number to Scissors, Paper, Stone
var assignComputerChoice = function(randomInteger){
  if (randomInteger == 1){
    computerChoice = "Scissors";
  }
  if (randomInteger == 2){
    computerChoice = "Paper";
  } 
  if (randomInteger == 3){
    computerChoice = "Stone";
  }
  console.log('Computer choice is '+ computerChoice);
  return computerChoice;
};
