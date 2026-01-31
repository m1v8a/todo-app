export default function createEl(type, opts) {
    const el = document.createElement(type);

    for (const key in opts) {
        if (typeof opts[key] === "object") {
            for (const d in key) {
                if (typeof el[key] === "function") {
                    el[key](...opts[key]);
                }
                el[key] = key[d];
            }
        } else if (typeof el[key] === "function") {
            el[key](...opts[key]);
        }
        el[key] = opts[key];

    }

    return el;
}
