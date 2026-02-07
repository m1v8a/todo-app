export default class Project {
  constructor(name, id = crypto.randomUUID()) {
    this.name = name;
    this.id = id;
  }
}
