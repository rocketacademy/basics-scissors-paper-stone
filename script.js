var main = function (input) {
  var spsOutput = ['scissors', 'paper', 'stone']
  var setSpsOutput =  Math.floor(Math.random()*spsOutput.length)
  var comChoice = spsOutput[setSpsOutput]
  console.log (comChoice)

  if (input == comChoice) {
    var myOutputValue = "It's a draw."
  } 

  else if (input == 'reversed scissors' && comChoice == 'scissors' || input == 'reversed paper' && comChoice == 'paper'|| input == 'reversed stone' && comChoice == 'stone') {
    var myOutputValue = "It's a draw."
  }

  else if (input == 'scissors') {
    if (comChoice == 'paper') {
      var myOutputValue = "You won!"
    }
    else if (comChoice == 'stone') {
      var myOutputValue = "You lost!"
    }
  }   

  else if (input == 'reversed scissors') {
    if (comChoice == 'paper') {
      var myOutputValue = "You lost!"
    }
    else if (comChoice == 'stone') {
      var myOutputValue = "You won!"
    }
  }   

  else if (input == 'paper') {
    if (comChoice == 'stone') {
      var myOutputValue = "You won!"
    }
    else if (comChoice == 'scissors') {
      var myOutputValue = "You lost!"
    }
  }   

  else if (input == 'reversed paper') {
    if (comChoice == 'stone') {
      var myOutputValue = "You lost!"
    }
    else if (comChoice == 'scissors') {
      var myOutputValue = "You won!"
    }
  }   

  else if (input == 'stone') {
    if (comChoice == 'scissors') {
      var myOutputValue = "You won!"
    }
    else if (comChoice == 'paper') {
      var myOutputValue = "You lost!"
    }
  }

  else if (input == 'reversed stone') {
    if (comChoice == 'scissors') {
      var myOutputValue = "You lost!"
    }
    else if (comChoice == 'paper') {
      var myOutputValue = "You won!"
    }
  }

  else
    return "Input invalid. Please enter one of these three options: 'scissors', 'paper', or 'stone'"

  return "You chose "+input+"."+"<br/>"+"The computer chooses "+comChoice+"."+"<br/>"+"<br/>"+myOutputValue+"<br/>"+"<br/>"+'Now you can type "scissors" "paper" or "stone" to play another round!'

}
