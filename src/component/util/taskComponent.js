import button from "./buttons/button.js";
import checkbox from "./checkbox.js";
import caretDown from "./icons/caretDown.js";

export default function taskComponent(task) {
    const li = document.createElement("li");
    li.className = "task";
    const title = document.createElement("h3");
    title.textContent = task.title;

    const note = document.createElement("p");
    note.textContent = task.note;

    const cbox = checkbox(task.isCompleted);

    const viewButton = button();
    viewButton.innerHTML = caretDown("#262626");

    const divLeft = document.createElement("div");
    const divInnerLeft = document.createElement("div");
    const divRight = document.createElement("div");

    divInnerLeft.append(title, note);
    divLeft.append(cbox, divInnerLeft);
    divRight.append(viewButton);
    li.append(divLeft, divRight);

    return li;
}
