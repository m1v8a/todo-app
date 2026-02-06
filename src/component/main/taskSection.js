import displayTask from "../../helper/displayTask.js";
import App from "../../module/App.js";
import addTaskButton from "../header/addTaskButton.js";

export default function taskSection() {
    const section = document.createElement("section");
    section.id = "task-section";

    const header = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = "Tasks";

    const ul = document.createElement("ul");
    ul.id = "task-list";

    header.append(h2);
    section.append(header, ul);

    const tasks = App.getAllTask();
    displayTask(ul, tasks);

    return section
}
