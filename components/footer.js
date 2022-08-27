function footer() {
    return `<footer id="footer">
    <div id="footer_top">
        <a href="https://about.codecov.io/">
            <img
                src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/codecov/codecov-circle.svg">
        </a>
        <div>
            <li>
                <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fa-brands fa-github"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fa-brands fa-youtube"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
        </div>
    </div>
    <div id="footer_middle">
        <div>
            <a href="">PRODUCT</a>
            <li>
                <a href="">Features</a>
            </li>
            <li>
                <a href="">Integrations</a>
            </li>
            <li>
                <a href="">Documentation</a>
            </li>
            <li>
                <a href="">API</a>
            </li>
            <li>
                <a href="">Status</a>
            </li>
        </div>
        <div>
            <a href="">SOLUTIONS</a>
            <li>
                <a href="">Open Source</a>
            </li>
            <li>
                <a href="">Enterprise</a>
            </li>
            <li>
                <a href="">Startups</a>
            </li>
            <li>
                <a href="">Education</a>
            </li>
        </div>
        <div>
            <a href="">CUSTOMERS</a>
            <li>
                <a href="">Customers</a>
            </li>
            <li>
                <a href="">Case Studies</a>
            </li>
            <li>
                <a href="">Community</a>
            </li>
        </div>
        <div>
            <a href="">RESOURCES</a>
            <li>
                <a href="">Webinars</a>
            </li>
            <li>
                <a href="">Blogs</a>
            </li>
            <li>
                <a href="">Documentation</a>
            </li>
        </div>
        <div>
            <a href="">COMPANY</a>
            <li>
                <a href="">Team</a>
            </li>
            <li>
                <a href="">Press</a>
            </li>
            <li>
                <a href="">Careers <span>We're Hiring</span></a>
            </li>
            <li>
                <a href="">Write for us</a>
            </li>
        </div>
        <div>
            <a href="">CONTACT US</a>
            <li>
                <a href="">Contact</a>
            </li>
            <li>
                <a href="">Demo</a>
            </li>
            <li>
                <a href="">Support</a>
            </li>
        </div>
    </div>
    <div id="footer_bottom">
        <div>
            <p>Select Language | ▼</p>
        </div>
        <div>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy</a>
            <a href="">Security</a>
            <a href="">EULA</a>
            <a href="">GDPR</a>
        </div>
        <div>
            <p>© Codecov 2022</p>
        </div>
    </div>
    <style>
//     * {
//     margin: 0px;
//     padding: 0px;
//     box-sizing: border-box;
//     font-family: "poppins", -apple-system, BlinkMacSystemFont, Roboto, "Arial", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
// }

#footer {
    background-color: #0f1b29;
    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0% 100%);
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: 100px;
    gap: 50px;
}

#footer_top {
    display: flex;
    align-items: center;
    gap: 50px;
    width: 90%;
    margin: auto;
    padding-left: 50px;
}

#footer_top div {
    display: flex;
    gap: 20px;
}

#footer_middle {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: auto;
}

#footer_middle div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

#footer_middle a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    line-height: 1.8rem;
}

#footer_middle li,
#footer_bottom p,
#footer_bottom a {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
    opacity: .6;
    text-decoration: none;
    line-height: 1.8rem;
}

#footer_middle span {
    background-color: #00ba77;
    padding: 4px 5px;
    border-radius: 5px;
    font-size: 9px;
}

#footer_middle li:hover,
#footer_bottom p:hover,
#footer_bottom a:hover,
.fa-brands:hover {
    transition-duration: .6s;
    color: white;
    opacity: 1;
}

#footer_bottom {
    display: flex;
    justify-content: space-around;
    background-color: #0c1622;
    padding: 13px 55px;
}

.fa-brands {
    color: #6c757d;
    font-size: 17px;
}

#footer_bottom>div:nth-child(2) {
    display: flex;
    gap: 25px;
}

@media screen and (max-width: 991px) {
    #footer {
        clip-path: none;
    }

    #footer_top {
        flex-direction: column;
        padding-left: 0px;
    }

    #footer_middle {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    #footer_middle div {
        align-items: center;
    }

    #footer_bottom {
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 574px) {
    #footer_middle {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media screen and (max-width: 347px) {
    #footer_bottom div:nth-child(2) {
        flex-direction: column;
        align-items: center;
    }
}

    </style>
</footer>`
}

export default footer;