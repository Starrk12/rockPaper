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

    const container = document.createElement('div')
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');

     
    rock.textContent = 'Rock';
    rock.setAttribute('style', 'color: red');
    rock.addEventListener('click', () => {
        let userChoice = choice[0]
        getWinner(choice[0])

    })

    paper.textContent = 'Paper';
    paper.setAttribute('stye', 'color: white', 'backgroundColor: black');
    paper.addEventListener('click', () => {
        let userChoice = choice[1]
        getWinner(choice[1])
        
    })

    scissors.textContent = 'Scissors';
    scissors.setAttribute('style', 'color: grey', 'backgroundColor: yellow');
    scissors.addEventListener('click', () => {
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
    

    if (userChoice == computerChoice){
        const draw = document.createElement('p')
        draw.textContent = 'Please have another choice. You choose the same!'

        document.body.append(draw)
        
        introduction()
    }
    else if (userChoice == choice[0] && computerChoice == choice[1] ){
        const loose = document.createElement('p')

        loose.textContent = 'Paper covers rock. You loose!'
        document.body.append(loose)
        replayGame()
    }
    else if (userChoice == choice[1] && computerChoice == choice[2]){
        const loose = document.createElement('p')

        loose.textContent = 'Scissors cut paper. You loose!'
        document.body.append(loose)
        replayGame()
    }
    else if (userChoice == choice[2] && computerChoice == choice[0]){
        const loose = document.createElement('p')

        loose.textContent = 'You loose! Rock crush scissors'
        document.body.append(loose)
        replayGame()
    }
    else if (userChoice == choice[0] && computerChoice == choice[2]){
        const win = document.createElement('p')

        win.textContent = 'You win, Rock crush scissors!'
        document.body.append(win)
        replayGame()
    }
    else if (userChoice == choice[1] && computerChoice == choice[0]){
        const win = document.createElement('p')

        win.textContent = 'You win, Paper covers Rock!'
        document.body.append(win)
        replayGame()
    }
    else if (userChoice == choice[2] && computerChoice == choice[1]){
        const win = document.createElement('p')

        win.textContent = 'You win!, Scissors cuts paper!'
        document.body.append(win)
        replayGame()
    }
    
}
function replayGame() {
    const replay = document.createElement('button')

    replay.textContent = 'REPLAY'
    replay.style.color = 'red'

    replay.addEventListener('click', introduction)
    document.body.append(replay)

}


const start = document.getElementById('start')

start.addEventListener('click', introduction);









// getComputerChoice()


// const choice1 = document.createElement('div')


// choice1.textContent = `The computer has chosen ${computerChoice}`
// choice1.style.color = 'Blue'
// document.body.append('Your turn; Please choose.',rock, paper,scissors, choice1)
