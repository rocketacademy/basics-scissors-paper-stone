var main = function (input) {
  // randomly chooses scissors, paper or stone
  var useroption =input;
  var option1 = "scissors";
  var option2 = "paper";
  var option3 = "stone";
  if (user option == !("scissors" || "paper" || "rock")){
    myOutputValue = 'you guessed ${input}, there are only theree options stone, paper, scissors';
  }
  if(
    ( useroption == "scissors" && computeroption == "paper") ||
    (useroption == "paper" && computeroption =="stone") ||
    (useroption == "stone" && computeroption == "scissors")
  ) {
    myOutputValue = 'user won!';
  }
  if (
    (computeroption == "scissors" && useroption == "paper") ||
    (computeroption == "paper" && useroption == "stone") ||
    (computeroption == "stone" && useroption == "scissors")
  ) {
    myOutputValue = 'computer won!';
  }
  if (useroption == computeroption) {
    myOutputValue = 'draw';
  }
  return myOutputValue
  return "Invaild Input. Please input either Scissors, Paper, or Stone"
};
