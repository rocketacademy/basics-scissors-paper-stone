var main = function (input) {
  if (input == "scissors" || input == "paper" || input == "stone") {
    var WinLoseDraw = playSPS(input);
    console.log(WinLoseDraw);
    myOutputValue = WinLoseDraw;
  } else {
    myOutputValue =
      "Sorry, your input was not one of the three input options. Please enter either scissors, paper or stone!";
    console.log(myOutputValue);
  }
  return myOutputValue;
};

//Game: If input is equals to ComAns, program will return "It's a draw!"
var playSPS = function (input) {
  var ComSPS = ComAns();
  console.log(ComSPS);
  if (input == ComSPS) {
    console.log("DRAW");
    myOutputValue = "It's a draw!";
  }

  if (
    (input == "scissors" && ComSPS == "stone") ||
    (input == "paper" && ComSPS == "scissors") ||
    (input == "stone" && ComSPS == "paper")
  ) {
    myOutputValue = "You lose!";
  }
  if (
    (input == "scissors" && ComSPS == "paper") ||
    (input == "paper" && ComSPS == "stone") ||
    (input == "stone" && ComSPS == "scissors")
  ) {
    myOutputValue = "You win!";
  }

  return myOutputValue;
};

//Computer: Assign scissors, paper, stone to 3 randomly generated numbers.

var ComAns = function () {
  var ComAns1 = "scissors";
  var ComAns2 = "paper";
  var ComAns3 = "stone";
  //random number generator 0-2
  var randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  //Assign scissors
  if (randomNumber == 0) {
    console.log("Com: Scissors");
    console.log(ComAns1);
    return ComAns1;
  }
  //Assign paper
  if (randomNumber == 1) {
    console.log("Com: Paper");
    console.log(ComAns2);
    return ComAns2;
  }
  //Assign stone
  if (randomNumber == 2) {
    console.log("Com:Stone");
    console.log(ComAns3);
    return ComAns3;
  }
};
