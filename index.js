const container = document.querySelector(".container");

const button = document.createElement("button");
button.innerText = "Change Size";
button.setAttribute("class", "button");
container.appendChild(button);

const sketchContainer = document.createElement("div");
sketchContainer.setAttribute("class", "sContainer");

let userInput = 10;
button.addEventListener("click", () => {
  let input = prompt("Enter the Size of the Sketch");

  if (input > 0 && input <= 100) {
    userInput = input;
  }

  //   document.querySelectorAll(".square").forEach((square) => {
  //     square.setAttribute(
  //       "style",
  //       `width: calc(100% / ${userInput}); height: calc(100% / ${userInput});`
  //     );
  //   });
});

for (let i = 0; i < userInput * userInput; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  square.setAttribute(
    "style",
    `width: calc(100% / ${userInput}); height: calc(100% / ${userInput});`
  );
  square.addEventListener("mouseover", () => {
    square.setAttribute(
      "style",
      `background-color: blue; width: calc(100% / ${userInput}); height: calc(100% / ${userInput});`
    );
  });
  sketchContainer.appendChild(square);
}

container.appendChild(sketchContainer);
