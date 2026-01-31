import createEl from "../helpers/createEl.js";
import TODO_APP from "../modules/TODO_APP.js";

export default function project({ project }) {
    return createEl("li", {
        append: [
            createEl("article", {
            className: "project",
            append: [
                createEl("p", {
                    className: "project-name",
                    textContent: project.name,
                }),
                createEl("button", {
                    className: "project-remove-button",
                    textContent: "Remove",
                    dataset: { id: project.id },
                }),
            ],
        })
        ]
    })
}
