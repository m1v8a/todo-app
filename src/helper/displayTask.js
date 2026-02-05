import taskComponent from "../component/util/taskComponent.js";

export default function displayTask(container, tasks) {
    container.innerHTML = "";
    tasks.forEach(task => {
        const t = taskComponent(task);
        container.append(t);
    });
}
