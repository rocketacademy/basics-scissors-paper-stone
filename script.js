var main = function (input) {
  if ((input =='scissors') || (input=='stone') || (input== 'paper')) {
  var myOutputValue = getResult(input);
  return myOutputValue;
  }
  return "The input options are scissors, stone or paper. Kindly select from these";
};

var getResult = function(input){
  console.log ('you have input ' + input);
  var arrayItems = ['stone','paper','scissors'];
  var random = Math.floor(Math.random()*3);
  var value = arrayItems[random];
  console.log ('system has chosen ' + value);
  if (input==value) {
    return ('System also choose ' + value  +' .Its a Draw');
  }
  if ((input=='scissors') && (value=='paper')){
    return 'System choose ' + value + ' . You won :)';
  }
  if ((input=='paper') && (value=='stone')){
    return 'System choose ' + value + ' . You won :)';
  }
  if ((input=='stone') && (value=='scissors')){
    return 'System choose ' + value + ' . You won:)';
  }
  
  return 'System choose ' + value + ' . You lose. Try again :)';
}
