var main = function (input) {
  //assign a random number to computer
  var randomResult = function () {
    var randomLuckyNum = Math.floor(Math.random() * 3) + 1;
    return randomLuckyNum;
  };

  //assign a choice to computer based on ramdomResult to pick among scissors paper stone
  var computerResult = function () {
    var randomComputerResult = randomResult();
    if (randomComputerResult == 1) {
      var myOutputValue = "scissors";
      return myOutputValue;
    }

    if (randomComputerResult == 2) {
      var myOutputValue = "stone";
      return myOutputValue;
    }

    if (randomComputerResult == 3) {
      var myOutputValue = "paper";
      return myOutputValue;
    }

    //play time
    var gameTime = function () {
      var randomComChoice = computerResult();
      var genericOutput =
        "The computer chose $(randomComChoice) <br>. You chose $(input) <br>.";
      //draw
      if (randomComChoice == input) {
        return "${genericOutput} It is a draw. <br> Now play again!";
      }
      //winning
      if (
        (randomComChoice == "scissors" && input == "stone") ||
        (randomComChoice == "stone" && input == "paper") ||
        (randomComChoice == "paper" && input == "scissors")
      ) {
        return "${genericOutput} You win! Congrats. <br> Now play again!";
      }
      //losing
      var myOutputValue = "${genericOutput} Sorry you lost. <br> Try again!";
      return myOutputValue;
    };
  };

  //input validation
  if (input != "scissors" || input != "paper" || input != "stone") {
    return "You entered ${input}, please only enter scissors, paper or stone and try again.";
  }
};
