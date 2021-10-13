var main = function (input) {
  // Input validation
  if (input != `scissors` || `paper` || `stone`) {
    var myOutputValue = `Sorry, ${input} was not recognized. You can only enter scissors, paper, or stone. Please try again.`;
  }

  // Generate the computer hand
  randomnumber = generaterandomnumber();

  // connect each number to either SPS
  if (randomnumber == 1) {
    var computerhand = "scissors";
  }
  if (randomnumber == 2) {
    var computerhand = "paper";
  }
  if (randomnumber == 3) {
    var computerhand = "stone";
  }

  var WinnerResult = WinnerChecker(input, computerhand);
  // This is what the player sees if they lose against the computer
  if (WinnerResult == `Player loses`) {
    var myOutputValue = `You lose! You showed ${input} and I showed ${computerhand}.`;
  }

  // This is what the player sees if they win against the computer
  if (WinnerResult == `Player win`) {
    var myOutputValue = `You win! You showed ${input} and I showed ${computerhand}.`;
  }

  // This is what the player sees if there is a tie
  if (WinnerResult == `Tie`) {
    var myOutputValue = `It is a tie! You showed ${input} and I showed ${computerhand}`;
  }

  console.log(`=======CHECK=======`);
  console.log(`player showed:`);
  console.log(input);
  console.log(`computer showed:`);
  console.log(computerhand);

  return myOutputValue;
};
// ====================================================================================

// This function is to compare hands and check whether player or computer won
var WinnerChecker = function (input, computerhand) {
  // THIS FUNCTION IS FOR PLAYER WINS
  if (
    (input == `scissors` && computerhand == `paper`) ||
    (input == `paper` && computerhand == `stone`) ||
    (input == `stone` && computerhand == `scissors`)
  ) {
    return `Player win`;
  }
  console.log(`This condition will only run if the player wins`);
  console.log(input);

  // THIS FUCTION IS FOR TIE
  if (
    (input == `scissors` && computerhand == `scissors`) ||
    (input == `paper` && computerhand == `paper`) ||
    (input == `stone` && computerhand == `stone`)
  ) {
    return `Tie`;
  }
  console.log(`This condition will only run if it is a tie`);
  console.log(`Player showed ${input}`);
  console.log(`computer showed ${computerhand}`);

  // THIS IS FOR PLAYER LOSES
  if (
    (input == `scissors` && computerhand == `stone`) ||
    (input == `paper` && computerhand == `scissors`) ||
    (input == `stone` && computerhand == `paper`)
  ) {
    return `Player loses`;
  }
  console.log(`This will only run if the player loses`);
  console.log(`Player showed ${input}`);
  console.log(`computer showed ${computerhand}`);
};
// =============================================================================================

// This function generates the computer hand
var generaterandomnumber = function () {
  var randomdecimal = Math.random() * 3;
  var randomwholenumber = Math.floor(randomdecimal);
  var generatednumber = randomwholenumber + 1;
  return generatednumber;
};
