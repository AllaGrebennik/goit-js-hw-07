const userName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

userName.addEventListener("input", (event) => {
    const userNameTrim = event.currentTarget.value.trim();
    outputName.textContent = userNameTrim ? userNameTrim: "Anonymous";
});

const bodyThtee = document.createElement("div");
bodyThtee.classList.add("bodyThtee");
userName.before(bodyThtee);

const output = document.querySelector("h1");
bodyThtee.append(userName, output);