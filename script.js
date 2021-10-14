// Declare global variables for use across functions
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var reversed_scissors = "reversed scissors";
var reversed_paper = "reversed paper";
var reversed_stone = "reversed stone";

// Main function to execute the output to browser
var main = function (input) {  
  var randomComputerSPS = numberToSPS ();
  console.log (randomComputerSPS); // For debugging on output value of randomComputerSPS
  var getIcon = objectIcon (input);
  console.log (getIcon); // For debugging on output value of getIcon
  var getComputerIcon = objectIcon (randomComputerSPS);
  console.log (getComputerIcon); // For debugging on output value of getComputerIcon

  // Check and perform input validation
  if (input != scissors && input != reversed_scissors &&
    input != paper && input != reversed_paper &&
    input != stone && input != reversed_stone) {
      var myOutputValue = 'Please enter "scissors", "paper" or "stone" to start.'
  }
  
  // Check input condition for draw
  else if (conditionForDraw (input,randomComputerSPS)) {
    myOutputValue = `The computer chose ${randomComputerSPS} ${getComputerIcon}, you chose ${input} ${getIcon}, it is a draw.`
  }
  
  // Check input condition for win
  else if (conditionForWin (input,randomComputerSPS)) {
    myOutputValue = `The computer chose ${randomComputerSPS} ${getComputerIcon}, you chose ${input} ${getIcon}, you win!.`
  }
  
  // All other non-defined conditions will lose
  else {
    myOutputValue = `The computer chose ${randomComputerSPS} ${getComputerIcon}.<br><br> 
    You chose ${input} ${getIcon}.<br><br>
    You lose! Bummer.<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round!`
  }

  return myOutputValue;
};

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
