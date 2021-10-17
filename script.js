// Global variables
// Objects
var scissors = 'scissors';
var paper = 'paper';
var stone = 'stone';
var reversed_scissors = 'reversed scissors';
var reversed_paper = 'reversed paper';
var reversed_stone = 'reversed stone';
var playerName = '';

// Number counters
var userWinCount = 0;
var computerWinCount = 0;
var drawCount = 0;
var totalPlayCount = 0;

// Game modes
var gameMode = '';
var SPS = 'sps';
var reverseSPS = 'reversed sps'

// Main function
var main = function (input) {  
  // 1st input validation to verify username  
  if (!playerName) {        
    if (!input) {         
      return "Please enter your name 1st to start."  
    }    
    playerName = input; // Set username as input throughout the entire game
    return `Hello ${playerName}, you can start game by entering your game selection.
    <br><br>1 - sps<br><br>2 - reversed sps
    <br><br>Type in the number or full name of game.`
  }     
  
  // 2nd input validation to verify game selection
  if (!gameMode) {
    if (!input || (input != 1 && input !=2 && input != SPS && input != reverseSPS)){      
      return `Hello ${playerName}, it is an invalid entry, 
      please enter your game selection.
      <br><br>1 - sps<br><br>2 - reversed sps
      <br><br>Type in the number or full name of game.` 
    }

    else if (input == 1 || input == SPS) {            
      gameMode = input;
      return `Hello ${playerName}, you can start playing standard SPS by entering 
      "scissors", "paper" & "stone".`
    }

    else if (input == 2 || input == reverseSPS) {            
      gameMode = input;
      return `Hello ${playerName}, you can start playing reverse SPS by entering 
      "reversed scissors", "reversed paper" & "reversed stone".`
    }
  }

  // 3rd input validation to verify input in either SPS or Reverse SPS game
  if (gameMode == 1 || gameMode == SPS) {
    var playerSelection = '';    
    
    if (!input || (input != scissors && input != paper && input != stone)) {
      return `Hello ${playerName}, it is an invalid entry, please enter "scissors", 
      "paper" & "stone".`
    }

    else {
      playerSelection = input;
      return playSPSGame (playerSelection);
    }    
  }  
  
  else if (gameMode == 2 || gameMode == reverseSPS) {
    var playerSelection = '';    
    
    if (!input || (input != reversed_scissors && input != reversed_paper 
      && input != reversed_stone)) {
      return `Hello ${playerName}, it is an invalid entry, please enter 
      "reversed scissors", "reversed paper" & "reversed stone".`
    }

    else {
      playerSelection = input;
      return playSPSGame (playerSelection);
    }    
  }   
};

// Play SPS function
var playSPSGame = function (playerInput) {
  var computerInput = numberToSPS ();  

  if (determineWinCondition (playerInput, computerInput)) {
    totalPlayCount += 1;
    userWinCount += 1;
    return standardMessage1 (playerInput, computerInput) + 'you win.' + 
    standardMessage2 (totalPlayCount, userWinCount, computerWinCount, drawCount)
    + standardMessage3 ();
  }

  if (determineDrawCondition (playerInput, computerInput)) {
    totalPlayCount += 1;
    drawCount += 1;
    return standardMessage1 (playerInput, computerInput) + 'it is a draw.' + 
    standardMessage2 (totalPlayCount, userWinCount, computerWinCount, drawCount)
    + standardMessage3 ();
  }

  else {
    totalPlayCount += 1;
    computerWinCount += 1;
    return standardMessage1 (playerInput, computerInput) + 'you lose.' 
    + standardMessage2 (totalPlayCount, userWinCount, computerWinCount, drawCount)
    + standardMessage3 ();
  }  
}

// Standard message function
var standardMessage1 = function (playerInput, computerInput) {
  var getPlayerIcon = objectIcon (playerInput);
  var getComputerIcon = objectIcon (computerInput);
  return `Hello ${playerName}, the computer chose ${computerInput} ${getComputerIcon}, 
  you chose ${playerInput} ${getPlayerIcon}, `
}

// Standard message function
var standardMessage2 = function (totalPlayCount, userWinCount, computerWinCount, drawCount) {  
  return `<br><br>There are total ${totalPlayCount} round(s) played.
  <br><br>The computer win count is ${computerWinCount}, 
  your win count is ${userWinCount}, draw count is ${drawCount}.`
}

var standardMessage3 = function () {
  if (gameMode == reverseSPS) {
    return `<br><br>Please enter "reversed scissors", "reverse paper" or "reverse stone"
    to continue playing. Else refresh the browser to start over again.`
  }
  return `<br><br>Please enter "reversed scissors", "reverse paper" or "reverse stone"
  to continue playing. Else refresh the browser to start over again.`
}


// SPS win condition function
var determineWinCondition = function (playerInput, computerInput) {
  if (gameMode == reverseSPS) {
    return (
      (playerInput == reversed_scissors && computerInput == stone) ||  
      (playerInput == reversed_paper && computerInput == scissors) ||  
      (playerInput == reversed_stone && computerInput == paper)
    );
  }
  return (
    (playerInput == scissors && computerInput == paper) ||  
    (playerInput == paper && computerInput == stone) ||  
    (playerInput == stone && computerInput == scissors)
  );
}


// SPS draw condition function
var determineDrawCondition = function (playerInput, computerInput) {
  if (gameMode == reverseSPS) {
    return ((playerInput == reversed_scissors && computerInput == scissors) ||
    (playerInput == reversed_paper && computerInput == paper) ||
    (playerInput == reversed_stone && computerInput == stone)
    );
  }
  return playerInput == computerInput;
};


// Generate SPS condition using random numbers
var numberToSPS = function () {
  var randomInteger = Math.floor(Math.random () * 3) + 1;  

  if (randomInteger == 0) {
    return scissors;
  } else if (randomInteger == 1) {
    return paper;
  } else return stone;
};


// Generate object icons for SPS
var objectIcon = function (icon) {
  if (icon == scissors || icon == reversed_scissors) return '✂️';
  else if (icon == paper || icon == reversed_paper) return '🗒';
  else if (icon == stone || icon == reversed_stone) return '🪨';
};
