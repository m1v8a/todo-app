import Todo from "../class/Todo.js";
import Project from "../class/Project.js";

export default class TODO_APP {
    static #todos = [];
    static #projects = [];

    // TODO METHODS
    
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

    // PROJECT METHODS

    static createProject(name) {
        this.#projects.push(new Project(name));
    }

    static removeProject(id) {
        this.#projects = this.#projects.filter((p) => p.id !== id);
    }

    static getProjects() {
        return this.#projects;
    }

    static editProject(id, {name}) {
        this.#projects = this.#projects.map((p) => {
            if(p.id === id) {
                return Object.assign(p, {name});
            }
            return p;
        })
    }
    static findProject(id) {

        return this.#projects.filter((p) => p.id === id)[0];
    }

}









