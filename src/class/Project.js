export default class Project {
    constructor({name}) {
        this.name = name;
        this.todosId = [];
        this.id = crypto.randomUUID();
        this.active = false;
    }
}
