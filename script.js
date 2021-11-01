var winRecord = 0;
var loseRecord = 0;
var currentGameMode = "collect user name";
var userName = "";

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "collect user name") {
    userName = input;
    myOutputValue = `Welcome ${userName}! Guess "scissors", "paper" or "stone" to play!`;
    currentGameMode = "play";
  } else if (currentGameMode == "play") {
    var randomSPS = random();

    // input validation
    if (
      input !== "scissors" ||
      input !== "paper" ||
      input !== "stone" ||
      input !== "reversed scissors" ||
      input !== "reversed paper" ||
      input !== "reversed stone"
    ) {
      myOutputValue = `${userName}, try again! Please enter either 'scissors', 'paper', or 'stone'`;
    }

    //assign randomly generated integer to either SPS value
    if (randomSPS == 1) {
      randomSPS = "scissors";
    }

    if (randomSPS == 2) {
      randomSPS = "paper";
    }

    if (randomSPS == 3) {
      randomSPS = "stone";
    }

    console.log(randomSPS);

    //DRAW
    if (input == randomSPS) {
      myOutputValue = `The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      It's a draw.<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!<br>
      ${userName}'s record: ${winRecord} Wins, ${loseRecord} Losses.`;
    }

    //WIN
    if (
      (input == "scissors" && randomSPS == "paper") ||
      (input == "paper" && randomSPS == "stone") ||
      (input == "stone" && randomSPS == "scissors")
    ) {
      winRecord = winRecord + 1;
      myOutputValue = `The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      You win! Congrats!<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!<br>
      ${userName}'s record: ${winRecord} Wins, ${loseRecord} Losses.`;
    }

    //LOSE
    if (
      (randomSPS == "scissors" && input == "paper") ||
      (randomSPS == "paper" && input == "stone") ||
      (randomSPS == "stone" && input == "scissors")
    ) {
      loseRecord = loseRecord + 1;
      myOutputValue = `The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      You lose! Bummer.<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!<br>
      ${userName}'s record: ${winRecord} Wins, ${loseRecord} Losses.`;
    }

    //REVERSED WIN
    if (
      (randomSPS == "scissors" && input == "reversed paper") ||
      (randomSPS == "paper" && input == "reversed stone") ||
      (randomSPS == "stone" && input == "reversed scissors")
    ) {
      winRecord = winRecord + 1;
      myOutputValue = `REVERSE! <br>
      The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      You win! Congrats!<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!<br>
      ${userName}'s record: ${winRecord} Wins, ${loseRecord} Losses.`;
    }

    //REVERSED LOSE
    if (
      (input == "reversed scissors" && randomSPS == "paper") ||
      (input == "reversed paper" && randomSPS == "stone") ||
      (input == "reversed stone" && randomSPS == "scissors")
    ) {
      loseRecord = loseRecord + 1;
      myOutputValue = `REVERSE! <br>
      The computer chose ${randomSPS}.<br>
      You chose ${input}.<br><br>
      You lose! Bummer.<br><br>
      Now you can type "scissors" "paper" or "stone" to play another round!<br>
      ${userName}'s record: ${winRecord} Wins, ${loseRecord} Losses.`;
    }
  }

  return myOutputValue;
};

var random = function () {
  // Generate a decimal from 0 through 3. inclusive of 0 and exclusive of 3
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 1 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal) + 1;

  return randomInteger;
};
