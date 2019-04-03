import { MDCRipple } from "@material/ripple";

const btns = document.querySelectorAll(".mdc-button");

for (let btn of btns) {
  new MDCRipple(btn);
}
