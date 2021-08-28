// scissors Paper Stone - Basic
// user inputs scissor / paper / stone only

var main = function (input) {
  var computerResult = numberDefinition();
  var myOutputValue = `You lost!`;

  // rules
  // user must input either scissors/paper/stone
  if (input != `scissors` || input != `paper` || input != `stone`) {
    myOutputValue = `Invalid input. Please input either scissors, paper or stone only. Please try again.`;
  }

  if (input == computerResult) {
    myOutputValue = `It is a draw!`;
  }

  if (
    (input == `scissors` && computerResult == `paper`) ||
    (input == `paper` && computerResult == `stone`) ||
    (input == `stone` && computerResult == `scissors`)
  ) {
    myOutputValue = `Congratulations! You won!`;
  }

  if (
    (input == `scissors` && computerResult == `stone`) ||
    (input == `paper` && computerResult == `scissors`) ||
    (input == `stone` && computerResult == `paper`)
  ) {
    myOutputValue = `Sorry you lost!`;
  }

  return `${myOutputValue} You threw ${input} and the computer threw ${computerResult}.`;
};

// generate random number
var generateRandomNo = function () {
  var randomNo = Math.ceil(Math.random() * 3);
  return randomNo;
};

// define outcome
var numberDefinition = function (generatedinteger) {
  var computerAction = `Default`;
  var computerPick = generateRandomNo();

  if (computerPick == 1) {
    computerAction = `scissors`;
  }

  if (computerPick == 2) {
    computerAction = "paper";
  }

  if (computerPick == 3) {
    computerAction = `stone`;
  }

  return computerAction;
};
