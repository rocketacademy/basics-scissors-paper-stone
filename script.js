var main = function (input) {
  if (
    input == "scissors" ||
    input == "stone" ||
    input == "paper" ||
    input == "Scissors" ||
    input == "Stone" ||
    input == "Paper"
  ) {
    var myOutputValue = playGame(input);
    return myOutputValue;
  } else if (input == null) {
    alert("Please enter a valid value");
  } else {
    alert("Please enter a valid value");
  }
};
var getRandomInteger = function () {
  // Generate a decimal from 0 through max + 1.
  // This decimal will be inclusive of 0 and exclusive of max + 1.
  var randomDecimal = Math.random() * (2 + 1);

  // Remove the decimal with the floor operation.
  // The resulting integer will be from 0 through max, inclusive of 0 and max.
  var resultInteger = Math.floor(randomDecimal);

  return resultInteger;
};

var randomIntegerToItem = function (input) {
  if (input == 0) {
    var randomItem = "Scissors";
  } else if (input == 1) {
    var randomItem = "Paper";
  } else if (input == 2) {
    var randomItem = "Stone";
  }
  return randomItem;
};

var playGame = function (itemChosen) {
  // get randomItem
  var randomItem = getRandomInteger();
  console.log(randomIntegerToItem(randomItem));
  var chosenItem = reverseItems(itemChosen);
  if (randomItem == chosenItem) {
    console.log(randomItem);
    var myOutputValue =
      "This is a classic draw. You chose " +
      itemChosen +
      " and the computer chose " +
      randomIntegerToItem(randomItem);
  } else if (
    (randomItem == 2 && chosenItem == 1) ||
    (randomItem == 1 && chosenItem == 0) ||
    (randomItem == 0 && chosenItem == 2)
  ) {
    myOutputValue =
      "You Win! You chose " +
      itemChosen +
      " and the computer chose " +
      randomIntegerToItem(randomItem);
  } else if (
    (randomItem == 1 && chosenItem == 2) ||
    (randomItem == 0 && chosenItem == 1) ||
    (randomItem == 2 && chosenItem == 0)
  ) {
    myOutputValue =
      "You Lose! You chose " +
      itemChosen +
      "and the computer chose " +
      randomIntegerToItem(randomItem);
  } else {
    myOutputValue = "Invalid!";
  }
  return myOutputValue;
};

var reverseItems = function (itemchosen) {
  if (itemchosen == "Scissors" || itemchosen == "scissors") {
    var itemChosenInteger = 0;
  } else if (itemchosen == "Paper" || itemchosen == "paper") {
    var itemChosenInteger = 1;
  } else if (itemchosen == "Stone" || itemchosen == "stone") {
    var itemChosenInteger = 2;
  }

  return itemChosenInteger;
};
