var main = function (input) {
  
  var computerOutput = generateOutput ();
  var genericOutput = ' You chose: '+input+'<br>Computer chose: '+computerOutput+'<br><br>' ; 

    if (input == computerOutput){
      return genericOutput + "DRAW"
    }

  // input is scissors ; 
  // computer is paper: win 
  // computer is stone: lose  
    if ((input == "scissors" && computerOutput == "paper") || (input == "reversed scissors" && computerOutput == "stone")){
      return genericOutput + "Winner"
    }
    if ((input == "scissors" && computerOutput == "stone") || (input == "reversed scissors" && computerOutput == "paper")){
      return genericOutput + "Loser" 
    }

  // input is paper ; 
  // computer is scissors: lose
  // computer is stone: win   
    if ((input == "paper" && computerOutput == "stone") || (input == "reversed paper" && computerOutput == "scissors")){
      return genericOutput + "Winner"
    }
    if ((input == "paper" && computerOutput == "scissors") || (input == "reversed paper" && computerOutput == "stone")){
      return genericOutput + "Loser"
    }

  // input is stone ; 
  // computer is scissors: win
  // computer is paper: lose   
    if ((input == "stone" && computerOutput == "scissors") || (input == "reversed stone" && computerOutput == "paper")){
      return genericOutput + "Winner"
    }
    if ((input == "stone" && computerOutput == "paper") || (input == "reversed stone" && computerOutput == "scissors")){
      return genericOutput + "Loser"
    }

    return "try again: typo error"
 
};


// random number generated from 1 to 3 
var randomNumber = function () {
  var generateDec = Math.random() ;
  var generateNumb = generateDec * 3 ;
  var generateInteger = Math.ceil(generateNumb) ;
  return generateInteger;   
}; 
console.log ('randomNumber')
console.log (randomNumber())

// assign scissors, paper or stone to number
var generateOutput = function () {
  var totalOutput = 3 ; 
  var assignNumber = randomNumber(totalOutput); 
  if (assignNumber == 1) {
    return 'scissors' ;
  }
  if (assignNumber == 2) {
    return 'paper' ;
  }
  return 'stone';
};
console.log ('generateOutput')
console.log (generateOutput())