function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
  const numberOfCircle = getRandomNumber(10, 100); //x

  for (let i = 0; i < numberOfCircle; i++) {
    // create a circle as const circle = ?
    const circle = document.createElement("span");
    // append that circle to body
    circle.style.backgroundColor = getRandomColor();

    const size = getRandomSize();
    circle.style.height = size + "px";
    circle.style.width = size + "px";

    const { x, y } = getRandomPosition(size);
    circle.style.top = y + "px";
    circle.style.left = x + "px";

    document.body.appendChild(circle);
  }
});
function getRandomColor() {
  let red = getRandomNumber(0, 255);
  let green = getRandomNumber(0, 255);
  let blue = getRandomNumber(0, 255);
  return `rgb(${red},${green},${blue})`;
}

function getRandomSize() {
  return getRandomNumber(10, 80);
}

function getRandomPosition(size) {
  const x = getRandomNumber(0, window.innerWidth - size);
  const y = getRandomNumber(0, window.innerHeight - size);

  return { x, y };
}
