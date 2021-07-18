//DiceRoll Function
//Declare constant
const scissors = `scissors`;
const paper = `paper`;
const stone = `stone`;

var rollDice = function () {
  //determine max number here
  return Math.floor(Math.random() * 3) + 1;
};

// Define computer result.
var generateComputerResult = function () {
  var randomDiceNumber = rollDice();
  var computerPlays = "";
  if (randomDiceNumber == 1) {
    computerPlays = scissors;
    return computerPlays;
  }
  if (randomDiceNumber == 2) {
    computerPlays = paper;
    return computerPlays;
  }
  if (randomDiceNumber == 3) {
    computerPlays = stone;
    return computerPlays;
  }
  return computerPlays;
};

//main function
var main = function (input) {
  //Prevent caps errors
  input = input.toLowerCase();
  var myOutputValue = ``;
  //declare result -> can't be global because we need it to change with every submit
  var computerPlays = generateComputerResult();
  console.log("generateComputerResult function");
  console.log(computerPlays);

  var standardMessage = `Computer: ${computerPlays}. <br> Your input: ${input}. <br> `;
  console.log("std message");
  console.log("before if", computerPlays, input);

  if (
    (input == scissors && computerPlays == paper) ||
    (input == paper && computerPlays == stone) ||
    (input == stone && computerPlays == scissors)
  ) {
    myOutputValue = `${standardMessage} you win! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
    console.log("if statement", myOutputValue);
  } else if (input == scissors || input == paper || input == stone) {
    myOutputValue = `${standardMessage} <br> you lose! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
    console.log("else if statement", computerPlays, input);
    // Reverse Game
    // You decide to prank your friends and create an SPS game where the rules are reversed: scissors beat stone, stone beats paper, and paper beats scissors. Create a version where the rules are reversed. The user can choose to try their luck at reversed mode by adding the word "reversed" to their choice. For example: "reversed stone".
  } else if (
    (input == `reversed ${scissors}` && computerPlays == stone) ||
    (input == `reversed ${paper}` && computerPlays == scissors) ||
    (input == `reversed ${stone}` && computerPlays == paper)
  ) {
    myOutputValue = `reversal! you won!`;
  } else if (
    input == `reversed ${scissors}`||
    input == `reversed ${paper}`||
    input == `reversed ${stone}`
  ) {
    myOutputValue = `reversal! you lost!!`;
  } else {
    myOutputValue = `Please input "scissors", "paper" or "stone".`;
    console.log("else statement", computerPlays, input);
  }
  return myOutputValue;
};

//////////////////////////////////////////////////////////////////////////
//Using ONLY IF Statements
// //DiceRoll Function
// var rollDice = function () {
//   //determine max number here
//   return 1;
//   return Math.floor(Math.random() * 3) + 1;
// };

// // Define computer result.
// var SPS = function () {
//   var computerResult = rollDice();
//   var computerPlays = "try again";
//   if (computerResult == 1) {
//     var computerPlays = "error";
//     computerPlays = `scissors`;
//     return computerPlays;
//   }
//   if (computerResult == 2) {
//     computerPlays = `paper`;
//     return computerPlays;
//   }
//   if (computerResult == 3) {
//     computerPlays = `stone`;
//     return computerPlays;
//   }
//   return computerPlays;
// };

// //main function
// var main = function (input) {
//   var myOutputValue = `Please input "scissors", "paper" or "stone"`;
//   //declare result -> can't be global because we need it to change with every submit
//   var computerPlays = SPS();
//   console.log("SPS function");
//   console.log(computerPlays);

//   var standardMessage = `Computer: ${computerPlays}. <br> Your input: ${input}. <br> `;
//   console.log("std message");
//   console.log(computerPlays);
//   //this losting IF-statement has to run first so that it will run if the last condition is not met. This is setting the output twice, which is inefficient. This might also cause an unexpected outcome????????
//   if (input == "scissors" || input == "paper" || input == "stone") {
//     myOutputValue = `${standardMessage} <br> you lose! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
//   }

//   if (
//     (input == `scissors` && computerPlays == `paper`) ||
//     (input == `paper` && computerPlays == `stone`) ||
//     (input == `stone` && computerPlays == `scissors`)
//   ) {
//     myOutputValue = ` ${standardMessage} you win! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
//     console.log("IF Statement");
//     console.log(myOutputValue);
//   }

//   return myOutputValue;
// };
