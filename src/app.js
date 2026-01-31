import TODO_APP from "./modules/TODO_APP.js";
import UI_CONTROLLER from "./modules/UI_CONTROLLER.js";
import "./style.css";

const main = document.querySelector("main");

UI_CONTROLLER.init();
TODO_APP.init();

TODO_APP.createProject({name: "All", id: "default" });





