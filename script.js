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

// Main function
var main = function (input) {
  var computerChoice = randomChoice();
  var reverseCheck;

  if (input == 'scissors' || input == 'paper' || input == 'stone') {
    reverseCheck = false;
  } else if (
    input == 'reversed scissors' ||
    input == 'reversed paper' ||
    input == 'reversed stone'
  ) {
    reverseCheck = true;
    if (input == 'reversed scissors') {
      input = 'scissors';
    } else if (input == 'reversed paper') {
      input = 'paper';
    } else if (input == 'reversed stone') {
      input = 'stone';
    }
  } else {
    return `"${input}" is not an option. Please enter either "scissors", "paper", or "stone" (lower case).`;
  }

  var scoring = compareWinner(input, computerChoice, reverseCheck);
  var myOutputValue = outputMessage(scoring, input, computerChoice);

  return myOutputValue;
};

// Output message
var outputMessage = function (score, userChoice, computerChoice) {
  var message;
  var userEmoji = choiceToObject(userChoice);
  var computerEmoji = choiceToObject(computerChoice);
  if (score == 0) {
    message = `You chose ${userEmoji}. <br> The computer chose ${computerEmoji}. <br><br> It's a draw!`;
  } else if (score == 1) {
    message = `You chose ${userEmoji}. <br> The computer chose ${computerEmoji}. <br><br> You win!`;
  } else if (score == -1) {
    message = `You chose ${userEmoji}. <br> The computer chose ${computerEmoji}. <br><br> You lose!`;
  }
  return message;
};

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
var compareWinner = function (user, computer, reversed) {
  var score;
  if (user == computer) {
    score = 0;
  } else if (
    (user == 'scissors' && computer == 'paper') ||
    (user == 'paper' && computer == 'stone') ||
    (user == 'stone' && computer == 'scissors')
  ) {
    if (reversed) {
      score = -1;
    } else {
      score = 1;
    }
  } else {
    if (reversed) {
      score = 1;
    } else {
      score = -1;
    }
  }
  return score;
};
