var main = function (input) {
  //computer choice
  var comChoice = generateComChoice();
  console.log(comChoice);

  //draw
  if (input == comChoice) {
    return "The computer chose ${comChoice} and you chose ${input}. It is a draw. Play again!";
  }

  //winning
  else if (
    (input == "scissors" && comChoice == "paper") ||
    (input == "paper" && comChoice == "stone") ||
    (input == "stone" && comChoice == "scissors")
  ) {
    return "The computer chose ${comChoice} and you chose ${input}. You won! Congrats!";
  }

  //lost
  else if (
    (input == "scissors" && comChoice == "stone") ||
    (input == "paper" && comChoice == "scissors") ||
    (input == "stone" && comChoice == "paper")
  ) {
    return "The computer chose ${comChoice} and you chose ${input}. You lost! Try again!";
  }
  //input validation
  return "Your input ${input} is invalid. Please only enter scissors, paper, or stone.";
};

//generate a random number between 0 and 3
var generateNum = function () {
  var randomDecimal = Math.random() * 3;

  //convert to integer
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

//assign an element to a value between 0 and 3
var generateComChoice = function () {
  var numComChoice = 3;
  var randomComChoice = generateNum(numComChoice);

  if (randomComChoice == 1) {
    return "scissors";
  }

  if (randomComChoice == 2) {
    return "paper";
  }

  if (randomComChoice == 3) {
    return "stone";
  }
};
