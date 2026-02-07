import App from "../../module/App.js";
import checkbox from "./checkbox.js";

export default function checkListComponent(taskId, checkList) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const checkboxEl = checkbox(checkList.checked);

  p.textContent = checkList.name;

  checkboxEl.addEventListener("click", () =>
    App.checkCheckList(taskId, checkList.id)
  );

  li.append(checkboxEl, p);

  return li;
}
