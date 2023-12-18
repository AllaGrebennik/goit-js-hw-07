function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyTask = document.querySelector("body");
const btn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btn.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyTask.style.backgroundColor = color;
  spanColor.textContent = color;
});
