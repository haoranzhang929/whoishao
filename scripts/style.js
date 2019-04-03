import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCDrawer } from "@material/drawer";

const drawer = document.querySelector(".mdc-drawer");
const appBar = document.querySelector("#app-bar");
const mainContextDiv = document.querySelector("#main-content");
const menuBtn = document.querySelector(".menu-button");

const menuDrawer = MDCDrawer.attachTo(drawer);
const topAppBar = MDCTopAppBar.attachTo(appBar);
//const menu = new MDCMenu(projectsMenu);

topAppBar.setScrollTarget(mainContextDiv);
topAppBar.listen("MDCTopAppBar:nav", () => {
  menuDrawer.open = !menuDrawer.open;
});
