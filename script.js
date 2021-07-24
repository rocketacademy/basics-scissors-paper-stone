var main = function (input) {
  return conditionList(input);
};

var generateRandomRPS = function () {
  var numPossibleWords = 3;
  var randomNum = Math.floor(Math.random() * numPossibleWords) + 1;
  console.log(randomNum);
  if (randomNum == 1) return "rock";
  else if (randomNum == 2) return "paper";
  else if (randomNum == 3) return "scissors";
};

var conditionList = function (input) {
  var randomAns = generateRandomRPS();
  if (input == randomAns)
    return (
      "Draw!" + input + "vs" + randomAns + "(your choice vs computer choice)"
    );
  else if (input == "rock" && randomAns == "paper")
    return (
      "You Lose! Computer Wins" +
      input +
      "vs" +
      randomAns +
      "(your choice vs computer choice)"
    );
  else if (input == "rock" && randomAns == "scissors")
    return (
      "You Win!" + input + "vs" + randomAns + "(your choice vs computer choice)"
    );
  else if (input == "paper" && randomAns == "rock")
    return (
      "You Win" + input + "and" + randomAns + "(your choice vs computer choice)"
    );
  else if (input == "paper" && randomAns == "scissors")
    return (
      "You Lose! Computer Wins" +
      input +
      "vs" +
      randomAns +
      "(your choice vs computer choice)"
    );
  else if (input == "scissors" && randomAns == "rock")
    return (
      "You Lose! Computer Wins" +
      input +
      "vs" +
      randomAns +
      "(your choice vs computer choice)"
    );
  else if (input == "scissors" && randomAns == "paper")
    return (
      "Horray You Win!" +
      input +
      "vs" +
      randomAns +
      "(your choice vs computer choice)"
    );
};
