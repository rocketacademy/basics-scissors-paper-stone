var totalWins = 0;
var totalLoss = 0;
var totalDraws = 0;
const scissors = "scissors";
const paper = "paper";
const stone = "stone";

var main = function (input) {
  if (input != scissors && input != paper && input != stone) {
    return `You keyed in an invalid option; choose from '${scissors}', '${paper}' or '${stone}'.`;
  }

  var computerChoice = setChoice();
  var conclusion = drawConclusion(input, computerChoice);
  if (conclusion == "win") {
    totalWins = totalWins + 1;
    return `
    The computer chose ${computerChoice}, you chose ${input}. You win!
    You have ${totalWins} wins, ${totalLoss} losses and ${totalDraws} draws.
    `
  } else if (conclusion == "lose") {
    totalLoss = totalLoss + 1;
    return `
    The computer chose ${computerChoice}, you chose ${input}. You lose!
    You have ${totalWins} wins, ${totalLoss} losses and ${totalDraws} draws.
    `
  } else {
    totalDraws = totalDraws + 1;
    return `
    The computer chose ${computerChoice}, you chose ${input}. It's a draw!
    You have ${totalWins} wins, ${totalLoss} losses and ${totalDraws} draws.
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

var setChoice = function() {
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

var drawConclusion = function (playerChoice, computerChoice) {
  if (playerChoice == scissors) {
    if (computerChoice == paper) {
      return "win";
    } else if (computerChoice == stone) {
      return "lose";
    } else {
      return "draw";
    }
  }

  if (playerChoice == paper) {
    if (computerChoice == stone) {
      return "win";
    } else if (computerChoice == scissors) {
      return "lose";
    } else {
      return "draw";
    }
  }

  if (playerChoice == stone) {
    if (computerChoice == scissors) {
      return "win";
    } else if (computerChoice == paper) {
      return "lose";
    } else {
      return "draw";
    }
  }

  }
