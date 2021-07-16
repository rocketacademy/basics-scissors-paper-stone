//Generate number
var generateRandomSPS = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal);
  var SPSNumber = randomNumber + 1;
  //Link number to scissors/paper/stone
  if (SPSNumber == 1) {
    return `Scissors`;
  }
  if (SPSNumber == 2) {
    return `Paper`;
  }
  if (SPSNumber == 3) {
    return `Stone`;
  }
};
//check if input == generated number
var main = function (input) {
  //Unecessay code?
  //if ((input != `Scissors` || `Paper` || `Stone`)) {
  //myOutputValue = `Please enter either "Scissors", "Paper" or "Stone". Please Try again. `;
  //return myOutputValue;
  //}

  // if input not equals to SPS, return message suggesting SPS and ask to try again
  if (input != `Scissors` && input != `Stone` && input != `Paper`) {
    myOutputValue = `Please enter either "Scissors", "Paper" or "Stone". Please Try again.`;
  }
  if (input == generateRandomSPS()) {
    myOutputValue = `Oops, its a draw.`;
    return myOutputValue;
  }
  //if input is scissors, beat paper and lose stone
  if (input == `Scissors` && generateRandomSPS() == `Paper`) {
    myOutputValue = `Congratulations, you won.`;
    return myOutputValue;
  }
  if (input == `Scissors` && generateRandomSPS() == `Stone`) {
    myOutputValue = `Unfortunately, you lost.`;
    return myOutputValue;
  }
  //if input is Paper
  if (input == `Paper` && generateRandomSPS() == `Stone`) {
    myOutputValue = `Congratulations, you won.`;
    return myOutputValue;
  }
  if (input == `Paper` && generateRandomSPS() == `Scissors`) {
    myOutputValue = `Unfortunately, you lost.`;
    return myOutputValue;
  }
  //if input is Stone
  if (input == `Stone` && generateRandomSPS() == `Scissors`) {
    myOutputValue = `Congratulations, you won.`;
    return myOutputValue;
  }
  if (input == `Stone` && generateRandomSPS() == `Paper`) {
    myOutputValue = `Unfortunately, you lost.`;
    return myOutputValue;
  }
  return myOutputValue;
};
