import button from "../util/buttons/button.js";
import radio from "../util/radio.js";
import closeIcon from "../util/icons/closeIcon.js";
import App from "../../module/App.js";
import displayTask from "../../helper/displayTask.js";

const randomTitles = [
  "Write a web app",
  "Jog for 30 minutes",
  "Call the boss, tell him you quit",
];

export default function taskForm() {
  const modal = document.createElement("dialog");
  modal.id = "task-form-modal";
  modal.className = "shadow";
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
  noteInput.placeholder = "Note...";

  const dueInput = document.createElement("input");
  dueInput.id = "task-date-input";
  dueInput.type = "date";
  dueInput.value = new Date().toISOString().slice(0, 10);

  const priorityInput = radio("task-priority-input", [
    { textContent: "Urgent", value: 1, id: "urgent", checked: false },
    { textContent: "Required", value: 2, id: "required", checked: false },
    { textContent: "Optional", value: 3, id: "optional", checked: true },
  ]);

  const submitButton = button("Add", (e) => {
    e.preventDefault();
    if (!titleInput.value) {
      alert("Please input title");
      return;
    }
    const task = {
      title: titleInput.value,
      note: noteInput.value,
      due: dueInput.value,
    };
    const prioRadios = document.querySelectorAll(
      `input[type="radio"][name="task-priority-input"]`
    );
    [...prioRadios].forEach((r) => {
      if (r.checked) task.priority = r.value;
    });

    App.createTask(task);
    const main = document.querySelector("main");
    main.removeChild(modal);
    const tasks = App.getAllTask();
    const tasksContainer = document.querySelector("#task-list");
    displayTask(tasksContainer, tasks);
  });

  const closeButton = button("", (e) => {
    const main = document.querySelector("main");
    main.removeChild(modal);
  });

  closeButton.classList.add("bg-danger");
  closeButton.innerHTML = closeIcon("#fff");

  const divTop = document.createElement("div");
  const divMid = document.createElement("div");
  const divBot = document.createElement("div");

  divTop.append(titleInput, dueInput);
  divMid.append(noteInput, priorityInput);
  divBot.append(submitButton, closeButton);
  form.append(divTop, divMid, divBot);

  modal.append(form);
  return modal;
}
