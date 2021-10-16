var scissors = "scissors";
console.log("variable scissors");
var paper = "paper";
console.log("variable paper");
var stone = "stone";
console.log("variable stone");

var reverseScissors = "reversed scissors";
var reversePaper = "reversed paper";
var reverseStone = "reversed stone";

// Creating functions to randomly output "scissors", "paper", or "stone"

var rollingRandomNumber = function (input) {
  //return 2; //for testing; remove when done testing
  var randomOutput = Math.floor(Math.random() * 3) + 1;
  console.log("rolling random number to be assigned to SPS later");
  return randomOutput;
  console.log("random number rolled is " + randomOutput);
};

var assignNumberToSPS = function (input) {
  var rolledNumber = rollingRandomNumber();
  console.log(
    "rolling random number to assign to SPS. the number is " + rolledNumber
  );
  var numberToSPS = "some number was assigned but it wasnt 1 or 2 or 3";

  if (rolledNumber == 1) {
    //assign random number to scissors, paper or stone
    numberToSPS = scissors;
  }

  if (rolledNumber == 2) {
    numberToSPS = paper;
  }

  if (rolledNumber == 3) {
    numberToSPS = stone;
  }

  console.log("SPS is " + numberToSPS);
  return numberToSPS;
};

// Create main function where user inputs "scissors", "paper" or "stone" and receives a result based on the following conditions:

var main = function (input) {
  var programmeOutputsSPS = assignNumberToSPS();
  console.log("programe outputs " + programmeOutputsSPS);
  //creating variable for messages below
  var reversedGame =
    "Oh and btw - CONGRATS! You found the secret but not actually much more thrilling 'reversed' game.";
  //if user enters invalud input
  var myOutputValue =
    "Did you enter 'scissors', 'paper' or 'stone' exactly? This game is case-sensitive and a spelling nazi! :p <br><br> Ok but here's a tip: you can also use add 'reversed' and a space to any of the above options, and see what happens to the game!";

  // Create conditions
  //Win
  // If input is Sc and output is P, or if input is P and output is St, or if input is St and output is Sc, user wins

  if (
    input !== reverseScissors &&
    input !== reversePaper &&
    input !== reverseStone
  ) {
    reversedGame = "";
  }

  if (
    ((input == scissors || input == reverseStone) &&
      programmeOutputsSPS == paper) ||
    ((input == paper || input == reverseScissors) &&
      programmeOutputsSPS == stone) ||
    ((input == stone || input == reversePaper) &&
      programmeOutputsSPS == scissors)
  ) {
    myOutputValue =
      "You won! Cheap thrill, eh?  <br><br> You typed in " +
      input +
      " and the computer chose " +
      programmeOutputsSPS +
      ". <br><br>" +
      reversedGame;
    console.log("User wins");
  }

  // Draw
  // if input is Sc and output is Sc, or if input is P and output is P, or if input is St and output is St, user ties

  if (
    input == programmeOutputsSPS ||
    (input == reversePaper && programmeOutputsSPS == paper) ||
    (input == reverseStone && programmeOutputsSPS == stone) ||
    (input == reverseScissors && programmeOutputsSPS == scissors)
  ) {
    myOutputValue =
      "No win no lose - you drew! <br> You typed in " +
      input +
      " and the computer also chose " +
      programmeOutputsSPS +
      ". <br><br>" +
      reversedGame;
    console.log("User draws");
  }

  // Lost
  // If input is Sc and output is St, or if input is P and output is Sc, or if input is St and output is P, user loses

  if (
    ((input == scissors || input == reversePaper) &&
      programmeOutputsSPS == stone) ||
    ((input == paper || input == reverseStone) &&
      programmeOutputsSPS == scissors) ||
    ((input == stone || input == reverseScissors) &&
      programmeOutputsSPS == paper)
  ) {
    myOutputValue =
      "You lost to a computer, but eh, no biggie! <br> You typed in " +
      input +
      " and the computer chose " +
      programmeOutputsSPS +
      ". <br><br>" +
      reversedGame;
    console.log("User loses");
  }

  console.log("output value");
  return myOutputValue;
  console.log("end of programme. outcome is " + myOutputValue);
};
