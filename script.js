var computerWins = 0;
var userWins = 0;
//keeps track of total number of games played
var gameCount = 0;

var main = function (input) {
  //generate choice
  var computerChoice = generateRandomOption();
  //console.log(computerChoice);
  //assign number to computer's play
  //computerScissors = 0;
  //computerPaper = 1;
  //computerStone = 2;
  var computersPlay = assignComputerChoice(computerChoice);
  //console.log(computersPlay);
  gameCount += 1;

  //player wins, add to userWins count
  if ((input == `scissors` && computersPlay == `paper`) || (input == `paper` && computersPlay == `stone`) || (input == `stone` && computersPlay == `scissors`)) {
    userWins += 1;
    var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
    return `You win! <br><br>You chose ${input} and the computer played ${computersPlay}. <br><br>You won ${userWins} times and the computer won ${computerWins} times. You win ${winPercentage} of the game you've played!`;
  }

  //player loses, add to computerWins count
  if ((input == `scissors` && computersPlay == `stone`) || (input == `paper` && computersPlay == `scissors`) || (input == `stone` && computersPlay == `paper`)) {
    computerWins += 1;
    var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
    return `You lost :( <br><br>You chose ${input} and the computer played ${computersPlay}. <br><br>You won ${userWins} times and the computer won ${computerWins} times. You win ${winPercentage} of the game you've played!`;
  }

  //tie
  if (input == computersPlay) {
    var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
    return `It's a tie! <br><br>You chose ${input} and the computer played ${computersPlay} <br><br>You won ${userWins} times and the computer won ${computerWins} times. You win ${winPercentage} of the game you've played!`;
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

//function to calculate percentage of wins
var calculatePercentageOfUserWins = function (userWins, gameCount) {
  var winPercentage = (userWins / gameCount) * 100;
  //console.log(`winPercentage`);
  //console.log(winPercentage);
  return `${Math.round(winPercentage)}%`;
};
