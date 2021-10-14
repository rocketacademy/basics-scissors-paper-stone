var main = function (input) {
  const scissors = "scissors";
  const paper = "paper";
  const stone = "stone";

  
  if (input != scissors && input != paper && input != stone) {
    return `You keyed in an invalid option; choose from '${scissors}', '${paper}' or '${stone}'.`;
  }

  var roll = rollDice();
  let guess;

  if (roll == 0) {
    guess = scissors
  } 
  if (roll == 1) {
    guess = paper
  }
  if (roll == 2) {
    guess = stone
  }

  if (input == guess) {
    return `The computer chose ${guess}, you chose ${input}. You win!`
  } else {
    return `The computer chose ${guess}, you chose ${input}. You lose!`
  }
  
};

var rollDice = function () {  
  // produces a float between 0 and 3
  var randomFloat = Math.random() * 3;  
  // take off the decimal  
  var resultInteger = Math.floor(randomFloat);  
  return resultInteger;
};