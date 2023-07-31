const choice = ['Rock', 'Paper', 'Scissors']
let rock;
let paper;
let scissors;
let userChoice;
let loose;
let win;

function introduction() {
    
    const message = document.createElement('h2')
    
    message.textContent = 'The game is the Classic Rock, Paper and Scissors. You simply have to pick one of the choices given below and the computer will also pick one;';
    message.style.color = 'pink'

    document.body.append(message)

}
function playRound() {
    let userChoice;

    const container = document.createElement('div')
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');

     
    rock.textContent = 'Rock';
    rock.setAttribute('style', 'color: red');
    rock.addEventListener('click', () => {
        const userPoint = document.createElement('p')

        userPoint.textContent = 'You picked Rock'
        userPoint.style.color = 'brown'

        document.body.append(userPoint)
        let userChoice = choice[0]
        getWinner(choice[0])

    })

    paper.textContent = 'Paper';
    paper.setAttribute('stye', 'color: white', 'backgroundColor: black');
    paper.addEventListener('click', () => {
        const userPoint = document.createElement('p')

        userPoint.textContent = 'You picked Paper'
        userPoint.style.color = 'brown'

        document.body.append(userPoint)
        let userChoice = choice[1]
        getWinner(choice[1])
        
    })

    scissors.textContent = 'Scissors';
    scissors.setAttribute('style', 'color: grey', 'backgroundColor: yellow');
    scissors.addEventListener('click', () => {
        const userPoint = document.createElement('p')

        userPoint.textContent = 'You picked Scissors'
        userPoint.style.color = 'brown'

        document.body.append(userPoint)
        let userChoice = choice[2]
        getWinner(choice[2])
    })

    container.append(rock, paper, scissors);
    document.body.append(container);

}


function getComputerChoice() {
    const index = Math.floor(Math.random() * choice.length);
    computerChoice = choice[index]

    const compChoice = document.createElement('p')
    if (computerChoice === choice[0]) {
        const compRock = document.createElement('p')

        compRock.textContent = 'The Computer Picked Rock'
        compRock.style.color = 'blue'
        
        document.body.append(compRock)
    }
    else if(compChoice === choice[1]) {
        const compPaper = document.createElement('p')

        compPaper.textContent = 'The computer has picked Paper'
        compPaper.style.color = 'blue'

        document.body.append(compPaper)
    }
    else {
        const compScissors = document.createElement('p')

        compScissors.textContent = 'The computer has picked Scissors'
        compScissors.style.color = 'blue'

        document.body.append(compScissors)
    }

    return computerChoice
}
    

function getWinner(userChoice) {
    getComputerChoice()
    

    if (userChoice === computerChoice){
        const draw = document.createElement('p')
        draw.textContent = 'Please have another choice. You choose the same!'

        document.body.append(draw)
        
        playRound()
    }
    else if (userChoice === choice[0] && computerChoice === choice[1] ){
        const loose = document.createElement('p')

        loose.textContent = 'Paper covers rock. You loose! Computer Wins!'
        document.body.append(loose)

        looser()        
    }
    else if (userChoice == choice[1] && computerChoice == choice[2]){
        const loose = document.createElement('p')

        loose.textContent = 'Scissors cut paper. You loose!'
        document.body.append(loose)
        
        looser()
    }
    else if (userChoice == choice[2] && computerChoice == choice[0]){
        const loose = document.createElement('p')

        loose.textContent = 'You loose! Rock crush scissors'
        document.body.append(loose)
        
        looser()
    }
    else if (userChoice == choice[0] && computerChoice == choice[2]){
        const win = document.createElement('p')

        win.textContent = 'You win, Rock crush scissors!'
        document.body.append(win)
        
    }
    else if (userChoice == choice[1] && computerChoice == choice[0]){
        const win = document.createElement('p')

        win.textContent = 'You win, Paper covers Rock!'
        document.body.append(win)
        
    }
    else if (userChoice == choice[2] && computerChoice == choice[1]){
        const win = document.createElement('p')

        win.textContent = 'You win!, Scissors cuts paper!'
        document.body.append(win)
        
    }
    
}
function replayGame() {
    const replay = document.createElement('button')

    replay.textContent = 'REPLAY'
    replay.style.color = 'red'

    replay.addEventListener('click', playRound())
    document.body.append(replay)

}
function looser() {
    const message = document.createElement('p')
    const start = document.createElement('button')

    message.textContent = 'You lost this round. You are welcome to play again. You can press START'
    start.textContent = 'start'
    start.addEventListener('click', introduction)
    start.addEventListener('click', introduction)
    

}

const start = document.getElementById('start')

start.addEventListener('click', introduction);
start.addEventListener('click', playRound)









// getComputerChoice()


// const choice1 = document.createElement('div')


// choice1.textContent = `The computer has chosen ${computerChoice}`
// choice1.style.color = 'Blue'
// document.body.append('Your turn; Please choose.',rock, paper,scissors, choice1)
