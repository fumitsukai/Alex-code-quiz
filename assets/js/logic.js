const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start");
const timeEl = document.querySelector("#time");
const questionsEl = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choicesEl = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const sumbitBtn = document.querySelector("#submit");
const initialsText = document.querySelector("#initials");
const finalScore = document.querySelector("#final-score");

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
    showQuestions();
});

var i = 0;
//function for showing questions and answers
function showQuestions() {
    questionTitle.textContent = questions[i].question;
    ansOne.textContent = questions[i].answerOne;
    ansTwo.textContent = questions[i].answerTwo;
    ansThree.textContent = questions[i].answerThree;
    ansFour.textContent = questions[i].answerFour;
    //when we reach the end hide the questionsEl and clear the interval
    if (i > questions.length - 2 || timeLeft == 0) {
        questionsEl.className = "hide";
        clearInterval(timerInterval);
        //show the form
        endScreen.classList.remove("hide");
        //show final score
        finalScore.textContent = timeLeft;
    }
}

//add some delay before showing the next question
function timeOut() {
    setTimeout(showQuestions, 1000);
}
//event listeners for questions and answer and incrementing our indexes one we click on the button and show the next set of questions
//checking if the answer picked is the correct one in the object
ansOne.addEventListener("click", () => {
    check(ansOne);
})
ansTwo.addEventListener("click", () => {
    check(ansTwo);
})
ansThree.addEventListener("click", () => {
    check(ansThree);
})
ansFour.addEventListener("click", () => {
    check(ansFour);
})

//store initials and score once the submit button is clicked and clear the input field

sumbitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const player = {
        initials: initialsText.value.trim(),
        score: timeLeft
    };

    saveFormData(player);
})

function saveFormData(player) {
//get items from storage and store in array and add it to local storage
    const scoresArr = JSON.parse(localStorage.getItem('player')) || [];

    scoresArr.push(player);

    localStorage.setItem('player', JSON.stringify(scoresArr));

    initialsText.value = "";
}

//function to add a correct <p> element for the answers

function showCorrect() {
    const pEl = document.createElement("p");
    pEl.textContent = "Correct!";
    questionsEl.appendChild(pEl);
    setTimeout(() => {
        pEl.textContent = "";
    }, 1000);
}

//function to add a incorrect <p> element for the answers

function showIncorrect() {
    const pEl = document.createElement("p");
    pEl.textContent = "Incorrect!";
    questionsEl.appendChild(pEl);
    setTimeout(() => {
        pEl.textContent = "";
    }, 1000);
}

//function to check answer against the correct one in the object
function check(ans) {
    if (ans.textContent == questions[i].correctAnswer) {
        showCorrect();
        timeOut();
    } else {
        showIncorrect();
        timeOut();
        timeLeft -= 10;
    }
    i++;
}




