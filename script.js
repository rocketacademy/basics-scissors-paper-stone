var main = function (input) {
  var comResult = randomNumber();
  var userInput = keyInData(input);
  var outComResult = outResult(comResult);

  console.log("userInput");
  console.log(keyInData(input));
  //invalid input
  var myOutputValue =
    "Not available.<br>Please key in 'scissors','paper' or 'stone' ✂️🖐🥌.<br> Please key in 'reversed' to reverse the rule. e.g 'reversed stone'<br>please try again😕";
  //result with valid input
  if (input == comResult) {
    myOutputValue =
      "The computer choose " +
      outComResult +
      "<br> You choose " +
      userInput +
      " <br>It's a draw😲";
  }
  if (
    (input == "scissors" && comResult == "paper") ||
    (input == "paper" && comResult == "stone") ||
    (input == "stone" && comResult == "scissors") ||
    (input == "reversed paper" && comResult == "scissors") ||
    (input == "reversed stone" && comResult == "paper") ||
    (input == "reversed scissors" && comResult == "stone")
  ) {
    myOutputValue =
      "The computer choose " +
      outComResult +
      "<br> You choose " +
      userInput +
      "<br>You Win😎";
  }
  if (
    (input == "paper" && comResult == "scissors") ||
    (input == "stone" && comResult == "paper") ||
    (input == "scissors" && comResult == "stone") ||
    (input == "reversed scissors" && comResult == "paper") ||
    (input == "reversed paper" && comResult == "stone") ||
    (input == "reversed stone" && comResult == "scissors")
  ) {
    myOutputValue =
      "The computer choose " +
      outComResult +
      "<br> You choose " +
      userInput +
      "<br>You lose😭";
  }
  return myOutputValue;
};
//random number generate
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
