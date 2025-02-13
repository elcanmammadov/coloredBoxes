const colorButton = document.getElementById("btn");
const colorBoxesDiv = document.getElementById("colorBoxes");
const colorInput = document.getElementById("colorInput");

colorButton.addEventListener("click", handleColorButtonClick);

function handleColorButtonClick() {
  const inputValue = colorInput.value.trim();
  const colors = inputValue
    .split(",")
    .map((color) => color.trim())
    .filter((color) => color);

  colorBoxesDiv.innerHTML = "";

  colors.forEach((color) => {
    const colorBox = createColorBox(color);
    colorBoxesDiv.appendChild(colorBox);
  });
}

function createColorBox(color) {
  const box = document.createElement("div");
  box.classList.add("color-box");
  box.style.backgroundColor = color;
  return box;
}
