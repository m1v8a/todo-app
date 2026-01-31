export default function createEl(type, opts) {
    const el = document.createElement(type);

    for (const key in opts) {
        if (typeof el[key] === "function") {
            el[key](...opts[key]);
        } else if (typeof opts[key] === "object") {
            for(const d in opts[key]) {
                el[key][d] = opts[key][d];
            }
        } else {
            el[key] = opts[key]
        }

    }

    return el;
}
