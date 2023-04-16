document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#create-task-form")
.addEventListener("submit", (e) => {
  e.preventDefault();
  buildList(e.target.querySelector("#new-task-description").value);
})
})

function buildList(list) {
  const listItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  listItem.textContent = `${list} `;
  deleteBtn.textContent = "x";
  listItem.appendChild(deleteBtn);
  document.querySelector("#tasks").appendChild(listItem);
}

