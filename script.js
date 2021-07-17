var main = function (input) {
  //Thanks to Tinaes for teaching array
  var moves = ["scissors", "paper", "stone"];

  var compMove = Math.floor(Math.random(moves) * moves.length); //Computer random moves
  console.log("Comp Move:" + moves[compMove]);

  //Improve with .toLowerCase() to make input case insensitive!

  //If Tie
  if (input.toLowerCase() == moves[compMove]) {
    console.log("Tie");
    return (
      "It is a tie." +
      "<BR>" +
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
      "Now you can type scissors, paper or stone to play another round!"
    );
  }

  //Check moves
  if (input != moves) {
    var invalidMsg =
      "Invalid move." + "<br>" + "Type scissors, paper or stone to play!";
    console.log("Invalid input");
    return invalidMsg;
  }
};
