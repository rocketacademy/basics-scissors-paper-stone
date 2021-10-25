var username = '';
var playerSPS = '';
var compSPS = '';
var myOutputValue ='';
var newGameMsg = 'Please enter "scissors", "paper" or "stone" to start a new game.';
var drawMsg = 'It is a draw, please enter "scissors", "paper" or "stone" to play again.'
var winMsg = 'You win the game!';
var loseMsg = 'You lose the game... please enter "scissors", "paper" or "stone" to play again.';


var main = function (input){
if (!playerSPS){
  if (!input){
  myOutputValue = newGameMsg;
  return myOutputValue;
  }
}

playerSPS = input.toLowerCase();
compSPS = randomSPS();
console.log (compSPS);


if (playerSPS != 'scissors' &&
    playerSPS != 'paper' &&
    playerSPS != 'stone'){
      myOutputValue = newGameMsg;
    } 

if (playerSPS == compSPS){  
    myOutputValue = drawMsg;
    }
      
if ((playerSPS == 'scissors' && compSPS == 'paper') ||
    (playerSPS == 'paper' && compSPS == 'stone') ||
    (playerSPS == 'stone' && compSPS == 'scissors')){
    myOutputValue = winMsg;
    }

if ((playerSPS == 'scissors' && compSPS == 'stone') ||
    (playerSPS == 'paper' && compSPS == 'scissors') ||
    (playerSPS == 'stone' && compSPS == 'paper')){
    myOutputValue = loseMsg;
    }
return myOutputValue;
}



var randomSPS = function () {
  randomInteger = Math.floor(Math.random() * 3);

  if (randomInteger == 0){
    sps = 'scissors';  
  }
  if (randomInteger == 1){
    sps = 'paper';
  }
  if (randomInteger == 2){
    sps = 'stone';
  }
  return sps;
}



// var loseRecord = 0;
// var totalGame = 0;
// var numOfGamePlayed = 0
// var username = '';
// var koreanWinner = '';
// var koreanDraw = '';

// var gameMode = 0;
// var gameModeTypeMsg = 'Please select game mode type by entering the numeric number. <br><br> 1 - Normal Mode <br><br> 2 - Korean Mode <br><br> 3 - COM vs COM';

// var main = function (input){
//   if (!username){
//     if (!input) {
//       return 'Please enter your username.'
//     }
  
//   username = input;
//   return gameModeTypeMsg;
//   }

//   if (!gameMode){
//     if (!input){
//       return gameModeTypeMsg;
//     }
//     gameModeTypeMsg = input;
//     if (gameMode != 1 && 
//         gameMode != 2 &&
//         gameMode != 3){
//           gameMode=0;
//           return gameModeTypeMsg;
//         }
//     gameMode=input;
//     return 'Game mode ' + gameMode + ' selected. Please select scissors, paper or stone to begin.';
//   }

//   if (gameMode!=3){
//     if (!input){
//       return 'Please select scissors, paper or stone to begin.'
//     }
//   }

//   var playerChoice = input.toLowerCase();

//   if (gameMode == 3){
//     playerChoice = randomSPS();
//     } 
//     var compChioce = randomSPS();
//     var myOutputValue = '';
//     var additionalRule = '';
//     var winLoseMsg = '';
//     var koreanMsg = '';

//     if (!numOfGamePlayed){
//       additionalRule = '<br><br>Now you can type "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to start a new game.';
//       }
//     myOutputValue = winOrLose (ownChoice, compChioce, gameMode) + additionalRule;
    
//     if (gameMode == 2){
//       if (koreanDraw == 'Y' && koreanWinner == username){
//         winRecord +=1;
//         koreanMsg = '<br><br>' + koreanWinner + ' has won the gam!! MUK-JJI-PPA!';
//       }
//       if (koreanDraw == 'Y' && koreanWinner == 'Com')
//     }
//   }
// }

// var sps1 = 'scissors';
// var sps2 = 'paper';
// var sps3 = 'stone';
// var computerSPS ='';
// var myOutputValue = '';

// var rollDice = function () {
//   randomInteger = Math.floor(Math.random() * 3);
//   return randomInteger
// };


//   if (randomInteger == 0){
//     computerSPS = sps1;  
//   }
//   if (randomInteger == 1){
//     computerSPS = sps2;
//   }
//   if (randomInteger == 2){
//     computerSPS = sps3;
//   }
//   return computerSPS;

// var main = function (input){
//   var myOutputValue = '';
//   if (input == computerSPS){  
//     myOutputValue = 'It is a draw, please play again!';
//   }

//   if ((input == 'scissors' && computerSPS == 'paper') ||
//   (input == 'paper' && computerSPS == 'stone') ||
//   (input == 'stone' && computerSPS == 'scissors') ){
//   myOutputValue = 'You win!';
//   }
//   if ((input == 'scissors' && computerSPS == 'stone') ||
//   (input == 'paper' && computerSPS == 'scissors') ||
//   (input == 'stone' && computerSPS == 'paper') ){
//   myOutputValue = 'You lose! Please play again';
//   }
// }


// var main = function (input) {
//   var myOutputValue = 'hello world';
//   var ownchoice = input.toLowerCase();

//   var myOutputValue = "";

//   var computerChoice = random_sps();
//   var sps = "";

//   if (computerChoice == 1) {
//     sps = "scissors";
//   }

//   if (computerChoice == 2) {
//     sps = "paper";
//   }

//   if (computerChoice == 3) {
//     sps = "stone";
//   }

//   myOutputValue = "Please select scissors, paper or stone.";

//   if (ownchoice == sps) {
//     myOutputValue = "It's a draw. Both pick " + input;
//   }

//   if (ownchoice !== sps) {
//     if (
//       (ownchoice == "scissors" && sps == "paper") ||
//       (ownchoice == "paper" && sps == "stone") ||
//       (ownchoice == "stone" && sps == "scissors")
//     ) {
//       myOutputValue =
//         "You won! You picked " + ownchoice + " And computer picked " + sps;
//     }
//     if (
//       (sps == "scissors" && ownchoice == "paper") ||
//       (sps == "paper" && ownchoice == "stone") ||
//       (sps == "stone" && ownchoice == "scissors")
//     ) {
//       myOutputValue =
//         "You lost! You picked " + ownchoice + " And computer picked " + sps;
//     }
//   }
//   console.log("You picked", ownchoice);
//   console.log("Computer picked", sps);

//   return myOutputValue;
// };

// var random_sps = function () {
 
// @codeclimate codeclimate bot 10 days ago 
// Identifier 'random_sps' is not in camel case.

// @chanjiacheng	Reply…
//   var randomNumber = Math.random() * 3;
//   var integernumber = Math.floor(randomNumber);
//   var choices = integernumber + 1;
//   return choices;
// };

// In production code, it's often helpful to store string constants
// in variables so that it's easier for a program to detect misspellings.
// E.g. if we used "scissors" everywhere and accidentally misspelled it
// in 1 place, our program may not detect that error until runtime,
// if at all. If we used the variable SCISSORS everywhere and misspelled
// // it in 1 place, ESLint would help us detect that error before runtime.
// // String constant variable names are usually all uppercase by convention.
// var SCISSORS = 'scissors';
// var PAPER = 'paper';
// var STONE = 'stone';
// var REVERSED_SCISSORS = 'reversed scissors';
// var REVERSED_PAPER = 'reversed paper';
// var REVERSED_STONE = 'reversed stone';
// var REPLAY_INSTRUCTIONS =
//   'Now you can type "scissors" "paper" or "stone" to play another round!';

// /**
//  * Return "scissors", "paper", or "stone" based on a random number
//  */
// var getRandomObject = function () {
//   var randomNum = Math.floor(Math.random() * 3);
//   if (randomNum == 0) {
//     return SCISSORS;
//   }
//   // No need "else if" because if the previous if conditional were true,
//   // the function would have returned and would not reach here.
//   if (randomNum == 1) {
//     return PAPER;
//   }
//   // If randomNum is neither 0 nor 1, return STONE.
//   return STONE;
// };

// /**
//  * Return whether player beats computer at SPS
//  * @param {string} playerObject
//  * @param {string} computerObject
//  */
// var doesPlayerBeatComputer = function (playerObject, computerObject) {
//   return (
//     (playerObject == SCISSORS && computerObject == PAPER) ||
//     (playerObject == PAPER && computerObject == STONE) ||
//     (playerObject == STONE && computerObject == SCISSORS) ||
//     (playerObject == REVERSED_SCISSORS && computerObject == STONE) ||
//     (playerObject == REVERSED_PAPER && computerObject == SCISSORS) ||
//     (playerObject == REVERSED_STONE && computerObject == PAPER)
//   );
// };

// /**
//  * Set a fn that will return an icon based on a  given object
//  * @param {string} object
//  */
// var getObjectIcon = function (object) {
//   if (object == SCISSORS || object == REVERSED_SCISSORS) return ' ✂️';
//   if (object == PAPER || object == REVERSED_PAPER) return ' 🗒';
//   if (object == STONE || object == REVERSED_STONE) return ' 🪨';
// };

// /**
//  * Return standard string representing player's and computer's objects
//  * @param {*} playerObject
//  * @param {*} computerObject
//  */
// var getDefaultObjectsMessage = function (playerObject, computerObject) {
//   var playerObjectIcon = getObjectIcon(playerObject);
//   var computerObjectIcon = getObjectIcon(computerObject);
//   return (
//     'The computer chose ' +
//     computerObject +
//     computerObjectIcon +
//     '<br><br>' +
//     'You chose ' +
//     playerObject +
//     playerObjectIcon
//   );
// };

// /**
//  * Check whether player draws with computer
//  * @param {string} playerObject
//  * @param {string} computerObject
//  */
// var doesPlayerDrawWComputer = function (playerObject, computerObject) {
//   return (
//     playerObject == computerObject ||
//     (playerObject == REVERSED_SCISSORS && computerObject == SCISSORS) ||
//     (playerObject == REVERSED_PAPER && computerObject == PAPER) ||
//     (playerObject == REVERSED_STONE && computerObject == STONE)
//   );
// };

// /**
//  * Play SPS with user input, return game result.
//  * @param {string} input - Player's object (e.g. scissors, paper, stone)
//  */
// var main = function (input) {
//   // Validate that input is one of scissors, paper, or stone
//   if (
//     input != SCISSORS &&
//     input != PAPER &&
//     input != STONE &&
//     input != REVERSED_SCISSORS &&
//     input != REVERSED_PAPER &&
//     input != REVERSED_STONE
//   ) {
//     return 'Please input 1 of "scissors", "paper", or "stone" to play the game.';
//     // Side enote: recall what "return" statements do? <--ans: it exits the current function and returns the values that are included in the return statement.
//     // This implies that if the return statement in line 107 is triggered, the rest of the code (from line 109 onwards) won't be executed becos we would've exited from the function.
//   }

//   // Input is one of scissors, paper, or stone
//   // Call input playerObject to make game logic clearer
//   var playerObject = input;
//   // Get computer's computer-generated object
//   var computerObject = getRandomObject();
//   // Get a default output message sharing what player's and computer's objects are
//   var defaultObjectsMessage = getDefaultObjectsMessage(
//     playerObject,
//     computerObject
//   );
//   // Compare player's object with computer's object and output win status
//   // If player and computer objects are the same, it's a draw.
//   if (doesPlayerDrawWComputer(playerObject, computerObject)) {
//     // Use <br> to create new lines in HTML output.
//     return defaultObjectsMessage + "<br><br> It's a draw! <br><br> ";
//   }

//   // If not a draw, check if player wins
//   if (doesPlayerBeatComputer(playerObject, computerObject)) {
//     return (
//       defaultObjectsMessage +
//       '<br><br>' +
//       ' You win! <br><br>' +
//       REPLAY_INSTRUCTIONS +
//       '<br>'
//     );
//   }
//   // If we reach this part of the code, it implies that 1. it's not a draw, and 2. Player has not won; hence,  computer wins! (see note on line 106 if you're unclear why)
//   // Let's handle the output for this scenario:
//   // Increment num computer wins in win-loss record
//   return (
//     defaultObjectsMessage +
//     '<br><br> You lose! Bummer <br><br>' +
//     REPLAY_INSTRUCTIONS
//   );
// };