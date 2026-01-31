import project from "../components/project.js";
import PubSub from "./PubSub.js";

export default class UI_CONTROLLER {

    static init() {
        PubSub.sub("project updated", ({ projects }) => this.updateProjectUI(projects));

        this.clickListener("#open-project-form-modal-button", () => {
            const modal = this.select("#form-modal");
            modal.showModal()
        });
 
        this.clickListener("#close-modal-button", (e) => {
            e.preventDefault()
            const modal = this.select("#form-modal");
            modal.close();
        });


        this.clickListener("#project-list", (e) => {
            if(e.target.nodeName !== "BUTTON") return;
            PubSub.pub("remove project button clicked", {id: e.target.dataset.id});
        });
    }

    static updateProjectUI(projects) {
        console.log("ra");
        const container = document.querySelector("#project-list");
        container.innerHTML = "";

        projects.forEach((p) => {
            container.append(project({ project: p }));
        });
    }

    static clickListener(selector, fn) {
        const el = document.querySelector(selector);
        el.addEventListener("click", (e) => fn(e));
    }

    static select(selector) {
        return document.querySelector(selector);
    }
}
