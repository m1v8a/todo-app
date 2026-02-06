import displayTask from "../../helper/displayTask.js";
import App from "../../module/App.js";
import button from "./buttons/button.js";
import checkbox from "./checkbox.js";
import caretDown from "./icons/caretDown.js";
import checkIcon from "./icons/checkIcon.js";

const priorityList = ["URGENT", "REQUIRED", "OPTIONAL"];

export default function taskComponent(task) {
    const li = document.createElement("li");
    li.className = "task";
    li.dataset.id = task.id;

    const title = document.createElement("h3");
    title.textContent = task.title;

    const note = document.createElement("p");
    note.textContent = task.note || "---";
    note.className = "task-note";

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

    info.append(title, priority);

    // BASIC VIEW
    const basicInfoCont = document.createElement("div");
    basicInfoCont.className = "basic-info";
    basicInfoCont.append(checkboxEl, info, viewButton);

    
    // FULL VIEW
    const fullInfoCont = document.createElement("div");
    fullInfoCont.className = "full-info";

    const fullInfoContent = document.createElement("div");
    fullInfoContent.className = "full-info-content";

    const noteCont = document.createElement("div");
    noteCont.className = "note-container";

    const buttonCont = document.createElement("div");
    buttonCont.className = "button-container";

    const removeButton = button("Remove", () => removeTask());

    noteCont.append(note);
    fullInfoContent.append(noteCont, buttonCont);
    buttonCont.append(removeButton);
    fullInfoCont.append(fullInfoContent);


    li.append(basicInfoCont, fullInfoCont);

    if (task.isCompleted) {
        checkboxEl.innerHTML = checkIcon("#262626", 18);
    }

    function completeTask() {
        App.completeTask(task.id);
        const updatedTasks = App.getAllTask();
        displayTask(document.querySelector("#task-list"), updatedTasks);
    }

    function viewTask() {
        const taskElements = document.querySelectorAll("#task-list .task");
        [...taskElements].forEach(taskEl => {
            if (taskEl.dataset.id !== task.id) {
                taskEl.dataset.opened = 0;
            } else {
                taskEl.dataset.opened = taskEl.dataset.opened == 1 ? 0 : 1;
            }
        });
    }

    function removeTask() {
        App.removeTask(task.id);
        const updatedTasks = App.getAllTask();
        displayTask(document.querySelector("#task-list"), updatedTasks);
    }

    return li;
}
