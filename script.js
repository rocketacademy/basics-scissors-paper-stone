
var main = function (input){
  // input validation
var input; 
var inputValue = ['stone', 'scissors', 'paper'];
 if (inputValue.indexOf(input) <= -1){
 

    output = "Your input must be either scissors, stone or paper. <br> It is case sensitive. <br> Please try again!!";

    console.log ('input validation');
    return output;

    
  } else { gameSuit
  };


//generate random number between 1 to 3 as computer choice

  var gameSuit = compChoice ();
 // var gameSuit = 'scissors'
  console.log ('gamesuite')
  console.log (gameSuit)

  if (gameSuit == 1) {
  gameSuit = 'scissors'
  } 

  if (gameSuit == 2) {
  gameSuit = 'stone'
  } 

  if (gameSuit == 3){
  gameSuit = 'paper'
  } 
 console.log ('computer choice')
 console.log (gameSuit)
  
// Getting winner using compare function below
  var chooseWinner = compare(input, gameSuit);
  console.log ('compare result')
  console.log (chooseWinner)
  
  return chooseWinner;
};  
// Generate random number to determine computer choice
var compChoice = function (input) {
  var randomNum = Math.floor(Math.random() * 3) + 1; 
  return randomNum
 
};
//Compare comp choice with user input
var compare = function (input, gameSuit) {
  var output;
  
  if (input == gameSuit){
    output = 'Your input is ' + input +'. <br> computer input is ' + gameSuit +'. <br> It is a draw!'
  }
  
  
  if (input == 'scissors' && gameSuit == 'stone'){
  output = 'Your input is ' + input +'. <br> Computer input is ' + gameSuit +'. <br> You Lose! <br><br> Try Again!!'
  console.log ('scissors stone');
  }

  
  if (input == 'scissors' && gameSuit == 'paper')
  { output = 'Your input is ' + input +'. <br> Computer input is ' + gameSuit +'. <br> You Win! Yayyy! <br><br> Play again!'
  console.log('scissorpaper')}

  if (input == 'stone' && gameSuit == 'scissors') { output = 'Your input is ' + input +'. <br> Computer input is ' + gameSuit +'. <br> You Win! Yayyy! <br><br> Play again!'
  }

  if (input == 'stone' && gameSuit== 'paper'){
   output  = 'Your input is ' + input +'. <br> Computer input is ' + gameSuit +'. <br> You Lose! <br><br> Try Again!!'

  console.log ('stone paper');
  }

    
  if (input == 'paper' && gameSuit == 'scissors')
    { output = 'Your input is ' + input +'. <br> Computer input is ' + gameSuit +'. <br> You Lose! <br><br> Try Again!!'
    
    console.log ('paper scissors');
  }


    if (input == 'paper' && gameSuit == 'stone') {
      output = 'Your input is ' + input +'. <br> Computer input is ' + gameSuit +'. <br> You Win! Yayyy! <br><br> Play again!'

    console.log ('paper stone');
  }

  return output;
  };
