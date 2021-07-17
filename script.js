var main = function (input) {
  // randomizing scissors, paper, stone
  var a = "Scissors ✂️";
  var a1 = "scissors";
  var b = "Paper 📝";
  var b1 = "paper";
  var c = "Stone 🗿";
  var c1 = "stone";
  var inputLower = input.toLowerCase();
  var outcome = [a, b, c];
  var randOutcome = outcome[Math.floor(Math.random() * outcome.length)];
  console.log(input + " " + randOutcome);

  // if input is anything but scissors, paper, or stone
  var output =
    "Sorry, we didn't recognise that. Type 'Scissors', 'Paper' or 'Stone' and see what happens!";

  // if input is draw (same as computer)
  if (input == randOutcome) {
    var output =
      "You chose " +
      input +
      ". <br>" +
      "The computer chose " +
      randOutcome +
      ". " +
      "<br><br>It's a draw! " +
      "<br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
  }

  // INPUT WIN SCENARIO: rock beats scissors, paper beats rock, scissors beats paper
  if (
    !(inputLower == c1 && randOutcome == a) ||
    (inputLower == b1 && randOutcome == c) ||
    (inputLower == a1 && randOutcome == b)
  ) {
    output =
      "You chose " +
      input +
      ". <br>" +
      "The computer chose " +
      randOutcome +
      ". <br>" +
      "<br><br>You win! <br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
  }

  // COMPUTER WIN SCENARIO: rock beats scissors, paper beats rock, scissors beats paper
  if (
    !(inputLower == a1 && randOutcome == c) ||
    (inputLower == c1 && randOutcome == b) ||
    (inputLower == b1 && randOutcome == a)
  ) {
    output =
      "You chose " +
      input +
      ". <br>" +
      "The computer chose " +
      randOutcome +
      ". <br>" +
      "<br><br>Sorry, you lose! <br><br>Want to have another go? Type 'Scissors', 'Paper' or 'Stone' and see what happens!";
  }

  return output;
};

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
