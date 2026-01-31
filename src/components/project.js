import createEl from "../helpers/createEl.js";

export default function project({name}) {
    return createEl("article", {
        append: [
            createEl("p", {
                className: "project-name",
                textContent: name,
            }),
            createEl("button", {
                className: "project-remove-button",
                textContent: "Remove",
            }),
        ],
    })
}
