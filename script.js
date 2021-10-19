const scissors = "scissors";
const paper = "paper";
const stone = "stone";
const play = "play";
const enterUserInfo = "enterUserInfo";

var totalWins = 0;
var totalLoss = 0;
var totalDraws = 0;
var gameState = enterUserInfo;


var main = function (input) {
  
  var userName = "";
  if (gameState == enterUserInfo) {
    if (input == "") {
      return "Enter your name";
    } else {
      userName = input;
      gameState = play;
      return "Hello, " + userName;
    }
  } else {
    var result = runGame(input, userName);
    return result;
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
  if (playerChoice == computerChoice) {
    return "draw";
  }
  if (((playerChoice == scissors) && (computerChoice == paper)) ||
  ((playerChoice == paper) && (computerChoice == stone)) ||
  ((playerChoice == stone) && (computerChoice == scissors))) {
    return "win";
  } else {
    return "lose";
  }
}

var runGame = function(input, userName) {
  var computerChoice = setChoice();
  var conclusion = drawConclusion(input, computerChoice);
  var returnMsg = `
  The computer chose ${computerChoice}, ${userName} chose ${input}. You ${conclusion}!<br>
  You have ${totalWins} wins, ${totalLoss} losses and ${totalDraws} draws.
  `

  if (input != scissors && input != paper && input != stone) {
    return `You keyed in an invalid option; choose from '${scissors}', '${paper}' or '${stone}'.`;
  }

  if (conclusion == "win") {
    totalWins = totalWins + 1;
  } else if (conclusion == "lose") {
    totalLoss = totalLoss + 1;
  } else {
    totalDraws = totalDraws + 1;
  }
  return returnMsg;
}