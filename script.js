//RANDOMIZE COM SELECTION OF 123
var getNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var number123 = randomInteger + 1;

  console.log("RANDOM 1-3 FUNCTION WORKS");
  console.log(number123);

  return number123;
};

//PEG THE RANDOM 123 TO GET COM CHOICE OF SPS
var pegNumToSps = function () {
  var comNum = getNumber();

  if (comNum == 1) {
    return "scissors";
  }
  if (comNum == 2) {
    return "paper";
  }
  if (comNum == 3) {
    return "stone";
  }
};

var main = function (userAnswer) {
  console.log("WHAT IS USER CHOICE?");
  console.log(userAnswer);

  var comSps = pegNumToSps();

  console.log("WHAT IS COMPUTER CHOICE?");
  console.log(comSps);

  //CASE OF INVALID INPUT
  if (
    userAnswer != "paper" ||
    userAnswer != "scissors" ||
    userAnswer != "stone"
  ) {
    outputValue =
      "Please only key in 'scissors', 'paper' or 'stone' (case sensitive)!";
  }

  //CASE OF A DRAW
  if (userAnswer == comSps) {
    return `It was a draw!<br>We both picked ${comSps}!`;
  }
  //USER CHOSE SCISSORS
  if (userAnswer == "scissors" && comSps == "stone") {
    outputValue = "You lose!<br>Your scissors lost to my stone!";
  }
  if (userAnswer == "scissors" && comSps == "paper") {
    outputValue = "You win!<br>Your scissors won my paper!";
  }
  //USER CHOSE STONE
  if (userAnswer == "stone" && comSps == "paper") {
    outputValue = "You lose! Your stone lost to my paper!";
  }
  if (userAnswer == "stone" && comSps == "scissors") {
    outputValue = "You win! Your stone won my scissors!";
  }
  //USER CHOSE PAPER
  if (userAnswer == "paper" && comSps == "scissors") {
    outputValue = "You lose! Your paper lost to my scissors!";
  }
  if (userAnswer == "paper" && comSps == "stone") {
    outputValue = "You win! Your paper won my stone!";
  }

  return outputValue;
};
