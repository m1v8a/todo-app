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
        if(opt.checked) r.checked = true;
        const label = document.createElement("label");
        const text = document.createElement("span");
        text.textContent = opt.textContent;
        label.append(r, text);

        li.append(label);
        ul.append(li);
    });

    return ul;
}
