var sciccors = "scissors"
var rock = "rock"
var paper = "paper"


var main = function (input) {
  var myOutputValue = "hi, your move doesn't seem to be valid, please try again with rock, paper, or scissors";
  return myOutputValue;

  // if(!input == "rock" && !input == "paper" && !input == "scissors"){
  //   myOutputValue = "hi, your move doesn't seem to be valid, please try again with rock, paper, or scissors"
  // }

if(input == systemMove){
  myOutputValue = "oops! you tied"
  } else if((input == "scissors" && systemMove == "paper") || (input == "paper" && systemMove == "rock") || (input == "rock" && systemMove == "scissors")){
    myOutputValue = "congratulations! you won!";
  } else {
    myOutputValue = "unlucky! you lost"
  };
  return myOutputValue;
};  


var RPS = function(){
  var randomHand = Math.random() * 3;
  var randomInteger = Math.floor(randomHand);
  var systemMove = randomInteger + 1;

var systemMove = "";
  if(randomHand == 1){
    systemMove = "rock";
  } else if (randomHand == 2){
    systemMove = "scissors";
  } else if (randomHand == 3){
    systemMove = "paper";
  }
  myOutputValue = "System picks" + systemMove;
}