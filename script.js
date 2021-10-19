var currentGameMode = "waiting for user name";
var userName = "";
var myOutputValue = "waiting for user name";
var numberOfWins = 0;
var numberOfGames = 0;

var main = function (input) {
  if (currentGameMode == "waiting for user name") {
    // set the name
    userName = input;
    currentGameMode = "game on";

    console.log(currentGameMode);
    myOutputValue = "Hello " + userName;
  } else if (currentGameMode == "game on") {
    // generateRandomScissorsPaperStone logic
    var userPlays1 = input;
    var computerPlays1 = generateRandomScissorsPaperStone();
    console.log(userPlays1);
    console.log(computerPlays1);
    console.log(currentGameMode);

    var result = getResults(userPlays1, computerPlays1);

    myOutputValue = "tada!" + result;
  }
  return myOutputValue;
};

var generateRandomScissorsPaperStone = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  var RandomScissorsPaperStone = "undefined";

  if (diceNumber == 1) {
    RandomScissorsPaperStone = "scissors";
  }

  if (diceNumber == 2) {
    RandomScissorsPaperStone = "paper";
  }
  if (diceNumber == 3) {
    RandomScissorsPaperStone = "stone";
  }
  console.log(RandomScissorsPaperStone);
  return RandomScissorsPaperStone;
};

// win or lose
var getResults = function (userPlays, computerPlays) {
  var result = "undefined";

  if (userPlays == computerPlays) {
    result = "It's a tie!";
  }

  if (
    (userPlays == "scissors" && computerPlays == "paper") ||
    (userPlays == "paper" && computerPlays == "stone") ||
    (userPlays == "stone" && computerPlays == "scissors")
  ) {
    result = "You win!";
    numberOfWins++;
  }

  if (
    (userPlays == "scissors" && computerPlays == "stone") ||
    (userPlays == "paper" && computerPlays == "scissors") ||
    (userPlays == "stone" && computerPlays == "paper")
  )
    result = "You lose!";
  return result;
};
