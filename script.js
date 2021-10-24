var currentGameMode = "awaiting username";
var username = "";
var userwins = 0;
var systemwins = 0;

var main = function (input) {
  var lowercaseinput = input.toLowerCase(input);

  var myOutputValue = "";

  // let's define the game modes
  if (currentGameMode == "awaiting username") {
    username = input;
    currentGameMode = "spsgame";
    myOutputValue =
      "Welcome to the game, " +
      username +
      "." +
      "<br>" +
      "Start by choosing 'scissors', 'paper' or 'stone'.";
  } else if (currentGameMode == "spsgame") {
    // start game
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
    // lets define how system can win
    if (
      (lowercaseinput == "scissors" && systemobject == "stone") ||
      (lowercaseinput == "paper" && systemobject == "scissors") ||
      (lowercaseinput == "stone" && systemobject == "paper")
    ) {
      systemwins = systemwins + 1;
      myOutputValue =
        "Ops, you lost " +
        username +
        " ." +
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
        "Dang, you won " +
        username +
        "!" +
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
        "Ooo, you read my mind " +
        username +
        " ." +
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
      lowercaseinput != "scissors" &&
      lowercaseinput != "paper" &&
      lowercaseinput != "stone"
    ) {
      myOutputValue =
        "Huh? I didn't get that. You're supposed to choose either 'scissors', 'paper' or 'stone'. Let's try again!";
    }

    if (input == "word game") {
      currentGameMode = "wordgame";
      myOutputValue = "Let's play the secret word game!";
    }
  } else if ((currentGameMode = "wordgame")) {
    var guessoutcome = playsecretword(input);
    //console.log("definition of function: " + playsecretword);
    //console.log("execution of function: " + playsecretword(input));
    myOutputValue = guessoutcome;
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

var playsecretword = function (input) {
  var lowercase = input.toLowerCase(input);
  var myOutputValue = "Ops, thats not the secret word";
  if (lowercase == "papaya") {
    myOutputValue = "Yay! You guessed the secret word!";
  }
  return myOutputValue;
};
