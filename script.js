// PROJECT 1 : Scissors Paper Stone
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
// user win, lose or draw

var main = function (input) {
  var randomSPS = generateRandomNumber();
  var systemChoiceStatement = `The computer chose ${randomSPS}`;
  var inputChoiceStatement = `You chose ${input}`;
  var anotherRoundStatement = `Now you can type "scissors" "paper" or "stone" to play another round!`;
  console.log(randomSPS);
  var myOutputValue = `Please try again with inputs "scissors", "paper" or "stone".`;

  ///// THE BASIC SPS /////
  // win conditions
  if (
    (input == "scissors" && randomSPS == "paper") ||
    (input == "paper" && randomSPS == "stone") ||
    (input == "stone" && randomSPS == "scissors")
  ) {
    myOutputValue =
      systemChoiceStatement +
      "<br>" +
      inputChoiceStatement +
      "<br>" +
      "<br>" +
      "You win! Lucky!" +
      "<br>" +
      "<br>" +
      anotherRoundStatement;
  }

  // lose conditions
  if (
    (input == "scissors" && randomSPS == "stone") ||
    (input == "paper" && randomSPS == "scissors") ||
    (input == "stone" && randomSPS == "paper")
  ) {
    myOutputValue =
      systemChoiceStatement +
      "<br>" +
      inputChoiceStatement +
      "<br>" +
      "<br>" +
      `You lose! Bummer!` +
      "<br>" +
      "<br>" +
      anotherRoundStatement;
  }

  // draw conditions
  if (input == randomSPS) {
    myOutputValue =
      systemChoiceStatement +
      "<br>" +
      inputChoiceStatement +
      "<br>" +
      "<br>" +
      `You draw! Another round!` +
      "<br>" +
      "<br>" +
      anotherRoundStatement;
  }

  ///// THE REVERSED SPS /////
  // win conditions
  if (
    (input == "reversed scissors" && randomSPS == "stone") ||
    (input == "reversed paper" && randomSPS == "scissors") ||
    (input == "reversed stone" && randomSPS == "paper")
  ) {
    myOutputValue =
      systemChoiceStatement +
      "<br>" +
      inputChoiceStatement +
      "<br>" +
      "<br>" +
      "You win! Lucky!" +
      "<br>" +
      "<br>" +
      anotherRoundStatement;
  }

  // lose conditions
  if (
    (input == "reversed scissors" && randomSPS == "paper") ||
    (input == "reversed paper" && randomSPS == "stone") ||
    (input == "reversed stone" && randomSPS == "scissors")
  ) {
    myOutputValue =
      systemChoiceStatement +
      "<br>" +
      inputChoiceStatement +
      "<br>" +
      "<br>" +
      `You lose! Bummer!` +
      "<br>" +
      "<br>" +
      anotherRoundStatement;
  }

  // draw conditions
  if (input == `reversed ` + randomSPS) {
    myOutputValue =
      systemChoiceStatement +
      "<br>" +
      inputChoiceStatement +
      "<br>" +
      "<br>" +
      `You draw! Another round!` +
      "<br>" +
      "<br>" +
      anotherRoundStatement;
  }
  return myOutputValue;
};

// create random number generator to represent the three actions
var generateRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  var sps = "";
  if (randomNumber == 0) {
    return "scissors";
  }
  if (randomNumber == 1) {
    return "paper";
  }
  if (randomNumber == 2) {
    return "stone";
  }
  return sps;
};
