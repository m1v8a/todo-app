import PubSub from "./pubsub.js";

export default class UI {
    static #todoListEl = document.querySelector("#todo-list");
    static #projectListEl = document.querySelector("#project-list");
    static #createTodoButton = document.querySelector("#create-todo-form button");
    static #createProjectButton = document.querySelector("#create-project-form button");


    static init() {
        const handleDisplayTodos = ({ todos }) => this.displayTodos(todos);
        const handleDisplayProjects = ({ projects }) => this.displayProjects(projects);

        PubSub.subscribe("todo created", handleDisplayTodos);
        PubSub.subscribe("todo removed", handleDisplayTodos);
        PubSub.subscribe("project created", handleDisplayProjects);
        PubSub.subscribe("project removed", handleDisplayProjects);
        PubSub.subscribe("initialize todo app", handleDisplayProjects);


        // event listeners for the each todo
        this.#todoListEl.addEventListener("click", (e) => {
            if (e.target.nodeName !== "BUTTON") return;
            switch (e.target.dataset.name) {
                case "remove-button":
                    PubSub.publish("remove todo button clicked", { todoId: e.target.dataset.id });
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

            PubSub.publish("create todo button clicked", { todo: { title, note, priority, dueDate, dateCreated } });
        });

        // event listener for each project
        this.#projectListEl.addEventListener("click", (e) => {
            // if (e.target.nodeName !== "BUTTON") return;
            switch (e.target.dataset.name) {
                case "remove-button":
                    PubSub.publish("remove project button clicked", { projectId: e.target.dataset.id });
                    break;
                case "project-name":
                    PubSub.publish("project clicked", { projectId: e.target.dataset.id })
            }
        });
        // event listener for project creation
        this.#createProjectButton.addEventListener("click", (e) => {
            e.preventDefault();
            const name = document.querySelector("input[name='project-name']").value;
            PubSub.publish("create project button clicked", { name });
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

    static displayProjects(projects) {
        this.#projectListEl.innerHTML = "";
        projects.forEach(p => {
            const li = document.createElement("li");
            li.append(this.#projectTemplate(p));
            this.#projectListEl.append(li);
        });
    }

    static #projectTemplate(project) {
        const container = document.createElement("div");
        container.className = "project";

        const name = document.createElement("p");
        name.textContent = project.name;
        name.dataset.name = "project-name";
        name.dataset.id = project.id;

        container.append(name);
        // only create a button if the current project is not the default project
        if (project.id !== "default") {
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.dataset.id = project.id;
            removeButton.dataset.name = "remove-button";
            container.append(removeButton);
        }


        return container;
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
