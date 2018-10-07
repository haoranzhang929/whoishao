import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCDrawer } from "@material/drawer";

const drawer = document.querySelector(".mdc-drawer");
const appBar = document.querySelector("#app-bar");
const mainContextDiv = document.querySelector("#main-content");

const menuDrawer = MDCDrawer.attachTo(drawer);
const topAppBar = MDCTopAppBar.attachTo(appBar);

topAppBar.setScrollTarget(mainContextDiv);
topAppBar.listen("MDCTopAppBar:nav", () => {
  menuDrawer.open = !menuDrawer.open;
});
