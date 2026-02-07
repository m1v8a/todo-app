export default class CheckList {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.checked = false;
  }
}
