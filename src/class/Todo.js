export default class Todo {
    constructor({ title, note, priority, dateCreated, dueDate }) {
        this.title = title;
        this.note = note;
        this.dateCreated = dateCreated;
        this.dueDate = dueDate
        this.priority = +priority;
        this.isCompleted = false;
        this.id = crypto.randomUUID();
    }
}
