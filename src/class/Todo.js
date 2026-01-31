export default class Todo {
    constructor({ title, note, dueDate, priority }) {
        this.title = title;
        this.note = note;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    }
}
