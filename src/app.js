import "./style.css";
import TODO_APP from "./modules/TODO_APP.js";


TODO_APP.createProject({
    name: "example",
});


TODO_APP.editProject("abc", {name: "new name"});


console.log(TODO_APP.getProjects());


