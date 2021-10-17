var countGameTurn = 0;
var countWinTurn = 0;

var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  console.log(`randomInteger =${randomInteger}`);
  return randomInteger;
};

var generateProgamInput = function () {
  var randomInteger = generateRandomInteger();
  if (randomInteger == 0) progInput = "Scissors";
  if (randomInteger == 1) progInput = "Paper";
  if (randomInteger == 2) progInput = "Stone";
  console.log(`progam input =${progInput}`);
  return progInput;
};

var generateWinLossRecord = function () {
  var record = countWinTurn / countGameTurn;
  console.log(`game record =${record}`);
  if (record >= 0.5) {
    return `Lucky!`;
  }
  if (record < 0.5) {
    return `Bummer!`;
  }
};

var main = function (input) {
  var progInput = generateProgamInput();
  console.log(`your input = ${input}`);
  // default output
  if (
    input != `Scissors` ||
    input != `Paper` ||
    input != `Stone` ||
    input != `Reverse Scissors` ||
    input != `Reverse Paper` ||
    input != `Reverse Stone`
  ) {
    myOutputValue = `Error, <br>Please try again. <br>Input options are 'Scissors', 'Paper', 'Stone', 'Reverse Scissors', 'Reverse Paper'or 'Reverse Stone'`;
  }
  // draw condition
  if (input == progInput || input == `Reverse ${progInput}`) {
    countGameTurn += 1;
    myOutputValue = `Draw game! <br>Computer chose: ${progInput}. <br>You chose ${input}. <br>You win ${countWinTurn}/${countGameTurn}. ${generateWinLossRecord()}. `;
  }
  // win condition
  if (
    (input == `Scissors` && progInput == `Paper`) ||
    (input == `Paper` && progInput == `Stone`) ||
    (input == `Stone` && progInput == `Scissors`) ||
    (input == `Reverse Scissors` && progInput == `Stone`) ||
    (input == `Reverse Paper` && progInput == `Scissors`) ||
    (input == `Reverse Stone` && progInput == `Paper`)
  ) {
    countGameTurn += 1;
    countWinTurn += 1;
    myOutputValue = `Win game! <br>Computer chose ${progInput}. <br>You chose ${input}. <br>You win ${countWinTurn}/${countGameTurn}. ${generateWinLossRecord()}. `;
  }
  // lose condition
  if (
    (input == `Scissors` && progInput == `Stone`) ||
    (input == `Paper` && progInput == `Scissors`) ||
    (input == `Stone` && progInput == `Paper`) ||
    (input == `Reverse Scissors` && progInput == `Paper`) ||
    (input == `Reverse Paper` && progInput == `Stone`) ||
    (input == `Reverse Stone` && progInput == `Scissors`)
  ) {
    countGameTurn += 1;
    myOutputValue = `Lose game! <br>Computer chose ${progInput}. <br>You chose ${input}. <br>You win ${countWinTurn}/${countGameTurn}. ${generateWinLossRecord()}. `;
  }
  console.log(`Total turns =${countGameTurn}`);
  console.log(`Total wins =${countWinTurn}`);

  return myOutputValue;
};
