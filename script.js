var winCount = 0;
var lostCount = 0;
var drawCount = 0;
var count = 0;
var main = function (input) {
  ++count;
  if ((input == 'scissors') || (input == 'stone') || (input == 'paper')) {
    var myOutputValue = getResult(input);
    return myOutputValue;
  };
  return "The input options are scissors, stone or paper. Kindly select from these";
};

var getResult = function (input) {
  console.log('you have input ' + input);
  var handArray = ['stone', 'paper', 'scissors'];
  var randomInteger = Math.floor(Math.random() * 3);
  var chosenHand = handArray[randomInteger];
  console.log('system has chosen ' + chosenHand);
  if (input == chosenHand) {
    ++drawCount;
    return ('System also chose ' + chosenHand + '. Its a Draw. No. of draws = ' + drawCount + '/' + count);

  };
  if (((input == 'scissors') && (chosenHand == 'paper')) ||
    ((input == 'paper') && (chosenHand == 'stone')) || ((input == 'stone') && (chosenHand == 'scissors'))) {
    ++winCount;
    return 'System chose ' + chosenHand + '. You won :) No. of Wins = ' + winCount + '/' + count;
  };
  ++lostCount;
  return 'System chose ' + chosenHand + '. You lose. Try again :) No. of times lost ' + lostCount + '/' + count;
}
