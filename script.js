
// add a win loss record, output draws and winning percentage

var STONE = `stone`;
var SCISSORS = `scissors`;
var PAPER = `paper`;
var REVERSED_SCISSORS = `reversed scissors`;
var REVERSED_PAPER = `reversed paper`;
var REVERSED_STONE = `reversed stone`;

var totalGamesWon = 0;
var totalComWins = 0;
var totalGamesPlayed = 0;
var totalDrawGamesPlayed = 0;
var userName = ``;
var spsGame = `regular`
var currentGameMode = `enter user name`

var getWinRateInfo = function () {
  var winRate = Math.floor(totalGamesWon/totalGamesPlayed *100);

  if (totalGamesPlayed == 0) {
    return `This is your first game!`
  }
  return `You Won ` +totalGamesWon + ` games.`
  + `<br><br>Computer Won `+ totalComWins + ` games.`
  +`<br></br>You drawed ${totalDrawGamesPlayed} games.`
  +`<br><br>You win ` + winRate + `% of all games played.` 
}

// Assign a choice to computer via randomNumber function

var generateChoice = function() {
  var randomComChoice = randomNumber();
  if (randomComChoice == 1) {
    return SCISSORS;
  }

  if (randomComChoice == 2) {
    return PAPER;
  }

  else { return STONE;
  }

}

var randomNumber = function () {

  var randomDecimal = Math.random() * 3;

  var randomInterger = Math.floor(randomDecimal);

  var randomNumber = randomInterger + 1;

  return randomNumber;

}
var main = function (input) {

  var myOutputValue = `You lose, Try Again!`;

  if (currentGameMode == `enter user name`) {

    userName = prompt(`Please enter a username`);

    currentGameMode = `regular`;

    return myOutputValue = `Hello ` + userName + ` Please enter scissors, paper or stone to start the game.`;
  } else if (currentGameMode = `regular`) {

  var comChoice = generateChoice();
  console.log(input, comChoice)

//input validator
  if (
    input != SCISSORS && input != PAPER && input != STONE)
    // input != REVERSED_PAPER || input != REVERSED_SCISSORS||
    // input != REVERSED_STONE);
    {
    return myOutputValue = `You entered ${input}, please enter scissors, paper or stone and try again`
  } 
  
// winning conditions
  if (
  (input == `stone` && comChoice == `scissors`) || 
  (input == `reversed stone` && comChoice == `paper`) ||
  (input == `reversed paper` && comChoice == `scissors`) ||
  (input == `paper` && comChoice == `stone`) ||
  (input == `reversed scissors` && comChoice == `stone`) ||
  (input == `scissors` && comChoice == `paper`)
  ) {
    totalGamesWon +=1;
    var winratemes= getWinRateInfo();
    return myOutputValue = `Hi ${userName} 
    <br><br>You picked ${input}
    <br><br>and Computer picked ${comChoice}.
    <br><br>You win! Hooray! 
    <br><br> ${winratemes}`
  }
// draw conditions
  if (input == comChoice) {
    totalDrawGamesPlayed += 1;
    var winratemes= getWinRateInfo();
    return myOutputValue = `Hi ${userName} 
    <br><br>You picked ${input} 
    <br><br>and Computer picked ${comChoice}.
    <br><br>Try Again! 
    <br><br> ${winratemes}`
  }
  
  console.log(input,comChoice)
  totalGamesPlayed += 1;
  var winratemes= getWinRateInfo();
  return myOutputValue = `Hi ${userName} 
  <br><br>You lose! You picked ${input}
  <br><br>and Computer picked ${comChoice}.
  <br><br>Try Again! 
  <br><br>${winratemes}`
}

}