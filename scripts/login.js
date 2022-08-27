let popDiv = document.getElementById("popup1");
let popText = document.getElementById("popAlert");
let userData = JSON.parse(localStorage.getItem("userData"));
// console.log('userData:', userData)

let signIn = () => {

    let email = document.getElementById("eml").value;
    let password = document.getElementById("psd").value;
    let e = checkEmail(email)
    let p = checkPassword(password)
    if(email === "" || password === "" || email === "" && password === ""){
        visiblePOP()
        popText.innerHTML=`<br>All fields Are Mandatory<br><br>`
    }
    else{
        if(e === true && p === true){
            visiblePOP()
            popText.innerHTML=`<br>
                <p style="display: block;">Login Successfully</p>
                <br>
                <button onclick="goToHome()" id="goToHome">Go to Home</button>`
        }
        else{
            visiblePOP()
            popText.innerHTML=`<br>Please Fill Correct Details<br><br>`
        }
    }
}


checkEmail = (email) => {
    return userData.email === email ? true : false;
}
checkPassword = (password) => {
    console.log('userData.password === password ? true : false;:', userData.confirmPassword === password ? true : false)
    return userData.confirmPassword === password ? true : false;
}

function visiblePOP(){
    popDiv.style.visibility = "visible";
    popDiv.style.opacity = "1";
}

// close popUp
close_popUp = document.getElementById("close");
close_popUp.addEventListener("click", backPage)
function backPage(){
    // window.history.go(-1);
    popDiv.style.visibility = "hidden";
    popDiv.style.opacity = "0";
}

function goToHome(){
    window.location.href="./"
}