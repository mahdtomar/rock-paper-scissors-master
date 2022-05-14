const rules = document.querySelector(".rules");
const body = document.body;
const div = document.createElement("div");
const rulesImg = document.createElement("img");
const container = document.querySelector(".container");
const choices = document.querySelector(".choices");

let rulesDiv = div.cloneNode(true);
const blackScreen = div.cloneNode();

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

