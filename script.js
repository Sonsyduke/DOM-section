const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-container";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.classList.add("redText");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);

const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3";
container.appendChild(heading3);

const mainDiv = document.createElement("div");
const headingDiv = document.createElement("h1");
const paragraphDiv = document.createElement("p");

mainDiv.style.cssText = "border: 1px solid black; background-color: pink;";

headingDiv.textContent = "I'm in a div";
paragraphDiv.textContent = "ME TOO!";
mainDiv.append(headingDiv, paragraphDiv);

container.appendChild(mainDiv);
