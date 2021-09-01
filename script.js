//Global for game states

//2 states of the game
var getUsername = "Username";
var startSPSGame = "SPSgame";

//Setting the conditions for game state one.
var currentGameState = getUsername;
var userName = "";

//The signs
var scissors = "✂️";
var stone = "🪨";
var paper = "📰";

//Counter for amount of winning and losing and the draws
var computerWinCounter = 0;
var userWinCounter = 0;
var totalMatchesPlayed = 1;
var drawCounter = 0;

//Get integers to attach the words later for the computer.
var getInteger = function () {
  //Getting the random number.
  var numberForSPS = Math.ceil(Math.random() * 3);
  console.log(numberForSPS);
  return numberForSPS;
};
//Get the integers attached to the global shapes for the computer.
var getSigns = function () {
  var getNumberstoSigns = getInteger();

  console.log(`1 = 'scissors', 2 = 'paper', 3 = 'stone'`);
  console.log(getNumberstoSigns);
  if (getNumberstoSigns == 1) {
    return scissors;
  }
  if (getNumberstoSigns == 2) {
    return paper;
  }
  if (getNumberstoSigns == 3) {
    return stone;
  }
};

//Changing the input of the user to the global shapes used.

var getUserPick = function (userInput) {
  if (userInput == "scissors") {
    return scissors;
  }
  if (userInput == "stone") {
    return stone;
  }
  if (userInput == "paper") {
    return paper;
  }
};

//System calculates the winning, losing and draw condition.

var SPSGame = function (insert) {
  var computerPick = getSigns();
  var userPick = getUserPick(insert);
  console.log("computer PICK");
  console.log(computerPick);

  var winMessage = `You won! You pick ${userPick} while Computer pick ${computerPick}.`;
  var loseMessage = `You lose! You pick ${userPick} while Computer pick ${computerPick}.`;
  var drawMessage = `Draw! Both pick ${computerPick}.`;
  var invalidMessage = `Only type in scissors, paper or stone to play.`;
  if (
    (userPick == scissors && computerPick == paper) ||
    (userPick == paper && computerPick == stone) ||
    (userPick == stone && computerPick == scissors)
  ) {
    userWinCounter = userWinCounter + 1;
    return winMessage;
  }
  if (
    (userPick == scissors && computerPick == stone) ||
    (userPick == paper && computerPick == scissors) ||
    (userPick == stone && computerPick == paper)
  ) {
    computerWinCounter = computerWinCounter + 1;
    return loseMessage;
  }

  if (userPick == computerPick) {
    drawCounter = drawCounter + 1;
    return drawMessage;
  }
  if (userPick != "scissors" || userPick != "paper" || userPick != "stone") {
    return invalidMessage;
  }
};

//Return message based on the counters

var getCounterMessage = function () {
  console.log("WOT");
  if (userWinCounter > computerWinCounter) {
    return ` You're winning the game so far! Your score, ${userName} is ${userWinCounter}/${totalMatchesPlayed} while Computer's score ${computerWinCounter}/${totalMatchesPlayed}! There's been 
    ${drawCounter} draws. Nice!`;
  }
  if (userWinCounter < computerWinCounter) {
    return ` You're losing the game! Computer's score is ${computerWinCounter}/${totalMatchesPlayed} while yours, ${userName} is ${userWinCounter}/${totalMatchesPlayed}. There's been ${drawCounter} draws. Go on and beat it!`;
  }
  if (userWinCounter == computerWinCounter) {
    return ` It's a tie! The score is ${userWinCounter} / ${totalMatchesPlayed}. There's been ${drawCounter} draws.
    Keep going ${userName}!`;
  }
};

//Main function executing the input of the player.
var main = function (input) {
  //Attaching SPS functions to variables.
  var gameResults = SPSGame(input);
  var counterMessage = getCounterMessage(input);

  //Before input of each game state
  //Game state 1
  if (input == "" && currentGameState == getUsername) {
    return "Hey! I need a name. ";
  }
  //Game state 2
  if (currentGameState == startSPSGame && input == "") {
    return "Type scissors, paper or stone to play.";
  }

  //After input of each game state
  //Game state 1
  if (currentGameState == getUsername) {
    userName = input;
    currentGameState = startSPSGame;
    return `${userName}, LETS BEGIN!`;
  }
  // Game state 2
  if (
    currentGameState == startSPSGame &&
    (input == "scissors" || input == "paper" || input == "stone") &&
    (totalMatchesPlayed += 1)
  ) {
    currentGameState == startSPSGame;
    return gameResults + counterMessage;
  }
};
