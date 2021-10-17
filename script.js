var main = function (input) {
  if ((input == 'scissors') || (input == 'stone') || (input == 'paper')) {
  var myOutputValue = getResult(input);
  return myOutputValue;
  };
  return "The input options are scissors, stone or paper. Kindly select from these";
};

var getResult = function(input){
  console.log ('you have input ' + input);
  var handArray = ['stone','paper','scissors'];
  var randomInteger = Math.floor(Math.random()*3);
  var chosenHand = handArray[randomInteger];
  console.log ('system has chosen ' + chosenHand);
  if (input == chosenHand) {
    return ('System also chose ' + chosenHand  +' .Its a Draw');
  };
  if (((input == 'scissors') && (chosenHand =='paper')) || 
     ((input == 'paper') && (chosenHand == 'stone')) || ((input == 'stone') &&  (chosenHand == 'scissors'))){
    return 'System chose ' + chosenHand + ' . You won :)';
  };
  
  return 'System chose ' + chosenHand + ' . You lose. Try again :)';
}
