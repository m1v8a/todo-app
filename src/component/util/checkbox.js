export default function checkbox(checked = false) {
  const box = document.createElement("div");
  box.className = "checkbox";
  if (checked) {
    box.classList.add("checked");
  } else {
    box.classList.remove("checked");
  }
  return box;
}
