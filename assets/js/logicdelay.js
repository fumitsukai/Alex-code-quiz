const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start");
const timeEl = document.querySelector("#time");
const questionsEl = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choicesEl = document.querySelector("#choices");

let timeLeft = 70;
let timerInterval;
//timer function
function time() {
    //set timer interval
    timerInterval = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};

//make landing page dissapear once the start button is clicked
start.addEventListener("click", () => {
    startScreen.style.display = "none";
    //start timer as soon as the start button is clicked and show questions
    time();
    questionsEl.classList.remove("hide");
    showQuestions();
});

//create buttons for each answer
const ansOne = document.createElement("button");
const ansTwo = document.createElement("button");
const ansThree = document.createElement("button");
const ansFour = document.createElement("button");
choicesEl.appendChild(ansOne);
choicesEl.appendChild(ansTwo);
choicesEl.appendChild(ansThree);
choicesEl.appendChild(ansFour);

//Show questions with delay
//Iterate through the array
function showQuestions() {
    var i = 0;
    var j = 0;
    function delayedOutput() {
        questionTitle.textContent = questions[i].question;
        ansOne.textContent = questions[i].answerOne;
        ansTwo.textContent = questions[i].answerTwo;
        ansThree.textContent = questions[i].answerThree;
        ansFour.textContent = questions[i].answerFour;
        i++;
        if (i < questions.length) {
            setTimeout(delayedOutput, 10000);
        } else {
            questionsEl.className = "hide";
            clearInterval(timerInterval);
        }
    }
    delayedOutput();
    ansOne.addEventListener("click", () => {
        if (ansOne.textContent == questions[j].correctAnswer) {
            console.log("correct");
            delayedOutput()
        } else {
            console.log("incorrect");
            delayedOutput();
            clearInterval(timerInterval);
        }
        j++;
    })
    ansTwo.addEventListener("click", () => {
        if (ansTwo.textContent == questions[j].correctAnswer) {
            console.log("correct");
            delayedOutput()
        } else {
            console.log("incorrect");
            delayedOutput();
        }
        j++;
    })
    ansThree.addEventListener("click", () => {
        if (ansThree.textContent == questions[j].correctAnswer) {
            console.log("correct");
            delayedOutput()
        } else {
            console.log("incorrect");
            delayedOutput();
        }
        j++;
    })
    ansFour.addEventListener("click", () => {
        if (ansFour.textContent == questions[j].correctAnswer) {
            console.log("correct");
            delayedOutput()
        } else {
            console.log("incorrect");
            delayedOutput();
        }
        j++;
    })
}














    //  function pickAnswer(ans) {
    //      ans.addEventListener("click", () => {
    //          if (ans.textContent == questions[j].correctAnswer) {
    //              delayedOutput();
    //              console.log("correct!");
    //          } else {
    //              delayedOutput();
    //              timeLeft -= 10;
    //              console.log("incorrect");
    //          }
    //          j++;
    //      });
    //  }