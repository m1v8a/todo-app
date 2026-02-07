import displayTask from "../../helper/displayTask.js";
import App from "../../module/App.js";
import plusIcon from "./icons/plusIcon.js";

export default function checkListForm(taskId) {
  const form = document.createElement("form");

  const nameInput = document.createElement("input");
  const addButton = document.createElement("button");

  addButton.innerHTML = plusIcon("hsl(0, 92%, 60%)", 14);

  form.append(nameInput, addButton);

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (!nameInput.value) alert("Please fill up the input");

    App.createCheckList(taskId, nameInput.value);

    const tasksContainer = document.querySelector("#task-list");
    const tasks = App.getAllTask();
    displayTask(tasksContainer, tasks);
  });

  return form;
}
