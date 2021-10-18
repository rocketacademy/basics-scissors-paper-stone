var userwins = 0;
var systemwins = 0;

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

  var myOutputValue = "";

  // lets define how system can win
  if (
    (lowercaseinput == "scissors" && systemobject == "stone") ||
    (lowercaseinput == "paper" && systemobject == "scissors") ||
    (lowercaseinput == "stone" && systemobject == "paper")
  ) {
    systemwins = systemwins + 1;
    myOutputValue =
      "Ops, you lost. " +
      "<br>" +
      "My " +
      systemobject +
      " beats your " +
      lowercaseinput +
      "!" +
      "<br>" +
      " Your score: " +
      userwins +
      " | My score: " +
      systemwins;
  }

  // lets define how a user can win
  if (
    (lowercaseinput == "scissors" && systemobject == "paper") ||
    (lowercaseinput == "paper" && systemobject == "stone") ||
    (lowercaseinput == "stone" && systemobject == "scissors")
  ) {
    userwins = userwins + 1;
    myOutputValue =
      "Dang, you won!" +
      "<br>" +
      "Your " +
      lowercaseinput +
      " beats my " +
      systemobject +
      "!" +
      "<br>" +
      "Your score: " +
      userwins +
      " | My score: " +
      systemwins;
  }

  // lets define a draw
  if (lowercaseinput == systemobject) {
    myOutputValue =
      "Ooo, you read my mind." +
      "<br>" +
      "I chose " +
      systemobject +
      " too. It's a draw!" +
      "<br>" +
      "Your score: " +
      userwins +
      " | My score: " +
      systemwins;
  }

  // lets add input validation
  if (
    lowercaseinput != "scissors" ||
    lowercaseinput != "paper" ||
    lowercaseinput != "stone"
  ) {
    myOutputValue =
      "Huh? I didn't get that. You're supposed to choose either 'scissors', 'paper' or 'stone'. Let's try again!";
  }

  return myOutputValue;
};

// lets generate three random numbers
var chooseobject = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;

  return randomNumber;
};
