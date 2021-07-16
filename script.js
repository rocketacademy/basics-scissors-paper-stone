//SPS
var computerRandom =function() {
  var ranNum = Math.floor(Math.random() * 3);
  console.log(ranNum)
  if (ranNum = 0) {
     return 'stone';
  } else if(ranNum = 1) {
    return 'paper' ;
  } else {
    return 'scissors' ;
  }
}

var main =function(input){
  var computerChoice = computerRandom(); 
  if (input != 'scissors' && input !='paper' && input !='stone'){
    return 'There are only 3 input options, please try again!'
  }
  else if (input== computerChoice){
    return ` You typed ${input}. <br> Computer played ${computerChoice}. <br> It is a tie!`
  }
  else if( input == 'scissors' && computerChoice == 'paper' ||
   input ==' paper' && computerChoice =='stone' ||
    input ==' stone' && computerChoice =='scissors')
  {return `You typed ${input}. <br> Computer played ${computerChoice}. <br> Congratulations, you win!`
  }
  else if (input == 'scissors' && computerChoice == 'stone' ||
   input == 'paper' && computerChoice == 'scissors' || 
   input == 'stone' && computerChoice == 'paper') {
    return `You typed ${input}. <br> Computer played ${computerChoice}. <br> Now you can type "scissors" "paper" or "stone" to play another round!`
    } 
}
console.log(main('scissors'))

// // Reverse SPS
var computerRandom =function() {
  var ranNum = Math.floor(Math.random() * 3);
  console.log(ranNum)
  if (ranNum = 0) {
     return 'stone';
  } else if(ranNum = 1) {
    return 'paper' ;
  } else {
    return 'scissors' ;
  }
}

var main =function(input){
  var computerChoice = computerRandom(); 
  if (input != 'reversed scissors' && input != 'reversed paper' && input != 'reversed stone'){
    return 'There are only 3 input options, please try again!'
  }
  else if (input== computerChoice){
    return ` You typed ${input}. <br> Computer played ${computerChoice}. <br> It is a tie!`
  }
  else if( input == 'reversed scissors' && computerChoice == 'paper' ||
   input ==' reversed paper' && computerChoice =='stone' ||
    input ==' reversed stone' && computerChoice =='scissors'
    )
  {return `You typed ${input}. <br> Computer played ${computerChoice} Sorry, you lose! <br> Now you can type "scissors" "paper" or "stone" to play another round!`
  }
  else if (input == 'reversed scissors' && computerChoice == 'stone' ||
   input == 'reversed paper' && computerChoice == 'scissors' || 
   input == 'reversed stone' && computerChoice == 'paper'
   ) {
    return `You typed ${input}. <br> Computer played ${computerChoice}. <br> Congratulations, you win!`
    } 
}
console.log(main('reversed stone'))