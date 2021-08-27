var main = function (input) {
  var progsChoice = rollDice();
  if (progsChoice == 1) {
    progsChoice = "Scissors";
  }
  if (progsChoice == 2) {
    progsChoice = "Paper";
  }
  if (progsChoice == 3) {
    progsChoice = "Stone";
  }
  console.log(progsChoice);
  var myOutputValue = "hello world";
  return myOutputValue;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
