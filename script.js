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
var whoWins = function (input) {
  var computerUse = computerHand();
  console.log(`computer hand = ${computerUse}`);
  // this is if the computer wins
  if ((computerUse == `scissors` && input == `paper`) || (computerUse == `paper` && input == `stone`) || (computerUse == `stone` && input == `scissors`)) {
    return `the computer chose ${computerUse}!<br>you chose ${input}!<br><br> YOU LOSE!<br> <br> Now you can type "scissors" "paper" or "stone" to play another round! `;
  }

  // this is if the human wins
  if ((input == `scissors` && computerUse == `paper`) || (input == `paper` && computerUse == `stone`) || (input == `stone` && computerUse == `scissors`)) {
    return `You chose ${input}!<br> the computer chose ${computerUse}!<br><br>YOU WIN! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  //if there is a draw
  if (input == computerUse) {
    return `WOW THERE IS A DRAW!<br> <br> Now you can type "scissors" "paper" or "stone" to play another round! `;
  }
  //if there is invalid input
  return `u have entered an invalid input <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
};
// this is for the reversed game
var ReversalWhoWins = function (input) {
  var realInput = input.replace("reversed", "");
  var computerUse = computerHand();
  var reversedComputerUse = `reversed ${computerUse}`;
  console.log(` reversed computer hand = ${reversedComputerUse}`);
  // these is if the computer loses
  if ((reversedComputerUse == `reversed scissors` && input == `reversed paper`) || (reversedComputerUse == `reversed paper` && input == `reversed stone`) || (reversedComputerUse == `reversed stone` && input == `reversed scissors`)) {
    return `the computer chose ${computerUse}!<br>you chose ${realInput}!<br><br> YOU WIN! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  // this is if the human loses
  if ((input == "reversed scissors" && reversedComputerUse == `reversed paper`) || (input == `reversed paper` && reversedComputerUse == `reversed stone`) || (input == `reversed stone` && reversedComputerUse == `reversed scissors`)) {
    return `the computer chose ${computerUse}!<br>you chose ${realInput}!<br><br> YOU LOSE! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  //if there is a draw
  if (input == reversedComputerUse) {
    return `WOW THERE IS A DRAW!<br> <br> Now you can type "scissors" "paper" or "stone" to play another round! `;
  }
  //if there is invalid input
  return `u have entered an invalid input<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
};
var main = function (input) {
  console.log(`input= ${input}`);
  //the option to go reversed or stay normal remains here
  if (input == `reversed scissors` || input == `reversed stone` || input == `reversed paper`) {
    var reversedwinner = ReversalWhoWins(input);
    return reversedwinner;
  }

  var winner = whoWins(input);

  return winner;
};
