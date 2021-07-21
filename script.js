var main = function (input) {
  var sPsGame = sPsRandom(input);
  console.log("sPsGame");
  console.log(sPsGame);

  var myOutputValue =
    "This computer will shutdown in 5 seconds, " +
    input +
    "is not a valid value.";
  console.log("data validation");

  // stone is lesser than paper
  //paper is lessor than scissors
  //scissors is lessor than stone
  //scissors<stone<paper<scissors
  //1ss,2pp,3st
  //Legend: Player shortcuts - lowercase s =scissors, lowercase p=paper, lowercase r=stone(rock)
  //OKTESTED below eqns:
  //var s=scissors==scissors
  //var scissors=s==s;
  //var p=paper==paper;
  //var paper=p==p;
  //var r=stone==stone;
  //var stone=r==r;

  if (input == sPsRandom) {
    myOutputValue =
      "There is no fight when scissors meet scissors, paper meets paper and stone meets stone.";
  }

  if (input == val1 && input != sPsRandom && sPsRandom == val2) {
    myOutputValue = "okay, You win as I played a " + sPsRandom;
  }

  if (input == val2 && input != sPsRandom && sPsRandom == val3) {
    myOutputValue = "okay, You win as I played a " + sPsRandom;
  }
  if (input == val3 && input != sPsRandom && sPsRandom == val1) {
    myOutputValue = "okay, You win as I played a " + sPsRandom;
  }

  return myOutputValue;
};

var sPsRandom = function () {
  var val1 = "scissors";
  var val2 = "paper";
  var val3 = "stone";
  var ScissorsOrPaperOrStone = val1 || val2 || val3;
  return ScissorsOrPaperOrStone;
};
