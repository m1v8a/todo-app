import PubSub from "../helpers/pubsub.js";
import Todo from "./Todo.js";

export default class TODO_APP {
    static todos = [];

    static init() {
        // passing the displayTodo method loses it's reference to this (UI class)
        // I don't like how I have to bind the methods into 'this'
        PubSub.subscribe("remove button clicked", this.removeTodo.bind(this));
        PubSub.subscribe("create button clicked", this.createTodo.bind(this));
    }

    static createTodo({ title, note, priority, dateCreated, dueDate }) {
        const todo = new Todo({ title, note, priority, dateCreated, dueDate });
        this.todos.push(todo);

        PubSub.publish("todo created", this.todos);
    }

    static getTodos() {
        return this.todos;
    }

    static removeTodo(todoId) {
        this.todos = this.todos.filter((t) => t.id !== todoId);
        PubSub.publish("todo removed", this.todos);
    }
}
