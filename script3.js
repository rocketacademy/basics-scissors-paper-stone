const getComputerMove = () => {
    let computerMove = Math.floor(Math.random() * 3) + 1
    let computerMoveinWords
    switch (computerMove) {
        case 1:
        computerMoveinWords = 'rock'
        break
        case 2:
        computerMoveinWords = 'paper'
        break
        case 3:
        computerMoveinWords = 'scissors'
        break
    }
    return computerMoveinWords
}

const getGameResults = (playerMove, computerMove) => {
    let results
    let [winMessage, looseMessage, tieMessage] = ['You Win', 'You Loose', 'Its a Tie']
    switch ([playerMove, computerMove].join(' ')) {
        case ['rock', 'scissors'].join(' '):
        case ['paper', 'rock'].join(' '):
        case ['scissors', 'paper'].join(' '):
            results = winMessage
            break
        case ['rock', 'paper'].join(' '):
        case ['paper', 'scissors'].join(' '):
        case ['scissors', 'rock'].join(' '):
            results = looseMessage
            break
        default:
            results =  tieMessage
            break
    }
    return results
}

const playGame = playerMove => {
    const displayResultElement = document.getElementById('result')
    const computerMove = getComputerMove()
    const getResults = getGameResults(playerMove, computerMove)
    displayResultElement.innerHTML = `You chose ${playerMove} and computer chose ${computerMove}. ${getResults}`
}
    


