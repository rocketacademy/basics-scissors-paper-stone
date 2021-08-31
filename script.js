// ------ ROCK PAPER SCISSORS -----//
var userPoints = 0;
var comPoints = 0;
var userName = '';

var main = function (input) {
// get userName as user's first input
if (!userName){
  if (!input){
  return 'Please input username';
}
  userName = input;
  return 'Hello ' +userName+ ' ! To start playing, please enter "scissors", "paper" or "rock"!'
}
if (input == 'scissors' || input == 'paper' || input == 'rock'){
  var comPlay = convertNumbertoComPlay(randomNumber());
  return gamePlay(input,comPlay);
}
};


var randomNumber = function(){
  var randomDecimal = Math.random()*3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger; 
};

var convertNumbertoComPlay = function(number){
  if (number == 1){
    return 'scissors';
  }
  
  else if (number == 2){
    return 'paper';
  }
  
  else if (number == 0){
    return "rock";
  }
};

var gamePlay = function(userPlay, comPlay){
  if (userPlay == comPlay){
    return 'It is a tie! <br> Both you and computer played ' +userPlay+ '. The current record is: user: ' +userPoints+ ' computer: '+comPoints ;
  }

  else if (userPlay == 'scissors'){
    if (comPlay == 'paper'){
      userPoints = userPoints + 1;
      return 'Yay! You won! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> The current record is: user: ' +userPoints+ ' computer: '+comPoints ;
    }
    else { 
      comPoints = comPoints +1;
      return 'Aww...you lost! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> The current record is: user: ' +userPoints+ ' computer: '+comPoints;
    }
  }

  else if (userPlay == 'paper'){
    if (comPlay == 'rock'){
      userPoints = userPoints + 1;
      return 'Yay! You won! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> The current record is: user: ' +userPoints+ ' computer: '+comPoints ;
  }
  else {
    comPoints = comPoints +1;
    return 'Aww...you lost! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> The current record is: user: ' +userPoints+ ' computer: '+comPoints ;
  }
}
  else if (userPlay == 'rock'){
    if (comPlay == 'scissors'){
      userPoints = userPoints + 1;
      return 'Yay! You won! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> The current record is: user: ' +userPoints+ ' computer: '+comPoints ;
    }
    else{
      comPoints = comPoints +1;
      return 'Aww...you lost! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> The current record is: user: ' +userPoints+ ' computer: '+comPoints ;
    }
  }
  else{
    return 'Invalid response! <br> Please input only: scissors, paper or rock.'
  }
};

// // ------ REVERSE SCISSORS PAPER STONE ------ //
// var main = function (input) {
//   var comPlay = convertNumbertoComPlay(randomNumber());
//   return gamePlay(input,comPlay);
// };

// var randomNumber = function(){
//   var randomDecimal = Math.random()*3;
//   var randomInteger = Math.floor(randomDecimal);
//   return randomInteger; 
// }

// var convertNumbertoComPlay = function(number){
//   if (number == 1){
//     return 'reversed scissors';
//   }
  
//   else if (number == 2){
//     return 'reversed paper';
//   }
  
//   else if (number == 0){
//     return "reversed rock";
//   }
// }

// var gamePlay = function(userPlay, comPlay){
//   if (userPlay == comPlay){
//     return 'It is a tie! <br> Both you and computer played ' +userPlay
//   }

//   else if (userPlay == 'reversed scissors'){
//     if (comPlay == 'reversed paper'){
//       return 'Aww...you lost! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> Now you can type "scissors", "paper" or "stone" to play another round!';
//     }
//     else { 
//       return 'Yay! You won! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> Now you can type "scissors", "paper" or "stone" to play another round!';
//     }
//   }

//   else if (userPlay == 'reversed paper'){
//     if (comPlay == 'reversed rock'){
//       return 'Aww...you lost! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> Now you can type "scissors", "paper" or "stone" to play another round!';
//   }
//   else {
//     return 'Yay! You won! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> Now you can type "scissors", "paper" or "stone" to play another round!';
//   }
// }
//   else if (userPlay == 'reversed rock'){
//     if (comPlay == 'reversed scissors'){
//       return 'Aww...you lost! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> Now you can type "scissors", "paper" or "stone" to play another round!';
//     }
//     else{
//       return 'Yay! You won! <br> Computer played ' +comPlay+ ' and you played ' +userPlay+ '. <br> Now you can type "scissors", "paper" or "stone" to play another round!';
//     }
//   }
//   else{
//     return 'Invalid response! <br> Please input only: reversed scissors, reversed paper or reversed rock.'
//   }
// };