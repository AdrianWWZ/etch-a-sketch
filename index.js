const container = document.querySelector(".container");

const button = document.createElement("button");
button.innerText = "Change Size";
button.setAttribute("class", "button");
container.appendChild(button);

const sketchContainer = document.createElement("div");
sketchContainer.setAttribute("class", "sContainer");
container.appendChild(sketchContainer);

let userInput = 16;
button.addEventListener("click", () => {
  const input = prompt("Enter the Size of the Sketch (1 - 100)");

  if (input > 0 && input <= 100) {
    userInput = input;
  }
  document.querySelectorAll(".square").forEach((square) => {
    square.setAttribute(
      "style",
      `width: calc(100% / ${userInput}); height: calc(100% / ${userInput});`
    );
  });

  removeSquares();
  createSquares();
});

const createSquares = () => {
  for (let i = 0; i < userInput * userInput; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute(
      "style",
      `width: calc(100% / ${userInput}); height: calc(100% / ${userInput});`
    );
    let numOver = 0;
    square.addEventListener("mouseover", () => {
      if (numOver <= 10) numOver++;

      square.setAttribute(
        "style",
        `background-color: hsl(0, 0%, calc(100% - (10% * ${numOver}))); width: calc(100% / ${userInput}); height: calc(100% / ${userInput});`
      );
    });
    sketchContainer.appendChild(square);
  }
};

const removeSquares = () => {
  while (sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }
};

createSquares();
