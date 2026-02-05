import taskForm from "../modal/taskForm.js";

export default function main() {
    const main = document.createElement("main");
    
    main.append(taskForm());
    return main;
}
