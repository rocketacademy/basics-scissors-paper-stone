// Scissors-Paper-Stone Game V1

// Create array for options available
var options = ['scissors ✂', 'paper 🗒', 'stone 🗻'];

// Initialise user's score counter (win/draws/win-rate)
var totalTurns = 1;
var scoreCounter = 0;
var drawCounter = 0;
var winRate = 0;

// Create a random number generator to randomly select one of the options
var randomNumber = function () {
  var randInt = Math.floor(Math.random() * 3);
  return randInt;
};

// Get the user's name
var userName = prompt('Key in your name to begin.');

var main = function (input) {
  // Generate a random selection of SPS for the computer
  var randomSelector = randomNumber();
  var computerChoice = options[randomSelector];
  // computerChoice = 'scissors ✂'; // Set early return

  // Ensure user only keys in the available options
  if (input != 'scissors' && input != 'stone' && input != 'paper') {
    return 'Oops. Please enter one of these options only: scissors, paper, stone';
  }

  var outputValue = `The computer chose ${computerChoice} <br>
                       You chose ${input} `;

  // Conditions for determining a winner:
  // 1) Scissors Wins Paper
  if (input == 'scissors' && computerChoice == 'paper 🗒') {
    scoreCounter += 1;
    outputValue += '✂ <br> <br> You win! Awesome.';
  } else if (computerChoice == 'scissors ✂' && input == 'paper') {
    outputValue += '🗒 <br> <br> You lose, bummer..';
  }

  // 2) Paper Wins Stone
  if (input == 'paper' && computerChoice == 'stone 🗻') {
    scoreCounter += 1;
    outputValue += '🗒 <br> <br> You win! Awesome.';
  } else if (computerChoice == 'paper 🗒' && input == 'stone') {
    outputValue += '🗻 <br> <br> You lose, bummer..';
  }

  // 3) Stone Wins Scissors
  if (input == 'stone' && computerChoice == 'scissors ✂') {
    scoreCounter += 1;
    outputValue += '🗻 <br> <br>You win! Awesome.';
  } else if (computerChoice == 'stone 🗻' && input == 'scissors') {
    outputValue += '✂ <br> <br> You lose, bummer..';
  }

  // 4) Draw if they are the same
  if ((computerChoice == 'stone 🗻' && input == 'stone') || (computerChoice == 'scissors ✂' && input == 'scissors') || (computerChoice == 'paper 🗒' && input == 'paper')) {
    drawCounter += 1;
    outputValue += '<br><br> It is a draw!<br>';
  }

  // Calculate winning rate
  winRate = (scoreCounter / totalTurns) * 100;

  // Include more game information
  var gameInfo = ` So far ${userName}, you've been winning ${scoreCounter} / ${totalTurns} turns. <br><br>
  That is a win-rate of ${winRate.toFixed(1)}%. <br>
  You also drew ${drawCounter} times.`;

  // Keep track of number of rounds played
  totalTurns += 1;

  // Debugging
  console.log('Computer Choice');
  console.log(computerChoice);
  console.log('Message');
  console.log(outputValue);
  console.log('Game info');
  console.log(gameInfo);

  return outputValue.concat(gameInfo);
};
