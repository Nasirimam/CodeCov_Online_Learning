function mainNavbar(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>
    <body>
            <div id="mini_container">
                <div id="logo_div">
                    <img src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg" alt="Logo">
                </div>
                <nav id="nav_icon">
                    <ul id="nav_ul">
                        <li>
                            <a href="">Product</a>
                            <div>
                                <ul>
                                    <li><a href=""><i class="fa fa-list-alt" aria-hidden="true"></i>Features</a></li>
                                    <li><a href=""><i class="fa fa-cog" aria-hidden="true"></i>Integrations</a></li>
                                    <li><a href=""><i class="fa-regular fa-file-code"></i>Documentation</a></li>
                                    <li><a href=""><i class="fa-solid fa-signal"></i>API</a></li>
                                    <li><a href=""><i class="fa-solid fa-user-tie"></i>Status</a></li>
                                </ul>
                                <ul>
                                    <li><a href=""><i class="fa-brands fa-keycdn"></i>Open Source</a></li>
                                    <li><a href=""><i class="fa-solid fa-city"></i>Enterprise</a></li>
                                    <li><a href=""><i class="fa-solid fa-rocket"></i>Startups</a></li>
                                    <li><a href=""><i class="fa-solid fa-umbrella-beach"></i>Education</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Customers</a>
                            <div>
                                <ul>
                                    <li><a href=""><i class="fa-solid fa-building-user"></i>Our Customers</a></li>
                                    <li><a href=""><i class="fa-solid fa-people-group"></i>Community</a></li>
                                    <li><a href=""><i class="fa-solid fa-life-ring"></i>Support</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="">Resources</a>
                            <div>
                                <ul>
                                    <li><a href=""><i class="fa-solid fa-file-prescription"></i>All Resources</a></li>
                                    <li><a href=""><i class="fa-solid fa-video"></i>Webinars</a></li>
                                    <li><a href=""><i class="fa-solid fa-pencil"></i>Blog</a></li>
                                    <li><a href=""><i class="fa-regular fa-file-code"></i>Documentation</a></li>
                                    <li><a href=""><i class="fa-solid fa-people-group"></i>Community</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                <div id="end_div">
                    <ul id="end_ul">
                        <li><a href="">Login</a>
                            <div id="Login_container">
                                <div class="login_image" id="gitLogin">
                                    <img src="https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/github/github-icon.svg" alt="">
                                    <p>GitHub</p>
                                </div>
                                <div class="login_image">
                                    <img src="https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/gitlab/gitlab-icon.svg" alt="">
                                    <p>GitLab</p>
                                </div>
                                <div class="login_image">
                                    <img src="https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/bitbucket/bitbucket-icon.svg" alt="">
                                    <p>Bitbucket</p>
                                </div>
                            </div>
                        </li>
                        <li><button id="getdemobtn">Get Demo</button></li>
                    </ul>
                </div>
            </div>
    </body>
    </html>`
    
}

function mainNavbarCSS(){
    
    return`*{
        list-style: none;
        font-family: sans-serif;
        color: black;
        text-decoration: none;
    }
    #container{
        width: 100%;
        margin-bottom: 50px;
        border: 0px solid black;
        background-color: transparent;
    }
    #mini_container{
        width: 90%;
        display: flex;
        margin: auto;
        border: 0px solid blue;
        gap: 40px;
    }
    #mini_container>div{
        border: 0px solid red;
    }
    #logo_div{
        width: 20%;
    }
    #logo_div>img{
        width: 100%;
        height: 100%;
    }
    #nav_ul{
        border: 0px solid green;
        display: flex;
        gap: 20px;
        font-size: 17px;
        font-weight: 500;
    }
    
    #nav_ul>li{
        border: 0px solid gold;
        padding-top: 20px;
    }
    #nav_ul>li>div{
        display: flex;
        border: 0px solid #f07;
        background-color: white;
        position: absolute;
        visibility: hidden;
        border-radius: 6px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
    #nav_ul>li:hover>div{
        visibility: visible;
        transition-duration: 0.6s;
        padding: 10px;
    }
    
    #nav_ul>li>div>ul{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    i{
        margin-right: 10px;
    }
    
    #nav_ul>li>div>ul>li{
        margin: 0px 20px 15px -15px;
    }
    #nav_ul>li>div>ul>li>a:hover{
        color: #f07;
    }
    /* Last Div CSS */
    
    
    #end_div{
        width: 20%;
        display: flex;
    }
    #end_div>ul{
        display: flex;
        gap: 30px;
        font-size: 17px;
    }
    #end_ul{
        border: 0px solid green;
        display: flex;
        gap: 20px;
        font-size: 17px;
        font-weight: 500;
        
    }
    
    #end_ul>li{
        border: 0px solid gold;
        padding-top: 20px;
    }
    #end_ul>li:last-child{
        padding: 5px;
    }
    #end_ul>li>div{
        display: flex;
        flex-direction: column;
        border: 0px solid #f07;
        background-color: white;
        position: absolute;
        visibility: hidden;
        border-radius: 6px;
    }
    #end_ul>li:hover>div{
        visibility: visible;
        transition-duration: 1s;
        padding: 5px;
    }
    .login_image{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        border: 0px solid green;
    }
    .login_image>img{
        width: 10%;
        height: 10%;
    }
    #Login_container{
        width: 10%;
    }
    .login_image>p{
        font-size: 13px;
    }
    
    #getdemobtn{
        width: 150px;
        height: 50px;
        font-size: 20px;
        font-weight: bold;
        border: 0px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.87);
        color: white;
    }`
}


export {mainNavbar , mainNavbarCSS}