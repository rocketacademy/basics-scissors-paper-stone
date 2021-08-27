//input one of three variables, scissors, paper or stone
//program will return whether you have won, lost or drew
//where scissors beats paper, paper beats stone and stone beats scissors

//random number generator for three outcomes
var computerRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal);
  console.log(`this is computerRoll`, randomNumber);
  return randomNumber;
};

//define variables of scissors, paper and stone
var main = function (input) {
  var randomNumRoll = computerRoll();
  var computerAnswer;

  if (randomNumRoll == 0) {
    computerAnswer = `scissors`;
  }
  if (randomNumRoll == 1) {
    computerAnswer = `paper`;
  }
  if (randomNumRoll == 2) {
    computerAnswer = `stone`;
  }
  if (
    (input == `scissors` && computerAnswer == `scissors`) ||
    (input == `stone` && computerAnswer == `stone`) ||
    (input == `paper` && computerAnswer == `paper`)
  ) {
    return (
      `you have thrown ` +
      input +
      `, the computer has thrown ` +
      computerAnswer +
      `. you have DRAWN! can't even win against computer (easy)?`
    );
  }
  if (
    (input == `scissors` && computerAnswer == `stone`) ||
    (input == `stone` && computerAnswer == `paper`) ||
    (input == `paper` && computerAnswer == `scissors`)
  ) {
    return (
      `you have thrown ` +
      input +
      `, the computer has thrown ` +
      computerAnswer +
      `. what a loser! try again to see whether you can beat computer(easy).`
    );
  }
  if (
    (input == `scissors` && computerAnswer == `paper`) ||
    (input == `stone` && computerAnswer == `scissors`) ||
    (input == `paper` && computerAnswer == `stone`)
  ) {
    return (
      `you have thrown ` +
      input +
      `, the computer has thrown ` +
      computerAnswer +
      `. okay...you win, good for you.`
    );
  }

  //add input validation to tell user to "please enter only scissors, paper or stone"
  if (input != `scissors` || input != `paper` || input != `stone`) {
    return (
      `your input ` +
      input +
      ` is invalid. please enter only scissors, paper or stone.`
    );
  }
};
