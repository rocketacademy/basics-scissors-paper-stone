let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
    let playerChoice = prompt ("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
    if (
        playerOne === 'rock'|| 
        playerOne === 'paper' || 
        playerOne === 'scissors'
        ) 
    {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let computer = 
    computerChoice === 1 ? "rock"
    : computerChoice === 2 ? "paper"
    : "scissors";

    let result = 
    playerOne === computer
    ? "Tie Game"
    : playerOne === "rock" && computer === "paper"
    ? `PlayerOne: ${playerOne}\nComputer: ${computer}
    \nComputer wins!`
    : playerOne === "paper" && computer === "scissors"
    ? `PlayerOne: ${playerOne}\nComputer: ${computer}
    \nComputer wins!`
    : playerOne === "scissors" && computer === "rock"
    ? `PlayerOne: ${playerOne}\nComputer: ${computer}
    \nComputer wins!`
    : `PlayerOne: ${playerOne}\nComputer: ${computer}
    \nPlayerOne wins!`
    alert(result);
    } else {
        alert("I guess you changed your mind. Maybe next time.")
    } 
} else {
    alert ("okay, maybe next time.");
} 

};
