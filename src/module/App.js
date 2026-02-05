import Task from "../class/Task.js";
import LocalStorage from "./LocalStorage.js";

export default class App {
    static createTask(props) {
        LocalStorage.update((data) => {
            data.tasks.push(new Task(props));
        });
    };

    static removeTask(id) {
        LocalStorage.update((data) => {
            data.tasks = data.tasks.filter((task) => task.id !== id);
        });
    }

    static editTask(id, props) {
        LocalStorage.update((data) => {
            data.task = data.tasks.map((task) => {
                if(task.id === id) {
                    task = Object.assign(task, props);
                }
                return task;
            });
        });
    }

    static getTask(id) {
        return LocalStorage.get((data) => {
            return data.tasks.filter((task) => task.id === id)[0];
        });
    }

    static getAllTask() {
       return LocalStorage.get((data) => {
           return data.tasks;
       });
    }
}
