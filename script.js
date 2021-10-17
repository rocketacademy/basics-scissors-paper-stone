var winCount = 0;
var numDraws = 0;
var lossCount = 0;
var currentMode = "waiting for user name";
var userName = "";
var myOutputValue = "";
var main = function (input) {
  if (currentMode == "waiting for user name") {
    // set the name of user
    userName = input;

    currentMode = "game mode";
    myOutputValue = `Your name is ${userName}.`;
    return myOutputValue;
  } else if (currentMode == "game mode") {
    var spsGenerator = spsOptions();
    console.log(spsGenerator);
    var option = "";

    //if computer rolls 1, it will show paper
    if (spsGenerator == 1) {
      option = "paper";
    }
    //if computer rolls 2, it will show scissors
    if (spsGenerator == 2) {
      option = "scissors";
    }
    //if computer rolls 3, it will show stone
    if (spsGenerator == 3) {
      option = "stone";
    }

    console.log(option);

    // DRAW
    if (input == option && currentMode) {
      var myOutputValue = `It's a draw ${userName}! <br><br> You rolled ${input} and the computer rolled ${option}.`;
      return myOutputValue;
    }
    // User wins
    if (
      (input == "scissors" && option == "paper") ||
      (input == "stone" && option == "scissors") ||
      (input == "paper" && option == "stone")
    ) {
      winCount = winCount + 1;
      numDraws = numDraws + 1;
      var myOutputValue = `You WIN ${userName}! <br><br> You rolled ${input} and the computer rolled ${option}. <br><br> The number of draws is ${numDraws} and your win - loss count is ${winCount} - ${lossCount}.`;
      console.log(`The win count is ${winCount}.`);
      return myOutputValue;
    }

    // User lose
    if (
      (option == "scissors" && input == "paper") ||
      (option == "stone" && input == "scissors") ||
      (option == "paper" && input == "stone")
    ) {
      numDraws = numDraws + 1;
      lossCount = lossCount + 1;
      console.log(`The loss count is ${lossCount}.`);
      var myOutputValue = `You LOSE ${userName}! <br><br> You rolled ${input} and the computer rolled ${option}. <br><br> The number of draws is ${numDraws} and your win - loss count is ${winCount} - ${lossCount}.`;
      return myOutputValue;
    }
    console.log(`The loss count is ${lossCount}.`);
    console.log(`The draw count is ${numDraws}.`);
  }
  var myOutputValue = ` ${userName} please enter either scissors, paper or stone.`;
  return myOutputValue;
};

var spsOptions = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 3 inclusive.
  var spsNumber = randomInteger + 1;

  return spsNumber;
};
