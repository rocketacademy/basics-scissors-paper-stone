// Initialize variables
const stone = "stone";
const paper = "paper";
const scissors = "scissors";
const reversedStone = "reversed stone";
const reversedPaper = "reversed paper";
const reversedScissors = "reversed scissors";
let playerScores = 0;
let compScores = 0;
let draws = 0;
const userName = prompt("Please enter your name here :");
if (userName) {
  alert(
    "Start playing Scissors Paper Stone by entering one of the 3 objects or reverse it by adding the word 'reversed' to your choice!"
  );
}
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
}; // return win and lost, make it as a variables

// define a function to check the result
const checkResult = (player, comp) => {
  let result = "";
  if (player == comp || player == "reversed " + comp) {
    result = "It's a draw!";
    draws += 1;
  } else if (doesPlayerWin(player, comp)) {
    //make this win and los a var
    result = "You won! ";
    playerScores += 1;
  } else {
    result = "You lose! Bummer.";
    compScores += 1;
  }
  return result;
};

const generateScoreMessage = (playerScores, compScores) => {
  if (playerScores < compScores) {
    return "Keep going.";
  } else {
    return "Pretty good!";
  }
};

// generate object's icon
const objectIcon = {
  scissors: "✌🏻",
  paper: "🤚🏻",
  stone: "✊🏻",
  "reversed paper": "🤚🏻",
  "reversed scissors": "✌🏻",
  "reversed stone": "✊🏻",
};
git;

// play SPS with user input, return game result.
const main = (input) => {
  const comp = compRandom();
  const player = input;
  const result = checkResult(player, comp);
  let turns = playerScores + compScores + draws;
  let scoreMessage = generateScoreMessage(playerScores, compScores);

  if (inputChecking(input)) {
    return `The computer chose ${comp} ${objectIcon[comp]} .<br>You chose ${player} ${objectIcon[player]}.<br><br>${result}<br><br>So far ${userName}, you've been winning ${playerScores}/${turns} turns and ${draws} draws. ${scoreMessage}<br><br>Now you can type "scissors", "paper" or "stone" to play another round, or reverse it by adding the word "reversed" to your choice!`;
  }
  return `Please input 1 of "scissors", "paper", or "stone" to play the game, or reverse it by adding the word "reversed" to your choice!`;
};
