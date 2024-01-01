const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start");
const timeEl = document.querySelector("#time");
const questionsEl = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choicesEl = document.querySelector("#choices");

let timeLeft = 70;

//timer function
function time() {
    //set timer interval
    const timerInterval = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft === 0){
            clearInterval(timerInterval);
        }
    },1000);
};

//make landing page dissapear once the start button is clicked
start.addEventListener("click", () => {
    startScreen.style.display = "none";
    //start timer as soon as the start button is clicked and show questions
    time();
    questionsEl.classList.remove("hide");
    showQuestions();
});

//Show rest of questions with delay
//Iterate through the array
function showQuestions() {
    var i = 0;
    function delayedOutput() {
        questionTitle.textContent = questions[i].question;
        i++;
        if(i < questions.length) {
            setTimeout(delayedOutput, 10000);
        } else questionsEl.className = "hide";
    }
    delayedOutput();
}

