var reversedModeHint = 0;
var main = function (input) {
  input = input.toLowerCase();
  // Variable to capture opponent's random pick (scissors, paper or stone)
  var opponentPick = choicePick(randomOpponentNum());

  // Default Error Message
  var myOutputValue = `Please try again. Kindly input either 'scissors', 'paper' or 'stone'.
  <br><br>Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
  <br><br>Perhaps somewhere lies a secret <b>reversed</b> game mode..? I wonder if it has a secret <b>reversed</b> set of rules too...?`;

  // Normal Game Mode
  if (input == 'scissors' || input == 'paper' || input == 'stone'){
    reversedModeHint = reversedModeHint + 1;
    // Draw condition
    if (input == opponentPick){
      var score = `It's a draw! 👁👄👁`;
    };

    //Scissors
    if (input == 'scissors'){
    if (opponentPick == 'paper'){
        var score = `You won! Nice one! 😎`;
      };
    if (opponentPick == 'stone'){
        var score = `You lost! 💩`;
      }
    };

    //Paper
    if (input == 'paper'){
    if (opponentPick == 'stone'){
        var score = `You won! Nice one! 😎`;
      };
    if (opponentPick == 'scissors'){
        var score = `You lost! 💩`;
      }
    };

    //Stone
    if (input == 'stone'){
    if (opponentPick == 'scissors'){
        var score = `You won! Nice one! 😎`;
      };
    if (opponentPick == 'paper'){
        var score = `You lost! 💩`;
      }
    };

    myOutputValue = `${score}<br>You picked ${inputEmoji(input)}, while your opponent picked ${inputEmoji(opponentPick)}
    <br><br>Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.`;
    // Prompt user to try Reverse Game Mode if played 3 rounds of Normal Game Mode
    if (reversedModeHint > 3){
      myOutputValue += `<br><br><i>(pssst..!)</i> Tired of this same old game? Try the <b>Reversed</b> Game Mode. Simply add 'reversed' to your choice of 'scissors', 'paper' or 'stone'. For example: 'reversed stone'`;
    };
  };

// Reversed Game Mode
  if (input == 'reversed scissors' || input == 'reversed paper' || input == 'reversed stone'){
    reversedModeHint = 0;
    // Draw condition
    if (removeReversed(input) == opponentPick){
      var score = `It's a draw! 👁👄👁`;
    };

    //Reversed Scissors
    if (input == 'reversed scissors'){
    if (opponentPick == 'stone'){
        var score = `You won! Nice one! 😎`;
      };
    if (opponentPick == 'paper'){
        var score = `You lost! 💩`;
      };
    };

    //Reversed Paper
    if (input == 'reversed paper'){
    if (opponentPick == 'scissors'){
        var score = `You won! Nice one! 😎`;
      };
    if (opponentPick == 'stone'){
        var score = `You lost! 💩`;
      };
    };

    //Reversed Stone
    if (input == 'reversed stone'){
    if (opponentPick == 'paper'){
        var score = `You won! Nice one! 😎`;
      };
    if (opponentPick == 'scissors'){
        var score = `You lost! 💩`;
      };
    };

    myOutputValue = `Secret <b>Reversed</b> Mode Unlocked! 😈<br><br>${score}<br>You picked ${inputEmoji(removeReversed(input))}, while your opponent picked ${inputEmoji(opponentPick)}<br><br>Special <b>Reversed</b> Rules: scissors beat stone, stone beats paper, and paper beats scissors. If both parties choose the same object, it's a draw.`;
  };

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
     input = 'stone ✊🏼';
   };
   return input;
  };

// Function: Remove word 'reversed'
  var removeReversed = function(reversed){
    if (reversed == 'reversed scissors'){
      var withoutReversed = 'scissors';
    };
    if (reversed == 'reversed paper'){
      var withoutReversed = 'paper';
    };
    if (reversed == 'reversed stone'){
      var withoutReversed = 'stone';
    };
    return withoutReversed;
  };