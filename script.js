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
    gameMode = `waiting for gameMode`;
    myOutputValue = `Hi ${userName}, please input "reverse" or "regGame" to select game mode!`;
  }

  //wait for game mode selection. If input = reverse, switch to reverse game. If input = regGame, switch to regular game
  else if (gameMode == `waiting for gameMode`) {
    if (input == `reverse`) {
      gameMode = `reverse`;
      myOutputValue = `You are now in ${gameMode} game mode!`;
    } else if (input == `regGame`) {
      gameMode = `regGame`;
      myOutputValue = `You are now in ${gameMode} game mode!`;
    } else {
      myOutputValue = `Please input reverse or regGame to start!`;
    }
    console.log(gameMode);
    console.log(myOutputValue);
  }

  //reverse game code
  else if (gameMode == `reverse`) {
    //generate choice
    var computerChoice = generateRandomOption();
    //assign number to computer's play; computerScissors = 0; computerPaper = 1; computerStone = 2;
    var computersPlay = assignComputerChoice(computerChoice);

    //tie
    if (input == computersPlay) {
      gameCount += 1;
      var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
      myOutputValue = `Reverse game: Hey ${userName}, it's a tie! <br><br>You chose ${input} and the computer played ${computersPlay} <br><br>You won ${userWins} times and the computer won ${computerWins} times. ${winPercentage}`;
    }

    //losing message for reverse game
    else if ((input == `scissors` && computersPlay == `paper`) || (input == `paper` && computersPlay == `stone`) || (input == `stone` && computersPlay == `scissors`)) {
      var myOutputValue = `Reverse game: ${regGameModeWin(input, computersPlay)}`;
      console.log(myOutputValue);
    }

    //winning message for reverse game
    else if ((input == `scissors` && computersPlay == `stone`) || (input == `paper` && computersPlay == `scissors`) || (input == `stone` && computersPlay == `paper`)) {
      var myOutputValue = `Reverse game: ${regGameModeLose(input, computersPlay)}`;
      console.log(myOutputValue);
    }

    //input to switch mode to regular game
    else if (input == `regGame`) {
      gameMode = input;
      myOutputValue = `You are now in regular game mode!`;
      console.log(`gameMode`);
      console.log(gameMode);
    }

    //player does not input scissors, paper or stone
    else {
      myOutputValue = `Please type in scissors, paper or stone to play :)`;
    }
  } else if (gameMode == `regGame`) {
    //console.log(input);
    //generate choice
    var computerChoice = generateRandomOption();
    //assign number to computer's play; computerScissors = 0; computerPaper = 1; computerStone = 2;
    var computersPlay = assignComputerChoice(computerChoice);

    //if user does not switch to reverse game, continue with regular game
    //if player wins, run regular game mode win function
    if ((input == `scissors` && computersPlay == `paper`) || (input == `paper` && computersPlay == `stone`) || (input == `stone` && computersPlay == `scissors`)) {
      var myOutputValue = regGameModeWin(input, computersPlay);
    }

    //player loses, add to computerWins count
    else if ((input == `scissors` && computersPlay == `stone`) || (input == `paper` && computersPlay == `scissors`) || (input == `stone` && computersPlay == `paper`)) {
      var myOutputValue = regGameModeLose(input, computersPlay);
    }

    //tie
    else if (input == computersPlay) {
      gameCount += 1;
      var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
      myOutputValue = `${userName}, It's a tie! <br><br>You chose ${input} and the computer played ${computersPlay} <br><br>You won ${userWins} times and the computer won ${computerWins} times. ${winPercentage}`;
    }

    //switch to reverse game mode
    else if (input == `reverse`) {
      gameMode = `reverse`;
      myOutputValue = `You are now in reverse game mode!`;
      console.log(`gameMode`);
      console.log(gameMode);
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
    return `You win ${winPercentage}% of all games. Tough luck, but don't give up!`;
  }
  if (winPercentage >= 60) {
    return `You win ${winPercentage}% of all games. Awesome job, game master!`;
  }
};

//function for regGameMode win
var regGameModeWin = function (input, computersPlay) {
  userWins += 1;
  gameCount += 1;
  var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
  return `Yay ${userName}, you win! <br><br>You chose ${input} and the computer played ${computersPlay}. <br><br>You won ${userWins} times and the computer won ${computerWins} times. ${winPercentage}`;
};

//function for regGameMode lose
var regGameModeLose = function (input, computersPlay) {
  computerWins += 1;
  gameCount += 1;
  var winPercentage = calculatePercentageOfUserWins(userWins, gameCount);
  return `${userName}, you lost :( <br><br>You chose ${input} and the computer played ${computersPlay}. <br><br>You won ${userWins} times and the computer won ${computerWins} times. ${winPercentage}`;
};
