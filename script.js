var main = function (input) {
  // store possible options
  var options = ["stone", "paper", "scissors"];

  // check if input is valid
  input = input.toLowerCase().trim();
  if (!options.includes(input))
    return `You didn't enter a valid choice. The game is Scissors Paper Stone!<br><br>\
    Don't be nervous! Enter one of 'scissors', 'paper' or 'stone'. ✌✋✊`;

  // generate computer choice using random num: 0 = stone, 1 = paper, 2 = scissors
  // get user's choice number based on the input and the corresponding index in the array
  var computerChoiceNum = generateRandomNum(options.length);
  var userChoiceNum = options.indexOf(input);

  var computerChoice = options[computerChoiceNum];
  var userChoice = options[userChoiceNum];
  var output = `SCISSORS! ✌ PAPER! ✋ STONE! ✊<br><br>You chose ${userChoice}.<br>The computer chose ${computerChoice}.<br><br>`;

  // add to output based on game outcome
  if (isDraw(userChoiceNum, computerChoiceNum))
    output += `It's a draw!<br><br>The computer is not satisfied.`;
  else if (didUserWin(userChoiceNum, computerChoiceNum))
    output += `You won! Congrats!<br><br>The computer is angry now.`;
  else
    output += `You lost! Oh well :(<br><br>The computer is gloating in victory.`;

  output += " Play again?";
  return output;
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
