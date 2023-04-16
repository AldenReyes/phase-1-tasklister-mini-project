document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("#create-task-form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  buildList(e.target.querySelector("#new-task-description").value);
  form.reset()
})
})

function buildList(list) {
  const listItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", handleDelete)
  listItem.textContent = `${list} `;
  deleteBtn.textContent = "x";
  listItem.appendChild(deleteBtn);
  document.querySelector("#tasks").appendChild(listItem);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
