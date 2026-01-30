import PubSub from "../helpers/pubsub.js";
import Project from "./Project.js";
import Todo from "./Todo.js";

export default class TODO_APP {
    static todos = [];
    static projects = [];

    static init() {
        // passing the displayTodo method loses it's reference to this (UI class)
        // I don't like how I have to bind the methods into 'this'
        PubSub.subscribe("remove todo button clicked", this.removeTodo.bind(this));
        PubSub.subscribe("create todo button clicked", this.createTodo.bind(this));
        PubSub.subscribe("create project button clicked", this.createProject.bind(this));
        PubSub.subscribe("remove project button clicked", this.removeProject.bind(this));
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

    static createProject(name) {
        const project = new Project(name);
        this.projects.push(project);

        PubSub.publish("project created", this.projects);
    }

    static removeProject(projectId) {
        this.projects = this.projects.filter((p) => p.id !== projectId);
        PubSub.publish("project removed", this.projects);
    }

    static getProjects() {
        return this.projects;
    }
}
