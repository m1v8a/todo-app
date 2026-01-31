import project from "../components/project.js";
import PubSub from "./PubSub.js";

export default class UI_CONTROLLER {

    static init() {
        PubSub.sub("project updated", ({ projects }) => this.updateProjectUI(projects));
    }

    static updateProjectUI(projects) {
        console.log("ra");
        const container = document.querySelector("#project-list");
        container.innerHTML = "";

        projects.forEach((p) => {
            container.append(project({ project: p }));
        });
    }
}
