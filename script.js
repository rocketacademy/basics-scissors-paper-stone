// Input User Name
var currentGameMode = "waiting for user name";

// Global variables for scoring board
var gamesDrawed = 0;
var gamesPlayerWon = 0;
var gamesCompWon = 0;
var gamesPlayed = 0;
var myOutputValue = "";

// Rolling for random comp SPS
var roll3 = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  console.log(
    `rollnumber is ${diceNumber}. 1 is scissors, 2 is paper, 3 is paper.`
  );
  return diceNumber;
};

var main = function (input) {
  // if game mode is 'waiting for user name'
  if (currentGameMode == "waiting for user name") {
    // set the user name
    userName = input;

    // Switch mode back to normal SPS after user name input
    currentGameMode = "normal game";

    return (myOutputValue = `Hello <b>${userName}</b>! Welcome to the game!<br><br>You can play the respective modes by submitting the corresponding inputs:<br><br><b>Normal mode </b>(Input: normal)<br><b>Reversed mode </b>(Input: reversed)<br><b>Korean mode </b>(Input: korean)<br><b>Computer mode </b>(Input: computer)<br><br> <b>If nothing is chosen, default mode will be normal.</b>`);
  } else if (
    currentGameMode == "normal game" ||
    currentGameMode == "reversed game" ||
    currentGameMode == "korean game" ||
    currentGameMode == "computer game"
  ) {
    //set game mode to normal
    if (input == "normal") {
      currentGameMode = "normal game";
      gamesplayed = 0;
      gamesCompWon = 0;
      gamesPlayerWon = 0;
      return `<b>Normal scissors paper stone mode activated.</b>`;
    }

    //set game mode to reversed
    if (input == "reversed") {
      currentGameMode = "reversed game";
      gamesplayed = 0;
      gamesCompWon = 0;
      gamesPlayerWon = 0;
      return `<b>Reversed scissors paper stone mode activated.</b>`;
    }

    //sey game mode to korean version
    if (input == "korean") {
      currentGameMode = "korean game";
      gamesplayed = 0;
      gamesCompWon = 0;
      gamesPlayerWon = 0;
      return `<b>Korean game Muk Jji Ppa mode activated.</b><br><br> Muk = Stone<br>Jji = Scissors<br>Ppa = Paper `;
    }

    //set game mode to comp vs comp
    if (input == "computer") {
      currentGameMode = "computer game";
      gamesplayed = 0;
      gamesCompWon = 0;
      gamesPlayerWon = 0;
      return `<b>Computer mode activated, press Submit button to play the game, no input is required.</b>`;
    }

    // if wrong input
    if (
      currentGameMode != "computer game" &&
      input != "scissors" &&
      input != "paper" &&
      input != "stone" &&
      input != "normal" &&
      input != "reversed" &&
      input != "korean" &&
      input != "computer"
    ) {
      return `<b>Invalid input entered!</b> <br><br> Please only enter <b>scissors</b>, <b>paper</b> or <b>stone</b> or change game modes with the corresponding inputs:<b><br>normal<br>reversed<br>korean<br>computer</b>`;
    } else if (currentGameMode == "computer game" && input != "") {
      return `<b>Invalid input entered!</b> <br><br> Currently the game is in computer mode, press submit button to continue the game, or enter other mode inputs to play game in other modes.`;
    }

    var storedNumber = roll3();
    if (storedNumber == 1) {
      storedNumber = "scissors";
    }
    if (storedNumber == 2) {
      storedNumber = "paper";
    }
    if (storedNumber == 3) {
      storedNumber = "stone";
    }

    console.log(storedNumber);
    console.log(`input ${input}`);

    // if game draw for normal, reversed and computer mode
    if (storedNumber == input && input == "scissors") {
      gamesDrawed += 1;
      gamesPlayed += 1;
      return `Both ${userName} and the computer chose <b>Scissors</b> ✂️!<br><br><b>It's a draw!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    }

    if (storedNumber == input && input == "paper") {
      gamesDrawed += 1;
      gamesPlayed += 1;
      return `Both ${userName} and the computer chose <b>Paper</b> 🗒!<br><br><b>It's a draw!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    }

    if (storedNumber == input && input == "stone") {
      gamesDrawed += 1;
      gamesPlayed += 1;
      return `Both ${userName} and the computer chose <b>Stone</b> 💎!<br><br><b>It's a draw!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    }

    // normal game mode
    if (
      currentGameMode == "normal game" &&
      input == "scissors" &&
      storedNumber == "paper"
    ) {
      gamesPlayerWon += 1;
      gamesPlayed += 1;
      return `The computer chose <b>paper</b> 🗒.<br>${userName} chose <b>scissors</b> ✂️.<br><br><b>You win!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other ways to play this game?`;
    }

    if (
      currentGameMode == "normal game" &&
      input == "paper" &&
      storedNumber == "stone"
    ) {
      gamesPlayerWon += 1;
      gamesPlayed += 1;
      return `The computer chose <b>stone</b> 💎.<br>${userName} chose <b>paper</b> 🗒.<br><br><b>You win!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other ways to play this game?`;
    }

    if (
      currentGameMode == "normal game" &&
      input == "stone" &&
      storedNumber == "scissors"
    ) {
      gamesPlayerWon += 1;
      gamesPlayed += 1;
      return `The computer chose <b>scissors</b> ✂️.<br>${userName} chose <b>stone</b> 💎.<br><br><b>You win!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other ways to play this game?`;
    }

    if (
      currentGameMode == "normal game" &&
      input == "scissors" &&
      storedNumber == "stone"
    ) {
      gamesCompWon += 1;
      gamesPlayed += 1;
      return `The computer chose <b>stone</b> 💎.<br>${userName} chose <b>scissors</b> ✂️.<br><br><b>You lose!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other ways to play this game?`;
    }

    if (
      currentGameMode == "normal game" &&
      input == "paper" &&
      storedNumber == "scissors"
    ) {
      gamesCompWon += 1;
      gamesPlayed += 1;
      return `The computer chose <b>scissors</b> ✂️.<br>${userName} chose <b>paper</b> 🗒.<br><br><b>You lose!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other ways to play this game?`;
    }

    if (
      currentGameMode == "normal game" &&
      input == "stone" &&
      storedNumber == "paper"
    ) {
      gamesCompWon += 1;
      gamesPlayed += 1;
      return `The computer chose <b>paper</b> 🗒.<br>${userName} chose <b>${input}</b> 💎.<br><br><b>You lose!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other ways to play this game?`;
    }

    // reversed game mode
    if (
      currentGameMode == "reversed game" &&
      input == "scissors" &&
      storedNumber == "stone"
    ) {
      gamesPlayerWon += 1;
      gamesPlayed += 1;
      return `<b>Current Mode: Reversed</b><br><br>The computer chose <<b>stone</b> 💎.<br>${userName} chose <b>scissors</b> ✂️.<br><br><b>You win! Hurray!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    }

    if (
      currentGameMode == "reversed game" &&
      input == "paper" &&
      storedNumber == "scissors"
    ) {
      gamesPlayerWon += 1;
      gamesPlayed += 1;
      return `<b>Current Mode: Reversed</b><br><br>The computer chose <b>scissors</b> ✂️.<br>${userName} chose <b>paper</b> 🗒.<br><br><b>You win! Hurray!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    }

    if (
      currentGameMode == "reversed game" &&
      input == "stone" &&
      storedNumber == "paper"
    ) {
      gamesPlayerWon += 1;
      gamesPlayed += 1;
      return `<b>Current Mode: Reversed</b><br><br>The computer chose <b>paper</b> 🗒.<br>${userName} chose <b>stone</b> 💎.<br><br><b>You win! Hurray!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    }

    if (
      currentGameMode == "reversed game" &&
      input == "scissors" &&
      storedNumber == "paper"
    ) {
      gamesCompWon += 1;
      gamesPlayed += 1;
      return `<b>Current Mode: Reversed</b><br><br>The computer chose <b>paper</b> 🗒.<br>${userName} chose <b>scissors</b> ✂️.<br><br><b>Sadly you still lose! Bummer.</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    }

    if (
      currentGameMode == "reversed game" &&
      input == "paper" &&
      storedNumber == "stone"
    ) {
      gamesCompWon += 1;
      gamesPlayed += 1;
      return `<b>Current Mode: Reversed</b><br><br>The computer chose <b>stone</b> 💎.<br>${userName} chose <b>paper</b> 🗒.<br><br><b>Sadly you still lose! Bummer.</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    }

    if (
      currentGameMode == "reversed game" &&
      input == "stone" &&
      storedNumber == "scissors"
    ) {
      gamesCompWon += 1;
      gamesPlayed += 1;
      return `<b>Current Mode: Reversed</b><br><br>The computer chose <b>scissors</b> ✂️.<br>${userName} chose <b>stone</b> 💎.<br><br><b>Sadly you still lose! Bummer.</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
    }
  }
  //if game mode is comp vs comp
  if (currentGameMode == "computer game" && input == "") {
    input = roll3();
    if (input == 1) {
      input = "scissors";
    }
    if (input == 2) {
      input = "paper";
    }
    if (input == 3) {
      input = "stone";
    }
    console.log("input " + input);
    //if draw in comp vs comp
    if (input == storedNumber) {
      gamesDrawed += 1;
      gamesPlayed += 1;
      return `<b>Current Mode: Computer Vs Computer</b><br><br>Both players chose ${storedNumber}!<br><br><b>It's a draw!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds! <br><br><b>Press submit button again to continue or change mode with the corresponding inputs!</b>`;
    }
    //if win in comp vs comp
    if (
      (input == "scissors" && storedNumber == "paper") ||
      (input == "paper" && storedNumber == "stone") ||
      (input == "stone" && storedNumber == "scissors")
    ) {
      gamesPlayerWon += 1;
      gamesPlayed += 1;
      return `<b>Current Mode: Computer Vs Computer</b><br><br>The computer chose <b>${storedNumber}</b>.<br>${userName} chose <b>${input}</b>.<br><br><b>You win! Hurray!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br><b>Press submit button again to continue or change mode with the corresponding inputs!</b>`;
    }
    //if lose in comp vs comp
    if (
      (input == "scissors" && storedNumber == "stone") ||
      (input == "paper" && storedNumber == "scissors") ||
      (input == "stone" && storedNumber == "paper")
    ) {
      gamesCompWon += 1;
      gamesPlayed += 1;
      return `<b>Current Mode: Computer Vs Computer</b><br><br>The computer chose <b>${storedNumber}</b>.<br>${userName} chose <b>${input}</b>.<br><br><b>You lost! Bummer!</b><br><br><b>Current Score</b>:<br>Computer Win: ${gamesCompWon} <br> ${userName} Win: ${gamesPlayerWon} <br> Rounds Draw: ${gamesDrawed} <br><br>So far ${userName}, you have won ${gamesPlayerWon}/${gamesPlayed} rounds!<br><br><b>Press submit button again to continue or change mode with the corresponding inputs!</b>`;
    }
  }
};
