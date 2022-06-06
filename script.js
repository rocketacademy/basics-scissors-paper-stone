// Global Variable
var reversedMode = false;
var normalMode = true;
var userName = false;
var user = "";
var numberOfGame = 0;
var numberOfWin = 0;

// Function checkUserInput
// Input: User Input
// Output: Return False if it does not have the correct input
var checkUserInput = function (userInput) {
  if (
    userInput === "scissors" ||
    userInput === "paper" ||
    userInput === "stone" ||
    userInput === "reversed" ||
    userInput === "normal"
  ) {
    return false;
  } else {
    return true;
  }
};

// Function generateSPS
// Purpose: To use Math.random() to generate a choice for the computer
// Output: Generate a random choice for the computer (scissor, paper or stone)
var generateSPS = function () {
  let randomDecimal = Math.random() * 3;
  let randomInteger = Math.floor(randomDecimal);
  let number = randomInteger + 1;
  if (number === 1) {
    return "scissors";
  } else if (number === 2) {
    return "paper";
  } else {
    return "stone";
  }
};

// Function convertToIcon
// Purpose: To convert the words into icons to be displayed on the output
// Input: scissors, paper or stone
// Output: converting it into icons
var convertToIcon = function (choice) {
  if (choice === "scissors") {
    return "✂️";
  } else if (choice === "paper") {
    return "🗒";
  } else {
    return "🪨";
  }
};

// Function winOrLose
// Purpose: It is to check whether user1 win user2 (normal mode) or user2 win user1 (reversed mode)
// Input: user1's choice and user2's choice
// Output: return true if user1 win (normal mode) or user2 win (reversed mode)
var winOrLose = function (user1, user2) {
  if (
    (user1 === "scissors" && user2 === "paper") ||
    (user1 === "paper" && user2 === "stone") ||
    (user1 === "stone" && user2 === "scissors")
  ) {
    return true;
  }
  return false;
};

// Function enterReversedMode
// Purpose: To change Program state to Reverse Mode
var enterReversedMode = function () {
  normalMode = false;
  reversedMode = true;
  console.log("Reversed Mode: ", reversedMode);
  console.log("Normal Mode: ", normalMode);
};

// Function enterNormalMode
// Purpose: To change Program state to Normal Mode
var enterNormalMode = function () {
  normalMode = true;
  reversedMode = false;
  console.log("Reversed Mode: ", reversedMode);
  console.log("Normal Mode: ", normalMode);
};

// Main function
var main = function (input) {
  let userWon, computerWon;
  let myOutputValue = "you lose";
  if (userName === false) {
    userName = true;
    user = input;
    return `Hi ${user}, Please enter scissors, paper or stone`;
  }
  // Converting the input into lowercase
  input = input.toLowerCase();
  // Checking for User input
  if (checkUserInput(input)) {
    return "Please enter a valid input (scissors, paper or stone)";
  }
  switch (input) {
    case "reversed":
      enterReversedMode();
      return "Welcome to Reversed Mode.";
    case "normal":
      enterNormalMode();
      return "Welcome to Normal Mode.";
    default:
      let computerChoice = generateSPS();
      let computerIcon = convertToIcon(computerChoice);
      let userIcon = convertToIcon(input);
      if (normalMode === true) {
        userWon = winOrLose(input, computerChoice);
        computerWon = winOrLose(computerChoice, input);
      } else {
        userWon = winOrLose(computerChoice, input);
        computerWon = winOrLose(input, computerChoice);
      }
      myOutputValue = `The computer chose ${computerChoice} ${computerIcon}.<br><br>You chose ${input} ${userIcon}.<br><br>`
      console.log("Computer: ", computerChoice);
      console.log("User: ", input);
      console.log("Reversed Mode: ", reversedMode);
      console.log("Normal Mode: ", normalMode);
      numberOfGame += 1;
      // Situation where user wins
      if (userWon === true) {
        numberOfWin += 1;
        myOutputValue += `You won! Congrats.`;
      } else if (computerWon === true) { // Situation where user loses
        myOutputValue += `You lost! Bummer.`;
      } else { // Else is a draw
        myOutputValue += `Draw!`;
      }
      myOutputValue += `<br><br>So far ${user}, you have won ${numberOfWin}/${numberOfGame} rounds<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`
      return myOutputValue;
  }
};