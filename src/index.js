document.addEventListener("DOMContentLoaded", () => {

/* 1. As a user, I should be able to type a task into the input field.
2. As a user, I should be able to click some form of a submit button.
3. As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
*/

const form = document.querySelector("#create-task-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleForm(e.target.querySelector("#new-task-description").value);
});
});

function handleForm(form) {
  const listItem = document.createElement("li");
  listItem.textContent = form;
  document.querySelector("#tasks").appendChild(listItem);
}

