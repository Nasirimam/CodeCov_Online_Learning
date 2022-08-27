import { mainNavbar , mainNavbarCSS } from "./navbar.js";

let temp = mainNavbar()

let style = document.getElementById ('style');

let container = document.getElementById ('container')
container.innerHTML = temp

style.innerText = mainNavbarCSS()


import { footer } from "./footer.js";

let temp2 = footer()

let footer_div = document.getElementById('footer_div')

footer_div.innerHTML = temp2


// import { stickyNavbar } from "./stickyNavbar.js";

// let temp3 = stickyNavbar()

// let sticky_Nav = document.getElementById('sticky_Nav')

// sticky_Nav.innerHTML = temp3
