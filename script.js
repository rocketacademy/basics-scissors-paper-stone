// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
var main = function (input) {
  var letsPlay = gameRules(input);
  return letsPlay;
};

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
var gameRules = function (input) {
  var systemThrow = systemGuess();

  // if what we guess is the same as what the system throws, then it is a draw
  if (input == systemThrow) {
    console.log("Input");
    console.log(input);
    console.log("System");
    console.log(systemThrow);
    return `It's a draw! You threw ${inputIcon} and the program threw ${systemIcon}.`;
  }
  // if what we guess is different from the what the system throws, and based on gamerules, we win
  if (
    (input == "scissors" && systemThrow == "paper") ||
    (input == "paper" && systemThrow == "stone") ||
    (input == "stone" && systemThrow == "scissors")
  ) {
    console.log("Input");
    console.log(input);
    console.log("System");
    console.log(systemThrow);
    return `You won! You threw ${inputIcon} and the program threw ${systemIcon}.`;
  }
  // if what we guess is different from the what the system throws, and based on gamerules, we lose
  if (
    (input == "scissors" && systemThrow == "stone") ||
    (input == "paper" && systemThrow == "scissors") ||
    (input == "stone" && systemThrow == "paper")
  ) {
    console.log("Input");
    console.log(input);
    console.log("System");
    console.log(systemThrow);
    return `You lose! You threw ${inputIcon} and the program threw ${systemIcon}.`;
  }
  return `Please type either "scissors" or "paper" or "stone".`;
};

// this is to match each randomThrow integer to either scissors or paper or stone
var systemGuess = function () {
  var guess = randomThrow();
  if (guess == 1) {
    return `scissors`;
  }
  if (guess == 2) {
    return `paper`;
  }
  if ((guess = 3)) {
    return `stone`;
  }
};

var randomThrow = function () {
  // random number between 0-1 then multiple by 3
  var randomDecimal = Math.random() * 3;
  // rounding down the value to the nearest integer
  var randomInteger = Math.floor(randomDecimal);
  // creating a range from 1-3
  var finalThrow = randomInteger + 1;
  return finalThrow;
};

// var inputIcon = icons(input);
// var systemIcon = icons(systemThrow);
// var icons = function () {
//   if (input == "scissors" || systemThrow == "scissors") {
//     return `\u270C`;
//   }
//   if (input == "paper" || systemThrow == "paper") {
//     return `\u1F590`;
//   }
//   if (input == "stone" || systemThrow == "stone") {
//     retun`\u270A`;
//   }
// };
