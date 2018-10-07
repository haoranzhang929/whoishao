import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCDrawer } from "@material/drawer";
import { MDCMenu } from "@material/menu";

const drawer = document.querySelector(".mdc-drawer");
const appBar = document.querySelector("#app-bar");
const mainContextDiv = document.querySelector("#main-content");
const projectsMenu = document.querySelector(".mdc-menu");
const menuBtn = document.querySelector(".menu-button");

const menuDrawer = MDCDrawer.attachTo(drawer);
const topAppBar = MDCTopAppBar.attachTo(appBar);
const menu = new MDCMenu(projectsMenu);

topAppBar.setScrollTarget(mainContextDiv);
topAppBar.listen("MDCTopAppBar:nav", () => {
  menuDrawer.open = !menuDrawer.open;
});
menuBtn.addEventListener("click", () => {
  !menu.open ? (menu.open = true) : (menu.open = false);
});
