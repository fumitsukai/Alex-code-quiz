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

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};

//create buttons for each answer
const ansOne = document.createElement("button");
const ansTwo = document.createElement("button");
const ansThree = document.createElement("button");
const ansFour = document.createElement("button");
choicesEl.appendChild(ansOne);
choicesEl.appendChild(ansTwo);
choicesEl.appendChild(ansThree);
choicesEl.appendChild(ansFour);

//make landing page dissapear once the start button is clicked
start.addEventListener("click", () => {
    startScreen.style.display = "none";
    //start timer as soon as the start button is clicked and show questions
    time();
    questionsEl.classList.remove("hide");
    //show first question once the button is clicked
    questionTitle.textContent = questions[0].question;
    ansOne.textContent = questions[0].answerOne;
    ansTwo.textContent = questions[0].answerTwo;
    ansThree.textContent = questions[0].answerThree;
    ansFour.textContent = questions[0].answerFour;
});

var i = 0;
var j = 1;
//Show questions with delay
//Iterate through the array
function showQuestions() {
    questionTitle.textContent = questions[j].question;
    ansOne.textContent = questions[j].answerOne;
    ansTwo.textContent = questions[j].answerTwo;
    ansThree.textContent = questions[j].answerThree;
    ansFour.textContent = questions[j].answerFour;
}
ansOne.addEventListener("click", () => {
    if (ansOne.textContent == questions[i].correctAnswer) {
        console.log("correct");
        showQuestions();
    } else {
        console.log("incorrect");
        showQuestions();
    }
    i++;
    j++;
})
ansTwo.addEventListener("click", () => {
    if (ansTwo.textContent == questions[i].correctAnswer) {
        console.log("correct");
        showQuestions();
    } else {
        console.log("incorrect");
        showQuestions();
    }
    i++;
    j++;
})
ansThree.addEventListener("click", () => {
    if (ansThree.textContent == questions[i].correctAnswer) {
        console.log("correct");
        showQuestions();
    } else {
        console.log("incorrect");
        showQuestions();
    }
    i++;
    j++;
})
ansFour.addEventListener("click", () => {
    if (ansFour.textContent == questions[i].correctAnswer) {
        console.log("correct");
        showQuestions();
    } else {
        console.log("incorrect");
        showQuestions();
    }
    i++;
    j++;
})

if (j > questions.length) {
questionsEl.className = "hide";
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