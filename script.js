var GameStart = "Please input your name to start";
console.log(GameStart);
var Name = "";

var UserWinCounter = 0;
var ComputerWinCounter = 0;
var DrawCounter = 0;

var main = function (input) {
  var SCISSORS = "scissors";
  var PAPER = "paper";
  var STONE = "stone";
  var reversedSCISSORS = "reversed scissors";
  var reversedPAPER = "reversed paper";
  var reversedSTONE = "reversed stone";
  // var CommputerObject = randomObjectByComputer();
  var myOutputValue =
    "Invalid input. Please enter 'scissors', 'paper', 'stone', 'reversed scissors', 'reversed paper' or 'reversed stone' to start the game.";

  // to get user to input name at the start before game starts
  if (GameStart == "Please input your name to start") {
    Name = input;
    GameStart = "Let's now play scissors-paper-stone!";
    console.log(GameStart);
    myOutputValue =
      "Hello " +
      Name +
      "! Welcome to the scissors-paper-stone game. Please enter 'scissors', 'paper', 'stone', 'reversed scissors', 'reversed paper' or 'reversed stone' to start the game.";
  } else if ((GameStart = "Let's now play scissors-paper-stone!")) {
    console.log(GameStart);
    var CommputerObject = randomObjectByComputer();
  }
  // scissors and scissors draw condition
  if (
    (input == SCISSORS && CommputerObject == SCISSORS) ||
    (input == reversedSCISSORS && CommputerObject == SCISSORS)
  ) {
    DrawCounter = DrawCounter + 1;
    console.log("computer choice");
    console.log(CommputerObject);
    console.log("counting number of draws");
    console.log(DrawCounter);
    myOutputValue =
      Name +
      ", you chose " +
      input +
      " ✂️.<br><br> Computer chose scissors ✂️. <br><br> It's a draw. <br><br> You have drawn " +
      DrawCounter +
      " times! Try again!";
  }
  // lose condition when computer plays scissors
  // scissors beats paper
  // scissors beats reversed stone
  if (
    (input == PAPER && CommputerObject == SCISSORS) ||
    (input == reversedSTONE && CommputerObject == SCISSORS)
  ) {
    ComputerWinCounter = ComputerWinCounter + 1;
    console.log("computer choice");
    console.log(CommputerObject);
    console.log("counting computer wins");
    console.log(ComputerWinCounter);
    myOutputValue =
      Name +
      ", you chose " +
      input +
      " 🗒. <br><br> Computer chose scissors ✂️. <br><br>  You lost.<br><br> You have won " +
      UserWinCounter +
      " times so far. Keep going!";
  }
  // win condition when computer plays scissors
  // stone beats scissors
  // reversed paper beats scissors
  if (
    (input == STONE && CommputerObject == SCISSORS) ||
    (input == reversedPAPER && CommputerObject == SCISSORS)
  ) {
    UserWinCounter = UserWinCounter + 1;
    console.log("computer choice");
    console.log(CommputerObject);
    console.log("counting user wins");
    console.log(UserWinCounter);
    myOutputValue =
      Name +
      ", you chose " +
      input +
      " 💎. <br><br> Computer chose scissors ✂️.<br><br> You won! <br><br> You have won " +
      UserWinCounter +
      " times so far! Good job!";
  }

  // win condition when computer plays paper
  // scissors bears paper
  // reversed stone beats paper
  if (
    (input == SCISSORS && CommputerObject == PAPER) ||
    (input == reversedSTONE && CommputerObject == PAPER)
  ) {
    UserWinCounter = UserWinCounter + 1;
    console.log("computer choice");
    console.log(CommputerObject);
    console.log("counting user wins");
    console.log(UserWinCounter);
    myOutputValue =
      Name +
      ", you chose " +
      input +
      " ✂️.<br><br> Computer chose paper 🗒.<br><br> You won! <br><br> You have won " +
      UserWinCounter +
      " times so far! Good job!";
  }
  // paper and paper draw condition
  if (
    (input == PAPER && CommputerObject == PAPER) ||
    (input == reversedPAPER && CommputerObject == PAPER)
  ) {
    DrawCounter = DrawCounter + 1;
    console.log("computer choice");
    console.log(CommputerObject);
    console.log("counting number of draws");
    console.log(DrawCounter);
    myOutputValue =
      Name +
      ", you chose " +
      input +
      " 🗒.<br><br> Computer chose paper 🗒.<br><br> It's a draw. <br><br> You have drawn " +
      DrawCounter +
      " times! Try again!";
  }
  // lose condition when computer plays paper
  // paper beats stone
  // paper beats reversed scissors
  if (
    (input == STONE && CommputerObject == PAPER) ||
    (input == reversedSCISSORS && CommputerObject == PAPER)
  ) {
    ComputerWinCounter = ComputerWinCounter + 1;
    console.log("computer choice");
    console.log(CommputerObject);
    console.log("counting computer wins");
    console.log(ComputerWinCounter);
    myOutputValue =
      Name +
      ", you chose " +
      input +
      " 💎.<br><br> Computer chose paper 🗒. <br><br>You lost. <br><br> You have won " +
      UserWinCounter +
      " times so far. Keep going!";
  }
  // lose condition when computer plays stone
  // stone beats scissors
  // stone beats reversed paper
  if (
    (input == SCISSORS && CommputerObject == STONE) ||
    (input == reversedPAPER && CommputerObject == STONE)
  ) {
    ComputerWinCounter = ComputerWinCounter + 1;
    console.log("computer choice");
    console.log(CommputerObject);
    console.log("counting computer wins");
    console.log(ComputerWinCounter);
    myOutputValue =
      Name +
      ", you chose " +
      input +
      " ✂️.<br><br> Computer chose stone 💎.<br><br> You lost. <br><br> You have won " +
      UserWinCounter +
      " times so far. Keep going!";
  }
  // win condition when computer plays stone
  // paper beats stone
  // reversed scissors beats stone
  if (
    (input == PAPER && CommputerObject == STONE) ||
    (input == reversedSCISSORS && CommputerObject == STONE)
  ) {
    UserWinCounter = UserWinCounter + 1;
    console.log("computer choice");
    console.log(CommputerObject);
    console.log("counting user wins");
    console.log(UserWinCounter);
    myOutputValue =
      Name +
      ", you chose " +
      input +
      " 🗒.<br><br> Computer chose stone 💎.<br><br> You won! <br><br> You have won " +
      UserWinCounter +
      " times so far! Good job!";
  }
  // stone and stone draw condition
  if (
    (input == STONE && CommputerObject == STONE) ||
    (input == reversedSTONE) & (CommputerObject == STONE)
  ) {
    DrawCounter = DrawCounter + 1;
    console.log("computer choice");
    console.log(CommputerObject);
    console.log("counting number of draws");
    console.log(DrawCounter);
    myOutputValue =
      Name +
      ", you chose " +
      input +
      " 💎.<br><br> Computer chose stone 💎.<br><br> It's a draw. <br><br> You have drawn " +
      DrawCounter +
      " times! Try again!";
  }
  return myOutputValue;
};

// assigning values 0,1,2 to the object computer will draw
var randomObjectByComputer = function () {
  var SCISSORS = "scissors";
  var PAPER = "paper";
  var STONE = "stone";
  var randomDecimal = Math.random() * 3;
  var randomNum = Math.floor(randomDecimal);
  if (randomNum == 0) {
    return SCISSORS;
  }
  if (randomNum == 1) {
    return PAPER;
  }
  return STONE;
};
