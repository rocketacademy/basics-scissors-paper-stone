// Use Math to generate system's generated input for the game
const getRandomHand = () => {
  let systemGenerateNumber = 1 + Math.floor(Math.random() * 3);
  if (systemGenerateNumber === 1) {
    return "scissors";
  } else if (systemGenerateNumber === 2) {
    return "paper";
  } else return "rock";
};

// Convert user's text input into symbol for output display
const iconForNoun = (hand) => {
  if (
    hand.toLowerCase() === "paper" ||
    hand.toLowerCase() === "reversed paper"
  ) {
    return "🧻";
  } else if (
    hand.toLowerCase() === "scissors" ||
    hand.toLowerCase() === "reversed scissors"
  ) {
    return "✂️";
  } else if (
    hand.toLowerCase() === "rock" ||
    hand.toLowerCase() === "reversed rock"
  ) {
    return "💎";
  } else return hand.toLowerCase();
};

// All invalid cases of user's input
const invalidCases = (userInput) =>
  userInput.toLowerCase() !== "paper" &&
  userInput.toLowerCase() !== "rock" &&
  userInput.toLowerCase() !== "scissors" &&
  userInput.toLowerCase() !== "reversed scissors" &&
  userInput.toLowerCase() !== "reversed paper" &&
  userInput.toLowerCase() !== "reversed rock";

// All cases where user wins
const winCases = (userInput, showMeHand) =>
  (userInput.toLowerCase() === "paper" && showMeHand === "rock") ||
  (userInput.toLowerCase() === "rock" && showMeHand === "scissors") ||
  (userInput.toLowerCase() === "scissors" && showMeHand === "paper") ||
  (userInput.toLowerCase() === "reversed scissors" && showMeHand === "rock") ||
  (userInput.toLowerCase() === "reversed paper" && showMeHand === "scissors") ||
  (userInput.toLowerCase() === "reversed rock" && showMeHand === "paper");

// All cases where both parties choose the same object.
const drawCases = (userInput, showMeHand) =>
  userInput.toLowerCase() === showMeHand ||
  (userInput.toLowerCase() === "reversed scissors" &&
    showMeHand === "scissors") ||
  (userInput.toLowerCase() === "reversed rock" && showMeHand === "rock") ||
  (userInput.toLowerCase() === "reversed paper" && showMeHand === "paper");

// The game
const main = (input) => {
  let showMeHand = getRandomHand();
  let userInput = input;

  //If invalid input , return feedback.
  if (invalidCases(userInput)) {
    return `${iconForNoun(
      userInput
    )} is an invalid input, please type scissors/paper/rock to continue the game`;
  }
  //If both parties choose the same object, it's a draw.
  else if (drawCases(userInput, showMeHand)) {
    return `Draw, your ${iconForNoun(userInput)} vs system's ${iconForNoun(
      showMeHand
    )}`;
  }
  // User wins.
  else if (winCases(userInput, showMeHand)) {
    return `You won, your ${iconForNoun(
      userInput
    )} beats system's ${iconForNoun(showMeHand)}`;
  }

  // System wins.
  else
    return `You lost, system's ${iconForNoun(
      showMeHand
    )} beats your ${iconForNoun(userInput)}`;
};
