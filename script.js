var main = function (input) {
  var myOutputValue = getResult(input);
  return myOutputValue;
};

var getResult = function(input){
  console.log ('you have input ' + input);
  var arrayItems = ['stone','paper','scissors'];
  var random = Math.floor(Math.random()*3);
  var value = arrayItems[random];
  console.log ('system has chosen ' + value);
  if (input==value) {
    return ('system choose ' + value  +' its a Draw');
  }
  if ((input=='scissors') && (value=='paper')){
    return 'system choose ' + value + ' you won';
  }
  if ((input=='paper') && (value=='stone')){
    return 'system choose ' + value + ' you won';
  }
  if ((input=='stone') && (value=='scissors')){
    return 'system choose ' + value + ' you won';
  }
  
  return 'system choose ' + value + ' you lose';
}
