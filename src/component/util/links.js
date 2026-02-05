export default function links(id, links) {
    const ul = document.createElement("ul");
    ul.id = id;

    links.forEach(link => {
        const li = document.createElement("li");
        li.classList.add("hover");
        li.textContent = link.textContent;
        li.addEventListener("click", (e) => link.onClick(e));
        ul.append(li);
    });

    return ul
}
