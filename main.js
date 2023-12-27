function choiceToPicSrc(playerChoice) {
    const sources = {
        "ROCK": "rock.svg",
        "PAPER": "paper.svg",
        "SCISSORS":  "scissors.svg",
    }
    return sources[playerChoice];
}

function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getGameResult(playerChoice, comptuerChoice) {
    const rowRock = {
        "ROCK": "Tail",
        "PAPER": "Turkey",
        "SCISSORS": "Snail",
    }

    const rowPaper = {
        "ROCK": "Turkey",
        "PAPER": "Urkeyurkey",
        "SCISSORS": "Snurkey",
    }

    const rowScissors = {
        "ROCK": "Snail",
        "PAPER": "Snurkey",
        "SCISSORS": "Snsn",
    }

    const matrix = {
        "ROCK": rowRock,
        "PAPER": rowPaper,
        "SCISSORS": rowScissors
    }

    return matrix[comptuerChoice][playerChoice];

}

function handleClick(playerChoice) {
    const playerContainer = document.querySelector(".player-choice-container");
    playerContainer.removeChild(playerContainer.firstElementChild);
    const newPlayerChoiceDiv = document.createElement("div");
    newPlayerChoiceDiv .textContent = "Player chose: " + playerChoice;
    playerContainer.appendChild(newPlayerChoiceDiv);

    const computerChoice = getComputerChoice();
    const comptuerContainer = document.querySelector(".computer-choice-container");
    comptuerContainer.removeChild(comptuerContainer.firstElementChild);
    const newComputerChoiceDiv = document.createElement("div");
    newComputerChoiceDiv.textContent = "Computer chose: " + computerChoice;
    comptuerContainer.appendChild(newComputerChoiceDiv);
    
    const result = getGameResult(playerChoice, computerChoice)
    const resultContainer = document.querySelector(".result-container");
    resultContainer.removeChild(resultContainer.firstElementChild);
    const newResultDiv = document.createElement("div");
    newResultDiv.textContent = "Result: " + result + "!"
    resultContainer.appendChild(newResultDiv);

    const playerPic = document.querySelector(".player-pic");
    const computerPic = document.querySelector(".computer-pic");
    const newPlayerPicSrc = choiceToPicSrc(playerChoice);
    const newComputerPicSrc = choiceToPicSrc(computerChoice);
    playerPic.setAttribute("src", newPlayerPicSrc);
    computerPic.setAttribute("src", newComputerPicSrc);
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener('click', () => handleClick("ROCK"));
paperButton.addEventListener('click', () => handleClick("PAPER"));
scissorsButton.addEventListener('click', () => handleClick("SCISSORS"));