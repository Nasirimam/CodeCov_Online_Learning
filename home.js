import { stickyNavbar,stickyNavbarCSS } from "./Components/stickyNavbar.js";

console.log(stickyNavbar)


let body = document.getElementById('body')

body.innerHTML=stickyNavbar()

let style = document.getElementById('style')

console.log(stickyNavbarCSS())

style.innerHTML = stickyNavbarCSS()
