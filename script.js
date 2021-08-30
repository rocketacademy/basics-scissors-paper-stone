var timesUserWon = 0;
var timesTied = 0;
var timesPlayed = 0;
var curGameMode = "name";
var userName = "";

var generateRandomNum = function (range) {
  // generates random integer from 0 to range - 1, inclusive
  return Math.floor(Math.random() * range);
};

var didUserWin = function (choiceOne, choiceTwo) {
  // check if user won
  // happens in one of the below two conditions
  // if reversedmode is on then reverse the outcome
  var userWon = false;
  if (choiceOne - choiceTwo == 1 || choiceOne - choiceTwo == -2) userWon = true;
  if (curGameMode == "spsr") return !userWon;
  return userWon;
};

var playGame = function (options, userChoice) {
  // generate computer choice using random num: 0 = stone, 1 = paper, 2 = scissors
  // get user's choice number based on the input and the corresponding index in the array
  var computerChoiceNum = generateRandomNum(options.length);
  var userChoiceNum = options.indexOf(userChoice);

  var computerChoice = options[computerChoiceNum];
  var output = `SCISSORS! ✌ PAPER! ✋ STONE! ✊<br><br>${userName}: I choose ${userChoice}!<br>Computer: I choose ${computerChoice}!<br><br>`;

  if (curGameMode == "spsr") {
    output += "REVERSED MODE!<br><br>";
  }

  timesPlayed++;
  if (userChoiceNum == computerChoiceNum) {
    timesTied++;
    output += `It's a draw! The computer is not satisfied.`;
  } else if (didUserWin(userChoiceNum, computerChoiceNum)) {
    timesUserWon++;
    output += `You won! Congrats! The computer is angry now.`;
  } else {
    output += `You lost! Oh well :( The computer is gloating in victory.`;
  }
  return output;
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

  if (curGameMode == "sps" || curGameMode == "spsr") {
    if (input == "reverse") {
      curGameMode = curGameMode == "sps" ? "spsr" : "sps";
      return curGameMode == "sps"
        ? `◀️◀️ Rules back to normal! You can breathe easy now. ◀️◀️<br><br>Type 'reverse' again to go back to reverse mode.`
        : `◀️◀️ Rules reversed! I see you're a daring one! ◀️◀️<br><br>Type 'reverse' again to go back to normal rules.`;
    }

    // store possible options
    var options = ["stone", "paper", "scissors"];

    // set input to lower case first and trim leading/ending whitespace
    var userChoice = input.toLowerCase().trim();

    // check if input is valid
    if (!options.includes(userChoice)) {
      return `You didn't enter a valid choice. The game is Scissors Paper Stone!<br><br>Don't be nervous! Enter one of 'scissors', 'paper' or 'stone'. ✌✋✊<br><br>Or if you're feeling adventurous, try reverse mode by typing 'reverse'`;
    }

    // generate output based on game outcome and print game stats
    output = playGame(options, userChoice);
    output += " Play again?<br><hr>";
    output += getGameStats();
    return output;
  }
};
