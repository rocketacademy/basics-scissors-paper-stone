//Win-Lose-Draw Record
var userCount = 0;
var opponentCount = 0;
var drawCount = 0;
var totalRounds = userCount + opponentCount + drawCount;
var myWinningPercentage = (userCount / totalRounds) * 100;

var currentGameMode = `Waiting for Username`;
var userName = ``;

var diceRoll = function () {
  //Generate a number between 0 to 3
  var randomDecimal = Math.random() * 3;

  //Remove decimal
  var randomNumber = Math.floor(randomDecimal);

  console.log("Opponent Rolled");
  console.log(randomNumber);

  //Assigning an elements to values 0 to 3
  if (randomNumber == 0) {
    return "scissors";
  }
  if (randomNumber == 1) {
    return "paper";
  }
  if (randomNumber == 2) {
    return "stone";
  }
};

//Define Input
var main = function (input) {
  if (currentGameMode == `Waiting for Username`) {
    userName = input;
    currentGameMode = `To Select Mode`;
    myOutputValue = `Hello ${userName}.  <br><br> Please choose your game modes: Original or Reversed.`;
    return myOutputValue;
  } else if (currentGameMode == `To Select Mode`) {
    if (input == `Original`) {
      currentGameMode = `Original`;
    }
    if (input == `Reversed`) {
      currentGameMode = `Reversed`;
    }
    myOutputValue = `Hi ${userName}, you've selected ${input} mode. <br><br> Please enter "scissors" or "paper" or "stone" to begin.`;
    return myOutputValue;
  }

  //Define computer opponent's roll
  var opponentRoll = diceRoll();

  //Comparing player input vs opponent - DRAW
  if (
    (input == "scissors" && opponentRoll == "scissors") ||
    (input == "paper" && opponentRoll == "paper") ||
    (input == "stone" && opponentRoll == "stone") ||
    (input == "reversed scissors" && opponentRoll == "scissors") ||
    (input == "reversed paper" && opponentRoll == "paper") ||
    (input == "reversed stone" && opponentRoll == "stone")
  ) {
    //Adding Play Count
    userCount = userCount + 0;
    opponentCount = opponentCount + 0;
    drawCount = drawCount + 1;
    totalRounds = userCount + opponentCount + drawCount;
    myWinningPercentage = (userCount / totalRounds) * 100;
    return `${userName} chose ${input} and ${userName}'s opponent chose ${opponentRoll}. <br><br> The result is a draw!! <br><br> ${userName}'s score: ${userCount} <br> ${userName}'s opponent score: ${opponentCount} <br> Number of draws: ${drawCount} <br> Total rounds played: ${totalRounds} <br> ${userName}'s winning rate: ${myWinningPercentage}% <br><br> You can type "scissors", "paper" or "stone" to play another round!`;

    //Comparing player input vs opponent - WIN
  } else if (
    (input == "scissors" && opponentRoll == "paper") ||
    (input == "paper" && opponentRoll == "stone") ||
    (input == "stone" && opponentRoll == "scissors") ||
    (input == "reversed scissors" && opponentRoll == "stone") ||
    (input == "reversed paper" && opponentRoll == "scissors") ||
    (input == "reversed stone" && opponentRoll == "paper")
  ) {
    //Adding Play Count
    userCount = userCount + 1;
    opponentCount = opponentCount + 0;
    drawCount = drawCount + 0;
    totalRounds = userCount + opponentCount + drawCount;
    myWinningPercentage = (userCount / totalRounds) * 100;
    return `${userName} chose ${input} and ${userName}'s opponent chose ${opponentRoll}. <br><br> The result is a draw!! <br><br> ${userName}'s score: ${userCount} <br> ${userName}'s opponent score: ${opponentCount} <br> Number of draws: ${drawCount} <br> Total rounds played: ${totalRounds} <br> ${userName}'s winning rate: ${myWinningPercentage}% <br><br> You can type "scissors", "paper" or "stone" to play another round!`;

    //Comparing player input vs opponent - LOSE
  } else if (
    (input == "scissors" && opponentRoll == "stone") ||
    (input == "paper" && opponentRoll == "scissors") ||
    (input == "stone" && opponentRoll == "paper") ||
    (input == "reversed scissors" && opponentRoll == "paper") ||
    (input == "reversed paper" && opponentRoll == "stone") ||
    (input == "reversed stone" && opponentRoll == "scissors")
  ) {
    //Adding Play Count
    userCount = userCount + 0;
    opponentCount = opponentCount + 1;
    drawCount = drawCount + 0;
    totalRounds = userCount + opponentCount + drawCount;
    myWinningPercentage = (userCount / totalRounds) * 100;
    return `${userName} chose ${input} and ${userName}'s opponent chose ${opponentRoll}. <br><br> The result is a draw!! <br><br> ${userName}'s score: ${userCount} <br> ${userName}'s opponent score: ${opponentCount} <br> Number of draws: ${drawCount} <br> Total rounds played: ${totalRounds} <br> ${userName}'s winning rate: ${myWinningPercentage}% <br><br> You can type "scissors", "paper" or "stone" to play another round!`;

    //Invalid Input Conditioning
  } else if (input !== "scissors" && input !== "paper" && input !== "stone") {
    return `Your input ${input} is not allowed. You may only choose scissors, paper, or stone. Kindly try again.`;
  }
};
