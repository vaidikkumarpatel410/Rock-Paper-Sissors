let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    console.log("Game was Drawed!");
    msg.innerText="Game was Drawn. Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("User Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Comp Win!");
        msg.innerText=`You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const genCompChoice=()=>{
    const options=["rock","paper","sissors"];
    const rndIndx=(Math.floor(Math.random()*10000))%3;
    return options[rndIndx];
}

const playGame=(userChoice)=>{
    console.log(`UseChoice: ${userChoice}`);
    const compChoice=genCompChoice();
    console.log(`compChoice: ${compChoice}`);

    if(userChoice==compChoice){
        //Draw Choice
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            //sissors,paper
            userWin= compChoice == "paper" ? false: true;
        }else if(userChoice="paper"){
            //rock,sissors
            userWin= compChoice == "sissors" ? false : true;
        }else{
            //rock,paper
            userWin= compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userWin,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
}) ;