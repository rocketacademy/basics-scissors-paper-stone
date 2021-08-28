var userScore = 0;
var noOfGame = 0;
var nickName = " ";

var result = function (input1, outComResult1, userInput1, comResult1) {
  var realResult = noOfGame - 1;
  var winPercentage = userScore + "/" + realResult;

  //invalid input
  var myOutputValue =
    "Not available.<br>" +
    nickName +
    " Please key in 'scissors','paper' or 'stone' ✂️🖐🥌.<br> Please key in 'reversed' to reverse the rule. e.g 'reversed stone'<br>please try again😕";
  //result with valid input
  if (
    input1 == comResult1 ||
    input1 == "reversed stone" ||
    input1 == "reversed paper" ||
    input1 == "reversed scissors"
  ) {
    myOutputValue =
      "The computer choose " +
      outComResult1 +
      "<br>" +
      nickName +
      " choose " +
      userInput1 +
      " <br>It's a draw😲<br>" +
      nickName +
      "'s result:<br> score =" +
      userScore +
      " <br> Winning Percentage = " +
      winPercentage;
  }
  if (
    (input1 == "scissors" && comResult1 == "paper") ||
    (input1 == "paper" && comResult1 == "stone") ||
    (input1 == "stone" && comResult1 == "scissors") ||
    (input1 == "reversed paper" && comResult1 == "scissors") ||
    (input1 == "reversed stone" && comResult1 == "paper") ||
    (input1 == "reversed scissors" && comResult1 == "stone")
  ) {
    userScore += 1;
    winPercentage = userScore + "/" + realResult;
    myOutputValue =
      "The computer choose " +
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
      " <br> Winning Percentage = " +
      winPercentage;
  }
  if (
    (input1 == "paper" && comResult1 == "scissors") ||
    (input1 == "stone" && comResult1 == "paper") ||
    (input1 == "scissors" && comResult1 == "stone") ||
    (input1 == "reversed scissors" && comResult1 == "paper") ||
    (input1 == "reversed paper" && comResult1 == "stone") ||
    (input1 == "reversed stone" && comResult1 == "scissors")
  ) {
    myOutputValue =
      "The computer choose " +
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
      " <br> Winning Percentage = " +
      winPercentage;
  }
  return myOutputValue;
};
var main = function (input) {
  var comResult = randomNumber();
  var userInput = keyInData(input);
  var outComResult = outResult(comResult);

  var name = input;
  if (noOfGame == 0) {
    nickName = name;
    noOfGame += 1;
    var startOfGame =
      "Welcome to the game<br> " +
      name +
      "<br>let start the game<br> Please Key in 'scissors','paper' or 'stone'";
    return startOfGame;
  }
  noOfGame += 1;
  var finalResult = result(input, outComResult, userInput, comResult);
  return finalResult;
};

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
var keyInData = function (input1) {
  if (input1 == "scissors" || input1 == "reversed scissors") {
    return "scissors ✂️";
  }
  if (input1 == "paper" || input1 == "reversed paper") {
    return "paper 🖐";
  }
  if (input1 == "stone" || input1 == "reversed stone") {
    return "stone 🥌";
  }
};
