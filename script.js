//RANDOMIZE COM SELECTION OF 123
var getNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

//PEG THE RANDOM 123 TO GET COM CHOICE OF SPS
var pegNumToSps = function () {
  var comNum = getNumber();
  if (comNum == 0) {
    return "scissors";
  }
  if (comNum == 1) {
    return "paper";
  }
  if (comNum == 2) {
    return "stone";
  }
};

//ADDING WIN-LOSS RECORD
var userWins = 0;
var comWins = 0;
var draw = 0;
var totalPlay = 0;
var numClicks = 0;

var main = function (userAnswer) {
  console.log(`WHAT IS USER CHOICE: ${userAnswer}`);

  if (numClicks == "0") {
    numClicks = +1;
    //CURRENTLY SHORTCUT BY NOT 'VAR'-ING userName BUT POTENTIALLY BUGGY
    userName = userAnswer;
    return `Hello ${userAnswer}! Let's play scissors ✂️ , paper 📄 , stone 🗿 !<br><br>Input your choice (case sensitive!) in the box above to play :D`;
  }

  console.log(`NUMBER OF CLICKS: ${numClicks}`);
  var comSps = pegNumToSps();
  console.log(`WHAT IS COMPUTER CHOICE: ${comSps}`);

  //CASE OF INVALID INPUT
  if (
    (numClicks != 0 && userAnswer != "paper") ||
    userAnswer != "scissors" ||
    userAnswer != "stone"
  ) {
    outputValue =
      "Input not valid! 🙅🏻‍♀️<br>Please only key in 'scissors', 'paper' or 'stone' (case sensitive)!";
  }

  //CASE OF A DRAW
  if (userAnswer == comSps) {
    draw += 1;
    totalPlay += 1;
    var percentWins = ((userWins / totalPlay) * 100).toFixed(1);
    return `Good guess ${userName}, it was a draw! 🤷🏻‍♀️<br>We both picked ${comSps}!<br><br>You win ${userWins}/${totalPlay} times (${percentWins}%) with ${draw} draw(s)!`;
  }
  //USER CHOSE SCISSORS
  if (userAnswer == "scissors" && comSps == "stone") {
    comWins += 1;
    totalPlay += 1;
    var percentWins = ((userWins / totalPlay) * 100).toFixed(1);
    outputValue = `You lose, try again ${userName}! 😰<br>Your scissors ✂️ lost to my stone 🗿 !<br><br>You win ${userWins}/${totalPlay} times (${percentWins}%) with ${draw} draw(s)!`;
  }
  if (userAnswer == "scissors" && comSps == "paper") {
    userWins += 1;
    totalPlay += 1;
    var percentWins = ((userWins / totalPlay) * 100).toFixed(1);
    outputValue = `Congratulations ${userName}, YOU WIN! 🥳<br>Your scissors ✂️ won my paper 📄 !<br><br>You win ${userWins}/${totalPlay} times (${percentWins}%) with ${draw} draw(s)!`;
  }
  //USER CHOSE STONE
  if (userAnswer == "stone" && comSps == "paper") {
    comWins += 1;
    totalPlay += 1;
    var percentWins = ((userWins / totalPlay) * 100).toFixed(1);
    outputValue = `You lose, try again ${userName}! 😰<br>Your stone 🗿 lost to my paper 📄 !<br><br>You win ${userWins}/${totalPlay}times (${percentWins}%) with ${draw} draw(s)!`;
  }
  if (userAnswer == "stone" && comSps == "scissors") {
    userWins += 1;
    totalPlay += 1;
    var percentWins = ((userWins / totalPlay) * 100).toFixed(1);
    outputValue = `Congratulations ${userName}, YOU WIN! 🥳<br>Your stone 🗿 won my scissors ✂️ !<br><br>You win ${userWins}/${totalPlay} times (${percentWins}%) with ${draw} draw(s)!`;
  }
  //USER CHOSE PAPER
  if (userAnswer == "paper" && comSps == "scissors") {
    comWins += 1;
    totalPlay += 1;
    var percentWins = ((userWins / totalPlay) * 100).toFixed(1);
    outputValue = `You lose, try again ${userName}! 😰<br>Your paper 📄 lost to my scissors ✂️ !<br><br>You win ${userWins}/${totalPlay} times (${percentWins}%) with ${draw} draw(s)!`;
  }
  if (userAnswer == "paper" && comSps == "stone") {
    userWins += 1;
    totalPlay += 1;
    var percentWins = ((userWins / totalPlay) * 100).toFixed(1);
    outputValue = `Congratulations ${userName}, YOU WIN! 🥳<br>Your paper 📄 won my stone 🗿 !<br><br>You win ${userWins}/${totalPlay} times (${percentWins}%)  with ${draw} draw(s)!`;
  }

  return outputValue;
};
