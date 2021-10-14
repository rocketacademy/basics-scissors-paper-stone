// Users input "scissors","paper", or "stone"
// Program outputs whether the user won, the program won or draw

// scissors > paper; paper > stone; stone > scissors;
// Draw if both choose the same project

// Normal Version //
var main = function (input) {
  var computerChoice = getComputerchoice();
  console.log(computerChoice);

  if (computerChoice == 1) {
    computer = "scissors";
    console.log("scissors");
  }

  if (computerChoice == 2) {
    computer = "paper";
    console.log("paper");
  }

  if (computerChoice == 3) {
    computer = "stone";
    console.log("stone");
  }

  // Input Validation// Input validation to let users know there are only 3 input options, and ask them to try again
  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    console.log("enter again");
    return (result = `Pls choose again! <br> You can only choose 'scissors✌', 'paper🖐' or 'stone👊'!`);
  }

  // 3 scenarios if users choose scissors
  if (input == "scissors" && computerChoice == 1) {
    console.log("draw!");
    return (result = `It's a draw! Try again!`);
  }

  if (input == "scissors" && computerChoice == 2) {
    console.log("win!");
    return (result = `You win! <br> You chose scissors✌! <br> And the computer chose paper🖐~`);
  }

  if (input == "scissors" && computerChoice == 3) {
    console.log("lost!");
    return (result = `You lost! <br> You chose scissors✌! <br> And the computer chose stone👊~`);
  }

  // 3 scenarios if users choose paper
  if (input == "paper" && computerChoice == 2) {
    console.log("draw!");
    return (result = `It's a draw! <br> Try again!`);
  }

  if (input == "paper" && computerChoice == 3) {
    console.log("win!");
    return (result = `You win! <br> You chose paper🖐!<br> And the the computer chose stone👊~`);
  }

  if (input == "paper" && computerChoice == 1) {
    console.log("lost!");
    return (result = `You lost!<br> You chose paper🖐! <br> And the the computer chose scissors✌~`);
  }

  // 3 scenarios if users choose stone
  if (input == "stone" && computerChoice == 3) {
    console.log("draw!");
    return (result = `It's a draw! <br> Try again!`);
  }

  if (input == "stone" && computerChoice == 1) {
    console.log("win!");
    return (result = `You win!<br>  You chose stone👊! <br> And the computer chose scissors✌~`);
  }

  if (input == "stone" && computerChoice == 2) {
    console.log("lost!");
    return (result = `You lost! <br> You chose stone👊! <br> And the computer chose paper🖐~`);
  }
  var myOutputValue = result;
  return myOutputValue;
};

var getComputerchoice = function () {
  // Generate a decimal from 0 to 3, inclusive of 0 and exclusive of 3

  var randomDecimal = Math.random() * 3;

  // Remove the decimal
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid number from 1 to 3
  var actualNum = randomInteger + 1;

  return actualNum;
};

// Reversed Version //

// Rules are reversed (i.e. scissors > stone, stone > paper, paper > scissors )

var main = function (input) {
  var computerChoice = getComputerchoice();
  console.log(computerChoice);

  if (computerChoice == 1) {
    computer = "scissors";
    console.log("scissors");
  }

  if (computerChoice == 2) {
    computer = "paper";
    console.log("paper");
  }

  if (computerChoice == 3) {
    computer = "stone";
    console.log("stone");
  }

  // Input Validation// Input validation to let users know there are only 3 input options, and ask them to try again
  // User could add 'reversed' to try their luck

  if (
    !(
      input == "scissors" ||
      input == "paper" ||
      input == "stone" ||
      input == "reversed scissors" ||
      input == "reversed paper" ||
      input == "reversed scissors"
    )
  ) {
    console.log("enter again");
    return (result = `Pls choose again! <br> You can only choose 'scissors✌', 'paper🖐' or 'stone👊'!`);
  }

  // 3 scenarios if users choose scissors
  if (input == "scissors" && computerChoice == 1) {
    console.log("draw!");
    return (result = `It's a draw! Try again!`);
  }

  if (input == "scissors" && computerChoice == 2) {
    console.log("win!");
    return (result = `You win! <br> You chose scissors✌! <br> And the computer chose paper🖐~`);
  }

  if (input == "scissors" && computerChoice == 3) {
    console.log("lost!");
    return (result = `You lost! <br> You chose scissors✌! <br> And the computer chose stone👊~`);
  }

  // 3 scenarios if users choose reversed scissors
  if (input == "reversed scissors" && computerChoice == 1) {
    console.log("draw!");
    return (result = `It's a draw! Try again!`);
  }

  if (input == "reversed scissors" && computerChoice == 2) {
    console.log("lost!");
    return (result = `You lost! <br> You chose reversed scissors✌! <br> And the computer chose paper🖐~`);
  }

  if (input == "reversed scissors" && computerChoice == 3) {
    console.log("win!");
    return (result = `You win! <br> You chose reversed scissors✌! <br> And the computer chose stone👊~`);
  }

  // 3 scenarios if users choose paper
  if (input == "paper" && computerChoice == 2) {
    console.log("draw!");
    return (result = `It's a draw! <br> Try again!`);
  }

  if (input == "paper" && computerChoice == 3) {
    console.log("win!");
    return (result = `You win! <br> You chose paper🖐!<br> And the the computer chose stone👊~`);
  }

  if (input == "paper" && computerChoice == 1) {
    console.log("lost!");
    return (result = `You lost!<br> You chose paper🖐! <br> And the the computer chose scissors✌~`);
  }

  // 3 scenarios if users choose reversed paper
  if (input == "reversed paper" && computerChoice == 2) {
    console.log("draw!");
    return (result = `It's a draw! <br> Try again!`);
  }

  if (input == "reversed paper" && computerChoice == 3) {
    console.log("lost!");
    return (result = `You lost! <br> You chose reversed paper🖐!<br> And the the computer chose stone👊~`);
  }

  if (input == "reversed paper" && computerChoice == 1) {
    console.log("win!");
    return (result = `You win!<br> You chose reversed paper🖐! <br> And the the computer chose scissors✌~`);
  }

  // 3 scenarios if users choose stone
  if (input == "stone" && computerChoice == 3) {
    console.log("draw!");
    return (result = `It's a draw! <br> Try again!`);
  }

  if (input == "stone" && computerChoice == 1) {
    console.log("win!");
    return (result = `You win!<br>  You chose stone👊! <br> And the computer chose scissors✌~`);
  }

  if (input == "stone" && computerChoice == 2) {
    console.log("lost!");
    return (result = `You lost! <br> You chose stone👊! <br> And the computer chose paper🖐~`);
  }

  // 3 scenarios if users choose reversed stone
  if (input == "reversed stone" && computerChoice == 3) {
    console.log("draw!");
    return (result = `It's a draw! <br> Try again!`);
  }

  if (input == "reversed stone" && computerChoice == 1) {
    console.log("lost!");
    return (result = `You lost !<br> You chose reversed stone👊! <br> And the computer chose scissors✌~`);
  }

  if (input == "stone" && computerChoice == 2) {
    console.log("win!");
    return (result = `You win! <br> You chose reversed stone👊! <br> And the computer chose paper🖐~`);
  }
  var myOutputValue = result;
  return myOutputValue;
};

var getComputerchoice = function () {
  // Generate a decimal from 0 to 3, inclusive of 0 and exclusive of 3

  var randomDecimal = Math.random() * 3;

  // Remove the decimal
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid number from 1 to 3
  var actualNum = randomInteger + 1;

  return actualNum;
};
