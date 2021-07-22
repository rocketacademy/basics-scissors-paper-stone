var computerHand = function () {
  // output a random integer from 1 to 3 such that each integer represent a different Hand
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.ceil(randomNumber);
  if (randomInteger == 1) {
    return `scissors`;
  }
  if (randomInteger == 2) {
    return `stone`;
  }
  if (randomInteger == 3) {
    return `paper`;
  }
};
var whoWins = function (input, computerUse) {
  console.log(`computer hand = ${computerUse}`);
  // this is if the computer wins
  if ((computerUse == `scissors` && input == `paper`) || (computerUse == `paper` && input == `stone`) || (computerUse == `stone` && input == `scissors`)) {
    computerWin = computerWin + 1;

    console.log(`you lose`);
    var outcome = `you lose!`;
  }

  // this is if the human wins
  else if ((input == `scissors` && computerUse == `paper`) || (input == `paper` && computerUse == `stone`) || (input == `stone` && computerUse == `scissors`)) {
    humanWin = humanWin + 1;

    console.log(`you win`);
    var outcome = `you win!`;
  } else if (input == computerUse) {
    var outcome = "there is a draw!";
  } //if there is a draw
  else if (input == computerUse) {
    console.log(`draw`);
    var outcome = "there is a draw!";
  }
  return outcome;
};

// this is for the reversed game
var ReversalWhoWins = function (input, computerUse) {
  console.log(`human uses ${input}`);

  console.log(`computer uses ${computerUse}`);

  // these is if the computer loses
  if ((computerUse == `scissors` && input == `paper`) || (computerUse == `paper` && input == `stone`) || (computerUse == `stone` && input == `scissors`)) {
    humanWin = humanWin + 1;

    console.log(`you win`);

    var outcome = "you win!";
  }

  // this is if the human loses
  else if ((input == "scissors" && computerUse == `paper`) || (input == `paper` && computerUse == `stone`) || (input == `stone` && computerUse == `scissors`)) {
    computerWin = computerWin + 1;

    console.log(`you lose`);

    var outcome = "you lose!";
  }

  //if there is a draw
  else if (input == computerUse) {
    console.log(`draw`);
    var outcome = "there is a draw!";
  }

  return outcome;
};
var koreanWhoWins = function (input, computerUse) {
  console.log(`computer hand = ${computerUse}`);
  // this is if the computer wins
  if ((computerUse == `scissors` && input == `paper`) || (computerUse == `paper` && input == `stone`) || (computerUse == `stone` && input == `scissors`)) {
    computerWin = computerWin + 1;
    playcount = playcount + 1;
    possibleChampion = "the computer";
    console.log(`you lose`);
    var outcome = `you lose! A draw on the next turn would make ${possibleChampion} the ultimate winner!! `;
  }

  // this is if the human wins
  else if ((input == `scissors` && computerUse == `paper`) || (input == `paper` && computerUse == `stone`) || (input == `stone` && computerUse == `scissors`)) {
    humanWin = humanWin + 1;
    playcount = playcount + 1;
    possibleChampion = "you";
    console.log(`you win`);
    var outcome = `you win! A draw on the next turn would make ${possibleChampion} the ultimate winner!! `;
  } else if (input == computerUse) {
    //if on first play , there is a draw
    if (playcount == 0) {
      var outcome = "there is a draw!";
    }
    //after there is at least one winner
    else if (playcount > 0) {
      var outcome = `.MUKJIIPPAPA! the ultimate winner is ${possibleChampion}`;
    }
  }

  return outcome;
};

var gamemode = "start";
var possibleChampion = "";
var playcount = 0;
var username = "";
var computerWin = 0;
var humanWin = 0;
var main = function (input) {
  var computerUse = computerHand();

  if (gamemode == "start") {
    username = input;
    gamemode = "choose mode";
    outputvalue = `welcome ${username}. please choose a mode of SPS you wish to play. please choose either "normal", "reverse" or "korean"`;
    return outputvalue;
  } else if (input != "normal" && input != "reverse" && input != "korean" && input != "paper" && input != "scissors" && input != "stone") {
    return "you have entered an invalid input";
  } else if (gamemode == "choose mode") {
    gamemode = `${input}`;
    return ` you have chosen ${gamemode} mode. Now you can type "scissors" "paper" or "stone" to play`;
  } else if (gamemode == "normal") {
    var outcome = whoWins(input, computerUse);
  } else if (gamemode == "reverse") {
    var outcome = ReversalWhoWins(input, computerUse);
  } else if (gamemode == "korean") {
    var outcome = koreanWhoWins(input, computerUse);
  }
  var finishingSentence = ` you chose ${input}. the computer chose ${computerUse}. ${username}'s number of wins:${humanWin}. Computer's number of wins: ${computerWin}`;
  return outcome + finishingSentence;
};
