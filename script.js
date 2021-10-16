//generate a random integer from 1 to 3
var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// assign word values to the numbers
var generateRandomSPS = function () {
  var randomSPS = generateRandomInteger();
  if (randomSPS == 1) {
    return "scissors";
  }
  if (randomSPS == 2) {
    return "paper";
  }
  if (randomSPS == 3) {
    return "stone";
  }
};

// set the winning conditions
var scissorsPaperStone = function (input) {
  console.log(input);
  var scissorsPaperStoneResponse = generateRandomSPS();
  console.log(scissorsPaperStoneResponse);
  if (input == scissorsPaperStoneResponse) {
    return `You chose ${input} and the computer chose ${scissorsPaperStoneResponse} - its a draw!`;
  }
  if (input == "scissors" && scissorsPaperStoneResponse == "paper") {
    return `You chose ${input} and the computer chose ${scissorsPaperStoneResponse} - you win!`;
  }
  if (input == "scissors" && scissorsPaperStoneResponse == "stone") {
    return `You chose ${input} and the computer chose ${scissorsPaperStoneResponse} - you lose!`;
  }
  if (input == "paper" && scissorsPaperStoneResponse == "stone") {
    return `You chose ${input} and the computer chose ${scissorsPaperStoneResponse} - you win!`;
  }
  if (input == "paper" && scissorsPaperStoneResponse == "scissors") {
    return `You chose ${input} and the computer chose ${scissorsPaperStoneResponse} - you lose!`;
  }
  if (input == "stone" && scissorsPaperStoneResponse == "scissors") {
    return `You chose ${input} and the computer chose ${scissorsPaperStoneResponse} - you win!`;
  }
  if (input == "stone" && scissorsPaperStoneResponse == "paper") {
    return `You chose ${input} and the computer chose ${scissorsPaperStoneResponse} - you lose!`;
  }
  if (input != "scissors" && input != "paper" && input != "stone") {
    return "Don't you know how to play scissors paper stone??";
  }
};
var main = function (input) {
  var myOutputValue = scissorsPaperStone(input);
  return myOutputValue;
};
