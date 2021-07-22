//user inputs their name
var startGame = `please enter your name`;
var winScore = 0;
var playerTries = 0;
// user inputs scissors, paper or stone, output will determine win lose or draw or wrong spelling
var main = function (input) {
  var myOutputValue = ``;
  playerTries = playerTries + 1;
  //do this if game mode is waiting for enter your name
  if (startGame == `please enter your name`) {
    //set the name
    userName = input;
    //now that we have the name, switch mode
    startGame = `SPS game`;
    playerTries = playerTries - 1;
    myOutputValue = `Welcome  ` + userName;
  }
  //if gamemode is sps game
  else if (startGame == `SPS game`) {
  }
  var computerChoice = SPS();
  var myOutputValue =
    `Hello ` +
    userName +
    `    please enter any of the following: scissors, paper, stone to proceed!`;
  //scissors =1 SPS
  //paper = 2
  //stone =3
  if (input == `scissors` && computerChoice == 1) {
    myOutputValue =
      userName + `   ` + `<br> its a draw! the computer chose scissors too!`;
  }
  if (input == `scissors` && computerChoice == 2) {
    winScore = winScore + 1;
    myOutputValue =
      userName + `   ` + `<br> you win! the computer chose paper!`;
  }
  if (input == `scissors` && computerChoice == 3) {
    myOutputValue =
      userName + `   ` + `<br> you lose! the computer chose stone!`;
  }
  if (input == `paper` && computerChoice == 1) {
    myOutputValue =
      userName + `   ` + `<br> you lose! computer chose scissors!`;
  }
  if (input == `paper` && computerChoice == 2) {
    myOutputValue =
      userName + `   ` + `<br> its a draw! the computer chose paper too!`;
  }
  if (input == `paper` && computerChoice == 3) {
    winScore = winScore + 1;
    myOutputValue = userName + `   ` + `<br> you win! computer chose stone!`;
  }
  if (input == `stone` && computerChoice == 1) {
    winScore = winScore + 1;
    myOutputValue =
      userName + `   ` + `<br> you win! the computer chose scissors!`;
  }
  if (input == `stone` && computerChoice == 2) {
    myOutputValue =
      userName + `   ` + `<br> you lose! the computer chose paper!`;
  }
  if (input == `stone` && computerChoice == 3) {
    myOutputValue =
      userName + `   ` + `<br> its a draw! the computer chose stone too!`;
  }
  myOutputValue =
    myOutputValue + Math.ceil((winScore / playerTries) * 100) + `%`;
  return myOutputValue;
};
//Random outcome
SPS = function () {
  var randomNumberGenerator = Math.random() * 3;
  var randomIntegar = Math.ceil(randomNumberGenerator);
  console.log(randomIntegar);
  return randomIntegar;
};
