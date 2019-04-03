import { MDCRipple } from "@material/ripple";

const allBtn = document.querySelector("#all");
const appBtn = document.querySelector("#apps");
const sitesBtn = document.querySelector("#sites");
const otherBtn = document.querySelector("#other");

new MDCRipple(allBtn);
new MDCRipple(appBtn);
new MDCRipple(sitesBtn);
new MDCRipple(otherBtn);

let onClick = className => {
  const projects = document.querySelectorAll(".project");
  for (let projectEl of projects) {
    if (!projectEl.classList.contains(className)) {
      projectEl.style.display = "none";
    } else {
      projectEl.style.display = "";
    }
  }
};

allBtn.addEventListener("click", () => {
  onClick("project");
});
appBtn.addEventListener("click", () => {
  onClick("project-app");
});
sitesBtn.addEventListener("click", () => {
  onClick("project-site");
});
otherBtn.addEventListener("click", () => {
  onClick("project-other");
});
