var customerName = prompt("Welcome to a game of Scissors, Paper, Stone! Please enter your name", "You name goes here!");
var gameMode = prompt(
  "Welcome to a game of Scissors, Paper, Stone! Please enter your game mode, i.e og, reversed, korean"
);

// total number of wins for player, computer
var userScoreCount = 0;
var comScoreCount = 0;
var winner = '';

// SPS
var computerRandom = function() {
  var ranNum = Math.floor(Math.random() * 3);
  console.log(ranNum)
  if (ranNum == 0) {
    return 'stone';
  } else if(ranNum == 1) {
    return 'paper' ;
  }
  return 'scissors';
}

var main = function(input) {
  var userName = customerName;
  var computerChoice = computerRandom(); // calling a function
  
  if (gameMode == "og") {
    return og(input)
  }
  if (gameMode == "reversed") {
    return reversed(input)
  }
  if (gameMode == "korean") {
    return korean(input)
  } 
  return 'Invalid response. Please only type "og", "reversed", "korean"!'
}



var og =function(input){
  var userName = customerName;
  var computerChoice = computerRandom(); // calling a function
  if (
    input != 'scissors' && input != 'paper' && input != 'stone'
  ){
    return 'There are only 3 input options "scissors" "paper" or "stone". Please try again!'
  }
  else if (
    input == computerChoice
  ){
    userScoreCount = userScoreCount;
    comScoreCount = comScoreCount;
    return ` Hi ${userName}, you have typed ${input}. <br> Computer played ${computerChoice}. Your current score is at ${userScoreCount} and computer's current score is at ${comScoreCount}. <br> It is a tie!`
  }
  else if (
    input == 'scissors' && computerChoice == 'paper' ||
    input == 'paper' && computerChoice == 'stone' ||
    input == 'stone' && computerChoice == 'scissors')
  {
    userScoreCount = userScoreCount +1;
    comScoreCount = comScoreCount;
    return `Congratulations ${userName}, you win! <br> You typed ${input}. <br> Computer played ${computerChoice}. <br> Your current score count is at ${userScoreCount} and computer's score count is at ${comScoreCount}.`
  }
  else if (
    input == 'scissors' && computerChoice == 'stone' ||
    input == 'paper' && computerChoice == 'scissors' || 
    input == 'stone' && computerChoice == 'paper') 
      comScoreCount = comScoreCount + 1;
      userScoreCount = userScoreCount;
    return ` Sorry ${userName}, you have lost! You typed ${input}. <br> Computer played ${computerChoice}. <br> Your current score count is at ${userScoreCount} and computer's score count is at ${comScoreCount}. <br> Now you can type "scissors" "paper" or "stone" to play another round!`
  }



var reversed = function(input) {
  var userName = customerName;
  var computerChoice = computerRandom(); 
  if (input != 'reversed scissors' && input != 'reversed paper' && input != 'reversed stone'){
    return 'There are only 3 input options, please try again!'
  }
  else if (input == computerChoice){
    userScoreCount = userScoreCount;
    comScoreCount = comScoreCount;
    return `You typed ${input}. <br> Computer played ${computerChoice}. <br> It is a tie!`
  }
  else if( input == 'reversed scissors' && computerChoice == 'paper' ||
   input == 'reversed paper' && computerChoice == 'stone' ||
    input == 'reversed stone' && computerChoice == 'scissors'
    )
  {
    userScoreCount = userScoreCount +1;
    comScoreCount = comScoreCount;
    return `You typed ${input}. <br> Computer played ${computerChoice} Sorry, you lose! <br> Now you can type "scissors" "paper" or "stone" to play another round!`
  }
  else if (input == 'reversed scissors' && computerChoice == 'stone' ||
   input == 'reversed paper' && computerChoice == 'scissors' || 
   input == 'reversed stone' && computerChoice == 'paper'
   ) {
    comScoreCount = comScoreCount + 1;
    userScoreCount = userScoreCount;
    return `You typed ${input}. <br> Computer played ${computerChoice}. <br> Congratulations, you win!`
    } 
}




var korean = function(input) {
  var userName = customerName;
  var computerChoice = computerRandom(); 
  if (input != 'scissors' && input != 'paper' && input != 'stone') {
    return 'There are only 3 input options "scissors" "paper" or "stone". Please try again!'
  }
  // Case: Draw
  else if (input == computerChoice) {
    // Case 1: Player won first round, and draw with computer in second round
    if (winner == 'user') {
      userScoreCount += 1; // same as: userScoreCount = userScoreCount + 1
      winner = '';
      return `
        Muk-jji-ppa, you won ! You indicated ${input} and computer chose ${computerChoice}! 
        <br> Your current score count is at ${userScoreCount} and computer's score count is at ${comScoreCount}.
      `
    }
    // Case 2: Player lose first round, and draw with computer in second round
    if (winner == 'computer') {
      comScoreCount += 1;
      winner = '';
      return ` 
        Boohoo, you lost!! You indicated ${input} and computer chose ${computerChoice}!
        <br> Your current score count is at ${userScoreCount} and computer's score count is at ${comScoreCount}.
      `
    }
    // Case 3: Player draw with computer in first round
    return ` 
      It's a tie!! You indicated ${input} and computer chose ${computerChoice}!
      <br> Your current score count is at ${userScoreCount} and computer's score count is at ${comScoreCount}.
    `
  }
  // Case: Player win
  else if (
    input == 'scissors' && computerChoice == 'paper' ||
    input == 'paper' && computerChoice == 'stone' ||
    input == 'stone' && computerChoice == 'scissors'
  ) {
    winner = 'user';
    return `Muk-jji-ppa ${userName}, you win! <br> You typed ${input}. <br> Computer played ${computerChoice}. You need to draw the next round to win!`
  }
  // Case: Computer win
  else if (
    input == 'scissors' && computerChoice == 'stone' ||
    input == 'paper' && computerChoice == 'scissors' || 
    input == 'stone' && computerChoice == 'paper'
  ) {
    winner ='computer';
    return ` Sorry ${userName}, you have lost! You typed ${input}. <br> Computer played ${computerChoice}. <br> You need to avoid drawing if not you will lose!`
  }
}