//global states
var totalGames = -1;
var PlayerWins = 0;
var ComputerWins = 0;
var totalDraws = 0;
var Username = "";
var GameMode = "normal";
var lastResult = "";

var main = function (input) {
  if (totalGames == -1) {
    Username = input;
    totalGames = totalGames + 1;
    return (
      "Your username is " +
      input +
      ". Please enter scissors, paper or stone to play the game!"
    );
  }
  if (input == "reverse" || input == "normal" || input == "korean") {
    GameMode = input;
    return "Game mode is now " + GameMode + ".";
  }
  var myOutputValue =
    "Sorry, your input was not one of the three input options. Please try again!";
  Answer = ComputerChoice();
  if (input == "stone" || input == "scissors" || input == "paper") {
    console.log(GameMode);
    totalGames = totalGames + 1;
    if (GameMode == "normal") {
      myOutputValue = RegularGame(input, Answer);
    }
    if (GameMode == "reverse") {
      myOutputValue = ReverseGame(input, Answer);
    }
    if (GameMode == "korean") {
      myOutputValue = KoreanGame(input, Answer);
    }
  }
  return myOutputValue;
};
//Regular Rules
var RegularGame = function (input, Answer) {
  if (DrawCheck(input, Answer) == true) {
    totalDraws = totalDraws + 1;
    lastResult = "draw";
    return GameOutcome(Answer, input, lastResult, PlayerWins, totalGames);
  }
  if (WinCheck(input, Answer) == true) {
    PlayerWins = PlayerWins + 1;
    lastResult = "win";
    return GameOutcome(Answer, input, lastResult, PlayerWins, totalGames);
  }
  if (LoseCheck(input, Answer) == true) {
    ComputerWins = ComputerWins + 1;
    lastResult = "loss";
    return GameOutcome(Answer, input, lastResult, PlayerWins, totalGames);
  }
};

var KoreanGame = function (input, Answer) {
  if (DrawCheck(input, Answer) == true) {
    if (lastResult == "win") {
      PlayerWins = PlayerWins + 1;
      console.log("A");
    } else if (lastResult == "loss") {
      ComputerWins = ComputerWins + 1;
      console.log("B");
    }
    console.log(lastResult);
    return GameOutcome(Answer, input, lastResult, PlayerWins, totalGames);
  }
  if (WinCheck(input, Answer) == true) {
    PlayerWins = PlayerWins + 1;
    lastResult = "win";
    return GameOutcome(Answer, input, lastResult, PlayerWins, totalGames);
  }
  if (LoseCheck(input, Answer) == true) {
    ComputerWins = ComputerWins + 1;
    lastResult = "loss";
    return GameOutcome(Answer, input, lastResult, PlayerWins, totalGames);
  }
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
  if (DrawCheck(input, Answer) == true) {
    totalDraws = totalDraws + 1;
    lastResult = "draw";
    return GameOutcome(Answer, input, lastResult, PlayerWins, totalGames);
  }
  if (ReverseWinCheck(input, Answer) == true) {
    PlayerWins = PlayerWins + 1;
    lastResult = "win";
    return GameOutcome(Answer, input, lastResult, PlayerWins, totalGames);
  }
  if (ReverseLoseCheck(input, Answer) == true) {
    ComputerWins = ComputerWins + 1;
    lastResult = "loss";
    return GameOutcome(Answer, input, lastResult, PlayerWins, totalGames);
  }
};

var ReverseLoseCheck = function (input4, Answer4) {
  var Result4 = false;
  if (
    (Answer4 == "scissors" && input4 == "stone") ||
    (Answer4 == "stone" && input4 == "paper") ||
    (Answer4 == "paper" && input4 == "scissors")
  ) {
    Result4 = true;
  }
  return Result4;
};

var ReverseWinCheck = function (input5, Answer5) {
  var Result5 = false;
  if (
    (input5 == "scissors" && Answer5 == "stone") ||
    (input5 == "stone" && Answer5 == "paper") ||
    (input5 == "paper" && Answer5 == "scissors")
  ) {
    Result5 = true;
  }
  return Result5;
};

//results
var GameOutcome = function (Answer, input, lastResult, PlayerWins, totalGames) {
  var message =
    "The Computor chose " +
    Answer +
    ".<br>" +
    Username +
    " chose " +
    input +
    ".<br><br> The result is a " +
    lastResult +
    ".<br><br>" +
    `Now you can type "scissors" "paper" or "stone" to play another round!<br>You have won ` +
    PlayerWins +
    " out of " +
    totalGames +
    ".";
  return message;
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
