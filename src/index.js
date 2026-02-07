import header from "./component/header/header.js";
import main from "./component/main/main.js";
import App from "./module/App.js";
import LocalStorage from "./module/LocalStorage.js";
import "./style.css";

LocalStorage.init();

document.querySelector("body").append(header(), main());
