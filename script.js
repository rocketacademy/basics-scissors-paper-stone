var computerWins = 0;
var userWins = 0;
//keeps track of total number of games played
var gameCount = 0;
//stores username
var userName = `0`;
var myOutputValue = ``;
//current game mode
var gameMode = `waiting for userName`;

var main = function (input) {
  if (gameMode == `waiting for userName`) {
    userName = input;
    //console.log(userName);
    gameMode = `spsGame`;
    //console.log(gameMode);
    myOutputValue = `Hi ${userName}, input scissors, paper or stone to play the game!`;
  } else if (gameMode == `spsGame`) {
    //console.log(input);
    //generate choice
    var computerChoice = generateRandomOption();
    //console.log(`computerChoice`);
    //console.log(computerChoice);
    //assign number to computer's play; computerScissors = 0; computerPaper = 1; computerStone = 2;
    var computersPlay = assignComputerChoice(computerChoice);
    //console.log(`computersPlay`);
    //console.log(computersPlay);

    //player wins, add to userWins count
    if ((input == `scissors` && computersPlay == `paper`) || (input == `paper` && computersPlay == `stone`) || (input == `stone` && computersPlay == `scissors`)) {
      userWins += 1;
      gameCount += 1;
      var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
      myOutputValue = `Yay ${userName}, You win! <br><br>You chose ${input} and the computer played ${computersPlay}. <br><br>You won ${userWins} times and the computer won ${computerWins} times. ${winPercentage}`;
    }

    //player loses, add to computerWins count
    else if ((input == `scissors` && computersPlay == `stone`) || (input == `paper` && computersPlay == `scissors`) || (input == `stone` && computersPlay == `paper`)) {
      computerWins += 1;
      gameCount += 1;
      var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
      myOutputValue = `Aww ${userName}, You lost :( <br><br>You chose ${input} and the computer played ${computersPlay}. <br><br>You won ${userWins} times and the computer won ${computerWins} times. ${winPercentage}`;
    }

    //tie
    else if (input == computersPlay) {
      gameCount += 1;
      var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
      myOutputValue = `${userName}, It's a tie! <br><br>You chose ${input} and the computer played ${computersPlay} <br><br>You won ${userWins} times and the computer won ${computerWins} times. ${winPercentage}`;
    }

    //player does not input scissors, paper or stone
    else {
      myOutputValue = `Please type in scissors, paper or stone to play :)`;
    }
  }
  return myOutputValue;
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
  var winPercentage = Math.round((userWins / gameCount) * 100);
  //console.log(`winPercentage`);
  //console.log(winPercentage);
  if (winPercentage < 60) {
    return `You have won ${userWins} of ${gameCount} you played - winning ${winPercentage}% of games. Don't give up!`;
  }
  if (winPercentage >= 60) {
    return `You have won ${userWins} of ${gameCount} you played - winning ${winPercentage}% of games. Awesome job, game master!`;
  }
};
