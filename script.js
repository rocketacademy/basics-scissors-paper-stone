var userScore = 0;
var noOfGame = 0;
var userDraw = 0;
var nickName = " ";
var gameMode = "normal";
var playMode = "normal";
var koreanMode = 0;
var koreanLoseMode = 0;
var koreanWinMode = 0;
var comAScore = 0;
var comBScore = 0;
// random number generate
var randomNumber = function () {
  var randomDice = Math.random() * 3;
  var randomIntegal = Math.ceil(randomDice);
  var actualResult = randomIntegal;
  if (actualResult == 1) {
    return "scissors";
  }
  if (actualResult == 2) {
    return "paper";
  }
  if (actualResult == 3) {
    return "stone";
  }
};
//add in emoji
var outResult = function (comResult) {
  if (comResult == "scissors") {
    return "scissors ✂️";
  }
  if (comResult == "paper") {
    return "paper 🖐";
  }
  if (comResult == "stone") {
    return "stone 🥌";
  }
};
var keyInData = function (input1, comAResult1) {
  if (
    input1 == "scissors" ||
    input1 == "reversed scissors" ||
    comAResult1 == "scissors"
  ) {
    return "scissors ✂️";
  }
  if (
    input1 == "paper" ||
    input1 == "reversed paper" ||
    comAResult1 == "paper"
  ) {
    return "paper 🖐";
  }
  if (
    input1 == "stone" ||
    input1 == "reversed stone" ||
    comAResult1 == "stone"
  ) {
    return "stone 🥌";
  }
};
//game mode
var gameModeSel = function (mode) {
  gameMode = playMode;
  if (mode == "normal" && noOfGame != 0) {
    gameMode = "normal";
    playMode = gameMode;
    userScore = 0;
    noOfGame = 1;
    comAScore = 0;
    comBscore = 0;
    userDraw = 0;
  }
  if (mode == "reverse" && noOfGame != 0) {
    gameMode = "reverse";
    playMode = gameMode;
    userScore = 0;
    noOfGame = 1;
    comAScore = 0;
    comBscore = 0;
    userDraw = 0;
  }
  if (mode == "korean" && noOfGame != 0) {
    gameMode = "korean";
    playMode = gameMode;
    userScore = 0;
    noOfGame = 1;
    comAScore = 0;
    comBscore = 0;
    userDraw = 0;
  }
  if (mode == "com" && noOfGame != 0) {
    gameMode = "com";
    playMode = gameMode;
    userScore = 0;
    noOfGame = 1;
    comAScore = 0;
    comBscore = 0;
    userDraw = 0;
  }
};
//Normal with reversed mode result
var result = function (input1, outComResult1, userInput1, comResult1) {
  var realResult = noOfGame - 2;
  var winPercentage = userScore + "/" + realResult;

  //invalid input
  var myOutputValue =
    "Not available.<br>" +
    nickName +
    " Please key in 'scissors','paper' or 'stone' ✂️🖐🥌.<br> Please key in 'reversed' to reverse the rule. e.g 'reversed stone'<br>Change the mode anytime by keying in : 'normal', 'reverse', ' korean' or 'com'.<br>please try again😕";
  //result with valid input
  if (
    input1 == comResult1 ||
    input1 == "reversed stone" ||
    input1 == "reversed paper" ||
    input1 == "reversed scissors"
  ) {
    noOfGame += 1;
    userDraw += 1;
    myOutputValue =
      "Computer choose " +
      outComResult1 +
      "<br>" +
      nickName +
      " choose " +
      userInput1 +
      " <br>It's a draw😲<br>" +
      nickName +
      "'s result:<br> score =" +
      userScore +
      ", Winning% = " +
      winPercentage +
      ", Draw = " +
      userDraw;
  }
  if (
    (input1 == "scissors" && comResult1 == "paper") ||
    (input1 == "paper" && comResult1 == "stone") ||
    (input1 == "stone" && comResult1 == "scissors") ||
    (input1 == "reversed paper" && comResult1 == "scissors") ||
    (input1 == "reversed stone" && comResult1 == "paper") ||
    (input1 == "reversed scissors" && comResult1 == "stone")
  ) {
    noOfGame += 1;
    userScore += 1;
    winPercentage = userScore + "/" + realResult;
    myOutputValue =
      "Computer choose " +
      outComResult1 +
      "<br> " +
      nickName +
      " choose " +
      userInput1 +
      "<br>" +
      userInput1 +
      " beat " +
      outComResult1 +
      "<br>You Win😎<br> " +
      nickName +
      "'s result:<br> score =" +
      userScore +
      ", Winning% = " +
      winPercentage +
      ", Draw = " +
      userDraw;
  }
  if (
    (input1 == "paper" && comResult1 == "scissors") ||
    (input1 == "stone" && comResult1 == "paper") ||
    (input1 == "scissors" && comResult1 == "stone") ||
    (input1 == "reversed scissors" && comResult1 == "paper") ||
    (input1 == "reversed paper" && comResult1 == "stone") ||
    (input1 == "reversed stone" && comResult1 == "scissors")
  ) {
    noOfGame += 1;
    myOutputValue =
      "Computer choose " +
      outComResult1 +
      "<br> " +
      nickName +
      " choose " +
      userInput1 +
      "<br>" +
      outComResult1 +
      " beat " +
      userInput1 +
      "<br>You lose😭<br>" +
      nickName +
      "'s result:<br> score =" +
      userScore +
      ", Winning% = " +
      winPercentage +
      ", Draw = " +
      userDraw;
  }
  return myOutputValue;
};
//reverse mode
var reverseResult = function (
  rInput1,
  rOutComResult1,
  rUserInput1,
  rComResult1
) {
  var realResult = noOfGame - 2;
  var winPercentage = userScore + "/" + realResult;

  //invalid input
  var myOutputValue =
    "Not available.<br>" +
    nickName +
    " Please key in 'scissors','paper' or 'stone' ✂️🖐🥌.<br>Change the mode anytime by keying in : 'normal', 'reverse', ' korean' or 'com'.<br>please try again😕";
  //result with valid input
  if (rInput1 == rComResult1) {
    noOfGame += 1;
    userDraw += 1;
    myOutputValue =
      "Computer choose " +
      rOutComResult1 +
      "<br>" +
      nickName +
      " choose " +
      rUserInput1 +
      " <br>It's a draw😲<br>" +
      nickName +
      "'s result:<br> score =" +
      userScore +
      ", Winning% = " +
      winPercentage +
      ", Draw = " +
      userDraw;
  }
  if (
    (rInput1 == "paper" && rComResult1 == "scissors") ||
    (rInput1 == "stone" && rComResult1 == "paper") ||
    (rInput1 == "scissors" && rComResult1 == "stone")
  ) {
    noOfGame += 1;
    userScore += 1;
    winPercentage = userScore + "/" + realResult;
    myOutputValue =
      "Computer choose " +
      rOutComResult1 +
      "<br> " +
      nickName +
      " choose " +
      rUserInput1 +
      "<br>" +
      rUserInput1 +
      " beat " +
      rOutComResult1 +
      "<br>You Win😎<br> " +
      nickName +
      "'s result:<br> score =" +
      userScore +
      ", Winning% = " +
      winPercentage +
      ", Draw = " +
      userDraw;
  }
  if (
    (rInput1 == "scissors" && rComResult1 == "paper") ||
    (rInput1 == "paper" && rComResult1 == "stone") ||
    (rInput1 == "stone" && rComResult1 == "scissors")
  ) {
    noOfGame += 1;
    myOutputValue =
      "Computer choose " +
      rOutComResult1 +
      "<br> " +
      nickName +
      " choose " +
      rUserInput1 +
      "<br>" +
      rOutComResult1 +
      " beat " +
      rUserInput1 +
      "<br>You lose😭<br>" +
      nickName +
      "'s result:<br> score =" +
      userScore +
      ", Winning% = " +
      winPercentage +
      ", Draw = " +
      userDraw;
  }
  return myOutputValue;
};
//korean mode
var koreanResult = function (
  kInput1,
  kOutComResult1,
  kUserInput1,
  kComResult1
) {
  //invalid input
  var myOutputValue =
    "Not available.<br>" +
    nickName +
    " Please key in 'scissors','paper' or 'stone' ✂️🖐🥌.<br>Change the mode anytime by keying in : 'normal', 'reverse', ' korean' or 'com'.<br>please try again😕";
  //result with valid input
  var realResult = noOfGame - 2;
  var winPercentage = userScore + "/" + realResult;
  if (kInput1 == kComResult1) {
    noOfGame += 1;
    userDraw += 1;
    myOutputValue =
      "Computer choose " +
      kOutComResult1 +
      "<br>" +
      nickName +
      " choose " +
      kUserInput1 +
      " <br>It's a draw😲<br>" +
      nickName +
      "'s result:<br> score =" +
      userScore +
      ", Winning% = " +
      winPercentage +
      ", Draw = " +
      userDraw;
  }
  if (
    (kInput1 == "scissors" && kComResult1 == "paper") ||
    (kInput1 == "paper" && kComResult1 == "stone") ||
    (kInput1 == "stone" && kComResult1 == "scissors")
  ) {
    koreanMode += 1;
    koreanWinMode += 1;
    myOutputValue =
      "Computer choose " +
      kOutComResult1 +
      "<br> " +
      nickName +
      " choose " +
      kUserInput1 +
      "<br>" +
      kUserInput1 +
      " beat " +
      kOutComResult1 +
      "<br>One more time to win or draw<br> ";
  }
  if (
    (kInput1 == "paper" && kComResult1 == "scissors") ||
    (kInput1 == "stone" && kComResult1 == "paper") ||
    (kInput1 == "scissors" && kComResult1 == "stone")
  ) {
    koreanMode += 1;
    koreanLoseMode += 1;
    console.log("koreanLoseMode");
    console.log(koreanLoseMode);
    myOutputValue =
      "Computer choose " +
      kOutComResult1 +
      "<br> " +
      nickName +
      " choose " +
      kUserInput1 +
      "<br>" +
      kOutComResult1 +
      " beat " +
      kUserInput1 +
      "<br>one more time to lose or draw <br>";
  }
  return myOutputValue;
};
//korean sub game
var korean2Result = function (
  k2Input1,
  k2OutComResult1,
  k2UserInput1,
  k2ComResult1
) {
  var realResult = noOfGame - 2;
  var winPercentage = userScore + "/" + realResult;

  //invalid input
  var myOutputValue =
    "Not available.<br>" +
    nickName +
    " Please key in 'scissors','paper' or 'stone' ✂️🖐🥌.<br>Change the mode anytime by keying in : 'normal', 'reverse', ' korean' or 'com'.<br>please try again😕";
  //result with valid input
  if (k2Input1 == k2ComResult1) {
    if (koreanWinMode == 1) {
      noOfGame += 1;
      console.log("win mode");
      koreanMode -= 1;
      koreanWinMode -= 1;
      userScore += 1;
      winPercentage = userScore + "/" + realResult;
      myOutputValue =
        "Computer choose " +
        k2OutComResult1 +
        "<br>" +
        nickName +
        " choose " +
        k2UserInput1 +
        "<br>" +
        k2UserInput1 +
        " beat " +
        k2OutComResult1 +
        " <br>You Win😎<br>" +
        nickName +
        "'s result:<br> score =" +
        userScore +
        ", Winning% = " +
        winPercentage +
        ", Draw = " +
        userDraw;
    } else if (koreanLoseMode == 1) {
      noOfGame += 1;
      console.log("lose mode");
      koreanMode -= 1;
      koreanLoseMode -= 1;
      winPercentage = userScore + "/" + realResult;
      myOutputValue =
        "Computer choose " +
        k2OutComResult1 +
        "<br>" +
        nickName +
        " choose " +
        k2UserInput1 +
        "<br>" +
        k2OutComResult1 +
        " beat " +
        k2UserInput1 +
        " <br>You lose😭<br>" +
        nickName +
        "'s result:<br> score =" +
        userScore +
        ", Winning% = " +
        winPercentage +
        ", Draw = " +
        userDraw;
    }
  } else if (
    (k2Input1 == "scissors" && k2ComResult1 == "paper") ||
    (k2Input1 == "paper" && k2ComResult1 == "stone") ||
    (k2Input1 == "stone" && k2ComResult1 == "scissors") ||
    (k2Input1 == "paper" && k2ComResult1 == "scissors") ||
    (k2Input1 == "stone" && k2ComResult1 == "paper") ||
    (k2Input1 == "scissors" && k2ComResult1 == "stone")
  ) {
    noOfGame += 1;
    userDraw += 1;
    console.log("lose");
    koreanMode = 0;
    koreanLoseMode = 0;
    koreanWinMode = 0;
    winPercentage = userScore + "/" + realResult;
    myOutputValue =
      "Computer choose " +
      k2OutComResult1 +
      "<br> " +
      nickName +
      " choose " +
      k2UserInput1 +
      "<br>You Draw <br> " +
      nickName +
      "'s result:<br> score =" +
      userScore +
      ", Winning% = " +
      winPercentage +
      ", Draw = " +
      userDraw;
  }
  return myOutputValue;
};
// Com vs Com mode
var cvcResult = function (
  comAResult1,
  outBComResult1,
  userAInput1,
  comBResult1
) {
  var realResult = noOfGame - 2;
  var winPercentage = comAScore + "/" + realResult;
  var winBPer = comBScore + "/" + realResult;

  //invalid input
  var myOutputValue =
    "Not available.<br>" +
    nickName +
    " Please key in 'scissors','paper' or 'stone' ✂️🖐🥌.<br>Change the mode anytime by keying in : 'normal', 'reverse', ' korean' or 'com'.<br>please try again😕";
  //result with valid input
  if (comAResult1 == comBResult1) {
    userDraw += 1;
    myOutputValue =
      "Computer B choose " +
      outBComResult1 +
      "<br>Computer A choose " +
      userAInput1 +
      " <br>It's a draw😲<br>Computer A's result:<br> score =" +
      comAScore +
      ", Winning% = " +
      winPercentage +
      " <br> Computer B's result: <br> score =" +
      comBscore +
      ", Winning% = " +
      winBPer +
      "<br> Draw = " +
      userDraw;
  }
  if (
    (comAResult1 == "scissors" && comBResult1 == "paper") ||
    (comAResult1 == "paper" && comBResult1 == "stone") ||
    (comAResult1 == "stone" && comBResult1 == "scissors")
  ) {
    comAScore += 1;
    winPercentage = comAScore + "/" + realResult;
    myOutputValue =
      "Computer B choose " +
      outBComResult1 +
      "<br>Computer A choose " +
      userAInput1 +
      "<br>" +
      userAInput1 +
      " beat " +
      outBComResult1 +
      "<br>Computer A Win😎<br>Computer B Lose😭<br>Computer A's result:<br> score =" +
      comAScore +
      ", Winning% = " +
      winPercentage +
      " <br> Computer B's result: <br> score =" +
      comBscore +
      ", Winning% = " +
      winBPer +
      "<br> Draw = " +
      userDraw;
  }
  if (
    (comAResult1 == "paper" && comBResult1 == "scissors") ||
    (comAResult1 == "stone" && comBResult1 == "paper") ||
    (comAResult1 == "scissors" && comBResult1 == "stone")
  ) {
    comBScore += 1;
    winPercentage = comBScore + "/" + realResult;
    myOutputValue =
      "Computer B choose " +
      outBComResult1 +
      "<br>Computer A choose " +
      userAInput1 +
      "<br>" +
      outBComResult1 +
      " beat " +
      userAInput1 +
      "<br>" +
      "Computer B Win😎<br>Computer A lose😭<br>Computer A's result:<br> score =" +
      comAScore +
      ", Winning% = " +
      winPercentage +
      " <br> Computer B's result: <br> score =" +
      comBscore +
      ", Winning% = " +
      winBPer +
      "<br> Draw = " +
      userDraw;
  }
  return myOutputValue;
};

//main
var main = function (input) {
  var comResult = randomNumber();
  var comAResult = randomNumber();
  var userInput = keyInData(input, comAResult);
  var outComResult = outResult(comResult);
  gameMode = gameModeSel(input);

  var name = input;
  //input name
  if (noOfGame == 0) {
    nickName = name;
    noOfGame += 2;
    var startOfGame =
      "Welcome to the game<br> 🥳🥳   " +
      name +
      "    🥳🥳<br>let start the game<br> Please Key in 'scissors','paper' or 'stone'<br> There are few different mode <br>Change the mode anytime by keying in : 'normal', 'reverse', ' korean' or 'com'.<br> 'normal': Traditional game <br> 'reverse': Opposite rule of normal mode <br> 'korean': Korean game - Muk-jji-ppa <br>'com': Computer vs Computer";
    return startOfGame;
  }
  if (noOfGame == 1) {
    noOfGame += 1;
    var changeOfGame =
      "Hi " +
      nickName +
      "<br> The game has change to " +
      playMode +
      " mode<br> All score will reset";
    return changeOfGame;
  }

  //change Mode
  if (playMode == "normal") {
    var finalResult = result(input, outComResult, userInput, comResult);
    return finalResult;
  }
  if (playMode == "reverse") {
    var finalResult = reverseResult(input, outComResult, userInput, comResult);
    return finalResult;
  }
  if (playMode == "korean") {
    if (koreanMode == 0) {
      var finalResult = koreanResult(input, outComResult, userInput, comResult);
      return finalResult;
    } else if (koreanMode == 1) {
      console.log("mode1");
      var finalResult = korean2Result(
        input,
        outComResult,
        userInput,
        comResult
      );
      return finalResult;
    }
  }
  if (playMode == "com") {
    noOfGame += 1;
    var finalResult = cvcResult(comAResult, outComResult, userInput, comResult);
    return finalResult;
  }
};
