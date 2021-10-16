var main = function (input) {
  var myOutputValue = '';
  var randomDecimal = Math.random() * 3; 
  // Remove the decimal with the floor operation. 
  // This will be an integer from 0 to 2 inclusive.  
    var randomInteger = Math.floor(randomDecimal);
  console.log (randomInteger)
 
  if (input == 'scissors' && randomInteger == 0){
    myOutputValue = 'The computer also chose scissors, its a draw'  
  }

  if (input == 'scissors' && randomInteger == 1){
    myOutputValue = 'The computer chose paper, you won'  
  }
  if (input == 'scissors' && randomInteger == 2){
    myOutputValue = 'The computer chose stone, you lost'  
  }

  if (input == 'paper' && randomInteger == 0){
    myOutputValue = 'The computer chose scissors, you lost'  
  }

  if (input == 'paper' && randomInteger == 1){
    myOutputValue = 'The computer also chose paper, its a draw'  
  }
  if (input == 'paper' && randomInteger == 2){
    myOutputValue = 'The computer chose stone, you won'  
  }
  if (input == 'stone' && randomInteger == 0){
    myOutputValue = 'The computer chose scissors, you won'  
  }

  if (input == 'stone' && randomInteger == 1){
    myOutputValue = 'The computer chose paper, you lost'  
  }
  if (input == 'stone' && randomInteger == 2){
    myOutputValue = 'The computer also chose stone, its a draw'  
  }

 return myOutputValue 
}
