  
var SCISSORS = 'scissors'
var STONE = 'stone'
var PAPER = 'paper'
var reversedScissors = 'reversed scissors'
var reversedStone = 'reversed stone'
var reversedPaper = 'reversed paper'

//global variable for holding score and name
var userName = '';
var currentGameMode = 'waiting for user name';
var compCount = 0;
var userCount = 0;
var drawCount = 0;



var main = function (input) {
  // input validation
 console.log (main);
  if (currentGameMode == 'waiting for user name'){
    // set the name
    console.log ('current game mode');
    userName = input;

    // Now as we have the name, change gamemode to psp game.

    currentGameMode = 'sps game';

    output = 'Hello, ' + userName + ', Welcome to Scissors Paper Stone! <br> <br> Please enter scissors, paper, stone, reversed scissors, reversed paper or reversed stone. <br><br> ATTENTION: please use lower case only.';
    return output;

  } else if (currentGameMode == 'sps game') {
   // sps game logic
   //var inputValue = [SCISSORS, STONE, PAPER, reversedScissors, reversedStone, reversedPaper];
  
  
    if (
      input !== SCISSORS &&
      input !== STONE &&
      input !== PAPER &&
      input !== reversedPaper &&
      input !== reversedScissors &&
      input !== reversedStone) {    

      console.log ('input validation');
      output = "Your input must be all lower case! <br><br> Your choices are scissors, stone, paper, reversed scissors, reversed stone or reversed paper. <br><br> It is case sensitive. <br> <br> Please try again!!"; 
      return output
    }
  };
 
  //var compChoice = genRandomNum();
  var compChoice = 'scissors'
  // to test 
  console.log ('computer input')
  console.log (compChoice)

  if (compChoice == 1) {
  compChoice = SCISSORS
  } 

  if (compChoice == 2) {
  compChoice = STONE
  } 

  if (compChoice == 3){
  compChoice = PAPER
  } 
 console.log ('computer choice');
 console.log (compChoice);

 // Run the compare function 
var result = compare (input, compChoice);
console.log ('result');
console.log (result);
return result;
};

       
// Assign paper, scissors, stone to random number
//Generate random number to determine computer choice
    
  var genRandomNum = function () {
  var randomNum = Math.floor(Math.random() * 3) + 1;
  
  return randomNum;
  }; 

  

//Basic PSP rules validation
// Getting winner

var compare = function (input, compChoice){
  var output;

  if (input == compChoice){

      drawCount = drawCount + 1;
      output = 'Your input is ' + input +'. <br> computer input is ' + compChoice +'. <br> It is a draw! <br><br> Your score: <br> Draw = ' + drawCount + '<br> Win = ' + userCount + '<br> Lose = ' + compCount 

  } else if (
      input == SCISSORS && compChoice == STONE ||
      input == STONE && compChoice== PAPER ||
      input == PAPER && compChoice == SCISSORS){
      
      compCount = compCount + 1;
      output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice+'. <br> You Lose! <br><br> Try Again!! <br><br> Your score: <br> Draw = ' + drawCount + '<br> Win = ' + userCount + '<br> Lose = ' + compCount

      console.log ('basic winning');

  } else if (
      input == SCISSORS && compChoice == PAPER ||
      input == STONE && compChoice == SCISSORS ||
      input == PAPER && compChoice == STONE ){
      
      userCount = userCount + 1  
      output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice+'. <br> You Win! Yayyy! <br><br> Play again! <br><br> Your score: <br> Draw = ' + drawCount + '<br> Win = ' + userCount + '<br> Lose = ' + compCount
      
      console.log('basic losing');
   
  // Reversed PSP 
  } else if (
      input == reversedScissors && compChoice == SCISSORS ||
      input == reversedStone && compChoice == STONE||
      input == reversedPaper && compChoice == PAPER){

      drawCount = drawCount + 1  
      output = 'Your input is ' + input +'. <br> computer input is ' + 'reversed ' + compChoice +'. <br> It is a draw! <br><br> Your score: <br> Draw = ' + drawCount + '<br> Win = ' + userCount + '<br> Lose = ' + compCount

      console.log ('it is a draw');
  
  } else if (
      input == reversedScissors && compChoice == STONE ||
      input == reversedStone && compChoice == PAPER||
      input == reversedPaper && compChoice == SCISSORS) {

      userCount = userCount + 1
      output = 'Your input is ' + input +'. <br> Computer input is ' + 'reversed ' +compChoice+'. <br> You Win! Yayy! <br><br> Play Again!! <br><br> Your score: <br> Draw = ' + drawCount + '<br> Win = ' + userCount + '<br> Lose = ' + compCount
      console.log ('yaayy winning');
  
  } else if (
      input == reversedScissors && compChoice== PAPER || 
      input == reversedStone && compChoice == SCISSORS||
      input == reversedPaper && compChoice == STONE) { 
        
      compCount = compCount + 1  
      output = 'Your input is ' + input +'. <br> Computer input is reversed ' + compChoice+'. <br> You Lose! <br><br> Try again! <br><br> Your score: <br> Draw = ' + drawCount + '<br> Win = ' + userCount + '<br> Lose = ' + compCount

      console.log('oh no losing');

  };
       
  return output;
};
