function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const count = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const contentBox = document.querySelector("#boxes");
const formControl = document.querySelector("#controls");

function createBoxes(amount) {
  let size = 30;
   let contents = [];
  for (let i = 0; i < amount; i++) {
    const itemBox = document.createElement("div");
    itemBox.style.width = `${size}px`;
    itemBox.style.height = `${size}px`;
    itemBox.style.backgroundColor = getRandomHexColor();
    size += 10;
    contents[i] = itemBox;
  }
  const markup = contents.map((content) => `${content.outerHTML}`).join("");
  contentBox.innerHTML = markup;
}

btnCreate.addEventListener("click", () => {
  const amount = count.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    count.value="";
  } else return;
});

btnDestroy.addEventListener("click", () => {
  contentBox.innerHTML = "";
});

const bodySix = document.createElement("div");
bodySix.classList.add("bodySix");
formControl.before(bodySix);

bodySix.append(formControl, contentBox);