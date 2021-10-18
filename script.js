// input is scissors or paper or stone
// output is random scissors or paper or stone
// computer will use math.random to determine scissors or paper or stone
// there are 3 ways to win and 1 way to draw

// scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// Win-Loss Record
// Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

// User Name
// To make this game more personal, add a feature to collect the user's name as the first input after the page loads. We can prompt the user to enter their name first by adding to the page's HTML. Once the user submits their name, the program can return output to prompt the user to start playing Scissors Paper Stone by entering one of the 3 objects. Use the user's name to personalise win-loss record and other relevant output.

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
var roundPlayed = userWon + computerWon + drawNumber;
var playerWinPercentage = 0;

// user name
var userName = "";
var currentGameMode = "waiting for user name";

// win-loss percentage
var getWinLossPercentage = function () {
  var playerWinPercentage = (userWon / roundPlayed) * 100;
  return playerWinPercentage.toFixed(0);
};

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    userName = input;
    currentGameMode = "game mode";

    myOutputValue =
      "Hello " +
      userName +
      "<br><br> Type scissors ✂️ or paper 🗒 or stone 🗿 to play. <br><br> Rules: <br>scissors ✂️ beats paper 🗒, <br> paper 🗒 beats stone 🗿, <br> and stone 🗿 beats scissors ✂️. <br><br> If both parties choose the same object, it is a draw.";
  } else if (currentGameMode == "game mode") {
    roundPlayed = roundPlayed + 1;
    var winLossPercentage = getWinLossPercentage();

    // Generate random action

    var randomAction = rollDice();
    var scissors = 1;
    var paper = 2;
    var stone = 3;

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

    // win rate console log
    console.log("player win rate is " + playerWinPercentage);
    console.log("round number is " + roundPlayed);

    //player scissors beats computer paper or player paper beats computer stone or player stone beats computer scissors
    if (
      (playerAction == scissors && randomAction == paper) ||
      (playerAction == paper && randomAction == stone) ||
      (playerAction == stone && randomAction == scissors)
    ) {
      userWon = userWon + 1;
      myOutputValue =
        userName +
        " wins with " +
        emoticonInput +
        "! <br><br>Computer lose with " +
        computerAction +
        ". <br><br> " +
        userName +
        " win count is " +
        userWon +
        ". <br> Computer win count is " +
        computerWon +
        ". <br> Draw count is " +
        drawNumber +
        ". <br><br>" +
        userName +
        " win rate is " +
        winLossPercentage +
        "%.";
    }

    //computer scissors beats player paper or computer paper beats player stone or computer stone beats player scissors
    if (
      (randomAction == scissors && playerAction == paper) ||
      (randomAction == paper && playerAction == stone) ||
      (randomAction == stone && playerAction == scissors)
    ) {
      computerWon = computerWon + 1;
      myOutputValue =
        userName +
        " lose with " +
        emoticonInput +
        "! <br><br>Computer wins with " +
        computerAction +
        ". <br><br> " +
        userName +
        " win count is " +
        userWon +
        ". <br> Computer win count is " +
        computerWon +
        ". <br> Draw count is " +
        drawNumber +
        ". <br><br>" +
        userName +
        " win rate is " +
        winLossPercentage +
        "%.";
    }

    // player action = computer action, then draw
    if (playerAction == randomAction) {
      drawNumber = drawNumber + 1;
      myOutputValue =
        userName +
        " and computer draw with " +
        emoticonInput +
        ". <br><br> " +
        userName +
        " win count is " +
        userWon +
        ". <br> Computer win count is " +
        computerWon +
        ". <br> Draw count is " +
        drawNumber +
        ". <br><br>" +
        userName +
        " win rate is " +
        winLossPercentage +
        "%.";
    }
  }

  return myOutputValue;
};
