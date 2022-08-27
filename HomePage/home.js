import { mainNavbar , mainNavbarCSS } from "./navbar.js";

let temp = mainNavbar()

let style = document.getElementById ('style');

let container = document.getElementById ('container')
container.innerHTML = temp

style.innerText = mainNavbarCSS()

document.getElementById("gitLogin").addEventListener("click",myFunc);
function myFunc(){
    window.location.href="./resilient-gate-1588/login(Github).html";
}