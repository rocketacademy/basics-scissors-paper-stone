var main = function (input) {
  console.log(show);
  //Basic Scissors Paper Stone
//   var myOutputValue = 'Same. Play again!';
//   var opposition = randomObject();
//   console.log(opposition);
//   if(opposition == 'paper' && input == 'scissors' || opposition == 'scissors' && input == 'stone' || opposition == 'stone' && input == 'paper'){
//     myOutputValue = 'You win!';
//   }

//   if(opposition == 'paper' && input == 'stone' || opposition == 'scissors' && input == 'paper' || opposition == 'stone' && input == 'scissors') {
//     myOutputValue = 'You lose!';
//   }
//   return myOutputValue;
// };

// //Generate computer to pick scissor, paper or stone
// var randomObject = function (){
//   var randomDecimal = Math.random() * 3;
//   var randomInteger = Math.floor(randomDecimal);
//   console.log(randomInteger);
//   if(randomInteger == 0) {
//     return 'scissors';
//   }

//   if(randomInteger == 1) {
//     return 'paper';
//   }

//   if(randomInteger == 2) {
//     return 'stone';
//   }
// }

//More Comfortable
//Reverse Game
  var myOutputValue = 'Same. Play again!';
  var opposition = randomObject();
  var show = message(input,opposition);
  console.log(`opposition${opposition}`);
  if(opposition == 'paper' && input == 'reversed scissors' || opposition == 'paper' && input == 'stone'|| opposition == 'scissors' && input == 'reversed stone' || opposition == 'scissors' && input == 'paper'|| opposition == 'stone' && input == 'reversed paper' || opposition == 'stone' && input == 'scissors'){
    myOutputValue = `${show} <br><br> You lose! Bummer. <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  if(opposition == 'paper' && input == 'reversed stone' || opposition == 'paper' && input == 'scissors' || opposition == 'scissors' && input == 'reversed paper' || opposition == 'scissors' && input == 'stone' || opposition == 'stone' && input == 'reversed scissors' || opposition == 'stone' && input == 'paper') {
     myOutputValue = `${show} <br><br> You win!`;
  }
  console.log(myOutputValue);
  return myOutputValue;
};

//Generate computer to pick scissor, paper or stone
var randomObject = function (){
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if(randomInteger == 0) {
    return 'scissors';
  }
  if(randomInteger == 1) {
    return 'paper';
  }
  if(randomInteger == 2) {
    return 'stone';
  }
}

var icon = function(object) {

  if (object == 'scissors' || object == 'reversed scissors'){
    return '✂️';
  }
  if (object == 'paper' || object == 'reversed paper'){
    return '🗒';
  }
  if (object == 'stone' || object == 'reversed stone'){
    return '🪨';
  }
}

var message = function(input,opposition) {
  console.log('message');
  var userObjectIcon = icon(input);
  var oppositionIcon = icon(opposition);
  return `The computer chose ${opposition} ${oppositionIcon} <br><br> You chose ${userObjectIcon} ${input}`; 
}





 