// user types in their name and programme says hello
// user types in scissors/paper/stone
// Computer generates a number from 1-3
// Assign 1 = scissors, 2 = stone, 3 = paper
// Computer outputs either scissors, paper or stone
// Output result and add to the win/lose/total game count

//Global variables
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var totalGameCount = 0;
var userName = "no user name";
var myOutputValue = "";

//generating a random number from 0-2
var randomOutput = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
};

//Generating a function for when player wins
var playerWins = function (userInput, computerInput) {
  return (
    (userInput == "scissors" && computerInput == "paper") ||
    (userInput == "paper" && computerInput == "stone") ||
    (userInput == "stone" && computerInput == "scissors")
  );
};

//Generating a function for when player loses
var playerLoses = function (userInput, computerInput) {
  return (
    (userInput == "scissors" && computerInput == "stone") ||
    (userInput == "stone" && computerInput == "paper") ||
    (userInput == "paper" && computerInput == "scissors")
  );
};

//Generating a function for when player wins
var playerDraws = function (userInput, computerInput) {
  return (
    (userInput == "scissors" && computerInput == "scissors") ||
    (userInput == "paper" && computerInput == "paper") ||
    (userInput == "stone" && computerInput == "stone")
  );
};

//Main function
var main = function (input) {
  // Set the user name
  if (userName == "no user name") {
    userName = input;
    return `Hello ${userName}!`;

    // Carry out the sps game
    // I tried to put this whole block as a separate function above but it didnt work/i didnt know how to do it...so i had to add it back here
  } else {
    // Generate a random number from 0-2
    var randomAttack = randomOutput();

    //Assign 0 to scissors, which means computer chose scissors
    if (randomAttack == 0) {
      var computerChoice = "scissors";
      console.log("This is the computer choice:");
      console.log(computerChoice);
    }

    //Assign 1 to stone, which means computer chose stone
    if (randomAttack == 1) {
      var computerChoice = "stone";
      console.log("This is the computer choice:");
      console.log(computerChoice);
    }

    //Assign 2 to paper, which means computer chose paper
    if (randomAttack == 2) {
      var computerChoice = "paper";
      console.log("This is the computer choice:");
      console.log(computerChoice);
    }

    // I don't know where this block should fit in...should it be an additional if function nested on top or??
    //User validation
    var words = ["scissors", "paper", "stone"];
    if (!words.includes(input)) {
      return "Please type scissors, paper or stone!!";
    }

    //Situation if player wins
    if (playerWins(input, computerChoice)) {
      winCount += 1;
      totalGameCount += 1;
      var winPercentage = Math.floor((winCount / totalGameCount) * 100);

      //Customise output message depending on win percentage
      if (winPercentage < 60) {
        myOutputValue = `${userName}, you won! <br> You chose ${input} but the computer chose ${computerChoice} <br> Your current win count is ${winCount} and your win percentage is ${winPercentage}% You need to improve!`;
      } else {
        myOutputValue = `${userName}, you won! <br> You chose ${input} but the computer chose ${computerChoice} <br> Your current win count is ${winCount} and your win percentage is ${winPercentage}%`;
      }
    }

    //Situation if player loses
    if (playerLoses(input, computerChoice)) {
      loseCount += 1;
      totalGameCount += 1;
      var winPercentage = Math.floor((winCount / totalGameCount) * 100);

      //Customise output message depending on win percentage
      if (winPercentage < 60) {
        myOutputValue = `${userName}, you lose! <br> You chose ${input} but the computer chose ${computerChoice} <br> Your current lose count is ${loseCount} and your win percentage is ${winPercentage}% You need to improve!`;
      } else {
        myOutputValue = `${userName}, you lose! <br> You chose ${input} but the computer chose ${computerChoice} <br> Your current lose count is ${loseCount} and your win percentage is ${winPercentage}%`;
      }
    }

    //Situation if player draws
    if (playerDraws(input, computerChoice)) {
      totalGameCount += 1;
      var winPercentage = Math.floor((winCount / totalGameCount) * 100);

      //Customise output message depending on win percentage
      if (winPercentage < 60) {
        myOutputValue = `${userName}, it's a draw! <br> You chose ${input}, and the computer too. <br> Your current win count is ${winCount} and your win percentage is ${winPercentage}% You need to improve!`;
      } else {
        myOutputValue = `${userName}, it's a draw! <br> You chose ${input}, and the computer too. <br> Your current win count is ${winCount} and your win percentage is ${winPercentage}%`;
      }
    }
  }
  return myOutputValue;
};
