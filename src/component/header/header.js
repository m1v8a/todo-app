import addTaskButton from "./addTaskButton.js";
import links from "../util/links.js";

export default function header() {
    const el = document.createElement("header");

    const nav = document.createElement("nav");

    const links1 = [
        { textContent: "Today", onClick: (e) => console.log(e.target) },
        { textContent: "Upcoming", onClick: (e) => console.log(e.target) },
        { textContent: "Skipped", onClick: (e) => console.log(e.target) },
    ];

    const links2 = [
        { textContent: "Urgent", onClick: (e) => console.log(e.target) },
        { textContent: "Required", onClick: (e) => console.log(e.target) },
        { textContent: "Optional", onClick: (e) => console.log(e.target) },
    ];

    nav.append(
        addTaskButton(),
        links("nav-links", links1),
        links("nav-links", links2)
    );

    el.append(nav);
    return el;
}

