import button from "../util/buttons/button.js";
import radio from "../util/icons/radio.js";

const randomTitles = ["Write a web app", "Jog for 30 minutes", "Call the boss, tell him you quit"]

export default function taskForm() {
    const modal = document.createElement("dialog");
    modal.open = true;

    const form = document.createElement("form");
    form.className = "task-form";

    const randomTitleIndex = Math.floor(Math.random() * randomTitles.length);

    const titleInput = document.createElement("input");
    titleInput.id = "task-title-input";
    titleInput.type = "text";
    titleInput.placeholder = randomTitles[randomTitleIndex];

    const noteInput = document.createElement("textarea");
    noteInput.id = "task-note-input";
    noteInput.placeholder = "Note..."

    const dateInput = document.createElement("input");
    dateInput.id = "task-date-input";
    dateInput.type = "date";
    dateInput.value = new Date().toISOString().slice(0, 10);

    const priorityInput = radio("task-priority-input", [
        { textContent: "Urgent", value: 1, id: "urgent" },
        { textContent: "Required", value: 2, id: "required" },
        { textContent: "Optional", value: 3, id: "optional" },
    ]);

    const submitButton = button("Add", (e) => {
        console.log(e.target);
    });

    const divTop = document.createElement("div");
    const divMid = document.createElement("div");
    const divBot = document.createElement("div");

    divTop.append(titleInput, dateInput);
    divMid.append(noteInput, priorityInput);
    divBot.append(submitButton);
    form.append(divTop, divMid, divBot);

    modal.append(form);
    return modal;
}
