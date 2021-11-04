//Create a game of scissors, paper, and stone.

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

// Keeping track of the number of times the user has won or loss
var winCount = 0;
// Keeping trakc the number of games played
var gamesPlayed = 0;

// Waiting for username
var currentGameMode = "waiting for user name";
var UserName = "";

// Design system to generate numbers which will be assigned to scissors, paper and stone
var systemGenerator = function (input) {
  // Assigning options to number 1 to 3
  var optionArrary = ["scissors", "paper", "stone"];
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var systemChoice = optionArrary[randomInteger];
  console.log("The system chose " + systemChoice);

  // creating a default response for losing
  // minus one win count for losers
  winCount = winCount - 1;
  gamesPlayed = gamesPlayed + 1;
  // what users will see if they lose
  var myOutputValue = `The computer chose ${systemChoice}. You chose ${input}. You lose! Bummer! <br> So far ${userName}, your score is ${winCount}/${gamesPlayed}! <br> Keep playing!`;
  console.log("losing response");

  //create a response for draw where input and system generated results are the same
  if (input == systemChoice) {
    console.log("draw response");
    // no change to the winning count
    winCount = winCount + 1;
    myOutputValue = `The computer chose ${systemChoice}. You chose ${input}. Draw! Bummer. <br> So far ${userName}, your score is ${winCount}/${gamesPlayed}! <br> Keep playing!`;
  }

  // Create a sequence to win when scissors beat paper and paper beat stone and stone beat scissors
  if (
    (input == `scissors` && systemChoice == `paper`) ||
    (input == `paper` && systemChoice == `stone`) ||
    (input == `stone` && systemChoice == `scissors`)
  ) {
    console.log("winning response");
    // create a response for winning
    // to add win count for users
    winCount = winCount + 2;
    myOutputValue = `The computer chose ${systemChoice}. You chose ${input}. You win! <br> So far ${userName}, your score is ${winCount}/${gamesPlayed}. Pretty good! <br> Keep playing!`;
  }
  return myOutputValue;
};

var main = function (input) {
  var myOutputValue = "";

  //do this if computer is waiting for user name
  if (currentGameMode == "waiting for user name") {
    userName = input;

    // Now we have the name, we will switch the game mode
    currentGameMode = "Scissors, Paper, Stone";

    myOutputValue = "Hello " + userName;
    console.log("user typed in " + userName);
  } else if (currentGameMode == "Scissors, Paper, Stone") {
    // generating result
    var myOutputValue = systemGenerator(input);
  }

  return myOutputValue;
};
