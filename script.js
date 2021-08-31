//generate global variable on scissors, paper, stone
const SCISSORS = `scissors`;
const PAPER = `paper`;
const STONE = `stone`;
var currentGameMode = 'waiting for user name';
var userName = ``;
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

//generate computer scissors, paper stone based on number
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

//argument on win vs lose vs draw & correpsonding text.
var argSPS = function (userInput, computerSPS) 
{
  //win condition
  if ((userInput == SCISSORS && computerSPS == PAPER) || (userInput == PAPER && computerSPS == STONE) || (userInput == STONE && computerSPS == SCISSORS))
  {
    winRecord += 1;
    calcTotalPlay += 1;
    return `You won!`;
  }

  //lose condition
  if ((userInput == SCISSORS && computerSPS == STONE) || (userInput == PAPER && computerSPS == SCISSORS) || (userInput == STONE && computerSPS == PAPER))
  {
    lossRecord += 1;
    calcTotalPlay += 1;
    return `You lost =(`;
  }

  if ((userInput == computerSPS))
  {
    drawRecord += 1;
    calcTotalPlay += 1;
    return `It's a draw!!`;
  }
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
 }

//main code to initialize dice roll and compared selection
var main = function (input) 
{
  var myOutputValue;
  //trigger username and enter into SPS game
  if (currentGameMode == 'waiting for user name')
  {
    userName = input;

    currentGameMode = `SPS game`;

    myOutputValue = `Hello ${userName}`;

    return myOutputValue;
  }
  
  else if (currentGameMode == `SPS game`)
  {

  //create input validation to either scissors paper stone
  if (input != SCISSORS && input != PAPER && input != STONE)
  {
    return `There are only 3 inputs option of "scissors", "paper" or "stone". Please try again.`;
  }
   

  //Create Computer SPS selection
  var generateSPS = diceRoll();
  var computerSPS = variableSPS(generateSPS);
  console.log(`Computer SPS selection `, computerSPS);
  
  //Compared userSPS vs ComputerSPS
  var userInput = input;
  console.log(`this is userInput `, userInput);

  var compareSPS = argSPS(userInput, computerSPS);
  console.log(`this is SPS `, compareSPS);
 
  // run function to generate win-loss record
  var winLossStatement = winLossDrawRecord();

      //Print string results based on outcome
  myOutputValue = `User Selection: ${userInput} <br> Computer  Selection: ${computerSPS} <br> ${compareSPS} <br> <br>  ${winLossStatement}`;
  
      return myOutputValue;

  }
};
