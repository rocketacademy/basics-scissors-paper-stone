// input is scissors or paper or stone
// output is random scissors or paper or stone
// computer will use math.random to determine scissors or paper or stone
// there are 3 ways to win and 1 way to draw

// scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// Win-Loss Record
// Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

//Generate random number between 1 and 3
var rollDice = function () {
  // produces a float between 0 and 3
  var randomFloat = Math.random() * 3;
  // take off the decimal
  var resultInteger = Math.floor(randomFloat + 1);
  return resultInteger;
};

// win-loss record
var userWon = 0;
var computerWon = 0;
var drawNumber = 0;

var main = function (input) {
  // Generate random action

  var randomAction = rollDice();
  var scissors = 1;
  var paper = 2;
  var stone = 3;

  var myOutputValue =
    "Type scissors ✂️ or paper 🗒 or stone 🗿 to play. <br><br> Rules: <br>scissors ✂️ beats paper 🗒, <br> paper 🗒 beats stone 🗿, <br> and stone 🗿 beats scissors ✂️. <br><br> If both parties choose the same object, it is a draw.";

  var computerAction = "";
  var playerAction = "";
  var emoticonInput = "";

  // Defining player input
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
  // 3 = stone
  if (randomAction == 3) {
    computerAction = "stone 🗿";
  }

  console.log("player input is " + input);
  console.log("player action is " + playerAction);
  console.log("random action is " + randomAction);
  console.log("computer action is " + computerAction);

  // global var console log
  console.log("user won is " + userWon);
  console.log("computer won is " + computerWon);
  console.log("draw number is " + drawNumber);

  //player scissors beats computer paper or player paper beats computer stone or player stone beats computer scissors
  if (
    (playerAction == scissors && randomAction == paper) ||
    (playerAction == paper && randomAction == stone) ||
    (playerAction == stone && randomAction == scissors)
  ) {
    userWon = userWon + 1;
    myOutputValue =
      "Player wins with " +
      emoticonInput +
      "! <br><br>Computer lose with " +
      computerAction +
      ". <br><br> " +
      "Player win count is " +
      userWon +
      ". <br> Computer win count is " +
      computerWon +
      ". <br> Draw count is " +
      drawNumber +
      ".";
  }

  //computer scissors beats player paper or computer paper beats player stone or computer stone beats player scissors
  if (
    (randomAction == scissors && playerAction == paper) ||
    (randomAction == paper && playerAction == stone) ||
    (randomAction == stone && playerAction == scissors)
  ) {
    computerWon = computerWon + 1;
    myOutputValue =
      "Player lose with " +
      emoticonInput +
      "! <br><br>Computer wins with " +
      computerAction +
      ". <br><br> " +
      "Player win count is " +
      userWon +
      ". <br> Computer win count is " +
      computerWon +
      ". <br> Draw count is " +
      drawNumber +
      ".";
  }

  // player action = computer action, then draw
  if (playerAction == randomAction) {
    drawNumber = drawNumber + 1;
    myOutputValue =
      "Player and computer draw with " +
      emoticonInput +
      ". <br><br> " +
      "Player win count is " +
      userWon +
      ". <br><br> Computer win count is " +
      computerWon +
      ". <br> Draw count is " +
      drawNumber +
      ".";
  }
  return myOutputValue;
};
