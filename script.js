var main = function (input) {
  var ownchoice = input.toLowerCase();
  var computerChoice = random_sps();

  var myOutputValue = "";
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

  myOutputValue =
    win_or_lose(ownchoice, sps) +
    "<br> <br>" +
    "Now you can type 'scissors', 'paper' or 'stone' to start a new game. ";

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

var win_or_lose = function (ownchoice, sps) {
  var msg = "Please select scissors, paper or stone.";
  if (
    ownchoice == sps ||
    (ownchoice == "reversed scissors" && sps == "scissors") ||
    (ownchoice == "reversed paper" && sps == "paper") ||
    (ownchoice == "reversed stone" && sps == "stone")
  ) {
    msg =
      "You picked " +
      ownchoice +
      " <br> COM picked " +
      sps +
      "<br> It's a draw! ";
    return msg;
  }

  if (
    (ownchoice == "scissors" && sps == "paper") ||
    (ownchoice == "paper" && sps == "stone") ||
    (ownchoice == "stone" && sps == "scissors") ||
    (ownchoice == "reversed scissors" && sps == "stone") ||
    (ownchoice == "reversed paper" && sps == "scissors") ||
    (ownchoice == "reversed stone" && sps == "paper")
  ) {
    msg =
      "You picked " + ownchoice + " <br> COM picked " + sps + "<br> You won!";
    return msg;
  }
  if (
    (sps == "scissors" && ownchoice == "paper") ||
    (sps == "paper" && ownchoice == "stone") ||
    (sps == "stone" && ownchoice == "scissors") ||
    (ownchoice == "reversed scissors" && sps == "paper") ||
    (ownchoice == "reversed paper" && sps == "stone") ||
    (ownchoice == "reversed stone" && sps == "scissors")
  ) {
    msg =
      "You picked " + ownchoice + " <br> COM picked " + sps + "<br> You lost!";
    return msg;
  }
  return msg;
};
