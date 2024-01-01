const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start");
const timeEl = document.querySelector("#timer");


//make landing page dissapear once the start button is clicked
start.addEventListener("click", () => {
    startScreen.style.display = "none";
});