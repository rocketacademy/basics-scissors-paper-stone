var main = function (input) {
  if (inputValidation(input)) {
    return `You entered ${input} which is not scissors, paper or stone. Please try again.`;
  }

  var randNumber = randomNumGenerator();
  console.log(randNumber);
  var handFromProgram = playByProgram(randNumber);
  var result = winningHand(input, handFromProgram);

  var myOutputValue = `${result} You played ${input} and the program played ${handFromProgram}.`;
  return myOutputValue;
};

//to validate user input
var inputValidation = function (userGuess) {
  if (
    !(userGuess == "scissors" || userGuess == "stone" || userGuess == "paper")
  ) {
    return true;
  }
};

//to evaluate the winner
var winningHand = function (userInput, programPlay) {
  if (userInput == programPlay) {
    return "It is a draw!";
  }
  if (
    (userInput == "scissors" && programPlay == "paper") ||
    (userInput == "paper" && programPlay == "stone") ||
    (userInput == "stone" && programPlay == "scissors")
  ) {
    return "You win!";
  }
  if (
    (userInput == "stone" && programPlay == "paper") ||
    (userInput == "scissors" && programPlay == "stone") ||
    (userInput == "paper" && programPlay == "scissors")
  ) {
    return "You lost!";
  }
};

//to match the random number to the scissors, paper and stone
var playByProgram = function (randomNum) {
  if (randomNum == 1) {
    return "scissors";
  }
  if (randomNum == 2) {
    return "paper";
  }
  if (randomNum == 3) {
    return "stone";
  }
};

//to randomly generate a number from 1 to 3
var randomNumGenerator = function () {
  //Math.random generate a decimal from 0 to 1
  var randomDecimal = Math.random() * 3;
  //Math.floor round the number down to an integer
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
