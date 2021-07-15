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
  if (computerUse == `scissors` && input == `paper`) {
    return `the computer chose scissors!<br>you chose paper!<br><br> YOU LOSE! `;
  }
  if (computerUse == `paper` && input == `stone`) {
    return `the computer chose paper!<br>you chose stone!<br><br> YOU LOSE! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (computerUse == `stone` && input == `scissors`) {
    return `the computer chose stone!<br>you chose scissors!<br><br> YOU LOSE! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  // this is if the human wins
  if (input == `scissors` && computerUse == `paper`) {
    return `You chose scissors!<br> the computer chose paper!<br><br>YOU WIN! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == `paper` && computerUse == `stone`) {
    return `You chose paper!<br> the computer chose stone!<br><br>YOU WIN! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == `stone` && computerUse == `scissors`) {
    return `You chose stone!<br> the computer chose scissors!<br><br>YOU WIN! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
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
  var computerUse = computerHand();
  var reversedComputerUse = `reversed ${computerUse}`;
  console.log(` reversed computer hand = ${reversedComputerUse}`);
  // these is if the computer loses
  if (reversedComputerUse == `reversed scissors` && input == `reversed paper`) {
    return `the computer chose scissors!<br>you chose paper!<br><br> YOU WIN! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (reversedComputerUse == `reversed paper` && input == `reversed stone`) {
    return `the computer chose paper!<br>you chose stone!<br><br> YOU WIN! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (reversedComputerUse == `reversed stone` && input == `reversed scissors`) {
    return `the computer chose stone!<br>you chose scissors!<br><br> YOU WIN! <br><br>Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  // this is if the human loses
  if (input == `reversed scissors` && reversedComputerUse == `reversed paper`) {
    return `You chose scissors!<br> the computer chose paper!<br><br>YOU LOSE! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == `reversed paper` && reversedComputerUse == `reversed stone`) {
    return `You chose paper!<br> the computer chose stone!<br><br>YOU LOSE! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (input == `reversed stone` && reversedComputerUse == `reversed scissors`) {
    return `You chose stone!<br> the computer chose scissors!<br><br>YOU LOSE! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
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
