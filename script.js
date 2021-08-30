var timesUserWon = 0;
var timesTied = 0;
var timesPlayed = 0;
var curGameMode = "name";
var userName = "";

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
  timesPlayed++;
  if (userChoiceNum == computerChoiceNum) {
    timesTied++;
    return `It's a draw! The computer is not satisfied.`;
  }
  if (didUserWin(reversedMode, userChoiceNum, computerChoiceNum)) {
    timesUserWon++;
    return `You won! Congrats! The computer is angry now.`;
  }
  return `You lost! Oh well :( The computer is gloating in victory.`;
};

var getPercentage = function (num, denom) {
  return ((num / denom) * 100).toFixed(1);
};

var getGameStats = function () {
  var timesComputerWon = timesPlayed - timesUserWon - timesTied;
  return `Times played: ${timesPlayed}<br>
  Wins: ${timesUserWon} (${getPercentage(timesUserWon, timesPlayed)}%)<br>
  Losses: ${timesComputerWon} (${getPercentage(
    timesComputerWon,
    timesPlayed
  )}%)<br>
  Ties: ${timesTied} (${getPercentage(timesTied, timesPlayed)}%)`;
};

var main = function (input) {
  if (curGameMode == "name") {
    userName = input;
    curGameMode = "sps";
    return `Hello, ${userName}!<br><br>The game is Scissors Paper Stone. Enter one of 'scissors', 'paper' or 'stone' to begin. ✌✋✊`;
  }

  if (curGameMode == "sps") {
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
      return `You didn't enter a valid choice. The game is Scissors Paper Stone!<br><br>Don't be nervous! Enter one of 'scissors', 'paper' or 'stone'. ✌✋✊<br><br>Or if you're feeling adventurous, try reverse mode by adding 'reversed' in front of your choice! (e.g. reversed scissors)`;
    }

    // generate computer choice using random num: 0 = stone, 1 = paper, 2 = scissors
    // get user's choice number based on the input and the corresponding index in the array
    var computerChoiceNum = generateRandomNum(options.length);
    var userChoiceNum = options.indexOf(userChoice);

    var computerChoice = options[computerChoiceNum];
    var output = `SCISSORS! ✌ PAPER! ✋ STONE! ✊<br><br>${userName}: I choose ${userChoice}!<br>Computer: I choose ${computerChoice}!<br><br>`;

    if (reversedMode) {
      output += "REVERSED MODE!<br><br>";
    }

    // add to output based on game outcome
    output += playGame(reversedMode, userChoiceNum, computerChoiceNum);
    output += " Play again?<br><hr>";
    output += getGameStats();
    return output;
  }
};
