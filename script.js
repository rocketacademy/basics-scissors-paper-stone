var main = function (input) {
  // store possible options
  var options = ["stone", "paper", "scissors"];

  // generate computer choice using random num: 0 = stone, 1 = paper, 2 = scissors
  // get user's choice number based on the input and the corresponding index in the array
  var computerChoiceNum = generateRandomNum(options.length);
  var userChoiceNum = options.indexOf(input);

  // return output based on game outcome
  if (isDraw(userChoiceNum, computerChoiceNum)) return `It's a draw!`;
  if (didUserWin(userChoiceNum, computerChoiceNum)) return `You won!`;
  return `You lost!`;
};

var generateRandomNum = function (range) {
  // generates random integer from 0 to range - 1, inclusive
  return Math.floor(Math.random() * range);
};

var isDraw = function (choiceOne, choiceTwo) {
  // check if game is a draw, happens only when choices are same
  return choiceOne == choiceTwo;
};

var didUserWin = function (choiceOne, choiceTwo) {
  // check if user won
  // happens in one of the below two conditions
  if (choiceOne - choiceTwo == 1 || choiceOne - choiceTwo == -2) return true;
  else return false;
};
