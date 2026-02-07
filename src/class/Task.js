export default class Task {
  constructor({ title, note, due, priority }) {
    this.title = title;
    this.note = note;
    this.due = new Date(due).toISOString().slice(0, 10);
    this.priority = priority;
    this.isCompleted = false;
    this.id = crypto.randomUUID();
    this.checkList = [];
    this.IsOpened = false;
  }
}
