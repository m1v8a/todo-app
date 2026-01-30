import Todo from "./Todo.js";

export default class TODO_APP {
    static todos = [];

    static createTodo({ title, note, priority, dateCreated, dueDate }) {
        const todo = new Todo({ title, note, priority, dateCreated, dueDate });
        this.todos.push(todo);
    }

    static getTodos() {
        return this.todos;
    }
}
