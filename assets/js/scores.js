const highscoresEl = document.querySelector("#highscores");
const clear = document.querySelector("#clear");

//get items from local storage

const storageGet = JSON.parse(localStorage.getItem('player'));
//sort array
storageGet.sort((a,b) => b.score - a.score);

//create list elements for the scores and sort by score
//loop through array
for (score in storageGet) {
    const liEl = document.createElement("li");
    liEl.className = "list-element";
    liEl.textContent = storageGet[score].initials + " - " + storageGet[score].score;
    highscoresEl.appendChild(liEl);
}


//clear highscores
clear.addEventListener('click', () => {
    localStorage.clear();
    document.querySelectorAll(".list-element").forEach(e => e.remove());
})

