import closeIcon from "../../icons/closeIcon.js";
import button from "./button.js";

export default function closeButton(id) {
    const b = button();
    b.classList.add("hover");
    b.id = id;

    const icon = closeIcon(iconColor);
    b.innerHTML = icon;

    return b;
}
