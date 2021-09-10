var totalUserWins = 0;
var totalComWins = 0;
var totalDraws = 0;
var totalGames = 0;
var currentGameMode = "waiting for username";
console.log(currentGameMode);
var username = "";

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for username") {
    username = input;
    currentGameMode = "scissors paper stone";
    console.log(currentGameMode);
    myOutputValue = "Hello, " + username;
    return myOutputValue;
  } else if (input === "scissors" || input === "paper" || input === "stone") {
    var myOutputValue = scissorsPaperStone(input);
    console.log(`You played ${input}`);
    return myOutputValue;
  } else {
  }
  return "I do not understand. Please enter 'scissors', 'paper', or 'stone'!";
};

var scissorsPaperStone = function (userMove) {
  totalGames++;
  var programMove = getProgramMove();
  console.log(`Computer played ${programMove}`);

  // if user = scissors , computer = paper --> user wins
  // if user = scissors, computer = stone --> computer wins
  // ir user = paper, computer = scissors --> computer wins
  // if user = paper, computer = stone --> user wins
  // if user = stone, computer = scissors --> user wins
  // if user = stone, computer = paper --> computer wins

  if (
    (userMove == "scissors" && programMove == "paper") ||
    (userMove == "paper" && programMove == "stone") ||
    (userMove == "stone" && programMove == "scissors")
  ) {
    totalUserWins++;
    if (totalUserWins >= totalComWins) {
      return `You chose ${userMove}<br>Computer chose ${programMove}<br><br>You Win!<br><br>You've been winning ${totalUserWins}/${totalGames} turns (${totalDraws} draws), ${username}. Hooray!`;
    } else {
      return `You chose ${userMove}<br>Computer chose ${programMove}<br><br>You Win!<br><br>You've been winning ${totalUserWins}/${totalGames} turns (${totalDraws} draws), ${username}. Boo!`;
    }
  } else if (
    (userMove == "scissors" && programMove == "stone") ||
    (userMove == "paper" && programMove == "scissors") ||
    (userMove == "stone" && programMove == "paper")
  ) {
    totalComWins++;
    if (totalUserWins >= totalComWins) {
      return `You chose ${userMove}<br>Computer chose ${programMove}<br><br>You Lose!<br><br>You've been winning ${totalUserWins}/${totalGames} turns (${totalDraws} draws), ${username}. Hooray!`;
    } else {
      return `You chose ${userMove}<br>Computer chose ${programMove}<br><br>You Lose!<br><br>You've been winning ${totalUserWins}/${totalGames} turns (${totalDraws} draws), ${username}. Boo!`;
    }
  } else {
    totalDraws++;
    return "Nobody Wins!";
  }
};

var getProgramMove = function () {
  var move = Math.floor(Math.random() * 3);

  switch (move) {
    case 0:
      return "scissors";

    case 1:
      return "paper";

    default:
      return "stone";
  }
};
