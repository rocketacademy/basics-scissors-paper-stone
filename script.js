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
  var storedNumber = roll3();

  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone" &&
    input != "reversed scissors" &&
    input != "reversed paper" &&
    input != "reversed stone"
  ) {
    return `<b>Invalid input entered!</b> <br><br> Please only enter <b>scissors</b>, <b>paper</b> or <b>stone</b> to play the game against the computer!<br><br>There might be other ways to play this game too!<br><br>Can you find it?`;
  }

  var scissors = 1;
  if (storedNumber == 1 && input == "scissors") {
    return `Both you and the computer chose <b>Scissors</b> ✂️!<br><br><b>It's a draw!</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  var paper = 2;
  if (storedNumber == 2 && input == "paper") {
    return `Both you and the computer chose <b>Paper</b> 🗒!<br><br><b>It's a draw!</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  var stone = 3;
  if (storedNumber == 3 && input == "stone") {
    return `Both you and the computer chose <b>Stone</b> 💎!<br><br><b>It's a draw!</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  if (input == "scissors" && storedNumber == 3) {
    return `The computer chose <b>stone</b> 💎.<br>You chose <b>scissors</b> ✂️.<br><br><b>You win! I wonder why?</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other inputs to play this game?`;
  }
  if (input == "paper" && storedNumber == 1) {
    return `The computer chose <b>scissors</b> ✂️.<br>You chose <b>paper</b> 🗒.<br><br><b>You win! I wonder why?</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other inputs to play this game?`;
  }
  if (input == "stone" && storedNumber == 2) {
    return `The computer chose <b>paper</b> 🗒.<br>You chose <b>stone</b> 💎.<br><br><b>You win! I wonder why?</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other inputs to play this game?`;
  }
  if (input == "scissors" && storedNumber == 2) {
    return `The computer chose <b>paper</b> 🗒.<br>You chose <b>scissors</b> ✂️.<br><br><b>You lose! I wonder why?</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other inputs to play this game?`;
  }
  if (input == "paper" && storedNumber == 3) {
    return `The computer chose <b>stone</b> 💎.<br>You chose <b>paper</b> 🗒.<br><br><b>You lose! I wonder why?</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other inputs to play this game?`;
  }
  if (input == "stone" && storedNumber == 1) {
    return `The computer chose <b>scissors</b> ✂️.<br>You chose <b>stone</b> 💎.<br><br><b>You lose! I wonder why?</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round, or might there be other inputs to play this game?`;
  }
  if (input == "reversed scissors" && storedNumber == 2) {
    return `<b>You have keyed in the secret input!</b><br><br><b>Now you can play with the original rules!</b><br><brThe computer chose <b>paper</b> 🗒.<br>You chose <b>scissors</b> ✂️.<br><br><b>You win! Hurray!</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  if (input == "reversed paper" && storedNumber == 3) {
    return `<b>You have keyed in the secret input!<b><br><br><b>Now you can play with the original rules!</b><br><brThe computer chose <b>stone</b> 💎.<br>You chose <b>paper</b> 🗒.<br><br><b>You win! Hurray!</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  if (input == "reversed stone" && storedNumber == 1) {
    return `<b>You have keyed in the secret input!</b><br><br><b>Now you can play with the original rules!</b><br><br>The computer chose <b>scissors</b> ✂️.<br>You chose <b>stone</b> 💎.<br><br><b>You win! Hurray!</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  if (input == "scissors" && storedNumber == 3) {
    return `<b>You have keyed in the secret input!</b><br><br><b>Now you can play with the original rules!</b><br><br>The computer chose <b>stone</b> 💎.<br>You chose <b>scissors</b> ✂️.<br><br><b>Sadly you still lose! Bummer.</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  if (input == "paper" && storedNumber == 1) {
    return `<b>You have keyed in the secret input!</b><br><br><b>Now you can play with the original rules!</b><br><br>The computer chose <b>scissors</b> ✂️.<br>You chose <b>paper</b> 🗒.<br><br><b>Sadly you still lose! Bummer.</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  if (input == "stone" && storedNumber == 2) {
    return `<b>You have keyed in the secret input!</b><br><br><b>Now you can play with the original rules!</b><br><br>The computer chose <b>paper</b> 🗒.<br>You chose <b>stone</b> 💎.<br><br><b>Sadly you still lose! Bummer.</b><br><br>Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
};
