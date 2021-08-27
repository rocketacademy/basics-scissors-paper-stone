var main = function (input) {
  var myOutputValue;
  var randomNumSPS = generateRandomSPS ()
      console.log("computerplayed");
      console.log(randomNumSPS);
      //if both input and computer play are the same
      if (
      input == "Scissors" && randomNumSPS == "Scissors" ||
      input == "Paper" && randomNumSPS == "Paper" || 
      input == "Stone" && randomNumSPS == "Stone"
      )
     { console.log("draw condition is executed")
         myOutputValue = 'You played '+ input +'. The computer played '+ randomNumSPS +'. Its a draw!'}
        console.log ("draw")
        
        // if its a winning input
        if (
          input == "Scissors" && randomNumSPS == "Paper" ||
          input == "Paper" && randomNumSPS == "Stone" ||
          input == "Stone" && randomNumSPS == "Scissors"
        ) { console.log("winning condition is okay")
      myOutputValue = 'You enter '+ input +' and the computer played '+ randomNumSPS +'. You win!'}
        console.log ("win") 

        // if its a losing input
        if (
          input == "Scissors" && randomNumSPS == "Paper" ||
          input == "Paper" && randomNumSPS == "Stone" ||
          input == "Stone" && randomNumSPS == "Scissor" ) { console.log("losing condition is okay")
            myOutputValue = 'You enter ' + input +' and the computer played ' + randomNumSPS +'. You lose!'
            console.log("lose")
          }

          if ( 
            input != "Scissors" && input != "Paper" && input != "Stone")
            { console.log("wrong input")
               myOutputValue = 'You can only either: Scissors, Paper or Stone. Please try again!'
            }
console.log (myOutputValue)
return myOutputValue;


};

//program randomly choose SPS
var generateRandomInteger = function (max){
  var randomDecimal = Math.random () * max
  var randomInteger = Math.floor (randomDecimal) + 1;
  return randomInteger;
}

var generateRandomSPS = function () {
  var numSPS = 3;
  var randomSPS = generateRandomInteger (numSPS);
  if (randomSPS == 1) {
    return "Scissors";}
  

  if (randomSPS ==2)
    {return 'Paper'}
  
  
  if (randomSPS ==3)
    {return 'Stone'}
}
