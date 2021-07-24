// var main = function (input) {
//   // randomizing scissors, paper, stone
//   var a = "Scissors ✂️";
//   var a1 = "scissors";
//   var b = "Paper 📝";
//   var b1 = "paper";
//   var c = "Stone 🗿";
//   var c1 = "stone";
//   var inputLower = input.toLowerCase();
//   var outcome = [a, b, c];
//   var randOutcome = outcome[Math.floor(Math.random() * outcome.length)];
//   console.log(input + " " + randOutcome);

//   // if input is anything but scissors, paper, or stone
//   var output =
//     "Sorry, we didn't recognise that. Type 'Scissors', 'Paper' or 'Stone' and see what happens!";

//   // if input is draw (same as computer)
//   if (input == randOutcome) {
//     var output =
//       "You chose " +
//       input +
//       ". <br>" +
//       "The computer chose " +
//       randOutcome +
//       ". " +
//       "<br><br>It's a draw! " +
//       "<br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
//   }

//   // INPUT WIN SCENARIO: rock beats scissors, paper beats rock, scissors beats paper
//   if (
//     !(inputLower == c1 && randOutcome == a) ||
//     (inputLower == b1 && randOutcome == c) ||
//     (inputLower == a1 && randOutcome == b)
//   ) {
//     output =
//       "You chose " +
//       input +
//       ". <br>" +
//       "The computer chose " +
//       randOutcome +
//       ". <br>" +
//       "<br><br>You win! <br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
//   }

//   // COMPUTER WIN SCENARIO: rock beats scissors, paper beats rock, scissors beats paper
//   if (
//     !(inputLower == a1 && randOutcome == c) ||
//     (inputLower == c1 && randOutcome == b) ||
//     (inputLower == b1 && randOutcome == a)
//   ) {
//     output =
//       "You chose " +
//       input +
//       ". <br>" +
//       "The computer chose " +
//       randOutcome +
//       ". <br>" +
//       "<br><br>Sorry, you lose! <br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
//   }

//   return output;
// };

/////THIS IS THE START OF NONSENSE NOTES

// if (tie){
//  output =
// } else if (computer win){
//   stomp your feet
// } else if (player win) {
//   eat
// }
// else {
//   sorry
// }

// // INPUT WIN SCENARIO: rock beats scissors, paper beats rock, scissors beats paper
// if (
//   ((inputlower == "stone" && randOutcome == c) ||
//   ((input == c1 || input == c2) && randOutcome == a) ||
//   ((input == a1 || input =
//   = a2) && randOutcome == b)
// ) {
//   output =
//     "You chose " +
//     input +
//     ". <br>" +
//     "The computer chose " +
//     randOutcome +
//     ". <br>" +
//     "<br><br>You win! <br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
// }

//   if (!inputCorrectly) {
//     output =
//       "Sorry, we do not recognise this word. Please try again and type either 'Scissors', 'Paper' or 'Stone' and see what happens!";
//   }
//   return output;
// };

// if the input is NOT scissors, paper or stone
// var inputCorrectly = true;
// input = "scissors"

// var inputCorrectly =
//   input == "Scissors" ||
//   input == "scissors" ||
//   input == "Paper" ||
//   input == "paper" ||
//   input == "Stone" ||
//   input == "stone";
// var output = "haha";
// condition = true/false

// if (inputCorrectly) {
//   output =
//     "Sorry, we do not recognise this word. Please try again and type either 'Scissors', 'Paper' or 'Stone' and see what happens!";
//   }
//   return output;

// // conditions for winning or losing

// var outcomeConditions = function (conditionsNumber){
//   var a = 1;
//   var b = 2;
//   var c = 3;
//   return outcomeConditions;
// }

// adding conditions for outcome
// // if the input is NOT scissors, paper or stone
// var inputCorrectly = true;
// var inputCorrectly =
//   input == "Scissors" ||
//   input == "scissors" ||
//   input == "Paper" ||
//   input == "paper" ||
//   input == "Stone" ||
//   input == "stone";
// if (input == !inputCorrectly) {
//   output =
//     "Sorry, we do not recognise this word. Please try again and type either 'Scissors', 'Paper' or 'Stone' and see what happens!";
// }

/////THIS IS THE END OF NONSENSE NOTES

//NEW GAME MODE

// the game starts by asking user name

var currentGameMode = "waiting for user name";
var userName = "";

// start game

var winCounter = 0;

var main = function (input) {
  console.log("this is general user input: " + input);
  var output = "";
  // user name bit
  if (currentGameMode == "waiting for user name") {
    // set the name
    userName = input;
    console.log("this is user input for their name: " + input);
    output = "Hello " + userName;
    console.log("this is supposed to be your output: " + output);
    // now we have the name, switch the mode
    currentGameMode = "dice game";
  } else if (currentGameMode == "dice game") {
    // randomizing scissors, paper, stone
    var a = "Scissors ✂️";
    var a1 = "scissors";
    var b = "Paper 📝";
    var b1 = "paper";
    var c = "Stone 🗿";
    var c1 = "stone";
    var inputLower = input.toLowerCase();
    console.log("your input should be lowercase: " + inputLower);
    var outcome = [a, b, c];
    var randOutcome = outcome[Math.floor(Math.random() * outcome.length)];

    if (randOutcome == a) {
      randOutcome = a1;
    }
    if (randOutcome == b) {
      randOutcome = b1;
    }
    if (randOutcome == c) {
      randOutcome = c1;
    }
    console.log(input + " " + randOutcome);
    // if input is anything but scissors, paper, or stone
    var output =
      "Sorry, " +
      userName +
      ", we didn't recognise that. Type 'Scissors', 'Paper' or 'Stone' and see what happens!";

    // if input is draw (same as computer)
    if (input == randOutcome) {
      var output =
        "You chose " +
        input +
        ". <br>" +
        "The computer chose " +
        randOutcome +
        ". " +
        "<br><br>It's a draw, " +
        userName +
        "!";
      "<br><br>You've won " +
        winCounter +
        " times." +
        "<br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
    }

    // INPUT WIN SCENARIO: rock beats scissors, paper beats rock, scissors beats paper
    if (
      (inputLower == c1 && randOutcome == a1) ||
      (inputLower == b1 && randOutcome == c1) ||
      (inputLower == a1 && randOutcome == b1)
    ) {
      // increment winCounter
      winCounter = winCounter + 1;
      output =
        "You chose " +
        input +
        ". <br>" +
        "The computer chose " +
        randOutcome +
        ". <br>" +
        "<br><br>Congrats, " +
        userName +
        "! You've won " +
        winCounter +
        " times." +
        "<br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
    }

    // COMPUTER WIN SCENARIO: rock beats scissors, paper beats rock, scissors beats paper
    if (
      (inputLower == a1 && randOutcome == c1) ||
      (inputLower == c1 && randOutcome == b1) ||
      (inputLower == b1 && randOutcome == a1)
    ) {
      output =
        "You chose " +
        input +
        ". <br>" +
        "The computer chose " +
        randOutcome +
        ". <br>" +
        "<br><br>Sorry, " +
        userName +
        "! You lost. You've won " +
        winCounter +
        " times so far." +
        "<br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
    }
  }
  return output;
};
