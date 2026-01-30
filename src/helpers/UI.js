export default class UI {
    static todoListElement = document.querySelector("#todo-list");

    static displayTodos(todos) {
        todos.forEach((t) => {
            const li = document.createElement("li");
            li.append(this.#todoTemplate(t));
            this.todoListElement.append(li);
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

        container.append(title, note, dateCreated, dueDate, priority)

        return container;
    }
}
