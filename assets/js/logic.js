const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start");
const timeEl = document.querySelector("#time");

let timeLeft = 70;

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
    //start timer as soon as the start button is clicked
    time();
});