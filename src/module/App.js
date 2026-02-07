import CheckList from "../class/CheckList.js";
import Project from "../class/Project.js";
import Task from "../class/Task.js";
import LocalStorage from "./LocalStorage.js";

export default class App {
  static createTask(props) {
    LocalStorage.update((data) => {
      data.tasks.push(new Task(props));
    });
  }

  static removeTask(id) {
    LocalStorage.update((data) => {
      data.tasks = data.tasks.filter((task) => task.id !== id);
    });
  }

  static editTask(id, props) {
    LocalStorage.update((data) => {
      data.tasks = data.tasks.map((task) => {
        if (task.id === id) {
          task = Object.assign(task, props);
        }
        return task;
      });
    });
  }

  static getTask(id) {
    return LocalStorage.get((data) => {
      for (let i = 0; i < data.tasks.length; i++) {
        if (data.tasks[i].id === id) return data.tasks[i];
        return null;
      }
    });
  }

  static openTask(id) {
    LocalStorage.update((data) => {
      data.tasks = data.tasks.map((task) => {
        if (task.id === id) task.isOpened = !task.isOpened;
        else task.isOpened = false;
        return task;
      });
    });
  }

  static completeTask(id) {
    LocalStorage.update((data) => {
      data.tasks = data.tasks.map((task) => {
        if (task.id === id) task.isCompleted = !task.isCompleted;
        return task;
      });
    });
  }

  static getAllTask() {
    return LocalStorage.get((data) => {
      return data.tasks;
    });
  }

  static createCheckList(taskId, checkListName) {
    LocalStorage.update((data) => {
      data.tasks = data.tasks.map((task) => {
        if (task.id === taskId) {
          task.checkList.push(new CheckList(checkListName));
        }
        return task;
      });
    });
  }

  static checkCheckList(taskId, checkListId) {
    LocalStorage.update((data) => {
      data.tasks = data.tasks.map((task) => {
        if (task.id === taskId) {
          task.checkList = task.checkList.map((cl) => {
            if (cl.id === checkListId) {
              cl.checked = true;
            }
            return cl;
          });
        }
        return task;
      });
    });
  }

  static createProject(name) {
    LocalStorage.update((data) => {
      data.projects.push(new Project(name));
    });
  }

  static removeProject(id) {
    LocalStorage.update((data) => {
      data.projects = data.projects.filter((project) => project.id !== id);
    });
  }

  static getProject(id) {
    return LocalStorage.get((data) => {
      for (let i = 0; i < data.projects.length; i++) {
        if (data.projects[i].id === id) return data.projects[i];
        return null;
      }
    });
  }

  static editProject(id, value) {
    LocalStorage.update((data) => {
      data.projects = data.projects.map((project) => {
        if (project.id === id) return Object.assign(project, value);
        return project;
      });
    });
  }
}
