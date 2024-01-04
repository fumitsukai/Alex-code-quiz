const highscoresEl = document.querySelector("#highscores");

//show highscores from storage
const player =  JSON.parse(localStorage.getItem("Initials"));
const scoreFinal = JSON.parse(localStorage.getItem("Score"));

//create list elements for the scores and sort by score

const liEl = document.createElement("li");
liEl.textContent = player;
highscoresEl.appendChild(liEl);