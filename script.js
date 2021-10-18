  var SCISSORS = 'scissors';
  var PAPER = 'paper';
  var STONE = 'stone';
  var numOfPlayerWins = 0
  var numOfComputerWins = 0
  var state = "WAITING TO START"
  var username = ""



  var getComputerRPS = function() {
    var randomDecimal = Math.random() * 3;
    var randomInteger = Math.floor(randomDecimal);

    if (randomInteger == 0){
      return SCISSORS
    };      
    
    if (randomInteger == 1){
      return PAPER
    };
    
    if (randomInteger == 2){
      return STONE
    };
  };  

  var playerWin = function (PlayerRPS, ComputerRPS) {
    return (
      (PlayerRPS == SCISSORS && ComputerRPS == PAPER) ||
      (PlayerRPS == PAPER && ComputerRPS == STONE) ||
      (PlayerRPS == STONE && ComputerRPS == SCISSORS)
    );
  };

  var playerDraw = function (PlayerRPS, ComputerRPS) {
    return (
      PlayerRPS == ComputerRPS
    );
  };

  var main = function (input) {
    var PlayerRPS = input
    var ComputerRPS = getComputerRPS()
    var generalMessage = `You used ${input} the computer used ${getComputerRPS()}!`
    var winCounter = `${username} has  ${numOfPlayerWins} number of wins the computer has ${numOfComputerWins} number of wins.`
  
    if (state == "WAITING TO START"){
      username = input
      state = "RPS"
      return `username is now ${input}`
    }

    else if (
      state == "RPS" &&
      input != SCISSORS &&
      input != PAPER &&
      input != STONE
      ) {
      return 'Please input 1 of "scissors", "paper", or "stone" to play the game.';
      }
    
     else if (state == "RPS" && playerDraw(PlayerRPS, ComputerRPS)){
      return `${generalMessage} Draw! No winners here. ${winCounter}` 
    }

    
    else if (state == "RPS" && playerWin(PlayerRPS, ComputerRPS)){
      numOfPlayerWins += 1
      return `${generalMessage} You won! ${winCounter}` 

    }
    else 
      numOfComputerWins += 1;
      return `${generalMessage} You lose. ${winCounter}` 
    
    }