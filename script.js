var currentMode = 'Pending User Name'; 
var userName = '' ;
var chooseCurrentGame = '';

var generateTotalPlays = 0 ;
var generateWinTracker = 0 ;   
var generateLossTracker = 0 ;
var generateDrawTracker = 0 ;


var playSPS = function (userName, input) {
  var message = ''; 

// SPS game logic 
  var computerOutput = generateOutput ();
  generateTotalPlays += 1 

  console.log ('computer output')
  console.log (computerOutput)


    if (input == computerOutput){
      generateDrawTracker += 1 
      message = "DRAW" + '<br>'+' You chose: '+input+'<br>Computer chose: '
      +computerOutput+'<br><br>'+' Win-Loss record: '+'<br>'+' Computer: ' +
      generateLossTracker +'<br>'+' User: ' + generateWinTracker +'<br>'+'Draw: '
      + generateDrawTracker + '<br><br>' + 'You have played a total of: ' + generateTotalPlays + ' times';  
    }

//wins
  else if ((input == "scissors" && computerOutput == "paper") || 
  (input == "paper" && computerOutput == "stone") || 
  (input == "stone" && computerOutput == "scissors")){
     
      generateWinTracker += 1 
      message = "Congrats "+userName+". You are a winner" + '<br>'+' You chose: '+input+'<br>Computer chose: '
      +computerOutput+'<br><br>'+' Win-Loss record: '+'<br>'+' Computer: ' +
      generateLossTracker +'<br>'+' User: ' + generateWinTracker +'<br>'+'Draw: '
      + generateDrawTracker + '<br><br>' + 'You have played a total of: ' + generateTotalPlays + ' times'; 
    }

//losses 
  else if ((input == "scissors" && computerOutput == "stone") ||
    (input == "paper" && computerOutput == "scissors") || 
    (input == "stone" && computerOutput == "paper")){
      
      generateLossTracker += 1 
      message = "You lose,"+userName+"." + '<br>'+' You chose: '+input+'<br>Computer chose: '
      +computerOutput+'<br><br>'+' Win-Loss record: '+'<br>'+' Computer: ' +
      generateLossTracker +'<br>'+' User: ' + generateWinTracker +'<br>'+'Draw: '
      + generateDrawTracker + '<br><br>' + 'You have played a total of: ' + generateTotalPlays + ' times'; 
    }

  else message = 'Typo error: try again. '+'<br>'+
  'Inputs: scissors, paper or stone'

  return message ;
}; 

var playReverse = function (userName, input) {
  var message = ''; 

// Reverse game logic 
  var computerOutput = generateOutput ();
  generateTotalPlays += 1 

  console.log ('computer output')
  console.log (computerOutput)

    if (input == computerOutput){
      generateDrawTracker = generateDrawTracker + 1 
      message = "DRAW" + '<br>'+' You chose: '+input+'<br>Computer chose: '
      +computerOutput+'<br><br>'+' Win-Loss record: '+'<br>'+' Computer: ' +
      generateLossTracker +'<br>'+' User: ' + generateWinTracker +'<br>'+'Draw: '
      + generateDrawTracker + '<br><br>' + 'You have played a total of: ' + generateTotalPlays + ' times';  
    }


//wins
  else if ((input == "reversed scissors" && computerOutput == "stone") 
    || (input == "reversed paper" && computerOutput == "scissors")
    || (input == "reversed stone" && computerOutput == "paper")){
     
      generateWinTracker += 1 
      message = "Congrats "+userName+". You are a winner" + '<br>'+' You chose: '+input+'<br>Computer chose: '
      +computerOutput+'<br><br>'+' Win-Loss record: '+'<br>'+' Computer: ' +
      generateLossTracker +'<br>'+' User: ' + generateWinTracker +'<br>'+'Draw: '
      + generateDrawTracker + '<br><br>' + 'You have played a total of: ' + generateTotalPlays + ' times'; 
    }

//losses 
  else if ((input == "reversed scissors" && computerOutput == "paper")
    || (input == "reversed paper" && computerOutput == "stone")
    || (input == "reversed stone" && computerOutput == "scissors")){
      
      generateLossTracker += 1 
      message = "You lose,"+userName+"." + '<br>'+' You chose: '+input+'<br>Computer chose: '
      +computerOutput+'<br><br>'+' Win-Loss record: '+'<br>'+' Computer: ' +
      generateLossTracker +'<br>'+' User: ' + generateWinTracker +'<br>'+'Draw: '
      + generateDrawTracker + '<br><br>' + 'You have played a total of: ' + generateTotalPlays + ' times'; 
    }

  else message = 'Typo error: try again. '+'<br>'+
  'Inputs: reversed scissors, reversed paper or reversed stone'

  return message ;
}; 


console.log ('total play')
console.log (generateTotalPlays)


var main = function (input) {
 
  console.log (currentMode)

  var myOutputValue = ''; 


  if (currentMode == 'Pending User Name') {
    userName = input ; 
    currentMode = "Select Game" ; 
    return myOutputValue = 'Welcome '+userName+ '. Begin play by selecting game mode: SPS or Reverse';
  } 

  if (currentMode == 'Select Game') {
   chooseCurrentGame = input ;
    currentMode = 'Play'
    return
  } 

   if (chooseCurrentGame == 'SPS' && currentMode == 'Play') {
    return myOutputValue = playSPS (userName, input);
  }

  if (chooseCurrentGame == 'Reverse' && currentMode == 'Play') {
    return myOutputValue = playReverse (userName, input);
  }

  return myOutputValue;
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