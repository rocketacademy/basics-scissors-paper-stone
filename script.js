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
const invalidMessage = (a) =>
  `${iconForNoun(
    a
  )} is an invalid input.\<br>\Please type scissors/paper/rock to continue the game.`;
const drawMessage = (a, b, c, d, e) =>
  `Draw.\<br>\Your ${iconForNoun(a)} vs system's ${iconForNoun(
    b
  )}.\<br>\You: ${c}\<br>\System: ${d}.\<br>\Winning so far is ${e}.`;
const winMessage = (a, b, c, d, e) => `You won.\<br>\Your ${iconForNoun(
  a
)} beats system's ${iconForNoun(b)}.\<br>\
        You: ${c}\<br>\System: ${d}.\<br>\Winning so far is ${e}.`;
const loseMessage = (a, b, c, d, e) =>
  `You lost.\<br>\ System's ${iconForNoun(b)} beats your ${iconForNoun(
    a
  )}.\<br>\You: ${c}\<br>\System: ${d}.\<br>\Winning so far is ${e}.`;
const koreanDrawMessage = (a, b, c, d, e) =>
  `${drawMessage(a, b, c, d, e)}\<br>\ Ultimate winner is ${e}.`;
const koreanWinMessage = (a, b, c, d, e) =>
  `${winMessage(a, b, c, d, e)}\<br>\ You shout "muk-jji-ppa!".`;
const koreanLoseMessage = (a, b, c, d, e) =>
  `${loseMessage(a, b, c, d, e)}\<br>\ System shouts "muk-jji-ppa!".`;

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

// normal reverse korean mode game play
const normalReversedKoreanGamePlay = (userInput, isReversed, isKorean) => {
  let showMeHand = getRandomHand();
  let winner;
  //If invalid input , return feedback.
  if (invalidCases(userInput)) {
    return invalidMessage(userInput);
  }
  //If both parties choose the same object, it's a draw.
  else if (drawCases(userInput, showMeHand)) {
    winner = winnerOfGame();
    //return ultimate winner declaration when it is korean mode
    return isKorean
      ? koreanDrawMessage(userInput, showMeHand, userWin, systemWin, winner)
      : drawMessage(userInput, showMeHand, userWin, systemWin, winner);
  }
  // User wins.
  else if (isReversed ^ winCases(userInput, showMeHand)) {
    //increment userWin score
    userWin += 1;
    winner = winnerOfGame();
    return isKorean
      ? koreanWinMessage(userInput, showMeHand, userWin, systemWin, winner)
      : winMessage(userInput, showMeHand, userWin, systemWin, winner);
  }
  // System wins.
  else if (!(isReversed ^ winCases(userInput, showMeHand))) {
    //increment systemWin score
    systemWin += 1;
    winner = winnerOfGame();
    return isKorean
      ? koreanLoseMessage(userInput, showMeHand, userWin, systemWin, winner)
      : loseMessage(userInput, showMeHand, userWin, systemWin, winner);
  }
};

//track scores
let userWin = 0;
let systemWin = 0;
//track winner
const winnerOfGame = () =>
  systemWin > userWin ? "System" : systemWin < userWin ? "You" : "Nobody";
//reset Game when switch mode
const resetGame = () => {
  userWin = 0;
  systemWin = 0;
};
//define default game mode as pending for username
let userName = "";
let gameMode = "pending for username";

// Main game
const main = (input) => {
  // waiting for user to enter username
  if (gameMode == "pending for username") {
    userName = input;
    gameMode = "normal";
    return `Welcome ${userName}.\<br>\You may choose to play normal, reverse, or korean game.`;
  }
  //user input to switch game mode
  if (
    input.toLowerCase() == "reverse" ||
    input.toLowerCase() == "normal" ||
    input.toLowerCase() == "korean"
  ) {
    gameMode = input.toLowerCase();
    resetGame();
    return `Welcome to ${input.toLowerCase()} mode`;
  }
  // game mode to execute
  switch (gameMode) {
    case "normal":
      return normalReversedKoreanGamePlay(input, false, false);
    case "reverse":
      return normalReversedKoreanGamePlay(input, true, false);
    case "korean":
      return normalReversedKoreanGamePlay(input, false, true);
  }
};
