// input is scissors or paper or stone
// output is random scissors or paper or stone
// computer will use math.random to determine scissors or paper or stone
// there are 3 ways to win and 1 way to draw

// scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

//Generate random number between 1 and 3
var rollDice = function () {
  // produces a float between 0 and 3
  var randomFloat = Math.random() * 3;
  // take off the decimal
  var resultInteger = Math.floor(randomFloat + 1);
  return resultInteger;
};

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

  //player scissors beats computer paper
  if (playerAction == scissors && randomAction == paper) {
    myOutputValue =
      "Player wins with " +
      emoticonInput +
      "! <br><br>Computer lose with " +
      computerAction +
      ".";
  }

  //computer scissors beats player paper
  if (randomAction == scissors && playerAction == paper) {
    myOutputValue =
      "Player lose with " +
      emoticonInput +
      "! <br><br>Computer wins with " +
      computerAction +
      ".";
  }

  // player paper beats computer stone
  if (playerAction == paper && randomAction == stone) {
    myOutputValue =
      "Player wins with " +
      emoticonInput +
      "! <br><br>Computer lose with " +
      computerAction +
      ".";
  }

  // computer paper beats player stone
  if (randomAction == paper && playerAction == stone) {
    myOutputValue =
      "Player lose with " +
      emoticonInput +
      "! <br><br>Computer wins with " +
      computerAction +
      ".";
  }

  // player stone beats computer scissors
  if (playerAction == stone && randomAction == scissors) {
    myOutputValue =
      "Player wins with " +
      emoticonInput +
      "! <br><br>Computer lose with " +
      computerAction +
      ".";
  }

  // computer stone beats player scissors
  if (randomAction == stone && playerAction == scissors) {
    myOutputValue =
      "Player lose with " +
      emoticonInput +
      "! <br><br>Computer wins with " +
      computerAction +
      ".";
  }

  // player action = computer action, then draw
  if (playerAction == randomAction) {
    myOutputValue = "Player and computer draw with " + emoticonInput + ".";
  }
  return myOutputValue;
};
