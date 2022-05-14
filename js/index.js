const rules = document.querySelector(".rules");
const body = document.body;
const div = document.createElement("div");
const rulesImg = document.createElement("img");
const container = document.querySelector(".container");
let rulesDiv = div.cloneNode(true);
rulesDiv.appendChild(rulesImg);
rulesDiv.setAttribute("class", "rulesdiv");
rulesImg.setAttribute("src", "./images/image-rules.svg");

rules.addEventListener("click", () => {
  container.appendChild(rulesDiv);
});
