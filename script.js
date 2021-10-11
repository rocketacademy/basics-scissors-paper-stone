const button = document.querySelector("#submit-button");
button.addEventListener("click", main);

function main() {
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
  const randomIndex = Math.floor(Math.random() * Object.keys(Choices).length);
  const computerChoice = Object.values(Choices)[randomIndex];
  const rawInput = String(document.querySelector("#input-sps").value);
  let playerInput = null;
  let winState = null;

  Object.values(Choices).forEach(value => {
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

  outputText += "<br>";
  if (winState === GameEndState.Win) {
    outputText += "<b>You win!</b>";
  } else if (winState === GameEndState.Lose) {
    outputText += "<b>You lose!</b>";
  } else if (winState === GameEndState.Draw) {
    outputText += "<b>It's a tie!</b>";
  } else {
    outputText += "<b>ERROR: Invalid game state!</b>";
  }

  displayResults(outputText);
}

function displayResults(result) {
  const outputElement = document.querySelector("#output-div");
  outputElement.innerHTML = result;
}