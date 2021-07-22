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
  (draw = (a, b, c, d, e) =>
    `Draw.\<br>\Your ${iconForNoun(a)} vs system's ${iconForNoun(
      b
    )}.\<br>\You: ${c}\<br>\System: ${d}.\<br>\Winning so far is ${e}`),
  (win = (a, b, c, d, e) => `You won.\<br>\Your ${iconForNoun(
    a
  )} beats system's ${iconForNoun(b)}.\<br>\
        You: ${c}\<br>\System: ${d}.\<br>\Winning so far is ${e}`),
  (lose = (a, b, c, d, e) =>
    `You lost.\<br>\ System's ${iconForNoun(b)} beats your ${iconForNoun(
      a
    )}.\<br>\You: ${c}\<br>\System: ${d}.\<br>\Winning so far is ${e}`),
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

//track winner
const winnerOfGame = () =>
  systemWin > userWin ? "System" : systemWin < userWin ? "You" : "Nobody";

//define game mode
let userName = "";
let gameMode = "pending for username";

// normal and reverse mode game play

const normalReversedGamePlay = (userInput, isReversed) => {
  let showMeHand = getRandomHand();

  if (invalidCases(userInput)) {
    //If invalid input , return feedback.
    return myOutputValue[0](userInput);
  }
  //If both parties choose the same object, it's a draw.
  else if (drawCases(userInput, showMeHand)) {
    winner = winnerOfGame();
    return myOutputValue[1](userInput, showMeHand, userWin, systemWin, winner);
  }
  // User wins.
  else if (isReversed ^ winCases(userInput, showMeHand)) {
    //increment userWin score
    userWin += 1;
    winner = winnerOfGame();
    return myOutputValue[2](userInput, showMeHand, userWin, systemWin, winner);
  }

  // System wins.
  else if (!(isReversed ^ winCases(userInput, showMeHand))) {
    //increment systemWin score
    systemWin += 1;
    winner = winnerOfGame();
    return myOutputValue[3](userInput, showMeHand, userWin, systemWin, winner);
  }
};

// Main game
const main = (input) => {
  // waiting for user to enter username
  if (gameMode == "pending for username") {
    userName = input;
    gameMode = "normal";
    return `Welcome ${userName}. You may play normal or reverse game.`;
  }

  //user input to switch game mode
  if (
    (gameMode !== "pending for username" && input.toLowerCase() == "reverse") ||
    input.toLowerCase() == "normal"
  ) {
    gameMode = input.toLowerCase();
    return `Welcome to ${input.toLowerCase()} mode`;
  }
  // game mode to execute
  switch (gameMode) {
    case "normal":
      normalGameOutput = normalReversedGamePlay(input, false);
      return normalGameOutput;
    case "reverse":
      reverseGameOutput = normalReversedGamePlay(input, true);
      return reverseGameOutput;
  }
};
