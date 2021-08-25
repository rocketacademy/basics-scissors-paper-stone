var main = function (input) {
  if (input === "scissors" || input === "paper" || input === "stone") {
    var myOutputValue = scissorsPaperStone(input);
    console.log(`You played ${input}`);
    return myOutputValue;
  } else {
  }
  return "I do not understand. Please enter 'scissors', 'paper', or 'stone'!";
};

var scissorsPaperStone = function (userMove) {
  var programMove = getProgramMove();
  console.log(`Computer played ${programMove}`);

  // if user = scissors , computer = paper --> user wins
  // if user = scissors, computer = stone --> computer wins
  // ir user = paper, computer = scissors --> computer wins
  // if user = paper, computer = stone --> user wins
  // if user = stone, computer = scissors --> user wins
  // if user = stone, computer = paper --> computer wins

  if (
    (userMove == "scissors" && programMove == "paper") ||
    (userMove == "paper" && programMove == "stone") ||
    (userMove == "stone" && programMove == "scissors")
  ) {
    return "You Win!";
  } else if (
    (userMove == "scissors" && programMove == "stone") ||
    (userMove == "paper" && programMove == "scissors") ||
    (userMove == "stone" && programMove == "paper")
  ) {
    return "Computer Wins!";
  } else {
    return "Nobody Wins!";
  }
};

var getProgramMove = function () {
  var move = Math.floor(Math.random() * 3);

  switch (move) {
    case 0:
      return "scissors";

    case 1:
      return "paper";

    default:
      return "stone";
  }
};
