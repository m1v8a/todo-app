import "./style.css";
import TODO_APP from "./class/TODO_APP.js";
import UI from "./helpers/UI.js";

const createButton = document.querySelector("form button");

createButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("input[name='title']").value;
    const note = document.querySelector("input[name='note']").value;
    const priority = document.querySelector("select[name='priority']").value;
    const dueDate = new Date(document.querySelector("input[name='due-date']").value).toLocaleDateString();
    const dateCreated = new Date().toLocaleDateString();

    TODO_APP.createTodo({title, note, priority, dueDate, dateCreated});
    UI.displayTodos(TODO_APP.getTodos());
});




