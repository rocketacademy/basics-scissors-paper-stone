var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var username = "";
var playerwins = 0
var computerwins = 0
var draws = 0
var normalsps = 'sps'
var reversesps = 'reversesps'

// main function for scissors paper stone game.



var main = function (input) {
  var randomSps = getSpsRandom();
  console.log(`computer choice is ${randomSps}`);
  console.log(`player choice is ${input}`);
  var myOutputValue = ""
  if (!username) {
    if (!input) {
      return `please input a username`
    }

    username = input;
    return `thank you ${username}, please input scissors, paper or stone`;
  }


    if (
    (input == scissors && randomSps == paper) ||
    (input == paper && randomSps == stone) ||
    (input == stone && randomSps == scissors)
) {
  playerwins = playerwins + 1;
  console.log(`playerwins ${playerwins}`);
}

else if  (
    (input == scissors && randomSps == stone) ||
    (input == stone && randomSps == paper) ||
    (input == paper && randomSps == scissors)
  ) {
    computerwins = computerwins + 1;
    console.log(`computerwins ${computerwins}`);
  }

else if (
  input == randomSps) {
    draws = draws + 1;
    console.log(`draws ${draws}`);

  }
  

  // if the outcome is a draw.

  if (input == randomSps) {
    console.log("it's a draw!");
    myOutputValue = `it's a draw!`;
  }

  // if outcome is player wins.
  else if (
    (input == scissors && randomSps == paper) ||
    (input == paper && randomSps == stone) ||
    (input == stone && randomSps == scissors)
  ) {
    console.log("you win!");
    myOutputValue = `you win!`;
  }

  // if outcome is player loses.
  else if (
    (input == scissors && randomSps == stone) ||
    (input == stone && randomSps == paper) ||
    (input == paper && randomSps == scissors)
  ) {
    console.log("you lost!");
    myOutputValue = `you lost!`;
  }

  // if input is an error
  

  else {
    console.log("input error, kindly try again, thanks!");
    console.log(input);
    console.log(randomSps);
    return `input error, kindly input a valid choice and try again! thanks!`;
  }
  return `${myOutputValue}
  <br>
  <br>
  you chose ${addEmoji(input)}
  <br>
  computer chose ${addEmoji(randomSps)}.
  <br>
  <br>
  so far ${username} have won ${playerwins} times so far. keep it up.
  <br>
  <br>
  make your choice and play another round`;
};

// function to randomly generate SPS

var getSpsRandom = function () {
  var sps = ["scissors", "paper", "stone"];
  var randomSps = sps[Math.floor(Math.random() * sps.length)];
  return randomSps;
};


// add ✊ 🖐 ✌️

var addEmoji = function (input) {
  if (input == scissors) {
    return "scissors ✌️";
  }
  
  else if (input == paper) {
    return "paper 🖐";
  }
  
  else if (input == stone) {
    return "stone ✊";
}

};