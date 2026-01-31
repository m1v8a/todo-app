import Todo from "../class/Todo.js";

export default class App {
    static #todos = [];

    static createTodo({title, note, dueDate, priority}) {
        this.#todos.push(new Todo({title, note, dueDate, priority}));
    }

    static getTodos() {
        return this.#todos;
    }
    
    static removeTodo(id) {
        this.#todos = this.#todos.filter((t) => t.id !== id);
    }

    static editTodo(id, {title, note, dueDate, priority}) {
        this.#todos = this.#todos.map((t) => {
            if(t.id === id) {
                return Object.assign(t, {title, note, dueDate, priority});
            }
            return t;
        })
    }

    static findTodo(id) {
        return this.#todos.filter((t) => t.id === id)[0];
    }

}
