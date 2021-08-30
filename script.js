// constants for game modes
const NAME_MODE = "name";
const CHOICE_MODE = "choice";
const SPS_MODE = "sps";
const MJP_MODE = "mjp";

// constants for output strings
const SPS_HEADER = `SCISSORS! ✌ PAPER! ✋ STONE! ✊`;
const MJP_HEADER = `MUK 묵! ✊ JJI 찌! ✌ PPA 빠! ✋`;
const DRAW_MSG = `It's a draw! The computer is not satisfied. Play again?<br><hr>`;
const WIN_MSG = `You won! Congrats! The computer is angry now. Play again?<br><hr>`;
const LOSE_MSG = `You lost! Oh well :( The computer is gloating in victory. Play again?<br><hr>`;
const CHOICE_MSG = `The game is Scissors Paper Stone. ✌✋✊<br><br>Enter 1 for normal Scissors Paper Stone.<br>Enter 2 for muk-jji-ppa.`;
const ENTER_SPS_MSG = `Enter one of 'scissors', 'paper' or 'stone' to begin playing.`;
const COMPUTER_MODE_ON_MSG = `Computer mode on! The computer will choose for you now. Simply press submit to play a turn.`;
const COMPUTER_MODE_OFF_MSG = `Computer mode off! You're in the driver's seat now. `;
const RULES_NORMAL_MSG = `◀️◀️ Rules back to normal! You can breathe easy now. ◀️◀️`;
const RULES_REVERSED_MSG = `◀️◀️ Rules reversed! I see you're a daring one! ◀️◀️`;
const INVALID_CHOICE_MSG = `You didn't enter a valid choice. The game is Scissors Paper Stone!<br><br>Don't be nervous! Enter one of 'scissors', 'paper' or 'stone'. ✌✋✊`;
const COMPUTER_MODE_ADDITIONAL_MSG = `Computer mode is currently on. Type 'computer' to turn off.<br>`;
const REVERSE_MODE_ADDITIONAL_MSG = `Reverse mode is currently on. Type 'reverse' to turn off.<br>`;

const options = ["stone", "paper", "scissors"]; // available choices of moves

// state variables
var timesUserWon = 0;
var timesTied = 0;
var timesPlayed = 0;
var curGameMode = NAME_MODE;
var userName = "";
var lastWinner = "";
var reverseMode = false;
var computerMode = false;

var initUserName = function (name) {
  // set user name to be the input and return a greeting msg with instructions
  userName = name;
  curGameMode = CHOICE_MODE;
  return `Hello, ${userName}!<br><br>${CHOICE_MSG}`;
};

var initChoiceOfGame = function (choice) {
  // check if valid choice, set game mode if yes and return relevant msg
  if (choice != 1 && choice != 2)
    return `Invalid choice. <br><br>${CHOICE_MSG}`;
  curGameMode = choice == 1 ? SPS_MODE : MJP_MODE;
  return ENTER_SPS_MSG;
};

var toggleComputerMode = function () {
  // change computer mode to be on/off and return relevant msg
  computerMode = !computerMode;
  return computerMode
    ? COMPUTER_MODE_ON_MSG
    : COMPUTER_MODE_OFF_MSG + ENTER_SPS_MSG;
};

var toggleReverseMode = function () {
  // change game mode and return relevant msg
  reverseMode = !reverseMode;
  return reverseMode ? RULES_REVERSED_MSG : RULES_NORMAL_MSG;
};

var generateRandomNum = function (range) {
  // generates random integer from 0 to range - 1, inclusive
  return Math.floor(Math.random() * range);
};

var didUserWin = function (choiceOne, choiceTwo) {
  // check if user won
  // with 0=stone, 1=paper, 2=scissors, happens in one of the below two conditions
  // if reversedmode is on then reverse the outcome
  var userWon = false;
  if (choiceOne - choiceTwo == 1 || choiceOne - choiceTwo == -2) userWon = true;
  if (reverseMode) return !userWon;
  return userWon;
};

var playSPS = function (userChoiceNum, computerChoiceNum) {
  // play the normal SPS
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
  // play muk-jji-ppa
  if (userChoiceNum == computerChoiceNum) {
    timesPlayed++;
    if (lastWinner == "") {
      // if tie and there is no last winner
      timesTied++;
      return DRAW_MSG;
    }
    if (lastWinner == "user") {
      // if tie and there is a last winner, return relevant msg and set last winner back to empty
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
  // get user's choice number either randomly or based on the input and the corresponding index in the array
  var computerChoiceNum = generateRandomNum(options.length);
  var userChoiceNum = computerMode
    ? generateRandomNum(options.length)
    : options.indexOf(userChoice);

  var computerChoice = options[computerChoiceNum];
  var newUserChoice = computerMode ? options[userChoiceNum] : userChoice;

  // initialise output
  var output = curGameMode == MJP_MODE ? MJP_HEADER : SPS_HEADER;
  if (reverseMode) {
    output += " REVERSED MODE! ◀️◀️";
  }
  output += `<br><br>${userName}: I choose ${newUserChoice}!<br>Computer: I choose ${computerChoice}!<br><br>`;

  if (curGameMode == SPS_MODE) {
    output += playSPS(userChoiceNum, computerChoiceNum);
  } else if (curGameMode == MJP_MODE) {
    output += playMJP(userChoiceNum, computerChoiceNum);
  }
  return output;
};

var getPercentage = function (num, denom) {
  // helper function to return a percentage to 1 d.p.
  return denom == 0 ? 0 : ((num / denom) * 100).toFixed(1);
};

var getGameStats = function () {
  // helper function to print the game stats
  var timesComputerWon = timesPlayed - timesUserWon - timesTied;
  return `Times played: ${timesPlayed}<br>
  Wins: ${timesUserWon} (${getPercentage(timesUserWon, timesPlayed)}%)<br>
  Losses: ${timesComputerWon} (${getPercentage(
    timesComputerWon,
    timesPlayed
  )}%)<br>
  Ties: ${timesTied} (${getPercentage(timesTied, timesPlayed)}%)`;
};

var getAdditionalInfo = function () {
  // helper function to convey more info to user
  var output = "";
  if (computerMode || reverseMode) {
    output += "<hr>";
    if (computerMode) output += COMPUTER_MODE_ADDITIONAL_MSG;
    if (reverseMode) output += REVERSE_MODE_ADDITIONAL_MSG;
  }
  return output;
};

var main = function (input) {
  // in name mode, set user name
  if (curGameMode == NAME_MODE) return initUserName(input);

  // in choice mode, set game choice
  if (curGameMode == CHOICE_MODE) return initChoiceOfGame(input);

  // in sps / spsr / mjp mode, play game
  if ([SPS_MODE, MJP_MODE].includes(curGameMode)) {
    // set input to lower case first and trim leading/ending whitespace
    var userChoice = input.toLowerCase().trim();

    // computer mode is an independent mode that stacks on top of sps / mjp mode to help the user choose his weapon
    if (input == "computer") return toggleComputerMode();

    // reverse mode is an independent mode that stacks on top of sps / mjp mode to reverse the game rules
    if (input == "reverse") return toggleReverseMode();

    // check if input is valid
    if (!computerMode && !options.includes(userChoice)) {
      return INVALID_CHOICE_MSG;
    }

    // generate output based on game outcome and print game stats
    output = playGame(userChoice);
    if (lastWinner == "") output += getGameStats(); // dont print game stats if in the middle of a mjp round, this happens when lastWinner is not empty
    output += getAdditionalInfo();
    return output;
  }
};
