// setting the states to keep track of the wins for user and computer, as well as the counting of rounds and storing of username
var userWin = 0;
var computerWin = 0;
var roundsCount = 0;
var userName = "";

// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
var main = function (input) {
  var letsPlay = gameRules(input);
  return letsPlay;
};

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
var gameRules = function (input) {
  var systemThrow = systemGuess();
  var userWinPercent = (userWin / roundsCount) * 100;
  var computerWinPercent = (computerWin / roundsCount) * 100;
  if (userName == "") {
    // assumption is user wont type or keyed in 1 space
    if (
      input == "" ||
      input == " " ||
      input == "scissors" ||
      input == "paper" ||
      input == "stone"
    ) {
      return `Please set a username first by typing your username in the input box.`;
    }
    userName = input;
    return `You have set your username as "${input}". Now, to start the game, please enter either "scissors" or "paper" or "stone". Enjoy!`;
  }
  // if what we guess is the same as what the system throws, then it is a draw
  if (input == systemThrow) {
    console.log("Input");
    console.log(input);
    console.log("System");
    console.log(systemThrow);
    roundsCount = roundsCount + 1;
    userWinPercent = (userWin / roundsCount) * 100;
    computerWinPercent = (computerWin / roundsCount) * 100;
    return `It's a draw! <br> ${userName} threw ${input} and the program threw ${systemThrow}. <br> It's been ${roundsCount} round(s) and the scores are as such: <br> ${userName} ${userWin} (${userWinPercent.toFixed(
      2
    )}%):  Computer ${computerWin} (${computerWinPercent.toFixed(2)}%)`;
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
    userWin = userWin + 1;
    roundsCount = roundsCount + 1;
    userWinPercent = (userWin / roundsCount) * 100;
    computerWinPercent = (computerWin / roundsCount) * 100;
    return `${userName} won! <br> ${userName} threw ${input} and the program threw ${systemThrow}. <br> It's been ${roundsCount} round(s) and the scores are as such: <br> ${userName} ${userWin} (${userWinPercent.toFixed(
      2
    )}%):  Computer ${computerWin} (${computerWinPercent.toFixed(2)}%)`;
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
    computerWin = computerWin + 1;
    roundsCount = roundsCount + 1;
    userWinPercent = (userWin / roundsCount) * 100;
    computerWinPercent = (computerWin / roundsCount) * 100;
    return `${userName} lose! <br> ${userName} threw ${input} and the program threw ${systemThrow}. <br> It's been ${roundsCount} round(s) and the scores are as such: <br> ${userName} ${userWin} (${userWinPercent.toFixed(
      2
    )}%):  Computer ${computerWin} (${computerWinPercent.toFixed(2)}%)`;
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
