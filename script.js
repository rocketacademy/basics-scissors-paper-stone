  
var SCISSORS = 'scissors'
var STONE = 'stone'
var PAPER = 'paper'
var reversedScissors = 'reversed scissors'
var reversedStone = 'reversed stone'
var reversedPaper = 'reversed paper'

//global variable for holding score

var compScore = 0
var userScore = 0

var main = function (input) {
  // input validation

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

 
  var compChoice = genRandomNum();
  //var compChoice = 'scissors'
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
      output = 'Your input is ' + input +'. <br> computer input is ' + compChoice +'. <br> It is a draw!'
  
  } else if (
      input == SCISSORS && compChoice == STONE ||
      input == STONE && compChoice== PAPER ||
      input == PAPER && compChoice == SCISSORS){
      
      output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice+'. <br> You Lose! <br><br> Try Again!!'
      console.log ('basic winning');

  } else if (
      input == SCISSORS && compChoice == PAPER ||
      input == STONE && compChoice == SCISSORS ||
      input == PAPER && compChoice == STONE ){
           
      output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice+'. <br> You Win! Yayyy! <br><br> Play again!'
      console.log('basic losing');
   
  // Reversed PSP 
  } else if (
      input == reversedScissors && compChoice == SCISSORS ||
      input == reversedStone && compChoice == STONE||
      input == reversedPaper && compChoice == PAPER){

      output = 'Your input is ' + input +'. <br> computer input is ' + 'reversed ' + compChoice +'. <br> It is a draw!'

      console.log ('it is a draw');
  
  } else if (
      input == reversedScissors && compChoice == STONE ||
      input == reversedStone && compChoice == PAPER||
      input == reversedPaper && compChoice == SCISSORS) {

      output = 'Your input is ' + input +'. <br> Computer input is ' + 'reversed ' +compChoice+'. <br> You Win! Yayy! <br><br> Play Again!!'
      console.log ('yaayy winning');
  
  } else if (
      input == reversedScissors && compChoice== PAPER || 
      input == reversedStone && compChoice == SCISSORS||
      input == reversedPaper && compChoice == STONE) { 
        
      output = 'Your input is ' + input +'. <br> Computer input is reversed ' + compChoice+'. <br> You Lose! <br><br> Try again!'

      console.log('oh no losing');

  };
       
  return output;
};



