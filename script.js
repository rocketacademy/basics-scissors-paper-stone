var gameState = "get-user"; //Initate the game state
var username = ""; //initiate username
var comWin = 0; //initial score for computer
var playerWin = 0; //initial score for user
var drawCount = 0; //initate draw count
var gameMode = "normal"; //print-out gamemode variable

var main = function (input) {
  if (gameState == "get-user") {
    username = input;
    gameState = "game-mode";
    return `Hi there ${username}, let's play a game of scissors,paper and stone. <br> To proceed, please key in "stone"/"paper"/"scissors".`;
  }
  if (gameState == "game-mode" || gameState == "game-reversed") {
    if (input.toLowerCase() == "reverse") {
      gameState = "game-reversed"; //Change game state to reverse
      return 'Shhh...Game reversed! To proceed, please key in "stone"/"paper"/"scissors".';
    }
    if (input.toLowerCase() == "normal") {
      gameState = "game-mode"; //Change game state to normal mode
      gameMode = "normal"; //Change game state to normal
      return 'Ah, having enough fun already. Now back to normal. To proceed, please key in "stone"/"paper"/"scissors".';
    }
    input = input.toLowerCase(); //lowercase the inputs for processing
    var comOutput = randomGen(); //Get the random generated number
    var userInput = intInput(input); //Get int value of the user
    console.log("Com-output");
    console.log(comOutput);
    console.log("User-input");
    console.log(userInput);
    if (userInput == -1) {
      //Error handler
      return `Error! Please key in text: "stone"/"paper"/"scissors"
    <br> (ps. type 'reverse' to trigger reverse-mode)`;
    } else {
      //Scissors paper logic
      if (gameState == "game-reversed") {
        console.log("REVERSED!");
        gameMode = "reversed"; //print-out gamemode variable
        var result = revGameLogic(comOutput, userInput); //prints the comparison result
      } else {
        gameMode = "normal"; //print-out gamemode variable
        var result = gameLogic(comOutput, userInput); //prints the comparison result
      }
    }
    var myOutputValue = gameResponse(result, comOutput, input, gameMode);
    return myOutputValue;
  }
};

var randomGen = function () {
  var num = Math.random() * 3;
  var num = Math.floor(num); //create a number between 0-2
  return num;
};

var assignOutput = function (value) {
  //Converts random generator to outputs
  if (value == 0) {
    return "stone";
  }
  if (value == 1) {
    return "paper";
  }
  if (value == 2) {
    return "scissors";
  }
};

var intInput = function (value) {
  //Converts user inputs into values
  if (value == "stone") {
    return 0;
  }
  if (value == "paper") {
    return 1;
  }
  if (value == "scissors") {
    return 2;
  } else {
    return -1;
  }
};

var symbolMaker = function (textValue) {
  //Converts random generator to outputs
  if (textValue == "scissors") {
    return "✂️";
  }
  if (textValue == "paper") {
    return "🗒";
  }
  if (textValue == "stone") {
    return "💎";
  }
};

var gameLogic = function (comInput, userInput) {
  if (userInput == 0 && comInput == 2) {
    return 1; //if user inputs rock and computer input scissors (cycle case special) user wins
  } else if (comInput > userInput) {
    return 0; //means user lost
  } else if (comInput < userInput) {
    return 1; //means user wins
  } else {
    return 2; //means same value
  }
};

var revGameLogic = function (comInput, userInput) {
  if (userInput == 2 && comInput == 0) {
    return 1; //if user inputs scissors and computer input stone (cycle case special)
  } else if (comInput < userInput) {
    return 0; //means user lost
  } else if (comInput > userInput) {
    return 1; //means user wins
  } else {
    return 2; //means same value
  }
};

var winRecords = function () {
  stringOutput = `<br> =========== <br> Winning History:<br> ${username} have won ${playerWin} out of ${
    playerWin + comWin + drawCount
  } rounds. With ${drawCount} draws.`;
  return stringOutput;
};

var gameResponse = function (gameResult, comOut, userIO, gameMode) {
  if (gameResult == 2) {
    //same value
    drawCount += 1;
    return `
    Both the computer and you chose ${symbolMaker(assignOutput(comOut))}! 
    <br> It's a draw!
    <br>
    <br> Now you can type "scissors", "paper" or "stone" to play another round!
    <br> (ps. type 'reverse'/'normal' to toggle between game modes)
    <br> ${winRecords()} 
    <br> 
    <br> ${funnyResponse()}
    <br>
    <br> Game-mode: ${gameMode}`;
  }
  if (gameResult == 1) {
    //user wins
    playerWin += 1;
    return `
    The computer chose ${symbolMaker(assignOutput(comOut))}.
    <br>You chose ${symbolMaker(userIO)}.
    <br>
    <br>You win! Good job.
    <br>
    <br> Now you can type "scissors", "paper" or "stone" to play another round!
    <br> (ps. type 'reverse'/'normal' to toggle between game modes)
    <br> ${winRecords()}
    <br> 
    <br> ${funnyResponse()}  
    <br>
    <br> Game-mode: ${gameMode}`;
  }
  if (gameResult == 0) {
    //user lose
    comWin += 1;
    return `
    The computer chose ${symbolMaker(assignOutput(comOut))}.
    <br>You chose ${symbolMaker(userIO)}.
    <br>
    <br>You lose! Bummer! Try again!
    <br>
    <br> Now you can type "scissors", "paper" or "stone" to play another round!
    <br> (ps. type 'reverse'/'normal' to toggle between game modes)
    <br> ${winRecords()} 
    <br> 
    <br> ${funnyResponse()}
    <br>
    <br> Game-mode: ${gameMode}`;
  }
};

var funnyResponse = function () {
  var winningRate = playerWin / (playerWin + comWin);
  console.log(`Winning Rate: ${winningRate}`);
  if (winningRate <= 0.25) {
    return "C'mon, you can do better can't you? Try again!";
  }
  if (winningRate > 0.25 && winningRate < 0.5) {
    return "Steady yourself! Try harder!";
  }
  if (winningRate >= 0.5 && winningRate <= 0.8) {
    return "Not too shabby. Let's see if you can do better!";
  } else {
    return "Dang! You're good homie!";
  }
};
