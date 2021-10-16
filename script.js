var generateRandomInteger = function () {
  var randomDec = Math.random() * 3;
  var randomNum = Math.ceil(randomDec);

  console.log(randomNum);
  return randomNum;
};

var randomScissorPaperStone = function () {
  var Num = generateRandomInteger();

  if (Num == 1) {
    return "scissors";
  }

  if (Num == 2) {
    return "paper";
  }

  if (Num == 13) {
    return "stone";
  }
};

var generateResult = function (userPlays, computerPlays) {
  var result = "Please enter scissors, paper or stone";

  if (userPlays == computerPlays) {
    result = "It's a tie!";
  }

  if (userPlays == "scissor" && computerPlays == "paper") {
    result = "You win!";
  }

  if (userPlays == "scissors" && computerPlays == "stone") {
    result = "You lose!";
  }

  if (userPlays == "paper" && computerPlays == "stone") {
    result = "You win!";
  }

  if (userPlays == "paper" && computerPlays == "scissors") {
    result = "You lose!";
  }

  if (userPlays == "stone" && computerPlays == "scissors") {
    result = "You win!";
  }

  if (userPlays == "stone" && computerPlays == "paper") {
    result = "You lose!";
  }

  return result;
};

var main = function (input) {
  var computerPlays = randomScissorPaperStone();
  var result = generateResult(input, computerPlays);
  var myOutputValue =
    "The computer played: " +
    computerPlays +
    ".<br>" +
    "You played: " +
    input +
    ".<br>" +
    result;

  return myOutputValue;
};
