// program internally randomly chooses scissors, paper or stone
// program outputs whether user won, program won or it's a draw
var main = function (input){
var computerSpsObj = generateRandomSign();  
var userSpsObj = input
var winner = determineWinner(userSpsObj,computerSpsObj);
console.log(computerSpsObj)

return winner;
};
var getRandomInteger = function (max) {
  // Generate a decimal from 0 through max + 1.
  // This decimal will be inclusive of 0 and exclusive of max + 1.
  var randomDecimal = Math.random() * (max + 1);

  // Remove the decimal with the floor operation.
  // The resulting integer will be from 0 through max, inclusive of 0 and max.
  var resultInteger = Math.floor(randomDecimal);

  return resultInteger;
};
var generateRandomSign = function (){
  var numOptions = 2;
  var randomSignNum = getRandomInteger (numOptions);
  console.log(randomSignNum);
  if (randomSignNum == 0){
    return 'Scissors';
  }
  if (randomSignNum == 1){
    return 'Paper';
  }
  if (randomSignNum == 2){
    return 'Stone'
  }
};

var determineWinner = function (userSign,computerSign){
  console.log(userSign,computerSign);
  var genericOutput = `You chose: ${userSign}. Computer chose:${computerSign}.`;
  if (userSign == computerSign){
    return `${genericOutput} The game is a draw!`;
  }
  if (userSign == 'Scissors' && computerSign == 'Paper'
  || userSign == 'Paper' && computerSign == 'Stone'
  || userSign == 'Stone' && computerSign == 'Scissors'){
    return `${genericOutput}'You won!'`;
  }
  if (userSign == 'Scissors' && computerSign == 'Stone'
  || userSign == 'Paper' && computerSign == 'Scissors'
  || userSign == 'Stone' && computerSign == 'Paper'){
    return `${genericOutput}'You lost!'`}
  else return `Oops there is a bug! Please type Scissors, Paper or Stone.`
};
