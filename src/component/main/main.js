import taskSection from "./taskSection.js";

export default function main() {
    const main = document.createElement("main");
    main.append(taskSection());
    return main;
}
