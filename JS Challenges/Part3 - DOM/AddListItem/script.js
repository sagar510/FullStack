addBtn = document.getElementById("add");
itemList = document.getElementById("list");

addBtn.addEventListener("click", () => {
    newItem = document.createElement("li");
    count = itemList.children.length + 1;
    newItem.textContent = `Item ${count}`;
    itemList.appendChild(newItem);
});