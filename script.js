var generateRandomNum = function (range) {
  // generates random integer from 0 to range - 1, inclusive
  return Math.floor(Math.random() * range);
};

var didUserWin = function (reversedMode, choiceOne, choiceTwo) {
  // check if user won
  // happens in one of the below two conditions
  // if reversedmode is on then reverse the outcome
  var userWon = false;
  if (choiceOne - choiceTwo == 1 || choiceOne - choiceTwo == -2) userWon = true;
  if (reversedMode) return !userWon;
  return userWon;
};

var playGame = function (reversedMode, userChoiceNum, computerChoiceNum) {
  if (userChoiceNum == computerChoiceNum) {
    return `It's a draw!<br><br>The computer is not satisfied.`;
  } else if (didUserWin(reversedMode, userChoiceNum, computerChoiceNum)) {
    return `You won! Congrats!<br><br>The computer is angry now.`;
  } else {
    return `You lost! Oh well :(<br><br>The computer is gloating in victory.`;
  }
};

var main = function (input) {
  // store possible options
  var options = ["stone", "paper", "scissors"];

  // set input to lower case first and trim leading/ending whitespace
  var userChoice = input.toLowerCase().trim();

  // create variable for the reversed word to look for, and set reversed mode as off initially
  var reversedModeCheck = "reversed";
  var reversedMode = false;

  // check if the input starts with reversed
  if (userChoice.startsWith(reversedModeCheck)) {
    // set reversed mode to on and replace the "reversed" word in the input
    reversedMode = true;
    userChoice = userChoice.replace(reversedModeCheck, "").trim();
  }

  // check if input is valid
  if (!options.includes(userChoice)) {
    return `You didn't enter a valid choice. The game is Scissors Paper Stone!<br><br>
    Don't be nervous! Enter one of 'scissors', 'paper' or 'stone'. ✌✋✊<br><br>
    Or if you're feeling adventurous, try reverse mode by adding 'reversed' in front of your choice! (e.g. reversed scissors)`;
  }

  // generate computer choice using random num: 0 = stone, 1 = paper, 2 = scissors
  // get user's choice number based on the input and the corresponding index in the array
  var computerChoiceNum = generateRandomNum(options.length);
  var userChoiceNum = options.indexOf(userChoice);

  var computerChoice = options[computerChoiceNum];
  var output = `SCISSORS! ✌ PAPER! ✋ STONE! ✊<br><br>You chose ${userChoice}.<br>The computer chose ${computerChoice}.<br><br>`;

  if (reversedMode) {
    output += "REVERSED MODE!<br><br>";
  }

  // add to output based on game outcome
  output += playGame(reversedMode, userChoiceNum, computerChoiceNum);
  output += " Play again?";
  return output;
};
