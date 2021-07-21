// Global veriables
var userTally = 0;
var computerTally = 0;
var rounds = 0;
var userName = '';
var gameModeChoice = '';
var gameModeText = '';
var gameModeMessage = `Please select a game mode: <br>
    Enter "1" for regular Scissors Paper Stone <br>
    Enter "2" for reversed Scissors Paper Stone <br>
    Enter "3" for Korean Scissors Paper Stone <br>
    Enter "4" for computer vs computer Scissors Paper Stone`;
var mostRecentWinner = '';

// Main function
var main = function (input) {
  // Prompt user name
  if (userName == '') {
    if (input == '') {
      return `Please input your name!`;
    } else {
      userName = input;
      return `Welcome ${input}! <br>` + gameModeMessage;
    }
  } else {
    // Prompt game mode
    if (gameModeChoice == '') {
      if (Number.isNaN(Number(input)) || input > 4 || input < 1) {
        return `Invalid input! <br>` + gameModeMessage;
      } else {
        gameModeChoice = Number(input);
        if (gameModeChoice == 1) {
          gameModeText = 'regular Scissors Paper Stone';
        } else if (gameModeChoice == 2) {
          gameModeText = 'reversed Scissors Paper Stone';
        } else if (gameModeChoice == 3) {
          gameModeText = 'Korean Scissors Paper Stone';
        } else if (gameModeChoice == 4) {
          gameModeText = 'computer vs computer Scissors Paper Stone';
        }
      }
      return `You have selected ${gameModeText}. <br> Enter "scissors", "paper", or "stone" to play.`;
    } else {
      if (input == 'scissors' || input == 'paper' || input == 'stone') {
        var userChoice = input;
        var reverseCheck = 1;
        var computerChoice = randomChoice();
        if (gameModeChoice == 2) {
          reverseCheck = -1;
        }
        if (gameModeChoice == 4) {
          userChoice = randomChoice();
        }
        var scoring = compareWinner(userChoice, computerChoice, reverseCheck);
        return outputMessage(
          scoring,
          userChoice,
          computerChoice,
          gameModeChoice
        );
      } else {
        return `"${input}" is not an option. Please enter either "scissors", "paper", or "stone" (lower case).`;
      }
    }
  }
};

// Check reverse or normal game
// This function is no longer used after making Reverse a standalone game mode
var checkReverse = function (input) {
  var reverseCheck;
  if (input == 'scissors' || input == 'paper' || input == 'stone') {
    userChoice = input;
    return 1;
  } else if (
    input == 'reversed scissors' ||
    input == 'reversed paper' ||
    input == 'reversed stone'
  ) {
    userChoice = input.replace('reversed', '').trim();
    return -1;
  }
};

// Output message
var outputMessage = function (score, userChoice, computerChoice, mode) {
  var baseMessage;
  var addOnMessage;
  var comVsComMessage = '';
  var userEmoji = choiceToObject(userChoice);
  var computerEmoji = choiceToObject(computerChoice);
  if (mode == 4) {
    comVsComMessage = `(selected by computer) `;
  }
  if (score == 0) {
    baseMessage = `You ${comVsComMessage}chose ${userEmoji}. <br> The computer chose ${computerEmoji}. <br>It's a draw!`;
  } else if (score == 1) {
    baseMessage = `You ${comVsComMessage}chose ${userEmoji}. <br> The computer chose ${computerEmoji}. <br> You win!`;
  } else if (score == -1) {
    baseMessage = `You ${comVsComMessage}chose ${userEmoji}. <br> The computer chose ${computerEmoji}. <br> You lose!`;
  }
  if (score == 0 && mode == 3 && mostRecentWinner != '') {
    addOnMessage = `The ultimate  winner is ${mostRecentWinner}!`;
  } else {
    if (userTally / rounds >= 0.7) {
      addOnMessage = `Wow you are doing great!`;
    } else if (userTally / rounds <= 0.3) {
      addOnMessage = `Keep going! You will get better!`;
    } else {
      addOnMessage = ``;
    }
  }
  baseMessage =
    baseMessage +
    `<br><br> So far ${userName} has played ${rounds} games. ${userName} has won ${userTally} games (win rate = ${
      (userTally / rounds) * 100
    }%) and the computer has won ${computerTally} games (win rate = ${
      (computerTally / rounds) * 100
    }%). <br>` +
    addOnMessage;
  return baseMessage;
};

// Convert choice to emoji object
var choiceToObject = function (choice) {
  var object;
  if (choice == 'scissors') {
    object = 'scissors ✂️';
  } else if (choice == 'paper') {
    object = 'paper 📄';
  } else if (choice == 'stone') {
    object = 'stone 🗿';
  }
  return object;
};

// Compare user's choice vs computer's choice
var compareWinner = function (user, computer, reverseCheck) {
  var score;
  if (user == computer) {
    score = 0;
  } else if (
    (user == 'scissors' && computer == 'paper') ||
    (user == 'paper' && computer == 'stone') ||
    (user == 'stone' && computer == 'scissors')
  ) {
    score = 1 * reverseCheck;
  } else {
    score = -1 * reverseCheck;
  }
  rounds++;
  if (score == 1) {
    userTally++;
    mostRecentWinner = 'YOU';
  } else if (score == -1) {
    computerTally++;
    mostRecentWinner = 'COMPUTER';
  }
  return score;
};

// Randomly select a choice for computer
var randomChoice = function () {
  var choiceNumber = Math.ceil(Math.random() * 3);
  var choiceText;
  if (choiceNumber == 1) {
    choiceText = 'scissors';
  } else if (choiceNumber == 2) {
    choiceText = 'paper';
  } else if (choiceNumber == 3) {
    choiceText = 'stone';
  }
  return choiceText;
};
