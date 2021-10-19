// input user enters scissors, paper or stone
// output random scissors, paper or stone
// computer will use math.random to determine scissors, paper or stone
// rules: scissors beats paper, peper beats stone, ston beats scissors. if both parties choose​ the same object, it's a draw.

//Generate random number
var rollDice = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat + 1);
  return resultInteger;
};

//win - loss record
//it keeps track of the number of time user has won and the number of times the computer has won.

var userWon = 0;
var computerWon = 0;
var drawNum = 0;
var roundPlayed = userWon + computerWon + drawNum;
var playerWinPercentage = 0;

var getWinLossPercentage = function () {
  var playerWinPercentage = (userWon / roundPlayed) * 100;
  return playerWinPercentage.toFixed(0);
};

// user name
var userName = "";
var currentGameMode = "waiting for user name";

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "game mode";
    myOutputValue = `Hello ${userName} <br><br> Type scissors ✂️ or paper 🗒 or stone 🗿 to play. <br><br> Rules: <br>scissors ✂️ beats paper 🗒, <br> paper 🗒 beats stone 🗿, <br> and stone 🗿 beats scissors ✂️. <br><br> If both parties choose the same object, it is a draw.`;
  } else if (currentGameMode == "game mode") {
    roundPlayed = roundPlayed + 1;
    var winLossPercentage = getWinLossPercentage();
    // generata random action
    var randomAction = rollDice();
    var scissors = 1;
    var paper = 2;
    var stone = 3;

    var computerAction = "";
    var playerAction = "";
    var emoticonInput = "";

    // defining player input
    if (input == "scissors") {
      playerAction = 1;
      emoticonInput = "scissors ✂️";
    }

    if (input == "paper") {
      playerAction = 2;
      emoticonInput = "paper 🗒";
    }

    if (input == "stone") {
      playerAction = 3;
      emoticonInput = "stone 🗿";
    }

    //Defining computer output
    // 1 = scissors
    if (randomAction == 1) {
      computerAction = "scissors ✂️";
    }

    // 2 = paper
    if (randomAction == 2) {
      computerAction = "paper 🗒";
    }

    // 3 stone
    if (randomAction == 3) {
      computerAction = "stone 🗿";
    }

    if (
      (playerAction == scissors && randomAction == paper) ||
      (playerAction == paper && randomAction == stone) ||
      (playerAction == stone && randomAction == scissors)
    ) {
      userWon = userWon + 1;
      myOutputValue = `${userName} wins with ${emoticonInput} ! <br><br> Computer lost with ${computerAction}. <br><br> ${userName} win counter is ${userWon}. <br><br> Computer win count is ${computerWon}. <br><br> Draw count is ${drawNum}. <br><br> ${userName} win rate is ${winLossPercentage}%.`;
    }

    //console.log
    console.log("player input is " + input);
    console.log("player action is " + playerAction);
    console.log("random action is " + randomAction);
    console.log("computer action is " + computerAction);

    //global console.log
    console.log("user won is " + userWon);
    console.log("computer won is " + computerWon);
    console.log("draw number is " + drawNum);

    // win rate console.log
    console.log("player win rate is " + playerWinPercentage);
    console.log("round number is " + roundPlayed);

    // computer scissors beats player paper OR computer paper beats plyar stone ; OR computer stone beats player scissors

    if (
      (randomAction == scissors && playerAction == paper) ||
      (randomAction == paper && playerAction == stone) ||
      (randomAction == stone && playerAction == scissors)
    ) {
      computerWon = computerWon + 1;
      myOutputValue = `${userName} lose with ${emoticonInput}! <br><br> Computer wins with ${computerAction}. <br><br> ${userName} win count is ${userWon}. <br><br> Computer win count is ${computerWon}. <br><br> Draw count is ${drawNum}. <br><br> ${userName} win rate is ${winLossPercentage}%.`;
    }

    //draw , if player action = computer action
    if (playerAction == randomAction) {
      drawNum = drawNum + 1;
      myOutputValue = `${userName} and computer draw with ${emoticonInput}. <br><br> ${userName} win count is ${userWon}. <br><br> Computer win count is ${computerWon}. <br><br> Draw count is ${drawNum}. <br><br> ${userName} win rate is ${winLossPercentage} %.`;
    }
  }
  return myOutputValue;
};
