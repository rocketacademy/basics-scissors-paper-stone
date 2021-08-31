// Initialise an object that contains the user's data and user-specific functions.
var userData = {
  name: '',
  wins: 0,
  losses: 0,
  draws: 0,
  calculateTurns() {
    return this.wins + this.losses + this.draws;
  },
  calculateWinPercentage() {
    return (((this.wins + 0.5 * this.draws) / this.calculateTurns()) * 100).toFixed(2);
  },
  getPerformanceMessage() {
    return (this.calculateWinPercentage() > 50) ? "Pretty good!" : "Keep trying!";
  }
};

// Initialise the current game mode and Korean SPS tracker variables.
var gameMode = '';
var trackKorean = '';

// Initialise and format game mode variables.
var normal = 'Normal SPS 🎮';
var reverse = 'Reverse SPS 🔄';
var korean = 'Korean SPS 🇰🇷';
var computer = 'Computer vs. Computer 🤖';

// Initialise an object that converts the user's input to game mode.
var gameModeMap = {
  normal,
  reverse,
  korean,
  computer,
  1: normal,
  2: reverse,
  3: korean,
  4: computer
};

// Initialise and format item variables (text with emoji).
var scissors = 'scissors ✂️';
var paper = 'paper 📃';
var stone = 'stone 💎';

// Initialise an object that converts the user's input to formatted text.
var itemMap = {
  scissors,
  paper,
  stone
};

// Initialise an object that defines game rules (key beats value).
var winMap = {
  [scissors]: paper,
  [paper]: stone,
  [stone]: scissors
};

// Initialise game outcome message variables (win, lose, draw).
var winMessage = "You won! Congrats!";
var loseMessage = "You lost! Bummer.";
var drawMessage = "It's a draw! No one won!";
var koreanDrawMessage = "It's a draw; the game ends!";

// Define a function that allows the user to select the game mode.
var selectGameMode = function (userInput) {
  var output = `Hi ${userData.name}! `;

  var input = userInput.replace(/\s/g, ' ').split(' ')[0];
  if (gameModeMap[input]) {
    gameMode = gameModeMap[input];
  }

  if (gameMode) {
    output += `You selected the ${gameMode} game mode.<br><br>`;
    if (gameMode == computer) {
      return output + "Click 'Submit' to play the game!";
    }
    return output + "Enter scissors, paper or stone to start the game!";
  }
  return output + (`Please select any one of the game modes below:<br><br>
  1. ${normal}<br>2. ${reverse}<br>3. ${korean}<br>4. ${computer}`);
};

/* Define a pre-game function that validates the user's name input and allows the user to 
select game modes. */
var preGameSetUp = function (userInput) {
  if (!userData.name) {
    if (!userInput || !Number.isNaN(Number(userInput))) {
      return "Please enter a valid user name!";
    }
    userData.name = userInput;
  }
  return selectGameMode(userInput.toLowerCase());
};

// Define a function that randomly chooses scissors, paper or stone.
var chooseRandomItem = function () {
  var itemNum = Math.floor(Math.random() * 3);

  if (itemNum == 1) {
    return scissors;
  }
  if (itemNum == 2) {
    return paper;
  }
  return stone;
};

// Define a function that controls the user's item input based on the game mode.
var userInputController = function (userInput) {
  var userChoice;

  if (gameMode != computer) {
    userChoice = itemMap[userInput.toLowerCase().replace(/reversed|\s/g, '')];
    if (!userChoice) {
      return false;
    }
  } else {
    userChoice = chooseRandomItem();
  }
  return userChoice;
};

/* Define a helper function that updates user data (win-loss record). If the update parameter is 
false, user data will not be updated (instant return). */
var updateUserData = function (update, outcome) {
  if (!update) {
    return;
  }

  if (outcome == drawMessage) {
    userData.draws += 1;
  } else if (outcome == winMessage) {
    userData.wins += 1;
  } else if (outcome == loseMessage) {
    userData.losses += 1;
  }
};

// Define a base function that determines the user's game result (win, lose or draw).
var determineResultBase = function (userChoice, programChoice, reversed, update = true) {
  if (userChoice == programChoice) {
    updateUserData(update, drawMessage);
    return drawMessage;
  }
  if ((!reversed && winMap[userChoice] == programChoice) ||
    (reversed && winMap[userChoice] != programChoice)) {
    updateUserData(update, winMessage);
    return winMessage;
  }
  updateUserData(update, loseMessage);
  return loseMessage;
};

/* Define a helper function for the Korean SPS game mode that updates the user's data and 
output (when there is a draw). */
var evaluateKorean = function () {
  if (!trackKorean) {
    return "This starting round was a draw!";
  }
  if (trackKorean == winMessage) {
    userData.wins += 1;
  } else {
    userData.losses += 1;
  }
  return koreanDrawMessage + ' ' + trackKorean;
};

/* Define a helper function for the Korean SPS game mode that determines the user's game 
result. If it is a draw, evaluate the condition by invoking the evaluateKorean() function. */
var determineResultKorean = function (userChoice, programChoice, reversed) {
  if (userChoice != programChoice) {
    trackKorean = determineResultBase(userChoice, programChoice, reversed, false);
    if (trackKorean == winMessage) {
      return "You won this round!";
    }
    return "You lost this round!";
  }
  return evaluateKorean();
};

// Define a function that controls the game, depending on the game mode.
var gameController = function (userChoice, programChoice, reversed) {
  if (gameMode == normal || gameMode == computer) {
    return determineResultBase(userChoice, programChoice, reversed);
  }
  if (gameMode == reverse) {
    return determineResultBase(userChoice, programChoice, !reversed);
  }
  var output = determineResultKorean(userChoice, programChoice, reversed);
  if (!trackKorean || userChoice != programChoice) {
    return output + "<br><br>Type scissors, paper or stone to continue!";
  }
  trackKorean = '';
  return output;
};

// Define a function that outputs the user's game stats.
var getUserStats = function () {
  return (`So far, ${userData.name}, you've been winning 
  ${userData.wins}/${userData.calculateTurns()} turns, and your winning percentage is 
  ${userData.calculateWinPercentage()}%. ${userData.getPerformanceMessage()}`);
};

// Define the main function.
var main = function (input) {
  /* If the game mode has not been selected, prompt the user to enter a name and select a game 
  mode by passing the user's input as an argument to the preGameSetUp() function. */
  if (!gameMode) {
    return preGameSetUp(input);
  }

  /* Validate/assign the user's item input by invoking the userInputController() function. If 
  invalid, return an error message. */
  var userChoice = userInputController(input);
  if (!userChoice) {
    return "There are only 3 input options: scissors, paper or stone. Please try again.";
  }

  // Initialise programChoice variable as a random item by invoking the chooseRandomItem() function.
  var programChoice = chooseRandomItem();

  // Initialise output variable as the start of game prompt, both computer's and user's choices.
  var output = `The computer chose ${programChoice}.<br>You chose ${userChoice}.<br><br>`;

  // Check if the user's input contains 'reversed'. If so, add a notice to the output variable.
  var reversed = input.toLowerCase().includes('reversed');
  if (reversed) {
    output += "Game rules are reversed! 😜<br><br>";
  }

  // Add game results to output by invoking the gameController() function.
  output += gameController(userChoice, programChoice, reversed);

  // If the Korean game mode is ongoing (does not contain koreanDrawMessage), return output.
  if (gameMode == korean && !output.includes(koreanDrawMessage)) {
    return output;
  }

  // Return output combined with the user's game details and the end of game prompt.
  return output + "<br><br>" + getUserStats() + "<br><br>" +
    `Now you can type scissors, paper or stone to play another round of ${gameMode}!`;
};
