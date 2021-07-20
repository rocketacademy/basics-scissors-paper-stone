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
  }

  //if there is a draw
  else if (input == computerUse) {
    console.log(`draw`);
    var outcome = `you drew with the computer`;
  }
  //if there is invalid input

  return outcome;
};
// this is for the reversed game
var ReversalWhoWins = function (input, computerUse) {
  console.log(`human uses ${input}`);

  console.log(`computer uses ${computerUse}`);

  // these is if the computer loses
  if ((computerUse == `scissors` && input == `reversed paper`) || (computerUse == `paper` && input == `reversed stone`) || (computerUse == `stone` && input == `reversed scissors`)) {
    humanWin = humanWin + 1;
    console.log(`you win`);
    var outcome = "you win!";
  }

  // this is if the human loses
  if ((input == "reversed scissors" && computerUse == `paper`) || (input == `reversed paper` && computerUse == `stone`) || (input == `reversed stone` && computerUse == `scissors`)) {
    computerWin = computerWin + 1;
    console.log(`you lose`);
    var outcome = "you lose!";
  }

  //if there is a draw
  if (input == "reversed " + computerUse) {
    console.log(`draw`);
    var outcome = "you drew with the computer ";
  }
  return outcome;
};

var computerWin = 0;
var humanWin = 0;
var main = function (input) {
  var computerUse = computerHand();
  //the option to go reversed or stay normal remains here
  if (input == `reversed scissors` || input == `reversed stone` || input == `reversed paper`) {
    var realInput = input.replace("reversed", "");
    var reversedwinner = ReversalWhoWins(input, computerUse);
    return reversedwinner + ` the computer chose ${computerUse} <br> you chose ${realInput} <br><br>Now you can type "scissors" "paper" or "stone" to play another round! the computer has won ${computerWin} times. You have won ${humanWin} times`;
  } // if there is invalid input
  if (input != "scissors" && input != "stone" && input != "paper") {
    return " you have entered an invalid input";
  }
  //here go normal
  var winner = whoWins(input, computerUse);

  return winner + ` the computer chose ${computerUse} <br> you chose ${input} <br><br>Now you can type "scissors" "paper" or "stone" to play another round! the computer has won ${computerWin} times. You have won ${humanWin} times`;
};
