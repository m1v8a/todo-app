export default function radio(id, options) {
    const ul = document.createElement("ul");
    ul.className = "radio-list";
    ul.id = id;
    options.forEach(opt => {
        const li = document.createElement("li");
        const r = document.createElement("input");
        r.type = "radio";
        r.name = id;
        r.id = opt.id;
        r.value = opt.value;
        const label = document.createElement("label");
        label.innerHTML = `${r.outerHTML} <span>${opt.textContent}</span>`;

        li.append(label);
        ul.append(li);
    });

    return ul;
}
