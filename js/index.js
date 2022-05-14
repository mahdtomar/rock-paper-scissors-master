const rules = document.querySelector(".rules");
const body = document.body;
const div = document.createElement("div");
const p = document.createElement("p");
const rulesImg = document.createElement("img");
const container = document.querySelector(".container");
const choices = document.querySelector(".choices");
const mainscreen = document.querySelector(".mainscreen");
const playerText = `<p>You Picked</p>`;
const pcText = `<p>The House Picked</p>`;
// const names = ["rock", "paper", "scissors"]
// const rock = document.querySelector(".rock");
// const scissors = document.querySelector(".scissors");
// const paper = document.querySelector(".paper");
// const choices = [rock, scissors, paper];
let rulesDiv = div.cloneNode(true);
const blackScreen = div.cloneNode();
// let paperNode = ``
blackScreen.setAttribute("class", "blackscreen");
rulesDiv.appendChild(rulesImg);
rulesDiv.setAttribute("class", "rulesdiv");
rulesImg.setAttribute("src", "./images/image-rules.svg");

rules.addEventListener("click", () => {
  container.appendChild(rulesDiv);
  container.style.zIndex = "-1";
  body.appendChild(blackScreen);
});

blackScreen.addEventListener("click", () => {
  body.removeChild(blackScreen);
  container.removeChild(rulesDiv);
  container.style.zIndex = "1";
});

choices.addEventListener("click", (e) => {
  let current = e.target;
  let results = div.cloneNode();
  let playerChoice = current;
  let pcChoice = choices.children[1];
  results.appendChild(current);
  if (!current.hasAttribute("vassel")) {
    current.style.backgroundColor = "blue";
    for (i = 0; i < 3; i++) {
      // 3 is the number of divs in choices (rock,paper,scissors)
      choices.remove();
      mainscreen.append(results);
    }
  }
});
