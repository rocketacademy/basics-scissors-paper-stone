var sps1 = 'scissors';
var sps2 = 'paper';
var sps3 = 'stone';
var computerSPS ='';
var myOutputValue = '';

var rollDice = function () {
  randomInteger = Math.floor(Math.random() * 3);
  return randomInteger
};

var SPS = function(){
  if (randomInteger == 0){
    computerSPS = sps1;  
  }
  if (randomInteger == 1){
    computerSPS = sps2;
  }
  if (randomInteger == 2){
    computerSPS = sps3;
  }
  return computerSPS;
};

var main = function (input){
  var myOutputValue = '';
  if (input == computerSPS){
    myOutputValue = 'It is a draw, please play again!';
  }

  if ((input == 'scissors' && computerSPS == 'paper') ||
  (input == 'paper' && computerSPS == 'stone') ||
  (input == 'stone' && computerSPS == 'scissors') ){
  myOutputValue = 'You win!';
  }
  if ((input == 'scissors' && computerSPS == 'stone') ||
  (input == 'paper' && computerSPS == 'scissors') ||
  (input == 'stone' && computerSPS == 'paper') ){
  myOutputValue = 'You lose! Please play again';
  }
}
