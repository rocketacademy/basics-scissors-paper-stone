const button = document.querySelector("#submit-button");
const instructionsText = document.querySelector("#instructions");

const Choices = Object.freeze({
  Scissors: "scissors",
  Paper: "paper",
  Stone: "stone"
});
const GameEndState = Object.freeze({
  Win: 0,
  Lose: 1,
  Draw: -1
});

let programState = {
  userName: null,
  gameScore: {
    wins: 0,
    losses: 0,
    draws: 0
  }
};

button.addEventListener("click", main);
instructionsText.innerHTML = "Enter your name:";

function main() {
  if (programState.userName === null) {
    programState.userName = document.querySelector("#input-sps").value;
    document.querySelector("#input-sps").value = "";
    instructionsText.innerHTML = `Hello, ${programState.userName}! Enter scissors, paper or stone:`;
  } else {
    runGame();
  }
}

function runGame() {
  const randomIndex = Math.floor(Math.random() * Object.keys(Choices).length);
  const computerChoice = Object.values(Choices)[randomIndex];
  const rawInput = String(document.querySelector("#input-sps").value);
  let playerInput = null;
  let winState = null;

  Object.values(Choices).forEach((value) => {
    if (rawInput.includes(value)) {
      playerInput = value;
    }
  });

  switch (playerInput) {
    case Choices.Scissors:
      {
        if (computerChoice === Choices.Scissors) {
          winState = GameEndState.Draw;
        } else if (computerChoice === Choices.Stone) {
          winState = GameEndState.Lose;
        } else {
          winState = GameEndState.Win;
        }
      }
      break;
    case Choices.Paper:
      {
        if (computerChoice === Choices.Paper) {
          winState = GameEndState.Draw;
        } else if (computerChoice === Choices.Scissors) {
          winState = GameEndState.Lose;
        } else {
          winState = GameEndState.Win;
        }
      }
      break;
    case Choices.Stone:
      {
        if (computerChoice === Choices.Stone) {
          winState = GameEndState.Draw;
        } else if (computerChoice === Choices.Paper) {
          winState = GameEndState.Lose;
        } else {
          winState = GameEndState.Win;
        }
      }
      break;
    default:
      displayResults("Please enter a valid input");
      break;
  }

  let outputText = `You chose ${playerInput} and the computer chose ${computerChoice}.`;
  if (rawInput.startsWith("reversed") && winState != GameEndState.Draw) {
    winState = winState == GameEndState.Win ? GameEndState.Lose : GameEndState.Win;
    outputText += "<br>";
    outputText += "<b>REVERSE MODE ACTIVATED</b>";
  }

  outputText += "<br><br>";
  if (winState === GameEndState.Win) {
    programState.gameScore.wins++;
    outputText += "<b>You win!</b>";
  } else if (winState === GameEndState.Lose) {
    programState.gameScore.losses++;
    outputText += "<b>You lose!</b>";
  } else if (winState === GameEndState.Draw) {
    programState.gameScore.draws++;
    outputText += "<b>It's a tie!</b>";
  } else {
    outputText += "<b>ERROR: Invalid game state!</b>";
  }

  outputText += "<br><br>" +
    "Your score so far:<br>" +
    `Wins: ${programState.gameScore.wins}<br>` + 
    `Losses: ${programState.gameScore.losses}<br>` +
    `Draws: ${programState.gameScore.draws}`;
    

  if (programState.gameScore.wins > programState.gameScore.losses) {
    outputText += "<br><br>" +
      `${programState.userName}, you're on a winning streak!`;
  } else if (programState.gameScore.losses > programState.gameScore.wins) {
    outputText += "<br><br>" +
      `Sorry ${programState.userName}, maybe you could try again?`;
  }

  displayResults(outputText);
}

function displayResults(result) {
  const outputElement = document.querySelector("#output-div");
  outputElement.innerHTML = result;
}
