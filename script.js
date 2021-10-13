var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  console.log("randomInteger = " + randomInteger);
  if (randomInteger == 0) progInput = "Scissors";
  if (randomInteger == 1) progInput = "Paper";
  if (randomInteger == 2) progInput = "Stone";
  console.log("progam input = " + progInput);
  return progInput;
};

var main = function (input) {
  var progInput = generateRandomInteger();
  // default output
  var myOutputValue =
    "Error, please try again. Input options are 'Scissors', 'Paper' or 'Stone'";
  if (input == progInput)
    myOutputValue =
      "Its a draw!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Scissors" && progInput == "Paper")
    myOutputValue =
      "You Win!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Scissors" && progInput == "Stone")
    myOutputValue =
      "You Lose!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Paper" && progInput == "Scissors")
    myOutputValue =
      "You Lose!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Paper" && progInput == "Stone")
    myOutputValue =
      "You Win!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Stone" && progInput == "Scissors")
    myOutputValue =
      "You Win!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Stone" && progInput == "Paper")
    myOutputValue =
      "You Lose!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Reversed Stone" && progInput == "Paper")
    myOutputValue =
      "You Win!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Reversed Stone" && progInput == "Scissors")
    myOutputValue =
      "You Lose!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Reversed Stone" && progInput == "Stone")
    myOutputValue =
      "Its a draw!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Reversed Scissors" && progInput == "Paper")
    myOutputValue =
      "You Lose!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Reversed Scissors" && progInput == "Stone")
    myOutputValue =
      "You Win!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Reversed Scissors" && progInput == "Scissors")
    myOutputValue =
      "Its a draw!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Reversed Paper" && progInput == "Scissors")
    myOutputValue =
      "You Win!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Reversed Paper" && progInput == "Stone")
    myOutputValue =
      "You Lose!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;
  if (input == "Reversed Paper" && progInput == "Paper")
    myOutputValue =
      "Its a draw!, <br>you choose " +
      input +
      " <br>and program choose " +
      progInput;

  return myOutputValue;
};
