import header from "./component/header/header.js";
import main from "./component/main/main.js";
import LocalStorage from "./module/LocalStorage.js";
import "./style.css";

LocalStorage.init();

document.querySelector("body").append(header(), main());

// App.createTask({title: "test"});
// const task = App.getTask("4b7ec93c-570e-4fb2-9dc4-3e5b4086a2d1");
// console.log(task);
