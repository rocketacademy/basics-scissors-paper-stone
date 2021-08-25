var main = function (input) {
  //Initiates bot choices
  var botRandom = Math.random();
  var botChoice;
  if (botRandom < 1 / 3) {
    var botChoice = "scissors";
  } else if (botRandom < 2 / 3) {
    var botChoice = "paper";
  } else {
    var botChoice = "stone";
  }

  //Check user entry (normal mode)
  var userChoice = input.toLowerCase();
  if (
    userChoice == "scissors" ||
    userChoice == "paper" ||
    userChoice == "stone"
  ) {
    // Checks user choice against bot choice and declares a result
    if (userChoice == botChoice) {
      var result = "It's a draw.";
    } else if (
      (userChoice == "scissors" && botChoice == "paper") ||
      (userChoice == "paper" && botChoice == "stone") ||
      (userChoice == "stone" && botChoice == "scissors")
    ) {
      var result = "You win.";
    } else {
      var result = "You lose.";
    }

    //Check user entry (reverse mode)
  } else if (
    userChoice == "reverse scissors" ||
    userChoice == "reverse paper" ||
    userChoice == "reverse stone"
  ) {
    // Checks user choice against bot choice and declares a result
    if (
      (userChoice == "reverse scissors" && botChoice == "scissors") ||
      (userChoice == "reverse paper" && botChoice == "paper") ||
      (userChoice == "reverse stone" && botChoice == "stone")
    ) {
      var result = "It's a draw.";
    } else if (
      (userChoice == "reverse scissors" && botChoice == "paper") ||
      (userChoice == "reverse paper" && botChoice == "stone") ||
      (userChoice == "reverse stone" && botChoice == "scissors")
    ) {
      var result = "You lose.";
    } else {
      var result = "You win.";
    }
  } // Tells user to enter correct inputs if user entry checks fail
  else {
    return "Please input 'scissors', 'paper', or 'stone' to play the game.";
  }

  //Returns result to the player
  return (
    "You chose " +
    userChoice +
    "." +
    "<br><br>" +
    "The bot chose " +
    botChoice +
    "." +
    "<br><br>" +
    result +
    "<br><br>" +
    "Now you can type 'scissors', 'paper', or 'stone' to play another round!" +
    "<br><br>" +
    "Or add 'reverse' before your input to try something different."
  );
};
