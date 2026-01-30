import PubSub from "../helpers/pubsub.js";
import Project from "./Project.js";
import Todo from "./Todo.js";

export default class TODO_APP {
    static todos = [];
    static projects = [new Project("All", "default")];
    static activeProjectId = null;

    static init() {
        const handleRemoveTodo = ({ todoId }) => {
            const todo = this.#findTodo(todoId);
            this.removeTodo(todoId);
            this.#removeTodoFromProject(todo);
        };
        const handleCreateTodo = ({ todo }) => this.createTodo(todo);
        const handleRemoveProject = ({ projectId }) => this.removeProject(projectId);
        const handleCreateProject = ({ name }) => this.createProject(name);
        const handleProjectClicked = ({ projectId }) => this.setActive(projectId);

        PubSub.subscribe("remove todo button clicked", handleRemoveTodo);
        PubSub.subscribe("create todo button clicked", handleCreateTodo);
        PubSub.subscribe("create project button clicked", handleCreateProject);
        PubSub.subscribe("remove project button clicked", handleRemoveProject);
        PubSub.subscribe("project clicked", handleProjectClicked);

        PubSub.publish("projects updated", { projects: this.projects });
        PubSub.publish("todos updated", { todos: this.#getActiveTodos() });

        this.setActive("default");
    }

    static createTodo({ title, note, priority, dateCreated, dueDate }) {
        const todo = new Todo({ title, note, priority, dateCreated, dueDate, projectId: this.activeProjectId });
        this.todos.push(todo);
        this.#addTodoToProject(todo.id);

        PubSub.publish("todos updated", { todos: this.#getActiveTodos() });
    }

    static getTodos() {
        return this.todos;
    }

    static #getActiveTodos() {
        if(this.activeProjectId === "default") return this.todos;
        return this.todos.filter((t) => t.projectId === this.activeProjectId);
    }

    static #findTodo(todoId) {
        return this.todos.filter((t) => t.id === todoId)[0];
    }

    static removeTodo(todoId) {
        this.todos = this.todos.filter((t) => t.id !== todoId);
        PubSub.publish("todos updated", { todos: this.#getActiveTodos() });
    }

    static createProject(name) {
        const project = new Project(name);
        this.projects.push(project);
        PubSub.publish("projects updated", { projects: this.projects });
    }

    static removeProject(projectId) {
        if (projectId === "default") return;
        this.projects = this.projects.filter((p) => p.id !== projectId);

        PubSub.publish("projects updated", { projects: this.projects });
    }

    static setActive(projectId) {
        this.activeProjectId = projectId;
        PubSub.publish("todos updated", { todos: this.#getActiveTodos() });
    }

    static #addTodoToProject(todoId) {
        this.projects = this.projects.map((p) => {
            if (p.id === this.activeProjectId) {
                p.todos.push(todoId);
            }
            return p
        });
    }

    static #removeTodoFromProject(todo) {
        this.projects = this.projects.map((p) => {
            if (p.id === todo.projectId) {
                p.removeTodo(todo.id);
            }
            return p
        });
    }

}
