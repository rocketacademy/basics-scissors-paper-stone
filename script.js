var rock = "stone";
var paper = "paper";
var scissors = "scissors";
var reversedRock = "reversed stone";
var reversedPaper = "reversed paper";
var reversedScissors = "reversed scissors";
var simpleMessage =
  'Now you can type "scissors" "paper" or "stone" to play another round!';
var normal = "normal";
var reversedVersion = "reversed sps";
var normal = "normal";

var gamePlayed = -2;
var gameWon = 0;
var inputVar = "";
var inputName = "";
var gameMode = "blom mulai";

//to randomize output given by the computer
var randomOutput = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  //console.log(randomInteger);
  if (randomInteger == 0) return rock;
  if (randomInteger == 1) return paper;
  if (randomInteger == 2) return scissors;
};

//to check if the computer win or lose
var programStatus = function (input, computer) {
  if (gameMode == reversedVersion) {
    return (
      (input == reversedRock && computer == paper) ||
      (input == reversedPaper && computer == scissors) ||
      (input == reversedScissors && computer == rock)
    );
  }
  return (
    (input == paper && computer == rock) ||
    (input == scissors && computer == paper) ||
    (input == rock && computer == scissors)
  );
};

//to check if it's a draw
var programDraw = function (input, computer) {
  if (gameMode == reversedVersion) {
    return (
      (input == reversedRock && computer == rock) ||
      (input == reversedPaper && computer == paper) ||
      (input == reversedScissors && computer == scissors)
    );
  }
  return input == computer;
};

//to display icon
var icon = function (string) {
  if (string == rock || string == reversedRock) return "💎";
  if (string == paper || string == reversedPaper) return "📃";
  if (string == scissors || string == reversedScissors) return "✂️";
};

//message to show what computer and player choose
var message = function (player, computer) {
  var iconComputer = icon(computer);
  var iconPlayer = icon(player);
  return `The computer chose ${computer} ${iconComputer}. <br> You chose ${player} ${iconPlayer}.`;
};

//message to display how many win game and total game played
var getCountStatus = function (name, win, played) {
  return `So far ${name}, You've been winning ${win}/${played} turns. Pretty good!`;
};

//Input name
var enterName = function (input) {
  inputName = input;
  input = gameMode;
  gamePlayed++;
  return `Hi ${inputName}. Let's play!`;
};

var inputSPS = function (input) {
  if (gameMode == reversedVersion) {
    return (
      input == reversedRock ||
      input == reversedPaper ||
      input == reversedScissors
    );
  }
  return input == rock || input == paper || input == scissors;
};

var gameResult = function (input, computer) {
  if (programStatus(input, computer)) gameWon += 1;
  var defaultMessage = message(input, computer);
  var countStatus = getCountStatus(inputName, gameWon, gamePlayed);
  //gamePlayed++;
  if (programDraw(input, computer))
    return `${defaultMessage} <br><br> It\'s a draw! <br><br> ${countStatus}`;
  if (programStatus(input, computer))
    return `${defaultMessage} <br><br> You Win! <br><br> ${countStatus} <br>`;
  return `${defaultMessage} <br><br> You lose! Bummer. <br><br> ${countStatus} <br>`;
};

var main = function (input) {
  var computer = randomOutput();
  // to enter name
  if (gamePlayed == -2) {
    return enterName(input);
  }
  // to enter gameMode
  else if (gamePlayed == -1) {
    gamePlayed++;
    if (input === reversedVersion)
      return `Please input "${reversedRock}" , "${reversedPaper}", or "${reversedScissors}".`;
    if (input === normal)
      return `Please input "${rock}" , "${paper}", or "${scissors}".`;
    input = inputVar;
  }
  // to enter your choice of sps
  else if (gamePlayed >= 0) {
    var validInput = inputSPS(input);
    console.log(gamePlayed + "!");
    gamePlayed++;
    if (!validInput) {
      gameMode = reversedVersion;
      return gameResult(input, computer);
    }
    return gameResult(input, computer);
  }
};
