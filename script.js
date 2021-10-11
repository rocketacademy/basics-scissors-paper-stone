var main = function (input) {
  input = input.toLowerCase();
  // Variable to capture opponent's random pick (scissors, paper or stone)
  var opponentPick = choicePick(randomOpponentNum());

  // Default Error Message
  var myOutputValue = `Please try again. Kindly input either 'scissors', 'paper' or 'stone'.`  

  if (input == 'scissors' || input == 'paper' || input == 'stone'){
    // Draw condition
    if (input == opponentPick){
      var score = `It's a draw! 👁👄👁`
    };

    //Scissors
    if (input == 'scissors'){
    if (opponentPick == 'paper'){
        var score = `You won! Nice one! 😎`
      };
    if (opponentPick == 'stone'){
        var score = `You lost! 💩`
      }
    };

    //Paper
    if (input == 'paper'){
    if (opponentPick == 'stone'){
        var score = `You won! Nice one! 😎`
      };
    if (opponentPick == 'scissors'){
        var score = `You lost! 💩`
      }
    };

    //Stone
    if (input == 'stone'){
    if (opponentPick == 'scissors'){
        var score = `You won! Nice one! 😎`
      };
    if (opponentPick == 'paper'){
        var score = `You lost! 💩`
      }
    };

    var myOutputValue = `${score}`;
    myOutputValue += `<br>You picked ${inputEmoji(input)}, while your opponent picked ${inputEmoji(opponentPick)}`;
  };
  myOutputValue += `<br><br>Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.`;
return myOutputValue;
};

// Function: Returns random integer (0, 1 or 2)
var randomOpponentNum = function(){
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
  };

// Function: Returns pick from number input (scissors, paper or stone)
var choicePick = function(num){
  if (num == 0){
    choice = 'scissors';
  };
  if (num == 1){
    choice = 'paper';
  };
  if (num == 2){
    choice = 'stone';
  };
  return choice;
  };

 // Function: Add emoji
 var inputEmoji = function(input){
   if (input == 'scissors'){
     input = 'scissors ✌🏼';
   };
   if (input == 'paper'){
     input = 'paper 🖐🏼';
   };
   if (input == 'stone'){
     input = 'stone ✊🏼'
   };
   return input;
  };
