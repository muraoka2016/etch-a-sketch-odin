let container = document.querySelector(".container");
container.style.height = "100vh";
container.style.display = "flex";
container.style.flexDirection = "column";

const size = 16;

for (let i = 0; i < size; i++) {
  const line1 = document.createElement("div");
  line1.style.display = "flex";
  line1.style.flex = "1";
  container.appendChild(line1);

  for (let j = 0; j < size; j++) {
    const square = document.createElement("div");
    square.style.flex = "1";
    square.style.border = "1px solid black";
    square.style.aspectRatio = "1 / 1";

    line1.appendChild(square);
  }
}
