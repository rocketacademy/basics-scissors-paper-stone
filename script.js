const button = document.querySelector("#submit-button");
button.addEventListener("click", function () {
  main();
});

function main() {
  const playerInput = document.querySelector("#input-sps").value;
  const CHOICES = {
    SCISSORS: "scissors",
    PAPER: "paper",
    STONE: "stone"
  };
  const computerChoice = Object.values(CHOICES)[Math.floor(Math.random() * Object.keys(CHOICES).length)];

  let outputText = `You chose ${playerInput} and the computer chose ${computerChoice}.`;
  switch (playerInput) {
    case "scissors":
      {
        if (computerChoice === "scissors") {
          outputText += "<br>" + "It's a tie!";
        } else if (computerChoice === "stone") {
          outputText += "<br>" + "You lose!";
        } else {
          outputText += "<br>" + "You win!";
        }
        console.log("done");
        displayResults(outputText);
      }
      break;
    case "paper":
      {
        if (computerChoice === "paper") {
          outputText += "<br>" + "It's a tie!";
        } else if (computerChoice === "scissors") {
          outputText += "<br>" + "You lose!";
        } else {
          outputText += "<br>" + "You win!";
        }
        console.log("done");
        displayResults(outputText);
      }
      break;
    case "stone":
      {
        if (computerChoice === "stone") {
          outputText += "<br>" + "It's a tie!";
        } else if (computerChoice === "paper") {
          outputText += "<br>" + "You lose!";
        } else {
          outputText += "<br>" + "You win!";
        }
        console.log("done");
        displayResults(outputText);
      }
      break;
    default:
      displayResults("Please enter a valid input");
      break;
  }
};

function displayResults(result) {
  let outputElement = document.querySelector("#output-div");
  outputElement.innerHTML = result;
}