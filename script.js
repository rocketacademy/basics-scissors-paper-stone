var randomChoice = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal);
  var choiceNumber = randomNumber + 1;
  return choiceNumber;
};

var main = function (input) {
  // input = scissors, paper or stone
  // output = user won, program won or it's a draw

  var choiceNumber = randomChoice();
  console.log(choiceNumber);

  var myOutputValue = "It's a draw!";

  if (input == "Scissors") inputNumber = 1;

  if (input == "Paper") inputNumber = 2;

  if (input == "Stone") inputNumber = 3;

  if (choiceNumber == 1) choice = "Scissors";

  if (choiceNumber == 2) choice = "Paper";

  if (choiceNumber == 3) choice = "Stone";

  // scenarios when player loses to program
  if (
    (inputNumber == 1 && choiceNumber == 3) ||
    (inputNumber == 2 && choiceNumber == 1) ||
    (inputNumber == 3 && choiceNumber == 2)
  ) {
    myOutputValue =
      "Wrong! The computer chose " +
      choice +
      " <br> You chose " +
      input +
      " <br> You lose! Bummer. <br> Now you can type 'Scissors' 'Paper' or 'Stone' to play another round!";
  }

  // scenarios when player wins program
  if (
    (inputNumber == 1 && choiceNumber == 2) ||
    (inputNumber == 2 && choiceNumber == 3) ||
    (inputNumber == 3 && choiceNumber == 1)
  ) {
    myOutputValue = "You Win!";
  }

  return myOutputValue;
};
