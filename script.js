//scissors paper stone
var main = function (input) {
  var userInput = input;
  var SPS1 = generateNumber();
  var SPS2 = generateNumber();
  var SPS3 = generateNumber();
  console.log("SPS");
  var myOutputValue = "Please input either Scissors Paper or stone";
  if (userInput == "Scissors" && input == SPS1)
    myOutputValue =
      "fair game" + "you input" + input + "computer guess" + userInput;
  //   (SPS == 2 && userInput == "Paper") ||
  //   (SPS == 3 && userInput == "Stone")
  // ) {
  console.log("here");

  return myOutputValue;
};
var generateNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};
