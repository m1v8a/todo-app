export default class Project {
    constructor({ name, id = crypto.randomUUID() }) {
        this.name = name;
        this.todosId = [];
        this.id = id;
        this.active = false;
    }
}
