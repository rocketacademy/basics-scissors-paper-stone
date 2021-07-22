//Program randomly choose scissors, paper or stone
var myArray = [
  "Scissors",
  "Paper",
  "Stone",
  "Reversed Scissors",
  "Reversed Paper",
  "Reversed Stone",
];

var randomItem = function () {
  var randomObject = myArray[Math.floor(Math.random() * myArray.length)];
  return randomObject;
};

var sps = function (userInput) {
  var programmeInput = randomItem();
  var instructionsOnceGameCompletes =
    'Now you can type "scissors" "paper" or "stone" to play another round!';

  //scoring system
  var scoreUser = 0;
  var scoreProgramme = 0;
  var draw = 0;

  //user won
  if (
    (userInput == "Scissors" && programmeInput == "Paper") ||
    (userInput == "Stone" && programmeInput == "Scissors") ||
    (userInput == "Paper" && programmeInput == "Stone") ||
    (userInput == "Reversed Scissors" && programmeInpupt == "Reversed Stone") ||
    (userInput == "Reversed Paper" && programmeInput == "Reversed Scissors") ||
    (userInput == "Reversed Stone" && programmeInput == "Reversed Paper")
  ) {
    scoreUser = scoreUser + 1;
    return (
      "you won! you chose " +
      userInput +
      ". " +
      "<br><br>" +
      "The programme chose " +
      programmeInput +
      "." +
      "<br><br>" +
      "your score = " +
      scoreUser +
      "<br><br>" +
      "programme has scored = " +
      scoreProgramme +
      "<br><br>" +
      "Both User and Programme draw =" +
      draw +
      "<br><br>" +
      instructionsOnceGameCompletes
    );
  }

  //program won
  else if (
    (userInput == "Paper" && programmeInput == "Scissors") ||
    (userInput == "Scissors" && programmeInput == "Stone") ||
    (userInput == "Stone" && programmeInput == "Paper") ||
    (userInput == "Reversed Stone" && programmeInpupt == "Reversed Scissors") ||
    (userInput == "Reversed Scissors" && programmeInput == "Reversed Paper") ||
    (userInput == "Reversed Paper" && programmeInput == "Reversed Stone")
  ) {
    scoreProgramme = scoreProgramme + 1;
    return (
      "you lose! " +
      "<br><br>" +
      "Bummer! " +
      "<br><br>" +
      "you chose " +
      userInput +
      ". " +
      "<br><br>" +
      "The computer chose " +
      programmeInput +
      "." +
      "<br><br>" +
      "your score = " +
      scoreUser +
      "<br><br>" +
      "programme has scored = " +
      scoreProgramme +
      "<br><br>" +
      "Both User and Programme draw =" +
      draw +
      "<br><br>" +
      instructionsOnceGameCompletes
    );
  }

  //draw - user and programme same input
  else {
    draw = draw + 1;
    return (
      "it's a draw." +
      "<br><br>" +
      "you chose " +
      userInput +
      ". " +
      "<br><br>" +
      "The computer chose " +
      programmeInput +
      "." +
      "<br><br>" +
      "your score = " +
      scoreUser +
      "<br><br>" +
      "programme has scored = " +
      scoreProgramme +
      "<br><br>" +
      "Both User and Programme draw =" +
      draw +
      "<br><br>" +
      instructionsOnceGameCompletes
    );
  }
};

var main = function (input) {
  if (
    input != "Scissors" &&
    input != "Paper" &&
    input != "Stone" &&
    input != "Reversed Scissors" &&
    input != "Reversed Paper" &&
    input != "Reversed Stone"
  ) {
    var myOutputValue =
      "Please choose the 3 valid input options which are Scissors, Paper or Stone";
    return myOutputValue;
  } else {
    return sps(input);
  }
};
