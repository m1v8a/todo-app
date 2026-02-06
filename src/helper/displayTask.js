import addTaskButton from "../component/header/addTaskButton.js";
import taskComponent from "../component/util/taskComponent.js";

export default function displayTask(container, tasks) {
    container.innerHTML = "";
    if(!tasks.length) {
        container.append(addTaskButton());
        return;
    }
    tasks.forEach(task => {
        const t = taskComponent(task);
        container.append(t);
    });
}
