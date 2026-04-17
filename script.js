let container = document.querySelector(".container");
let inputNumber = document.querySelector("#inputNumber");
let change = document.querySelector("#change");
let warning = document.querySelector("#warning");
let reset = document.querySelector("#reset");

let draw = false;
document.addEventListener("mousedown", () => {
  draw = true;
});

document.addEventListener("mouseup", () => {
  draw = false;
});

let size = 16;
const squareSize = 100 / size;

function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 70%)`;
}
change.addEventListener("click", () => {
  if (
    inputNumber.value <= 0 ||
    inputNumber.value > 100 ||
    inputNumber.value === ""
  ) {
    return (warning.textContent =
      "Invalid entry! The entry should be:\n1) Positive\n2) Max value 100\n3) Can't be empty");
  } else {
    container.textContent = "";
    size = inputNumber.value;
    createGrid();
  }
});

reset.addEventListener("click", () => {
  size = 16;
  container.textContent = "";
  createGrid();
});

function createGrid() {
  for (let i = 0; i < size; i++) {
    const line1 = document.createElement("div");
    line1.style.display = "flex";
    line1.style.flex = "1";
    container.appendChild(line1);

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.opacity = "1";
      square.style.backgroundColor = "#ffe0cc";
      square.style.width = `${squareSize}%`;
      square.style.flex = "1";
      square.style.boxSizing = "border-box";
      square.style.border = "1px solid black";
      square.style.aspectRatio = "1 / 1";

      square.addEventListener("mousemove", () => {
        if (draw) {
          let currentOpacity = Number(square.dataset.opacity) || 0;

          currentOpacity += 0.1;

          square.dataset.opacity = currentOpacity;

          square.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
        }
      });

      line1.appendChild(square);
    }
  }
}

createGrid();
