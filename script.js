// Generate random integer limited to 3 different digits
var generateInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  console.log(`random integer ${randomInteger}`);
  return randomInteger;
};

//Assign random numbers to scissors/paper/stone choices
var assignChoice = function (randomInteger) {
  if (randomInteger == 0) {
    programChoice = `scissors ✂️`;
  }
  if (randomInteger == 1) {
    programChoice = `paper 🗒`;
  }
  if (randomInteger == 2) {
    programChoice = `stone 🗿`;
  }
  console.log(`program choice is ${programChoice}`);
  return programChoice;
};

//Add emojis
var addEmoji = function (input) {
  var renamedInput = input;

  if (input == `scissors`) {
    renamedInput = `scissors ✂️`;
  }
  if (input == `paper`) {
    renamedInput = `paper 🗒`;
  }
  if (input == `stone`) {
    renamedInput = `stone 🗿`;
  }
  console.log(`renamed input is ${renamedInput}`);
  return renamedInput;
};

//=========Standard SPS Game ============
//Output win or lose based on SPS game
// var main = function (input) {
//   var renamedInput = addEmoji(input);
//   var programChoice = assignChoice(generateInteger);
//   var myOutputValue = `Please type 'scissors', 'paper' or 'stone' to play the game with me 😊.`;

//   if (
//     (programChoice == `scissors ✂️` && input == `paper`) ||
//     (programChoice == `paper 🗒` && input == `stone`) ||
//     (programChoice == `stone 🗿` && input == `scissors`)
//   ) {
//     myOutputValue = `You lost! <br> I chose ${programChoice} and you chose ${renamedInput}. <br> Better luck next time!`;
//   }
//   if (
//     (programChoice == `scissors ✂️` && input == `stone`) ||
//     (programChoice == `stone 🗿` && input == `paper`) ||
//     (programChoice == `paper 🗒` && input == `scissors`)
//   ) {
//     myOutputValue = `You won! <br> I chose ${programChoice} and you chose ${renamedInput}. <br> Congratulations 🎉!!`;
//   }
//   if (programChoice == renamedInput) {
//     myOutputValue = `It's a draw! <br> We both chose ${programChoice}! 🙌`;
//   }
//   return myOutputValue;
// };

//=========Reverse SPS Game ============
//Did player lose in a reversed SPS game
var didPlayerLoseReversed = function (programChoice, renamedInput) {
  var lostSpsReversed =
    !(
      (programChoice == `scissors ✂️` && renamedInput == `paper 🗒`) ||
      (programChoice == `paper 🗒` && renamedInput == `stone 🗿`) ||
      (programChoice == `stone 🗿` && renamedInput == `scissors ✂️`)
    ) && !(programChoice == renamedInput);
  console.log(`Player lost reversed SPS game ${lostSpsReversed}`);
  return lostSpsReversed;
};

//Did player win in a reversed SPS game
var didPlayerWinReversed = function (programChoice, renamedInput) {
  var wonSpsReversed =
    !(
      (programChoice == `scissors ✂️` && renamedInput == `stone 🗿`) ||
      (programChoice == `stone 🗿` && renamedInput == `paper 🗒`) ||
      (programChoice == `paper 🗒` && renamedInput == `scissors ✂️`)
    ) && !(programChoice == renamedInput);
  console.log(`Player won reversed SPS game ${wonSpsReversed}`);
  return wonSpsReversed;
};

//Output win or lose for reversed SPS game
var main = function (input) {
  var renamedInput = addEmoji(input);
  var programChoice = assignChoice(generateInteger());
  var myOutputValue = `Please type 'scissors', 'paper' or 'stone' to play the game with me 😊.`;

  if (didPlayerLoseReversed(programChoice, renamedInput) == true) {
    myOutputValue = `You lost! <br> <br> This is the reverse SPS game. <br> I chose ${programChoice}... <br> and unfortunately ${renamedInput} does not beat ${programChoice}in this game! 😝`;
  }
  if (didPlayerWinReversed(programChoice, renamedInput) == true) {
    myOutputValue = `Unbelievable... you won! <br> <br> You successfully reversed the outcome! <br> I chose ${programChoice} and did not see your ${renamedInput} coming! <br> You totally deserve this win!`;
  }
  if (programChoice == renamedInput) {
    myOutputValue = `It's a draw! <br> <br> We both chose ${programChoice}! <br> 🙌`;
  }
  return myOutputValue;
};
