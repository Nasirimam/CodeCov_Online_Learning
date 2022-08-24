import { mainNavbar , mainNavbarCSS } from "./navbar.js";

let temp = mainNavbar()

let style = document.getElementById ('style');

let container = document.getElementById ('container')
container.innerHTML = temp

style.innerText = mainNavbarCSS()

