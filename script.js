//Adding username
var userName = "";

//Wins and total games played
var numWins = 0;
var numTotalGames = 0;

var main = function (input) {
  //Thanks to Tinaes for teaching array
  console.log(userName + ": " + input);
  var moves = ["scissors", "paper", "stone"];

  var compMove = Math.floor(Math.random() * moves.length); //Computer random moves

  var rMoves = ["reversed scissors", "reversed paper", "reversed stone"];

  var rCompMove = Math.floor(Math.random() * rMoves.length); //RComputer random moves

  //Setting username with the main input (reference from solution)
  if (!userName) {
    //Need to be first action if not will not execute
    if (!input) {
      //What to do if no input yet.
      return "Please input something as your username!";
    }
    userName = input;
    return (
      "Welcome Player " +
      userName +
      "!<br>Type scissors, paper or stone to play!"
    );
  }
  //Improve with .toLowerCase() to make input case insensitive!

  //If Tie
  if (input.toLowerCase() == moves[compMove]) {
    console.log("Comp Move:" + moves[compMove]);
    console.log("Tie");
    numTotalGames = numTotalGames + 1;
    var tieOutput =
      "It is a tie. <br><br>" +
      numWins +
      " of " +
      numTotalGames +
      " Games Won<BR>" +
      "<br>" +
      "Now you can type scissors, paper or stone to play another round!";
    return tieOutput;
  }

  //If User wins
  if (
    (input.toLowerCase() == "stone" && moves[compMove] == "scissors") ||
    (input.toLowerCase() == "scissors" && moves[compMove] == "paper") ||
    (input.toLowerCase() == "paper" && moves[compMove] == "stone")
  ) {
    console.log("Comp Move:" + moves[compMove]);
    console.log("User Win");
    numWins = numWins + 1;
    numTotalGames = numTotalGames + 1;
    var winOutput =
      "The computer choose " +
      moves[compMove] +
      "<br>" +
      "Player " +
      userName +
      " choose " +
      input +
      "<br>" +
      "You WIN! <br><br>" +
      numWins +
      " of " +
      numTotalGames +
      " Games Won." +
      "<br>" +
      "<br>" +
      "Now you can type scissors, paper or stone to play another round!";
    return winOutput;
  }

  //If User lose
  if (
    (input.toLowerCase() == "stone" && moves[compMove] == "paper") ||
    (input.toLowerCase() == "scissors" && moves[compMove] == "stone") ||
    (input.toLowerCase() == "paper" && moves[compMove] == "scissors")
  ) {
    console.log("Comp Move:" + moves[compMove]);
    console.log("User Lose");
    numTotalGames = numTotalGames + 1;
    var loseOutput =
      "The computer choose " +
      moves[compMove] +
      "<br>" +
      "Player " +
      userName +
      " choose " +
      input +
      "<br>" +
      "You lose! <br><br>" +
      numWins +
      " of " +
      numTotalGames +
      " Games Won." +
      "<br>" +
      "<BR>" +
      "Now you can type scissors, paper or stone to play another round!";
    return loseOutput;
  }

  //(Reverse mode) If Tie
  if (input.toLowerCase() == rMoves[rCompMove]) {
    console.log("RComp Move:" + rMoves[rCompMove]);
    console.log("RUser Tie");
    numTotalGames = numTotalGames + 1;
    return (
      "You found the hidden game.<br><br>It is a tie. Try again hehe." +
      "<br><br>" +
      numWins +
      " of " +
      numTotalGames +
      " Games Won" +
      "<br><br>" +
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
    console.log("RComp Move:" + rMoves[rCompMove]);
    console.log("RUser Win");
    numWins = numWins + 1;
    numTotalGames = numTotalGames + 1;
    var rWinOutput =
      "You found the hidden game.<br><br>The computer choose " +
      rMoves[rCompMove] +
      "<br><br>" +
      "Challenger " +
      userName +
      " choose " +
      input +
      "<br><br>" +
      "Lucky you. You WIN!<br><br>" +
      numWins +
      " of " +
      numTotalGames +
      " Games WON!";
    "<br><br>" +
      "Now you can type scissors, paper or stone to play another round!";
    return rWinOutput;
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
    console.log("RComp Move:" + rMoves[rCompMove]);
    console.log("RUser Lose");
    numTotalGames = numTotalGames + 1;
    var rLoseOutput =
      "You found the hidden game.<br><br>The computer choose " +
      rMoves[rCompMove] +
      "<br><br>" +
      "Challenger " +
      userName +
      " choose " +
      input +
      "<br><br>" +
      "Get good! You lose!" +
      "<br><br>" +
      numWins +
      " of " +
      numTotalGames +
      " Games Won";
    "<br><br>" +
      "Now you can type scissors, paper or stone to play another round!";
    return rLoseOutput;
  }

  //Check moves
  if (input != moves && input != rMoves) {
    var invalidMsg =
      "Invalid move." + "<br>" + "Type scissors, paper or stone to play!";
    console.log("Invalid input");
    return invalidMsg;
  }
};
