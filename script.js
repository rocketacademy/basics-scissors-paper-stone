var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var numOfWins = 0;
var numOfLost = 0;
var playerName = "";
var gameMode = "please enter player's name";

var RPS = function(){
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  
  return randomNumber;
};

var startGame = function(){
  var hands = RPS();
  if (hands == 1) {
    return SCISSORS;
  }
  if (hands == 2) {
    return PAPER;
  }
  if (hands == 3) {
    return STONE;
  }
};

var main = function(input){
  if(gameMode == "please enter player's name"){
    playerName = input;
    gameMode = "rock paper scissors game";
    var myOutputValue = "hello! "+input+"! welcome to the game";
    
  }
  else if(gameMode == "rock paper scissors game"){
  var NPC = startGame();
  var myOutputValue = "hello! your input does not seem to be valid, please try again with either scissors, paper, or stone";
  }
 
  

  if (
    (input == SCISSORS && NPC == PAPER) ||
    (input == PAPER && NPC == STONE) ||
    (input == STONE && NPC == SCISSORS)
  )  {
      numOfWins = numOfWins + 1
      myOutputValue = "You won! you chose "+input+" and the NPC chose "+NPC+" Your current record is " +numOfWins+" wins, " +numOfLost +" losses";
    }
 
    if (
      (input == SCISSORS && NPC == STONE) ||
      (input == PAPER && NPC == SCISSORS) ||
      (input == STONE && NPC == PAPER)
    ) {
      numOfLost = numOfLost + 1
      myOutputValue = "You Lost! you chose "+input+" and the NPC chose "+NPC+" Your current record is " +numOfWins+" wins, " +numOfLost +" losses";
    }
    if (
      input == NPC
    )  {
      myOutputValue = "Draw! you chose "+input+" and the NPC chose "+NPC+" Your current record is " +numOfWins+" wins, " +numOfLost +" losses";
    }
    return myOutputValue;
  }
