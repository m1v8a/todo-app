import button from "../util/buttons/button.js";
import plusIcon from "../util/icons/plusIcon.js";

export default function addTaskButton() {
    const b = button();
    b.classList.add("hover");
    b.innerHTML = `
    ${plusIcon("#ff5b5b")}<span>Add Task</span>
    `;

    b.addEventListener("click", (e) => {
        console.log(e.target);
    });

    return b
}
