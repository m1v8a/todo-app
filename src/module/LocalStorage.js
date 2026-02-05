export default class LocalStorage {
    static #app = "todo-app";

    static init() {
        if(!localStorage.getItem(this.#app)) {
            localStorage.setItem(this.#app, JSON.stringify({
                projects: [],
                tasks: [],
            }));
        }
    }

    static update(callback) {
        const data = JSON.parse(localStorage.getItem(this.#app));
        callback(data);
        localStorage.setItem(this.#app, JSON.stringify(data));
    }

    static get(callback) {
        const data = JSON.parse(localStorage.getItem(this.#app));
        return callback(data);
    }
}
