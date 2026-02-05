export default class Task {
    constructor({title, note, due, priority}) {
        this.title = title;
        this.note = note;
        this.due = new Date(due);
        this.priority = priority;
        this.isCompleted = false;
        this.id = crypto.randomUUID();
    }
}
