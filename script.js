var main = function (input) {
  var myOutputValue =
    "Sorry, your input was not one of the three input options. Please try again!";
  var Answer = ComputerChoice();
  var ReversedAnswer = "reversed " + Answer;
  console.log(input);
  console.log(Answer);
  console.log(ReversedAnswer);
  if (input == "stone" || input == "scissors" || input == "paper") {
    myOutputValue = RegularGame(input, Answer);
    console.log(myOutputValue);
  }
  if (
    input == "reversed stone" ||
    input == "reversed scissors" ||
    input == "reversed paper"
  ) {
    myOutputValue = ReverseGame(input, ReversedAnswer);
    console.log(myOutputValue);
  }
  return myOutputValue;
};
//Regular Game
var RegularGame = function (input, Answer) {
  var Result3 = "0";
  if (DrawCheck(input, Answer) == true) {
    Result3 =
      "The Computor chose " +
      Answer +
      ".<br> You chose " +
      input +
      ".<br><br> Its a Draw.<br><br>" +
      `Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (WinCheck(input, Answer) == true) {
    Result3 =
      "The Computor chose " +
      Answer +
      ".<br> You chose " +
      input +
      ".<br><br> You Win! <br><br>" +
      `Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (LoseCheck(input, Answer) == true) {
    Result3 =
      "The Computor chose " +
      Answer +
      ".<br> You chose " +
      input +
      ".<br><br> You Lose.<br><br>" +
      `Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  return Result3;
};

var DrawCheck = function (input1, Answer1) {
  var Result = true;
  if (input1 != Answer1) {
    Result = false;
  }
  return Result;
};

var WinCheck = function (input3, Answer3) {
  var Result2 = false;
  if (
    (Answer3 == "scissors" && input3 == "stone") ||
    (Answer3 == "stone" && input3 == "paper") ||
    (Answer3 == "paper" && input3 == "scissors")
  ) {
    Result2 = true;
  }
  return Result2;
};

var LoseCheck = function (input2, Answer2) {
  var Result1 = false;
  if (
    (input2 == "scissors" && Answer2 == "stone") ||
    (input2 == "stone" && Answer2 == "paper") ||
    (input2 == "paper" && Answer2 == "scissors")
  ) {
    Result1 = true;
  }
  return Result1;
};
//Reverse Game
var ReverseGame = function (input, Answer) {
  var Result6 = "0";
  if (DrawCheck(input, Answer) == true) {
    Result6 =
      "The Computor chose " +
      Answer +
      ".<br> You chose " +
      input +
      ".<br><br> Its a Draw.<br><br>" +
      `Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (ReverseWinCheck(input, Answer) == true) {
    Result6 =
      "The Computor chose " +
      Answer +
      ".<br> You chose " +
      input +
      ".<br><br> You Win! <br><br>" +
      `Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (ReverseLoseCheck(input, Answer) == true) {
    Result6 =
      "The Computor chose " +
      Answer +
      ".<br> You chose " +
      input +
      ".<br><br> You Lose.<br><br>" +
      `Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  return Result6;
};

var ReverseLoseCheck = function (input4, Answer4) {
  var Result4 = false;
  if (
    (Answer4 == "reversed scissors" && input4 == "reversed stone") ||
    (Answer4 == "reversed stone" && input4 == "reversed paper") ||
    (Answer4 == "reversed paper" && input4 == "reversed scissors")
  ) {
    Result4 = true;
  }
  return Result4;
};

var ReverseWinCheck = function (input5, Answer5) {
  var Result5 = false;
  if (
    (input5 == "reversed scissors" && Answer5 == "reversed stone") ||
    (input5 == "reversed stone" && Answer5 == "reversed paper") ||
    (input5 == "reversed paper" && Answer5 == "reversed scissors")
  ) {
    Result5 = true;
  }
  return Result5;
};
//background
var ComputerChoice = function () {
  var RandomResponse = NumberGenerator();
  var ComputerPlays = "0";
  if (RandomResponse == 1) {
    ComputerPlays = "scissors";
  }
  if (RandomResponse == 2) {
    ComputerPlays = "paper";
  }
  if (RandomResponse == 3) {
    ComputerPlays = "stone";
  }
  return ComputerPlays;
};

var NumberGenerator = function () {
  var myRandomValue = Math.random() * 3;
  var RandomNumber = Math.floor(myRandomValue) + 1;
  return RandomNumber;
};
