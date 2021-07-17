var main = function (input) {
  //Thanks to Tinaes for teaching array
  var moves = ["scissors", "paper", "stone"];

  var compMove = Math.floor(Math.random(moves) * moves.length); //Computer random moves
  console.log("Comp Move:" + moves[compMove]);

  var rMoves = ["reversed scissors", "reversed paper", "reversed stone"];

  var rCompMove = Math.floor(Math.random(rMoves) * rMoves.length); //Computer random moves
  console.log("RComp Move:" + rMoves[rCompMove]);

  //Improve with .toLowerCase() to make input case insensitive!

  //If Tie
  if (input.toLowerCase() == moves[compMove]) {
    console.log("Tie");
    return (
      "It is a tie." +
      "<BR>" +
      "<br>" +
      "Now you can type scissors, paper or stone to play another round!"
    );
  }

  //If User wins
  if (
    (input.toLowerCase() == "stone" && moves[compMove] == "scissors") ||
    (input.toLowerCase() == "scissors" && moves[compMove] == "paper") ||
    (input.toLowerCase() == "paper" && moves[compMove] == "stone")
  ) {
    console.log("User Win");
    return (
      "The computer choose " +
      moves[compMove] +
      "<br>" +
      "You choose " +
      input +
      "<br>" +
      "You WIN!" +
      "<br>" +
      "<br>" +
      "Now you can type scissors, paper or stone to play another round!"
    );
  }

  //If User lose
  if (
    (input.toLowerCase() == "stone" && moves[compMove] == "paper") ||
    (input.toLowerCase() == "scissors" && moves[compMove] == "stone") ||
    (input.toLowerCase() == "paper" && moves[compMove] == "scissors")
  ) {
    console.log("User Lose");
    return (
      "The computer choose " +
      moves[compMove] +
      "<br>" +
      "You choose " +
      input +
      "<br>" +
      "You lose!" +
      "<br>" +
      "<BR>" +
      "Now you can type scissors, paper or stone to play another round!"
    );
  }

  //(Reverse mode) If Tie
  if (input.toLowerCase() == rMoves[rCompMove]) {
    console.log("RUser Tie");
    return (
      "It is a tie. Try again hehe." +
      "<BR>" +
      "<BR>" +
      "Now you can type scissors, paper or stone to play another round!"
    );
  }

  //(Reverse mode) If User WINS
  if (
    (input.toLowerCase() == "reversed stone" &&
      rMoves[rCompMove] == "reversed paper") ||
    (input.toLowerCase() == "reversed scissors" &&
      rMoves[rCompMove] == "reversed stone") ||
    (input.toLowerCase() == "reversed paper" &&
      rMoves[rCompMove] == "reversed scissors")
  ) {
    console.log("RUser Win");
    return (
      "The computer choose " +
      rMoves[rCompMove] +
      "<br>" +
      "You choose " +
      input +
      "<br>" +
      "Lucky you. You WIN!" +
      "<br>" +
      "<br>" +
      "Now you can type scissors, paper or stone to play another round!"
    );
  }

  // (Reverse mode) If User lose
  if (
    (input.toLowerCase() == "reversed stone" &&
      rMoves[rCompMove] == "reversed scissors") ||
    (input.toLowerCase() == "reversed scissors" &&
      rMoves[rCompMove] == "reversed paper") ||
    (input.toLowerCase() == "reversed paper" &&
      rMoves[rCompMove] == "reversed stone")
  ) {
    console.log("RUser Lose");
    return (
      "The computer choose " +
      rMoves[rCompMove] +
      "<br>" +
      "You choose " +
      input +
      "<br>" +
      "Get good. You lose!" +
      "<br>" +
      "<br>" +
      "Now you can type scissors, paper or stone to play another round!"
    );
  }

  //Check moves
  if (input != moves && input != rMoves) {
    var invalidMsg =
      "Invalid move." + "<br>" + "Type scissors, paper or stone to play!";
    console.log("Invalid input");
    return invalidMsg;
  }
};
