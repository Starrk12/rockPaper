const choice = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    const index = Math.floor(Math.random() * choice.length);
    computerChoice = choice[index]
    

    return computerChoice
}
// function getUserChoice() {
//     userChoice = prompt('Please choose between Rock, Paper or Scissors')
//     if (choice.includes(userChoice)) {
//         console.log(`you have decided to choose ${userChoice}`)
//     }
//     else {
//         console.log('This is not in the option please choose again! Consider cases!')
//         getUserChoice()
//     }
//     return userChoice
// }
// function getWinner() {
//     getUserChoice()
//     getComputerChoice()
//     if (userChoice == computerChoice){
//         console.log('Please repeat. You chose the same!')
//         getWinner()
//     }
//     else if (userChoice == choice[0] && computerChoice == choice[1] ){
//         console.log('Paper covers rock. You loose!')
//     }
//     else if (userChoice == choice[1] && computerChoice == choice[2]){
//         console.log('Scissors cut paper. You loose!')
//     }
//     else if (userChoice == choice[2] && computerChoice == choice[0]){
//         console.log('You loose, Rock crush scissors!')
//     }
//     else if (userChoice == choice[0] && computerChoice == choice[2]){
//         console.log('You win, Rock crush scissors!')
//     }
//     else if (userChoice == choice[1] && computerChoice == choice[0]){
//         console.log('You win, Paper covers Rock!')
//     }
//     else if (userChoice == choice[2] && computerChoice == choice[1]){
//         console.log('You win!, Scissors cuts paper!')
//     }
// }

// function theme() {
//     const rock = document.createElement('button')
    
//     document.body.appendChild(rock)
//     rock.setAttribute('name', 'ROCK')

// }

const start = document.getElementById('start')

start.addEventListener('click', () => {
    const message = document.createElement('p');

    message.textContent = 'The game is the Classic Rock, Paper and Scissors. You simply have to pick one of the choices given below;';

    const container = document.createElement('div')
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');

    rock.textContent = 'Rock';
    rock.setAttribute('style', 'color: red');

    paper.textContent = 'Paper';
    paper.setAttribute('stye', 'color: white', 'backgroundColor: black');

    scissors.textContent = 'Scissors';
    scissors.setAttribute('style', 'color: grey', 'backgroundColor: yellow');

    container.append(rock, paper, scissors)
    document.body.append(container)
} );








// getComputerChoice()


// const choice1 = document.createElement('div')


// choice1.textContent = `The computer has chosen ${computerChoice}`
// choice1.style.color = 'Blue'
// document.body.append('Your turn; Please choose.',rock, paper,scissors, choice1)
