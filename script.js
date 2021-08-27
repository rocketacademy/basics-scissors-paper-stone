var main = function (input) {
  //generate choice
  var computerChoice = generateRandomOption();
  console.log(computerChoice);
  //assign number to computer's play
  //computerScissors = 0;
  //computerPaper = 1;
  //computerStone = 2;
  var computersPlay = assignComputerChoice(computerChoice);
  console.log(computersPlay);

  //player wins
  if ((input == `scissors` && computersPlay == `paper`) || (input == `paper` && computersPlay == `stone`) || (input == `stone` && computersPlay == `scissors`)) {
    return `You win! You chose ${input} and the computer played ${computersPlay}.`;
  }

  //player loses
  if ((input == `scissors` && computersPlay == `stone`) || (input == `paper` && computersPlay == `scissors`) || (input == `stone` && computersPlay == `paper`)) {
    return `You lost :( You chose ${input} and the computer played ${computersPlay}.`;
  }

  //tie
  if (input == computersPlay) {
    return `It's a tie! You chose ${input} and the computer played ${computersPlay}.`;
  }

  //player does not input scissors, paper or stone
  else {
    return `Please type in scissors, paper or stone to play game :)`;
  }
};

//generate random number 0 to 2, to be assigned to scissors, paper and stone
var generateRandomOption = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  return randomInteger;
};

//helper function to assign name to computer's choice
var assignComputerChoice = function (computerChoice) {
  if (computerChoice == 0) return `scissors`;
  if (computerChoice == 1) return `paper`;
  if (computerChoice == 2) return `stone`;
};
