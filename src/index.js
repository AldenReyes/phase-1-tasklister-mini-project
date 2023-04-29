const form = document.querySelector("#create-task-form");

document.addEventListener("DOMContentLoaded", () => {
  addFormListener();
  buildDropdown();
});

function addFormListener() {
  form.addEventListener("submit", (e) => {
  e.preventDefault();
  buildList(e.target.querySelector("#new-task-description").value);
  form.reset();
})};

function buildList(list) {
  const listItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", handleDelete);
  deleteBtn.textContent = "x";
  listItem.textContent = `${list} `;
  listItem.appendChild(deleteBtn);
  document.querySelector("#tasks").appendChild(listItem);
}

function buildDropdown() {
  const dropdown = document.createElement("select");
  dropdown.setAttribute("id", "prioritySelect");
  dropdown.addEventListener("change", handleDropdown);
  form.appendChild(dropdown);
  buildOptions();
}

function buildOptions() {
  const dropdown = document.getElementById("prioritySelect");
  const options = ["Low", "Medium", "High"];
  options.map((option) => {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", option)
    optionElement.textContent = option;
    dropdown.appendChild(optionElement);
    return optionElement;
  });
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

function handleDropdown(e) {
  console.log(e)
}
