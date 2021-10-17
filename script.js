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
const GameMode = Object.freeze({
  Normal: 0,
  Reversed: 1,
  Korean: 2
});
const GameState = Object.freeze({
  EnterName: 0,
  InGame: 1
});
const KoreanGameScore = Object.freeze({
  PlayerWins: 0,
  ComputerWins: 1
});

const programState = {
  userName: null,
  koreanGameState: {
    isFinalRound: false,
    score: -1
  },
  gameMode: GameMode.Normal,
  gameState: GameState.EnterName,
  gameScore: {
    wins: 0,
    losses: 0,
    draws: 0
  }
};

button.addEventListener("click", main);
instructionsText.innerHTML = "Enter your name:";

function main() {
  if (programState.gameState === GameState.EnterName) {
    programState.userName = document.querySelector("#input-sps").value;
    programState.gameState = GameState.InGame;
    document.querySelector("#input-sps").value = "";
    instructionsText.innerHTML = `Hello, ${programState.userName}!` +
      "<br>" + "Available modes are <code>reversed</code>, or <code>korean</code>. Refresh the page to reset the game." +
      "<br>" + "Otherwise, enter scissors, paper or stone (enter random for a random choice):";
  } else {
    const rawInput = String(document.querySelector("#input-sps").value);

    switch (rawInput) {
      case "reversed":
        {
          if (programState.gameMode !== GameMode.Reversed) {
            programState.gameMode = GameMode.Reversed;
            document.querySelector("#input-sps").value = "";
            instructionsText.innerHTML = `Reversed mode activated! Enter scissors, paper or stone (enter random for a random choice):`;
          }
        }
        break;
      case "korean":
        {
          if (programState.gameMode !== GameMode.Korean) {
            programState.gameMode = GameMode.Korean;
            document.querySelector("#input-sps").value = "";
            instructionsText.innerHTML = `Korean mode activated! Enter scissors, paper or stone (enter random for a random choice):`;
          }
        }
        break;
      case "random":
        {
          const randomIndex = Math.floor(Math.random() * Object.keys(Choices).length);
          const randomChoice = Object.values(Choices)[randomIndex];
          runGame(randomChoice);
        }
        break;
      default:
        runGame(rawInput);
        break;
    }
  }
}

function runGame(rawInput) {
  const randomIndex = Math.floor(Math.random() * Object.keys(Choices).length);
  const computerChoice = Object.values(Choices)[randomIndex];

  let playerInput = null;
  let winState = null;

  Object.values(Choices).forEach((value) => {
    if (rawInput.includes(value)) {
      playerInput = value;
    }
  });

  if (playerInput === null) {
    displayResults("Please enter a valid input");
  } else {
    winState = getWinState(playerInput, computerChoice, programState.gameMode);
    if (programState.gameMode != GameMode.Korean) {
      calculateScore(playerInput, computerChoice, winState);
    }
  }
}

function getWinState(playerInput, computerChoice, gameMode) {
  let winState = null;
  // Check default win state
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
      // NOTE: Error checking should be done before calling this function
      break;
  }

  console.log("Checking state...");

  // Special cases to change winState
  switch (gameMode) {
    case GameMode.Reversed:
      {
        if (winState !== GameEndState.Draw) {
          winState = winState == GameEndState.Win ? GameEndState.Lose : GameEndState.Win;
        }
      }
      break;
    case GameMode.Korean:
      {
        let outputText = `You chose ${playerInput} and the computer chose ${computerChoice}.`;
        outputText += "<br><br>";

        if (programState.koreanGameState.isFinalRound === false) {
          if (winState === GameEndState.Win) {
            programState.koreanGameState.score = KoreanGameScore.PlayerWins;
            programState.koreanGameState.isFinalRound = true;
            outputText += "<b>You're winning so far!</b>";
          } else if (winState === GameEndState.Lose) {
            programState.koreanGameState.score = KoreanGameScore.ComputerWins;
            programState.koreanGameState.isFinalRound = true;
            outputText += "<b>You're losing so far!</b>";
          } else if (winState === GameEndState.Draw) {
            programState.koreanGameState.score = -1;
            outputText += "<b>It's a tie, let's go again!</b>";
          } else {
            programState.koreanGameState.score = -1;
            outputText += "<b>ERROR: Invalid game state!</b>";
          }

          outputText += "<br><br>Click 'Submit' to continue until a tie is reached.";

          displayResults(outputText);
        } else {
          if (winState === GameEndState.Draw) {
            outputText += "<b>Game is tied!</b>";

            if (programState.koreanGameState.score === KoreanGameScore.PlayerWins) {
              outputText += "<br><br>You are the ultimate winner!";
            } else if (programState.koreanGameState.score === KoreanGameScore.ComputerWins) {
              outputText += "<br><br>The computer is the ultimate winner!";
            } else{
              outputText += "<b>ERROR: Invalid game state!</b>";
            }

            displayResults(outputText);
            // Reset state
            programState.koreanGameState.isFinalRound = false;
            programState.koreanGameState = -1;
          } else {
            if (winState === GameEndState.Win) {
              programState.koreanGameState.score = KoreanGameScore.PlayerWins;
              outputText += "<b>You're winning, but you can't win unless you tie!</b>";
            } else if (winState === GameEndState.Lose) {
              programState.koreanGameState.score = KoreanGameScore.ComputerWins;
              outputText += "<b>You're going to lose unless there's a tie!</b>";
            } else {
              programState.koreanGameState.score = -1;
              outputText += "<b>ERROR: Invalid game state!</b>";
            }

            displayResults(outputText);
          }
        }
      }
      break;
  }

  return winState;
}

function calculateScore(playerInput, computerChoice, winState) {
  let outputText = `You chose ${playerInput} and the computer chose ${computerChoice}.`;

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
