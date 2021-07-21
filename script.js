// Global veriables
var userTally = 0;
var computerTally = 0;
var rounds = 0;
var userName = '';
var userChoice;

// Main function
var main = function (input) {
  // Check if user name is empty
  if (userName == '') {
    if (input == '') {
      return `Please input your name!`;
    } else {
      userName = input;
    }
    return `Welcome ${input}! Now let's play a game of Scissors Paper Stone!`;
  } else {
    // Beginning of game
    if (
      input == 'scissors' ||
      input == 'paper' ||
      input == 'stone' ||
      input == 'reversed scissors' ||
      input == 'reversed paper' ||
      input == 'reversed stone'
    ) {
      var reverseCheck = checkReverse(input);
      var computerChoice = randomChoice();
      var scoring = compareWinner(userChoice, computerChoice, reverseCheck);
      return outputMessage(scoring, userChoice, computerChoice);
    } else {
      return `"${input}" is not an option. Please enter either "scissors", "paper", or "stone" (lower case).`;
    }
  }
};

// Check reverse or normal game
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
var outputMessage = function (score, userChoice, computerChoice) {
  var message;
  var addOnMessage;
  var userEmoji = choiceToObject(userChoice);
  var computerEmoji = choiceToObject(computerChoice);

  if (score == 0) {
    message = `You chose ${userEmoji}. <br> The computer chose ${computerEmoji}. <br>It's a draw!`;
  } else if (score == 1) {
    message = `You chose ${userEmoji}. <br> The computer chose ${computerEmoji}. <br> You win!`;
  } else if (score == -1) {
    message = `You chose ${userEmoji}. <br> The computer chose ${computerEmoji}. <br> You lose!`;
  }

  if (userTally / rounds >= 0.7) {
    addOnMessage = `Wow you are doing great!`;
  } else if (userTally / rounds <= 0.3) {
    addOnMessage = `Keep going! You will get better!`;
  } else {
    addOnMessage = ``;
  }

  message =
    message +
    `<br><br> So far ${userName} has played ${rounds} games. ${userName} has won ${userTally} games (win rate = ${
      (userTally / rounds) * 100
    }%) and the computer has won ${computerTally} games (win rate = ${
      (computerTally / rounds) * 100
    }%). <br>` +
    addOnMessage;
  return message;
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
  } else if (score == -1) {
    computerTally++;
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
