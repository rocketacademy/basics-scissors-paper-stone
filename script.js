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
  


  
  var chooseWinner = compare();
  console.log ('compare result')
  console.log (chooseWinner)
  
  return myOutputValue;
};



var compChoice = function (input) {
  var randomNum = Math.floor(Math.random() * 3) + 1; 
  return randomNum

};

var compare = function (input, compChoice) {

if (input == compChoice) {
  myOutputValue = 'It is a draw'
}

if (input == 'scissors' && compChoice == 'stone'){
 myOutputValue = 'You lose'}

 if (input == 'scissors' && compChoice == 'paper'){ myOutputValue = 'You win'}

 if (input == 'stone' && compChoice == 'scissors') { myOutputValue = 'You win'}

 if (input == 'stone' && compChoice == 'paper'){
   myOutputValue = 'You lose'}

 if (input == 'paper' && compChoice == 'scissors')
  { myOutputValue = 'You lose'}

  if (input == 'paper' && compChoice == 'stone') {
    myOutputValue ='You win'
  }

  return myOutputValue;}
