import "./style.css";
import App from "./modules/App.js";


App.createTodo({
    title: "example", note: "a"
});


console.log(App.getTodos());


