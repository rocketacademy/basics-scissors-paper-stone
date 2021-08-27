//generate global variable on scissors, paper, stone
var SCISSORS = `scissors`;
var PAPER = `paper`;
var STONE = `stone`;

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
    return SCISSORS
  } 
  if (generateSPS == 1)
  {
    return PAPER
  } 
  if (generateSPS == 2)
  {
    return STONE
  } 
}

//argument on win vs lose vs draw & correpsonding text.
var argSPS = function(userInput, computerSPS) 
{
  //win condition
  if ((userInput == SCISSORS && computerSPS == PAPER) || (userInput == PAPER && computerSPS == STONE) || (userInput == STONE && computerSPS == SCISSORS))
  {
    return `You won!`
  }

  //lose condition
  if ((userInput == SCISSORS && computerSPS == STONE) || (userInput == PAPER && computerSPS == SCISSORS) || (userInput == STONE && computerSPS == PAPER))
  {
    return `You lost =(`
  }

  if ((userInput == computerSPS))
  {
    return `It's a draw!!`
  }
}


//main code to initialize dice roll and compared selection
var main = function (input) 
{
  //create input validation to either scissors paper stone
  if (input != SCISSORS && input != PAPER && input != STONE)
  {
    return `There are only 3 inputs option of \'scissors\', \'paper\' or \'stone\'. Please try again.`
  }
  
  //Create Computer SPS selection
  var generateSPS = diceRoll();
  var computerSPS = variableSPS(generateSPS);
  console.log(`Computer SPS selection `, computerSPS)
  
  //Compared userSPS vs ComputerSPS
  var userInput = input;
  console.log(`this is userInput `, userInput)

  var compareSPS = argSPS(userInput, computerSPS);
  console.log(`this is SPS `, compareSPS)
 
  //Print string results based on outcome
 var myOutputValue = `User Selection: ${userInput} <br> Computer  Selection: ${computerSPS} <br> ${compareSPS}`
  
 return myOutputValue;
}