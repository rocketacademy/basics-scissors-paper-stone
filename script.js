var currentGameMode = "waiting for user name";
var userName = "";

//Keep track of totel rounds of games played
var totalRounds = 0;
//Keep track of number of times player wins
var winningCount = 0;
//Keep track of number of times computer wins
var losingCount = 0;
//Keep track number of draws
var drawCount = 0;

//Create a function to generate random words from a list
var getWords = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  var randomWord = 0;

  if (randomInteger == 1) {
    randomWord = "scissors";
  }

  if (randomInteger == 2) {
    randomWord = "paper";
  }

  if (randomInteger == 3) {
    randomWord = "stone";
  }

  return randomWord;
};

var main = function (input) {
  var myOutputValue = "";
  //if current game mode is waiting for user name, input will be set as user name
  if (currentGameMode == "waiting for user name") {
    console.log("Current Game Mode ======", currentGameMode);
    userName = input;
    //will go into the dice game
    currentGameMode = "Dice Game";

    myOutputValue = `Hi ${userName}. Please enter "scissors", "paper" to "stone" to start the game.`;
    //if the current game mode is already dice game, the game will be run
  } else if (currentGameMode == "Dice Game") {
    var randomSPS = getWords();
    console.log("Current Game Mose =====", currentGameMode);

    console.log("Computer generate ======", randomSPS);
    totalRounds += 1;
    console.log("Total rounds of game ======", totalRounds);

    //user wins - scissors beats paper, paper beats stone, and stone beats scissors.
    if (
      (input == "scissors" && randomSPS == "paper") ||
      (input == "paper" && randomSPS == "stone") ||
      (input == "stone" && randomSPS == "scissors")
    ) {
      winningCount += 1;
      console.log("Winning count =====", winningCount);
      console.log("Losing count =====", losingCount);
      console.log("Draw count =====", drawCount);
      myOutputValue = `The computer chose ${randomSPS}. <br> You chose ${input}. <br><br> You win!<br><br> So far ${userName}, you've been winning ${winningCount}/${totalRounds} rounds.`;
    }

    //if user loses the game
    if (
      (input == "scissors" && randomSPS == "stone") ||
      (input == "paper" && randomSPS == "scissors") ||
      (input == "stone" && randomSPS == "paper")
    ) {
      losingCount += 1;
      console.log("Winning count =====", winningCount);
      console.log("Losing count =====", losingCount);
      console.log("Draw count =====", drawCount);
      myOutputValue = `The computer chose ${randomSPS}. <br> You chose ${input}. <br><br> You lose! <br><br> So far ${userName}, you've been losing ${losingCount}/${totalRounds} rounds.`;
    }

    //////////////Reverse Game////////////

    //Reserve game: user wins - scissors beat stone, stone beats paper, and paper beats scissors
    //if (
    //(input == "scissors" && randomSPS == "stone") ||
    //(input == "stone" && randomSPS == "paper") ||
    //(input == "paper" && randomSPS == "scissors")
    //) {
    //myOutputValue = `The computer chose ${randomSPS}. <br> You chose ${input}. <br><br> Congrats, you win! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
    //}

    //If both parties choose the same object, it's a draw.
    if (input == randomSPS) {
      drawCount += 1;
      console.log("Winning count =====", winningCount);
      console.log("Losing count =====", losingCount);
      console.log("Draw count =====", drawCount);
      myOutputValue = `The computer chose ${randomSPS}. <br> You chose ${input}. <br><br> It's a draw! <br><br> ${userName}, you have ${drawCount} rounds of draws so far`;
    }

    //if user enter other words, generate input validation and let them know there are only three options
    if (input !== "scissors" && input !== "paper" && input !== "stone") {
      totalRounds -= 1;
      myOutputValue = `${userName}, this is an invalid option... Please type "scissors" "paper" or "stone" to play the game!`;
    }
  }
  return myOutputValue;
};
