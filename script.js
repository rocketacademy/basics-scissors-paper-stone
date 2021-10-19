var main = function (input) {
  var lowercaseinput = input.toLowerCase();
  var opponent = rollDice();
  console.log("opponent: " + opponent);
  console.log("test if random number is 2: " + (opponent == 2));
  var move = "";
  console.log("before move is changed: " + move);
  if (opponent == 1) {
    move = "scissors";
  }
  if (opponent == 2) {
    console.log("should enter if opponent is 2");
    move = "paper";
  }
  if (opponent == 3) {
    move = "stone";
  }

  console.log("after move is changed: " + move);
  var myOutputValue = "Ops. Try again! The opponent's move was " + move;
  if (lowercaseinput == move) {
    myOutputValue = "You win!";
  }
  return myOutputValue;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 2;

  return diceNumber;
};
