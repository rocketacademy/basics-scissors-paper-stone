var main = function (input) {
  var computerMove = randomItem();
  console.log("computer", computerMove);

  var iconComputer = iconLogo(computerMove);
  console.log("iconComputer", iconComputer);

  var iconPlayer = iconLogo(input);
  console.log("iconPlayer", iconPlayer);

  var draw = drawGame(input, computerMove);
  var win =
    playerWin(input, computerMove) || playerWinReversed(input, computerMove);
  var tryAgain = invalid(input);

  var myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>You played ${input} ${iconPlayer}.<br>You lost ='( <br>Lets play another round!`;
  if (tryAgain) {
    myOutputValue = `Please type in scissors, paper or stone.`;
  }
  if (win) {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>You won!!!<br>Lets play another round!`;
  }
  if (draw) {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw!<br>Lets play another round!`;
  }
  return myOutputValue;
};

var randomItem = function () {
  var random = Math.floor(Math.random() * 3);
  var programMove = "stone";
  if (random == 1) {
    programMove = "scissors";
  }
  if (random == 2) {
    programMove = "paper";
  }
  return programMove;
};

var drawGame = function (input, computerMove) {
  return input.includes(computerMove);
};

/*var drawGameReversed = function (input, computerMove) {
  return (
    (input == "reversed scissors" && computerMove == "scissors") ||
    (input == "reversed stone" && computerMove == "stone") ||
    (input == "reversed paper" && computerMove == "paper")
  );
};
*/

var playerWin = function (input, computerMove) {
  return (
    (input == "scissors" && computerMove == "paper") ||
    (input == "stone" && computerMove == "scissors") ||
    (input == "paper" && computerMove == "stone")
  );
};

var playerWinReversed = function (input, computerMove) {
  return (
    (input == "reversed paper" && computerMove == "scissors") ||
    (input == "reversed stone" && computerMove == "paper") ||
    (input == "reversed scissors" && computerMove == "stone")
  );
};

var invalid = function (input) {
  return (
    input != "scissors" &&
    input != "stone" &&
    input != "paper" &&
    input != "reversed scissors" &&
    input != "reversed stone" &&
    input != "reversed paper"
  );
};

var iconLogo = function (look) {
  var logo = "none";
  if (look == "scissors" || look == "reversed scrissors") {
    logo = "✂️";
  }
  if (look == "paper" || look == "reversed paper") {
    logo = "📜";
  }
  if (look == "stone" || look == "reversed stone") {
    logo = "🗿";
  }
  return logo;
};
