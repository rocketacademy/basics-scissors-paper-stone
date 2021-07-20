  
var SCISSORS = 'scissors'
var STONE = 'stone'
var PAPER = 'paper'
var reversedScissors = 'reversed scissors'
var reversedStone = 'reversed stone'
var reversedPaper = 'reversed paper'



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
  var playerInput = input;
  var compChoice = genRandomNum();
 // var compChoice = 'scissors'
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
  
} else if (input == SCISSORS && compChoice ==   STONE){
    output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice+'. <br> You Lose! <br><br> Try Again!!'
  console.log ('scissors stone');

} else if (input == SCISSORS && compChoice== PAPER)
  { 
    output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice+'. <br> You Win! Yayyy! <br><br> Play again!'
  console.log('scissorpaper')

} else if (input == STONE && compChoice== SCISSORS) { 
  output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice+'. <br> You Win! Yayyy! <br><br> Play again!'
  
} else if (input == STONE && compChoice== PAPER){
   output  = 'Your input is ' + input +'. <br> Computer input is ' + compChoice +'. <br> You Lose! <br><br> Try Again!!'

  console.log ('stone paper');

} else if (input == PAPER && compChoice == SCISSORS) {
   output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice +'. <br> You Lose! <br><br> Try Again!!'
    
    console.log ('paper scissors');

} else if (input == PAPER && compChoice == STONE) {
  output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice  +'. <br> You Win! Yayyy! <br><br> Play again!'
      
    console.log ('paper stone');

// Reversed PSP 
} else if (input == reversedScissors && compChoice == SCISSORS) {
  output = 'Your input is ' + input +'. <br> computer input is ' + 'reversed ' + compChoice +'. <br> It is a draw!'

  console.log ('reversed scissors scissors');
  
} else if (input == reversedStone && compChoice == STONE){
  output = 'Your input is ' + input +'. <br> computer input is ' + 'reversed ' + compChoice +'. <br> It is a draw!'
  
} else if (input == reversedPaper && compChoice == PAPER){
  output = 'Your input is ' + input +'. <br> computer input is ' + 'reversed ' + compChoice +'. <br> It is a draw!'

} else if (input == reversedScissors && compChoice == STONE){
  output = 'Your input is ' + input +'. <br> Computer input is ' + 'reversed ' +compChoice+'. <br> You Win! Yayy! <br><br> Play Again!!'
  console.log ('reversed scissors stone');
  
} else if (input == reversedScissors && compChoice== PAPER)
  { output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice+'. <br> You Lose! <br><br> Try again!'
  console.log('reversed scissorpaper')

} else if (input == reversedStone && compChoice == SCISSORS) 
  { output = 'Your input is ' + input +'. <br> Computer input is ' + compChoice+'. <br> You Lose! <br><br> Try again!'
  
  console.log ('reversed stone scissors');

} else if (input == reversedStone && compChoice == PAPER)
  { output  = 'Your input is ' + input +'. <br> Computer input is ' + 'reversed ' + compChoice +'. <br> You Win!! Yayy! <br><br> Play Again!!'

  console.log ('reversed stone paper');
  
} else if (input == reversedPaper && compChoice == SCISSORS)
  { output = 'Your input is ' + input +'. <br> Computer input is ' + 'reversed ' + compChoice +'. <br> You Win! Yayy! <br><br> Play Again!!'
    
    console.log ('reversed paper scissors');
  
} else if (input == reversedPaper && compChoice == STONE) 
  { output = 'Your input is ' + input +'. <br> Computer input is ' + 'reversed ' + compChoice
 +'. <br> You Lose! <br><br> Try again!'
      
    console.log ('reversed paper stone');
  }
  return output;
};



