// 1. js파일에서 접근해야하는 html dom 요소 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const myScore = document.getElementById("my-score");
const computerScore = document.getElementById("computer-score");

const displayResult = document.getElementById("display-result");
const resetBtn = document.getElementById("reset-button");

const darkBtn = document.getElementById("darkmode-button");

// 2. 점수 저장하는 변수
let myScoreCount = 0;
let computerScoreCount = 0;

// 3. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);
resetBtn.addEventListener("click", resetGame);
darkBtn.addEventListener("click", changeDark);

// 4. displayMyChoice 함수 설정
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

// 5. 랜덤으로 뱉는 컴퓨터
function getComChoice() {
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

// 6. 컴퓨터의 선택이 화면에 보이도록 하는 함수
function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

// 7. start 함수
function start(myChoice) {
    let resultArray = getComChoice();
    let comChoice = resultArray[0];

    displayComChoice(resultArray);
    whowin(myChoice, comChoice);
}

// 8. 승패 판단 함수, 점수판 구현
function whowin(myChoice, comChoice) {
    if (myChoice === comChoice) {
        displayResult.innerText = "It's a tie!";
    }
    else if (
        (myChoice === "rock" && comChoice === "scissors") ||
        (myChoice === "scissors" && comChoice === "paper") ||
        (myChoice === "paper" && comChoice === "rock")
    ) {
        displayResult.innerText = "You Win!";
        myScoreCount++; 
        myScore.innerText = myScoreCount; //점수판에 표시!!
    }
    else {
        displayResult.innerText = "You Lose!";
        computerScoreCount++;
        computerScore.innerText = computerScoreCount;
    }
}

// 9. 리셋 함수
function resetGame() {
    myScoreCount = 0;
    computerScoreCount = 0;

    myScore.innerText = 0;
    computerScore.innerText = 0;

    displayResult.innerText = "Let's Start!";
    myHandText.innerText = "";
    computerText.innerText = "";

    myHandIcon.className = "";
    computerIcon.className = "";
}

// 10. 다크모드 구현
let darkmode = false;
function changeDark() {
    if (darkmode === false) {
        document.body.className = "dark";
        darkBtn.innerText="☀️"; //다크모드 버튼 누르면 이모지가 해로 바뀜!
        darkmode = true;
    } else {
        document.body.className = "";
        darkBtn.innerText="🌙" //라이트모드일때는 달로 다시 바뀜!
        darkmode = false;
    }
}