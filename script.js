var main = function (input) {
  var ownchoice = input.toLowerCase();

  var myOutputValue = "";

  var computerChoice = random_sps();
  var sps = "";

  if (computerChoice == 1) {
    sps = "scissors";
  }

  if (computerChoice == 2) {
    sps = "paper";
  }

  if (computerChoice == 3) {
    sps = "stone";
  }

  myOutputValue = "Please select scissors, paper or stone.";

  if (ownchoice == sps) {
    myOutputValue = "It's a draw. Both pick " + input;
  }

  if (ownchoice !== sps) {
    if (
      (ownchoice == "scissors" && sps == "paper") ||
      (ownchoice == "paper" && sps == "stone") ||
      (ownchoice == "stone" && sps == "scissors")
    ) {
      myOutputValue =
        "You won! You picked " + ownchoice + " And computer picked " + sps;
    }
    if (
      (sps == "scissors" && ownchoice == "paper") ||
      (sps == "paper" && ownchoice == "stone") ||
      (sps == "stone" && ownchoice == "scissors")
    ) {
      myOutputValue =
        "You lost! You picked " + ownchoice + " And computer picked " + sps;
    }
  }
  console.log("You picked", ownchoice);
  console.log("Computer picked", sps);

  return myOutputValue;
};

var random_sps = function () {
  var randomNumber = Math.random() * 3;
  var integernumber = Math.floor(randomNumber);
  var choices = integernumber + 1;
  return choices;
};
