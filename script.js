const spanEl = document.querySelector("span");

document.addEventListener("mousemove", (e) => {
  spanEl.style.left = e.clientX - 75 + "px";
  spanEl.style.top = e.clientY - 75 + "px";
});
function getRandomNumber(min, max) {
  console.log(Math.random() * 5);
}
getRandomNumber(2, 300);
