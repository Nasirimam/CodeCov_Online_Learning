
// Made By Pranshu Singh Bisht (fw20_0423)


function stickyNavbarCSS(){

    return `
    #right-item {
        display: flex;
        width: 40%;
    }
    .button:hover {
        border: 1px solid #999;
    }
    .button {
        cursor: pointer;
        width: 25%;
        height: 54%;
        margin-left: 2%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid rgb(213, 209, 209);
        font-size: medium;
        /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
        background-color: white;
    }
    @media all and (min-width:0px) and (max-width:1286px) {
        #header {
            display: none !important;
        }
    }`
}


function stickyNavbar(){
    return `
    <header id="header"
    style="display: flex; justify-content: center;box-shadow: 0 0 20px 0 rgba(15,27,41,.15);background-color: rgb(255, 255, 255);color: rgb(33, 37, 41)">
    <nav style="width: 75%; width: 75%; display: flex; justify-content: space-between;">
        <div id="left-item" style="display: flex; justify-content: center;align-items: center;">
            <img src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg" alt="Logo"
                style="max-width: 80%;
            max-height: 36px; cursor: pointer;">
        </div>
        <div id="right-item" style="display: flex;align-items: center;">
            <h4 style="width: 50%;white-space: nowrap;cursor: pointer; font-size: 14px; color: rgb(108, 117, 125)">GET STARTED WITH</h4>

            <button class="button" onclick="window.location.href = 'https://github.com/login'">
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/github/github-icon.svg"
                    alt="GitHub" style="height: 18px; width: 16px;">
                <h5>GitHub</h5>
            </button>
            <button class="button">
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/gitlab/gitlab-icon.svg"
                    alt="GirLab" style="height: 18px; width: 16px;">
                <h5>GitLab</h5>
            </button>
            <button class="button">
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/bitbucket/bitbucket-icon.svg"
                    alt="Bitbucket" style="height: 18px; width: 16px;">
                <h5>Bitbucket</h5>
            </button>
        </div>
    </nav>
</header>
    `
}
    export {stickyNavbar,stickyNavbarCSS }

