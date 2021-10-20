var wins = 0;

var counter = 0;

var mode = "enter name";
var userName = "";

var rollDice = function () {
  // Generate a decimal from 0 through 2, inclusive of 0 and exclusive of 2.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 2 inclusive.
  var diceNumber = randomInteger;
  if (diceNumber == 0) {
    var opponentChoice = "scissors";
  }
  if (diceNumber == 1) {
    var opponentChoice = "paper";
  }

  if (diceNumber == 2) {
    var opponentChoice = "stone";
  }

  return opponentChoice;
};

var main = function (input) {
  if (mode == "enter name") {
    userName = input;
    mode = "Scissors Paper Stone";
    myOutputValue = `Hey ${input}!`;
  } else if (mode == "Scissors Paper Stone") {
    // Generate a random dice number
    var randomDiceNumber = rollDice();
    console.log(randomDiceNumber);

    // Default output value is 'you lose'.
    var myOutputValue = "TRY AGAIN";

    if (
      (input == "scissors" && randomDiceNumber == "stone") ||
      (input == "paper" && randomDiceNumber == "scissors") ||
      (input == "stone" && randomDiceNumber == "paper") ||
      (input == "reversed scissors" && randomDiceNumber == "paper") ||
      (input == "reversed paper" && randomDiceNumber == "stone") ||
      (input == "reversed stone" && randomDiceNumber == "scissors")
    ) {
      myOutputValue = `You lose! You chose '${input}'!,<br>the AI chose '${randomDiceNumber}'!`;
      counter = counter + 1;
    }

    if (
      (input == "reversed scissors" && randomDiceNumber == "stone") ||
      (input == "reversed paper" && randomDiceNumber == "scissors") ||
      (input == "reversed stone" && randomDiceNumber == "paper") ||
      (input == "scissors" && randomDiceNumber == "paper") ||
      (input == "paper" && randomDiceNumber == "stone") ||
      (input == "stone" && randomDiceNumber == "scissors")
    ) {
      myOutputValue = `You win! You chose '${input}'!,<br>the AI chose '${randomDiceNumber}'!`;

      wins = wins + 1;
      counter = counter + 1;
    }

    if (
      (input == "scissors" && randomDiceNumber == "scissors") ||
      (input == "paper" && randomDiceNumber == "paper") ||
      (input == "stone" && randomDiceNumber == "stone") ||
      (input == "reversed scissors" && randomDiceNumber == "scissors") ||
      (input == "reversed paper" && randomDiceNumber == "paper") ||
      (input == "reversed stone" && randomDiceNumber == "stone")
    ) {
      myOutputValue = `It's a draw! You chose '${input}'!,<br>the AI chose '${randomDiceNumber}'!`;
      counter = counter + 1;
    }

    console.log(wins + "wins");
    console.log(counter + "counter");
    // if (counter == round) {
    // // Default output value is 'you lose'.
    // myOutputValue = "You Win";

    // counter = 0;

    // Return output.
    var winningPercentage = ((wins / counter) * 100).toFixed(2);
    myOutputValue += `<br><br>You have won ${wins} out of ${counter} times in total, thats ${winningPercentage}%, not too shabby! ${userName}!`;
  }
  return myOutputValue;
};

// options are: scissors, paper, stone for random output
//make a dice roll to make 1 scissors, 2 paper, 3 stone

//if input = scissors, random roll is rock3, lose
//if input = scissors, random roll is scissors1, draw
//if input = scissors, random roll is paper2, win

//if input = paper, if random roll is scissors1, lose
//if input = paper, if random roll is paper2, draw
//if input = paper, if random roll is stone3, win

//if input is = stone, if random roll is paper2, lose
//if input is = stone, if random roll is stone3, draw
//if input is = stone, if random roll is scissors1, win

//if input = reversed scissors, random roll is rock3, win
//if input = reversed scissors, random roll is scissors1, draw
//if input = reversed scissors, random roll is paper2, lose

//if input = reversed paper, if random roll is scissors1, win
//if input = reversed paper, if random roll is paper2, draw
//if input = reversed paper, if random roll is stone3, lose

//if input is = reversed stone, if random roll is paper2, win
//if input is = reversed stone, if random roll is stone3, draw
//if input is = reversed stone, if random roll is scissors1, lose
