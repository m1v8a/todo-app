import PubSub from "./pubsub.js";

export default class UI {
    static #todoListEl = document.querySelector("#todo-list");
    static #createTodoButton = document.querySelector("form button");


    static init() {
        // passing the displayTodo method loses it's reference to this (UI class)
        // I don't like how I have to bind the methods into 'this'
        PubSub.subscribe("todo created", this.displayTodos.bind(this));
        PubSub.subscribe("todo removed", this.displayTodos.bind(this));


        // event listeners for the each todo
        this.#todoListEl.addEventListener("click", (e) => {
            if (e.target.nodeName !== "BUTTON") return;
            switch (e.target.dataset.name) {
                case "remove-button":
                    PubSub.publish("remove button clicked", e.target.dataset.id);
                    break;
            }
        });

        this.#createTodoButton.addEventListener("click", (e) => {
            e.preventDefault();
            const title = document.querySelector("input[name='title']").value;
            const note = document.querySelector("input[name='note']").value;
            const priority = document.querySelector("select[name='priority']").value;
            const dueDate = new Date(document.querySelector("input[name='due-date']").value).toLocaleDateString();
            const dateCreated = new Date().toLocaleDateString();

            PubSub.publish("create button clicked", {title, note, priority, dueDate, dateCreated});
        });
    }

    static displayTodos(todos) {
        this.#todoListEl.innerHTML = "";
        todos.forEach((t) => {
            const li = document.createElement("li");
            li.append(this.#todoTemplate(t));
            this.#todoListEl.append(li);
        })
    }

    static #todoTemplate(todo) {
        const container = document.createElement("article");
        container.className = "todo";

        const title = document.createElement("h2");
        title.textContent = todo.title;

        const note = document.createElement("p");
        note.textContent = todo.note;

        const dateCreated = document.createElement("p");
        dateCreated.textContent = todo.dateCreated;

        const dueDate = document.createElement("p");
        dueDate.textContent = todo.dueDate;

        const priority = document.createElement("p");
        switch (todo.priority) {
            case 1:
                priority.textContent = "High";
                break;
            case 2:
                priority.textContent = "Regular";
                break;
            case 3:
                priority.textContent = "Low";
                break;
        }

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.dataset.id = todo.id;
        removeButton.dataset.name = "remove-button";

        container.append(title, note, dateCreated, dueDate, priority, removeButton)

        return container;
    }
}
