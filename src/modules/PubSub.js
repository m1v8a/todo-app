export default class PubSub {
    static #events = {};

    static sub(event, fn) {
        if(!this.#events[event]) {
            this.#events[event] = [];
        }

        this.#events[event].push(fn);
    }

    static pub(event, arg) {
        if(!this.#events[event]) {
            console.error(`Can't find event ${event}, make sure it exists`);
        }
        this.#events[event].forEach((fn) => fn(arg));
    }
}
