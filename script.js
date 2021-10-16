// Declare global variables for use across functions
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var reversed_scissors = "reversed scissors";
var reversed_paper = "reversed paper";
var reversed_stone = "reversed stone";
var totalPlayCount = 0;
var totalDrawCount = 0;
var userWinCount = 0;
var computerWinCount = 0;
var playerName = "";

// Main function to execute the output to browser
var main = function (input) {
  if (!playerName) {       
   
    if (input == "") {         
      return "Please enter your name to continue."  
    }  
  
    playerName = input; 
    console.log(playerName);
    return `Hello ${playerName}, you can start game by entering "scissors", "paper" & "stone".`         
  }    
  
  return playSPS (input);    
};

// Play SPS function
var playSPS = function (playerInput) {  
  var randomComputerSPS = numberToSPS ();
  console.log (randomComputerSPS); // For debugging on output value of randomComputerSPS
  var getIcon = objectIcon (playerInput);
  console.log (getIcon); // For debugging on output value of getIcon
  var getComputerIcon = objectIcon (randomComputerSPS);
  console.log (getComputerIcon); // For debugging on output value of getComputerIcon
  
  // Check and perform input validation
  if (playerInput != scissors && playerInput != reversed_scissors &&
    playerInput != paper && playerInput != reversed_paper &&
    playerInput != stone && playerInput != reversed_stone) {
      var myOutputValue = 'Please enter "scissors", "paper" or "stone" to start.'
  }
    
  // Check input condition for draw
  else if (conditionForDraw (playerInput,randomComputerSPS)) {
    totalPlayCount += 1;
    totalDrawCount += 1;
    myOutputValue = `The computer chose ${randomComputerSPS} ${getComputerIcon}, you chose ${playerInput} ${getIcon}, it is a draw.`
  }
  
  // Check input condition for win
  else if (conditionForWin (playerInput,randomComputerSPS)) {
    totalPlayCount += 1;
    userWinCount += 1;
    myOutputValue = `The computer chose ${randomComputerSPS} ${getComputerIcon}, you chose ${playerInput} ${getIcon}, you win!.`
  }
  
  // All other non-defined conditions will lose
  else {
    totalPlayCount += 1;
    computerWinCount += 1;
    myOutputValue = `The computer chose ${randomComputerSPS} ${getComputerIcon}.<br><br> 
    You chose ${playerInput} ${getIcon}.<br><br>
    You lose! Bummer.<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round!`
  }
  
  var winPercentageComputer = computerWinCount/totalPlayCount * 100;
  winPercentageComputer = winPercentageComputer.toFixed(0);
  var winPercentageUser = userWinCount/totalPlayCount * 100;
  winPercentageUser = winPercentageUser.toFixed(0);

  var callUserName = `Hello ${playerName}!<br><br>`
  var stdMessage = `<br><br>Summary: Total play count is ${totalPlayCount}, 
  total draw count is ${totalDrawCount},
  computer win count is ${computerWinCount}, percentage at ${winPercentageComputer}%, 
  your win count is ${userWinCount}, percentage at ${winPercentageUser}%.`

  return callUserName + myOutputValue + stdMessage;
}

// Function to check draw condition for SPS between Player and Computer
var conditionForDraw = function (player, computer) {
  return (player == computer ||
    player == reversed_scissors && computer == scissors ||
    player == reversed_paper && computer == paper ||
    player == reversed_stone && computer == stone);
}

// Function to check win condition for SPS between Player and Computer
var conditionForWin = function (player, computer) {
  return (player == scissors && computer == paper ||
    player == paper && computer == stone ||
    player == stone && computer == scissors ||
    player == reversed_scissors && computer == stone ||
    player == reversed_paper && computer == scissors ||
    player == reversed_stone && computer == paper);
}

// Generate SPS condition using random numbers
var numberToSPS = function () {
  var randomDecimal = Math.random () * 3;
  var randomInteger = Math.floor (randomDecimal);

  if (randomInteger == 0) {
    return scissors;
  }

  else if (randomInteger == 1) {
    return paper;
  }

  return stone;
}

var objectIcon = function (icon) {
  if (icon == scissors || icon == reversed_scissors) return '✂️';
  else if (icon == paper || icon == reversed_paper) return '🗒';
  else if (icon == stone || icon == reversed_stone) return '🪨';
}
