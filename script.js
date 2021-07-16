var main = function (input) {
  var computerMove = randomItem();
  console.log("computer", computerMove);

  var iconComputer = iconLogo(computerMove);
  console.log("iconComputer", iconComputer);

  var iconPlayer = iconLogo(input);
  console.log("iconPlayer", iconPlayer);

  var draw = drawGame(input, computerMove);
  var win = playerWin(input, computerMove);
  var tryAgain = invalid(input);

  var myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>You played ${input} ${iconPlayer}.<br>You lost ='( <br>Lets play another round!`;
  if (win == "yes") {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>You won!!!<br>Lets play another round!`;
  }
  if (draw == "yes") {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw!<br>Lets play another round!`;
  }
  if (tryAgain == "yes") {
    myOutputValue = `Please type in scissors, paper or stone.`;
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
  var answer = "no";
  if (
    input == computerMove ||
    (input == "reversed scissors" && computerMove == "scissors") ||
    (input == "reversed stone" && computerMove == "stone") ||
    (input == "reversed paper" && computerMove == "paper")
  ) {
    answer = "yes";
  }
  return answer;
};

var playerWin = function (input, computerMove) {
  var answer = "no";
  if (
    (input == "scissors" && computerMove == "paper") ||
    (input == "reversed stone" && computerMove == "paper") ||
    (input == "stone" && computerMove == "scissors") ||
    (input == "reversed paper" && computerMove == "scissors") ||
    (input == "paper" && computerMove == "stone") ||
    (input == "reversed scissors" && computerMove == "stone")
  ) {
    answer = "yes";
  }
  return answer;
};

var invalid = function (input) {
  var answer = "no";
  if (
    input != "scissors" &&
    input != "stone" &&
    input != "paper" &&
    input != "reversed scissors" &&
    input != "reversed stone" &&
    input != "reversed paper"
  ) {
    answer = "yes";
  }
  return answer;
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
