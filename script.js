var main = function (input) {
  var dice1 = rolldice();
  var diceresult = diceoutput(dice1);
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
    (input == "paper" && diceresult == "stone")
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
    (input == "paper" && diceresult == "scissors")
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

var diceoutput = function (dice1) {
  console.log(dice1);
  if (dice1 == 1) {
    return "scissors";
  }
  if (dice1 == 2) {
    return "paper";
  }
  if (dice1 == 3) {
    return "stone";
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
};

var rolldice = function () {
  randomnum = Math.random() * 3 + 1;
  randomdice = Math.floor(randomnum);
  return randomdice;
};
