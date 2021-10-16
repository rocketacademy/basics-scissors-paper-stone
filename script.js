// definiing round outcomes count
roundCount = -1;
winCount = 0;
loseCount = 0;
drawCount = 0;

var main = function (input) {
  if (roundCount == -1) {
    roundCount += 1;
    playerName = input;
    return inputName(playerName);
  } else {
    // computer's choice
    var computer = computerChoice();
    var computerIcon = getIcon(computer);
    var playerIcon = getIcon(input);

    roundCount += 1;
    // player wins if
    // player chooses scissors, computer chooses paper
    // player chooses paper, computer chooses stone
    // player chooses stone, computer chooses scissors
    // player chooses reversed scissors, computer chooses stone
    // player chooses reversed paper, computer chooses scissors
    // player chooses reversed stone, computer chooses paper

    if (
      (input == "scissors" && computer == "paper") ||
      (input == "paper" && computer == "stone") ||
      (input == "stone" && computer == "scissors") ||
      (input == "reversed stone" && computer == "stone") ||
      (input == "reversed paper" && computer == "scissors") ||
      (input == "reversed stone" && computer == "paper")
    ) {
      winCount += 1;
      var myOutputValue = `Hello ${playerName}! <br> <br>  The computer chose ${computer} ${computerIcon}. <br> You chose ${input} ${playerIcon}. <br> <br> You win! Congrats. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round! `;
    }

    // player loses if
    // player chooses scissors, computer chooses stone
    // player chooses paper, computer chooses scissors
    // player chooses stone, computer chooses paper
    // player chooses reversed scissors, computer chooses paper
    // player chooses reversed paper, computer chooses stone
    // player chooses reversed stone, computer chooses scissors

    if (
      (input == "scissors" && computer == "stone") ||
      (input == "paper" && computer == "scissors") ||
      (input == "stone" && computer == "paper") ||
      (input == "reversed scissors" && computer == "paper") ||
      (input == "reversed paper" && computer == "stone") ||
      (input == "reversed stone" && computer == "scissors")
    ) {
      loseCount += 1;
      myOutputValue = `Hello ${playerName}! <br> <br> The computer chose ${computer} ${computerIcon}. <br> You chose ${input} ${playerIcon}. <br> <br> You lose! Bummer. <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }

    // game draws if both player and computer chooses the same

    if (
      (input == "scissors" && computer == "scissors") ||
      (input == "paper" && computer == "paper") ||
      (input == "stone" && computer == "stone") ||
      (input == "reversed scissors" && computer == "scissors") ||
      (input == "reversed paper" && computer == "paper") ||
      (input == "reversed stone" && computer == "stone")
    ) {
      drawCount += 1;
      myOutputValue = `Hello ${playerName}! <br> <br> The computer chose ${computer} ${computerIcon}. <br> You chose ${input} ${playerIcon}. <br> <br> It is a draw! <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    }

    // input validation
    // prompt if input is not scissors, paper or stone

    if (
      input != "scissors" &&
      input != "paper" &&
      input != "stone" &&
      input != "reversed scissors" &&
      input != "reversed paper" &&
      input != "reversed stone"
    ) {
      roundCount -= 1; // ignore roundCount if input is not valid
      myOutputValue = `Hello ${playerName}! <br> <br> "${input}" is not a valid choice. <br> <br> Please choose only "scissors" "paper" or "stone" to play the game.`;
    }

    var yourWinRate = ((winCount / roundCount) * 100).toFixed(2);
    var computerWinRate = ((loseCount / roundCount) * 100).toFixed(2);
    var winLossRecord = `<br> <br> Round Count: ${roundCount} <br> Win Count: ${winCount} <br> Lose Count: ${loseCount} <br> Draw Count: ${drawCount} <br> <br> Your Win Rate: ${yourWinRate}% <br> Computer's Win Rate: ${computerWinRate}%`;
  }

  myOutputValue += winLossRecord;

  return myOutputValue;
};

// function: computer random chooses scissors, paper, or stone
var computerChoice = function () {
  const game = ["scissors", "paper", "stone"];

  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);

  var computerhand = game[randomInteger];
  return computerhand;
};

var inputName = function (name) {
  return `Hello ${name}, please input 'scissors' 'paper' or 'stone' to start playing the game.`;
};

var getIcon = function (hand) {
  if (hand == "scissors" || hand == "reversed scissors") {
    return "✂️";
  }
  if (hand == "paper" || hand == "reversed paper") {
    return "🗒";
  }
  if (hand == "stone" || hand == "reversed stone") {
    return "🪨";
  }
};
