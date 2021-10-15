var main = function (input) {
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
  if (input == option) {
    var myOutputValue = `It's a draw! You rolled ${input} and the computer rolled ${option}.`;
    return myOutputValue;
  }
  // User wins
  if (
    (input == "scissors" && option == "paper") ||
    (input == "stone" && option == "scissors") ||
    (input == "paper" && option == "stone")
  ) {
    var myOutputValue = `You WIN! You rolled ${input} and the computer rolled ${option}.`;
    return myOutputValue;
  }

  // User lose
  if (
    (option == "scissors" && input == "paper") ||
    (option == "stone" && input == "scissors") ||
    (option == "paper" && input == "stone")
  ) {
    var myOutputValue = `You LOSE! You rolled ${input} and the computer rolled ${option}.`;
    return myOutputValue;
  }

  var myOutputValue = "Please enter either scissors, paper or stone.";
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
