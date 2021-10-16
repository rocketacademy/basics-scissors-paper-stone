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

var main = function (input) {
  var randomAction = rollDice();
  var scissors = 1;
  var paper = 2;
  var stone = 3;
  var myOutputValue =
    "Type scissors ✂️ or paper 🗒 or stone 🗿 to play. <br><br> Rules: <br>scissors ✂️ beats paper 🗒, <br> paper 🗒 beats stone 🗿, <br> and stone 🗿 beats scissors ✂️. <br><br> If both parties choose the same object, it is a draw."
};
​
  var computerAction = "";
  var userInput = "";
  var emoticonInput = "";
​
  // Defining player input
  if (input == "scissors") {
    userInput = 1;
    emoticonInput = "scissors ✂️";
  };
​
  if (input == "paper") {
    userInput = 2;
    emoticonInput = "paper 🗒";
  };
​
  if (input == "stone") {
    userInput = 3;
    emoticonInput = "stone 🗿";
  };
​
  //Defining computer output
  // 1 = scissors
  if (randomAction == 1) {
    computerAction = "scissors ✂️";
  };
  // 2 = paper
  if (randomAction == 2) {
    computerAction = "paper 🗒";
  };
  // 3 = stone
  if (randomAction == 3) {
    computerAction = "stone 🗿";
  };
​
  console.log("player input is " + input);
  console.log("player action is " + userInput);
  console.log("random action is " + randomAction);
  console.log("computer action is " + computerAction);
​
  //player scissors beats computer paper
  if (userInput == scissors && randomAction == paper) {
    myOutputValue =
      "Player wins with " +
      emoticonInput +
      "! <br><br>Computer lose with " +
      computerAction +
      ".";
  };
​
  //computer scissors beats player paper
  if (randomAction == scissors && userInput == paper) {
    myOutputValue =
      "Player lose with " +
      emoticonInput +
      "! <br><br>Computer wins with " +
      computerAction +
      ".";
  };
​
  // player paper beats computer stone
  if (userInput == paper && randomAction == stone) {
    myOutputValue =
      "Player wins with " +
      emoticonInput +
      "! <br><br>Computer lose with " +
      computerAction +
      ".";
  };
​
  // computer paper beats player stone
  if (randomAction == paper && userInput == stone) {
    myOutputValue =
      "Player lose with " +
      emoticonInput +
      "! <br><br>Computer wins with " +
      computerAction +
      ".";
  };
​
  // player stone beats computer scissors
  if (userInput == stone && randomAction == scissors) {
    myOutputValue =
      "Player wins with " +
      emoticonInput +
      "! <br><br>Computer lose with " +
      computerAction +
      ".";
  };
​
  // computer stone beats player scissors
  if (randomAction == stone && userInput == scissors) {
    myOutputValue =
      "Player lose with " +
      emoticonInput +
      "! <br><br>Computer wins with " +
      computerAction +
      ".";
  };
​
  // player action = computer action, then draw
  if (userInput == randomAction) {
    myOutputValue = "Player and computer draw with " + emoticonInput + ".";
  return myOutputValue;
  };