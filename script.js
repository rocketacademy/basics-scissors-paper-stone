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

var generateRandomInteger = function () {
  var randomDec = Math.random() * 3;
  var randomNum = Math.ceil(randomDec);

  console.log(randomNum);
  return randomNum;
};

var generateResult = function (userPlays, computerPlays) {
  if (userPlays == computerPlays) {
    return "It's a tie!";
  }

  if (userPlays == "scissor" && computerPlays == "paper") {
    return "You win!";
  }

  if (userPlays == "scissors" && computerPlays == "stone") {
    return "You lose!";
  }

  if (userPlays == "paper" && computerPlays == "stone") {
    return "You win!";
  }

  if (userPlays == "paper" && computerPlays == "scissors") {
    return "You lose!";
  }

  if (userPlays == "stone" && computerPlays == "scissors") {
    return "You win!";
  }

  if (userPlays == "stone" && computerPlays == "paper") {
    return "You lose!";
  }
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

  if (result == undefined) {
    var myOutputValue = "Please enter scissors, paper or stone";
  }

  return myOutputValue;
};
