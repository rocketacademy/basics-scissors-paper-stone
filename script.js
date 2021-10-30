var scissors = "scissors";
var stone = "stone";
var paper = "paper";
//Keeping track of Computer's and User's wins
var computerWin = 0;
var userWin = 0;
//Keeping track of game mode
var gameMode = "normal";
//username
var username = "";

var main = function (inputSign) {
  //computer's sign
  var resultOfComputerSign = computerSign();
  //Accounting for Gamemode Change
  if (gameMode == "normal" && inputSign == "reverse") {
    gameMode = "reverse";
    var myOutputValue = "Gamemode is now in reverse";
    return myOutputValue;
  }
  if (gameMode == "reverse" && inputSign == "normal") {
    gameMode = "normal";
    var myOutputValue = "Gamemode is now normal";
    return myOutputValue;
  }
  //Accounting for Draw scenario
  if (inputSign == resultOfComputerSign) {
    //calling special message function
    var specialMessageHere = specialMessage();
    //calling gamemode message function
    var gameModeMessageHere = gameModeMessage();
    var myOutputValue =
      "It's a draw " +
      username +
      "! Computer selected " +
      inputSign +
      "<br> Try again! <br> Computer has so far won " +
      computerWin +
      " number of times. <br> You have so far won " +
      userWin +
      " number of times. " +
      specialMessageHere +
      gameModeMessageHere;
    return myOutputValue;
  }
  //Normal Game mode
  if (gameMode == "normal") {
    //Accounting for Lose scenario for Normal Game mode
    if (
      (inputSign == "scissors" && resultOfComputerSign == stone) ||
      (inputSign == "stone" && resultOfComputerSign == paper) ||
      (inputSign == "paper" && resultOfComputerSign == scissors)
    ) {
      //Add to Computer's win
      computerWin += 1;
      //calling special message function
      var specialMessageHere = specialMessage();
      //calling gamemode message function
      var gameModeMessageHere = gameModeMessage();
      var myOutputValue =
        "Computer selected " +
        resultOfComputerSign +
        " you lose! <br> Try again " +
        username +
        "! <br> Computer has so far won " +
        computerWin +
        " number of times. <br> You have so far won " +
        userWin +
        " number of times. " +
        specialMessageHere +
        gameModeMessageHere;
      return myOutputValue;
    }
    //Accounting for Win scenario for Normal Game mode
    if (
      (inputSign == "scissors" && resultOfComputerSign == paper) ||
      (inputSign == "stone" && resultOfComputerSign == scissors) ||
      (inputSign == "paper" && resultOfComputerSign == stone)
    ) {
      //Add to User's win
      userWin += 1;
      //calling special message function
      var specialMessageHere = specialMessage();
      //calling gamemode message function
      var gameModeMessageHere = gameModeMessage();
      var myOutputValue =
        "Computer selected " +
        resultOfComputerSign +
        " you win! <br> Try and Win again " +
        username +
        "! <br> Computer has so far won " +
        computerWin +
        " number of times. <br> You have so far won " +
        userWin +
        " number of times. " +
        specialMessageHere +
        gameModeMessageHere;
      return myOutputValue;
    }
    //Username assigning
    username = inputSign;
    var myOutputValue =
      "Hi " +
      username +
      "! Now please input either scissors, stone, or paper to start playing. Or 'reverse' or 'normal' to change modes!";
    return myOutputValue;
  }
  //Reversed Game mode
  if (gameMode == "reverse") {
    //Accounting for Win scenario for Reversed version
    if (
      (inputSign == "scissors" && resultOfComputerSign == stone) ||
      (inputSign == "stone" && resultOfComputerSign == paper) ||
      (inputSign == "paper" && resultOfComputerSign == scissors)
    ) {
      //Add to User's win
      userWin += 1;
      //calling special message function
      var specialMessageHere = specialMessage();
      //calling gamemode message function
      var gameModeMessageHere = gameModeMessage();
      var myOutputValue =
        "Computer selected " +
        resultOfComputerSign +
        " you win! <br> Try and Win again" +
        username +
        "! <br> Computer has so far won " +
        computerWin +
        " number of times. <br> You have so far won " +
        userWin +
        " number of times.. " +
        specialMessageHere +
        gameModeMessageHere;
      return myOutputValue;
    }
    //Accounting for Lose scenario for Reversed version
    if (
      (inputSign == "scissors" && resultOfComputerSign == paper) ||
      (inputSign == "stone" && resultOfComputerSign == scissors) ||
      (inputSign == "paper" && resultOfComputerSign == stone)
    ) {
      //Add to Computer's win
      computerWin += 1;
      //calling special message function
      var specialMessageHere = specialMessage();
      //calling gamemode message function
      var gameModeMessageHere = gameModeMessage();
      var myOutputValue =
        "Computer selected " +
        resultOfComputerSign +
        " you lose! <br> Try again" +
        username +
        "! <br> Computer has so far won " +
        computerWin +
        " number of times. <br> You have so far won " +
        userWin +
        " number of times. " +
        specialMessageHere +
        gameModeMessageHere;
      return myOutputValue;
    }
    //Username assigning
    username = inputSign;
    var myOutputValue =
      "Hi " +
      username +
      " Now please input either scissors, stone, or paper to start playing. Or 'reverse' or 'normal' to change modes!";
    return myOutputValue;
  }
};

//RandomNumber generator to assign Computer's SPS move
var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumberResult = randomInteger + 1;
  return randomNumberResult;
};

//Assigining Computer's SPS move
var computerSign = function () {
  var assignRandomNumberResult = randomNumber();
  if (assignRandomNumberResult == 1) {
    return scissors;
  }
  if (assignRandomNumberResult == 2) {
    return stone;
  }
  return paper;
};

//formatting special message if user is losing/winning
var specialMessage = function () {
  if (computerWin == userWin) {
    var myOutputValue = "You are currently tied with the computer! :|";
    return myOutputValue;
  }
  if (computerWin < userWin) {
    var myOutputValue = "You are ahead! :)";
    return myOutputValue;
  }
  var myOutputValue = "You are behind! :(";
  return myOutputValue;
};

//Gamemode Msg
var gameModeMessage = function () {
  if (gameMode == "normal") {
    var myOutputValue =
      " <br> You are playing in 'normal' mode, type 'reverse' to play in reverse mode!";
    return myOutputValue;
  }
  var myOutputValue =
    " <br> You are playing in 'reverse' mode, type 'normal' to play in normal mode!";
  return myOutputValue;
};
