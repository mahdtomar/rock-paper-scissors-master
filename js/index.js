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
const choicesList = choices.children;
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
  let currentTag = e.target.tagName;
  let current;
  if (e.target.className !== "choices") { // to make sure the user click on the choices only 
    switch (currentTag) { // to get the div element even if the user clicked the svg or the path 
      case "DIV":
        current = e.target;
        console.log(current);
        break;
      case "svg":
        current = e.target.parentElement;
        console.log(current);
        break;
      case "path":
        current = e.target.parentElement.parentElement;
        console.log(current);
        break;
      default:
        break;
    }
    for (i = 0; i < choicesList.length; i++) {
      if(choicesList[i] == current){
        console.log("yes it matches ")
      }else{
        try {
          choices.removeChild(choicesList[i])
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
});

// for(i=0;i<choicesList.length;i++){
//   choicesList[i].className = current? console.log(current):""
// }
