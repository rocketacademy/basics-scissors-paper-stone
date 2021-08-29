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

// checking if the user's input is valid
const inputChecking = (input) => {
  if (
    input == stone ||
    input == paper ||
    input == scissors ||
    input == reversedStone ||
    input == reversedPaper ||
    input == reversedScissors
  ) {
    return true;
  }
  return false;
};

const win = (input, comp) => {
  if (
    (input == stone && comp == scissors) ||
    (input == paper && comp == stone) ||
    (input == scissors && comp == paper) ||
    (input == reversedStone && comp == paper) ||
    (input == reversedPaper && comp == scissors) ||
    (input == reversedScissors && comp == stone)
  )
    return true;
};

// define a function to check the result
const checkResult = (input, comp) => {
  let result = "";
  if (input == comp || input == "reversed " + comp) {
    result = "It's a draw!";
  } else if (win(input, comp)) {
    result = "You won! ";
  } else {
    result = "You lose! Bummer.";
  }
  return result;
};

const main = (input) => {
  const comp = compRandom();
  const validInput = inputChecking(input);
  const result = checkResult(input, comp);

  if (validInput) {
    return `The computer chose ${comp}.<br>You chose ${input}.<br><br>${result}<br><br>Now you can type "scissors", "paper" or "stone" to play another round, or reverse it by adding the word "reversed" to your choice!`;
  }
  return `Please input 1 of "scissors", "paper", or "stone" to play the game, or reverse it by adding the word "reversed" to your choice!`;
};
