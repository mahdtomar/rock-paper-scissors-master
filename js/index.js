const rules = document.querySelector(".rules");
const body = document.body;
const div = document.createElement("div");
const p = document.createElement("p");
const rulesImg = document.createElement("img");
const container = document.querySelector(".container");
const choices = document.querySelector(".choices");
const mainscreen = document.querySelector(".mainscreen");
const choicesList = choices.querySelectorAll(".choice");
let rulesDiv = div.cloneNode(true);
const blackScreen = div.cloneNode();
const loadingMsg = document.querySelector(".pc-turn");
const playerText = document.querySelector(".player");
const computerText = document.querySelector(".computer");
const playercontainer = document.querySelector(".playercontainer");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const msg = document.querySelector(".msg");
const reset = document.querySelector(".reset");
let score = document.querySelector(".results");
let rockClone = rock.cloneNode(true);
let paperClone = paper.cloneNode(true);
let scissorsClone = scissors.cloneNode(true);

score.innerHTML = 0;

const results = document.querySelector(".tryagain");
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
  let currentTag = e.target.tagName;
  let current;
  // to make sure the user click on the choices only
  if (e.target.className !== "choices") {
    switch (
      currentTag // to get the div element even if the user clicked the svg or the path
    ) {
      case "DIV":
        current = e.target;
        break;
      case "svg":
        current = e.target.parentElement;
        break;
      case "path":
        current = e.target.parentElement.parentElement;
        break;
      default:
        break;
    }
    current.setAttribute("chosen", "true");
    for (i = 0; i < choicesList.length; i++) {
      choicesList[i].hasAttribute("chosen")
        ? ""
        : choices.removeChild(choicesList[i]);
    }
    choices.classList.add("away");
    loadingMsg.classList.add("visible");
    function generateRandom(min = 1, max = 10) {
      // to get a randome number between 1 and 9
      let difference = max - min;
      let rand = Math.random();
      rand = Math.floor(rand * difference);
      rand = rand + min;
      return rand;
    }
    function pcChoice(rand) {
      rand = generateRandom();
      if (rand > 0 && rand < 4) {
        computerText.appendChild(rockClone);
      } else if (rand > 3 && rand < 7) {
        computerText.appendChild(scissorsClone);
      } else if (rand > 6) {
        computerText.appendChild(paperClone);
      }
    }
    pcChoice();
    function scoreCount(player, pc) {
      player = current.classList[0].charAt(0); // fist character of the class name
      pc = computerText.children[1].classList[0].charAt(0); // fist character of the class name
      // rock situations
      player == "r" && pc == "p" ? (msg.innerHTML = "You Lose") : "";
      player == "r" && pc == "s" ? (msg.innerHTML = "You Win") : "";
      // paper situarins
      player == "p" && pc == "r" ? (msg.innerHTML = "You Win") : "";
      player == "p" && pc == "s" ? (msg.innerHTML = "You Lose") : "";
      // scissors situarins
      player == "s" && pc == "r" ? (msg.innerHTML = "You Lose") : "";
      player == "s" && pc == "p" ? (msg.innerHTML = "You Win") : "";
      //draw
      player == pc ? (msg.innerHTML = "It's A Draw") : "";

      // changing the score
      let currentScore = +score.innerHTML;
      msg.innerHTML == "You Win" ? (currentScore += 1) : "";
      msg.innerHTML == "You Lose" ? (currentScore -= 1) : "";
      currentScore < 0 ? (currentScore = 0) : "";
      score.innerHTML = currentScore;
    }
    setTimeout(() => {
      // adding (ps's choice) while the div is not visible
      choices.classList.add("results");
      playercontainer.appendChild(current);
      choices.innerHTML = playerText.innerHTML;
      choices.appendChild(results);
      choices.appendChild(computerText);
    }, 500);
    setTimeout(() => {
      // showing the div after adding pc's choice
      loadingMsg.classList.remove("visible");
      scoreCount();
      choices.classList.remove("away");
    }, 1000);
  }
});
reset.addEventListener("click", () => {
  // resetting the game
  choices.classList.remove("results");
  choices.innerHTML = "";
  choices.appendChild(rock);
  choices.appendChild(scissors);
  choices.appendChild(paper);
  computerText.removeChild(computerText.children[1]);
});
