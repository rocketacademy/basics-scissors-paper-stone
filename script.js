var main = function (input) {
   
  var computerChoice = assignComputerChoice(getComputerChoice());

  if(currentGameMode == 'waiting for user name'){
    userName = input;
    currentGameMode = 'Waiting for game mode...';
  
    return 'Hello '+ userName+ "! Please enter 'normal' or 'reverse' to select the game mode.";   
  }

  if(currentGameMode == 'Waiting for game mode...'){
    gameMode = input;
    currentGameMode = 'Ready to start';
  }

  if(currentGameMode == "Ready to start"){

    if(gameMode == "normal"){
    
    if(input != "scissors" || "paper" || "stone"){
      myOutputValue = "Please type 'scissors', 'paper' or 'stone' to play the game."
    }
    if(input == computerChoice){
      myOutputValue = "You have picked "+input+". Computer has picked "+computerChoice+". Result is a draw. Win count: "+wincount;
      }
    if(computerChoice == winningMapping[input]){
      wincount += 1
      myOutputValue = "You have picked "+input+". Computer has picked "+computerChoice+". You won! Win count: "+wincount;
      }
    if(computerChoice == losingMapping[input]){
      myOutputValue = "You have picked "+input+". Computer has picked "+computerChoice+". You lost! Win count: "+wincount;
      }
  
    return myOutputValue;
    };
  
  
    if(gameMode == "reverse"){
      
    if(input != "scissors" || "paper" || "stone"){
      myOutputValue = "Please type 'scissors', 'paper' or 'stone' to play the game."
    }
    if(input == computerChoice){
      myOutputValue = "You have picked "+input+". Computer has picked "+computerChoice+". Result is a draw. Win count: "+wincount;
      }
    if(computerChoice == winningMappingReverse[input]){
      wincount += 1
      myOutputValue = "You have picked "+input+". Computer has picked "+computerChoice+". You won! Win count: "+wincount;
      }
    if(computerChoice == losingMappingReverse[input]){
      myOutputValue = "You have picked "+input+". Computer has picked "+computerChoice+". You lost! Win count: "+wincount;
      }
  
    return myOutputValue;
    };
  };
};

// global state
var wincount = 0;

//set up the gamemode
currentGameMode = 'waiting for user name'
userName = ""
gameMode = ""

//convert user's choice using array - based on winning and losing game outcome
var winningMapping = {stone: "scissors", paper: "stone", scissors: "paper"};
var losingMapping = {stone: "paper", paper: "scissors", scissors: "stone"};

//[for reverse mode] convert user's choice using array - based on winning and losing game outcome
var losingMappingReverse = {stone: "scissors", paper: "stone", scissors: "paper"};
var winningMappingReverse = {stone: "paper", paper: "scissors", scissors: "stone"};

//generate random number from one to three
var getComputerChoice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal)+1;
  console.log('Random number is '+randomInteger);
  return randomInteger;
};
  
//assign random number to scissors, paper, stone
var assignComputerChoice = function(randomInteger){
  if (randomInteger == 1){
    computerChoice = "scissors";
  }
  if (randomInteger == 2){
    computerChoice = "paper";
  } 
  if (randomInteger == 3){
    computerChoice = "stone";
  }
  console.log('Computer choice is '+ computerChoice);
  return computerChoice;
};