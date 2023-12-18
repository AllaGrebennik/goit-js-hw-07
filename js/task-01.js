const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);
 
const items = categories.querySelectorAll(".item");
items.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
})

