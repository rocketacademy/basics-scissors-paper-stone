var main = function (input) {
  var moves = generateMoves();
  console.log("moves");
  console.log(moves);
  if (input == moves) {
    return moves + " it's a tie";
  }
  if (input == "scissors" && moves == "stone") {
    return "lose";
  }

  if (input == "paper" && moves == "scissors") {
    return "lose";
  }
  if (input == "stone" && moves == "paper") {
    return "lose";
  }

  if (input == "stone" && moves == "scissors") {
    return "win";
  }
  if (input == "scissors" && moves == "paper") {
    return "win";
  }
  if (input == "paper" && moves == "stone") {
    return "win";
  }

  return "wtf u writing";
};

var randomize = function (randomizeNumber) {
  var randomDecimal = Math.random() * randomizeNumber;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var generateMoves = function (moves) {
  var totalMoves = 3;
  var randomMoves = randomize(totalMoves);
  if (randomMoves == 1) {
    return "scissors";
  }
  if (randomMoves == 2) {
    return "paper";
  }
  if (randomMoves == 3) {
    return "stone";
  }
};
