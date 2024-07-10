let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore");



const getComputerChoice = () =>{
    let choiceArray = ["rock", "paper", "scissor"];
    let compRandom = Math.floor(Math.random() * choiceArray.length);
    // console.log("random value is this: ", compRandom);
    return choiceArray[compRandom];
}

const drawGame = () =>{
    // console.log("Game is Draw");
    msg.innerText = "Game Draw";
}

const showWinner = (userWin, userChoice, CompChoice) =>{
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Won. Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        // console.log("You Lose");
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lost. ${CompChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        const CompChoice = getComputerChoice();
        console.log("User choice is clicked", userChoice);
        console.log("Computer Choice", CompChoice);
        if(userChoice === CompChoice){
            drawGame();
        }else{
            let userWin = true;
            if (userChoice === "rock") {
                // scissors, paper
                userWin = CompChoice === "paper" ? false : true;
            }else if (userChoice === "paper"){
                // scissors, rock
                userWin = CompChoice === "scissor" ? false : true;
            }else if(userChoice === "scissor"){
                // rock, paper
                userWin = CompChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, CompChoice)
        }
    })
})