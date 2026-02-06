import displayTask from "../../helper/displayTask.js";
import App from "../../module/App.js";
import button from "./buttons/button.js";
import checkbox from "./checkbox.js";
import caretDown from "./icons/caretDown.js";
import checkIcon from "./icons/checkIcon.js";

const priorityList = ["urgent", "required", "optional"];

export default function taskComponent(task) {
    const li = document.createElement("li");
    li.className = "task";

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

    const priority = document.createElement("p");
    priority.className = "task-priority";

    const info = document.createElement("div");
    info.className = "info-container";

    const infoTitle = document.createElement("div");
    infoTitle.className = "task-title-container";
    infoTitle.append(title, note);
    info.append(infoTitle, priority);


    li.append(checkboxEl, info, viewButton);


    if(task.isCompleted) { 
        checkboxEl.innerHTML = checkIcon("#262626", 18);
    }

    function completeTask() {
        App.completeTask(task.id);
        const updatedTasks = App.getAllTask();
        displayTask(document.querySelector("#task-list"), updatedTasks);
    }

    return li;
}
