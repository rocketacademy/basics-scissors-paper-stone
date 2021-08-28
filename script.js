var main = function (input) {
  var dice1 = rolldice();
  var diceresult = diceoutput(dice1, input);
  console.log(diceresult);
  var results = diceemoji(diceresult);
  var emoji = inputemoji(input);
  var myOutputValue = Output(input, diceresult, emoji, results);
  return myOutputValue;
};

var Output = function (input, diceresult, emoji, results) {
  if (input == diceresult) {
    return (
      "Draw!<br><br>You chose " +
      emoji +
      "<br>Opponent chose " +
      results +
      "<br><br>Play again!"
    );
  }
  if (
    (input == "stone" && diceresult == "scissors") ||
    (input == "scissors" && diceresult == "paper") ||
    (input == "paper" && diceresult == "stone") ||
    (input == "reversed scissors" && diceresult == "reversed stone") ||
    (input == "reversed stone" && diceresult == "reversed paper") ||
    (input == "reversed paper" && diceresult == "reversed scissors")
  ) {
    return (
      "You win!<br><br>You chose " +
      emoji +
      "<br>Opponent chose " +
      results +
      "<br><br>" +
      emoji +
      " beats " +
      results +
      "<br><br>Play again!"
    );
  }
  if (
    (input == "stone" && diceresult == "paper") ||
    (input == "scissors" && diceresult == "stone") ||
    (input == "paper" && diceresult == "scissors") ||
    (input == "reversed stone" && diceresult == "reversed scissors") ||
    (input == "reversed paper" && diceresult == "reversed stone") ||
    (input == "reversed scissors" && diceresult == "reversed paper")
  ) {
    return (
      "You lose!<br><br>You chose " +
      emoji +
      "<br>Opponent chose " +
      results +
      "<br><br>" +
      results +
      " beats " +
      emoji +
      "<br><br>Play again!"
    );
  }

  return "Please enter scissors, paper or stone.";
};

var diceoutput = function (dice1, input) {
  if (
    dice1 == 1 &&
    (input == "stone" || input == "scissors" || input == "paper")
  ) {
    return "scissors";
  }
  if (
    dice1 == 2 &&
    (input == "stone" || input == "scissors" || input == "paper")
  ) {
    return "paper";
  }
  if (
    dice1 == 3 &&
    (input == "stone" || input == "scissors" || input == "paper")
  ) {
    return "stone";
  }
  if (
    dice1 == 1 &&
    (input == "reversed stone" ||
      input == "reversed scissors" ||
      input == "reversed paper")
  ) {
    return "reversed scissors";
  }
  if (
    dice1 == 2 &&
    (input == "reversed stone" ||
      input == "reversed scissors" ||
      input == "reversed paper")
  ) {
    return "reversed paper";
  }
  if (
    dice1 == 3 &&
    (input == "reversed stone" ||
      input == "reversed scissors" ||
      input == "reversed paper")
  ) {
    return "reversed stone";
  }
};

var inputemoji = function (input) {
  if (input == "scissors") {
    return "scissors ✌";
  }
  if (input == "paper") {
    return "paper ✋";
  }
  if (input == "stone") {
    return "stone ✊";
  }
  if (input == "reversed scissors") {
    return "reversed scissors ✌";
  }
  if (input == "reversed paper") {
    return "reversed paper ✋";
  }
  if (input == "reversed stone") {
    return "reversed stone ✊";
  }
};

var diceemoji = function (diceresult) {
  if (diceresult == "scissors") {
    return "scissors ✌";
  }
  if (diceresult == "paper") {
    return "paper ✋";
  }
  if (diceresult == "stone") {
    return "stone ✊";
  }
  if (diceresult == "reversed scissors") {
    return "reversed scissors ✌";
  }
  if (diceresult == "reversed paper") {
    return "reversed paper ✋";
  }
  if (diceresult == "reversed stone") {
    return "reversed stone ✊";
  }
};

var rolldice = function (max) {
  randomnum = Math.random() * 3 + 1;
  randomdice = Math.floor(randomnum);
  return randomdice;
};
