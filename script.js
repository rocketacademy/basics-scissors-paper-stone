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
    playcount = playcount + 1;
    computerWin = computerWin + 1;
    possibleChampion = " the computer ";
    console.log(`you lose`);
    var outcome = `you lose!`;
  }

  // this is if the human wins
  else if ((input == `scissors` && computerUse == `paper`) || (input == `paper` && computerUse == `stone`) || (input == `stone` && computerUse == `scissors`)) {
    humanWin = humanWin + 1;
    playcount = playcount + 1;
    possibleChampion = " you";
    console.log(`you win`);
    var outcome = `you win!`;
  }

  //if there is a draw, the first duel will have no ultimate winner
  else if (input == computerUse) {
    if (playcount == 0) {
      console.log(`draw`);
      possibleChampion = " no one";
      var outcome = `you drew with the computer`;
    }

    // the ultimate winner is revealed
    else if (playcount > 0) {
      var outcome = `the ultimate champion is ${possibleChampion}! `;
      playcount = 0;
    }
  }
  return outcome;
};
// this is for the reversed game
var ReversalWhoWins = function (input, computerUse) {
  console.log(`human uses ${input}`);

  console.log(`computer uses ${computerUse}`);

  // these is if the computer loses
  if ((computerUse == `scissors` && input == `reversed paper`) || (computerUse == `paper` && input == `reversed stone`) || (computerUse == `stone` && input == `reversed scissors`)) {
    humanWin = humanWin + 1;
    playcount = playcount + 1;
    console.log(`you win`);
    possibleChampion = " you";
    var outcome = "you win!";
  }

  // this is if the human loses
  else if ((input == "reversed scissors" && computerUse == `paper`) || (input == `reversed paper` && computerUse == `stone`) || (input == `reversed stone` && computerUse == `scissors`)) {
    computerWin = computerWin + 1;
    playcount = playcount + 1;
    console.log(`you lose`);
    possibleChampion = " the computer ";
    var outcome = "you lose!";
  }

  //if there is a draw
  else if (input == "reversed " + computerUse) {
    console.log(`draw`);
    //if first play there wud be no ultimate winner
    if (playcount == 0) {
      var outcome = "you drew with the computer ";
      possibleChampion = " no one";
    }

    // the ultimate winner is revealed
    else if (playcount > 0) {
      var outcome = `the ultimate champion is ${possibleChampion}! `;
      playcount = 0;
    }
  }

  return outcome;
};
var possibleChampion = "";
var playcount = 0;
var username = "";
var computerWin = 0;
var humanWin = 0;
var main = function (input) {
  var computerUse = computerHand();
  //the option to let the computer play for u starts here
  if (input == `computer`) {
    var urHand = computerHand();
    var winner = whoWins(urHand, computerUse);
    return winner + ` the computer chose ${computerUse}.<br> you were assigned ${urHand}. <br><br>the computer has won ${computerWin} times. You have won ${humanWin} times. `;
  }
  //the option to go reversed or stay normal remains here
  else if (input == `reversed scissors` || input == `reversed stone` || input == `reversed paper`) {
    var realInput = input.replace("reversed", "");
    var reversedwinner = ReversalWhoWins(input, computerUse);
    return reversedwinner + ` the computer chose ${computerUse} <br> you chose ${realInput} <br><br>Now you can type "scissors" "paper" or "stone" to play another round! the computer has won ${computerWin} times. You have won ${humanWin} times. the most recent winner is ${possibleChampion}`;
  } // if there is invalid input
  else if (input != "scissors" && input != "stone" && input != "paper") {
    return " you have entered an invalid input";
  }
  //here go normal
  else var winner = whoWins(input, computerUse);
  return winner + ` the computer chose ${computerUse} <br> you chose ${input} <br><br>Now you can type "scissors" "paper" or "stone" to play another round! the computer has won ${computerWin} times. You have won ${humanWin} times. the most recent winner is ${possibleChampion}`;
};
