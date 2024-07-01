console.log("hi");

const arr = ['rock' ,'paper', 'scissor'];
function giveComputerChoice() {
    let c = Math.floor(Math.random() * arr.length );
    return arr[c];
}
let humanScore = 0; let computerScore = 0;
function checkWinner(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        return `Tie`;
    }
    if(humanChoice == 'rock' && computerChoice == 'scissor' || 
        humanChoice == 'paper' && computerChoice == 'rock' ||
        humanChoice == 'scissor' && computerChoice == 'paper'
    ) {
        humanScore++;
        console.log('--Human - Machine--\n');
        console.log(humanScore);
        console.log(computerScore);
        return `You Win ! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        console.log('--Human - Machine--\n');
        console.log(humanScore);
        console.log(computerScore);
        return `Computer wins.. ${humanChoice} loses to ${computerChoice}`;
    }
}

let end = false;

for(let i=1; i<=5; i++) {
    end = false;
    while(end == false) {
        let ch = prompt("enter your move : ");
        if(ch == null) {
            continue;
        }
        ch.toLowerCase;
        if(arr.includes(ch)) {
            const computerChoice = giveComputerChoice();
            console.log(checkWinner(ch, computerChoice));
            end = true;
        }
        continue;
    }
    
}
