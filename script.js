var main = function (input) {
  var randomSPS = random();

  var myOutputValue = "Please enter either 'scissors', 'paper', or 'stone'";

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

  if (input == randomSPS) {
    myOutputValue = `It's a draw! Your choice is ${input}, program's choice was ${randomSPS}`;
  }
  if (
    (input == "scissors" && randomSPS == "paper") ||
    (input == "paper" && randomSPS == "stone") ||
    (input == "stone" && randomSPS == "scissors")
  ) {
    myOutputValue = `You win! Your choice is ${input}, program's choice was ${randomSPS}`;
  }

  if (
    (randomSPS == "scissors" && input == "paper") ||
    (randomSPS == "paper" && input == "stone") ||
    (randomSPS == "stone" && input == "scissors")
  ) {
    myOutputValue = `You lose! Your choice is ${input}, program's choice was ${randomSPS}`;
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
