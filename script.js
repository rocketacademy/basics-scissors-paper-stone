  var SCISSORS = 'scissors';
  var PAPER = 'paper';
  var STONE = 'stone';


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

    if (
      input != SCISSORS &&
      input != PAPER &&
      input != STONE
      ) {
      return 'Please input 1 of "scissors", "paper", or "stone" to play the game.';
      }
    if (playerDraw(PlayerRPS, ComputerRPS)){
      return "DRAW"
    }

    
    if (playerWin(PlayerRPS, ComputerRPS)){
      return "WIN"

    }

    return "LOSE"
    
    }
console.log(PlayerRPS,ComputerRPS)