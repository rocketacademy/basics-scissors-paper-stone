var computerhand = ``;
var winCount = 0;
var roundCount = 0;
var gameMode = `waiting for username`;
var userName = "";
var playerHand = ``;

// ======================================MAIN FUNCTION STARTS BELOW ====================================

var main = function (input) {
  //Username needed to start the game
  if (gameMode == `waiting for username`) {
    userName = input;
    gameMode = `SPS`;
    myOutputValue = `Hello ${userName}! <br> You are now ready to play. Paper, scissors, or stone?`;
  } else if (gameMode == `SPS`) {
    myOutputValue = spsGame(input);
  } else {
    // input validation
    myOutputValue = `not working`;

    //`Sorry, ${input} was not recognized. You can only enter scissors, paper, or stone. Please try again.`;
  }

  return `${myOutputValue} <br> GAME MODE: ${gameMode} <br> Rounds played: ${roundCount}`;
};

// ===============================MAIN FUNCITON ENDS HERE==================================================

// This function is to compare hands and check whether player or computer won
var WinnerChecker = function (playerHand, computerhand) {
  // THIS FUNCTION IS FOR PLAYER WINS
  if (
    (playerHand == `scissors` && computerhand == `paper`) ||
    (playerHand == `paper` && computerhand == `stone`) ||
    (playerHand == `stone` && computerhand == `scissors`)
  ) {
    return `Player win`;
  }

  // THIS FUCTION IS FOR TIE
  if (
    (playerHand == `scissors` && computerhand == `scissors`) ||
    (playerHand == `paper` && computerhand == `paper`) ||
    (playerHand == `stone` && computerhand == `stone`)
  ) {
    return `Tie`;
  }

  // THIS IS FOR PLAYER LOSES
  if (
    (playerHand == `scissors` && computerhand == `stone`) ||
    (playerHand == `paper` && computerhand == `scissors`) ||
    (playerHand == `stone` && computerhand == `paper`)
  ) {
    return `Player loses`;
  }
};

// SPS Game function
var spsGame = function (playerHand) {
  var msg = ``;

  randomnumber = generaterandomnumber();

  // connect each number to either SPS
  if (randomnumber == 1) {
    var computerhand = "scissors";
  }
  if (randomnumber == 2) {
    var computerhand = "paper";
  }
  if (randomnumber == 3) {
    var computerhand = "stone";
  }

  var WinnerResult = WinnerChecker(playerHand, computerhand);

  console.log(WinnerResult);

  // This is what the player sees if they lose against the computer
  if (WinnerResult == `Player loses`) {
    roundCount = roundCount + 1;
    var msg = `${userName} you lose! You showed ${playerHand} and the computer showed ${computerhand}. Your total wins are ${winCount}.`;
  }

  // This is what the player sees if they win against the computer
  if (WinnerResult == `Player win`) {
    winCount = winCount + 1;
    roundCount = roundCount + 1;
    console.log(winCount);
    var msg = `${userName} you win! You showed ${playerHand} and the computer showed ${computerhand}. Your total wins are ${winCount}`;
  }

  // This is what the player sees if there is a tie
  if (WinnerResult == `Tie`) {
    roundCount = roundCount + 1;
    var msg = `${userName} It is a tie! You showed ${playerHand} and the computer showed ${computerhand}. Your total wins are ${winCount}`;
  }

  console.log(`=======CHECK=======`);
  console.log(`player showed:`);
  console.log(playerHand);
  console.log(`computer showed:`);
  console.log(computerhand);
  console.log(WinnerResult);

  return msg;
};

// =============================================================================================

// This function generates a random number
var generaterandomnumber = function () {
  var randomdecimal = Math.random() * 3;
  var randomwholenumber = Math.floor(randomdecimal);
  var generatednumber = randomwholenumber + 1;
  return generatednumber;
};
