/*Basic Scissors Paper Stone

Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

Input Validation

Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.

Win-Loss Record

Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won. Output this win-loss record in a format you like in the program output. You can also output the number of draws and/or each party's winning percentage if you'd like.

User Name

To make this game more personal, add a feature to collect the user's name as the first input after the page loads. We can prompt the user to enter their name first by adding to the page's HTML. Once the user submits their name, the program can return output to prompt the user to start playing Scissors Paper Stone by entering one of the 3 objects. Use the user's name to personalise win-loss record and other relevant output.*/

/*pseudo code for scissors paper stone
1. get user name
2. get and verify user input
3. randomly generate input for computer
4. compare user and computer inputs
5. count score and output score and result
*/

// GLOBAL VARIBLES
var userName = "waiting for user name";
var mode = "init";
var myOutputValue = "";
var SPS = ["scissors", "paper", "stone"];
var USERGAMEINPUT = "";
var COMPUTERGAMEINPUT = "";

// COUNT VARIBLES
var winCount = 0;
var loseCount = 0;
var drawCount = 0;

// TODO user name verification
var getUserName = function (input) {
  userName = input;
  mode = "game";
};

var showWelcomeMessage = function () {
  myOutputValue = `Hello ${userName}.
  <br>
  Ready for a game of Scissors Paper Stone?`;
  return myOutputValue;
};

var showErrorMessage = function () {
  myOutputValue = "Invalid input. Try again.";
  return myOutputValue;
};

var userInputIsValid = function (userInput) {
  if (SPS.includes(userInput)) {
    return true;
  } else {
    return false;
  }
};

var randomComputerInput = function (myArray) {
  return (COMPUTERGAMEINPUT =
    myArray[Math.floor(Math.random() * myArray.length)]);
};

var compareInputs = function (userInput, computerInput) {
  // draw condition
  if (userInput == computerInput) {
    drawCount += 1;
    return "Draw!";
  } // win condition
  else if (
    (userInput == "scissors" && computerInput == "paper") ||
    (userInput == "paper" && computerInput == "stone") ||
    (userInput == "stone" && computerInput == "scissors")
  ) {
    winCount += 1;
    return "You win!";
  }
  // if not draw or win, lose
  else {
    loseCount += 1;
    return "You lose!";
  }
};

var main = function (input) {
  // first load, get user name
  if (mode === "init") {
    getUserName(input);
    return showWelcomeMessage();

    // second load onwards, SPS
  } else if (mode == "game") {
    // verify user game input
    // if true, input is valid. else, show error message
    if (userInputIsValid(input.toLowerCase())) {
      USERGAMEINPUT = input;
    } else {
      return showErrorMessage();
    }

    // random computer input
    randomComputerInput(SPS);

    // SPS game logic
    var result = compareInputs(USERGAMEINPUT, COMPUTERGAMEINPUT);

    // format output
    var myOutputValue = `User: ${USERGAMEINPUT}
    <br>
    Computer: ${COMPUTERGAMEINPUT}
    <br>
    Result: ${result}
    <br>
    User : Computer
    <br>
    ${winCount}-${loseCount}`;
    return myOutputValue;
  }
};
