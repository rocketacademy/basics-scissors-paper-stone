var main = function (input) {
  var computerThrew = getComputerSps();
  console.log(`computer threw ${computerThrew}`);
  console.log(`User threw ${input}`);
  var myOutputValue = "You lost";

  //input validation//
  if (input != "scissors" || input != "paper" || input != "stone") {
    myOutputValue = "Please key in scissors, paper or stone only.";
  }

  if (input == computerThrew) {
    myOutputValue = "Its a draw";
  }

  if (input == "scissors" && computerThrew == "paper") {
    myOutputValue = "You win";
  }
  if (input == "paper" && computerThrew == "stone") {
    myOutputValue = "You win";
  }
  if (input == "stone" && computerThrew == "scissors") {
    myOutputValue = "You win";
  }

  return `${myOutputValue}. Computer threw ${computerThrew}, and you threw ${input}`;
};

var getRandomInt = function () {
  var randomDecimal = Math.random() * 3;
  var randomInt = Math.ceil(randomDecimal);
  return randomInt;
};

var getComputerSps = function (randomInt) {
  var computerSps = "not running";
  var numberToComputerSps = getRandomInt();
  console.log(numberToComputerSps);
  if (numberToComputerSps == 1) {
    computerSps = "scissors";
  }

  if (numberToComputerSps == 2) {
    computerSps = "paper";
  }

  if (numberToComputerSps == 3) {
    computerSps = "stone";
  }

  return computerSps;
};
