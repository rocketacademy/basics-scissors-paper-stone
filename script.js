var winRecord = 0;
var loseRecord = 0;
var drawRecord = 0;

var main = function (input) {
  var myChoice = input.toLowerCase();
  var COM = rollDice();
  var myOutputValue = "";
  myOutputValue = win_lose_draw(myChoice, COM);
  // myOutputValue = "Ops. Try again! The opponent's move was " + COM;
  return myOutputValue;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var opponent = randomInteger + 1;
  if (opponent == 1) {
    sps = "scissors";
  }
  if (opponent == 2) {
    console.log("should enter if opponent is 2");
    sps = "paper";
  }
  if (opponent == 3) {
    sps = "stone";
  }
  return sps;
};

var win_lose_draw = function (own, computer) {
  myOutputValue = `You lose. Your move is ${own}. Your opponent's move is ${computer}`;
  // it's a draw
  if (own == computer) {
    // the same as <drawRecord = drawRecord + 1>
    drawRecord += 1;
    myOutputValue = `It's a draw! Your move is ${own}. Your opponent's move is ${computer}`;
  }
  // winning conditions
  if (
    (own == "scissors" && computer == "paper") ||
    (own == "paper" && computer == "stone") ||
    (own == "stone" && computer == "scissors")
  ) {
    winRecord += 1;
    myOutputValue = `You win! Your move is ${own}. Your opponent's move is ${computer}`;
  }
  loseRecord += 1;
  return myOutputValue;
};
