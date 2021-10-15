var main = function (input) {
  var lowercaseinput = input.toLowerCase(input);

  var number = chooseobject();

  // lets assign an object to each number generated
  var systemobject = "";

  if (number == 1) {
    systemobject = "scissors";
  }
  if (number == 2) {
    systemobject = "paper";
  }
  if (number == 3) {
    systemobject = "stone";
  }

  // lets define the default output
  var myOutputValue =
    "Ops, you lost. " +
    lowercaseinput +
    " doesn't beat my " +
    systemobject +
    "!";

  // lets define how a user can win
  if (
    (lowercaseinput == "reversed scissors" && systemobject == "stone") ||
    (lowercaseinput == "reversed paper" && systemobject == "scissors") ||
    (lowercaseinput == "reversed stone" && systemobject == "paper")
  ) {
    myOutputValue =
      "Dang, you won! Your " +
      lowercaseinput +
      " beat my " +
      systemobject +
      "!";
  }

  // lets define a draw
  if (lowercaseinput == systemobject) {
    myOutputValue =
      "Ooo, you read my mind. I chose " + systemobject + " too. It's a draw!";
  }

  return myOutputValue;
};

// lets generate three random numbers
var chooseobject = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.ceil(randomDecimal);

  return randomNumber;
};
