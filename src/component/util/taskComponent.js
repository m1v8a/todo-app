import displayTask from "../../helper/displayTask.js";
import App from "../../module/App.js";
import button from "./buttons/button.js";
import checkbox from "./checkbox.js";
import checkListComponent from "./checkListComponent.js";
import checkListForm from "./checkListForm.js";
import caretDown from "./icons/caretDown.js";
import checkIcon from "./icons/checkIcon.js";

const priorityList = ["URGENT", "REQUIRED", "OPTIONAL"];

export default function taskComponent(task) {
  const li = document.createElement("li");
  li.className = "task border";
  li.dataset.id = task.id;

  const title = document.createElement("h3");
  title.textContent = task.title;

  const note = document.createElement("p");
  note.textContent = task.note || "---";
  note.className = "task-note";

  const due = document.createElement("p");
  due.textContent = task.due;
  due.className = "task-due";

  const checkboxEl = checkbox(task.isCompleted);
  checkboxEl.className = "checkbox";
  checkboxEl.addEventListener("click", () => completeTask());

  const viewButton = button();
  viewButton.classList.add("view-button");
  viewButton.innerHTML = caretDown("#262626", 18);
  viewButton.addEventListener("click", () => viewTask());

  const priority = document.createElement("p");
  priority.className = "task-priority";
  priority.textContent = priorityList[+task.priority - 1];
  priority.classList.add(priorityList[+task.priority - 1].toLowerCase());

  const info = document.createElement("div");
  info.className = "info-container";

  // BASIC VIEW
  const basicInfoCont = document.createElement("div");
  const endDiv = document.createElement("div");

  endDiv.append(due, priority);
  info.append(title, endDiv);
  basicInfoCont.className = "basic-info";
  basicInfoCont.append(checkboxEl, info, viewButton);

  // FULL VIEW
  const fullInfoCont = document.createElement("div");
  fullInfoCont.className = "full-info";

  const fullInfoContent = document.createElement("div");
  fullInfoContent.className = "full-info-content";

  const noteCont = document.createElement("div");
  noteCont.className = "note-container";

  const checklistCont = document.createElement("ul");

  const checkListFormCont = document.createElement("div");
  checkListFormCont.className = "checklist-buttons";
  // prettier-ignore

  // display either the checklist form or the add list button
  const addCheckListButton = button("Add a checklist");
  addCheckListButton.addEventListener("click", () => {
    if (checkListFormCont.contains(addCheckListButton)) {
      checkListFormCont.innerHTML = "";
      checkListFormCont.append(checkListForm(task.id));
    } else {
      checkListFormCont.innerHTML = "";
      checkListFormCont.append(addCheckListButton);
    }
  });

  addCheckListButton.className =
    addCheckListButton.className + " bg-transparent fg-danger";

  checkListFormCont.append(addCheckListButton);
  // display checklist
  if (task.checkList.length) {
    task.checkList.forEach((cl) => {
      checklistCont.append(checkListComponent(task.id, cl));
    });
    checklistCont.append(checkListFormCont);
  } else {
    checklistCont.append(checkListFormCont);
  }

  const buttonCont = document.createElement("div");
  buttonCont.className = "button-container";

  const removeButton = button("Remove", () => removeTask());
  removeButton.classList.add("bg-danger");

  noteCont.append(note);
  fullInfoContent.append(noteCont, checklistCont, buttonCont);
  buttonCont.append(removeButton);
  fullInfoCont.append(fullInfoContent);

  li.append(basicInfoCont, fullInfoCont);

  if (task.isCompleted) {
    checkboxEl.innerHTML = checkIcon("#262626", 18);
  }

  if (task.isOpened) {
    li.dataset.opened = 1;
  } else {
    li.dataset.opened = 0;
  }

  function completeTask() {
    App.completeTask(task.id);
    const updatedTasks = App.getAllTask();
    displayTask(document.querySelector("#task-list"), updatedTasks);
  }

  function viewTask() {
    App.openTask(task.id);
    const tasks = App.getAllTask();
    const tasksContainer = document.querySelector("#task-list");
    displayTask(tasksContainer, tasks);
  }

  function removeTask() {
    App.removeTask(task.id);
    const updatedTasks = App.getAllTask();
    displayTask(document.querySelector("#task-list"), updatedTasks);
  }

  return li;
}
