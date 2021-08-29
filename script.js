// Initialize variables
const stone = "stone";
const paper = "paper";
const scissors = "scissors";
const reversedStone = "reversed stone";
const reversedPaper = "reversed paper";
const reversedScissors = "reversed scissors";

// define a function that randomly choosesstone, paper, scissors
const compRandom = () => {
  const compRandomChoice = Math.floor(Math.random() * 3) + 1;
  if (compRandomChoice == 1) {
    return stone;
  }
  if (compRandomChoice == 2) {
    return paper;
  }
  return scissors;
};

const validInput = {
  stone,
  paper,
  scissors,
  "reversed stone": reversedStone,
  "reversed paper": reversedPaper,
  "reversed scissors": reversedScissors,
};
// checking if the user's input is valid
const inputChecking = (input) => {
  if (input == validInput[input]) {
    return true;
  }
  return false;
};

// checking if player wins
const doesPlayerWin = function (player, comp) {
  return (
    (player == stone && comp == scissors) ||
    (player == paper && comp == stone) ||
    (player == scissors && comp == paper) ||
    (player == reversedStone && comp == paper) ||
    (player == reversedPaper && comp == scissors) ||
    (player == reversedScissors && comp == stone)
  );
};

// define a function to check the result
const checkResult = (player, comp) => {
  let result = "";
  if (player == comp || player == "reversed " + comp) {
    result = "It's a draw!";
  } else if (doesPlayerWin(player, comp)) {
    result = "You won! ";
  } else {
    result = "You lose! Bummer.";
  }
  return result;
};

// play SPS with user input, return game result.
const main = (input) => {
  const comp = compRandom();
  const player = input;
  const result = checkResult(player, comp);

  if (inputChecking(input)) {
    return `The computer chose ${comp}.<br>You chose ${player}.<br><br>${result}<br><br>Now you can type "scissors", "paper" or "stone" to play another round, or reverse it by adding the word "reversed" to your choice!`;
  }
  return `Please input 1 of "scissors", "paper", or "stone" to play the game, or reverse it by adding the word "reversed" to your choice!`;
};
