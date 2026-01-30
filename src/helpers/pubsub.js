export default class PubSub {
    static #events = {};

    static subscribe(event, fn) {
        if(!this.#events[event]) {
            this.#events[event] = [];
        }
        this.#events[event].push(fn);
    }

    static publish(event, ...args) {
        if(!this.#events[event]) throw new Error(`Event: ${event} does not exist, make sure you are correctly using a event`);
        this.#events[event].forEach((fn) => {
            fn(...args);
        })
    }
}
