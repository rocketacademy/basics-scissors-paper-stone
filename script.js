var main = function (input) {
  var computerMove = randomItem();
  console.log("computer", computerMove);

  var iconComputer = iconLogo(computerMove);
  console.log("iconComputer", iconComputer);

  var iconPlayer = iconLogo(input);
  console.log("iconPlayer", iconPlayer);

  var draw = drawGame(input);
  var win = playerWin(input);

  var myOutputValue = `The computer played ${computerMove} ${iconComputer} .<br>You played ${input} ${iconPlayer}.<br>You lost ='( <br>Lets play another round!`;
  if (win == "yes") {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>You won!!!<br>Lets play another round!`;
  }
  if (draw == "yes") {
    myOutputValue = `The computer played ${computerMove} ${iconComputer}.<br>You played ${input} ${iconPlayer}.<br>It's a draw!<br>Lets play another round!`;
  }
  if (
    input != "scissors" && input != "stone" && input != "paper" && input != "reversed scissors" && input != "reversed stone" && input != "reversed paper"
  ) {myOutputValue = `Please type in scissors, paper or stone.`;}
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

var drawGame = function (guess) {
  var computerMove = randomItem();
  var answer = "no";
  if (
    guess == computerMove ||
    (guess == "reversed scissors" && computerMove == "scissors") ||
    (guess == "reversed stone" && computerMove == "stone") ||
    (guess == "reversed paper" && computerMove == "paper")
  ) {
    answer = "yes";
  }
  return answer;
};

var playerWin = function (guess) {
  var computerMove = randomItem();
  var answer = "no";
  if (
    guess == "scissors" ||
    (guess == "reversed stone" && computerMove == "paper") ||
    guess == "stone" ||
    (guess == "reversed paper" && computerMove == "scissors") ||
    guess == "paper" ||
    (guess == "reversed scissors" && computerMove == "stone")
  ) {
    answer = "yes";
  }
  return answer;
};

//var invalid = function (guess) {
//if (
   // input != "scissors" && input != "stone" && input != "paper" && input != "reversed scissors" && input != "reversed stone" && input != "reversed paper"
}

var iconLogo = function (look) {
  var logo = "none";
  if (look == "scissors" || look == "reversed scrissors") {
    logo = "✂️";}
  if (look == "paper" || look == "reversed paper") {
    logo = "📜";}
  if (look == "stone" || look == "reversed stone") {
    logo = "🗿";}
  return logo;
};
