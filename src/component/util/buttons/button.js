export default function button(text, onclick) {
    const b = document.createElement("button");
    b.classList.add("btn");
    b.textContent = text;

    b.addEventListener("click", (e) => {
        onclick(e);
    });

    return b;
}
