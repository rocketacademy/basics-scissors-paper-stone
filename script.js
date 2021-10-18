var totalWins = 0;
var totalLoss = 0;
const scissors = "scissors";
const paper = "paper";
const stone = "stone";

var main = function (input) {
  if (input != scissors && input != paper && input != stone) {
    return `You keyed in an invalid option; choose from '${scissors}', '${paper}' or '${stone}'.`;
  }

  var computerChoice = setWinningChoice();
  if (input == computerChoice) {
    totalWins = totalWins + 1;
    return `
    You have ${totalWins} wins and ${totalLoss} losses.
    The computer chose ${computerChoice}, you chose ${input}. You win!
    `
  } else {
    totalLoss = totalLoss + 1;
    return `
    You have ${totalWins} wins and ${totalLoss} losses.
    The computer chose ${computerChoice}, you chose ${input}. You lose!
    `
  }
  
};

var rollDice = function () {  
  // produces a float between 0 and 3
  var randomFloat = Math.random() * 3;  
  // take off the decimal  
  var resultInteger = Math.floor(randomFloat);  
  return resultInteger;
};

var setWinningChoice = function() {
  var roll = rollDice();

  if (roll == 0) {
    return scissors;
  } 
  if (roll == 1) {
    return paper;
  }
  if (roll == 2) {
    return stone;
  }
}