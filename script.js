//generate random number between 1 to 3 as computer choice
var main = function (input){
  var gameSuit = compChoice ();
  
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
  
// comparing user input vs comp choice
  var chooseWinner = compare(input, gameSuit);
  console.log ('compare result')
  console.log (chooseWinner)
  
  return chooseWinner;
};  

var compChoice = function (input) {
  var randomNum = Math.floor(Math.random() * 3) + 1; 
  return randomNum
 
};

var compare = function (input, gameSuit) {
  var output;
  if (input == 'scissors' && gameSuit == 'scissors') {
     output = 'It is a draw'
    console.log ('same input');
  } 

  if (input == 'paper' && gameSuit == 'paper') {
    output = 'It is a draw'
    console.log ('same input');

  } 
  if (input == 'stone' && gameSuit == 'stone') {
    output = 'It is a draw'
  console.log ('same input');} 

  if (input == 'scissors' && gameSuit == 'stone'){
  output = 'You lose'
  console.log ('scissors stone');
  }

  
  if (input == 'scissors' && gameSuit == 'paper')
  { output = 'You win'
  console.log('scissorpaper')}

  if (input == 'stone' && gameSuit == 'scissors') { output = 'You win'}

  if (input == 'stone' && gameSuit== 'paper'){
   output  = 'You lose'
    console.log ('stone paper');}

    
  if (input == 'paper' && gameSuit == 'scissors')
    { output = 'You lose'
  console.log ('paper scissors');}


    if (input == 'paper' && gameSuit == 'stone') {
      output ='You win'
    console.log ('paper stone');}

  return output;
  }
