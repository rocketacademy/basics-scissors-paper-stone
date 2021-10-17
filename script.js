var main = function (input) {
  var randomSPS = random();
  var myOutputValue = "";

  //input validation
  if (
    input !== "scissors" ||
    input !== "paper" ||
    input !== "stone" ||
    input !== "reversed scissors" ||
    input !== "reversed paper" ||
    input !== "reversed stone"
  ) {
    myOutputValue =
      "Try again. Please enter either 'scissors', 'paper', or 'stone'";
  }

  //assign randomly generated integer to either SPS value
  if (randomSPS == 1) {
    randomSPS = "scissors";
  }

  if (randomSPS == 2) {
    randomSPS = "paper";
  }

  if (randomSPS == 3) {
    randomSPS = "stone";
  }

  console.log(randomSPS);

  //DRAW
  if (input == randomSPS) {
    myOutputValue = `The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      It's a draw.<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  //WIN
  if (
    (input == "scissors" && randomSPS == "paper") ||
    (input == "paper" && randomSPS == "stone") ||
    (input == "stone" && randomSPS == "scissors")
  ) {
    myOutputValue = `The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      You win! Congrats!<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  //LOSE
  if (
    (randomSPS == "scissors" && input == "paper") ||
    (randomSPS == "paper" && input == "stone") ||
    (randomSPS == "stone" && input == "scissors")
  ) {
    myOutputValue = `The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      You lose! Bummer.<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  //REVERSED WIN
  if (
    (randomSPS == "scissors" && input == "reversed paper") ||
    (randomSPS == "paper" && input == "reversed stone") ||
    (randomSPS == "stone" && input == "reversed scissors")
  ) {
    myOutputValue = `REVERSE! <br>
      The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      You win! Congrats!<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  //REVERSED LOSE
  if (
    (input == "reversed scissors" && randomSPS == "paper") ||
    (input == "reversed paper" && randomSPS == "stone") ||
    (input == "reversed stone" && randomSPS == "scissors")
  ) {
    myOutputValue = `REVERSE! <br>
      The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      You lose! Bummer.<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  return myOutputValue;
};

var random = function () {
  // Generate a decimal from 0 through 3. inclusive of 0 and exclusive of 3
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 1 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal) + 1;

  return randomInteger;
};
