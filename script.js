// Use Math to generate system's generated input for the game
const getRandomHand = () => {
  const systemGenerateNumber = 1 + Math.floor(Math.random() * 3);
  if (systemGenerateNumber === 1) {
    return "scissors";
  } else if (systemGenerateNumber === 2) {
    return "paper";
  } else return "rock";
};

// Convert user's text input into symbol for output display
const iconForNoun = (hand) => {
  if (hand.toLowerCase() === "paper") {
    return "🧻";
  } else if (hand.toLowerCase() === "scissors") {
    return "✂️";
  } else if (hand.toLowerCase() === "rock") {
    return "💎";
  } else return hand.toLowerCase();
};

// all output messages
const myOutputValue = [
  (invalid = (a) =>
    `${iconForNoun(
      a
    )} is an invalid input.\<br>\Please type scissors/paper/rock to continue the game`),
  (draw = (a, b, c, d) =>
    `Draw.\<br>\Your ${iconForNoun(a)} vs system's ${iconForNoun(
      b
    )}.\<br>\You: ${c}\<br>\System: ${d}`),
  (win = (a, b, c, d) => `You won.\<br>\Your ${iconForNoun(
    a
  )} beats system's ${iconForNoun(b)}.\<br>\
        You: ${c}\<br>\System: ${d}`),
  (lose = (a, b, c, d) =>
    `You lost.\<br>\ System's ${iconForNoun(b)} beats your ${iconForNoun(
      a
    )}.\<br>\You: ${c}\<br>\System: ${d}`),
];

// All invalid cases of user's input
const invalidCases = (a) =>
  a.toLowerCase() !== "paper" &&
  a.toLowerCase() !== "rock" &&
  a.toLowerCase() !== "scissors";

// All cases where user wins
const winCases = (b, c) =>
  (b.toLowerCase() === "paper" && c === "rock") ||
  (b.toLowerCase() === "rock" && c === "scissors") ||
  (b.toLowerCase() === "scissors" && c === "paper");

// All cases where both parties choose the same object.
const drawCases = (d, e) => d.toLowerCase() === e;

//track scores
let userWin = 0;
let systemWin = 0;

//define game mode
let userName = "";
let gameMode = "pending for username";

// normal mode game play

const normalModeGamePlay = (userInput) => {
  let showMeHand = getRandomHand();

  if (invalidCases(userInput)) {
    //If invalid input , return feedback.
    return myOutputValue[0](userInput);
  }
  //If both parties choose the same object, it's a draw.
  else if (drawCases(userInput, showMeHand)) {
    return myOutputValue[1](userInput, showMeHand, userWin, systemWin);
  }
  // User wins.
  else if (winCases(userInput, showMeHand)) {
    //increment userWin score
    userWin += 1;
    return myOutputValue[2](userInput, showMeHand, userWin, systemWin);
  }

  // System wins.
  else if (!winCases(userInput, showMeHand)) {
    //increment systemWin score
    systemWin += 1;
    return myOutputValue[3](userInput, showMeHand, userWin, systemWin);
  }
};

// reverse mode game play

const reverseModeGamePlay = (userInput) => {
  let showMeHand = getRandomHand();

  if (invalidCases(userInput)) {
    //If invalid input , return feedback.
    return myOutputValue[0](userInput);
  }
  //If both parties choose the same object, it's a draw.
  else if (drawCases(userInput, showMeHand)) {
    return myOutputValue[1](userInput, showMeHand, userWin, systemWin);
  }
  // User wins.
  else if (!winCases(userInput, showMeHand)) {
    //increment userWin score
    userWin += 1;
    return myOutputValue[2](userInput, showMeHand, userWin, systemWin);
  }

  // System wins.
  else if (winCases(userInput, showMeHand)) {
    //increment systemWin score
    systemWin += 1;
    return myOutputValue[3](userInput, showMeHand, userWin, systemWin);
  }
};

// Main game
const main = (input) => {
  // waiting for user to enter username
  if (gameMode == "pending for username") {
    userName = input;
    gameMode = "normal";
    return `Welcome ${userName}`;
  }

  //user input to switch to reverse game mode
  if (gameMode == "normal" && input.toLowerCase() == "reverse") {
    gameMode = input.toLowerCase();
    return `Welcome to reverse mode`;
  }

  //user input to switch to normal game mode
  if (gameMode == "reverse" && input.toLowerCase() == "normal") {
    gameMode = input.toLowerCase();
    return `Welcome to normal mode`;
  }
  // game mode to execute
  switch (gameMode) {
    case "normal":
      normalGameOutput = normalModeGamePlay(input);
      return normalGameOutput;
    case "reverse":
      reverseGameOutput = reverseModeGamePlay(input);
      return reverseGameOutput;
  }
};
