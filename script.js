const NAME_MODE = "name";
const CHOICE_MODE = "choice";
const SPS_MODE = "sps";
const SPSR_MODE = "spsr";
const MJP_MODE = "mjp";
const options = ["stone", "paper", "scissors"];

const SPS_HEADER = `SCISSORS! ✌ PAPER! ✋ STONE! ✊<br><br>`;
const SPSR_HEADER = `SCISSORS! ✌ PAPER! ✋ STONE! ✊ REVERSED MODE! ◀️◀️<br><br>`;
const MJP_HEADER = `MUK 묵! ✊ JJI 찌! ✌ PPA 빠! ✋<br><br>`;
const DRAW_MSG = `It's a draw! The computer is not satisfied. Play again?<br><hr>`;
const WIN_MSG = `You won! Congrats! The computer is angry now. Play again?<br><hr>`;
const LOSE_MSG = `You lost! Oh well :( The computer is gloating in victory. Play again?<br><hr>`;
const CHOICE_MSG = `The game is Scissors Paper Stone. ✌✋✊<br><br>Enter 1 for normal Scissors Paper Stone.<br>Enter 2 for muk-jji-ppa.`;
const ENTER_SPS_MSG = `Enter one of 'scissors', 'paper' or 'stone' to begin playing.`;
const RULES_NORMAL_MSG = `◀️◀️ Rules back to normal! You can breathe easy now. ◀️◀️<br><br>Type 'reverse' again to go back to reverse mode.`;
const RULES_REVERSED_MSG = `◀️◀️ Rules reversed! I see you're a daring one! ◀️◀️<br><br>Type 'reverse' again to go back to normal rules.`;
const INVALID_CHOICE_MSG = `You didn't enter a valid choice. The game is Scissors Paper Stone!<br><br>Don't be nervous! Enter one of 'scissors', 'paper' or 'stone'. ✌✋✊`;

var timesUserWon = 0;
var timesTied = 0;
var timesPlayed = 0;
var curGameMode = NAME_MODE;
var userName = "";
var lastWinner = "";

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
  if (curGameMode == SPSR_MODE) return !userWon;
  return userWon;
};

var playSPS = function (userChoiceNum, computerChoiceNum) {
  timesPlayed++;
  if (userChoiceNum == computerChoiceNum) {
    timesTied++;
    return DRAW_MSG;
  }
  if (didUserWin(userChoiceNum, computerChoiceNum)) {
    timesUserWon++;
    return WIN_MSG;
  }
  return LOSE_MSG;
};

var playMJP = function (userChoiceNum, computerChoiceNum) {
  if (userChoiceNum == computerChoiceNum) {
    timesPlayed++;
    if (lastWinner == "") {
      timesTied++;
      return DRAW_MSG;
    }
    if (lastWinner == "user") {
      timesUserWon++;
      lastWinner = "";
      return WIN_MSG;
    }
    lastWinner = "";
    return LOSE_MSG;
  }

  if (didUserWin(userChoiceNum, computerChoiceNum)) {
    lastWinner = "user";
    return `${userName}: "Muk-jji-ppa!"<br><br>`;
  }
  lastWinner = "computer";
  return `Computer: "Muk-jji-ppa!"<br><br>`;
};

var playGame = function (userChoice) {
  // generate computer choice using random num: 0 = stone, 1 = paper, 2 = scissors
  // get user's choice number based on the input and the corresponding index in the array
  var computerChoiceNum = generateRandomNum(options.length);
  var userChoiceNum = options.indexOf(userChoice);

  var computerChoice = options[computerChoiceNum];
  var output =
    curGameMode == MJP_MODE
      ? MJP_HEADER
      : curGameMode == SPS_MODE
      ? SPS_HEADER
      : SPSR_HEADER;
  output += `${userName}: I choose ${userChoice}!<br>Computer: I choose ${computerChoice}!<br><br>`;

  if (curGameMode == SPS_MODE || curGameMode == SPSR_MODE) {
    output += playSPS(userChoiceNum, computerChoiceNum);
  } else if (curGameMode == MJP_MODE) {
    output += playMJP(userChoiceNum, computerChoiceNum);
  }
  return output;
};

var getPercentage = function (num, denom) {
  return denom == 0 ? 0 : ((num / denom) * 100).toFixed(1);
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
  if (curGameMode == NAME_MODE) {
    userName = input;
    curGameMode = CHOICE_MODE;
    return `Hello, ${userName}!<br><br>${CHOICE_MSG}`;
  }

  if (curGameMode == CHOICE_MODE) {
    if (input != 1 && input != 2)
      return `Invalid choice. <br><br>${CHOICE_MSG}`;
    curGameMode = input == 1 ? SPS_MODE : MJP_MODE;
    return ENTER_SPS_MSG;
  }

  if ([SPS_MODE, SPSR_MODE, MJP_MODE].includes(curGameMode)) {
    // set input to lower case first and trim leading/ending whitespace
    var userChoice = input.toLowerCase().trim();

    if (input == "reverse") {
      if (curGameMode == MJP_MODE) return INVALID_CHOICE_MSG;
      curGameMode = curGameMode == SPS_MODE ? SPSR_MODE : SPS_MODE;
      return curGameMode == SPS_MODE ? RULES_NORMAL_MSG : RULES_REVERSE_MSG;
    }

    // check if input is valid
    if (!options.includes(userChoice)) {
      return INVALID_CHOICE_MSG;
    }

    // generate output based on game outcome and print game stats
    output = playGame(userChoice);
    if (lastWinner == "") output += getGameStats();
    return output;
  }
};
