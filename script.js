var main = function (input) {
  var computerNumber = rollDice();
  console.log("computerNumber", computerNumber);

  var computerMove = programPick(computerNumber);
  console.log("computer", computerMove);

  var iconComputer = iconLogo(computerMove);
  console.log("iconComputer", iconComputer);

  var iconPlayer = iconLogo(input);
  console.log("iconPlayer", iconPlayer);

  var myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>You played ${input} ${iconPlayer}.<br>You lost ='( <br>Lets play another round!`;
  if (
    (input == "scissors" && computerMove == "paper") ||
    (input == "stone" && computerMove == "scissors") ||
    (input == "paper" && computerMove == "stone") ||
    (input == "reversed scissors" && computerMove == "stone") ||
    (input == "reversed stone" && computerMove == "paper") ||
    (input == "reversed paper" && computerMove == "scissors")
  ) {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>You won!!!<br>Lets play another round!`;
  }

  if (
    input == computerMove ||
    (input == "reversed scissors" && computerMove == "scissors") ||
    (input == "reversed stone" && computerMove == "stone") ||
    (input == "reversed paper" && computerMove == "paper")
  ) {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw!<br>Lets play another round!`;
  }

  if (
    input != "scissors" &&
    input != "stone" &&
    input != "paper" &&
    input != "reversed scissors" &&
    input != "reversed stone" &&
    input != "reversed paper"
  ) {
    myOutputValue = `Please type in scissors, paper or stone.`;
  }
  return myOutputValue;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var programPick = function (number) {
  var programMove = "None";
  if (number == 1) {
    programMove = "scissors";
  }
  if (number == 2) {
    programMove = "paper";
  }
  if (number == 3) {
    programMove = "stone";
  }
  return programMove;
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
