//generate global variable on scissors, paper, stone
const SCISSORS = `scissors`;
const PAPER = `paper`;
const STONE = `stone`;
const REVERSESCISSORS = `reversed scissors`;
const REVERSEPAPER = `reversed paper`;
const REVERSESTONE = `reversed stone`;
const wrongInput = 'Please enter a valid input of scissors, paper or stone. <br> If in reversed mode: reversed scissors, reversed paper or reversed stone. Please try again.'
var currentGameMode = 'waiting for user name';
var userName = '';
var winRecord = 0;
var lossRecord = 0;
var drawRecord = 0;
var calcTotalPlay = 0;


//create function on dice roll to randomize SPS selection
var diceRoll = function()
{
  var randomDiceNumber = Math.random() * 3;
  console.log(`this is randomDiceNumber `, randomDiceNumber)
  var roundInteger = Math.floor(randomDiceNumber);
  console.log(`this is round Integer `, roundInteger)
  return roundInteger;
}

//generate scissors, paper stone based on diceRoll
var variableSPS = function(generateSPS)
{
  if (generateSPS == 0)
  {
    return SCISSORS;
  } 
  if (generateSPS == 1)
  {
    return PAPER;
  } 
  if (generateSPS == 2)
  {
    return STONE;
  } 
};

//argument on win vs draw vs loss & corresponding text.
var argSPS = function (userInput, computerSPS) 
{
  //win condition
  if ((userInput == SCISSORS && computerSPS == PAPER) || (userInput == PAPER && computerSPS == STONE) || (userInput == STONE && computerSPS == SCISSORS) || (userInput == REVERSESTONE && computerSPS == PAPER) || (userInput == REVERSEPAPER && computerSPS == SCISSORS) || (userInput == REVERSESCISSORS && computerSPS == STONE))
  {
    winRecord += 1;
    calcTotalPlay += 1;
    return `You won!`;
  }

  //draw condition
  if ((userInput == computerSPS) || (userInput == REVERSESCISSORS && computerSPS == SCISSORS) || (userInput == REVERSEPAPER && computerSPS == PAPER) || (userInput == REVERSESTONE && computerSPS == STONE))
  {
    drawRecord += 1;
    calcTotalPlay += 1;
    return `It's a draw!!`;
  }

  // if both condition not met, it's a loss condition
  lossRecord += 1;
  calcTotalPlay += 1;
  return `You lost =(`
};

//function to calculate win-loss record and corresponding message
var winLossDrawRecord = function ()
{
  var recordInput
  var userWinRate = ((winRecord / calcTotalPlay) * 100).toFixed(2);
  var pcWinRate = ((lossRecord / calcTotalPlay) * 100).toFixed(2);
  var drawRate = ((drawRecord / calcTotalPlay) * 100).toFixed(2);
  
  if (winRecord > lossRecord)
  {
    return recordInput = `Great job on having more wins ${userName}. You have played ${calcTotalPlay} times and have a win % of ${userWinRate} \% with a ${drawRate}\% draw rate.`
  } 

  if (lossRecord > winRecord)
  {
    return recordInput = `You're still on the losing end ${userName}!  You have played ${calcTotalPlay} times and the PC have a win % of ${pcWinRate} \% with a ${drawRate}\% draw rate.`
  } 

  return recordInput = `You're close to overtaking the PC, ${userName}! You have played ${calcTotalPlay} times and we have a draw \% of ${drawRate}.`
 };

 // initialize username and choose SPS game mode.
 var userNameInputFunction = function(input)
 {
  userName = input;
  currentGameMode = 'SPS Selection';
  return `Hello ${userName}! Please enter (1 or 2) which SPS game mode that you prefer:<br> 1. Normal SPS <br> 2. Reverse SPS`;
 };

//create input validation to either scissors paper stone for normal SPS
 var inputValidationFunction = function(input)
 {
  if (input != SCISSORS && input != PAPER && input != STONE)
  {
    return false;
  }
    return true;
 }

 //create input validation to either reversed scissors, reversed paper, reversed stone.
 var inputValidationFunctionForReverseSPS = function(input)
 {
  if (input!= REVERSESCISSORS && input != REVERSEPAPER && input != REVERSESTONE)
  {
    return false;
  }
    return true;
 }

 //create icon for SPS
var iconSPS = function(icon)
{
  if (icon == SCISSORS || icon == REVERSESCISSORS){
    return '✂️';
  }

  if (icon == STONE || icon == REVERSESTONE){
    return '🪨';
  }

  if (icon == PAPER || icon == REVERSESTONE){
    return '📄';
  }
};

 //normal SPS game function
 var normalSPSFunction = function(input){
    //Create Computer SPS selection
    var generateSPS = diceRoll();
    var computerSPS = variableSPS(generateSPS);
    console.log(`Computer SPS selection `, computerSPS);
    
    //Compared userSPS vs ComputerSPS
    var userInput = input;
    console.log(`this is userInput `, userInput);

    var compareSPS = argSPS(userInput, computerSPS);
    console.log(`this is SPS `, compareSPS);

    //generate SPS icon
    var userIcon = iconSPS(userInput); 
    var computerIcon = iconSPS(computerSPS);

    // run function to generate win-loss record
    var winLossStatement = winLossDrawRecord();

    //Print string results based on outcome
    myOutputValue = `User Selection: ${userInput} ${userIcon} <br> Computer  Selection: ${computerSPS} ${computerIcon} <br> ${compareSPS} <br> <br>  ${winLossStatement}`;

    return myOutputValue;
 };

 //reverse SPS game function
 var reverseSPSFunction = function(input){
  //Create Computer SPS selection
  var generateSPS = diceRoll();
  var computerSPS = variableSPS(generateSPS);
  console.log(`Computer SPS selection `, computerSPS);
  
  //Compared userSPS vs ComputerSPS
  var userInput = input;
  console.log(`this is userInput `, userInput);

  var compareSPS = argSPS(userInput, computerSPS);
  console.log(`this is SPS `, compareSPS);

  //generate SPS icon
  var userIcon = iconSPS(userInput); 
  var computerIcon = iconSPS(computerSPS);

  // run function to generate win-loss record
  var winLossStatement = winLossDrawRecord();

  //Print string results based on outcome
  myOutputValue = `User Selection: ${userInput} ${userIcon} <br> Computer  Selection: ${computerSPS} ${computerIcon} <br> ${compareSPS} <br> <br>  ${winLossStatement}`;

  return myOutputValue;
};

//main code to initialize dice roll and compared selection
var main = function (input) 
{
  var myOutputValue;
  //ask for username and enter into SPS game
  if (currentGameMode == 'waiting for user name')
  {
    myOutputValue = userNameInputFunction(input);
    return myOutputValue;
  }
  
  else if (currentGameMode == 'SPS Selection'){
    if (input == 1){
      currentGameMode = 'Normal SPS'
      return `Thank you ${userName}! Please enter scissors, paper or stone to begin!`
    }
    if (input == 2){
      currentGameMode = 'Reverse SPS'
      return `Thank you ${userName}! Please enter reversed scissors, reversed paper or reversed stone to begin!` 
    }
  }

  //normal SPS game mode
  else if (currentGameMode == 'Normal SPS'){
    //if input not SPS, to inform user to key-in again
    checkInput = inputValidationFunction(input);
    if (checkInput == false){
      return wrongInput;
    }    
    var runSPSfunction = normalSPSFunction(input);
    console.log('This is SPS function output', runSPSfunction)
    myOutputValue = runSPSfunction;
  } 
  
  //reverse SPS game mode
  else if (currentGameMode == 'Reverse SPS'){
    //if input not reversed SPS, to inform user to key-in again
    checkInput = inputValidationFunctionForReverseSPS(input);
    if (checkInput == false){
      return wrongInput;
    }    
    var runSPSfunction = normalSPSFunction(input);
    console.log('This is SPS function output', runSPSfunction)
    myOutputValue = runSPSfunction;
  } 

  return myOutputValue;
};