export default class Project {
    constructor(name, id = crypto.randomUUID()) {
        this.name = name;
        this.todos = [];
        this.id = id;
    }

    removeTodo(todoId) {
        this.todos = this.todos.filter((tid) => tid !== todoId);
    }
}
